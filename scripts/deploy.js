/**
 * PixelCraft Studios — Resilient Differential FTP/FTPS Deployment Script
 *
 * Resilience Architecture:
 * 1. Differential Analysis (MD5 hashing): Only uploads changed or new files.
 * 2. Per-File Incremental Cache Persistence: Immediately flushes .deploy-cache.json
 *    after each successfully uploaded file. If interrupted, progress is never lost.
 * 3. Auto-Reconnect & Retry on Socket Error: Automatically recovers from ECONNRESET,
 *    socket timeouts, or control channel drops with exponential backoff & reconnection (up to 3 retries).
 * 4. Path Normalization: Automatically standardizes all Windows backslashes (\) to standard
 *    FTP forward slashes (/) across local cache and remote directory navigation.
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execSync } = require('child_process');
const ftp = require('basic-ftp');
const dotenv = require('dotenv');

// 1. Load environment variables
const projectRoot = path.resolve(__dirname, '..');
const envLocalPath = path.join(projectRoot, '.env.local');
const envPath = path.join(projectRoot, '.env');
const cachePath = path.join(projectRoot, '.deploy-cache.json');
const outDir = path.join(projectRoot, 'out');

if (fs.existsSync(envLocalPath)) {
  dotenv.config({ path: envLocalPath });
} else if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath });
}

// 2. Extract configuration
const FTP_HOST = process.env.FTP_HOST;
const FTP_USER = process.env.FTP_USER;
const FTP_PASSWORD = process.env.FTP_PASSWORD;
const FTP_PORT = parseInt(process.env.FTP_PORT || '21', 10);
const FTP_REMOTE_ROOT = process.env.FTP_REMOTE_ROOT || '/public_html';
const FTP_SECURE = process.env.FTP_SECURE === 'false'
  ? false
  : (process.env.FTP_SECURE === 'implicit' ? 'implicit' : true);
const FTP_REJECT_UNAUTHORIZED = process.env.FTP_REJECT_UNAUTHORIZED === 'true';

// CLI flags
const skipBuild = process.argv.includes('--skip-build') || process.env.SKIP_BUILD === 'true';
const forceUpload = process.argv.includes('--force') || process.env.FORCE_UPLOAD === 'true';

// Helper: Compute MD5 hash of file
function computeFileHash(filePath) {
  const buffer = fs.readFileSync(filePath);
  return crypto.createHash('md5').update(buffer).digest('hex');
}

// Helper: Format file size for human-readable output
function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

// Helper: Recursively scan directory for all files
function scanDirectory(dir, baseDir = dir) {
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(scanDirectory(fullPath, baseDir));
    } else if (entry.isFile()) {
      // Standardize relative path with forward slashes
      const relPath = path.relative(baseDir, fullPath).replace(/\\/g, '/');
      results.push({ fullPath, relPath });
    }
  }

  return results;
}

// Helper: Connect to FTP server
async function connectFTP() {
  const client = new ftp.Client(60000); // 60s socket timeout
  client.ftp.verbose = process.env.FTP_VERBOSE === 'true';

  await client.access({
    host: FTP_HOST,
    user: FTP_USER,
    password: FTP_PASSWORD,
    port: FTP_PORT,
    secure: FTP_SECURE,
    secureOptions: {
      rejectUnauthorized: FTP_REJECT_UNAUTHORIZED,
    },
  });

  return client;
}

async function deploy() {
  console.log('\n======================================================');
  console.log('🚀 PixelCraft Studios — Resilient FTP Deployment');
  console.log('======================================================\n');

  // 3. Validate credentials
  if (!FTP_HOST || !FTP_USER || !FTP_PASSWORD) {
    console.error('❌ Missing FTP Credentials!');
    console.error('\nPlease create or update .env.local with:');
    console.error('------------------------------------------------------');
    console.error('FTP_HOST="ftp.pixelcraftlk.com" # or server hostname / IP');
    console.error('FTP_USER="your-cpanel-username-or-ftp-user"');
    console.error('FTP_PASSWORD="your-ftp-password"');
    console.error('FTP_REMOTE_ROOT="/public_html"');
    console.error('------------------------------------------------------\n');
    console.error('See .env.example for full options and documentation.\n');
    process.exit(1);
  }

  // 4. Build the application (unless skipped)
  if (skipBuild) {
    console.log('⏩ Skipping build step (--skip-build detected)...\n');
  } else {
    console.log('📦 Step 1/3: Building static production export (npm run build)...');
    try {
      execSync('npm run build', {
        cwd: projectRoot,
        stdio: 'inherit',
      });
      console.log('✅ Static build completed successfully.\n');
    } catch (err) {
      console.error('\n❌ Build step failed! Deployment aborted.');
      process.exit(1);
    }
  }

  // Verify ./out exists
  if (!fs.existsSync(outDir)) {
    console.error(`❌ Output directory not found at: ${outDir}`);
    console.error('Please run "npm run build" first to generate static files.');
    process.exit(1);
  }

  const hasHtaccess = fs.existsSync(path.join(outDir, '.htaccess'));
  console.log(`📋 Output Directory Verified: ${outDir}`);
  console.log(`📄 .htaccess Present: ${hasHtaccess ? '✅ Yes' : '⚠️ Warning: Missing .htaccess'}\n`);

  // 5. Differential Analysis (Hash Tracking)
  console.log('🔍 Step 2/3: Analyzing file changes (MD5 delta sync)...');
  const allScannedFiles = scanDirectory(outDir);
  const currentHashMap = {};
  const currentFilesList = [];

  for (const item of allScannedFiles) {
    const hash = computeFileHash(item.fullPath);
    const size = fs.statSync(item.fullPath).size;
    currentHashMap[item.relPath] = hash;
    currentFilesList.push({
      fullPath: item.fullPath,
      relPath: item.relPath,
      hash,
      size,
    });
  }

  // Load previous cache and normalize keys to forward slashes
  const previousCache = {};
  if (fs.existsSync(cachePath) && !forceUpload) {
    try {
      const raw = JSON.parse(fs.readFileSync(cachePath, 'utf8'));
      const rawFiles = raw.files || raw;
      for (const [key, val] of Object.entries(rawFiles)) {
        if (typeof val === 'string') {
          previousCache[key.replace(/\\/g, '/')] = val;
        }
      }
    } catch (e) {
      console.warn('⚠️ Could not parse previous .deploy-cache.json, performing fresh upload.');
    }
  }

  // In-memory working cache initialized with known files
  const workingCache = { ...previousCache };

  function flushCache() {
    const payload = {
      lastDeployed: new Date().toISOString(),
      remoteRoot: FTP_REMOTE_ROOT,
      totalFiles: currentFilesList.length,
      files: workingCache,
    };
    try {
      fs.writeFileSync(cachePath, JSON.stringify(payload, null, 2), 'utf8');
    } catch (err) {
      console.warn(`⚠️ Warning: Cache write error: ${err.message}`);
    }
  }

  // Build upload queue
  const uploadQueue = [];
  let unchangedCount = 0;

  for (const file of currentFilesList) {
    const prevHash = previousCache[file.relPath];
    if (forceUpload || !prevHash) {
      uploadQueue.push({ ...file, status: 'new' });
    } else if (prevHash !== file.hash) {
      uploadQueue.push({ ...file, status: 'modified' });
    } else {
      unchangedCount++;
    }
  }

  // If nothing changed, exit cleanly without connecting
  if (uploadQueue.length === 0) {
    console.log('\n✨ Everything is up to date! Zero files to upload.');
    console.log(`📁 All ${unchangedCount} files match remote state.\n`);
    // Ensure cache has normalized keys
    flushCache();
    process.exit(0);
  }

  console.log(`📊 Delta Summary:`);
  console.log(`   - Total Files in Build: ${currentFilesList.length}`);
  console.log(`   - Unchanged (Skipped) : ${unchangedCount}`);
  console.log(`   - To Upload           : ${uploadQueue.length} (${uploadQueue.filter(f => f.status === 'new').length} new, ${uploadQueue.filter(f => f.status === 'modified').length} modified)\n`);

  // Sort queue by relative path to group files in the same directory together
  uploadQueue.sort((a, b) => a.relPath.localeCompare(b.relPath));

  // 6. Connect and Differential Upload with Retry & Incremental Cache
  let client = null;
  let currentRemoteDir = null;
  let uploadedCount = 0;

  try {
    console.log(`📡 Step 3/3: Connecting to ${FTP_HOST}:${FTP_PORT} (User: ${FTP_USER})...`);
    console.log(`🔒 Security Mode: ${FTP_SECURE === true ? 'FTPS (Explicit TLS)' : FTP_SECURE === 'implicit' ? 'FTPS (Implicit TLS)' : 'Plain FTP'}`);

    client = await connectFTP();
    console.log('✅ Connected securely to FTP server.\n');
    console.log(`🚀 Uploading ${uploadQueue.length} modified/new files into "${FTP_REMOTE_ROOT}"...\n`);

    // Helper: Upload single file with auto-reconnect retry
    async function uploadWithRetry(item, remoteFilePath, maxRetries = 3) {
      const remoteDir = path.posix.dirname(remoteFilePath);
      const fileName = path.posix.basename(remoteFilePath);

      for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
          if (currentRemoteDir !== remoteDir) {
            await client.ensureDir(remoteDir);
            currentRemoteDir = remoteDir;
          }

          await client.uploadFrom(item.fullPath, fileName);
          return;
        } catch (err) {
          const isLast = attempt === maxRetries;
          const errMsg = err.message || err.code || 'Socket drop';

          // Safely close dropped socket
          try {
            client.close();
          } catch (closeErr) {}
          currentRemoteDir = null; // Remote CWD is reset on reconnect

          if (isLast) {
            throw new Error(`Failed uploading "${item.relPath}" after ${maxRetries} attempts: ${errMsg}`);
          }

          const backoffSec = attempt * 2;
          process.stdout.write(`\n  ⚠️ Socket drop on "${item.relPath}" (${errMsg}). Reconnecting in ${backoffSec}s (attempt ${attempt}/${maxRetries})... `);
          await new Promise((resolve) => setTimeout(resolve, backoffSec * 1000));

          client = await connectFTP();
          process.stdout.write(`✅ Reconnected! Retrying... `);
        }
      }
    }

    // Process files sequentially
    for (let i = 0; i < uploadQueue.length; i++) {
      const item = uploadQueue[i];
      const remoteFilePath = path.posix.join(FTP_REMOTE_ROOT, item.relPath);
      const statusTag = item.status === 'new' ? '✨ NEW' : '🔄 MODIFIED';

      process.stdout.write(`  [${i + 1}/${uploadQueue.length}] ${statusTag}: ${item.relPath} (${formatBytes(item.size)})... `);

      await uploadWithRetry(item, remoteFilePath, 3);
      uploadedCount++;
      process.stdout.write(`✅\n`);

      // 1. Immediately record in-memory
      workingCache[item.relPath] = item.hash;

      // 2. Persist to disk incrementally after EVERY file
      flushCache();
    }

    // Final cache synchronization: ensure all current build files exist in cache
    for (const item of currentFilesList) {
      if (!workingCache[item.relPath]) {
        workingCache[item.relPath] = item.hash;
      }
    }
    flushCache();

    console.log('\n======================================================');
    console.log('🎉 Deployment Successful!');
    console.log(`🌐 Target: ${FTP_HOST}${FTP_REMOTE_ROOT}`);
    console.log(`📦 Summary: Uploaded ${uploadedCount} modified/new files. ${unchangedCount} files were unchanged and skipped.`);
    console.log(`💾 Cache: Fully persisted in .deploy-cache.json`);
    console.log('======================================================\n');
  } catch (err) {
    console.error('\n❌ Deployment interrupted with error:');
    console.error(err.message || err);
    console.error('\n💡 Progress Preserved:');
    console.error(` • Successfully uploaded and cached ${uploadedCount} file(s) in .deploy-cache.json.`);
    console.error(' • Re-running "npm run deploy" (or "npm run deploy -- --skip-build") will instantly skip them and resume seamlessly.\n');
    process.exit(1);
  } finally {
    if (client) {
      try {
        client.close();
      } catch (e) {}
    }
  }
}

deploy();

/**
 * PixelCraft Studios — Automated Namecheap cPanel FTP/FTPS Deployment Script
 *
 * This script:
 * 1. Loads FTP credentials from .env.local (or .env).
 * 2. Compiles Next.js static export via `npm run build` (generates ./out).
 * 3. Connects securely to Namecheap cPanel via FTP/FTPS.
 * 4. Syncs ./out directly into /public_html (or custom FTP_REMOTE_ROOT).
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const ftp = require('basic-ftp');
const dotenv = require('dotenv');

// 1. Load environment variables
const projectRoot = path.resolve(__dirname, '..');
const envLocalPath = path.join(projectRoot, '.env.local');
const envPath = path.join(projectRoot, '.env');

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

// Check for CLI flags
const skipBuild = process.argv.includes('--skip-build') || process.env.SKIP_BUILD === 'true';

async function deploy() {
  console.log('\n======================================================');
  console.log('🚀 PixelCraft Studios — cPanel FTP Deployment');
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

  // 4. Build the application
  const outDir = path.join(projectRoot, 'out');

  if (skipBuild) {
    console.log('⏩ Skipping build step (--skip-build detected)...');
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

  // 5. Connect and Upload via basic-ftp
  const client = new ftp.Client(60000); // 60s timeout
  client.ftp.verbose = process.env.FTP_VERBOSE === 'true';

  let uploadedFilesCount = 0;
  let lastLoggedFile = '';

  client.trackProgress(info => {
    if (info.type === 'upload' && info.name && info.name !== lastLoggedFile) {
      lastLoggedFile = info.name;
      uploadedFilesCount++;
      const mb = (info.bytesOverall / (1024 * 1024)).toFixed(2);
      process.stdout.write(`\r  ⬆️  [${uploadedFilesCount}] Uploading: ${info.name.padEnd(40).slice(0, 40)} (${mb} MB synced)`);
    }
  });

  try {
    console.log(`📡 Step 2/3: Connecting to ${FTP_HOST}:${FTP_PORT} (User: ${FTP_USER})...`);
    console.log(`🔒 Security Mode: ${FTP_SECURE === true ? 'FTPS (Explicit TLS)' : FTP_SECURE === 'implicit' ? 'FTPS (Implicit TLS)' : 'Plain FTP'}`);

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

    console.log('✅ FTP Connection established successfully.\n');

    console.log(`📂 Step 3/3: Syncing "./out" -> "${FTP_REMOTE_ROOT}" on remote server...`);
    await client.ensureDir(FTP_REMOTE_ROOT);
    await client.uploadFromDir(outDir, FTP_REMOTE_ROOT);

    console.log('\n\n======================================================');
    console.log('🎉 Deployment Successful!');
    console.log(`🌐 Target: ${FTP_HOST}${FTP_REMOTE_ROOT}`);
    console.log(`📦 Synced: ${uploadedFilesCount} files successfully to cPanel.`);
    console.log('======================================================\n');
  } catch (err) {
    console.error('\n\n❌ Deployment Failed with error:');
    console.error(err.message || err);
    console.error('\n💡 Troubleshooting Tips:');
    console.error(' 1. Verify FTP_HOST, FTP_USER, and FTP_PASSWORD in .env.local.');
    console.error(' 2. If using Namecheap cPanel, ensure FTP account has access to /public_html.');
    console.error(' 3. Try setting FTP_SECURE="false" in .env.local if explicit FTPS is not supported on your port.');
    console.error(' 4. If using cPanel IP/hostname, check firewall whitelist in cPanel.\n');
    process.exit(1);
  } finally {
    client.close();
  }
}

deploy();

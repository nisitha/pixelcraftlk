# PixelCraft Studios — Asset Inventory & Visual Asset Specification

**Objective**: Comprehensive catalog of all asset types required to build the PixelCraft website matching Scalient's design fidelity, with 100% compliant, original PixelCraft branding and high-resolution assets.

---

## 1. Compliance & Asset Guidelines

In strict compliance with project rules:
1. **Zero Copying of Restricted Assets**: No private client logos, copyrighted photography, proprietary illustrations, or author headshots from Scalient may be used.
2. **Original Vector & SVG Architecture**: All icons, UI arrows, badges, checkmarks, and brand marks must be clean, lightweight SVGs or modern icon libraries (Lucide React / Heroicons / custom SVG paths).
3. **No Rendered Text or UI in Images**: The image generator must NOT render text, numbers, buttons, or website screenshots. All UI elements, badges, and counters are rendered natively in HTML/CSS/React.
4. **Optimized Formats**: All photographic assets must be WebP / AVIF format with explicit aspect-ratio containers to eliminate Cumulative Layout Shift (CLS).

---

## 2. Environment Tool Availability Status

* **Nano Banana Pro**: Not available / not registered as a standalone tool or CLI in the current execution environment.
* **Alternative Environment Tool**: Google Cloud Code native `generate_image` tool is available in Antigravity IDE.
* **Policy Compliance**: Per instruction (*"If Nano Banana Pro is unavailable, provide the prepared prompts and report the limitation. Do not silently substitute another image generator"*), detailed generation prompts have been formulated below without silent substitution.

---

## 3. Verified Existing Assets (Hero Section — No Duplication Required)

Per instruction (*"Do not generate duplicate images for sections that already have suitable permitted assets"*), the Hero Section has been inspected and confirmed to have valid, high-resolution permitted assets already in place:

| Filename | Dimensions | Format | Intended Placement | Status | Verification |
|---|---|---|---|---|---|
| `public/hero/team-collab.jpg` | `1024x1365` (3:4) | JPEG / WebP optimized | Hero Card 1 (Showcase Photo) | **Active** | Verified on disk (739 KB). Monochromatic studio collaboration photo matching dark agency aesthetic. |
| `public/hero/world-map.svg` | `280x140` (2:1) | SVG Vector | Hero Card 5 (Global Deployment) | **Active** | Verified on disk (2.5 KB). Stylized dotted world map silhouette. |

---

## 4. Genuinely Required Assets & Dedicated Generation Prompts

### A. Portfolio / Case Study Showcase Covers (Section 4 — Best Works)

#### 1. `portfolio/growth-engine.webp`
* **Asset Purpose**: Visual cover for the "Growth Engine" enterprise data analytics & SaaS engineering platform.
* **Subject and Environment**: Abstract 3D high-performance computing node with layered translucent glass telemetry slabs, subtle internal fiber-optic circuitry glowing softly in a sleek dark architectural void.
* **Composition and Focal Point**: Floating diagonal composition angled at 30 degrees, central focus on glowing data crystal core with ambient volumetric refraction.
* **Lighting and Material Details**: Subtle edge rim lighting, frosted acrylic and dark obsidian glass materials, micro-beveled reflections.
* **Brand Color Direction**: Deep teal-charcoal backdrop (`#080d0d`), subtle electric lime edge highlights (`#bcea3e`), dark slate shadows (`#111616`).
* **Camera and Perspective**: 85mm medium telephoto, cinematic shallow depth of field (f/2.8), isometric-leaning three-quarters perspective.
* **Image Aspect Ratio**: `16:10` (or `4:3`).
* **Negative Instructions**: No text, no typography, no UI buttons, no graphs, no watermarks, no human faces, no stocky generic vectors.
* **Intended Responsive Crop**: Center-weighted framing; critical visual elements contained in the central 70% zone for clean 16:9 and 4:3 responsive crops.

#### 2. `portfolio/market-magnet.webp`
* **Asset Purpose**: Visual cover for "Market Magnet" AI-driven eCommerce conversion & dynamic marketing architecture.
* **Subject and Environment**: Floating geometric sphere composed of interlocking matte-black curved shields and iridescent magnetic ribbons suspended in an ambient dark space.
* **Composition and Focal Point**: Centered dynamic sculpture with radial ribbons curling inward toward a concentrated light point.
* **Lighting and Material Details**: Studio key light from upper right, soft caustic reflections on matte anodized metal, subtle internal bioluminescent glow.
* **Brand Color Direction**: Charcoal black (`#080d0d`), electric lime accents (`#bcea3e`), subtle indigo undertone (`#151a24`).
* **Camera and Perspective**: 50mm architectural lens, eye-level cinematic shot, subtle natural motion blur on peripheral ribbons.
* **Image Aspect Ratio**: `16:10`.
* **Negative Instructions**: No words, no numbers, no shopping carts, no logos, no clip art, no low-resolution artifacts.
* **Intended Responsive Crop**: Radial center focus, scales down cleanly to mobile without loss of focal subject.

#### 3. `portfolio/market-motion.webp`
* **Asset Purpose**: Visual cover for "Market Motion" interactive brand identity & kinetic digital design system.
* **Subject and Environment**: Kinetic 3D ribbon sculpture weaving through dark space, resembling a high-speed aerodynamic ribbon with fluid glass and chrome textures.
* **Composition and Focal Point**: S-curve sweeping from bottom left to upper right, creating strong visual motion and leading the viewer's eye across the canvas.
* **Lighting and Material Details**: Dual rim lighting (cool white and subtle electric lime), frosted glass with internal light refraction, polished gunmetal chrome.
* **Brand Color Direction**: Deep obsidian (`#080d0d`), deep titanium (`#151a1a`), crisp neon lime edge illumination (`#bcea3e`).
* **Camera and Perspective**: Wide-angle 35mm dynamic perspective, high visual energy, sharp focus on central ribbon loop.
* **Image Aspect Ratio**: `16:10`.
* **Negative Instructions**: No text, no letters, no screenshots, no browser mockups, no cartoon styles.
* **Intended Responsive Crop**: Wide hero container; S-curve remains visually balanced even when cropped to 1:1 on mobile cards.

#### 4. `portfolio/tidal-strategy.webp`
* **Asset Purpose**: Visual cover for "Tidal Strategy" institutional fintech banking, algorithmic liquidity & asset management.
* **Subject and Environment**: Minimalist monolithic architectural pavilion with fluid dark liquid mercury waves flowing around sharp geometric dark stone pillars.
* **Composition and Focal Point**: Architectural landscape with dramatic vertical stone forms juxtaposed against smooth undulating chrome waves.
* **Lighting and Material Details**: Dramatic low-angle studio lighting, matte black slate stone texture, glossy liquid metal reflections.
* **Brand Color Direction**: Monochromatic slate (`#111616`, `#6f7781`) with micro-accents of electric lime glow along wave crests.
* **Camera and Perspective**: 70mm cinematic perspective, low angle looking slightly upward, museum-grade architectural photography.
* **Image Aspect Ratio**: `16:10`.
* **Negative Instructions**: No currency symbols, no charts, no stock market tickers, no text, no human figures.
* **Intended Responsive Crop**: Balanced horizontal arrangement; pillars remain grounded across all responsive widths.

#### 5. `portfolio/trend-beacon.webp`
* **Asset Purpose**: Visual cover for "Trend Beacon" predictive intelligence & real-time trend forecasting engine.
* **Subject and Environment**: Minimalist optical beacon sculpture composed of stacked frosted glass lenses and floating geometric prism rings in an infinite dark studio.
* **Composition and Focal Point**: Vertical cylindrical beacon centered along the vertical third, emitting a soft collimated upward beam of ambient light.
* **Lighting and Material Details**: Volumetric light beam, micro-faceted prism dispersals, satin matte polymer finishes.
* **Brand Color Direction**: Charcoal black (`#080d0d`), soft neon lime refraction (`#bcea3e`), dark graphite surfaces.
* **Camera and Perspective**: 85mm portrait-style architectural capture, razor-sharp focus on the central prism ring.
* **Image Aspect Ratio**: `16:10`.
* **Negative Instructions**: No text, no UI elements, no wireframes, no cluttered background elements.
* **Intended Responsive Crop**: Vertical third alignment preserves focal structure when cropped into portrait or landscape cards.

---

### B. Client Testimonial Avatars (Section 9 — Feedback & Testimonials)

#### 1. `testimonials/avatar-marcus.webp`
* **Asset Purpose**: Client portrait for Marcus Vance, Chief Technology Officer at Nexus Capital.
* **Subject and Environment**: Professional portrait of a 40-year-old male CTO with neat short beard and modern dark turtleneck in a softly blurred minimalist dark architectural studio.
* **Composition and Focal Point**: Clean head-and-shoulders composition, subject looking directly into the lens with an engaging, confident, approachable expression.
* **Lighting and Material Details**: Soft studio portrait lighting, gentle rim light separating shoulders from the dark background, natural skin tones.
* **Brand Color Direction**: Neutral dark charcoal background (`#111616`), natural warm studio skin tones.
* **Camera and Perspective**: 85mm portrait prime lens, f/2.0 aperture for creamy bokeh background.
* **Image Aspect Ratio**: `1:1` (Square, circular crop).
* **Negative Instructions**: No text, no watermarks, no exaggerated smiles, no corporate stock photo cliches, no loud colored backgrounds.
* **Intended Responsive Crop**: Center-weighted circle avatar (`64x64px` to `120x120px`).

#### 2. `testimonials/avatar-sarah.webp`
* **Asset Purpose**: Client portrait for Sarah Chen, VP of Digital Product at Veloce Systems.
* **Subject and Environment**: Professional portrait of a 35-year-old East Asian female product executive wearing modern dark tailored blazer in an architectural office setting.
* **Composition and Focal Point**: Centered bust-up portrait, natural warm smile, direct eye contact with the viewer.
* **Lighting and Material Details**: Diffused daylight key light, subtle rim light on hair, authentic executive aesthetic.
* **Brand Color Direction**: Deep dark background tones (`#0e1414`), clean natural lighting.
* **Camera and Perspective**: 90mm portrait lens, shallow depth of field.
* **Image Aspect Ratio**: `1:1` (Square, circular crop).
* **Negative Instructions**: No text, no studio backdrops with harsh shadows, no heavy filters, no unnatural airbrushing.
* **Intended Responsive Crop**: Circular crop centered on face.

#### 3. `testimonials/avatar-elena.webp`
* **Asset Purpose**: Client portrait for Elena Rostova, Head of Brand & Growth at Horizon Ventures.
* **Subject and Environment**: Professional portrait of a 32-year-old European female brand director in minimalist charcoal knitwear with a confident, forward-thinking demeanor.
* **Composition and Focal Point**: Slight three-quarter head turn, shoulders relaxed, looking toward camera with focused warmth.
* **Lighting and Material Details**: Soft ambient architectural light, gentle edge separation from dark background.
* **Brand Color Direction**: Monochromatic dark studio aesthetic (`#080d0d`), natural skin highlights.
* **Camera and Perspective**: 85mm prime lens, f/1.8 aperture, soft cinematic background falloff.
* **Image Aspect Ratio**: `1:1` (Square, circular crop).
* **Negative Instructions**: No text, no clip art, no cartoonish rendering, no generic stock poses.
* **Intended Responsive Crop**: Circular crop centered on face.

---

### C. Editorial Blog & Market Insights Covers (Section 10 — Market Insights)

#### 1. `blog/blog-growth-strategy.webp`
* **Asset Purpose**: Article cover for *"The Fatal Flaw in Modern Enterprise Growth Strategy"*.
* **Subject and Environment**: Abstract conceptual architecture featuring an intricate labyrinth of black obsidian bridges and staircases converging toward a glowing focal portal.
* **Composition and Focal Point**: Symmetrical perspective looking down a majestic dark corridor, focal portal glowing in the distance.
* **Lighting and Material Details**: High-contrast chiaroscuro lighting, glossy dark stone reflections, delicate volumetric light rays.
* **Brand Color Direction**: Charcoal black (`#080d0d`), subtle lime accent rays (`#bcea3e`), dark slate shadows.
* **Camera and Perspective**: 24mm architectural wide angle, dramatic vanishing point perspective.
* **Image Aspect Ratio**: `16:9` (`1280x720`).
* **Negative Instructions**: No text, no book titles, no arrows, no cartoon illustration, no stock infographic icons.
* **Intended Responsive Crop**: Center vanishing point remains centered across desktop and mobile aspect ratios.

#### 2. `blog/blog-lookalike-audiences.webp`
* **Asset Purpose**: Article cover for *"Engineering High-Conversion Lookalike Audiences with Precision Data"*.
* **Subject and Environment**: Abstract 3D visualization of interconnected constellation nodes and luminous data strands floating in a deep dark space, forming complex geometric crystalline clusters.
* **Composition and Focal Point**: Dense crystalline cluster on the right third, tapering into sparse floating stardust particles toward the left.
* **Lighting and Material Details**: Bioluminescent point lights at node intersections, translucent optic fiber lines, soft ambient particle haze.
* **Brand Color Direction**: Deep navy-charcoal canvas (`#080d0d`), electric lime node points (`#bcea3e`), subtle purple-blue filaments (`#7970ff`).
* **Camera and Perspective**: Macro telephoto lens, extreme shallow depth of field, sharp foreground nodes with blurred background particles.
* **Image Aspect Ratio**: `16:9` (`1280x720`).
* **Negative Instructions**: No words, no numbers, no fake digital code overlays, no human heads, no generic clip art.
* **Intended Responsive Crop**: Balanced across 16:9 and 4:3 viewports.

#### 3. `blog/blog-vanity-metrics.webp`
* **Asset Purpose**: Article cover for *"The Hidden Cost of Vanity Metrics in High-Velocity Product Teams"*.
* **Subject and Environment**: Conceptual minimalist still-life featuring floating obsidian monoliths and polished glass spheres suspended in perfect zero-gravity equilibrium above a dark reflecting pool.
* **Composition and Focal Point**: Horizontal balance of sculptural geometric solids, calm reflecting water below doubling the silhouettes.
* **Lighting and Material Details**: Cool overhead directional lighting, pristine mirror reflections on water surface, crisp refractive glass caustics.
* **Brand Color Direction**: Deep dark charcoal (`#080d0d`), cool white highlights, subtle lime reflection glints (`#bcea3e`).
* **Camera and Perspective**: 50mm eye-level perspective, tranquil and intellectual editorial art direction.
* **Image Aspect Ratio**: `16:9` (`1280x720`).
* **Negative Instructions**: No charts, no pie graphs, no percentage numbers, no text, no stock business figures.
* **Intended Responsive Crop**: Horizontal equilibrium preserved across all responsive devices.

---

## 5. Summary & Next Steps

1. **Hero Section Assets**: Fully satisfied by existing verified assets (`team-collab.jpg` & `world-map.svg`). No duplicate generation required.
2. **Upcoming Section Assets**: 11 detailed generation prompts prepared according to the required specification.
3. **Execution Choice**: If generation via the native Google Cloud Code `generate_image` tool is requested, these 11 assets can be generated and placed into `public/portfolio/`, `public/testimonials/`, and `public/blog/` upon user approval.

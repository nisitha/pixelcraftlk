# Scalient vs. PixelCraft — 1:1 Parity Gap Analysis

**Reference**: [https://scalient.webflow.io/](https://scalient.webflow.io/)  
**Current Build**: `http://localhost:3000` / `pixelcraftlk.com`  
**Audit Date**: October 21, 2026

---

## 1. Global & Architectural Theme Parity
| Feature | Scalient Reference | Current PixelCraft Implementation | Gap & Required Action |
|---|---|---|---|
| **Canvas Palette Architecture** | Alternating **Dark / Light / Dark / Light / Dark** canvas sections:<br>• Hero: Dark `#080d0d`<br>• About & Works: **Light `#f4f4f6`**<br>• Trusted, Services, Pricing, Numbers: Dark `#080d0d`<br>• Testimonials & Blog: **Light `#f4f4f6`**<br>• CTA Ribbons: Dual Angled Lime & Dark<br>• Footer: Dark `#080d0d` | Monolithic all-dark background throughout all sections (`--dark-color: #080d0d`). | **Critical**: Implement authentic alternating dark/light canvas sections matching Scalient. |
| **Typography Scale & Font Weights** | Inter Display with tight negative tracking (`-0.04em`), uppercase tracking on badges, clean high-contrast black typography on light sections. | Mixed tracking, light typography on dark everywhere. | Adjust typography colors and weights per light/dark container context. |
| **Smooth Scrolling** | Butter-smooth physics-based inertial scrolling. | Browser default native scroll with partial GSAP scrub. | Integrate Lenis smooth scroll synced with GSAP `ScrollTrigger.update`. |

---

## 2. Section-by-Section 1:1 Comparison

### Section 1: Navbar & Global Navigation
- **Reference**:
  - Floating capsule / pill nav container with subtle border (`rgba(255,255,255,0.1)`), backdrop blur (`16px`), and rounded corners.
  - Left brand logo with lime green square accent icon (`■ Scalient`).
  - Nav links: `Company`, `All Pages ⌵`, `Works`, `Pricing`, `Resources`.
  - Right: Cart trigger pill with lime `0` counter badge + solid white `Contact Now` button.
- **PixelCraft**:
  - Navbar expands full-width across viewport instead of floating pill container.
  - Cart and CTA buttons present, but navbar container padding and floating aesthetics need refinement.

### Section 2: Hero Section
- **Reference**:
  - Badge: White pill `New` + `No Hidden Pricing →`.
  - Headline: `Fueling the Next` / `Generation of Brands` in tight bold sans display.
  - Subtitle: `Powering bold ideas with strategy, creativity, and growth.`
  - Buttons: Lime green `Get Started →` + Dark glass `▶ Watch Demo`.
  - Bottom 5 Showcase Cards:
    1. Grayscale team collaboration photo with overlapping top-right white badge `■ Strategy & Design`.
    2. Solid white card with rolling `200+` / `250+` counter.
    3. Dark glass card `Trusted & Transparent Engineering` with shield badge.
    4. Dark glass card `Trusted & Transparent Growth` with conversion chart / sparkline.
    5. Solid white card `20+ Global Enterprise drives innovation` with country pills (`Mexico`, `Australia`, `London`, `New York`, `Singapore`) and 3D globe graphic.
  - Concentric arch rings with radial lime bottom glow.
- **PixelCraft**:
  - Cards and layout exist, but spacing, bottom horizon alignment, and transitions into the light About section must be perfected.

### Section 3: About / Editorial Statement Section
- **Reference**:
  - **LIGHT BACKGROUND** (`#f4f4f6` / `#ffffff`).
  - Left column: Small muted gray label `About Scalient`.
  - Right column: Oversized editorial headline scrubbed character-by-character / word-by-word from muted gray (`#b5b5be`) to pure black (`#080d0d`).
  - Below statement: Two rounded grayscale team photographs side-by-side, paired with right-aligned subhead:
    `Our Bold and` <br> `Brilliant Thinkers` <br> `Learn More →` (lime button).
- **PixelCraft**:
  - Currently rendered on dark background with dark-to-white scrub.
  - Missing the two lower team photos, "Our Bold and Brilliant Thinkers" subhead, and the "Learn More" lime button on the light canvas.

### Section 4: Works / Portfolio Section
- **Reference**:
  - **CONTINUES ON LIGHT BACKGROUND** (`#f4f4f6`).
  - Gigantic heading:
    `OUR BEST`
    `WOR [ANIMATED PILL/VIDEO] KS`
  - Portfolio project cards:
    - Full-width rounded card container with 3D graphic renders (e.g., `Market Magnet`, `Tidal Strategy`).
    - Project info bar below image: Left title `Market Magnet` + date `March - 2020`, Right link `View Project →`.
    - Curtain clip-path reveal and smooth image un-scale on scroll.
  - Bottom CTA: Centered lime green button `View Works →`.
- **PixelCraft**:
  - Currently rendered on dark background.
  - Need to switch to light background with crisp card borders, correct typography colors, and bottom `View Works →` CTA button.

### Section 5: Trusted Brands Logo Marquee
- **Reference**:
  - **TRANSITION TO DARK CANVAS** (`#080d0d`).
  - Section badge: `■ Trusted by Leading Brands` with lime square glyph.
  - Infinite horizontal ticker of monochrome brand logos with soft left/right edge mask gradient.
- **PixelCraft**:
  - Exists, but needs sharp dark section boundary and exact spacing.

### Section 6: Growth Services Section
- **Reference**:
  - Dark background (`#080d0d`).
  - Heading: `Solutions Tailored for Your Growth`.
  - Right subhead: `We fuel bold ideas, driving them forward with sharp strategy` + `Get Started →` (lime button).
  - 4 service cards in a responsive grid (`Content Marketing`, `Marketing Automation`, `Influencer Marketing`, `Email Marketing`).
  - **Card Hover Effect**: When hovered, card inverts to pure white with dark text, subtle tilt, and lime accent icon!
- **PixelCraft**:
  - Implemented with lime border glow, but needs the authentic Scalient card inversion hover effect (turning card white on hover with smooth transition).

### Section 7: Pricing & Plans Section
- **Reference**:
  - Dark background (`#080d0d`).
  - **Giant faint watermark in background**: `PRICING` in oversized outline/faint gray text.
  - Pill badge: `Our Plans` with lime border.
  - Heading: `Pricing and Plans Tailored to any Team`.
  - Billing switcher: Pill toggle with active lime pill for `Monthly` and `Yearly`.
  - 3 Tiers:
    - `Beginners` ($799 /mo) with white button.
    - `Professional` ($999 /mo) with lime button and inner bottom lime ambient glow.
    - `Enterprise` ($1035 /mo) with white button.
  - Circular checkmark features list.
- **PixelCraft**:
  - Missing the giant `PRICING` background watermark text.
  - Toggle switch and professional tier bottom glow need 1:1 color alignment.

### Section 8: Metrics & Numbers Section
- **Reference**:
  - Dark background (`#080d0d`).
  - Heading: `The Numbers Behind Success`.
  - Right: `Strategy, creativity, and growth - the engine for every bold idea.` + lime CTA button.
  - 4 elevated stat cards with animated counter interpolation.
- **PixelCraft**:
  - Present, needs alignment with the exact heading cluster layout.

### Section 9: Testimonials / Feedback Section
- **Reference**:
  - **LIGHT BACKGROUND** (`#f4f4f6`).
  - Heading: `Real People, Real Results Feedback` (black text) + subhead.
  - **Signature 3D Stacked Card Deck**:
    - Cards stacked on top of each other with slight tilt angles:
      - Black card (`#080d0d`) at back
      - Vibrant purple card (`#7970ff`) in middle
      - Electric lime card (`#bcea3e`) in front with dark text and author avatar.
    - Cards fan out or cycle interactively on scroll!
- **PixelCraft**:
  - Currently rendered as a dark grid instead of the signature tilted card deck on light canvas.

### Section 10: Blog / Market Insights Section
- **Reference**:
  - **LIGHT BACKGROUND** (`#f4f4f6`).
  - Heading: `Market Insights and our Strategy` + right `View Blogs →` (lime button).
  - 3 clean white cards with category pills (`Marketing`, `Clarity`, `Revenue`), high-res 3D graphic covers, bold title, excerpt, and author avatars with dates.
- **PixelCraft**:
  - Currently rendered on dark canvas with dark cards. Must be upgraded to light canvas with clean white cards.

### Section 11: CTA Ribbon Marquee
- **Reference**:
  - **Dual Angled/Tilted Ribbon Banners**:
    - Ribbon 1 (background): Electric lime (`#bcea3e`) banner tilted at `-2deg` or `+2deg` with black text `Let's Get Started ✳`.
    - Ribbon 2 (foreground): Dark (`#080d0d`) banner tilted at opposite angle with white text `Let's Get Started ✳`.
    - Both ribbons scroll infinitely in opposite or parallax directions across the full width!
- **PixelCraft**:
  - Currently a single horizontal flat ribbon. Must be upgraded to the dual angled intersecting ribbons.

### Section 12: Footer Section
- **Reference**:
  - Deep dark background (`#080d0d`).
  - Left: `Sign up for our newsletter today.` + dark pill input with lime `Subscribe` button.
  - 4 columns: `Main Pages`, `Inner Pages`, `Utility Pages`, `Social Media`.
  - Bottom copyright bar with privacy, license, and terms.
  - **Giant Watermark Text**: Oversized faint `PixelCraft` / `Scalient` spanning the full base width.
- **PixelCraft**:
  - Structure is close, but newsletter input styling, hover lime glow on links, and watermark opacity need exact 1:1 alignment.

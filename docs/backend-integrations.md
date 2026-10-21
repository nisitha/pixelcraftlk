# PixelCraft Studios — Backend Integrations & Service Setup

This document outlines the required credentials, environment variables, and third-party provider configurations required to transition PixelCraft Studios from local development/preview to full live production delivery.

---

## 1. Contact Form Email Delivery (Resend API)

The contact route handler is located at [`app/api/contact/route.ts`](file:///d:/Antigravity%20Project/pcs/app/api/contact/route.ts).

### Current State
- **Validation**: Strict two-layer validation (Client-side via [`components/forms/ContactForm.tsx`](file:///d:/Antigravity%20Project/pcs/components/forms/ContactForm.tsx) and Server-side via `app/api/contact/route.ts`).
- **Anti-Spam**: Invisible honeypot field (`website_hp`). If a bot populates this input, the request is immediately rejected with HTTP 400.
- **Delivery Mode**: When `RESEND_API_KEY` is not present, submissions are logged to server console telemetry with an explicit configuration notice. When `RESEND_API_KEY` is present, it automatically dispatches via Resend REST API (`https://api.resend.com/emails`).

### Required Production Environment Variables
To activate real production email delivery to the PixelCraft team:
1. Create or update `.env.local` (or production host environment settings, e.g., Vercel / Cloudflare):
   ```bash
   # Resend API Key (obtain from https://resend.com/api-keys)
   RESEND_API_KEY="re_xxxxxxxxxxxxxxxxxxxxxxxx"

   # Recipient email inbox for lead intake
   CONTACT_RECIPIENT_EMAIL="hello@pixelcraftlk.com"
   ```
2. Verify domain sending records in Resend (SPF, DKIM, DMARC) for `@pixelcraftlk.com`.
3. Update the `from` address in `app/api/contact/route.ts` from `onboarding@resend.dev` to `inquiries@pixelcraftlk.com` once the custom domain is verified.

---

## 2. Commerce & Retainer Checkout Integration (Stripe)

The checkout flow is located at [`app/checkout/page.tsx`](file:///d:/Antigravity%20Project/pcs/app/checkout/page.tsx).

### Current State
- Interactive retainer tier selection (`Beginners`, `Professional`, `Enterprise`).
- Billing frequency toggle (Monthly / Yearly with 20% discount applied).
- Dynamic line item summary, calculation of fees, VAT/tax breakdown, and client detail intake.
- Scope reservation confirmation with instant onboarding timeline generation.

### Required Production Setup for Direct Gateway Charging
If credit card / ACH payments are to be collected directly on-site:
1. Register a Stripe account.
2. Obtain API keys and set:
   ```bash
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_live_xxxxxxxxxxxxxxxxxxxxxxxx"
   STRIPE_SECRET_KEY="sk_live_xxxxxxxxxxxxxxxxxxxxxxxx"
   STRIPE_WEBHOOK_SECRET="whsec_xxxxxxxxxxxxxxxxxxxxxxxx"
   ```
3. Implement Stripe Checkout Session or Elements integration in `app/api/checkout/session/route.ts`.

---

## 3. Headless CMS Integration (Optional Future Scope)

Current content for projects, services, blog articles, and careers is structured as typed local CMS datasets in [`lib/data/`](file:///d:/Antigravity%20Project/pcs/lib/data/) with full Next.js dynamic routing (`generateStaticParams`).

### Future Provider Options:
- **Sanity.io** or **Contentful** or **Strapi**.
- If connected in Phase 6 or later, credentials (`SANITY_PROJECT_ID`, `SANITY_DATASET`) will be added to `.env.local` without breaking existing type contracts.

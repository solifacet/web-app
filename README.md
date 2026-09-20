# Solifacet

> **"Every facet, verified."**

**Solifacet** is a curated online marketplace for fine jewelry and certified precious stones. Built with a "quiet luxury" ethos, the platform unites discerning collectors, independent jewelers, and master lapidaries with verified provenance, accredited gemological reports, and escrow-secured settlement.

---

## Brand & Philosophy

- **Quiet Luxury**: Restrained, editorial, and confident aesthetic. Generous negative space, sharp refined typography, and honest copy without artificial urgency or inflated claims.
- **Trust-Led Architecture (Phase 1)**:
  - **Authenticated Listings**: Independent laboratory reports (GIA, IGI, SSEF) and macroscopic inspection documentation.
  - **Verified Sellers**: White-glove manual onboarding for vetted jewelers, dealers, and collectors.
  - **Escrow Settlement**: Buyer funds are held safely until the piece is delivered, inspected, and verified.

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) via [vinext](https://vinext.dev/)
- **Hosting & Edge**: [Cloudflare Workers](https://developers.cloudflare.com/workers/)
- **Styling**: Tailwind CSS with custom design tokens (`#121110` background, `#C9A876` gold accent)
- **Database & Auth**: Supabase (PostgreSQL, Row Level Security)
- **Payments & Escrow**: Stripe Connect (delayed transfer & manual verification)

---

## Development

Install dependencies and run the local development server:

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build production Worker bundle
pnpm run build

# Preview production Worker locally with Wrangler
pnpm run preview
```

---

## Project Structure

```
solifacet/
├── app/
│   ├── components/      # Client and UI components (e.g. WaitlistForm)
│   ├── globals.css      # Design tokens, color palette, editorial typography
│   ├── layout.tsx       # Root layout, Open Graph, SEO metadata, JSON-LD
│   ├── page.tsx         # Quiet luxury landing page & trust architecture
│   ├── robots.ts        # Next.js robots metadata route
│   └── sitemap.ts       # Next.js sitemap metadata route
├── public/
│   ├── icon.svg         # Brand geometric facet emblem
│   ├── og-image.png     # Open Graph social sharing preview
│   ├── robots.txt       # Crawler indexing directives
│   ├── sitemap.xml      # XML sitemap
│   └── site.webmanifest # Web application manifest
├── AGENTS.md            # Persistent instructions and design rules
└── wrangler.jsonc       # Cloudflare Workers configuration
```

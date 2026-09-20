# Solifacet — Agent Instructions

This file is the persistent context for any AI coding agent (Claude Code, or
any AGENTS.md-compatible tool) working on this repository. Read this in full
before making any change. If something here conflicts with a one-off
instruction in chat, ask which should win rather than guessing.

> **Claude Code users:** copy or symlink this file to `CLAUDE.md` at the repo
> root as well — that's the filename Claude Code loads automatically.

---

## 1. What we're building

**Solifacet** is a curated online marketplace for fine jewelry and precious
stones. The founder is a solo, non-technical founder — you (the agent) are
doing the majority of the implementation work. Optimize for correctness,
safety, and clarity over cleverness.

**Phased roadmap — build in this order, do not skip ahead:**

1. **Phase 1 (current, build this now):** A trust-led marketplace. Verified
   sellers, authenticated listings, escrow-style protected payments,
   white-glove founding-seller onboarding.
2. **Phase 2 (future, do not build yet):** Fractional ownership of
   high-value gemstones/jewelry. This very likely qualifies as a security
   under U.S. law (Howey test) and equivalent tests elsewhere. **Do not
   write code, UI, or copy for this feature until the founder explicitly
   says legal counsel has cleared it.** If asked to build anything
   share/investment-related, stop and ask for confirmation this gate has
   been cleared.
3. **Phase 3 (future):** Broader category platform (appraisal, insurance,
   financing, education content) layered on top of a working Phase 1/2.

If a request seems to jump ahead of the current phase, flag it rather than
building it silently.

---

## 2. Brand identity — "quiet luxury," not startup-flashy

Tone of voice, copy, and UI should all read as **restrained, editorial, and
confident** — closer to a fine jewelry auction house than a typical tech
product. This is a deliberate positioning choice, not a placeholder style.

**Tagline:** "Every facet, verified."

**Do:**

- Generous negative space; let content breathe
- Slow, uniform easing on any animation — no bouncy/springy motion
- Serif headlines (editorial feel), tracked-uppercase sans-serif for labels
- Plain, honest copy — state what's real about the current stage of the
  business, never invent traction, urgency, or social proof that doesn't
  exist yet ("founding waitlist," not "10,000+ trust us")

**Don't:**

- No countdown timers, fake scarcity, or invented testimonials
- No emoji in brand-facing copy or UI
- No stock "trusted by thousands" language pre-launch
- No competing decorative motion (spinning icons, particle effects) fighting
  for attention against the core message — one motion idea at a time

### Color palette (use these tokens, don't invent new hex values)

| Token                   | Hex       | OKLCH                      | Usage                                     |
| ----------------------- | --------- | -------------------------- | ----------------------------------------- |
| `background`            | `#121110` | `oklch(0.178 0.003 67.7)`  | Page background                           |
| `card`                  | `#171512` | `oklch(0.197 0.007 78.2)`  | Elevated surfaces                         |
| `foreground`            | `#F3F0EA` | `oklch(0.956 0.009 84.6)`  | Primary text                              |
| `primary` (gold)        | `#C9A876` | `oklch(0.749 0.077 77.5)`  | CTAs, labels, accents — use sparingly     |
| `primary-foreground`    | `#121110` | `oklch(0.178 0.003 67.7)`  | Text on gold (charcoal, not cream)        |
| `secondary` / `input`   | `#1E1C19` | `oklch(0.228 0.006 78.2)`  | Inputs, secondary surfaces                |
| `muted-foreground`      | `#B8B4AC` | `oklch(0.771 0.012 84.6)`  | Secondary text                            |
| `accent` (hover)        | `#242019` | `oklch(0.246 0.014 81.6)`  | Neutral hover state — not a second gold   |
| `destructive`           | `#B4544A` | `oklch(0.563 0.127 27.8)`  | Muted brick-red, not a harsh alert red    |
| `border`                | `#2A2723` | `oklch(0.275 0.008 75.2)`  | Borders/dividers                          |
| `chart-2` (teal)        | `#2C5D5C` | `oklch(0.444 0.053 193.6)` | Secondary accent — e.g. "verified" badges |
| `chart-3` (violet-gray) | `#5A5468` | `oklch(0.459 0.033 298.8)` | Tertiary accent — tags/dividers           |

This theme is **dark by default** — there is no light mode. `:root` and
`.dark` should stay identical unless explicitly asked to design a real light
variant.

**Radius:** `0.3rem` base — sharp corners, editorial feel, not shadcn's
default rounded look.

**Wordmark:** `SOLIFACET`, uppercase, ~0.3em letter-spacing, sans-serif.

---

## 3. Tech stack

Keep the stack exactly as listed below unless the founder asks to change
something. The whole point of this stack is minimizing both cost and
operational surface area for a solo, non-technical founder — don't add a new
vendor to solve a problem one of these already covers.

| Layer                             | Tool                                                                                                                                                                                 |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Frontend framework                | Next.js                                                                                                                                                                              |
| Hosting                           | Cloudflare Workers (via `create-cloudflare`; use whichever adapter it defaults to — currently `vinext`, fall back to `@opennextjs/cloudflare` only if something isn't yet supported) |
| Domain / DNS / WAF / CDN          | Cloudflare                                                                                                                                                                           |
| Database + backend                | Supabase (Postgres)                                                                                                                                                                  |
| Auth                              | Supabase Auth                                                                                                                                                                        |
| File / certificate storage        | Supabase Storage                                                                                                                                                                     |
| Payments / escrow                 | Stripe Connect (Custom accounts, manual capture + delayed transfer)                                                                                                                  |
| Seller identity verification      | Manual founder review at launch — do not integrate Stripe Identity or similar paid per-check verification until told to                                                              |
| Shipping + insurance              | Shippo                                                                                                                                                                               |
| Support inbox                     | Dedicated email inbox / Freshdesk free tier                                                                                                                                          |
| Error monitoring                  | Sentry                                                                                                                                                                               |
| Uptime monitoring                 | Better Stack                                                                                                                                                                         |
| Transactional email               | Resend                                                                                                                                                                               |
| Background jobs / scheduled tasks | Cloudflare Cron Triggers                                                                                                                                                             |
| Analytics                         | Microsoft Clarity                                                                                                                                                                    |
| UI components                     | shadcn/ui, themed per Section 2                                                                                                                                                      |

**MCP servers this agent may use, and how:**

| MCP server     | Default mode                        | Notes                                                                                                                                      |
| -------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| GitHub MCP     | Full use                            | Every change should land as a commit. This is the undo button — never bypass Git.                                                          |
| Supabase MCP   | **Read-only by default**            | Only run schema-changing migrations when explicitly asked for that task, in that session.                                                  |
| Cloudflare MCP | Deploy to preview only              | Never deploy to production without explicit founder confirmation in that session.                                                          |
| Stripe MCP     | **Read-only / restricted key only** | Never issue refunds, payouts, or write actions via MCP. Anything that moves money happens manually in the Stripe dashboard by the founder. |
| Sentry MCP     | Full use                            | Use freely to diagnose real errors from real logs.                                                                                         |
| Context7 MCP   | Full use                            | Use before writing code against any library API you're not 100% certain about — don't guess API shapes.                                    |
| Playwright MCP | Full use                            | Verify UI changes actually work in a real browser before declaring a task done.                                                            |

---

## 4. Security rules — non-negotiable

This is a marketplace that holds client funds and verifies real identities.
Treat every rule below as a hard constraint, not a suggestion to weigh
against convenience.

1. **Never store raw payment card data.** Client-side tokenization via
   Stripe Elements only. If a change would touch card data directly, stop
   and flag it instead of writing it.
2. **Never store government ID documents or verification photos in our own
   database or storage.** Verification status + a reference token only —
   let the verification provider hold the sensitive artifact.
3. **Row Level Security (RLS) must be enabled on every table that holds
   user data**, no exceptions, and every new table needs an explicit RLS
   policy before it ships — an unprotected table with a public anon key in
   the browser bundle is a full data leak, not a theoretical risk.
4. **Money-moving actions require a human, not just an agent.** Refunds,
   payouts, escrow releases, and payout-destination changes must go through
   a manual, logged step — never a fully automated path with no human
   checkpoint.
5. **Require step-up confirmation (re-auth or explicit second step) before
   any change to a payout destination or bank details**, even if the
   underlying auth provider doesn't enforce this automatically yet — build
   the app-level check either way.
6. **Escrow state changes need an audit trail.** Every transition (paid →
   shipped → delivered → disputed → released → refunded) gets a timestamped,
   immutable log entry — not just a mutable status column.
7. **Secrets never touch client-side code or get committed to Git.**
   Environment variables only, never hardcoded, never logged.
8. **High-value shipments require insured, signature-required carriers**
   above a value threshold (confirm threshold with founder before hardcoding
   one).
9. **Don't conflate seller identity verification with item authentication.**
   A "verified seller" badge and a "verified/certified gemstone" badge are
   different claims about different things — never merge them into one
   generic "verified" flag.
10. **Assume every user input is hostile** at every layer (client validation
    is a UX nicety, not a security boundary — server-side/DB-level
    validation is the real one).

If a task would require breaking any rule above to "just get it working,"
stop and ask rather than finding a workaround.

---

## 5. Working conventions

- **Ask before:** production deploys, database migrations that alter
  existing tables, anything touching payments/payouts, anything in the
  Phase 2 (fractional ownership) feature area, deleting data.
- **Don't ask before:** reading code/logs/schema, writing new
  non-destructive code, running the app locally, writing tests, using
  Playwright to verify a change.
- **Every change is a commit** with a clear message. Small, reviewable
  commits over one giant diff.
- **Verify before declaring done.** Use Playwright MCP to actually exercise
  a UI change; use Sentry MCP to confirm an error is actually resolved,
  don't just assume the fix worked.
- **When uncertain about a library's current API, check Context7 MCP first**
  rather than writing from memory — this stack (Next.js on Cloudflare
  Workers, Supabase, Stripe Connect) has surface area that changes, and a
  confidently-wrong API call is worse than a pause to check.
- **Keep the founder's non-technical status in mind.** Explain what changed
  and why in plain language when reporting back — not just a diff.

---

## 6. Known edge cases already scoped (don't re-derive from scratch)

- Seller never ships → auto-refund trigger after a defined no-tracking
  window
- Buyer disputes item authenticity/condition → funds stay held through a
  fixed dispute window; require timestamped photos at both listing and
  pre-shipment stages as evidence
- New sellers → rolling payout reserve until sufficient transaction history
  exists, to absorb chargeback risk
- GDPR/CCPA deletion request vs. financial recordkeeping requirement →
  anonymize PII on request, but retain the underlying financial record
  itself (don't hard-delete transaction rows)
- Monetization transition (free → paid listings) → needs an explicit
  trigger condition and grandfather terms for founding sellers, defined
  before the transition ships, not after

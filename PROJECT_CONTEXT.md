# Remedics Web — Project Context

## Project Overview
**Remedics** is a premium marketing website for a clinical intelligence AI product targeting the medical/healthcare sector. The site is built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

**Core Brand Position:**
- Product: Clinical intelligence infrastructure (medical AI)
- Target: Healthcare organizations, clinicians, compliance teams
- Tone: Premium, confident, engineering-focused ("billion-dollar feel")
- Key message: "The future core of medical sector" — accuracy, control, auditability

## Tech Stack
- **Framework:** Next.js 16.0.10 (App Router, Turbopack)
- **React:** 19.2.1 with React Compiler enabled
- **TypeScript:** 5 (strict mode)
- **Styling:** Tailwind CSS 4 with custom design tokens
- **Animation:** framer-motion 12.23.26 (minimal usage for premium feel)
- **3D Graphics:** three.js 0.182.0 (previously used, now removed)
- **Fonts:** 
  - Space Grotesk (display/headlines)
  - Inter (body text)
  - JetBrains Mono (code/mono)

## File Structure
```
real-reprog/remedics_web/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout with fonts + metadata
│   │   ├── page.tsx              # Home/landing page (hero + cards)
│   │   ├── globals.css           # Design tokens + utility classes
│   │   ├── about/page.tsx
│   │   ├── product/page.tsx
│   │   ├── safety/page.tsx
│   │   ├── pricing/page.tsx
│   │   ├── careers/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── terms/page.tsx
│   │   ├── privacy/page.tsx
│   │   └── api/contact/route.ts
│   └── components/
│       ├── site/
│       │   ├── Header.tsx        # Sticky nav (centered, premium)
│       │   ├── Footer.tsx        # Footer with links
│       │   ├── Shell.tsx         # Layout wrapper
│       │   └── Section.tsx       # Centered section container
│       ├── hero/
│       │   └── SignalCore.tsx    # (Removed 3D visual, kept for reference)
│       └── animations/
│           ├── FadeIn.tsx        # (Kept but usage reduced)
│           └── ScaleIn.tsx       # (Kept but usage reduced)
├── next.config.ts
├── tsconfig.json
├── package.json
└── tailwind.config.ts
```

## Design System (globals.css)

### Color Palette (Premium Neutral)
```css
--background: #000000          /* Pure black */
--foreground: #FFFFFF          /* Pure white */
--muted: #9CA3AF              /* Gray-400 */
--surface: rgba(255,255,255,0.02)
--border: rgba(255,255,255,0.08)
--brand: #3B82F6              /* Blue-500 */
--brand-2: #06B6D4            /* Cyan-500 */
```

### Typography Scale
- **Hero headline:** text-5xl → text-7xl (5rem max)
- **Subhead:** text-2xl → text-4xl
- **Body:** 15px → 16px (text-[15px] / text-base)
- **Small:** 13px (text-[13px])
- **Micro:** 11px (text-[11px])

### Key Utility Classes
- `.btn-primary` — White gradient button (dark text)
- `.btn-secondary` — Transparent button with border
- `.surface` — Card/panel with subtle backdrop blur
- `.text-gradient` — White → Gray gradient text
- `.container-page` — Max-width 64rem (4xl), centered
- `.bg-grid` — Subtle grid pattern
- `.noise` — Film grain overlay (minimal opacity)

### Animation Philosophy
- **Removed:** Heavy pulse-glow, shimmer, scan-line, floating badges
- **Kept minimal:** Subtle hover transforms (translateY -1px), duration 200ms
- **No scroll animations:** FadeIn/ScaleIn components exist but usage reduced

## Current State (as of Dec 17, 2025)

### ✅ Completed
1. **Home page (`src/app/page.tsx`)**
   - Capsule tagline: "THE FUTURE CORE OF MEDICAL SECTOR"
   - Hero headline: "The clinical intelligence engine for the next era."
   - Subhead: "Precision, control, dominance."
   - Paragraph (NEW): "Remedics is clinical intelligence infrastructure—built to raise accuracy, compress workflow time, and keep every output reviewable."
   - 3 feature cards: Accuracy-first, Audit trail, Workflow speed
   - Centered layout (full viewport height)
   - Radial gradient backgrounds (subtle blue/cyan)

2. **Header (`src/components/site/Header.tsx`)**
   - Centered to max-w-4xl (matches hero)
   - Simple logo (white square + "Remedics" text)
   - Nav links: Product, Safety, Pricing, About, Careers
   - CTAs: Download, Contact sales
   - Sticky with blur backdrop
   - Removed motion animations for cleaner feel

3. **Footer (`src/components/site/Footer.tsx`)**
   - Aligned to max-w-4xl
   - Simple brand line + Terms/Privacy/Contact links
   - Copyright year

4. **Design tokens (`globals.css`)**
   - Pure black background (#000)
   - Refined opacity levels (white/[0.06] borders, etc.)
   - Premium button gradients
   - Container utilities

5. **Config (`next.config.ts`)**
   - Added `allowedDevOrigins` for LAN dev access
   - Turbopack enabled
   - React Compiler enabled

### ⚠️ In Progress
1. **Secondary pages need upgrade:**
   - `/product`, `/safety`, `/pricing`, `/about`, `/careers`, `/contact`
   - Currently have old styling (not matching new premium system)
   - Need: Same centered layout, refined copy, consistent cards/sections

2. **Heavy effects audit:**
   - Check for remaining `.animate-pulse-glow`, `.text-shimmer`, `.glow-intense` usage
   - Remove or tone down where found

### 🔧 Build Status
- **Last build:** ✅ Success (13 routes compiled)
- **Dev server:** Runs on `localhost:3000` by default
- **Known issue:** User was running wrong project (`server.js` chatbox) from workspace root — now resolved

## Key Design Decisions

### Why Pure Black Background?
Premium "billion-dollar" aesthetic (Apple, Stripe, Linear style). Deep space (#050A12) was too "techy". Pure black (#000) reads as luxury.

### Why Remove 3D Visual?
User feedback: "remove that 3d visual no visual should be there". SignalCore component (Three.js particle system) was over-animated and distracted from message. Now hero is text-only + subtle gradients.

### Why Center Everything?
User wanted hero to be "in middle" and "main content". Shifted from left-aligned (common SaaS) to centered (premium editorial) layout. Header/footer follow same max-w-4xl container.

### Why Minimal Animation?
After "god-tier" animation phase (floating pills, shimmer text, scan lines), user said "over-animated" and wanted "premium best looking sleek". Removed most motion, kept only subtle hover states.

## Copy Strategy

### Tagline Evolution
1. Original: "Future of healthcare, built for accuracy"
2. User request: "the future core of medical sector or something more cool and insane and bloody sounding"
3. Final: **"THE FUTURE CORE OF MEDICAL SECTOR"** (approved)

### Hero Paragraph Evolution
1. Original: "Remedics is designed to push accuracy and workflow speed beyond today's baselines—while preserving the controls required for responsible clinical use."
2. User request: "make the things like those sentences we can make it even more better and killers"
3. Final: **"Remedics is clinical intelligence infrastructure—built to raise accuracy, compress workflow time, and keep every output reviewable."**

### Tone Guidelines
- **Product-forward:** Don't sell with hype, state capabilities
- **Engineering confidence:** "Built like infrastructure, presented like art"
- **Medical compliance:** Mention audit trails, governance, safety controls
- **No begging:** "Flex the product, not beg for attention"

## Development Workflow

### Running the Site
```bash
cd C:\Users\Lenovo\Documents\ide\real-reprog\remedics_web
npm run dev          # Dev server (Turbopack)
npm run build        # Production build
npm run start        # Serve production build
```

### Common Pitfalls
1. **Wrong directory:** User has multiple projects. Always `cd real-reprog/remedics_web` first.
2. **Cache issues:** Hard refresh with `Ctrl+Shift+R` or clear `.next/` cache.
3. **Port conflicts:** Dev server defaults to 3000. Use `-p 3001` if needed.
4. **LAN dev:** Now allowed via `allowedDevOrigins` in next.config.

### Build Output
- 13 static routes (all pages pre-rendered except `/api/contact`)
- Clean build with no errors as of last run
- Production bundle optimized via Turbopack

## Next Steps (TODO)

### High Priority
1. **Upgrade `/product` page:**
   - Match home page layout (centered, max-w-4xl)
   - Refine copy to match "killer" tone
   - Use `.surface` cards consistently
   - Add feature grid with premium styling

2. **Upgrade `/safety` page:**
   - Safety posture messaging (audit trails, governance)
   - Compliance framework details
   - Evaluation methodology

3. **Upgrade `/pricing` page:**
   - Simple tier cards or "Contact for pricing"
   - Enterprise positioning (not self-serve SaaS)

4. **Upgrade `/about` page:**
   - Team/mission (if applicable)
   - Or redirect to product page

5. **Upgrade `/careers` page:**
   - Job listings or "Join us" CTA
   - Engineering culture messaging

6. **Upgrade `/contact` page:**
   - Simple form (already has `/api/contact` route)
   - Sales inquiry focus

### Medium Priority
7. **Audit animations:**
   - Search codebase for `.animate-pulse-glow`, `.text-shimmer`, `.animate-float`
   - Remove or replace with subtle alternatives

8. **Metadata/SEO:**
   - Update page titles/descriptions
   - OG images
   - Sitemap

9. **Performance:**
   - Font optimization (already using next/font)
   - Image optimization (if images added later)

### Low Priority
10. **Terms/Privacy pages:**
    - Legal boilerplate (can be minimal for now)

11. **Testimonials/Social Proof:**
    - If applicable (medical sector might need compliance approval)

## User Preferences Summary

### What User Wants
- ✅ Centered hero layout
- ✅ "Billion-dollar" premium feel
- ✅ Minimal/no animation
- ✅ Killer copy (confident, not salesy)
- ✅ No 3D visuals
- ✅ Powerful tagline ("future core of medical sector")

### What User Dislikes
- ❌ Over-animation (floating, shimmer, scan lines)
- ❌ Text too large (reduced from text-8xl to text-7xl max)
- ❌ "Begging" tone (no waitlist funnels, no hype)
- ❌ 3D visual distractions
- ❌ Left-aligned hero (wanted centered)

## References

### Design Inspiration
- Apple product pages (centered, minimal)
- Stripe marketing (premium B2B SaaS)
- Linear (dark mode, confident copy)
- Vercel (clean typography, subtle effects)

### Technical References
- [Next.js 16 Docs](https://nextjs.org/docs)
- [Tailwind CSS 4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)

## Contact / Notes
- User is actively iterating on copy and design
- Prefers direct implementation over long discussions
- Has school schedule — works in bursts
- Runs dev server themselves, sometimes from wrong directory (now documented)

---

**Last Updated:** December 17, 2025  
**Build Status:** ✅ Passing (13 routes)  
**Next Agent Task:** Upgrade secondary pages (`/product`, `/safety`, `/pricing`, etc.) to match premium home page system.

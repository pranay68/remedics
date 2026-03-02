# DGS / Aternox — SEO Master Plan (Execute-to-Rank)

Date: 2026-03-02

This document is the **single source of truth** for taking the site from “good” to **grade‑A technical + content + authority SEO**.

Principles:
- **One query → one URL** (avoid cannibalization).
- **Make crawlers happy first**, then humans, then conversion.
- **Ship weekly**: technical fixes + 1–3 high‑value pages + linkable assets.

---

## 0) Success Targets (Define the win)

**Primary goals**
- Rank top 3 for: core brand + core category keywords (define below).
- Drive qualified leads to: waitlist + contact (research + enterprise).

**SEO KPI stack (weekly)**
- Index coverage: valid pages indexed / submitted
- Impressions → CTR → avg position (by page + query)
- Core Web Vitals: LCP / CLS / INP
- Crawl health: 404s, redirect chains, blocked resources
- Backlinks (quality domains, not raw count)

**Conversion KPI stack**
- Waitlist submit rate (page → submit)
- PDF view/download rate
- Contact submit rate

---

## 1) Technical SEO (Google trusts + crawls + renders perfectly)

### 1.1 Indexing Controls

**Robots**
- Allow everything public.
- Disallow junk and non‑SEO surfaces.
- Make sure `/view/*`, `/research`, `/waitlist`, etc. are **not blocked**.

Checklist:
- [ ] Robots rules allow `/*` and disallow only:
  - `/api/*`
  - internal debug paths (if any)
  - staging routes (if any)
- [ ] `sitemap.xml` URL is listed in robots
- [ ] `host` is set to the canonical host

Implementation notes (Next.js):
- Use `src/app/robots.ts` (MetadataRoute).

**Sitemap**
Checklist:
- [ ] Include every indexable route.
- [ ] Include stable `lastModified` (at least a real date; ideally derived from content/commits).
- [ ] Ensure `https://<canonical>/sitemap.xml` returns 200.

Implementation notes:
- Use `src/app/sitemap.ts`.
- Best‑effort `lastModified` options:
  - (A) Use current date (acceptable, but less precise)
  - (B) Store per‑page lastmod constants
  - (C) Pull from CMS / content frontmatter when we add content

### 1.2 Canonicals (no duplicates, no parameter mess)

Why: without correct canonicals, Google may index duplicates like:
- `/?ref=...`
- trailing slash vs no slash
- mixed hostnames

Checklist:
- [ ] **No global canonical to `/`** (this can collapse the whole site into one canonical).
- [ ] Each important page has its correct canonical.
- [ ] Enforce one host and one trailing slash policy via redirects.

Implementation notes (Next.js/Vercel):
- Canonicals are best handled via `metadata.alternates.canonical` **per page**.
- If a page is `"use client"`, it cannot export `metadata` — split into:
  - `page.tsx` (server; exports metadata)
  - a `HomeClient.tsx` (client; interactive parts)

### 1.3 Metadata Everywhere

Minimum per page:
- Unique `title`
- Unique `description`
- OpenGraph: title, description, url
- Twitter: title, description

Checklist:
- [ ] No duplicate title/description across the top 10 pages.
- [ ] Titles are query‑aligned (not just brand slogans).
- [ ] Descriptions are CTR‑optimized and honest.

Implementation notes:
- Use `export const metadata` on each server page.
- Standardize `metadataBase` using `NEXT_PUBLIC_SITE_URL`.

### 1.4 Structured Data (Schema.org JSON‑LD)

Baseline on all pages:
- `Organization`
- `WebSite`
- `WebPage`

For key surfaces:
- DGS page: `SoftwareApplication` or `Product`
- Research page: `WebPage` + `BreadcrumbList` (and optionally `Article` if you treat it as an article)
- FAQ sections: `FAQPage`

Checklist:
- [ ] JSON‑LD is valid (Google Rich Results Test).
- [ ] No contradictory claims vs page copy.
- [ ] URLs in JSON‑LD are absolute.

Implementation notes:
- You can inject global JSON‑LD in `layout.tsx`.
- Add per‑page JSON‑LD (breadcrumbs / page type) inside each `page.tsx`.

### 1.5 Core Web Vitals (CWV)

**LCP**
- Reduce hero weight (fonts, images, excessive client JS)
- Use `next/image` properly

**CLS**
- Avoid layout shift from loading states and injected elements
- Fix heights for media/iframes

**INP**
- Reduce client components
- Avoid heavy handlers on input/scroll

Checklist:
- [ ] `next build` shows no performance regressions.
- [ ] No huge JS bundles for simple pages.

### 1.6 Clean Architecture

Checklist:
- [ ] No broken internal links
- [ ] 404 monitoring (GSC + Vercel logs)
- [ ] Correct redirects:
  - http → https
  - www vs non‑www (choose one)
  - trailing slash policy

PDF / viewer specifics:
- [ ] `/downloads/flt3-summary.pdf` returns 200 + `application/pdf`
- [ ] `/view/flt3-program-summary` has unique metadata (not thin/duplicate)

---

## 2) Site Architecture (Win topics, not random pages)

### 2.1 Topic Map (Topical Authority)

We pick **primary themes** and then create:
- 1 pillar page per theme
- 10–30 cluster pages per pillar

Example pillars (draft):
- Verified synthesis for enterprise
- Research program architecture generation
- Safety gating and verification workflows
- Autonomous coding for professional teams

Checklist:
- [ ] Every pillar has a clear target query.
- [ ] Every cluster supports one pillar and one long‑tail query.
- [ ] Clusters don’t cannibalize each other.

### 2.2 Internal Linking Rules

Rules:
- Every cluster links → pillar (contextual link, not footer spam)
- Pillar links → 5–20 clusters
- Add “Related reading” blocks where it’s natural

Checklist:
- [ ] Add links with descriptive anchor text (not “click here”).
- [ ] Avoid over‑linking (keep it curated).

### 2.3 Navigation Strategy

Navigation should reflect the **money topics**, not just corporate pages.

Checklist:
- [ ] Top nav highlights 4–6 core topics.
- [ ] Footer reinforces topical hubs.

---

## 3) Content Engine (How you rank)

### 3.1 Keyword Strategy

Process:
1) Choose 1–2 themes to dominate first.
2) Build a query map (keywords → intent → URL).
3) Assign each query to exactly one URL.

Checklist:
- [ ] Define primary keyword + 3–8 secondary keywords per page.
- [ ] Avoid two pages targeting the same phrase.

### 3.2 Content Types That Win

High‑performers:
- “What it is” (definition, who it’s for, who it’s NOT for)
- “How it works” (workflow + evaluation; avoid leaking internals)
- Comparisons (DGS vs chatbots; DGS vs agent frameworks)
- Use‑cases (finance, law, engineering) with concrete inputs/outputs
- Linkable assets: templates, checklists, rubrics

### 3.3 On‑Page SEO Checklist (Per Page)

Structure:
- [ ] One H1
- [ ] Tight H2/H3 structure
- [ ] Answer‑first intro (2–4 lines)
- [ ] Examples / artifacts
- [ ] FAQs (real questions)

Trust:
- [ ] Author / company context
- [ ] Accurate claims

---

## 4) Authority / Trust (E‑E‑A‑T, backlinks, brand signals)

### 4.1 Trust Pages

Checklist:
- [ ] About
- [ ] Contact
- [ ] Terms
- [ ] Privacy
- [ ] Safety
- [ ] Clear company identity

### 4.2 Link Acquisition (Non‑spam)

Plan:
- Publish 2–3 “linkable assets” (original, useful, cite‑worthy)
- Targeted outreach (researchers, engineers, newsletters)
- Founder interviews/podcasts

Checklist:
- [ ] Outreach list + cadence
- [ ] Asset calendar

### 4.3 Consistency

Checklist:
- [ ] Positioning consistent across homepage / DGS / product pages
- [ ] “Not for chat” stance is aligned everywhere

---

## 5) Measurement + Iteration (How we actually reach #1)

### 5.1 Tooling

Required:
- Google Search Console
- Bing Webmaster Tools
- Vercel Analytics (and/or another analytics tool)

Nice-to-have:
- Lighthouse CI
- Automated broken link checker in CI

### 5.2 Weekly Cadence

Every week:
- Fix crawl/index issues
- Improve CTR (title/description tests)
- Upgrade pages ranking positions 5–15 into 1–3 by adding missing sections + internal links
- Publish at least 1 strong page or asset

---

## Execution Roadmap (What we do next in this repo)

### Phase A — Technical SEO hardening (now)
- (A1) Canonicals per page (refactor `"use client"` homepage to allow server metadata)
- (A2) Unique metadata pass: home, dgs, research, waitlist, product, pricing, safety
- (A3) Add `WebPage` + `BreadcrumbList` JSON‑LD on key pages
- (A4) Robots tighten: disallow only what should never index
- (A5) Sitemap lastmod strategy (constants now; automated later)

### Phase B — Content architecture (next)
- (B1) Choose 2 primary themes to dominate
- (B2) Create 2 pillars + 6–10 clusters
- (B3) Add internal linking system

### Phase C — Authority (parallel)
- (C1) Ship 2–3 linkable assets
- (C2) Outreach + PR cadence

---

## Notes / Constraints
- We keep the current design system (Tailwind tokens + existing components).
- We do not add “extra pages” unless they are part of the SEO topic map.
- We avoid claims that can’t be defended.

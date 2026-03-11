# SEO Phase 1 — Crawl / Index Trust

This phase is about making Google see one correct canonical host and one correct sitemap.

## What the repo now supports

- `NEXT_PUBLIC_SITE_URL` controls canonical host generation, sitemap host, robots host, and metadata base.
- `GOOGLE_SITE_VERIFICATION` injects the Google Search Console verification meta tag.

## Required Vercel environment variables

Set these in **Production**:

- `NEXT_PUBLIC_SITE_URL=https://www.aternox.site`
- `GOOGLE_SITE_VERIFICATION=<your-google-verification-token>`

If you are not adding Search Console yet, leave `GOOGLE_SITE_VERIFICATION` unset.

## Required deploy step

After setting env vars, redeploy the latest production deployment.

## Verify after deploy

Check these URLs directly:

- `https://www.aternox.site/robots.txt`
- `https://www.aternox.site/sitemap.xml`
- `https://www.aternox.site/`

Expected:

- `robots.txt` should show:
  - `Host: https://www.aternox.site`
  - `Sitemap: https://www.aternox.site/sitemap.xml`
- `sitemap.xml` should contain only `https://www.aternox.site/...` URLs
- homepage HTML should emit metadata/canonical based on `https://www.aternox.site`

## Google Search Console steps

1. Add property for `https://www.aternox.site`
2. Use HTML tag verification
3. Copy only the token value from the verification tag into `GOOGLE_SITE_VERIFICATION`
4. Redeploy
5. Click Verify in Search Console

## Submit for indexing

After verification succeeds:

1. Submit `https://www.aternox.site/sitemap.xml`
2. Request indexing for:
   - `/`
   - `/dgs`
   - `/compare`
   - `/research`
   - `/product`

## Why this matters

If robots, sitemap, canonicals, and metadata point at the wrong host, Google can split trust or ignore the intended canonical domain.

Phase 1 is complete only when all live SEO outputs consistently point to `https://www.aternox.site`.

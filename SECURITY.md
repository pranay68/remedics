# Security Hardening Notes

This repository includes application-level hardening for the public Aternox website.

## Implemented in repo

- Strict response security headers via `next.config.ts`
- Shared in-memory API rate limiting for public POST endpoints
- Honeypot field support on public forms
- Optional Cloudflare Turnstile verification
- Stricter server-side validation and normalized inputs
- Generic server error responses for public APIs
- Removal of insecure mail credential fallbacks in contact intake

## Public APIs covered

- `/api/waitlist`
- `/api/contact`
- `/api/research-inquiry`
- `/api/enterprise-inquiry`

## Environment variables used by security features

### Firebase / Firestore
- `FIREBASE_PROJECT_ID`
- `FIREBASE_CLIENT_EMAIL`
- `FIREBASE_PRIVATE_KEY`

### Contact email
- `GMAIL_USER`
- `GMAIL_APP_PASSWORD`

### Optional Turnstile
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
- `TURNSTILE_SECRET_KEY`

If Turnstile env vars are not set, forms still work, but bot verification is not enforced.

## Rate limiting note

The current repo-side rate limiting is in-memory and best-effort. It improves abuse resistance, but it is not a substitute for edge-level rate limiting.

For stronger protection, pair this repo with:
- Cloudflare WAF
- Cloudflare rate limiting
- Bot management / challenge rules
- DNSSEC and account 2FA outside the repo

## Recommended external follow-up

1. Set up Cloudflare in front of Vercel
2. Add Turnstile keys in Vercel env vars
3. Rotate Firebase service account credentials
4. Enforce 2FA on Namecheap, Vercel, GitHub
5. Protect `main` with required PR review and checks

import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { Page } from "@/components/site/Page";
import { Shell } from "@/components/site/Shell";
import { trustPrinciples } from "@/content/site";

const title = "Trust";
const description =
  "Public contract truth for ReArch: explicit confirmation before quote, bounded deliverables, honest limits, and remedy on non-delivery.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/trust" },
  openGraph: { title, description, url: "/trust" },
  twitter: { title, description, card: "summary_large_image" },
};

export default function TrustPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.site";
  const site = new URL(siteUrl);
  const canonicalUrl = new URL("/trust", site).href;

  const breadCrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: new URL("/", site).href },
      { "@type": "ListItem", position: 2, name: "Trust", item: canonicalUrl },
    ],
  };

  return (
    <Shell>
      <Page
        eyebrow="Trust"
        title="Commercially clear. Operationally honest."
        subtitle="ReArch is designed to state what is true now, block what is not ready, and avoid public confidence that outruns the actual product."
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbJsonLd) }}
        />

        <div className="grid gap-4 md:grid-cols-2">
          {trustPrinciples.map((principle, index) => (
            <FadeIn key={principle} delay={index * 0.08}>
              <div className="rounded-3xl border border-border/70 bg-surface/50 p-8">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-2">
                  Principle 0{index + 1}
                </div>
                <p className="mt-4 text-base leading-7 text-muted">{principle}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.35}>
          <div className="mt-12 rounded-3xl border border-border/70 bg-surface/50 p-10">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-muted">
              Not Claimed Here
            </div>
            <div className="mt-4 grid gap-3 text-sm text-muted">
              <div className="rounded-2xl border border-border/70 bg-background/30 px-4 py-3">
                No outcome guarantee.
              </div>
              <div className="rounded-2xl border border-border/70 bg-background/30 px-4 py-3">
                No fabricated case studies or testimonials.
              </div>
              <div className="rounded-2xl border border-border/70 bg-background/30 px-4 py-3">
                No live reliability claim that outruns current foundations.
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/pricing"
                className="btn-secondary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105"
              >
                Read pricing
              </Link>
              <Link
                href="/contact"
                className="btn-primary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105"
              >
                Talk through a case
              </Link>
            </div>
          </div>
        </FadeIn>
      </Page>
    </Shell>
  );
}

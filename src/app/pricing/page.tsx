import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { Page } from "@/components/site/Page";
import { Shell } from "@/components/site/Shell";
import { pricingPrinciples } from "@/content/site";

const title = "Pricing";
const description =
  "ReArch pricing doctrine: no flat public price, quote after explicit confirmation, charge at authorize, bounded deliverables, honest limits, and remedy on non-delivery.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/pricing" },
  openGraph: { title, description, url: "/pricing" },
  twitter: { title, description, card: "summary_large_image" },
};

export default function PricingPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.site";
  const site = new URL(siteUrl);
  const canonicalUrl = new URL("/pricing", site).href;

  const breadCrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: new URL("/", site).href },
      { "@type": "ListItem", position: 2, name: "Pricing", item: canonicalUrl },
    ],
  };

  return (
    <Shell>
      <Page
        eyebrow="Pricing"
        title="Public pricing doctrine, not a fake price table."
        subtitle="ReArch does not publish a flat number because the quote belongs after the case is built and explicitly confirmed."
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbJsonLd) }}
        />

        <div className="grid gap-4 md:grid-cols-2">
          {pricingPrinciples.map((principle, index) => (
            <FadeIn key={principle} delay={index * 0.08}>
              <div className="rounded-3xl border border-border/70 bg-surface/50 p-8">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-2">
                  Rule 0{index + 1}
                </div>
                <p className="mt-4 text-base leading-7 text-muted">{principle}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-12 rounded-3xl border border-border/70 bg-surface/50 p-10">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-muted">
              Why no public number
            </div>
            <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
              The cost depends on the confirmed case, the visible failure, the repo
              state, and the bounded recovery scope. Publishing a fake universal
              price would be easier, but it would also be dishonest.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/how-it-works"
                className="btn-secondary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105"
              >
                Development status
              </Link>
              <Link
                href="/waitlist"
                className="btn-primary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105"
              >
                Launching July 1
              </Link>
            </div>
          </div>
        </FadeIn>
      </Page>
    </Shell>
  );
}

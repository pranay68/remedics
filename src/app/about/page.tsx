import type { Metadata } from "next";
import { FadeIn } from "@/components/animations/FadeIn";
import { Page } from "@/components/site/Page";
import { Shell } from "@/components/site/Shell";

const title = "About";
const description =
  "Aternox is the parent company. ReArch is the public recovery product.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: { title, description, url: "/about" },
  twitter: { title, description, card: "summary_large_image" },
};

export default function AboutPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.site";
  const site = new URL(siteUrl);
  const canonicalUrl = new URL("/about", site).href;

  const breadCrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: new URL("/", site).href },
      { "@type": "ListItem", position: 2, name: "About", item: canonicalUrl },
    ],
  };

  return (
    <Shell>
      <Page
        eyebrow="About"
        title="Aternox is the parent company. ReArch is the public product."
        subtitle="This site keeps the roles clean: company identity stays with Aternox, while the product story is centered on ReArch recovery."
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbJsonLd) }}
        />

        <div className="grid gap-4 md:grid-cols-3">
          <FadeIn>
            <div className="rounded-3xl border border-border/70 bg-surface/50 p-8">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-2">
                Company
              </div>
              <p className="mt-4 text-base leading-7 text-muted">
                Aternox owns the company surface, legal pages, and public trust
                posture.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-3xl border border-border/70 bg-surface/50 p-8">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-2">
                Product
              </div>
              <p className="mt-4 text-base leading-7 text-muted">
                ReArch focuses on recovery for broken or messy AI-built apps
                through case understanding, confirmation, execution, and package
                delivery.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="rounded-3xl border border-border/70 bg-surface/50 p-8">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-2">
                Founder
              </div>
              <p className="mt-4 text-base leading-7 text-muted">
                The company is founder-led. This page does not invent extra legal
                entity detail beyond what is currently frozen.
              </p>
            </div>
          </FadeIn>
        </div>
      </Page>
    </Shell>
  );
}

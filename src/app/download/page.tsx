import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";

const title = "Download | DGS by Aternox";
const description =
  "DGS is in private development. Join the waitlist and we’ll reach out when access opens.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/download" },
  openGraph: { title, description, url: "/download" },
  twitter: { title, description, card: "summary_large_image" },
};

export default function DownloadPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.com";
  const site = new URL(siteUrl);
  const canonicalUrl = new URL("/download", site).href;

  const breadCrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: new URL("/", site).href },
      { "@type": "ListItem", position: 2, name: "Download", item: canonicalUrl },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Download",
    url: canonicalUrl,
    description,
    isPartOf: { "@type": "WebSite", name: "Aternox", url: site.href },
    publisher: { "@type": "Organization", name: "Aternox", url: site.href },
  };

  return (
    <Shell>
      <Page
        eyebrow="Download"
        title={
          <>
            DGS <span className="text-gradient text-shimmer">Access</span>.
          </>
        }
        subtitle="DGS is in private development. Join the waitlist and we'll reach out when access opens."
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
        />
        <div className="glass rounded-3xl border border-border/70 p-8 glow">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-muted">
            Status
          </div>
          <h2 className="mt-3 font-sans text-2xl font-semibold tracking-[-0.04em] md:text-3xl">
            Coming soon.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            We’re finalizing installers and enterprise deployment bundles. If you want early access, share your
            intended use-case and environment.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="btn-primary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105"
            >
              Request access
            </Link>
            <Link
              href="/dgs"
              className="btn-secondary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105"
            >
              Learn about DGS
            </Link>
          </div>
        </div>
      </Page>
    </Shell>
  );
}


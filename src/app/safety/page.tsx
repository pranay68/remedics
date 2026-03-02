import type { Metadata } from "next";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScaleIn } from "@/components/animations/ScaleIn";

const title = "Safety | Aternox";
const description =
  "Privacy-first defaults and enterprise-ready handling. We’re explicit about data handling and design for review.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/safety" },
  openGraph: { title, description, url: "/safety" },
  twitter: { title, description, card: "summary_large_image" },
};

function Row({ title, desc, delay = 0 }: { title: string; desc: string; delay?: number }) {
  return (
    <ScaleIn delay={delay} className="group rounded-2xl border border-border/70 bg-surface/50 p-7 transition-all duration-500 hover:scale-105 hover:border-brand-2/50 hover:bg-surface/70 glow">
      <div className="text-sm font-semibold text-brand-2">{title}</div>
      <div className="mt-2 text-sm leading-6 text-muted">{desc}</div>
    </ScaleIn>
  );
}

export default function SafetyPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.com";
  const site = new URL(siteUrl);
  const canonicalUrl = new URL("/safety", site).href;

  const breadCrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: new URL("/", site).href },
      { "@type": "ListItem", position: 2, name: "Safety", item: canonicalUrl },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Safety",
    url: canonicalUrl,
    description,
    isPartOf: { "@type": "WebSite", name: "Aternox", url: site.href },
    publisher: { "@type": "Organization", name: "Aternox", url: site.href },
  };

  return (
    <Shell>
      <Page
        eyebrow="Safety"
        title={
          <>
            Your code is <span className="text-gradient text-shimmer">yours</span>.
          </>
        }
        subtitle={
          "DGS is built by Aternox with privacy-first defaults. We're explicit about data handling, and we design for enterprise review."
        }
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
        />
        <FadeIn>
          <div className="grid gap-4 md:grid-cols-2">
            <Row
              delay={0.1}
              title="Minimal Retention"
              desc="We minimize retention by default and keep handling aligned with our Privacy Policy and customer agreements."
            />
            <Row
              delay={0.2}
              title="Enterprise Deployments"
              desc="Deployment and data-handling options are designed for enterprise environments and security review."
            />
            <Row
              delay={0.3}
              title="SOC 2 Ready"
              desc="We operate with security controls and processes designed to meet enterprise expectations."
            />
            <Row
              delay={0.4}
              title="Enterprise Controls"
              desc="Teams can enforce policies around usage, governance, and rollout."
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="mt-12 glass rounded-3xl border border-gradient p-10 glow-intense scan-line">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-accent">
              Commitment
            </div>
            <h2 className="mt-3 font-sans text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
              We don&apos;t train on your data.
            </h2>
            <p className="mt-4 max-w-3xl text-base text-muted md:text-lg">
              Our business model is selling software, not selling your data. We do not train models on customer code by default.
            </p>
          </div>
        </FadeIn>
      </Page>
    </Shell>
  );
}

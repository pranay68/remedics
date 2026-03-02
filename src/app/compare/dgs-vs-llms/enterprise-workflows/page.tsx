import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScaleIn } from "@/components/animations/ScaleIn";

const title = "Enterprise Workflow Fit | DGS vs LLMs | Aternox";
const description =
  "Why enterprise adoption requires reviewable artifacts, governance, and clear accountability — not just fluent model responses.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/compare/dgs-vs-llms/enterprise-workflows" },
  openGraph: { title, description, url: "/compare/dgs-vs-llms/enterprise-workflows" },
  twitter: { title, description, card: "summary_large_image" },
};

const sections = [
  {
    title: "Enterprises run on approvals",
    body: "Policy, procurement, audits, and delivery all require review steps. A workflow that can’t support review gates becomes a shadow process.",
  },
  {
    title: "Accountability needs artifacts",
    body: "Teams need something to point to: a versioned plan/spec/decision record that can be reviewed, approved, and revisited.",
  },
  {
    title: "DGS aligns with governance",
    body: "DGS-style outputs are designed to be checked, governed, and reused — which maps better to real enterprise workflows.",
  },
];

export default function EnterpriseWorkflowsPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.com";
  const site = new URL(siteUrl);
  const canonicalUrl = new URL("/compare/dgs-vs-llms/enterprise-workflows", site).href;

  const breadCrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: new URL("/", site).href },
      { "@type": "ListItem", position: 2, name: "Compare", item: new URL("/compare", site).href },
      { "@type": "ListItem", position: 3, name: "DGS vs LLMs", item: new URL("/compare/dgs-vs-llms", site).href },
      { "@type": "ListItem", position: 4, name: "Enterprise Workflows", item: canonicalUrl },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Enterprise Workflow Fit",
    url: canonicalUrl,
    description,
    isPartOf: { "@type": "WebSite", name: "Aternox", url: site.href },
    publisher: { "@type": "Organization", name: "Aternox", url: site.href },
  };

  return (
    <Shell>
      <Page
        eyebrow="DGS vs LLMs"
        title={
          <>
            Enterprise <span className="text-gradient text-shimmer">workflow fit</span>.
          </>
        }
        subtitle="If outputs can’t be reviewed and approved, adoption won’t scale."
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />

        <FadeIn>
          <div className="grid gap-4 md:grid-cols-3">
            {sections.map((s, i) => (
              <ScaleIn key={s.title} delay={0.05 * i} className="rounded-3xl border border-border/70 bg-surface/50 p-7 glow">
                <div className="text-sm font-semibold text-brand-2">{s.title}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.body}</p>
              </ScaleIn>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="mt-12 rounded-3xl border border-border/70 bg-surface/40 p-8">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-muted">Related reading</div>
            <div className="mt-6 flex flex-col gap-3">
              <Link href="/compare/dgs-vs-llms" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">
                Back to DGS vs LLMs
              </Link>
              <Link href="/compare/dgs-vs-llms/auditability" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">
                Auditability
              </Link>
              <Link href="/safety" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">
                Safety & governance
              </Link>
            </div>
          </div>
        </FadeIn>
      </Page>
    </Shell>
  );
}

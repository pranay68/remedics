import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScaleIn } from "@/components/animations/ScaleIn";

const title = "Tool Orchestration vs Governed Outputs | DGS vs LLMs | Aternox";
const description =
  "Tool calling can automate steps. Governed outputs make adoption safe: reviewable artifacts, verification gates, and clear accountability.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/compare/dgs-vs-llms/tool-orchestration" },
  openGraph: { title, description, url: "/compare/dgs-vs-llms/tool-orchestration" },
  twitter: { title, description, card: "summary_large_image" },
};

const sections = [
  {
    title: "Automation isn’t governance",
    body: "Orchestration can execute steps quickly. It doesn’t automatically produce outputs that humans can safely adopt.",
  },
  {
    title: "Outputs must be reviewable",
    body: "Teams need artifacts with explicit scope, assumptions, and acceptance criteria — so a reviewer can approve or reject.",
  },
  {
    title: "DGS optimizes for adoption",
    body: "DGS is oriented around producing structured artifacts and making verification steps explicit in the workflow.",
  },
];

export default function ToolOrchestrationPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.com";
  const site = new URL(siteUrl);
  const canonicalUrl = new URL("/compare/dgs-vs-llms/tool-orchestration", site).href;

  const breadCrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: new URL("/", site).href },
      { "@type": "ListItem", position: 2, name: "Compare", item: new URL("/compare", site).href },
      { "@type": "ListItem", position: 3, name: "DGS vs LLMs", item: new URL("/compare/dgs-vs-llms", site).href },
      { "@type": "ListItem", position: 4, name: "Tool Orchestration", item: canonicalUrl },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Tool Orchestration vs Governed Outputs",
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
            Tool orchestration vs <span className="text-gradient text-shimmer">governed outputs</span>.
          </>
        }
        subtitle="Faster execution doesn’t help if the output can’t be reviewed."
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
              <Link href="/compare/dgs-vs-agent-frameworks" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">
                DGS vs agent frameworks
              </Link>
              <Link href="/compare/dgs-vs-llms" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">
                Back to DGS vs LLMs
              </Link>
              <Link href="/learn/governed-autonomy" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">
                Governed autonomy (pillar)
              </Link>
            </div>
          </div>
        </FadeIn>
      </Page>
    </Shell>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScaleIn } from "@/components/animations/ScaleIn";

const title = "RAG vs Verified Synthesis | DGS vs LLMs | Aternox";
const description =
  "RAG improves retrieval. Verified synthesis improves workflow reliability: structured artifacts, review gates, and governance.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/compare/dgs-vs-llms/rag-and-synthesis" },
  openGraph: { title, description, url: "/compare/dgs-vs-llms/rag-and-synthesis" },
  twitter: { title, description, card: "summary_large_image" },
};

const sections = [
  {
    title: "RAG answers “what does the data say?”",
    body: "Retrieval-augmented generation is great at grounding a response in documents. It’s a data access pattern.",
  },
  {
    title: "Workflows still need artifacts",
    body: "Even with good retrieval, teams still need a reviewable output: scope, assumptions, acceptance criteria, and sign-off.",
  },
  {
    title: "Verified synthesis is workflow design",
    body: "DGS focuses on structuring the output and making verification a first-class step, so the result can be governed.",
  },
];

export default function RagAndSynthesisPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.com";
  const site = new URL(siteUrl);
  const canonicalUrl = new URL("/compare/dgs-vs-llms/rag-and-synthesis", site).href;

  const breadCrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: new URL("/", site).href },
      { "@type": "ListItem", position: 2, name: "Compare", item: new URL("/compare", site).href },
      { "@type": "ListItem", position: 3, name: "DGS vs LLMs", item: new URL("/compare/dgs-vs-llms", site).href },
      { "@type": "ListItem", position: 4, name: "RAG vs Verified Synthesis", item: canonicalUrl },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "RAG vs Verified Synthesis",
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
            RAG vs <span className="text-gradient text-shimmer">verified synthesis</span>.
          </>
        }
        subtitle="Retrieval helps grounding. Workflow design helps adoption."
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
              <Link href="/compare/dgs-vs-llms/structured-outputs" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">
                Structured outputs
              </Link>
              <Link href="/learn/verified-synthesis" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">
                Verified synthesis (pillar)
              </Link>
            </div>
          </div>
        </FadeIn>
      </Page>
    </Shell>
  );
}

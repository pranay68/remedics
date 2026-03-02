import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScaleIn } from "@/components/animations/ScaleIn";

const title = "How to Evaluate LLM Workflows vs DGS | Aternox";
const description =
  "A practical evaluation lens: artifacts, review time, failure modes, and governance — and whether decision gates are deterministic and auditable.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/compare/dgs-vs-llms/evaluation" },
  openGraph: { title, description, url: "/compare/dgs-vs-llms/evaluation" },
  twitter: { title, description, card: "summary_large_image" },
};

const criteria = [
  {
    title: "Does it produce an artifact?",
    body: "Measure whether the system outputs a structured spec/plan/checklist your team can store and reuse.",
  },
  {
    title: "Can a reviewer approve it?",
    body: "If review is subjective or ambiguous, adoption won’t scale.",
  },
  {
    title: "What fails and how?",
    body: "Track failure modes: scope drift, hidden assumptions, missing constraints, and untestable claims.",
  },
  {
    title: "Can you govern it?",
    body: "Look for explicit gates: acceptance criteria, sign-off, and versioning for outputs.",
  },
];

export default function EvaluationPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.com";
  const site = new URL(siteUrl);
  const canonicalUrl = new URL("/compare/dgs-vs-llms/evaluation", site).href;

  const breadCrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: new URL("/", site).href },
      { "@type": "ListItem", position: 2, name: "Compare", item: new URL("/compare", site).href },
      { "@type": "ListItem", position: 3, name: "DGS vs LLMs", item: new URL("/compare/dgs-vs-llms", site).href },
      { "@type": "ListItem", position: 4, name: "Evaluation", item: canonicalUrl },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "How to Evaluate LLM Workflows vs DGS",
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
            How to <span className="text-gradient text-shimmer">evaluate</span> LLM workflows vs DGS.
          </>
        }
        subtitle="Focus on artifacts, reviewability, and governance — not vibes."
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />

        <FadeIn>
          <div className="grid gap-4 md:grid-cols-2">
            {criteria.map((c, i) => (
              <ScaleIn key={c.title} delay={0.05 * i} className="rounded-3xl border border-border/70 bg-surface/50 p-7 glow">
                <div className="text-sm font-semibold text-brand-2">{c.title}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{c.body}</p>
              </ScaleIn>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="mt-12 glass rounded-3xl border border-gradient p-10 glow-intense">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-2">Recommendation</div>
            <h2 className="mt-3 font-sans text-2xl font-semibold tracking-[-0.04em] md:text-3xl">Evaluate with real artifacts</h2>
            <p className="mt-4 max-w-3xl text-base text-muted md:text-lg">
              Run a small workflow: request a spec, a plan, and acceptance criteria. Then time how long it takes a human to review and approve.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/learn/evaluation-verification" className="btn-primary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105">
                Evaluation & verification
              </Link>
              <Link href="/compare/dgs-vs-llms" className="btn-secondary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105">
                Back to DGS vs LLMs
              </Link>
            </div>
          </div>
        </FadeIn>
      </Page>
    </Shell>
  );
}

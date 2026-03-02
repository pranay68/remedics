import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScaleIn } from "@/components/animations/ScaleIn";

const title = "Structured Outputs vs Chat Output | DGS vs LLMs | Aternox";
const description =
  "Why structured outputs matter for professional work: review, reuse, and governance — beyond fluent chat responses.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/compare/dgs-vs-llms/structured-outputs" },
  openGraph: { title, description, url: "/compare/dgs-vs-llms/structured-outputs" },
  twitter: { title, description, card: "summary_large_image" },
};

const sections = [
  {
    title: "Chat output is hard to verify",
    body: "Free-form responses bury assumptions and mix decisions with rationale. That’s fine for exploration, but painful when teams need review and accountability.",
  },
  {
    title: "Structure makes review possible",
    body: "When the output is an artifact (plan, spec, schema, checklist), reviewers can check scope, premises, and acceptance criteria before adoption.",
  },
  {
    title: "DGS is optimized for artifacts",
    body: "DGS focuses on producing outputs designed to be reviewed, versioned, and reused — not just read once in a chat window.",
  },
];

export default function StructuredOutputsPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.com";
  const site = new URL(siteUrl);
  const canonicalUrl = new URL("/compare/dgs-vs-llms/structured-outputs", site).href;

  const breadCrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: new URL("/", site).href },
      { "@type": "ListItem", position: 2, name: "Compare", item: new URL("/compare", site).href },
      { "@type": "ListItem", position: 3, name: "DGS vs LLMs", item: new URL("/compare/dgs-vs-llms", site).href },
      { "@type": "ListItem", position: 4, name: "Structured Outputs", item: canonicalUrl },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Structured Outputs vs Chat Output",
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
            Structured <span className="text-gradient text-shimmer">outputs</span> vs chat output.
          </>
        }
        subtitle="Professional workflows run on artifacts — not conversations."
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
          <div className="mt-12 glass rounded-3xl border border-gradient p-10 glow-intense">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-2">Shortcut</div>
            <h2 className="mt-3 font-sans text-2xl font-semibold tracking-[-0.04em] md:text-3xl">Ask for an artifact you can review</h2>
            <p className="mt-4 max-w-3xl text-base text-muted md:text-lg">
              If a system can’t produce a structured artifact (with scope, assumptions, and acceptance criteria), it will be hard to govern — regardless of how fluent it sounds.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/compare/dgs-vs-llms" className="btn-secondary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105">
                Back to DGS vs LLMs
              </Link>
              <Link href="/learn/verified-synthesis" className="btn-primary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105">
                Read verified synthesis
              </Link>
            </div>
          </div>
        </FadeIn>
      </Page>
    </Shell>
  );
}

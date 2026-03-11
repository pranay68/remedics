import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScaleIn } from "@/components/animations/ScaleIn";

const title = "DGS vs Agent Frameworks | Aternox";
const description =
  "Agent frameworks help orchestrate tools. DGS focuses on governed, reviewable artifacts with deterministic logic gates and traceable decision rules.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/compare/dgs-vs-agent-frameworks" },
  openGraph: { title, description, url: "/compare/dgs-vs-agent-frameworks" },
  twitter: { title, description, card: "summary_large_image" },
};

const sections = [
  {
    title: "Frameworks orchestrate actions",
    body: "Most agent frameworks focus on routing between tools, prompts, and memory. They’re valuable infrastructure — but they don’t guarantee a reviewable output.",
  },
  {
    title: "Workflows require governance",
    body: "Teams need guardrails: scope control, verification steps, and outputs that can be checked before they change systems or decisions.",
  },
  {
    title: "DGS is artifact-first",
    body: "DGS aims to generate structured artifacts (specs, plans, architectures) that are meant to be reviewed, versioned, and reused across the org.",
  },
  {
    title: "Composition still matters",
    body: "You can pair DGS-style outputs with orchestration. The key difference is what the system optimizes for: tools, or outcomes you can govern.",
  },
];

export default function DgsVsAgentFrameworksPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.site";
  const site = new URL(siteUrl);
  const canonicalUrl = new URL("/compare/dgs-vs-agent-frameworks", site).href;

  const breadCrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: new URL("/", site).href },
      { "@type": "ListItem", position: 2, name: "Compare", item: new URL("/compare", site).href },
      { "@type": "ListItem", position: 3, name: "DGS vs Agent Frameworks", item: canonicalUrl },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "DGS vs Agent Frameworks",
    url: canonicalUrl,
    description,
    isPartOf: { "@type": "WebSite", name: "Aternox", url: site.href },
    publisher: { "@type": "Organization", name: "Aternox", url: site.href },
  };

  return (
    <Shell>
      <Page
        eyebrow="Comparison"
        title={
          <>
            DGS vs <span className="text-gradient text-shimmer">agent frameworks</span>.
          </>
        }
        subtitle="Orchestration is necessary. Governance and reviewable artifacts are non-negotiable in real work."
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />

        <FadeIn>
          <div className="grid gap-4 md:grid-cols-2">
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
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-2">Practical takeaway</div>
            <h2 className="mt-3 font-sans text-2xl font-semibold tracking-[-0.04em] md:text-3xl">
              Measure outputs, not tool calls.
            </h2>
            <p className="mt-4 max-w-3xl text-base text-muted md:text-lg">
              If a system can’t produce artifacts your team can review (and reject), orchestration just makes the wrong thing happen faster.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/compare/dgs-vs-chatbots" className="btn-secondary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105">
                Read: DGS vs chatbots
              </Link>
              <Link href="/waitlist" className="btn-primary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105">
                Join the waitlist
              </Link>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-12 rounded-3xl border border-border/70 bg-surface/40 p-8">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-muted">Related reading</div>
            <div className="mt-6 flex flex-col gap-3">
              <Link href="/compare" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">
                Comparison hub
              </Link>
              <Link href="/compare/dgs-vs-llms" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">
                DGS vs LLMs (not a chatbot)
              </Link>
              <Link href="/compare/dgs-vs-agent-frameworks/tool-calling" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">
                Tool calling
              </Link>
              <Link href="/compare/dgs-vs-agent-frameworks/memory-and-state" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">
                Memory & state
              </Link>
              <Link href="/compare/dgs-vs-agent-frameworks/observability" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">
                Observability
              </Link>
              <Link href="/compare/dgs-vs-agent-frameworks/evaluation" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">
                Evaluating agents
              </Link>
              <Link href="/compare/dgs-vs-agent-frameworks/safety-guardrails" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">
                Safety guardrails
              </Link>
              <Link href="/compare/dgs-vs-agent-frameworks/human-in-the-loop" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">
                Human-in-the-loop
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

import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScaleIn } from "@/components/animations/ScaleIn";

const title = "DGS vs LLMs (Not a Chatbot) | Aternox";
const description =
  "A clear comparison between LLM-based tools and DGS: where LLMs shine, what breaks in professional workflows, and what changes when synthesis is governed by deterministic logic gates.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/compare/dgs-vs-llms" },
  openGraph: { title, description, url: "/compare/dgs-vs-llms" },
  twitter: { title, description, card: "summary_large_image" },
};

const sections = [
  {
    title: "What LLM tools are great at",
    body: "Drafting, brainstorming, summarization, and rapidly exploring surface-level options — especially when you can tolerate ambiguity and variance.",
  },
  {
    title: "Where LLM workflows break",
    body: "High-stakes work needs outputs that can be reviewed, governed, and repeated. “Chat” UX encourages hidden assumptions, drifting requirements, and outputs that are hard to audit.",
  },
  {
    title: "What changes with DGS",
    body: "DGS is built to produce structured outputs with an explicit logic chain and verification gates — so teams can review conclusions, check premises, and integrate results into real workflows.",
  },
];

export default function DgsVsLlmsPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.com";
  const site = new URL(siteUrl);
  const canonicalUrl = new URL("/compare/dgs-vs-llms", site).href;

  const breadCrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: new URL("/", site).href },
      { "@type": "ListItem", position: 2, name: "Compare", item: new URL("/compare", site).href },
      { "@type": "ListItem", position: 3, name: "DGS vs LLMs", item: canonicalUrl },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "DGS vs LLMs (Not a Chatbot)",
    url: canonicalUrl,
    description,
    isPartOf: { "@type": "WebSite", name: "Aternox", url: site.href },
    publisher: { "@type": "Organization", name: "Aternox", url: site.href },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is DGS an LLM?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. DGS is not a language model. It’s a synthesis system designed for structured outputs and verification gates — optimized for professional workflows, not conversation.",
        },
      },
      {
        "@type": "Question",
        name: "Does DGS replace LLMs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not necessarily. LLMs can be excellent for drafting and exploration. DGS is aimed at outputs that teams need to review, govern, and rely on in production contexts.",
        },
      },
      {
        "@type": "Question",
        name: "Why does “not a chatbot” matter?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Because chat is an interface optimized for fluent responses, not for auditability. Professional workflows need explicit structure, stable assumptions, and outputs that can be checked and repeated.",
        },
      },
    ],
  };

  return (
    <Shell>
      <Page
        eyebrow="Comparison"
        title={
          <>
            AI LLMs <span className="text-white/40">(not a chatbot)</span> vs <span className="text-gradient text-shimmer">DGS</span>.
          </>
        }
        subtitle="A straight comparison focused on workflow reliability: what teams can review, govern, and trust."
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

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
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-2">Practical takeaway</div>
            <h2 className="mt-3 font-sans text-2xl font-semibold tracking-[-0.04em] md:text-3xl">
              The best tool depends on whether variance is acceptable.
            </h2>
            <p className="mt-4 max-w-3xl text-base text-muted md:text-lg">
              If your workflow can tolerate ambiguity, LLMs are often enough. If you need outputs that hold up under review — policies, audits, regulated environments, or enterprise delivery — you want a system designed around structured outputs and verification.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/dgs" className="btn-primary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105">
                Learn about DGS
              </Link>
              <Link href="/waitlist" className="btn-secondary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105">
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
              <Link href="/compare/dgs-vs-chatbots" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">
                DGS vs chatbots
              </Link>
              <Link href="/compare/dgs-vs-llms/structured-outputs" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">
                Structured outputs vs chat output
              </Link>
              <Link href="/compare/dgs-vs-llms/auditability" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">
                Auditability of AI outputs
              </Link>
              <Link href="/compare/dgs-vs-llms/verification-gates" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">
                Verification gates
              </Link>
              <Link href="/compare/dgs-vs-llms/scope-control" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">
                Scope control & assumptions
              </Link>
              <Link href="/compare/dgs-vs-llms/evaluation" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">
                How to evaluate LLM workflows vs DGS
              </Link>
              <Link href="/compare/dgs-vs-llms/enterprise-workflows" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">
                Enterprise workflow fit
              </Link>
              <Link href="/compare/dgs-vs-llms/rag-and-synthesis" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">
                RAG vs verified synthesis
              </Link>
              <Link href="/compare/dgs-vs-llms/tool-orchestration" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">
                Tool orchestration vs governed outputs
              </Link>
              <Link href="/learn/verified-synthesis" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">
                Verified synthesis (pillar)
              </Link>
              <Link href="/learn/evaluation-verification" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">
                Evaluation & verification (pillar)
              </Link>
            </div>
          </div>
        </FadeIn>
      </Page>
    </Shell>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScaleIn } from "@/components/animations/ScaleIn";

const title = "Tool Calling: Agent Frameworks vs Governed Outputs | Aternox";
const description =
  "Tool calling is how agent frameworks execute actions. This page explains the mechanics and why governance still needs reviewable artifacts.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/compare/dgs-vs-agent-frameworks/tool-calling" },
  openGraph: { title, description, url: "/compare/dgs-vs-agent-frameworks/tool-calling" },
  twitter: { title, description, card: "summary_large_image" },
};

const facts = [
  {
    title: "Tool calling is structured I/O",
    body: "Many modern LLM APIs support a structured “function/tool call” output where the model selects a tool name and emits JSON-like arguments.",
  },
  {
    title: "Frameworks orchestrate calls",
    body: "Agent frameworks typically coordinate steps: prompt → tool call → tool result → next prompt. They don’t replace the underlying model.",
  },
  {
    title: "Actions amplify risk",
    body: "Once a system can call tools (write files, hit APIs, change configs), the difference between “draft” and “approved” becomes operationally important.",
  },
];

export default function ToolCallingPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.com";
  const site = new URL(siteUrl);
  const canonicalUrl = new URL("/compare/dgs-vs-agent-frameworks/tool-calling", site).href;

  const breadCrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: new URL("/", site).href },
      { "@type": "ListItem", position: 2, name: "Compare", item: new URL("/compare", site).href },
      { "@type": "ListItem", position: 3, name: "DGS vs Agent Frameworks", item: new URL("/compare/dgs-vs-agent-frameworks", site).href },
      { "@type": "ListItem", position: 4, name: "Tool Calling", item: canonicalUrl },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Tool Calling: Agent Frameworks vs Governed Outputs",
    url: canonicalUrl,
    description,
    isPartOf: { "@type": "WebSite", name: "Aternox", url: site.href },
    publisher: { "@type": "Organization", name: "Aternox", url: site.href },
  };

  return (
    <Shell>
      <Page
        eyebrow="DGS vs Agent Frameworks"
        title={
          <>
            Tool <span className="text-gradient text-shimmer">calling</span>.
          </>
        }
        subtitle="Tool calling makes agents useful — and makes governance mandatory."
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />

        <FadeIn>
          <div className="grid gap-4 md:grid-cols-3">
            {facts.map((s, i) => (
              <ScaleIn key={s.title} delay={0.05 * i} className="rounded-3xl border border-border/70 bg-surface/50 p-7 glow">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-muted">Fact</div>
                <div className="mt-3 text-sm font-semibold text-brand-2">{s.title}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.body}</p>
              </ScaleIn>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="mt-12 glass rounded-3xl border border-gradient p-10 glow-intense">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-2">What to require</div>
            <h2 className="mt-3 font-sans text-2xl font-semibold tracking-[-0.04em] md:text-3xl">A reviewable artifact before execution</h2>
            <p className="mt-4 max-w-3xl text-base text-muted md:text-lg">
              If the system is going to act, require a structured plan/spec first (scope, assumptions, acceptance criteria), then a human approval step.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/compare/dgs-vs-agent-frameworks" className="btn-secondary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105">
                Back to comparison
              </Link>
              <Link href="/compare/dgs-vs-llms/verification-gates" className="btn-primary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105">
                Verification gates
              </Link>
            </div>
          </div>
        </FadeIn>
      </Page>
    </Shell>
  );
}

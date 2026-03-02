import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScaleIn } from "@/components/animations/ScaleIn";

const title = "Memory & State in Agent Frameworks | Aternox";
const description =
  "Agent “memory” is usually stored state (messages, docs, embeddings). This page explains what it is, what it isn’t, and why deterministic review gates still matter.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/compare/dgs-vs-agent-frameworks/memory-and-state" },
  openGraph: { title, description, url: "/compare/dgs-vs-agent-frameworks/memory-and-state" },
  twitter: { title, description, card: "summary_large_image" },
};

const facts = [
  {
    title: "“Memory” is data, not understanding",
    body: "In practice, agent memory is stored state: chat history, documents, retrieval results, or structured notes saved to a database.",
  },
  {
    title: "State shapes behavior",
    body: "What you store (and how you retrieve it) changes the next model call — which can change decisions and tool calls downstream.",
  },
  {
    title: "Garbage in, garbage out still applies",
    body: "If the stored state is wrong, stale, or out of scope, the agent can behave confidently while being incorrect.",
  },
];

export default function MemoryAndStatePage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.com";
  const site = new URL(siteUrl);
  const canonicalUrl = new URL("/compare/dgs-vs-agent-frameworks/memory-and-state", site).href;

  const breadCrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: new URL("/", site).href },
      { "@type": "ListItem", position: 2, name: "Compare", item: new URL("/compare", site).href },
      { "@type": "ListItem", position: 3, name: "DGS vs Agent Frameworks", item: new URL("/compare/dgs-vs-agent-frameworks", site).href },
      { "@type": "ListItem", position: 4, name: "Memory & State", item: canonicalUrl },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Memory & State in Agent Frameworks",
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
            Memory & <span className="text-gradient text-shimmer">state</span>.
          </>
        }
        subtitle="Most “agent memory” is stored state — and state needs governance."
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
          <div className="mt-12 rounded-3xl border border-border/70 bg-surface/40 p-8">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-muted">Related reading</div>
            <div className="mt-6 flex flex-col gap-3">
              <Link href="/compare/dgs-vs-agent-frameworks/tool-calling" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">
                Tool calling
              </Link>
              <Link href="/compare/dgs-vs-llms/rag-and-synthesis" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">
                RAG vs verified synthesis
              </Link>
              <Link href="/compare/dgs-vs-agent-frameworks" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">
                Back to comparison
              </Link>
            </div>
          </div>
        </FadeIn>
      </Page>
    </Shell>
  );
}

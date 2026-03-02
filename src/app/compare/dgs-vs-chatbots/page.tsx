import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScaleIn } from "@/components/animations/ScaleIn";

const title = "DGS vs Chatbots | Aternox";
const description =
  "Why chat UX fails for high-stakes work, and what changes when outputs are built as reviewable artifacts with deterministic decision rules.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/compare/dgs-vs-chatbots" },
  openGraph: { title, description, url: "/compare/dgs-vs-chatbots" },
  twitter: { title, description, card: "summary_large_image" },
};

const points = [
  {
    title: "Chat optimizes for fluency",
    body: "Chatbots are designed to respond smoothly and quickly. That’s helpful for exploration — but it encourages outputs that are hard to audit.",
  },
  {
    title: "Professional work needs structure",
    body: "When decisions matter, you need clear premises, explicit scope, and an output format that can be reviewed by humans and systems.",
  },
  {
    title: "DGS is workflow-first",
    body: "DGS is built to produce structured artifacts (plans, specifications, architectures) that are meant to be verified, governed, and reused.",
  },
];

export default function DgsVsChatbotsPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.com";
  const site = new URL(siteUrl);
  const canonicalUrl = new URL("/compare/dgs-vs-chatbots", site).href;

  const breadCrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: new URL("/", site).href },
      { "@type": "ListItem", position: 2, name: "Compare", item: new URL("/compare", site).href },
      { "@type": "ListItem", position: 3, name: "DGS vs Chatbots", item: canonicalUrl },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "DGS vs Chatbots",
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
            DGS vs <span className="text-gradient text-shimmer">chatbots</span>.
          </>
        }
        subtitle="Chat is a UI. It’s not a professional workflow. Here’s what breaks — and what replaces it."
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />

        <FadeIn>
          <div className="grid gap-4 md:grid-cols-3">
            {points.map((p, i) => (
              <ScaleIn key={p.title} delay={0.05 * i} className="rounded-3xl border border-border/70 bg-surface/50 p-7 glow">
                <div className="text-sm font-semibold text-brand-2">{p.title}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
              </ScaleIn>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="mt-12 glass rounded-3xl border border-gradient p-10 glow-intense">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-2">If you’re buying</div>
            <h2 className="mt-3 font-sans text-2xl font-semibold tracking-[-0.04em] md:text-3xl">
              Ask for reviewable artifacts, not good answers.
            </h2>
            <p className="mt-4 max-w-3xl text-base text-muted md:text-lg">
              Teams don’t ship “answers.” They ship specifications, plans, changes, and documents. A system that can’t produce those reliably will turn into a chat toy.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/compare/dgs-vs-llms" className="btn-secondary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105">
                Read: DGS vs LLMs
              </Link>
              <Link href="/contact" className="btn-primary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105">
                Talk to Aternox
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
              <Link href="/compare/dgs-vs-agent-frameworks" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">
                DGS vs agent frameworks
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

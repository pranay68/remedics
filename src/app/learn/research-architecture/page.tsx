import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScaleIn } from "@/components/animations/ScaleIn";

const title = "Research Architecture | Learn | Aternox";
const description =
  "A pillar on designing research workflows that produce reusable artifacts: problem framing, method selection, and deterministic review gates for outputs.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/learn/research-architecture" },
  openGraph: { title, description, url: "/learn/research-architecture" },
  twitter: { title, description, card: "summary_large_image" },
};

const clusters = [
  {
    href: "/learn/research-architecture/template",
    title: "Research program template",
    desc: "A reusable template with deterministic review gates.",
  },
  {
    href: "/research",
    title: "Research",
    desc: "How Aternox approaches research workflows and outputs.",
  },
  {
    href: "/dgs",
    title: "DGS",
    desc: "The product concept: structured synthesis for real workflows.",
  },
  {
    href: "/compare/dgs-vs-llms",
    title: "DGS vs LLMs",
    desc: "Where chat-style outputs break and artifact-first wins.",
  },
];

export default function ResearchArchitectureLearnPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.site";
  const site = new URL(siteUrl);
  const canonicalUrl = new URL("/learn/research-architecture", site).href;

  const breadCrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: new URL("/", site).href },
      { "@type": "ListItem", position: 2, name: "Research Architecture", item: canonicalUrl },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Research Architecture",
    url: canonicalUrl,
    description,
    isPartOf: { "@type": "WebSite", name: "Aternox", url: site.href },
    publisher: { "@type": "Organization", name: "Aternox", url: site.href },
  };

  return (
    <Shell>
      <Page
        eyebrow="Learn"
        title={
          <>
            Research <span className="text-gradient text-shimmer">architecture</span>.
          </>
        }
        subtitle="Design research workflows that produce reusable artifacts, not throwaway answers."
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />

        <FadeIn>
          <div className="grid gap-4 md:grid-cols-3">
            {clusters.map((c, i) => (
              <ScaleIn key={c.href} delay={0.05 * i} className="rounded-3xl border border-border/70 bg-surface/50 p-7 glow">
                <div className="text-sm font-semibold text-brand-2">{c.title}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{c.desc}</p>
                <div className="mt-5">
                  <Link href={c.href} className="text-sm font-semibold text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">
                    Read
                  </Link>
                </div>
              </ScaleIn>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="mt-12 glass rounded-3xl border border-gradient p-10 glow-intense">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-2">Core idea</div>
            <h2 className="mt-3 font-sans text-2xl font-semibold tracking-[-0.04em] md:text-3xl">A workflow has a shape</h2>
            <p className="mt-4 max-w-3xl text-base text-muted md:text-lg">
              A research system should make scope explicit, separate exploration from decision-making, and produce artifacts that can be reviewed and reused later.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/compare" className="btn-secondary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105">
                Explore comparisons
              </Link>
              <Link href="/contact" className="btn-primary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105">
                Talk to Aternox
              </Link>
            </div>
          </div>
        </FadeIn>
      </Page>
    </Shell>
  );
}

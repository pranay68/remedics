import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScaleIn } from "@/components/animations/ScaleIn";

const title = "Verified Synthesis | Learn | Aternox";
const description =
  "A practical pillar on turning synthesis into reviewable, checkable artifacts — with deterministic decision gates, scope control, evidence, and human approval.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/learn/verified-synthesis" },
  openGraph: { title, description, url: "/learn/verified-synthesis" },
  twitter: { title, description, card: "summary_large_image" },
};

const clusters = [
  {
    href: "/compare/dgs-vs-llms",
    title: "DGS vs LLMs (not a chatbot)",
    desc: "What changes when outputs must be reviewable and governed.",
  },
  {
    href: "/compare/dgs-vs-chatbots",
    title: "DGS vs chatbots",
    desc: "Why chat UX breaks for professional workflows.",
  },
  {
    href: "/safety",
    title: "Safety and governance",
    desc: "How we think about guardrails, review, and failure modes.",
  },
  {
    href: "/compare/dgs-vs-llms/structured-outputs",
    title: "Structured outputs",
    desc: "Why artifact shape matters more than fluent prose.",
  },
  {
    href: "/compare/dgs-vs-llms/verification-gates",
    title: "Verification gates",
    desc: "How synthesis becomes something a team can actually trust.",
  },
  {
    href: "/learn/evaluation-verification",
    title: "Evaluation & verification",
    desc: "The review loop that turns synthesis into adoption.",
  },
];

export default function VerifiedSynthesisLearnPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.site";
  const site = new URL(siteUrl);
  const canonicalUrl = new URL("/learn/verified-synthesis", site).href;

  const breadCrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: new URL("/", site).href },
      { "@type": "ListItem", position: 2, name: "Verified Synthesis", item: canonicalUrl },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Verified Synthesis",
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
            Verified <span className="text-gradient text-shimmer">synthesis</span>.
          </>
        }
        subtitle="Turn model output into artifacts your team can review, approve, and reuse."
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
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-2">Definition</div>
            <h2 className="mt-3 font-sans text-2xl font-semibold tracking-[-0.04em] md:text-3xl">What “verified synthesis” means here</h2>
            <p className="mt-4 max-w-3xl text-base text-muted md:text-lg">
              It means synthesis that is designed to be checked: scoped inputs, explicit assumptions, structured outputs, and a human approval step before anything is relied upon.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/compare" className="btn-secondary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105">
                Explore comparisons
              </Link>
              <Link href="/waitlist" className="btn-primary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105">
                Join the waitlist
              </Link>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.45}>
          <div className="mt-12 rounded-3xl border border-border/70 bg-surface/40 p-8">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-muted">Continue the topic</div>
            <div className="mt-6 flex flex-col gap-3">
              <Link href="/learn/governed-autonomy" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">Governed autonomy</Link>
              <Link href="/learn/research-architecture" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">Research architecture</Link>
              <Link href="/research" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">FLT3 proof of concept</Link>
            </div>
          </div>
        </FadeIn>
      </Page>
    </Shell>
  );
}

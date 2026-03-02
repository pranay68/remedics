import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScaleIn } from "@/components/animations/ScaleIn";

const title = "Verification Gates in AI Workflows | DGS vs LLMs | Aternox";
const description =
  "Why verification gates matter: deterministic checkpoints that separate draft from approved artifacts, reduce risk, and make adoption safe for real teams.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/compare/dgs-vs-llms/verification-gates" },
  openGraph: { title, description, url: "/compare/dgs-vs-llms/verification-gates" },
  twitter: { title, description, card: "summary_large_image" },
};

const sections = [
  {
    title: "Draft vs approved is a real boundary",
    body: "In professional work, drafts are allowed to be wrong. Approved artifacts must be checkable and fit-for-use.",
  },
  {
    title: "Gates make risk explicit",
    body: "Verification gates define what must be true before an output is adopted — review, acceptance criteria, and sign-off.",
  },
  {
    title: "DGS is designed around gating",
    body: "DGS emphasizes structured artifacts and verification steps so teams can review the output and decide whether to rely on it.",
  },
];

export default function VerificationGatesPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.com";
  const site = new URL(siteUrl);
  const canonicalUrl = new URL("/compare/dgs-vs-llms/verification-gates", site).href;

  const breadCrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: new URL("/", site).href },
      { "@type": "ListItem", position: 2, name: "Compare", item: new URL("/compare", site).href },
      { "@type": "ListItem", position: 3, name: "DGS vs LLMs", item: new URL("/compare/dgs-vs-llms", site).href },
      { "@type": "ListItem", position: 4, name: "Verification Gates", item: canonicalUrl },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Verification Gates in AI Workflows",
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
            Verification <span className="text-gradient text-shimmer">gates</span>.
          </>
        }
        subtitle="Make “review” a first-class step, not a best-effort habit."
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
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-2">Practical gate</div>
            <h2 className="mt-3 font-sans text-2xl font-semibold tracking-[-0.04em] md:text-3xl">Require acceptance criteria</h2>
            <p className="mt-4 max-w-3xl text-base text-muted md:text-lg">
              Before adoption, ensure the artifact includes scope, assumptions, acceptance criteria, and an explicit approval step.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/compare/dgs-vs-llms" className="btn-secondary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105">
                Back to DGS vs LLMs
              </Link>
              <Link href="/safety" className="btn-primary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105">
                Safety & governance
              </Link>
            </div>
          </div>
        </FadeIn>
      </Page>
    </Shell>
  );
}

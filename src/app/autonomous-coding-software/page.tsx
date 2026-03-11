import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { FadeIn } from "@/components/animations/FadeIn";

const title = "Synthesis Software for Enterprise | DGS by Aternox";
const description =
  "DGS is a synthesis engine built for enterprise teams — verifiable, traceable output across every domain.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/autonomous-coding-software" },
  openGraph: { title, description, url: "/autonomous-coding-software" },
  twitter: { title, description, card: "summary_large_image" },
};

export default function AutonomousCodingSoftwarePage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.site";
  const site = new URL(siteUrl);
  const canonicalUrl = new URL("/autonomous-coding-software", site).href;

  const breadCrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: new URL("/", site).href },
      {
        "@type": "ListItem",
        position: 2,
        name: "Autonomous Coding Software",
        item: canonicalUrl,
      },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
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
        name: "What is autonomous coding software?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Autonomous coding software turns requirements into code changes with minimal manual effort. In enterprise settings, it must stay reviewable, governed, and safe for production workflows.",
        },
      },
      {
        "@type": "Question",
        name: "Is DGS a chatbot?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. DGS is a synthesis engine, not a chatbot. It produces structured, verifiable output through logic gates.",
        },
      },
      {
        "@type": "Question",
        name: "Can teams review everything before shipping?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Every DGS output includes a complete logic trace that can be reviewed, validated, and falsified.",
        },
      },
    ],
  };

  return (
    <Shell>
      <Page
        eyebrow="SEO"
        title={
          <>
            Autonomous <span className="text-gradient text-shimmer">coding software</span> for enterprise.
          </>
        }
        subtitle={
          "DGS is Aternox's synthesis engine — built for teams that need verified answers without guessing."
        }
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />

        <FadeIn>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-border/70 bg-surface/50 p-7 glow">
              <div className="text-sm font-semibold text-brand-2">Reviewable Output</div>
              <p className="mt-2 text-sm leading-6 text-muted">
                Changes are designed to be inspected and approved by real engineers — not just accepted blindly.
              </p>
            </div>
            <div className="rounded-3xl border border-border/70 bg-surface/50 p-7 glow">
              <div className="text-sm font-semibold text-brand-2">Enterprise Controls</div>
              <p className="mt-2 text-sm leading-6 text-muted">
                Governance-friendly workflow so autonomy stays accountable in production environments.
              </p>
            </div>
            <div className="rounded-3xl border border-border/70 bg-surface/50 p-7 glow">
              <div className="text-sm font-semibold text-brand-2">Speed That Holds</div>
              <p className="mt-2 text-sm leading-6 text-muted">
                Move faster on large codebases without sacrificing structure, readability, or long-term ownership.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="mt-10 glass rounded-3xl border border-gradient p-10 glow-intense">
            <h2 className="font-sans text-2xl font-semibold tracking-[-0.04em] md:text-3xl">
              DGS is built for enterprise, not demos.
            </h2>
            <p className="mt-4 max-w-3xl text-base text-muted md:text-lg">
              If you need verified, traceable output at enterprise scale — structured reasoning, logic traces, and reviewable results.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/dgs"
                className="btn-primary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105"
              >
                Learn about DGS
              </Link>
              <Link
                href="/contact"
                className="btn-secondary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105"
              >
                Talk to sales
              </Link>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.45}>
          <div className="mt-12 rounded-3xl border border-border/70 bg-surface/40 p-8">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-muted">FAQ</div>
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold">What is autonomous coding software?</h3>
                <p className="mt-2 text-sm text-muted">
                  It’s software that can translate intent into code changes with minimal manual effort. Enterprise-grade autonomy
                  must stay governed and reviewable.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">How is DGS different?</h3>
                <p className="mt-2 text-sm text-muted">
                  DGS synthesizes through structured logic gates. Outputs are traceable and falsifiable, with a reviewable logic trace.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Can I get early access?</h3>
                <p className="mt-2 text-sm text-muted">
                  Yes — request access and tell us your environment and goals.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Page>
    </Shell>
  );
}

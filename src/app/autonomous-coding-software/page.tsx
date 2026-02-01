import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { FadeIn } from "@/components/animations/FadeIn";

const title = "Autonomous Coding Software for Enterprise Teams | Reprog";
const description =
  "Reprog is autonomous coding software built for enterprise teams — shipping production-ready changes with reviewable output, governance, and speed.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/autonomous-coding-software" },
  openGraph: { title, description },
  twitter: { title, description, card: "summary_large_image" },
};

export default function AutonomousCodingSoftwarePage() {
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
        name: "Is Reprog a chatbot?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Reprog is a product built for engineering teams that need production-grade output and predictable workflows — not a casual chat toy.",
        },
      },
      {
        "@type": "Question",
        name: "Can teams review everything before shipping?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Reprog is designed to produce reviewable output and integrate with real team workflows so humans stay in control.",
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
          "Reprog is Aternox’s autonomous engineering product — built for teams that need speed without losing control."
        }
      >
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
              Reprog is built for teams, not demos.
            </h2>
            <p className="mt-4 max-w-3xl text-base text-muted md:text-lg">
              If you’re searching for autonomous coding software, what you actually need is predictable delivery: scoped changes,
              reviewable output, and an enterprise workflow that leadership can sign off on.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/product"
                className="btn-primary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105"
              >
                See Reprog
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
                <h3 className="text-lg font-semibold">How is Reprog different?</h3>
                <p className="mt-2 text-sm text-muted">
                  Reprog is built for production workflows: review, governance, and output your team can actually maintain.
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

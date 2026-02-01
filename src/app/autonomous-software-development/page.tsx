import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { FadeIn } from "@/components/animations/FadeIn";

const title = "Autonomous Software Development for Enterprise | Reprog";
const description =
  "Reprog is autonomous software development by Aternox — enterprise-grade delivery with controlled, reviewable output.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/autonomous-software-development" },
  openGraph: { title, description },
  twitter: { title, description, card: "summary_large_image" },
};

export default function AutonomousSoftwareDevelopmentPage() {
  const breadCrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://aternox.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Autonomous Software Development",
        item: "https://aternox.com/autonomous-software-development",
      },
    ],
  };

  return (
    <Shell>
      <Page
        eyebrow="SEO"
        title={
          <>
            Autonomous <span className="text-gradient text-shimmer">software development</span>, without the chaos.
          </>
        }
        subtitle={
          "Reprog is built for teams that need production-grade delivery — fast, controlled, and reviewable."
        }
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbJsonLd) }}
        />

        <FadeIn>
          <div className="grid gap-4 md:grid-cols-12">
            <div className="md:col-span-7">
              <div className="glass rounded-3xl border border-gradient p-10 glow-intense">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-2">
                  What it means
                </div>
                <h2 className="mt-3 font-sans text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
                  Enterprise autonomy is not magic.
                </h2>
                <p className="mt-4 max-w-3xl text-base text-muted md:text-lg">
                  Autonomous software development only matters if it produces changes your team can trust: scoped work, reviewable output,
                  and governance that fits your org.
                </p>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-3xl border border-border/70 bg-surface/50 p-8 glow">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-muted">Built by</div>
                <div className="mt-3 text-2xl font-semibold">Aternox</div>
                <p className="mt-3 text-sm leading-6 text-muted">
                  Reprog is Aternox’s product for autonomous engineering — designed for enterprise workflows and real codebases.
                </p>
                <div className="mt-8 flex flex-col gap-3">
                  <Link
                    href="/product"
                    className="btn-primary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105"
                  >
                    See Reprog
                  </Link>
                  <Link
                    href="/pricing"
                    className="btn-secondary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105"
                  >
                    Pricing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-border/70 bg-surface/50 p-7">
              <div className="text-sm font-semibold text-brand-2">Scope first</div>
              <p className="mt-2 text-sm leading-6 text-muted">
                Great autonomy starts with clear boundaries — so teams can approve intent before code changes.
              </p>
            </div>
            <div className="rounded-3xl border border-border/70 bg-surface/50 p-7">
              <div className="text-sm font-semibold text-brand-2">Reviewable by humans</div>
              <p className="mt-2 text-sm leading-6 text-muted">
                Output stays readable and auditable, so engineers can move fast without losing ownership.
              </p>
            </div>
            <div className="rounded-3xl border border-border/70 bg-surface/50 p-7">
              <div className="text-sm font-semibold text-brand-2">Enterprise-ready</div>
              <p className="mt-2 text-sm leading-6 text-muted">
                Built to match enterprise realities: governance, onboarding, and production constraints.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.45}>
          <div className="mt-12 rounded-3xl border border-border/70 bg-surface/40 p-8">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-muted">Related</div>
            <div className="mt-6 flex flex-col gap-3">
              <Link href="/autonomous-coding-software" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">
                Autonomous coding software
              </Link>
              <Link href="/safety" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">
                Safety & privacy posture
              </Link>
              <Link href="/contact" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">
                Contact
              </Link>
            </div>
          </div>
        </FadeIn>
      </Page>
    </Shell>
  );
}

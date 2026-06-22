import type { Metadata } from "next";
import Link from "next/link";
import { Page } from "@/components/site/Page";
import { Shell } from "@/components/site/Shell";

const title = "Autonomous Coding Software";
const description =
  "ReArch helps recover autonomous coding software projects when AI-built apps become unstable, incoherent, or blocked.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/autonomous-coding-software" },
  openGraph: { title, description, url: "/autonomous-coding-software" },
  twitter: { title, description, card: "summary_large_image" },
};

export default function AutonomousCodingSoftwarePage() {
  return (
    <Shell>
      <Page
        eyebrow="Autonomous Coding Software"
        title="When autonomous coding software creates a recovery case."
        subtitle="ReArch is for teams whose AI-built software now needs diagnosis, scope control, and a bounded recovery package."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            "The repo drifted away from visible product behavior.",
            "The AI-built app works in fragments but not as a coherent system.",
            "The team needs recovery discipline, not another layer of improvisation.",
          ].map((item, index) => (
            <div key={item} className="rounded-3xl border border-border/70 bg-surface/50 p-8">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-2">
                Signal 0{index + 1}
              </div>
              <p className="mt-4 text-base leading-7 text-muted">{item}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            href="/how-it-works"
            className="btn-secondary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105"
          >
            Development status
          </Link>
          <Link
            href="/waitlist"
            className="btn-primary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105"
          >
            Launching July 1
          </Link>
        </div>
      </Page>
    </Shell>
  );
}

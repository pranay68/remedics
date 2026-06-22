import type { Metadata } from "next";
import Link from "next/link";
import { Page } from "@/components/site/Page";
import { Shell } from "@/components/site/Shell";

const title = "Autonomous Software Development";
const description =
  "ReArch supports autonomous software development teams when AI-generated delivery creates broken, messy, or commercially risky systems.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/autonomous-software-development" },
  openGraph: { title, description, url: "/autonomous-software-development" },
  twitter: { title, description, card: "summary_large_image" },
};

export default function AutonomousSoftwareDevelopmentPage() {
  return (
    <Shell>
      <Page
        eyebrow="Autonomous Software Development"
        title="Autonomous software development still needs recovery architecture."
        subtitle="ReArch exists for the moment when rapid AI-built output leaves the team with unclear ownership, unstable behavior, or a buyer-facing product that no longer holds together."
      >
        <div className="rounded-3xl border border-border/70 bg-surface/50 p-10">
          <p className="max-w-3xl text-base leading-7 text-muted">
            The recovery problem is rarely just one bug. It is usually a system
            truth problem: repo, runtime, handoff, and commercial surface stopped
            agreeing with each other. ReArch approaches that as a bounded recovery
            case.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/trust"
              className="btn-secondary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105"
            >
              Read trust posture
            </Link>
            <Link
              href="/waitlist"
              className="btn-primary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105"
            >
              Launching July 1
            </Link>
          </div>
        </div>
      </Page>
    </Shell>
  );
}

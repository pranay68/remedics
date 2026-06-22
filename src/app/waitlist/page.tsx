import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { Page } from "@/components/site/Page";
import { Shell } from "@/components/site/Shell";
import { WaitlistForm } from "@/components/site/waitlist/WaitlistForm";

export const metadata: Metadata = {
  title: "Waitlist",
  description:
    "ReArch launches July 1. The waitlist tracks early signal while infrastructure finishes processing.",
  alternates: { canonical: "/waitlist" },
  openGraph: {
    title: "Waitlist",
    description:
      "ReArch launches July 1. The waitlist tracks early signal while infrastructure finishes processing.",
    url: "/waitlist",
  },
  twitter: {
    card: "summary_large_image",
    title: "Waitlist",
    description:
      "ReArch launches July 1. The waitlist tracks early signal while infrastructure finishes processing.",
  },
};

export default function WaitlistPage() {
  return (
    <Shell>
      <Page
        eyebrow="Waitlist"
        title="Launching July 1."
        subtitle="Development status: ready. Infrastructure status: processing. This page is for early signal only, not live intake."
      >
        <div className="grid gap-12 md:grid-cols-[1.05fr_0.95fr]">
          <FadeIn>
            <div className="rounded-3xl border border-border/70 bg-surface/50 p-8 glow">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-2">
                What happens next
              </div>
              <div className="mt-4 space-y-3 text-sm leading-6 text-muted">
                <p>We review the signal you send.</p>
                <p>Development status is ready for launch copy and flow.</p>
                <p>Infrastructure is still processing ahead of the July 1 launch.</p>
              </div>
              <div className="mt-8">
                <Link
                  href="/pricing"
                  className="btn-secondary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105"
                >
                  Pricing doctrine
                </Link>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="rounded-3xl border border-border/70 bg-surface/50 p-8 glow">
              <WaitlistForm source="waitlist-page" />
            </div>
          </FadeIn>
        </div>
      </Page>
    </Shell>
  );
}

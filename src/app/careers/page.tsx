import type { Metadata } from "next";
import Link from "next/link";
import { Page } from "@/components/site/Page";
import { Shell } from "@/components/site/Shell";

const title = "Careers";
const description =
  "Aternox hires builders who can recover messy systems with honesty and scope discipline.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/careers" },
  openGraph: { title, description, url: "/careers" },
  twitter: { title, description, card: "summary_large_image" },
};

export default function CareersPage() {
  return (
    <Shell>
      <Page
        eyebrow="Careers"
        title="We value people who can recover a messy system without pretending it is tidy."
        subtitle="No fabricated hiring funnel lives here. Use contact to reach out if your work fits ReArch recovery, systems clarity, and honest execution."
      >
        <div className="rounded-3xl border border-border/70 bg-surface/50 p-10">
          <p className="max-w-3xl text-base leading-7 text-muted">
            We look for engineers and operators who can read the real system,
            separate architecture bugs from execution bugs, and work with scope
            discipline under uncertainty.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="btn-primary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105"
            >
              Contact Aternox
            </Link>
          </div>
        </div>
      </Page>
    </Shell>
  );
}

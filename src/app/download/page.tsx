import type { Metadata } from "next";
import Link from "next/link";
import { Page } from "@/components/site/Page";
import { Shell } from "@/components/site/Shell";

const title = "Download";
const description =
  "There is no public proof bundle or downloadable dossier on the ReArch site.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/download" },
  openGraph: { title, description, url: "/download" },
  twitter: { title, description, card: "summary_large_image" },
};

export default function DownloadPage() {
  return (
    <Shell>
      <Page
        eyebrow="Download"
        title="No public dossier download lives here."
        subtitle="We removed the old proof-download posture. ReArch does not publish internal package artifacts or fabricated examples as marketing collateral."
      >
        <div className="rounded-3xl border border-border/70 bg-surface/50 p-10">
          <p className="max-w-3xl text-base leading-7 text-muted">
            ReArch launches July 1. Development status is ready, infrastructure
            is still processing, and the public site stays on process truth rather
            than public bundle theater.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/waitlist"
              className="btn-primary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105"
            >
              Launching July 1
            </Link>
            <Link
              href="/how-it-works"
              className="btn-secondary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105"
            >
              Development status
            </Link>
          </div>
        </div>
      </Page>
    </Shell>
  );
}

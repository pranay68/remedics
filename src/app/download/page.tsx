import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";

export default function DownloadPage() {
  return (
    <Shell>
      <Page
        eyebrow="Download"
        title={
          <>
            Download <span className="text-gradient text-shimmer">Reprog</span>.
          </>
        }
        subtitle="We’ll publish the official download link here at launch. Until then, request access and we’ll reach out when builds are ready."
      >
        <div className="glass rounded-3xl border border-border/70 p-8 glow">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-muted">
            Status
          </div>
          <h2 className="mt-3 font-sans text-2xl font-semibold tracking-[-0.04em] md:text-3xl">
            Coming soon.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            We’re finalizing installers and enterprise deployment bundles. If you want early access, share your
            intended use-case and environment.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="btn-primary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105"
            >
              Request access
            </Link>
            <Link
              href="/product"
              className="btn-secondary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105"
            >
              See what Reprog does
            </Link>
          </div>
        </div>
      </Page>
    </Shell>
  );
}


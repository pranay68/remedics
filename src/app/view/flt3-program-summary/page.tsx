import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";

const PDF_PATH = "/downloads/flt3-summary.pdf";

export default function FLT3ProgramSummaryViewPage() {
  return (
    <Shell>
      <Page
        eyebrow="Research"
        title={
          <>
            FLT3 Program <span className="text-gradient text-shimmer">Summary</span>.
          </>
        }
        subtitle="View the one-page public summary in-browser, or download it as a PDF."
      >
        <div className="glass rounded-3xl border border-border/70 p-5 glow md:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-muted">
              One-page PDF
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/research"
                className="btn-secondary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105"
              >
                Back to research
              </Link>
              <a
                href={PDF_PATH}
                download
                className="btn-primary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105"
              >
                Download PDF
              </a>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-border/70 bg-black/30">
            <iframe
              src={`${PDF_PATH}#view=FitH`}
              title="FLT3 Program Summary PDF"
              className="h-[75vh] w-full"
            />
          </div>

          <p className="mt-4 text-xs text-muted">
            If the PDF doesn’t render in your browser, use{" "}
            <a href={PDF_PATH} className="underline underline-offset-2">
              the direct download link
            </a>
            .
          </p>
        </div>
      </Page>
    </Shell>
  );
}

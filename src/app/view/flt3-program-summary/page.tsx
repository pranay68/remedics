import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";

const PDF_PATH = "/downloads/DGS_FLT3_Scientific_Overview.pdf";

const title = "FLT3 Scientific Overview (PDF) | Aternox";
const description =
  "View the FLT3 scientific overview in your browser, or download it as a PDF.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/view/flt3-program-summary" },
  openGraph: { title, description, url: "/view/flt3-program-summary" },
  twitter: { title, description, card: "summary_large_image" },
};

export default function FLT3ProgramSummaryViewPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.site";
  const site = new URL(siteUrl);
  const canonicalUrl = new URL("/view/flt3-program-summary", site).href;

  const breadCrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: new URL("/", site).href },
      { "@type": "ListItem", position: 2, name: "Research", item: new URL("/research", site).href },
      { "@type": "ListItem", position: 3, name: "FLT3 Scientific Overview", item: canonicalUrl },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "FLT3 Scientific Overview (PDF)",
    url: canonicalUrl,
    description,
    isPartOf: { "@type": "WebSite", name: "Aternox", url: site.href },
    publisher: { "@type": "Organization", name: "Aternox", url: site.href },
  };

  return (
    <Shell>
      <Page
        eyebrow="Research"
        title={
          <>
            FLT3 Program <span className="text-gradient text-shimmer">Summary</span>.
          </>
        }
        subtitle="View the FLT3 scientific overview in-browser, or download it as a PDF."
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
        />
        <div className="glass rounded-3xl border border-border/70 p-5 glow md:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-muted">
              Public PDF
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
              title="FLT3 Scientific Overview PDF"
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

import type { Metadata } from "next";
import { FadeIn } from "@/components/animations/FadeIn";
import { Page } from "@/components/site/Page";
import { EnterpriseForm } from "@/components/site/contact/EnterpriseForm";
import { Shell } from "@/components/site/Shell";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a ReArch intake conversation or send a general company inquiry to Aternox.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact",
    description:
      "Start a ReArch intake conversation or send a general company inquiry to Aternox.",
    url: "/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact",
    description:
      "Start a ReArch intake conversation or send a general company inquiry to Aternox.",
  },
};

export default function ContactPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.site";
  const site = new URL(siteUrl);
  const canonicalUrl = new URL("/contact", site).href;

  const breadCrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: new URL("/", site).href },
      { "@type": "ListItem", position: 2, name: "Contact", item: canonicalUrl },
    ],
  };

  return (
    <Shell>
      <Page
        eyebrow="Contact"
        title="Start the intake conversation."
        subtitle="Use this page for ReArch case intake, company questions, or press. We retired the old research-only path."
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbJsonLd) }}
        />
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <FadeIn>
            <div className="rounded-3xl border border-border/70 bg-surface/50 p-8 glow">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-2 mb-3">
                What to send
              </div>
              <div className="space-y-3 text-sm leading-6 text-muted">
                <p>The broken app or repo signal.</p>
                <p>The current failure or confusion you need resolved.</p>
                <p>Anything that clarifies urgency, scope, or buyer constraints.</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="rounded-3xl border border-border/70 bg-surface/50 p-8 glow">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-2 mb-3">
                Intake / Company Inquiry
              </div>
              <p className="mb-6 text-sm text-muted">
                This form routes ReArch intake and general company questions
                without pretending there is already a separate live intake portal.
              </p>
              <EnterpriseForm />
            </div>
          </FadeIn>
        </div>
      </Page>
    </Shell>
  );
}

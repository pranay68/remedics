import type { Metadata } from "next";
import { Page } from "@/components/site/Page";
import { Shell } from "@/components/site/Shell";

const title = "Terms";
const description = "Public site terms for Aternox and the ReArch company surface.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/terms" },
  openGraph: { title, description, url: "/terms" },
  twitter: { title, description, card: "summary_large_image" },
};

export default function TermsPage() {
  return (
    <Shell>
      <Page
        eyebrow="Terms"
        title="The public site is informational until a case is actually engaged."
        subtitle="These terms stay narrow on purpose: the website explains the service and intake path, but it is not itself a client agreement or a guarantee of outcome."
      >
        <div className="space-y-6 rounded-3xl border border-border/70 bg-surface/50 p-10 text-sm leading-7 text-muted">
          <p>
            Public site content is provided for general information about Aternox
            and ReArch.
          </p>
          <p>
            Submission through waitlist or contact does not create a client
            relationship, a quote, or an obligation to run a recovery case.
          </p>
          <p>
            Any real engagement, scope, pricing, delivery commitment, or remedy
            is governed by explicit confirmation and direct agreement, not by
            public marketing copy.
          </p>
        </div>
      </Page>
    </Shell>
  );
}

import type { Metadata } from "next";
import { Page } from "@/components/site/Page";
import { Shell } from "@/components/site/Shell";

const title = "Privacy";
const description = "Privacy information for the Aternox public site and ReArch intake surfaces.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy" },
  openGraph: { title, description, url: "/privacy" },
  twitter: { title, description, card: "summary_large_image" },
};

export default function PrivacyPage() {
  return (
    <Shell>
      <Page
        eyebrow="Privacy"
        title="We keep the public promise narrow."
        subtitle="This page states only the privacy posture we can honestly support on the public site and intake forms."
      >
        <div className="space-y-6 rounded-3xl border border-border/70 bg-surface/50 p-10 text-sm leading-7 text-muted">
          <p>
            The Aternox public site collects only the information people submit
            through contact and waitlist forms, along with basic security and rate
            limiting data required to protect those forms.
          </p>
          <p>
            We do not use this page to promise more than the current product
            foundations support. Detailed handling for any client case belongs in
            direct agreements, not public guesswork.
          </p>
          <p>
            Questions about data handling for a specific recovery case should be
            raised through contact before any run is authorized.
          </p>
        </div>
      </Page>
    </Shell>
  );
}

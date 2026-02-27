import type { Metadata } from "next";
import { WaitlistForm } from "@/components/site/waitlist/WaitlistForm";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Join the Waitlist | DGS by Aternox",
  description:
    "Join the DGS waitlist. Fast and Mid modes coming first. Deterministic synthesis engine by Aternox.",
};

export default function WaitlistPage() {
  return (
    <Shell>
      <Page
        eyebrow="Early Access"
        title="Early access to DGS."
        subtitle="Fast and Mid modes are coming first. Deep Mode for enterprise shortly after. Synthetic Mode is not publicly available."
      >
        {/* EMAIL FORM */}
        <FadeIn>
          <div className="glass rounded-3xl border border-gradient p-10 glow-intense max-w-2xl mx-auto">
            <WaitlistForm />
          </div>
        </FadeIn>
      </Page>
    </Shell>
  );
}

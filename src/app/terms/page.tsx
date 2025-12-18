import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";

export default function TermsPage() {
  return (
    <Shell>
      <Page
        eyebrow="Legal"
        title={
          <>
            Terms <span className="text-gradient">(v1)</span>
          </>
        }
        subtitle={
          "Placeholder terms. Replace with your legal terms before production deployment."
        }
      >
        <div className="prose prose-invert max-w-none">
          <p className="text-muted">
            These Terms are provided as a placeholder only and are not legal advice.
            Before launch, you should replace this page with terms reviewed by counsel.
          </p>

          <h2 className="mt-8 text-lg font-semibold">Use</h2>
          <p className="text-muted">
            You agree to use the website lawfully and not attempt to disrupt or
            compromise services.
          </p>

          <h2 className="mt-8 text-lg font-semibold">No financial advice</h2>
          <p className="text-muted">
            Content on this website is informational and does not constitute financial or legal advice.
          </p>

          <h2 className="mt-8 text-lg font-semibold">Changes</h2>
          <p className="text-muted">
            We may update these Terms. Continued use means you accept updates.
          </p>
        </div>
      </Page>
    </Shell>
  );
}

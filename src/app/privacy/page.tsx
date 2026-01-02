import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";

export default function PrivacyPage() {
  return (
    <Shell>
      <Page
        eyebrow="Legal"
        title={
          <>
            Privacy <span className="text-gradient">(v1)</span>
          </>
        }
        subtitle={
          "Placeholder privacy policy. Replace with your real policy before launch."
        }
      >
        <div className="prose prose-invert max-w-none">
          <p className="text-muted">
            This privacy policy is a placeholder and not legal advice.
          </p>

          <h2 className="mt-8 text-lg font-semibold">Data</h2>
          <p className="text-muted">
            The site may collect basic analytics and contact form submissions.
            For this build, the contact API route does not store or send anything.
          </p>

          <h2 className="mt-8 text-lg font-semibold">Security</h2>
          <p className="text-muted">
            We aim to follow secure engineering practices and minimize data collection.
          </p>

          <h2 className="mt-8 text-lg font-semibold">Contact</h2>
          <p className="text-muted">
            For privacy inquiries, please use the contact form on the Contact page. We do not publish direct email addresses.
          </p>
        </div>
      </Page>
    </Shell>
  );
}

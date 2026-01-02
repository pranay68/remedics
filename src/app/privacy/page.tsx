import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";

export default function PrivacyPage() {
  return (
    <Shell>
      <Page
        eyebrow="Legal"
        title={
          <>
            Privacy <span className="text-gradient">Policy</span>
          </>
        }
        subtitle={
          "Last updated: January 2025"
        }
      >
        <div className="prose prose-invert max-w-none">
          <p className="text-muted">
            At Aternox, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your information when you use our website and products (Reprog, Cursor).
          </p>

          <h2 className="mt-8 text-lg font-semibold">1. Information We Collect</h2>
          <p className="text-muted">
            We collect information you provide directly to us, such as when you fill out a contact form or sign up for our services. This may include your name, email address, and company information.
          </p>

          <h2 className="mt-8 text-lg font-semibold">2. How We Use Your Information</h2>
          <p className="text-muted">
            We use the information we collect to provide, maintain, and improve our Services, to communicate with you, and to comply with legal obligations.
          </p>

          <h2 className="mt-8 text-lg font-semibold">3. Data Security</h2>
          <p className="text-muted">
            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="mt-8 text-lg font-semibold">4. Code Privacy</h2>
          <p className="text-muted">
            For our developer tools (Reprog, Cursor), we prioritize local execution and zero-retention policies. We do not train our models on your private code unless explicitly authorized by you.
          </p>

          <h2 className="mt-8 text-lg font-semibold">5. Contact Us</h2>
          <p className="text-muted">
            If you have any questions about this Privacy Policy, please contact us via our Contact page.
          </p>
        </div>
      </Page>
    </Shell>
  );
}

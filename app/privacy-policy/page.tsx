import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "DigitalPlat privacy policy.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 sm:px-8">
      <Link href="/" className="text-sm text-[color:var(--accent)]">
        ← Back to home
      </Link>
      <h1 className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-[color:var(--text)]">
        Privacy Policy
      </h1>
      <p className="mt-3 text-sm text-[color:var(--subtle)]">Last updated: November 15, 2024</p>

      <div className="mt-8 space-y-8 text-base leading-8 text-[color:var(--muted)]">
        <section className="space-y-6">
          <p>
            This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your
            information when You use the Service. It also outlines Your privacy rights and how the law protects You.
          </p>
          <p>
            We are committed to ensuring the security and confidentiality of Your data. We do not share Your Personal
            Data with third parties, except as necessary to comply with legal obligations or with Your explicit consent.
            Furthermore, we strictly adhere to the California Consumer Privacy Act (CCPA) and General Data Protection
            Regulation (GDPR) in the processing, storage, and use of Your Personal Data.
          </p>
          <p>
            By using the Service, You agree to the collection and use of information in accordance with this Privacy
            Policy.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text)]">
            Interpretation and Definitions
          </h2>
          <h3 className="text-xl font-semibold tracking-[-0.03em] text-[color:var(--text)]">Interpretation</h3>
          <p>
            Words with initial capital letters have specific meanings defined in this Privacy Policy. These definitions
            apply regardless of whether they appear in singular or plural form.
          </p>

          <h3 className="pt-2 text-xl font-semibold tracking-[-0.03em] text-[color:var(--text)]">Definitions</h3>
          <p>For the purposes of this Privacy Policy:</p>
          <ul className="list-disc space-y-3 pl-6">
            <li>
              Account means a unique account created for You to access our Service or parts of our Service.
            </li>
            <li>
              Company (referred to as “the Company”, “We”, “Us”, or “Our” in this Agreement) refers to DigitalPlat
              Foundation, 8605 Santa Monica Blvd, CA, 90069.
            </li>
            <li>
              Cookies are small files placed on Your computer or mobile device by a website, containing details of Your
              browsing history.
            </li>
            <li>Personal Data means any information that relates to an identified or identifiable individual.</li>
            <li>Service refers to the Website.</li>
            <li>
              You refers to the individual using the Service or the entity on whose behalf the individual is using the
              Service, as applicable.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text)]">
            Collecting and Using Your Personal Data
          </h2>
          <h3 className="text-xl font-semibold tracking-[-0.03em] text-[color:var(--text)]">Types of Data Collected</h3>

          <h4 className="text-lg font-semibold tracking-[-0.02em] text-[color:var(--text)]">Personal Data</h4>
          <p>When using Our Service, We may ask You to provide information such as:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Physical address</li>
          </ul>
          <p>
            We collect this data solely for purposes of providing and improving Our Service and fulfilling requests
            made by You.
          </p>

          <h4 className="pt-2 text-lg font-semibold tracking-[-0.02em] text-[color:var(--text)]">Usage Data</h4>
          <p>Usage Data is collected automatically and may include:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Internet Protocol (IP) address</li>
            <li>Browser type and version</li>
            <li>Pages visited, time spent on pages, and other diagnostic data</li>
          </ul>
          <p>This data helps us maintain and improve the performance of the Service.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text)]">
            Use of Your Personal Data
          </h2>
          <p>
            We use Your Personal Data only for purposes directly related to the operation of Our Service. This
            includes:
          </p>
          <ul className="list-disc space-y-3 pl-6">
            <li>Providing the Service: To maintain the functionality and security of the Service.</li>
            <li>Contacting You: To address inquiries or updates directly related to Your use of the Service.</li>
            <li>Compliance with Laws: To comply with applicable laws, such as the CCPA and GDPR.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text)]">Data Sharing Policy</h2>
          <p>
            We do not sell, share, or disclose Your Personal Data to third parties under any circumstances except:
          </p>
          <ul className="list-disc space-y-3 pl-6">
            <li>To comply with legal obligations.</li>
            <li>When You explicitly consent to data sharing.</li>
            <li>As necessary to protect Our legal rights or to prevent fraud.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text)]">
            Your Rights Under CCPA and GDPR
          </h2>
          <p>Under the CCPA and GDPR, You have the following rights:</p>
          <ul className="list-disc space-y-3 pl-6">
            <li>Right to Access: You can request a copy of the Personal Data we hold about You.</li>
            <li>
              Right to Deletion: You can request the deletion of Your Personal Data unless we are required to retain it
              for legal purposes.
            </li>
            <li>Right to Opt-Out: You may opt-out of data processing or sharing for marketing purposes.</li>
            <li>
              Right to Data Portability: You may request that Your Personal Data be transferred to another service
              provider.
            </li>
          </ul>
          <p>
            To exercise any of these rights, please contact Us at{" "}
            <Link href="mailto:contact@digitalplat.org" className="text-[color:var(--text)] hover:text-[color:var(--accent)]">
              contact@digitalplat.org
            </Link>{" "}
            or by calling{" "}
            <Link href="tel:+18559805959" className="text-[color:var(--text)] hover:text-[color:var(--accent)]">
              855.980.5959
            </Link>
            .
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text)]">Security of Your Data</h2>
          <p>
            We implement commercially reasonable measures to safeguard Your Personal Data. However, no method of
            transmission over the Internet is entirely secure. While We strive to protect Your data, We cannot
            guarantee its absolute security.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text)]">Children’s Privacy</h2>
          <p>
            Our Service is not intended for children under 13. We do not knowingly collect data from children. If You
            believe that a child has provided Personal Data, please contact Us immediately.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text)]">
            Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy as necessary to reflect changes in our practices or legal obligations.
            Updates will be posted on this page with an updated “Last updated” date.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text)]">Contact Us</h2>
          <p>For questions about this Privacy Policy, contact us at:</p>
          <p>
            Email:{" "}
            <Link href="mailto:contact@digitalplat.org" className="text-[color:var(--text)] hover:text-[color:var(--accent)]">
              contact@digitalplat.org
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}

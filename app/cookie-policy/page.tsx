import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "DigitalPlat cookie policy.",
};

export default function CookiePolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 sm:px-8">
      <Link href="/" className="text-sm text-[color:var(--accent)]">
        ← Back to home
      </Link>
      <h1 className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-[color:var(--text)]">Cookie Policy</h1>
      <p className="mt-3 text-sm text-[color:var(--subtle)]">Last updated: November 22, 2023</p>

      <div className="mt-8 space-y-8 text-base leading-8 text-[color:var(--muted)]">
        <section className="space-y-6">
          <p>
            This Cookie Policy explains how DigitalPlat Foundation (“Company”, “We”, “Us”, or “Our”) uses cookies and
            similar technologies to collect, store, and analyze data when You visit Our website. By using Our website,
            You consent to the practices described in this policy unless otherwise specified.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text)]">What Are Cookies?</h2>
          <p>
            Cookies are small text files placed on Your computer or mobile device when You visit a website. They allow
            websites to recognize Your device and store information about Your preferences or past actions.
          </p>
          <p>
            Cookies serve various purposes, such as improving website functionality, enabling analytics, and enhancing
            user experience.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text)]">Cookies We Use</h2>
          <p>We use cookies primarily for analytics and performance improvement. Specifically:</p>
          <p className="font-medium text-[color:var(--text)]">Google Analytics</p>
          <ul className="list-disc space-y-3 pl-6">
            <li>
              Purpose: To collect and analyze data about how visitors interact with our website, such as pages visited,
              time spent on the website, and user behavior.
            </li>
            <li>
              Data Collected: Aggregated, anonymized data (e.g., number of visitors, geographic region, and device
              type).
            </li>
            <li>Usage: This information helps us improve website performance and enhance user experience.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text)]">
            Consent and Cookie Banner
          </h2>
          <p>
            We only use cookies after obtaining Your explicit consent through our Cookie Banner. Upon visiting Our
            website, You will see a notification prompting You to allow or decline the use of cookies.
          </p>
          <ul className="list-disc space-y-3 pl-6">
            <li>
              If You consent, cookies (including those used for Google Analytics) will be activated to collect
              statistical and analytical data.
            </li>
            <li>If You decline, no cookies will be used except those strictly necessary for the website to function.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text)]">No Third-Party Sharing</h2>
          <p>We do not share any data collected via cookies with third parties. Data collected through cookies, including Google Analytics, is used solely for internal purposes to:</p>
          <ul className="list-disc space-y-3 pl-6">
            <li>Generate aggregate statistical reports.</li>
            <li>Analyze browsing patterns and user interactions.</li>
            <li>Improve website content and functionality.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text)]">Managing Cookies</h2>
          <p>
            You can manage or disable cookies at any time through Your browser settings. However, please note that
            certain website features may not function properly without cookies.
          </p>
          <p>For instructions on managing cookies in Your browser, visit:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Google Chrome</li>
            <li>Mozilla Firefox</li>
            <li>Microsoft Edge</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text)]">Your Privacy Rights</h2>
          <p>
            We comply with all applicable privacy regulations, including the California Consumer Privacy Act (CCPA) and
            General Data Protection Regulation (GDPR). You have the right to:
          </p>
          <ul className="list-disc space-y-3 pl-6">
            <li>Opt out of non-essential cookies at any time.</li>
            <li>Access or request deletion of any data collected via cookies.</li>
          </ul>
          <p>
            To exercise these rights, please contact Us at{" "}
            <Link href="mailto:contact@digitalplat.org" className="text-[color:var(--text)] hover:text-[color:var(--accent)]">
              contact@digitalplat.org
            </Link>{" "}
            or call{" "}
            <Link href="tel:+18559805959" className="text-[color:var(--text)] hover:text-[color:var(--accent)]">
              855.980.5959
            </Link>
            .
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text)]">Changes to This Policy</h2>
          <p>
            We may update this Cookie Policy periodically. Any changes will be reflected here, with the “Last updated”
            date adjusted accordingly. We encourage You to review this Cookie Policy regularly.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text)]">Contact Us</h2>
          <p>If You have any questions or concerns about this Cookie Policy, contact us at:</p>
          <p>
            Email:{" "}
            <Link href="mailto:contact@digitalplat.org" className="text-[color:var(--text)] hover:text-[color:var(--accent)]">
              contact@digitalplat.org
            </Link>
          </p>
          <p>
            Phone:{" "}
            <Link href="tel:+18559805959" className="text-[color:var(--text)] hover:text-[color:var(--accent)]">
              855.980.5959
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}

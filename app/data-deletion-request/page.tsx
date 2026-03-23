import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Deletion Request",
  description: "Request deletion of DigitalPlat account or service data.",
};

export default function DataDeletionRequestPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 sm:px-8">
      <Link href="/" className="text-sm text-[color:var(--accent)]">
        ← Back to home
      </Link>
      <h1 className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-[color:var(--text)]">Data Deletion Request</h1>
      <div className="mt-8 space-y-6 text-base leading-8 text-[color:var(--muted)]">
        <p>To request deletion of account or service data, email contact@digitalplat.org with the subject line Data Deletion Request.</p>
        <p>Include the relevant service, account identifier, and any context required to locate the data accurately.</p>
        <p>We may retain limited records where required for abuse prevention, legal compliance, or security investigations.</p>
      </div>
    </main>
  );
}

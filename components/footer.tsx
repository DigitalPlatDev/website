import Link from "next/link";

type LinkItem = {
  label: string;
  href: string;
};

type FooterProps = {
  companyLinks: LinkItem[];
  legalLinks: LinkItem[];
};

export function Footer({ companyLinks, legalLinks }: FooterProps) {
  return (
    <footer className="mx-auto mt-10 w-full max-w-7xl px-6 pb-10 sm:px-8">
      <div className="rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--surface-strong)] px-6 py-8 shadow-[var(--shadow)] sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <p className="text-lg font-semibold tracking-[-0.03em] text-[color:var(--text)]">DigitalPlat Foundation</p>
            <p className="mt-4 max-w-md text-sm leading-7 text-[color:var(--muted)]">
              DigitalPlat is a fiscally sponsored project of The Hack Foundation, a 501(c)(3) nonprofit. We build and operate public-interest internet infrastructure.
            </p>
            <div className="mt-6 space-y-2 text-sm text-[color:var(--muted)]">
              <p>DigitalPlat Foundation</p>
              <p>Anaheim, CA 92802</p>
              <p>United States</p>
              <p>Fiscally sponsored by The Hack Foundation (501(c)(3))</p>
              <p>
                Toll-free:{" "}
                <Link href="tel:+18559805959" className="text-[color:var(--text)] hover:text-[color:var(--accent)]">
                  1-855-980-5959
                </Link>
              </p>
              <p>
                Contact:{" "}
                <Link href="mailto:contact@digitalplat.org" className="text-[color:var(--text)] hover:text-[color:var(--accent)]">
                  contact@digitalplat.org
                </Link>
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--subtle)]">Links</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[color:var(--muted)]">
              {companyLinks.map((link) => (
                <Link key={link.label} href={link.href} className="hover:text-[color:var(--text)]">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--subtle)]">Legal</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[color:var(--muted)]">
              {legalLinks.map((link) => (
                <Link key={link.label} href={link.href} className="hover:text-[color:var(--text)]">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="section-divider my-8" />

        <div className="flex flex-col gap-3 text-sm text-[color:var(--subtle)] sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © 2026 DigitalPlat Foundation.</p>
          <p>Production infrastructure for domains, DNS, and open-source systems.</p>
        </div>
      </div>
    </footer>
  );
}

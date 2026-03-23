import Link from "next/link";

const operatingSignals = [
  "Global domain infrastructure",
  "DNS systems serving hundreds of thousands of users",
  "Open-source systems designed for public access",
];

export function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 pb-14 pt-8 sm:px-8 sm:pb-20 sm:pt-12 lg:flex-row lg:items-end lg:gap-16">
      <div className="max-w-3xl flex-1">
        <div className="inline-flex rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-2 text-sm text-[color:var(--muted)] backdrop-blur-sm">
          DigitalPlat Foundation · Public-interest internet infrastructure
        </div>
        <h1 className="mt-8 max-w-3xl text-5xl font-semibold tracking-[-0.07em] text-[color:var(--text)] sm:text-6xl lg:text-7xl">
          Internet infrastructure, built for public access.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--muted)] sm:text-xl">
          DigitalPlat builds and operates open systems for domains, DNS, and developer infrastructure used by hundreds of thousands of people, projects, and communities worldwide.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="#infrastructure"
            className="inline-flex items-center justify-center rounded-full bg-[color:var(--text)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800"
          >
            Explore Infrastructure
          </Link>
          <Link
            href="#projects"
            className="inline-flex items-center justify-center rounded-full border border-[color:var(--border-strong)] bg-[color:var(--surface-strong)] px-6 py-3 text-sm font-medium text-[color:var(--text)] transition-colors hover:bg-white"
          >
            View Projects
          </Link>
        </div>
      </div>

      <div className="w-full max-w-xl rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--surface-strong)] p-6 shadow-[var(--shadow)] backdrop-blur-sm">
        <div className="grid gap-4">
          <div className="flex items-center justify-between border-b border-[color:var(--border)] pb-4">
            <div>
              <p className="text-sm font-medium text-[color:var(--subtle)]">Operational profile</p>
              <p className="mt-1 text-lg font-semibold text-[color:var(--text)]">Production systems</p>
            </div>
            <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Active
            </div>
          </div>
          {operatingSignals.map((signal) => (
            <div
              key={signal}
              className="rounded-2xl border border-[color:var(--border)] bg-white/60 px-4 py-4 text-sm leading-7 text-[color:var(--muted)]"
            >
              {signal}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

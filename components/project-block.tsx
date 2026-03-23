import Link from "next/link";

type ProjectBlockProps = {
  eyebrow: string;
  name: string;
  title: string;
  description: string;
  details: string[];
  narrative: string;
  principle: string;
  ctaLabel: string;
  ctaHref: string;
  future?: string;
};

export function ProjectBlock({
  eyebrow,
  name,
  title,
  description,
  details,
  narrative,
  principle,
  ctaLabel,
  ctaHref,
  future,
}: ProjectBlockProps) {
  return (
    <article className="grid gap-8 rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--surface-strong)] p-8 shadow-[var(--shadow)] lg:grid-cols-[1.2fr_0.8fr]">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">{eyebrow}</p>
        <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[color:var(--text)]">{name}</h3>
        <p className="mt-2 text-xl font-medium tracking-[-0.03em] text-[color:var(--text)]">{title}</p>
        <p className="mt-5 max-w-2xl text-base leading-8 text-[color:var(--muted)]">{description}</p>

        <ul className="mt-6 grid gap-3 text-sm text-[color:var(--text)] sm:grid-cols-2">
          {details.map((detail) => (
            <li
              key={detail}
              className="rounded-2xl border border-[color:var(--border)] bg-white/65 px-4 py-4 leading-6"
            >
              {detail}
            </li>
          ))}
        </ul>

        <p className="mt-6 max-w-2xl text-base leading-8 text-[color:var(--muted)]">{narrative}</p>
        {future ? <p className="mt-4 max-w-2xl text-base leading-8 text-[color:var(--muted)]">{future}</p> : null}
      </div>

      <div className="flex flex-col justify-between rounded-[1.75rem] border border-[color:var(--border)] bg-slate-950 px-6 py-6 text-white">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Core principle</p>
          <p className="mt-4 text-2xl font-semibold tracking-[-0.04em]">{principle}</p>
        </div>
        <Link
          href={ctaHref}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex w-fit items-center rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition-colors hover:bg-slate-100"
        >
          {ctaLabel}
        </Link>
      </div>
    </article>
  );
}

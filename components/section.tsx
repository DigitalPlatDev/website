import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`mx-auto w-full max-w-7xl px-6 py-14 sm:px-8 sm:py-20 ${className}`}>
      <div className="mb-10 max-w-3xl">
        {eyebrow ? (
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.28em] text-[color:var(--accent)]">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[color:var(--text)] sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-7 text-[color:var(--muted)] sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  );
}

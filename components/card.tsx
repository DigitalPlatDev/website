import { ReactNode } from "react";

type CardProps = {
  title: string;
  description: string;
  eyebrow?: string;
  children?: ReactNode;
};

export function Card({ title, description, eyebrow, children }: CardProps) {
  return (
    <div className="rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-[var(--shadow)] backdrop-blur-sm">
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--subtle)]">
          {eyebrow}
        </p>
      ) : null}
      <h3 className="text-xl font-semibold tracking-[-0.03em] text-[color:var(--text)]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[color:var(--muted)] sm:text-base">{description}</p>
      {children ? <div className="mt-5">{children}</div> : null}
    </div>
  );
}

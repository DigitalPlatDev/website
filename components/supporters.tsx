import Image from "next/image";

type Supporter = {
  name: string;
  src: string;
};

type SupportersProps = {
  items: Supporter[];
};

export function Supporters({ items }: SupportersProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-8 sm:px-8 sm:py-10">
      <div className="border-t border-[color:var(--border)] pt-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-[color:var(--subtle)]">Supported by</p>
          <p className="mt-3 text-base leading-7 text-[color:var(--muted)]">
            Backed by infrastructure and developer platform companies that support broad access to the internet.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-10 gap-y-12 sm:grid-cols-4 sm:gap-x-12">
          {items.map((item) => (
            <div key={item.name} className="flex min-h-20 items-center justify-start sm:justify-center">
              <Image
                src={item.src}
                alt={`${item.name} logo`}
                width={260}
                height={88}
                className="h-10 w-auto object-contain sm:h-12 lg:h-14"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

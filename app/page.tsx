import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/card";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { ProjectBlock } from "@/components/project-block";
import { Section } from "@/components/section";
import { Supporters } from "@/components/supporters";
import { capabilities, footerLinks, philosophy, projects, proofPoints, supporters } from "@/lib/site-data";

export default function HomePage() {
  return (
    <main className="page-shell">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 sm:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="DigitalPlat"
            width={180}
            height={40}
            unoptimized
            className="h-9 w-auto object-contain sm:h-10"
            style={{ filter: "brightness(0) saturate(100%)" }}
            priority
          />
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-[color:var(--muted)] md:flex">
          <Link href="#infrastructure" className="hover:text-[color:var(--text)]">
            Infrastructure
          </Link>
          <Link href="#projects" className="hover:text-[color:var(--text)]">
            Projects
          </Link>
          <Link href="/about" className="hover:text-[color:var(--text)]">
            About
          </Link>
          <Link href="https://github.com/digitalplatdev" target="_blank" rel="noreferrer" className="hover:text-[color:var(--text)]">
            GitHub
          </Link>
        </nav>
      </div>

      <Hero />

      <Section
        title="These systems are already in use."
        description="DigitalPlat operates production infrastructure with measurable scale. These systems are already live and in use across a global network of developers, projects, and communities."
      >
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {proofPoints.map((point) => (
            <div
              key={point.label}
              className="rounded-[1.75rem] border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-[var(--shadow)]"
            >
              <p className="text-3xl font-semibold tracking-[-0.05em] text-[color:var(--text)]">{point.value}</p>
              <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{point.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Supporters items={supporters} />

      <Section
        id="infrastructure"
        eyebrow="What we build"
        title="Infrastructure for access, routing, and developer control."
        description="The organization operates systems close to the internet stack. The work spans domain lifecycle management, DNS, APIs, open-source data, and operational safety, with a focus on public access and durable utility."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((capability) => (
            <Card key={capability.title} title={capability.title} description={capability.description} />
          ))}
        </div>
      </Section>

      <Section
        id="projects"
        eyebrow="Core infrastructure projects"
        title="Projects treated as systems."
        description="Each project is run like infrastructure. The focus is uptime, correctness, automation, and long-term public usefulness."
      >
        <div className="grid gap-6">
          {projects.map((project) => (
            <ProjectBlock key={project.name} {...project} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Infrastructure philosophy"
        title="Minimal principles."
        description="The operating model is simple. Build useful systems. Keep them open. Make them reliable. Keep them broadly available."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {philosophy.map((statement) => (
            <div
              key={statement}
              className="rounded-[1.75rem] border border-[color:var(--border)] bg-[color:var(--surface)] px-6 py-8 text-lg font-medium tracking-[-0.03em] text-[color:var(--text)] shadow-[var(--shadow)]"
            >
              {statement}
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Work with DigitalPlat"
        description="We collaborate with builders, maintainers, and organizations working on real systems. If the work touches infrastructure, public access, reliability, or open technology, we are interested."
      >
        <div className="flex flex-col items-start justify-between gap-6 rounded-[2rem] border border-[color:var(--border)] bg-slate-950 px-8 py-8 text-white shadow-[var(--shadow)] lg:flex-row lg:items-center">
          <p className="max-w-3xl text-base leading-8 text-slate-300">
            Partnerships, infrastructure collaboration, fiscal sponsorship conversations, and developer inquiries all route through the same channel.
          </p>
          <Link
            href="mailto:contact@digitalplat.org"
            className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition-colors hover:bg-slate-100"
          >
            Get in touch
          </Link>
        </div>
      </Section>

      <Footer companyLinks={footerLinks.company} legalLinks={footerLinks.legal} />
    </main>
  );
}

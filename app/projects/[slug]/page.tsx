import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/lib/data";
import { siteConfig } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  const title = `${project.name} — ${project.tagline}`;
  const url = `${siteConfig.url}/projects/${project.slug}`;
  return {
    title: project.name,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "article",
      url,
      title,
      description: project.description,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.description,
      images: [siteConfig.ogImage],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.description,
    creator: {
      "@type": "Person",
      name: siteConfig.fullName,
      url: siteConfig.url,
    },
    url: `${siteConfig.url}/projects/${project.slug}`,
    keywords: project.stack.join(", "),
    dateCreated: project.year,
  };

  return (
    <>
      <Navbar />
      <main className="container-narrow py-16 md:py-24">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1 text-sm text-[var(--color-fg-muted)] transition-colors hover:text-white"
        >
          <ArrowLeft size={14} /> Back to projects
        </Link>

        <header className="mt-6">
          <div className="text-4xl" aria-hidden>
            {project.emoji}
          </div>
          <h1 className="mt-2 font-display text-3xl font-bold md:text-5xl">
            <span className="text-gradient">{project.name}</span>
          </h1>
          <p className="mt-3 text-lg text-[var(--color-fg-muted)]">
            {project.tagline}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-sm"
              >
                <ExternalLink size={14} /> Live demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost text-sm"
              >
                <Github size={14} /> Source code
              </a>
            )}
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-[var(--color-fg-muted)]">
              {project.year}
            </span>
          </div>
        </header>

        <section className="mt-10 grid gap-8 md:grid-cols-[2fr_1fr]">
          <div className="space-y-8">
            <div className="glass rounded-2xl p-6">
              <h2 className="font-display text-xl font-semibold text-white">
                Overview
              </h2>
              <p className="mt-3 text-[var(--color-fg-muted)]">
                {project.longDescription}
              </p>
            </div>

            <div className="glass rounded-2xl p-6">
              <h2 className="font-display text-xl font-semibold text-white">
                Highlights
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-[var(--color-fg-muted)]">
                {project.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>

            {project.challenges.length > 0 && (
              <div className="glass rounded-2xl p-6">
                <h2 className="font-display text-xl font-semibold text-white">
                  Challenges I solved
                </h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-[var(--color-fg-muted)]">
                  {project.challenges.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.futurePlans.length > 0 && (
              <div className="glass rounded-2xl p-6">
                <h2 className="font-display text-xl font-semibold text-white">
                  What&rsquo;s next
                </h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-[var(--color-fg-muted)]">
                  {project.futurePlans.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <aside className="space-y-6">
            <div className="glass rounded-2xl p-6">
              <h2 className="text-xs uppercase tracking-wider text-[var(--color-fg-muted)]">
                Tech stack
              </h2>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-white/90"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

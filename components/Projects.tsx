"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Section from "./Section";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      heading="A selection of my best work"
      subheading="Real-world, client-based & personal projects — built end-to-end with React, Node, MongoDB and Firebase."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, idx) => (
          <motion.article
            key={project.slug}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="glass group relative flex flex-col overflow-hidden rounded-2xl p-6 transition-transform hover:-translate-y-1"
          >
            <div className="mb-4 flex items-start justify-between">
              <div>
                <div className="mb-1 text-3xl" aria-hidden>
                  {project.emoji}
                </div>
                <h3 className="font-display text-xl font-semibold text-white">
                  {project.name}
                </h3>
                <p className="text-sm text-[var(--color-fg-muted)]">
                  {project.tagline}
                </p>
              </div>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[11px] text-[var(--color-fg-muted)]">
                {project.year}
              </span>
            </div>

            <p className="mb-5 text-sm leading-relaxed text-[var(--color-fg-muted)]">
              {project.description}
            </p>

            <ul className="mb-5 flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[11px] text-white/85"
                >
                  {s}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex items-center justify-between">
              <div className="flex items-center gap-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost px-3 py-1.5 text-xs"
                    aria-label={`${project.name} live demo`}
                  >
                    <ExternalLink size={13} /> Live
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost px-3 py-1.5 text-xs"
                    aria-label={`${project.name} GitHub repository`}
                  >
                    <Github size={13} /> Code
                  </a>
                )}
              </div>
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-1 text-xs font-medium text-white/85 transition-colors hover:text-white"
              >
                Details <ArrowUpRight size={13} />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="https://github.com/Obaidullah40"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost"
        >
          <Github size={16} /> See more on GitHub
        </a>
      </div>
    </Section>
  );
}

"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";
import Section from "./Section";
import { siteConfig } from "@/lib/site";
import { experience } from "@/lib/data";

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      heading="Building responsive & user-friendly apps"
      subheading="I'm a frontend & MERN stack developer who loves shipping polished, accessible products. I focus on clean code, performance, and delightful UI."
    >
      <div className="grid gap-10 md:grid-cols-[1.15fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="space-y-5 text-[var(--color-fg-muted)]"
        >
          <p>
            Hi, I&rsquo;m <span className="text-white">{siteConfig.fullName}</span>{" "}
            &mdash; a developer based in {siteConfig.location}. I work
            primarily with React, Next.js and the MERN stack to build
            full-stack applications, marketing sites and internal tools.
          </p>
          <p>
            I care a lot about three things: writing clean, maintainable code;
            shipping accessible UIs that work for everyone; and getting
            performance right so users never have to wait. When I&rsquo;m not
            coding, I&rsquo;m usually exploring new web tooling or polishing
            side projects.
          </p>
          <p>
            I&rsquo;m currently <span className="text-white">open to freelance projects</span>{" "}
            and <span className="text-white">full-time roles</span>{" "}
            &mdash; especially anything around React, Next.js or full-stack
            JavaScript.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-white/90">
              <MapPin size={14} className="text-[var(--color-brand)]" />
              {siteConfig.location}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-white/90">
              <Briefcase size={14} className="text-[var(--color-brand-2)]" />
              {siteConfig.shortTitle}
            </span>
          </div>
        </motion.div>

        <motion.ol
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="relative space-y-5 border-l border-white/10 pl-6"
        >
          {experience.map(({ Icon, role, org, period, description }) => (
            <motion.li
              key={role}
              variants={{
                hidden: { opacity: 0, x: -12 },
                show: { opacity: 1, x: 0 },
              }}
              className="relative"
            >
              <span
                aria-hidden
                className="absolute -left-[34px] top-1 flex size-7 items-center justify-center rounded-full border border-white/10 bg-[var(--color-bg-soft)] text-[var(--color-brand)]"
              >
                <Icon size={14} />
              </span>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-medium text-white">{role}</h3>
                <span className="text-xs text-[var(--color-fg-muted)]">
                  {period}
                </span>
              </div>
              <p className="text-sm text-[var(--color-fg-muted)]">{org}</p>
              <p className="mt-1 text-sm text-[var(--color-fg-muted)]">
                {description}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {siteConfig.stats.map((s) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="glass rounded-2xl p-5 text-center"
          >
            <div className="text-gradient text-3xl font-bold md:text-4xl">
              {s.value}
            </div>
            <div className="mt-1 text-sm font-medium text-white">
              {s.label}
            </div>
            <p className="mt-1 text-xs text-[var(--color-fg-muted)]">
              {s.title}
            </p>
          </motion.div>
        ))}
      </div>

      <p className="mt-10 flex items-center justify-center gap-2 text-sm text-[var(--color-fg-muted)]">
        <GraduationCap size={16} className="text-[var(--color-brand)]" />
        Always learning &mdash; currently going deeper on Next.js, TypeScript &
        system design.
      </p>
    </Section>
  );
}

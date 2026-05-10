"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { heroTech } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32"
    >
      <div className="container-narrow grid items-center gap-12 md:grid-cols-[1.2fr_1fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-[var(--color-fg-muted)]"
          >
            <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
            {siteConfig.availability}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl"
          >
            Hi, I&rsquo;m{" "}
            <span className="text-gradient">{siteConfig.name}</span>
            <br />
            <span className="text-[var(--color-fg-muted)]">
              {siteConfig.title}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-fg-muted)] md:text-lg"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={16} />
            </a>
            <a
              href="/Resume.pdf" 
              download="Obaidullah_Resume.pdf" 
              className="btn btn-ghost"
              aria-label="Download resume"
            >
              <Download size={16} /> Resume
            </a>
            <a href="#contact" className="btn btn-ghost">
              <Mail size={16} /> Contact
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex items-center gap-4 text-[var(--color-fg-muted)]"
          >
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full p-2 transition-colors hover:bg-white/5 hover:text-white"
            >
              <Github size={20} />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full p-2 transition-colors hover:bg-white/5 hover:text-white"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Email"
              className="rounded-full p-2 transition-colors hover:bg-white/5 hover:text-white"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mx-auto w-full max-w-[420px]"
        >
          <div className="relative aspect-square">
            <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-violet-500/40 via-cyan-400/30 to-pink-400/30 blur-3xl" />
            <div className="glass relative h-full w-full overflow-hidden rounded-3xl p-6">
              <div className="flex h-full flex-col">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <span className="size-3 rounded-full bg-red-400/80" />
                    <span className="size-3 rounded-full bg-yellow-400/80" />
                    <span className="size-3 rounded-full bg-green-400/80" />
                  </div>
                  <span className="font-mono text-xs text-[var(--color-fg-muted)]">
                    obaidullah.tsx
                  </span>
                </div>
                <pre className="flex-1 overflow-hidden font-mono text-[11px] leading-relaxed text-[var(--color-fg-muted)] sm:text-xs">
                  <code>{`const developer = {
  name: "Md Obaidullah",
  role: "MERN Stack Developer",
  stack: [
    "React", "Next.js",
    "Node.js", "Express",
    "MongoDB", "Firebase"
  ],
  focus: "clean code,
    a11y & DX",
  open: true,
};

ship(developer);`}</code>
                </pre>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {heroTech.map(({ name, Icon, color }) => (
                    <div
                      key={name}
                      className="flex flex-col items-center gap-1 rounded-lg border border-white/5 bg-white/[0.02] p-2"
                      title={name}
                    >
                      <Icon className={`text-xl ${color}`} aria-hidden />
                      <span className="text-[10px] text-[var(--color-fg-muted)]">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Section from "./Section";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow="Kind Words"
      heading="Testimonials"
      subheading="Have we worked together? Send me a short note via email and I'll feature it here."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.name + i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="glass relative rounded-2xl p-6"
          >
            <Quote
              size={28}
              className="absolute right-5 top-5 text-white/10"
              aria-hidden
            />
            <blockquote className="text-sm leading-relaxed text-[var(--color-fg-muted)]">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-violet-500/40 to-cyan-400/30 font-semibold text-white">
                {t.name.charAt(0)}
              </span>
              <div>
                <div className="text-sm font-medium text-white">{t.name}</div>
                <div className="text-xs text-[var(--color-fg-muted)]">
                  {t.role}
                </div>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}

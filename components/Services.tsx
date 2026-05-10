"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Section from "./Section";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <Section
      id="services"
      eyebrow="What I Offer"
      heading="Services for startups & businesses"
      subheading="Whether you need a brand-new product, a marketing site that ranks, or help with an existing codebase — I'd love to help."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {services.map(({ Icon, title, description, bullets }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="glass group relative rounded-2xl p-6 transition-transform hover:-translate-y-1"
          >
            <div className="mb-4 inline-flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/30 to-cyan-400/20 text-[var(--color-brand)]">
              <Icon size={22} />
            </div>
            <h3 className="font-display text-lg font-semibold text-white">
              {title}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-[var(--color-fg-muted)]">
              {description}
            </p>
            <ul className="mt-4 space-y-2">
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2 text-sm text-[var(--color-fg-muted)]"
                >
                  <Check
                    size={14}
                    className="mt-1 shrink-0 text-[var(--color-brand-2)]"
                    aria-hidden
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

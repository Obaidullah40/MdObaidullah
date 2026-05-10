"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="My Stack"
      heading="Skills & Technologies"
      subheading="The tools and technologies I use day-to-day to ship modern web applications."
    >
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {skills.map(({ name, level, Icon, color }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="glass group rounded-2xl p-4 transition-transform hover:-translate-y-1"
          >
            <div className="flex items-center gap-3">
              <Icon className={`text-2xl ${color}`} aria-hidden />
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="truncate font-medium text-white">
                    {name}
                  </span>
                  <span className="text-xs text-[var(--color-fg-muted)]">
                    {level}%
                  </span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.1 + i * 0.04, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-violet-500 via-cyan-400 to-pink-400"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

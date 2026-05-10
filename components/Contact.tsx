"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa6";
import Section from "./Section";
import { siteConfig } from "@/lib/site";

const channels = [
  {
    label: "Email",
    Icon: Mail,
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    accent: "from-violet-500/30 to-violet-400/10",
  },
  {
    label: "WhatsApp",
    Icon: MessageCircle,
    value: `+${siteConfig.whatsapp}`,
    href: siteConfig.social.whatsapp,
    accent: "from-emerald-500/30 to-emerald-400/10",
  },
  {
    label: "Phone",
    Icon: Phone,
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
    accent: "from-cyan-500/30 to-cyan-400/10",
  },
  {
    label: "Location",
    Icon: MapPin,
    value: siteConfig.location,
    href: undefined,
    accent: "from-pink-500/30 to-pink-400/10",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/obaidullah40",
    Icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/obaidullah30",
    Icon: FaLinkedin,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/MdObaidullah30",
    Icon: FaFacebook,
  },
];

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Get In Touch"
      heading="Let's collaborate and create something amazing"
      subheading="Have a project in mind, a role to fill, or just want to say hi? My inbox is always open — I'll get back within 24 hours."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="space-y-3"
        >
          {channels.map(({ label, Icon, value, href, accent }) => {
            const inner = (
              <div className="glass flex items-center gap-4 rounded-2xl p-4 transition-transform group-hover:-translate-y-0.5">
                <div
                  className={`grid size-11 place-items-center rounded-xl bg-gradient-to-br ${accent}`}
                >
                  <Icon size={20} className="text-white" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-[var(--color-fg-muted)]">
                    {label}
                  </div>
                  <div className="truncate text-sm font-medium text-white">
                    {value}
                  </div>
                </div>
              </div>
            );
            return href ? (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group block"
              >
                {inner}
              </a>
            ) : (
              <div key={label} className="group">
                {inner}
              </div>
            );
          })}

          <div className="glass mt-2 rounded-2xl p-4">
            <div className="text-xs uppercase tracking-wider text-[var(--color-fg-muted)]">
              Follow me
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="rounded-full border border-white/10 bg-white/[0.03] p-2.5 text-white/85 transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          action={`mailto:${siteConfig.email}`}
          method="post"
          encType="text/plain"
          className="glass rounded-2xl p-5 md:p-6"
        >
          <h3 className="font-display text-lg font-semibold text-white">
            Send Me a Message
          </h3>
          <p className="mt-1 text-sm text-[var(--color-fg-muted)]">
            Drop your details and I&rsquo;ll reply by email.
          </p>

          <div className="mt-5 grid gap-4">
            <label className="block">
              <span className="text-xs font-medium uppercase tracking-wider text-[var(--color-fg-muted)]">
                Name
              </span>
              <input
                type="text"
                name="name"
                required
                className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-violet-400/40 focus:bg-white/[0.05]"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="text-xs font-medium uppercase tracking-wider text-[var(--color-fg-muted)]">
                Email
              </span>
              <input
                type="email"
                name="email"
                required
                className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-violet-400/40 focus:bg-white/[0.05]"
                placeholder="you@example.com"
              />
            </label>
            <label className="block">
              <span className="text-xs font-medium uppercase tracking-wider text-[var(--color-fg-muted)]">
                Message
              </span>
              <textarea
                name="message"
                rows={5}
                required
                className="mt-1.5 w-full resize-y rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-violet-400/40 focus:bg-white/[0.05]"
                placeholder="Tell me a little about your project or role..."
              />
            </label>
            <button type="submit" className="btn btn-primary mt-2 w-full">
              Send Message <Send size={15} />
            </button>
          </div>
          <p className="mt-3 text-[11px] text-[var(--color-fg-muted)]">
            Submitting opens your default email app. For a richer form,
            connect an API like Formspree or Resend.
          </p>
        </motion.form>
      </div>
    </Section>
  );
}

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { navLinks } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 mt-10 py-10">
      <div className="container-narrow grid gap-8 md:grid-cols-3">
        <div>
          <Link
            href="#home"
            className="font-display text-lg font-bold tracking-tight"
          >
            <span className="text-gradient">{siteConfig.name}</span>
            <span className="ml-1 text-[var(--color-fg-muted)]">.dev</span>
          </Link>
          <p className="mt-3 max-w-sm text-sm text-[var(--color-fg-muted)]">
            {siteConfig.tagline}
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h3 className="text-xs uppercase tracking-wider text-[var(--color-fg-muted)]">
            Quick Links
          </h3>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-white/85 transition-colors hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                href="/blog"
                className="text-white/85 transition-colors hover:text-white"
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h3 className="text-xs uppercase tracking-wider text-[var(--color-fg-muted)]">
            Connect
          </h3>
          <div className="mt-3 flex gap-2">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-white/10 bg-white/[0.03] p-2.5 text-white/85 transition-all hover:border-white/20 hover:text-white"
            >
              <Github size={18} />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-white/10 bg-white/[0.03] p-2.5 text-white/85 transition-all hover:border-white/20 hover:text-white"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Email"
              className="rounded-full border border-white/10 bg-white/[0.03] p-2.5 text-white/85 transition-all hover:border-white/20 hover:text-white"
            >
              <Mail size={18} />
            </a>
          </div>
          <p className="mt-4 text-xs text-[var(--color-fg-muted)]">
            {siteConfig.location}
          </p>
        </div>
      </div>

      <div className="container-narrow mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-[var(--color-fg-muted)] md:flex-row">
        <p>
          &copy; {year} {siteConfig.fullName}. All rights reserved.
        </p>
        <p>
          Built with{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/85 hover:text-white"
          >
            Next.js
          </a>{" "}
          &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

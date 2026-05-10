"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${
        scrolled
          ? "border-b border-white/5 bg-[rgba(10,10,20,0.72)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav
        className="container-narrow flex h-16 items-center justify-between"
        aria-label="Primary"
      >
        <Link
          href="#home"
          className="font-display text-lg font-bold tracking-tight"
        >
          <span className="text-gradient">{siteConfig.name}</span>
          <span className="ml-1 text-fg-muted">.dev</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3.5 py-2 text-sm text-[var(--color-fg-muted)] transition-colors hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={siteConfig.resumeUrl}
            className="btn btn-primary text-sm"
            download
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden rounded-md p-2 text-white hover:bg-white/5"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-[rgba(10,10,20,0.95)] backdrop-blur-md">
          <ul className="container-narrow flex flex-col gap-1 py-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm text-[var(--color-fg-muted)] hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={siteConfig.resumeUrl}
                download
                className="btn btn-primary mt-2 w-full justify-center text-sm"
                onClick={() => setOpen(false)}
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

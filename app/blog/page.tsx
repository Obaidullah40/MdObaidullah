import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles and notes on React, Next.js, MERN stack, and modern web development by Md Obaidullah.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="container-narrow py-16 md:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-[var(--color-fg-muted)] transition-colors hover:text-white"
        >
          <ArrowLeft size={14} /> Back home
        </Link>

        <header className="mt-6">
          <span className="section-eyebrow">Writing</span>
          <h1 className="section-heading mt-2">Blog</h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-[var(--color-fg-muted)]">
            I&rsquo;m starting to write about the things I learn while building
            React, Next.js, and MERN apps. New posts coming soon.
          </p>
        </header>

        <div className="mx-auto mt-12 max-w-2xl">
          <div className="glass flex flex-col items-center rounded-2xl p-10 text-center">
            <div className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-violet-500/30 to-cyan-400/20 text-[var(--color-brand)]">
              <BookOpen size={26} />
            </div>
            <h2 className="mt-5 font-display text-xl font-semibold text-white">
              First posts in progress
            </h2>
            <p className="mt-2 max-w-md text-sm text-[var(--color-fg-muted)]">
              I&rsquo;m putting together short, practical posts on React
              patterns, Next.js metadata, MongoDB queries, and Firebase auth.
              Subscribe by following me on socials below.
            </p>
            <Link href="/#contact" className="btn btn-primary mt-6 text-sm">
              Get in touch
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

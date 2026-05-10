import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow?: string;
  heading: string;
  subheading?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  eyebrow,
  heading,
  subheading,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 md:py-28 ${className}`}>
      <div className="container-narrow">
        <header className="mb-12 text-center">
          {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
          <h2 className="section-heading mt-2">{heading}</h2>
          {subheading && (
            <p className="mx-auto mt-4 max-w-2xl text-base text-[var(--color-fg-muted)]">
              {subheading}
            </p>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}

import { siteConfig } from "@/lib/site";
import { skills, projects } from "@/lib/data";

/**
 * Structured data for SEO. Includes Person, WebSite, and ProfessionalService
 * schemas so search engines and rich results understand the portfolio.
 */
export default function JsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.fullName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}/profile.jpg`,
    email: `mailto:${siteConfig.email}`,
    telephone: siteConfig.phone,
    jobTitle: siteConfig.title,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
    knowsAbout: skills.map((s) => s.name),
    sameAs: [
      siteConfig.social.github,
      siteConfig.social.linkedin,
      siteConfig.social.twitter,
      siteConfig.social.facebook,
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteConfig.name} — Portfolio`,
    url: siteConfig.url,
    inLanguage: "en",
    author: {
      "@type": "Person",
      name: siteConfig.fullName,
      url: siteConfig.url,
    },
  };

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${siteConfig.name} — Web Development Services`,
    description:
      "Freelance frontend, MERN stack, and Next.js development services for startups, agencies, and businesses.",
    provider: {
      "@type": "Person",
      name: siteConfig.fullName,
      url: siteConfig.url,
    },
    areaServed: "Worldwide",
    serviceType: [
      "Frontend Development",
      "Full-Stack MERN Development",
      "Next.js Development",
      "Bug Fixes & Refactors",
    ],
    url: siteConfig.url,
  };

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Featured Projects",
    itemListElement: projects.map((p, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: `${siteConfig.url}/projects/${p.slug}`,
      name: p.name,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
    </>
  );
}

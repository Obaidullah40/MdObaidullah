export const siteConfig = {
  name: "Md Obaidullah",
  fullName: "Muhammad Obaidullah",
  title: "Frontend Developer & MERN Stack Specialist",
  shortTitle: "MERN Stack Developer",
  tagline:
    "I build modern, responsive, and accessible web applications using React, Node.js, and Firebase. Passionate about clean code and user-focused designs.",
  description:
    "Portfolio of Md Obaidullah, a Frontend & MERN Stack Developer based in Bangladesh. Building fast, accessible, production-ready web apps with React, Next.js, Node.js, Express, and MongoDB.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://obaidullah-portfolio.vercel.app",
  ogImage: "/og.png",
  email: "sheikhmuhammadobaidullah@gmail.com",
  phone: "+8801838113030",
  whatsapp: "8801838113030",
  location: "Dhaka, Bangladesh",
  availability: "Available for freelance & full-time roles",
  resumeUrl: "/resume.pdf",
  keywords: [
    "Md Obaidullah",
    "Muhammad Obaidullah",
    "Frontend Developer",
    "MERN Stack Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "Web Developer Bangladesh",
    "Freelance Developer",
    "Portfolio",
    "Dhaka Developer",
  ],
  social: {
    github: "https://github.com/Obaidullah40",
    linkedin: "https://linkedin.com/in/obaidullah30",
    twitter: "https://x.com/mdobaidullah30",
    facebook: "https://facebook.com/obaidullah.40",
    whatsapp: "https://wa.me/8801838113030",
  },
  twitterHandle: "@mdobaidullah30",
  stats: [
    { value: "3+", label: "Featured Projects", title: "Real-world, client-based & personal" },
    { value: "10+", label: "Technologies", title: "MERN, Firebase, Tailwind & more" },
    { value: "1+", label: "Year Experience", title: "Hands-on coding & shipping" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

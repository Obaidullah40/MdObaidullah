import type { IconType } from "react-icons";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import {
  Code2,
  Layers,
  Rocket,
  Wrench,
  GraduationCap,
  Briefcase,
} from "lucide-react";

export type Skill = {
  name: string;
  level: number;
  Icon: IconType;
  color: string;
};

export const skills: Skill[] = [
  { name: "HTML", level: 95, Icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS", level: 90, Icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", level: 85, Icon: FaJs, color: "text-yellow-400" },
  { name: "React", level: 90, Icon: FaReact, color: "text-cyan-400" },
  { name: "Node.js", level: 85, Icon: FaNodeJs, color: "text-green-500" },
  { name: "Express", level: 80, Icon: SiExpress, color: "text-gray-300" },
  { name: "MongoDB", level: 80, Icon: SiMongodb, color: "text-emerald-400" },
  { name: "Tailwind CSS", level: 90, Icon: SiTailwindcss, color: "text-sky-400" },
  { name: "Next.js", level: 80, Icon: SiNextdotjs, color: "text-white" },
  { name: "TypeScript", level: 75, Icon: SiTypescript, color: "text-blue-400" },
  { name: "Firebase", level: 80, Icon: SiFirebase, color: "text-amber-400" },
  { name: "Git & GitHub", level: 85, Icon: FaGitAlt, color: "text-orange-400" },
  { name: "VS Code", level: 90, Icon: VscVscode, color: "text-blue-400" },
];

export type TechBadge = { name: string; Icon: IconType; color: string };

export const heroTech: TechBadge[] = [
  { name: "React", Icon: FaReact, color: "text-cyan-400" },
  { name: "Next.js", Icon: SiNextdotjs, color: "text-white" },
  { name: "Node.js", Icon: FaNodeJs, color: "text-green-500" },
  { name: "MongoDB", Icon: SiMongodb, color: "text-emerald-400" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "text-sky-400" },
  { name: "GitHub", Icon: FaGithub, color: "text-gray-300" },
];

export type Project = {
  slug: string;
  name: string;
  emoji: string;
  tagline: string;
  description: string;
  longDescription: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  highlights: string[];
  challenges: string[];
  futurePlans: string[];
  featured: boolean;
  year: string;
};

export const projects: Project[] = [
  {
    slug: "garilagbe",
    name: "GariLagbe",
    emoji: "🚗",
    tagline: "Full-stack car rental & job platform",
    description:
      "Full-stack car rental & job platform. Users can browse, book, and manage cars; recruiters can post jobs and track applicants. Features Firebase auth, JWT-secured APIs, and responsive UI.",
    longDescription:
      "GariLagbe is a MERN-stack application combining a car rental marketplace with a recruitment portal. Drivers and renters can list, search, and book vehicles by Division, District, and Upazila. Employers can post jobs, manage applicants, and track hiring pipelines from a role-based dashboard. The backend uses Express and MongoDB with JWT stored in HTTP-only cookies for security.",
    stack: [
      "React",
      "Tailwind CSS",
      "DaisyUI",
      "Express.js",
      "MongoDB",
      "Firebase Auth",
      "JWT",
      "Axios",
    ],
    liveUrl: "https://assignment-11-garilagbe.web.app",
    githubUrl: "https://github.com/Obaidullah40/GariLagbe-client",
    highlights: [
      "Role-based dashboards for renters, owners, recruiters, and admins",
      "Dynamic Division → District → Upazila dependent dropdowns",
      "Secure JWT auth stored in HTTP-only cookies",
      "Fully responsive UI with Tailwind CSS and DaisyUI",
    ],
    challenges: [
      "Designing dependent dropdowns for Division → District → Upazila dynamically",
      "Handling role-based access control with different dashboards",
      "Managing tokens in HTTP-only cookies securely",
      "Designing dynamic dashboards for different roles",
    ],
    futurePlans: ["Add advanced analytics dashboards for admins"],
    featured: true,
    year: "2025",
  },
  {
    slug: "blood-donation",
    name: "Blood Donation",
    emoji: "🩸",
    tagline: "MERN platform connecting donors and recipients",
    description:
      "A MERN stack web application connecting blood donors with recipients. Features include dashboards, secure authentication, donation management, blogs, and Stripe funding.",
    longDescription:
      "A life-saving platform that connects blood donors with people in urgent need. The app handles donor registration, request matching, donation history, an admin dashboard, blog content, and Stripe-powered fundraising. Built end-to-end with the MERN stack and Firebase Auth.",
    stack: [
      "React",
      "Tailwind CSS",
      "DaisyUI",
      "Express.js",
      "MongoDB",
      "Firebase Auth",
      "Stripe Payments",
    ],
    liveUrl: "https://blood-donation-91267.web.app/",
    githubUrl: "https://github.com/Obaidullah40/blood-donation-client",
    highlights: [
      "Real-time donor and request matching",
      "Stripe-integrated fundraising for donation campaigns",
      "Role-based admin and donor dashboards",
      "Blog & content section to spread awareness",
    ],
    challenges: [
      "Integrating Stripe securely for donations and ensuring smooth payment flow",
    ],
    futurePlans: [
      "Add SMS / email notifications when a donation request is accepted",
      "Build an AI-powered donor recommendation system (location & blood type)",
      "Add a mobile app version for easier donor access",
      "Improve UI animations and accessibility (dark mode, ARIA roles)",
    ],
    featured: true,
    year: "2025",
  },
  {
    slug: "freelance-marketplace",
    name: "Freelance Task Marketplace",
    emoji: "💼",
    tagline: "Post, browse and bid on freelance tasks",
    description:
      "Full-stack freelance marketplace where users can post, browse, and bid on tasks. Includes authentication, role-based access, and CRUD operations.",
    longDescription:
      "A freelance task marketplace where clients can post jobs and freelancers can browse and place bids. Includes authentication, role-based dashboards, secure CRUD operations on user-scoped data, and a clean Tailwind + DaisyUI interface.",
    stack: [
      "React",
      "Tailwind CSS",
      "DaisyUI",
      "Firebase Auth",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    liveUrl: "https://a10-freelancemarketplace.web.app/",
    githubUrl: "https://github.com/Obaidullah40",
    highlights: [
      "Post tasks, browse listings, and place bids in real time",
      "Role-based access for clients and freelancers",
      "Secure user-scoped MongoDB queries",
      "Responsive UI built with Tailwind CSS and DaisyUI",
    ],
    challenges: ["Handling MongoDB queries securely for user-specific tasks"],
    futurePlans: [
      "Add a secure payment gateway (Stripe)",
      "Implement user profile system and review / rating features",
      "Real-time notifications for bids or updates",
    ],
    featured: true,
    year: "2024",
  },
];

export type Service = {
  Icon: typeof Code2;
  title: string;
  description: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    Icon: Code2,
    title: "Frontend Development",
    description:
      "Pixel-perfect, accessible UIs built with React, Next.js, Tailwind CSS and Framer Motion.",
    bullets: [
      "Responsive, mobile-first layouts",
      "Reusable component libraries",
      "Smooth animations & micro-interactions",
    ],
  },
  {
    Icon: Layers,
    title: "Full-Stack MERN Apps",
    description:
      "End-to-end web apps using MongoDB, Express, React and Node.js with secure auth and APIs.",
    bullets: [
      "REST APIs with Express & MongoDB",
      "JWT / Firebase authentication & roles",
      "Stripe payments and third-party integrations",
    ],
  },
  {
    Icon: Rocket,
    title: "Next.js & SEO Sites",
    description:
      "Marketing sites, portfolios, and dashboards on Next.js with great Lighthouse scores and SEO.",
    bullets: [
      "Server components & SSR / SSG",
      "Metadata, OG, sitemap & schema.org",
      "Performance & Core Web Vitals tuning",
    ],
  },
  {
    Icon: Wrench,
    title: "Bug Fixes & Refactors",
    description:
      "Quick, focused work on existing React / Node codebases — bug hunts, audits, and refactors.",
    bullets: [
      "Clear root-cause diagnosis",
      "Minimal-blast-radius fixes",
      "Tests & documentation included",
    ],
  },
];

export type Experience = {
  Icon: typeof Briefcase;
  role: string;
  org: string;
  period: string;
  description: string;
};

export const experience: Experience[] = [
  {
    Icon: Briefcase,
    role: "Freelance Web Developer",
    org: "Self-employed",
    period: "2024 — Present",
    description:
      "Designing and shipping full-stack MERN applications for clients across booking, healthcare, and marketplace domains.",
  },
  {
    Icon: GraduationCap,
    role: "Programming Hero — Web Development Course",
    org: "Programming Hero",
    period: "2024",
    description:
      "Intensive hands-on training in modern frontend & full-stack development covering React, Node.js, Express, MongoDB, Firebase, and deployment.",
  },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Your name here",
    role: "Future client / colleague",
    quote:
      "This space is reserved for testimonials from clients and colleagues. If we have worked together, I'd love to feature your words here.",
  },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
] as const;

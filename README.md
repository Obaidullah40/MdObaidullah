# Md Obaidullah — Portfolio

Personal portfolio of **Md Obaidullah** — a Frontend & MERN Stack Developer based in Dhaka, Bangladesh. Built with **Next.js 15**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**, with SEO and performance baked in.

🌐 Live: <https://obaidullah-portfolio.vercel.app>
📁 Source: <https://github.com/taqwa-tech-org/obaidullah-portfolio>

---

## ✨ Features

- ⚡ **Next.js 15 App Router** with React 19 server components.
- 🎨 **Modern dark UI** with gradient accents, glassmorphism cards, and smooth Framer Motion animations.
- 📱 **Fully responsive** — mobile-first layouts, optimized for every screen.
- 🔍 **SEO-ready out of the box**:
  - Per-page `metadata` (title template, description, keywords).
  - OpenGraph + Twitter card images generated at the edge via `next/og`.
  - `sitemap.xml`, `robots.txt`, `site.webmanifest`.
  - JSON-LD structured data (`Person`, `WebSite`, `ProfessionalService`, `ItemList`, `CreativeWork`).
  - Canonical URLs, semantic HTML, accessibility-first markup.
- 🧩 **Project detail pages** at `/projects/[slug]` — generated statically.
- 📝 **Blog placeholder** at `/blog` — ready for MDX articles.
- 📄 **Resume download** button (drop your PDF at `/public/resume.pdf`).
- ♿ **Accessibility**: skip-link, focus rings, `prefers-reduced-motion`, semantic landmarks.
- 🚀 Optimized fonts via `next/font`, automatic image optimization, no `Powered-by` header.

---

## 🛠️ Stack

| Layer       | Tech                                                                 |
| ----------- | -------------------------------------------------------------------- |
| Framework   | Next.js 15 (App Router) · React 19                                   |
| Language    | TypeScript                                                           |
| Styling     | Tailwind CSS v4 · custom CSS variables                               |
| Motion      | Framer Motion                                                        |
| Icons       | `lucide-react` · `react-icons`                                       |
| Deploy      | Vercel (recommended) — also works on Netlify, Cloudflare Pages, etc. |

---

## 🚀 Getting started

### Prerequisites

- Node.js **18.18+** (Node 20+ recommended)
- npm / pnpm / yarn

### Install & run

```bash
# 1. Clone
git clone https://github.com/taqwa-tech-org/obaidullah-portfolio.git
cd obaidullah-portfolio

# 2. Install
npm install

# 3. Configure environment
cp .env.example .env.local
# then edit .env.local and set NEXT_PUBLIC_SITE_URL to your domain

# 4. Run dev server
npm run dev
# open http://localhost:3000
```

### Production build

```bash
npm run build
npm run start
```

---

## ⚙️ Configuration

Most editable content lives in two files:

- [`lib/site.ts`](lib/site.ts) — name, title, contact info, socials, stats, SEO keywords.
- [`lib/data.ts`](lib/data.ts) — skills, projects, services, experience, testimonials.

Edit those, save, and the site updates everywhere it&rsquo;s used.

### Environment variables

| Var                          | Required | Description                                                |
| ---------------------------- | -------- | ---------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`       | yes      | Public origin used for canonical, sitemap, OG metadata.    |
| `GOOGLE_SITE_VERIFICATION`   | no       | Google Search Console verification token.                  |

---

## 📁 Project structure

```
.
├── app/
│   ├── layout.tsx              # Global metadata + fonts + JSON-LD
│   ├── page.tsx                # Home (hero / about / skills / projects / services / testimonials / contact)
│   ├── globals.css             # Tailwind v4 + theme tokens
│   ├── sitemap.ts              # Dynamic sitemap.xml
│   ├── robots.ts               # robots.txt
│   ├── manifest.ts             # site.webmanifest
│   ├── icon.tsx                # Favicon (generated)
│   ├── apple-icon.tsx          # Apple touch icon (generated)
│   ├── opengraph-image.tsx     # Default OG image (generated)
│   ├── not-found.tsx           # 404 page
│   ├── blog/
│   │   └── page.tsx            # Blog placeholder
│   └── projects/[slug]/
│       └── page.tsx            # Project detail pages (SSG)
├── components/                 # All UI sections + JSON-LD
├── lib/
│   ├── site.ts                 # Site metadata
│   └── data.ts                 # Skills, projects, services, etc.
├── public/                     # Static assets (resume.pdf, profile.jpg, ...)
└── ...
```

---

## 🌍 Deploy

### Vercel (one-click)

1. Push the repo to GitHub.
2. Import it on [vercel.com/new](https://vercel.com/new).
3. Set `NEXT_PUBLIC_SITE_URL` to your production URL in the Vercel dashboard.
4. Deploy. Done.

Also works out of the box on Netlify, Cloudflare Pages, Render, and Railway.

---

## 📄 License

MIT &copy; Md Obaidullah

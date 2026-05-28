# MAVORIX INDUSTRIAL

Modern Next.js website for **MAVORIX INDUSTRIAL — Your Industrial Sourcing Partner in China**.

This project is designed for GitHub + Vercel deployment. It does not use WordPress, Astra, SiteGround static upload, a database, or a complex CMS.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Local data files for services, industries, countries, and navigation
- Local Markdown blog content in `content/en/blog`
- Next.js Metadata API
- JSON-LD schema helpers
- Dynamic sitemap and robots routes
- Locale route structure: `/en/`, `/fr/`, `/es/`, `/ru/`, `/ar/`

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000/en/`.

## Build

```bash
npm run build
```

## Vercel Deployment

1. Push this folder to a GitHub repository named `mavorix-industrial`.
2. In Vercel, choose **Add New Project**.
3. Import the GitHub repository.
4. Framework preset: **Next.js**.
5. Build command: `npm run build`.
6. Output directory: keep the Vercel default for Next.js.
7. Deploy.

## Bind `mavorixindustrial.com`

1. In Vercel project settings, open **Domains**.
2. Add `mavorixindustrial.com` and optionally `www.mavorixindustrial.com`.
3. Follow Vercel's DNS instructions at your domain registrar.
4. Set the preferred canonical domain in Vercel.
5. Keep `metadataBase` and `site.url` as `https://mavorixindustrial.com`.

## Change WhatsApp and Email

Edit `data/site.ts`:

- `email`
- `whatsappUrl`

## Add a Service Page

Add an item to `data/services.ts`. The dynamic route `/[locale]/services/[slug]/` will generate the page, metadata, FAQ, internal links, and sitemap entry.

## Add an Industry Page

Add an item to `data/industries.ts`. The dynamic route `/[locale]/industries/[slug]/` will generate the page and sitemap entry.

## Add a Country Page

Add an item to `data/countries.ts`. The dynamic route `/[locale]/countries/[slug]/` will generate the country-focused page and sitemap entry.

## Add a Blog Article

Create a Markdown file in `content/en/blog/`:

```md
---
title: "Article Title"
description: "SEO meta description."
date: "2025-05-28"
---

## Main section

Article content.

### FAQ: Question?
Answer.
```

The route `/en/blog/your-file-name/` will be generated automatically.

## Add Small-Language Pages

The route structure already supports `/fr/`, `/es/`, `/ru/`, and `/ar/`. First-version pages reuse the same data model so language expansion can be done gradually without automatic translation plugins. Add localized data/content files when each language is ready.

## SEO and Sitemap

- Page metadata is handled with the Next.js Metadata API.
- Canonical and hreflang alternates are generated in `lib/seo.ts`.
- Sitemap is generated at `/sitemap.xml` from services, industries, countries, blog posts, and locale paths.
- Robots file is generated at `/robots.txt`.
- JSON-LD schema helpers are in `lib/schema.ts`.

## Content Strategy

The site is structured for industrial SEO and GEO / AI search optimization:

- Definition-style sections
- FAQ blocks
- Process sections
- Who-this-is-for content
- Risk and solution framing
- Internal links between services, industries, countries, blog, and contact pages

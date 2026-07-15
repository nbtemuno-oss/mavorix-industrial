# AGENTS.md

## Project Purpose

MAVORIX INDUSTRIAL is a modern B2B industrial sourcing website for overseas buyers looking for China-side sourcing, supplier verification, MRO sourcing, OEM support, spare parts sourcing, quality coordination, export support, and shipment consolidation.

The business goal is Google SEO and AI/GEO visibility for industrial sourcing leads. The site must remain professional, honest, fast, crawlable, and suitable for long-term content operations.

## Technology Stack

- Next.js App Router
- TypeScript
- React
- Tailwind CSS
- Local Markdown blog content in `content/en/blog`
- Local data modules in `data/`
- Next.js Metadata API
- JSON-LD helpers in `lib/schema.tsx`
- Dynamic `sitemap.xml` and `robots.txt`
- GitHub repository connected to Vercel

No WordPress, Astra, SiteGround static upload workflow, database, or CMS is used in the current version.

## Main Directory Structure

- `app/`: Next.js App Router pages, layouts, sitemap, robots, global CSS.
- `components/`: Shared layout, section, card, and UI components.
- `content/en/blog/`: English Markdown blog articles.
- `data/`: Site settings, navigation, services, industries, countries, translations, SEO queue/log data.
- `lib/`: SEO, schema, Markdown parsing, and i18n helpers.
- `public/`: Static assets, images, logos, favicon, and Google verification file.
- `scripts/`: SEO planning and deterministic article generation scripts.
- `.github/workflows/`: GitHub Actions automation.
- `docs/`: Supporting operational documentation.

## Commands

Install dependencies:

```bash
npm install
```

Start local development:

```bash
npm run dev
```

Open:

```text
http://localhost:3000/en/
```

Type check / lint:

```bash
npm run lint
```

Production build:

```bash
npm run build
```

Run production server after build:

```bash
npm run start
```

SEO planning:

```bash
npm run seo:plan
```

Generate planned SEO articles:

```bash
npm run seo:generate
npm run seo:generate -- --count 2
```

There is currently no separate automated test script in `package.json`.

## Code Modification Principles

- Keep changes scoped to the user's request.
- Preserve existing visual style, routing, SEO structure, and content model unless the user explicitly asks to change them.
- Prefer existing components, data files, and page templates over creating parallel systems.
- Do not rewrite the project or perform broad refactors for narrow tasks.
- Use local data files and Markdown content for page expansion.
- Do not add a database, CMS, or backend unless explicitly requested.
- Do not claim MAVORIX manufactures every product; describe the role as sourcing, verification, comparison, coordination, quality follow-up, export support, and consolidation.

## Existing Features That Must Be Preserved

- `/en/` full English site.
- Locale routes: `/en/`, `/fr/`, `/es/`, `/ru/`, `/ar/`.
- English service, industry, country, blog, and contact pages.
- Translated core pages for the existing non-English locale structure where implemented.
- Dynamic English blog generation from `content/en/blog`.
- Dynamic sitemap at `/sitemap.xml`.
- Robots route at `/robots.txt`.
- Google Search Console verification file in `public/`.
- Contact email and WhatsApp values from `data/site.ts`.
- Header/footer logo and static assets under `public/images/`.
- Weekly SEO content GitHub Action unless the user asks to disable it.

## Do Not Casually Modify Or Delete

- `data/site.ts` contact, domain, and locale settings.
- `app/sitemap.ts`, `app/robots.ts`, and `lib/seo.ts` canonical/hreflang behavior.
- `public/images/` assets and logo files.
- `content/en/blog/` published articles.
- `data/seo/published-articles-log.json`.
- `.github/workflows/weekly-seo-content.yml`.
- Google verification file: `public/google5a01c5bd1c2b23c2.html`.
- Vercel deployment settings outside the repository.

## Data Safety Rules

- Never commit passwords, API keys, tokens, private keys, database credentials, or real SMTP credentials.
- Do not print secret values in chat or logs.
- Use `.env.local` for local secrets and `.env.example` for names and documentation only.
- If a future automation needs an API key, store it in GitHub Actions Secrets or Vercel Environment Variables.
- Do not add private customer data, fake customer stories, fake reviews, fake certifications, or fake office claims.

## Static Asset Rules

- Put public images under `public/images/`.
- Use stable paths such as `/images/...`.
- Prefer `.webp` for web images; keep favicon files under `public/images/logo/`.
- Add image references through existing data maps such as `data/page-images.ts` when relevant.
- Do not remove existing images unless all references are updated and the user approves.
- Large source files, raw exports, or unused design files should not be committed unless the user asks.

## Git Commit And Push Rules

- Check status before and after changes:

```bash
git status --short --branch
```

- Commit only relevant files.
- Do not include `.env*`, `.next/`, `node_modules/`, logs, local caches, or database backups.
- Use clear commit messages.
- If automatic push succeeds, Vercel should deploy automatically.
- If automatic push fails, create the local commit, stop retrying, and tell the user to open GitHub Desktop and click **Push origin**.

## Deployment Notes

- Production deployment is through Vercel connected to GitHub.
- Build command: `npm run build`.
- Vercel framework preset: Next.js.
- Output directory: use the default Next.js output; do not set `public` as the output directory.
- Current canonical domain is configured in code as `https://www.mavorixindustrial.com`.
- Domain/DNS settings are managed outside this repository and should not be guessed.

## Required Checks After Changes

Run at least:

```bash
npm run lint
npm run build
```

If adding routes or content, also confirm:

- Blog/content appears in the expected route.
- Sitemap generation still succeeds.
- No TypeScript errors.
- No accidental changes to contact information, canonical domain, deployment settings, or unrelated pages.

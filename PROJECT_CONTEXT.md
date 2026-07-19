# PROJECT_CONTEXT.md

## Project Background

MAVORIX INDUSTRIAL is a China-side industrial sourcing and procurement support brand. The website is intended to attract overseas industrial buyers through Google SEO and AI/GEO-friendly content.

The site was intentionally rebuilt as a modern Next.js project for GitHub + Vercel deployment. It does not use WordPress, Astra, SiteGround static upload logic, a database, or a CMS in the current version.

Core positioning:

```text
MAVORIX INDUSTRIAL - Your Industrial Sourcing Partner in China
```

## Target Users

The website serves overseas:

- Factory owners and maintenance teams.
- Industrial purchasing managers.
- Importers and distributors.
- OEM buyers.
- MRO buyers.
- Buyers of industrial spare parts, packaging equipment parts, plastic industry equipment, agricultural equipment parts, metal parts, electrical/mechanical parts, and factory supplies.

## Completed Major Features

- Modern Next.js App Router site.
- English main site under `/en/`.
- Locale route structure for `/fr/`, `/es/`, `/ru/`, `/ar/`.
- Core pages: home, about, industrial sourcing, services, industries, countries, blog, contact.
- Dynamic service detail pages from `data/services.ts`.
- Dynamic industry detail pages from `data/industries.ts`.
- Dynamic country detail pages from `data/countries.ts`.
- Markdown blog system from `content/en/blog`.
- SEO metadata generation through `lib/seo.ts`.
- JSON-LD helpers through `lib/schema.tsx`.
- Dynamic sitemap at `/sitemap.xml`.
- Robots route at `/robots.txt`.
- Google Search Console verification file at `public/google5a01c5bd1c2b23c2.html`.
- Header/footer logo integration.
- Static image assets under `public/images/`.
- Contact form using `mailto:` and WhatsApp link.
- Weekly deterministic SEO content workflow in `.github/workflows/weekly-seo-content.yml`.
- SEO data files under `data/seo/`.

## Current Running Status

As of this handoff, local Git status was clean and synchronized with `origin/main` before creating these migration documents.

Known production domain from code:

```text
https://www.mavorixindustrial.com
```

Deployment platform:

```text
Vercel connected to GitHub
```

Repository remote observed from push history:

```text
https://github.com/nbtemuno-oss/mavorix-industrial.git
```

The exact Vercel project settings must be confirmed in the Vercel dashboard.

## Important Architecture And Design Decisions

- The site uses local data and Markdown instead of a database so Codex can safely create and edit pages through files.
- Service, industry, and country pages are generated from TypeScript data arrays and dynamic routes.
- Blog posts are Markdown files; new `.md` files in `content/en/blog/` automatically become English blog pages.
- Sitemap entries are generated from current data arrays and blog slugs.
- Sitemap `lastModified` attempts to use Git commit timestamps first and file mtimes as fallback.
- Non-English detail pages may intentionally show an "English version" notice if they are not fully translated.
- The site is designed around honest industrial B2B language: source, verify, compare, coordinate, inspect, consolidate.

## Why This Scheme Is Used

- GitHub + Vercel supports simple deployment and version control.
- Next.js App Router supports SEO metadata, static generation, dynamic routes, and Vercel deployment.
- Local Markdown/data files make bulk SEO content and country/service/industry expansion manageable without a CMS.
- Avoiding a database reduces first-version maintenance and migration risk.
- Static assets in `public/images/` are easy to migrate across computers through Git.

## Known Issues

- There is no dedicated automated test script in `package.json`; `npm run lint` currently runs `tsc --noEmit`.
- No `package-lock.json` exists in the repository at the time of this handoff. GitHub Actions currently uses `npm install`, not `npm ci`.
- Some older README text may be less detailed than the new handoff docs; use this file, `AGENTS.md`, and `SETUP_MAC.md` as the current migration context.
- Some non-English detailed pages are not fully translated and may show an English-version notice by design.
- Vercel project settings, DNS records, and GitHub account permissions cannot be fully verified from local files.
- Supabase/database usage is not present in the current codebase. If a separate Supabase project exists outside this repo, it is待确认.

## Unfinished Or Future Work

- Continue improving rankings based on Google Search Console performance data.
- Add more high-quality English SEO/GEO blog posts only where there is search demand.
- Gradually translate more French, Spanish, Russian, and Arabic pages with human-reviewed content.
- Add a form provider or backend contact endpoint if mailto becomes insufficient.
- Consider adding a lockfile after confirming Vercel/GitHub workflow preference.
- Consider adding a real test script if application complexity increases.

## Next Priorities

1. Confirm the Mac mini can clone, install, build, and run the project.
2. Confirm GitHub Desktop or command-line Git can push from the Mac.
3. Confirm Vercel deploys after a test documentation-only commit.
4. Continue GSC-based optimization for pages with impressions but low CTR/ranking.
5. Keep contact details, sitemap, robots, and canonical domain stable.

## Business Logic That Must Not Be Broken

- MAVORIX is a sourcing/procurement support partner, not a manufacturer of all products.
- Do not claim fake certifications, fake customer cases, fake offices, or guaranteed customs clearance.
- Do not promise lowest price or guaranteed delivery.
- Keep the business focus on industrial sourcing, MRO, OEM support, spare parts, supplier verification, quality coordination, export support, and consolidation.
- Contact details should come from `data/site.ts`.

Current contact details in code:

```text
Email: michael@mavorixindustrial.com
Phone/WhatsApp display: +8613967842747
WhatsApp URL: https://wa.me/8613967842747
```

## Deployment Location

- GitHub repository: observed as `nbtemuno-oss/mavorix-industrial`.
- Production: Vercel, domain `https://www.mavorixindustrial.com`.
- DNS registrar and exact Vercel project settings:待确认.

## External Service Dependencies

Current required runtime dependencies:

- GitHub for source control and Actions.
- Vercel for production deployment.

Optional or future dependencies:

- `OPENAI_API_KEY` is referenced as an optional future GitHub Actions secret in the weekly SEO workflow, but the current deterministic workflow does not require it.
- No database, Supabase client, SMTP provider, CMS, or payment system is present in the codebase.

## Local Files Versus Cloud Data

Stored in Git/repository:

- Application code.
- Local data files.
- Markdown blog content.
- Static images and logos.
- SEO queue/log JSON files.
- Google verification HTML file.
- GitHub Actions workflow.

Generated locally and not meant to migrate through Git:

- `node_modules/`
- `.next/`
- `*.log`
- `*.tsbuildinfo`
- local `.env*` files

Cloud/external:

- GitHub repository and Actions history.
- Vercel project, deployment history, domain settings, and environment variables.
- Google Search Console property and exported CSV data outside the repo.
- Any future API keys/secrets configured in GitHub or Vercel.

# MAVORIX Weekly SEO/GEO Content Workflow

This document explains the weekly SEO/GEO content automation for the MAVORIX Industrial website.

## What The Workflow Does

The workflow creates a lightweight content automation process for English B2B SEO/GEO articles. It:

1. Reviews the local keyword/topic opportunity pool.
2. Updates SEO/GEO keyword planning data.
3. Selects planned article topics that have not already been published.
4. Generates English Markdown blog articles in the existing blog system.
5. Runs lint and build.
6. Commits generated content.
7. Pushes to GitHub so Vercel can redeploy the site.

The current implementation is deterministic and local. It does not require live web search or an AI API key. This keeps the workflow stable even if external services are unavailable.

## Schedule

Workflow file:

`/.github/workflows/weekly-seo-content.yml`

Schedule:

`0 1 * * 1,4`

This means every Monday and Thursday at 01:00 UTC, which is about 09:00 Beijing time.

## Manual Run

In GitHub:

1. Open the repository.
2. Go to **Actions**.
3. Select **Weekly SEO Content Automation**.
4. Click **Run workflow**.
5. Optional: set `article_count`.
6. Click **Run workflow**.

## How To Generate 2 Articles Per Run

For a manual run, set:

`article_count = 2`

For scheduled runs, edit `.github/workflows/weekly-seo-content.yml` and change:

`ARTICLE_COUNT: ${{ github.event.inputs.article_count || '1' }}`

to:

`ARTICLE_COUNT: ${{ github.event.inputs.article_count || '2' }}`

## How To Disable Automatic Runs

Edit `.github/workflows/weekly-seo-content.yml` and remove or comment out the `schedule` block:

```yml
schedule:
  - cron: "0 1 * * 1,4"
```

Manual `workflow_dispatch` can remain enabled.

## How To Change Publish Time

Edit the cron expression in `.github/workflows/weekly-seo-content.yml`.

Example:

```yml
- cron: "0 2 * * 1,4"
```

This would run at 02:00 UTC, about 10:00 Beijing time.

## SEO/GEO Data Locations

Keyword research:

`/data/seo/weekly-keyword-research.json`

Article queue:

`/data/seo/article-queue.json`

Published article log:

`/data/seo/published-articles-log.json`

Generated articles:

`/content/en/blog/`

## Existing Blog System

The site already uses a local Markdown blog system:

- Blog index: `/app/[locale]/blog/page.tsx`
- Blog detail: `/app/[locale]/blog/[slug]/page.tsx`
- Markdown parser: `/lib/mdx.ts`
- Blog content: `/content/en/blog/`

New `.md` files in `/content/en/blog/` automatically become blog detail pages and are included in the sitemap through `getBlogSlugs()`.

## Local Commands

Run keyword planning:

```bash
npm run seo:plan
```

Generate one article:

```bash
npm run seo:generate
```

Generate two articles:

```bash
npm run seo:generate -- --count 2
```

Run checks:

```bash
npm run lint
npm run build
```

## Secrets And API Keys

No secret is required for the current deterministic workflow.

If the scripts are later extended to use AI-generated drafts or live keyword research, configure secrets in GitHub:

- `OPENAI_API_KEY` for OpenAI API access
- Any future search API key only if a search provider is added

Do not hardcode API keys in the repository.

## How To Review Generated Articles

Check:

1. New Markdown files in `/content/en/blog/`
2. Updated queue status in `/data/seo/article-queue.json`
3. Updated log in `/data/seo/published-articles-log.json`
4. Blog index at `/en/blog/`
5. Article URL at `/en/blog/<slug>/`
6. Sitemap at `/sitemap.xml`

## If Automatic Push Fails

If Codex or GitHub Actions cannot push automatically:

1. Open GitHub Desktop.
2. Select the `mavorix-industrial` repository.
3. Confirm the local commit is present.
4. Click **Push origin**.

After the push reaches GitHub, Vercel should trigger a new deployment automatically.

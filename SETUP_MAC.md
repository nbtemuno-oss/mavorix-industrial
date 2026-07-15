# SETUP_MAC.md

This guide explains how to move the MAVORIX INDUSTRIAL website project from Windows to an Apple Silicon Mac mini.

## 1. Software To Install

Install these on the Mac:

- macOS command line tools:

```bash
xcode-select --install
```

- Git:

```bash
git --version
```

- GitHub Desktop for macOS, optional but recommended for visual Git operations.
- Node.js 22 LTS or the current version compatible with Next.js 16.
- npm, bundled with Node.js.
- A code editor such as Visual Studio Code.

Optional:

- Python 3, only if future scripts require it.
- Docker Desktop for Mac, not required by the current project.
- pnpm/yarn, not required by the current project.

## 2. Recommended Node Installation On Apple Silicon

Recommended approach with `nvm`:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

Restart Terminal, then:

```bash
nvm install 22
nvm use 22
node -v
npm -v
```

The GitHub Action currently uses Node.js 22.

## 3. Git And GitHub Setup

Configure Git identity:

```bash
git config --global user.name "Your Name"
git config --global user.email "your-github-email@example.com"
```

Authenticate with GitHub using either:

- GitHub Desktop login, or
- GitHub CLI, or
- SSH keys.

Check access:

```bash
git ls-remote https://github.com/nbtemuno-oss/mavorix-industrial.git
```

If the repository URL or owner changes, confirm the correct URL in GitHub before cloning.

## 4. Clone The Project

Choose a macOS workspace folder, for example:

```bash
mkdir -p ~/Projects
cd ~/Projects
git clone https://github.com/nbtemuno-oss/mavorix-industrial.git
cd mavorix-industrial
```

Check branch status:

```bash
git status --short --branch
```

Expected:

```text
## main...origin/main
```

## 5. Install Dependencies

This repository currently has no `package-lock.json`, and the GitHub Action uses `npm install`.

Run:

```bash
npm install
```

If a `package-lock.json` is created and the team does not want to add it yet, do not commit it unless that decision is approved.

## 6. Environment Variables

Current production code does not require a local `.env.local` for normal development/build.

If future optional integrations are enabled, copy:

```bash
cp .env.example .env.local
```

Then fill values locally. Do not commit `.env.local`.

Current optional variable names are documented in `.env.example`.

## 7. Start Local Development

```bash
npm run dev
```

Open:

```text
http://localhost:3000/en/
```

If port 3000 is busy:

```bash
npm run dev -- -p 3001
```

Open:

```text
http://localhost:3001/en/
```

## 8. Build And Checks

Run TypeScript check:

```bash
npm run lint
```

Run production build:

```bash
npm run build
```

Run production server after build:

```bash
npm run start
```

There is currently no `npm test` script. Treat `npm run lint` and `npm run build` as the required checks unless a test script is added later.

## 9. SEO Automation Commands

Plan SEO topics:

```bash
npm run seo:plan
```

Generate one planned article:

```bash
npm run seo:generate
```

Generate multiple planned articles:

```bash
npm run seo:generate -- --count 2
```

Review generated files before committing.

## 10. Windows And macOS Path Differences

Old Windows workspace path:

```text
E:\MAVORIX网站\mavorix-industrial
```

Suggested macOS path:

```text
~/Projects/mavorix-industrial
```

Do not hardcode Windows paths in scripts or documentation. Use project-relative paths such as:

```text
content/en/blog/
public/images/
data/site.ts
```

## 11. File Name Case Sensitivity

Windows is usually case-insensitive. macOS can be case-insensitive or case-sensitive depending on disk format.

Rules:

- Keep imports exactly matching file names.
- Do not rename files only by changing capitalization.
- Keep static image paths exact, for example `/images/logo/favicon-32.png`.
- Run `npm run build` after moving to Mac to catch casing problems.

## 12. Script Execution Permissions

Current scripts are Node `.mjs` files and do not require executable permission.

If shell scripts are added later, make them executable on Mac:

```bash
chmod +x scripts/name-of-script.sh
```

PowerShell scripts from Windows should be reviewed before use on macOS. Prefer Node scripts for cross-platform automation.

## 13. Apple Silicon Compatibility Notes

The current dependencies are JavaScript/TypeScript packages and should work on Apple Silicon.

If a future package uses native binaries:

- Delete `node_modules/`.
- Reinstall on the Mac with `npm install`.
- Do not copy `node_modules` from Windows.

## 14. Common Troubleshooting

### `next` command not found

Run:

```bash
npm install
```

### Build fails after moving from Windows

Try:

```bash
rm -rf .next node_modules
npm install
npm run build
```

### Git says files changed because of line endings

Check:

```bash
git status --short
```

Avoid committing large line-ending-only diffs. If needed, configure Git line ending behavior intentionally.

### Vercel deployment fails after push

Check:

- Vercel project uses the Next.js preset.
- Build command is `npm run build`.
- Output directory is not set to `public`.
- Node.js version is compatible with Next.js 16.
- Environment variables, if any future ones are required, are configured in Vercel.

### GitHub Actions fails on dependency install

This repo currently has no lockfile and uses `npm install`. If a lockfile is later added, update the workflow intentionally.

## 15. First-Day Mac Checklist

1. Install command line tools, Git, Node 22, and GitHub Desktop.
2. Clone the GitHub repository.
3. Run `npm install`.
4. Run `npm run lint`.
5. Run `npm run build`.
6. Run `npm run dev`.
7. Open `http://localhost:3000/en/`.
8. Make a small documentation-only test change if needed.
9. Commit and push.
10. Confirm Vercel deploys from GitHub.

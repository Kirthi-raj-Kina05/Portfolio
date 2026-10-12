# Keerthana C N — Portfolio

Next.js (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Motion · Lucide.
Self-hosted fonts (Sora, JetBrains Mono) via Fontsource — no third-party font requests.

## Setup

```bash
npm install
cp .env.example .env.local   # optional until you have a domain
npm run dev                  # http://localhost:3000
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server. Shows a dev-only checklist of missing content. |
| `npm run build` | Production build. |
| `npm start` | Serve the production build. |
| `npm run typecheck` | TypeScript check. |

## Editing content

All copy lives in **`data/portfolio.ts`**. Components only render what is there, and any
field left `undefined`/`null` is hidden automatically (no dead buttons, no empty cards).

- **Resume:** drop the file at `public/resume.pdf`. The “Download Resume” button appears automatically.
- **Screenshots:** save as `public/images/projects/<name>.webp`, then set `image` + `imageAlt` on the project.
- **Links:** add `liveUrl` / `repoUrl` to a project when real ones exist.
- **Case study:** add a `caseStudy` object to a project to show an expandable write-up.
- **Employment dates:** set `experience.dates` once confirmed (hidden while `null`).
- **Certification dates / credential links:** add `date` / `url` per entry.

## Assets

- Avatar: `public/images/avatar.webp` (optimised from your illustrated portrait).
- Logo: `public/logo.svg` (navbar) and `app/icon.svg` (favicon).

## SEO

Metadata API is configured in `app/layout.tsx`; `robots.ts`, `sitemap.ts` and a branded
`opengraph-image.tsx` are included. `metadataBase`, canonical URL and the sitemap only turn on
when `NEXT_PUBLIC_SITE_URL` is set to your real domain.

## Deploy (Vercel)

1. Push to GitHub and import the repo in Vercel (framework auto-detected).
2. Add `NEXT_PUBLIC_SITE_URL=https://your-domain` in Project → Settings → Environment Variables.
3. Deploy, then run Lighthouse on the production URL and fix anything real it finds.

## Final checklist — still needed from you

- [ ] Confirm employment start date (April 2024 vs. "six months" conflict).
- [ ] Add `public/resume.pdf`.
- [ ] Velo360 live URL (if public) and any repo URLs.
- [ ] Real screenshots for DriveGenie (public site) and Velo360; confirm employer permission.
- [ ] Verify your individual contribution on each project; fill `contribution`.
- [ ] Pick the strongest 3rd featured project; classify the academic ones correctly.
- [ ] Write 2–3 case studies from real engineering details.
- [ ] Confirm certification titles/dates; is “AWS Cloud Practitioner” training or the official AWS exam?
- [ ] Set `NEXT_PUBLIC_SITE_URL`; replace the generated share card with a real preview if wanted.
- [ ] Run Lighthouse + test at 375 / 768 / 1024 / 1440 px.

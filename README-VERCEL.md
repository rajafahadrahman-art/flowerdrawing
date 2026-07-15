# Vercel Deployment Guide

FlowerDrawings.org deploys from GitHub to Vercel with the Next.js application at the repository root.

## Framework settings

| Setting | Value |
| --- | --- |
| Framework Preset | Next.js |
| Root Directory | `.` |
| Install Command | `npm install` |
| Build Command | `npm run build` |
| Output Directory | Leave blank |
| Environment variables | None required in Phase 1 |

## GitHub repository import

1. Push this repository to GitHub.
2. In Vercel, choose **Add New Project**.
3. Import the GitHub repository.
4. Confirm Root Directory is `.`
5. Confirm Framework Preset is **Next.js**.
6. Leave Output Directory blank.
7. Deploy.

## Preview deployments

Every pull request and non-production branch push creates a Preview Deployment automatically.

Use Preview URLs to review:

- Homepage content and images
- `/flower-drawing/`
- `/flower-drawing/rose-drawing/`
- Worksheet PDF downloads
- Mobile navigation and FAQ accordion

## Production deployment

Production deploys from the primary production branch (usually `main`).

After a production deploy:

1. Open https://flowerdrawings.org/
2. Confirm logo, hero, featured image, and worksheets load
3. Confirm `/flower-drawing/rose-drawing/` loads
4. Confirm `https://flowerdrawings.org/sitemap.xml`
5. Confirm `https://flowerdrawings.org/robots.txt`

## Domain connection

1. Open the Vercel project **Settings → Domains**
2. Add `flowerdrawings.org` and `www.flowerdrawings.org`
3. Follow Vercel DNS instructions at your DNS provider
4. Prefer redirecting `www` to the apex domain or the reverse, consistently
5. Wait for SSL certificates to become active

## Deployment rollback

If a production deploy introduces a problem:

1. Open the Vercel project **Deployments**
2. Find the last known good production deployment
3. Click **⋯ → Promote to Production** / Instant Rollback
4. Re-check homepage, archive, Rose tutorial, and worksheet downloads

## Future tutorial publishing

1. Add a new folder under `content/flower-drawing/[slug]/`
2. Add `meta.ts` and `content.mdx`
3. Place images in `public/images/flower-drawing/[slug]/`
4. Add worksheet files under `public/downloads/[slug]/` when available
5. Register the tutorial in `src/lib/tutorials/get-tutorials.ts`
6. Run:

```bash
npm run validate:content
npm run lint
npm run build
```

7. Commit, push, and merge to the production branch

The archive page updates automatically from registered tutorial metadata.

## Notes

- Do not set the Vercel Root Directory to `web`, `frontend`, or another nested folder.
- Do not add Phase 1 environment variables.
- Do not introduce WordPress, PHP, databases, or a CMS for this deployment model.
- FlowerDrawings.com is obsolete. The official brand and production domain are FlowerDrawings.org / https://flowerdrawings.org.

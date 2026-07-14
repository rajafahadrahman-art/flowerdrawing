# FlowerDrawings.com

Production website for [FlowerDrawings.com](https://flowerdrawings.com) — easy flower drawing tutorials for beginners, students, kids, parents, teachers, and hobby artists.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Local MDX tutorial content
- Static generation
- GitHub → Vercel deployment

## Local development

```bash
npm install
npm run assets:all
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Important routes

- `/` — Homepage
- `/flower-drawing/` — Tutorial archive
- `/flower-drawing/rose-drawing/` — Rose Drawing tutorial

## Source content

Approved raw source files live in:

```text
source-assets/
```

Do not use `source-assets/` as the public website folder. Public assets are copied into `public/`.

## Content rules

Homepage copy is locked to:

```text
source-assets/homepage-content.txt
```

Do not rewrite, paraphrase, shorten, expand, or reorder approved content unless explicitly requested.

See:

- `docs/CONTENT-RULES.md`
- `docs/ADD-NEW-TUTORIAL.md`
- `docs/IMAGE-NAMING.md`
- `README-VERCEL.md`
- `AGENTS.md`

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start local development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |
| `npm run validate:content` | Validate homepage and Rose content/assets |
| `npm run assets:images` | Copy source images into `public/` |
| `npm run assets:icons` | Generate favicon and app icons from the logo |
| `npm run assets:worksheet` | Copy worksheets and generate A4 PDFs |
| `npm run assets:all` | Run all asset generation steps |
| `npm run check` | Validate content, lint, and build |

## Project structure

```text
content/flower-drawing/[slug]/
├── content.mdx
├── meta.ts
└── tutorial-content.ts   # structured exact copy for rendering

public/
├── downloads/
├── icons/
└── images/

src/app/
├── page.tsx
├── flower-drawing/
│   ├── page.tsx
│   └── [slug]/page.tsx
├── sitemap.ts
├── robots.ts
└── manifest.ts
```

## Contact

ale298784@gmail.com

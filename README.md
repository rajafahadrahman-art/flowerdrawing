# FlowerDrawings.org

Production website for [FlowerDrawings.org](https://flowerdrawings.org) — easy flower drawing tutorials for beginners, students, kids, parents, teachers, and hobby artists.

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
- `/flower-drawing/tulip-drawing/` — Tulip Drawing tutorial
- `/flower-drawing/sunflower-drawing/` — Sunflower Drawing tutorial
- `/flower-drawing/hibiscus-flower-drawing/` — Hibiscus Flower Drawing tutorial
- `/worksheets/` — Printable worksheet collection
- `/about/` — About FlowerDrawings.org
- `/contact/` — Contact
- `/privacy-policy/` — Privacy Policy
- `/disclaimer/` — Disclaimer
- `/terms-and-conditions/` — Terms and Conditions
- `/tools/draw-along/` — Draw Along (all drawings; also launched from each tutorial post)

## Draw Along

Open `/tools/draw-along/` or use the Draw Along launcher near the top of any tutorial post.

Data is derived automatically from the shared tutorial registry:

```text
src/lib/draw-along/
├── types.ts
└── get-draw-along.ts
```

When a new tutorial is added to `src/lib/tutorials/get-tutorials.ts` and `get-tutorial-body.ts` with real step images, it appears on Draw Along automatically. Do not hardcode separate Draw Along card lists.

## Source content

Approved raw source files live in:

```text
source-assets/
```

`source-assets/` is read-only. Do not edit, rename, move, or delete files there. Public assets are copied into `public/`.

## Content rules

Homepage copy is locked to:

```text
source-assets/homepage-content.txt
```

Do not rewrite, paraphrase, shorten, expand, or reorder approved content unless explicitly requested.

Worksheet action buttons use:

- `Download Free Worksheet`
- `Print Now`

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
| `npm run validate:content` | Validate homepage, tutorials, worksheets, and assets |
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
├── worksheets/page.tsx
├── flower-drawing/
│   ├── page.tsx
│   └── [slug]/page.tsx
├── sitemap.ts
├── robots.ts
└── manifest.ts
```

## Contact

Use the Contact navigation link (mailto). Do not display the raw email address in the footer.

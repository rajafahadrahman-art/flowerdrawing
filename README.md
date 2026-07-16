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

`getAllDrawAlongTutorials()` and `getDrawAlongTutorialBySlug()` read the same tutorial meta + body registries used by article pages. There is no separate Draw Along card list.

### Adding a Tutorial to Draw Along

Add the tutorial once through the normal publishing flow. Draw Along picks it up automatically when step images exist.

1. **Where to add tutorial data**
   - `content/flower-drawing/[slug]/meta.ts` — metadata
   - `content/flower-drawing/[slug]/tutorial-content.ts` — body including `steps.items` with images
   - Register the meta export in `src/lib/tutorials/get-tutorials.ts`
   - Register the body export in `src/lib/tutorials/get-tutorial-body.ts`
   - Follow `docs/ADD-NEW-TUTORIAL.md` for the full article publishing checklist

2. **Required fields for Draw Along**
   - From meta: `slug`, `focusKeyword` (used as the short title), `featuredImage`, `featuredImageAlt`, optional `worksheetPDF`
   - From body steps: ordered items each with `title`, `image.src`, and `image.alt`
   - Article URL is derived as `/flower-drawing/[slug]/`
   - Step count is always `tutorial.steps.length` — never store a separate `numberOfSteps`

3. **Where step images must be stored**

```text
public/images/flower-drawing/[slug]/
├── [slug]-step-1.webp
├── [slug]-step-2.webp
├── …
├── [slug]-step-(N-1).webp
└── [slug].webp          # final step + featured image
```

4. **Image filename rules**
   - Lowercase, hyphenated, `.webp` only
   - Steps `1..(N-1)` use `[slug]-step-K.webp`
   - Final step uses `[slug].webp` (do not create `[slug]-step-N.webp`)

5. **Article URL connection**
   - Route: `/flower-drawing/[slug]/` via `src/app/flower-drawing/[slug]/page.tsx`
   - That page calls `getDrawAlongTutorialBySlug(slug)` and passes the result into `TutorialArticle`

6. **How the launcher appears on the post**
   - `TutorialArticle` renders shared `DrawAlongLauncher` when Draw Along data is complete
   - No per-flower launcher component is required

7. **How the card appears on `/tools/draw-along/`**
   - `src/app/tools/draw-along/page.tsx` calls `getAllDrawAlongTutorials()`
   - Cards are generated from that list by `DrawAlongHomeClient`
   - Incomplete tutorials (missing steps/images/title/slug) are excluded safely

8. **Step count**
   - Always calculated as `tutorial.steps.length` inside the shared popup

9. **How to test the popup**
   - Open `/flower-drawing/[slug]/` and click **Start Drawing**
   - Also open `/tools/draw-along/` and click **Start Drawing** on the new card
   - Confirm Step 1, thumbnails, Previous/Next/Finish, and completion image

10. **Commands that must pass**

```bash
npm run validate:content
npm run lint
npm run build
```

Do not create a separate Draw Along registry, card array, or flower-specific popup.

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

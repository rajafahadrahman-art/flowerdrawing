# Add a New Tutorial

Follow this process to publish a new flower drawing tutorial from `source-assets/`.

## 1. Treat source-assets as read-only

Never rename, move, edit, crop, recolor, or delete files inside `source-assets/`.

Locate the real folder case-insensitively. Example:

```text
source-assets/Hibiscus-flower-drawing/
```

Production slug and public paths remain lowercase:

```text
hibiscus-flower-drawing
```

## 2. Extract metadata exactly

From the top of `[slug]-content.txt`, copy exactly:

- Focus Keyword → `focusKeyword` and featured-image alt
- SEO Title → `seoTitle`
- Meta Description → `metaDescription`

Do not rewrite, optimize, or append site-name text unless the source title already includes it.

## 3. Choose a stable slug

Use lowercase hyphenated slugs only.

Examples:

```text
rose-drawing
sunflower-drawing
hibiscus-flower-drawing
tulip-drawing
```

Canonical route:

```text
/flower-drawing/[slug]/
```

Do not create competing URLs such as `/easy-rose-drawing/` or `/rose-drawing-step-by-step/`.

## 4. Create the content folder

```text
content/flower-drawing/[slug]/
├── content.mdx
├── meta.ts
└── tutorial-content.ts
```

Export a `TutorialBody` object (for example `tulipBody`) so the shared tutorial page renderer can display the article. Preserve every visible sentence exactly.

## 5. Map images

Copy tutorial images into:

```text
public/images/flower-drawing/[slug]/
```

Rules:

- Steps `1..(N-1)` use `[slug]-step-1.webp` … `[slug]-step-(N-1).webp`
- Final step `N` uses `[slug].webp`
- Do **not** create `[slug]-step-N.webp`
- `[slug].webp` is also the featured image, archive card image, and Open Graph image
- Worksheet alt format: `[exact focus keyword] worksheet`

Extend `scripts/copy-images.ts`, then run:

```bash
npm run assets:images
```

## 6. Add worksheets

Copy the worksheet image and generate an A4 PDF:

```text
public/downloads/[slug]/[slug]-worksheet.webp
public/downloads/[slug]/[slug]-worksheet.pdf
```

Extend `scripts/generate-worksheets.ts`, then run:

```bash
npm run assets:worksheet
```

The `/worksheets/` collection updates automatically from tutorial metadata plus the general homepage worksheet.

## 7. Register the tutorial

Import the new `meta.ts` in:

```text
src/lib/tutorials/get-tutorials.ts
```

Add it to `tutorialRegistry` and `tutorialOrder`.

Also:

- Export the body from `src/lib/tutorials/get-tutorial-body.ts`
- Update `relatedTutorials` on sibling tutorials
- Confirm previous/next navigation uses the deterministic collection order

## 8. Schema and sitemap

The shared tutorial page adds:

- Article
- BreadcrumbList
- FAQPage only when visible FAQs exist

`sitemap.ts` includes every registered tutorial and `/worksheets/` automatically. Privacy, Disclaimer, and Terms stay excluded.

## 9. Table of Contents

Add a TOC file such as `src/lib/tutorials/[slug]-toc.ts` built from real H2/H3 headings.

The shared `TableOfContents` component is open by default (`<details open>`), closable, and highlights `:target` sections after click.

## 10. Validate and publish

```bash
npm run assets:all
npm run validate:content
npm run lint
npm run build
npm run check
```

Commit on a feature branch, push, and open a pull request targeting `main`. Vercel creates a preview deployment from the PR.

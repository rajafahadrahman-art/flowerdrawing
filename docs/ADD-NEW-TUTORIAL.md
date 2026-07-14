# Add a New Tutorial

Follow this process to publish a new flower drawing tutorial.

## 1. Choose a stable slug

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

## 2. Create the content folder

```text
content/flower-drawing/[slug]/
├── content.mdx
├── meta.ts
└── tutorial-content.ts   # optional structured exact copy for rendering
```

## 3. Fill `meta.ts`

Required fields:

- `title`
- `slug`
- `focusKeyword`
- `seoTitle`
- `metaDescription`
- `excerpt`
- `difficulty`
- `estimatedTime`
- `stepCount`
- `featuredImage`
- `featuredImageAlt`
- `featuredImageTitle`
- `worksheetImage`
- `worksheetPDF`
- `publishedDate`
- `updatedDate`
- `faqs`
- `relatedTutorials`

Use only real dates and real FAQs from approved source content.

## 4. Add images

Place images in:

```text
public/images/flower-drawing/[slug]/
```

Example:

```text
public/images/flower-drawing/rose-drawing/
├── rose-drawing.webp
├── rose-drawing-step-1.webp
├── rose-drawing-step-2.webp
└── ...
```

Rules:

- Use `.webp`
- Keep filenames lowercase and hyphenated
- The completed drawing (`[slug].webp`) is the featured image and the final step image
- Do not invent missing step images

## 5. Add worksheets

If a worksheet exists:

```text
public/downloads/[slug]/[slug]-worksheet.webp
public/downloads/[slug]/[slug]-worksheet.pdf
```

Generate the PDF with:

```bash
npm run assets:worksheet
```

## 6. Register the tutorial

Import the new `meta.ts` in:

```text
src/lib/tutorials/get-tutorials.ts
```

Add it to `tutorialRegistry`.

## 7. Validate and deploy

```bash
npm run validate:content
npm run lint
npm run build
```

Commit, push, and merge. Vercel will create preview and production deployments from GitHub.

# Image Naming

## Brand

```text
public/images/brand/flowerdrawings-logo.webp
```

Logo alt text must remain:

```text
FlowerDrawings.org
```

Note: the supplied logo artwork may still contain `.com` inside the raster image. Do not edit the image. Display the correct FlowerDrawings.org brand as styled HTML text beside it.

## Homepage

```text
public/images/flower-drawing/home/flower-drawing-hero.webp
public/images/flower-drawing/home/flower-drawing-step-1.webp
public/images/flower-drawing/home/flower-drawing-step-2.webp
public/images/flower-drawing/home/flower-drawing-step-3.webp
public/images/flower-drawing/home/flower-drawing-step-4.webp
public/images/flower-drawing/home/flower-drawing-step-5.webp
public/images/flower-drawing/home/flower-drawing.webp
```

Notes:

- `flower-drawing.webp` is both the featured image and the Step 6 completed drawing
- Do not publish a separate `flower-drawing-step-6.webp`
- Worksheet preview and PDF live under `public/downloads/`

### Homepage SEO attributes

| Asset | Alt | Title |
| --- | --- | --- |
| Hero | simple flower drawing | flower drawing easy |
| Featured / Step 6 | flower drawing | easy flower drawing |
| Worksheet | flower drawing worksheets | download practice worksheets |

## Tutorial images

```text
public/images/flower-drawing/[slug]/
├── [slug].webp
├── [slug]-step-1.webp
├── [slug]-step-2.webp
└── ...
```

Rules:

- Lowercase filenames
- Hyphen separators
- `.webp` only
- Preserve aspect ratio
- Provide explicit width and height
- Lazy-load below-the-fold images
- Use priority loading only where justified
- Do not duplicate the final completed drawing as an extra numbered file
- The final completed step image must also be the featured image

## Rose Drawing

```text
public/images/flower-drawing/rose-drawing/rose-drawing.webp
public/images/flower-drawing/rose-drawing/rose-drawing-step-1.webp
...
public/images/flower-drawing/rose-drawing/rose-drawing-step-8.webp
```

Featured SEO:

- Alt: `rose drawing`
- Title: `easy rose drawing`

Step 9 uses `rose-drawing.webp` as the completed drawing.

## Worksheets

```text
public/downloads/flower-drawing-worksheet.webp
public/downloads/flower-drawing-worksheet.pdf
public/downloads/rose-drawing/rose-drawing-worksheet.webp
public/downloads/rose-drawing/rose-drawing-worksheet.pdf
```

PDF requirements:

- A4 portrait
- White background
- Preserve aspect ratio
- No cropping
- No stretching
- Centered on the page

## Icons

Generated from the supplied logo only:

```text
src/app/favicon.ico
src/app/icon.png
src/app/apple-icon.png
public/icons/favicon-16x16.png
public/icons/favicon-32x32.png
public/icons/site-icon-512.png
```

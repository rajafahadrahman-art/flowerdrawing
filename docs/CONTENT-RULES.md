# Content Rules

## Source of truth

Approved raw content lives in:

```text
source-assets/
```

Key files:

```text
source-assets/homepage-content.txt
source-assets/rose-drawing/rose-drawing-content.txt
```

## Strict rules

Do not:

- Rewrite content
- Correct grammar
- Change keywords
- Paraphrase
- Shorten
- Expand
- Summarize
- Reorder sections
- Change headings
- Change FAQ questions or answers
- Change button labels
- Change SEO titles or meta descriptions
- Invent missing tutorials, reviews, ratings, or dates

Preserve unusual grammar exactly.

## Allowed transformations

- Convert headings into semantic HTML
- Convert lists into semantic HTML lists
- Convert `Button: LABEL` into working links/buttons using the exact label
- Add layout wrappers and components
- Add accessibility attributes
- Add section IDs
- Add schema that matches visible content
- Split content into reusable components

## Homepage section order

1. Hero banner
2. Main introduction
3. Explore Easy Flower Drawing Tutorial
4. How to Draw a Flower Step by Step
5. Simple Flower Drawing Ideas to Practice
6. Flower Drawing for Beginners
7. From Basic Shapes to a Beautiful Flower Drawing
8. Sketching Flowers with Pencil
9. Download Worksheets for Practice
10. Skill levels
11. Drawing tips
12. Explore More Easy Flowers Drawing Ideas
13. FAQs
14. Final CTA

## Button destinations

| Label | Destination |
| --- | --- |
| Explore Drawing Tutorials | `/flower-drawing/` |
| Download Practice Worksheets | `/downloads/flower-drawing-worksheet.pdf` |
| View Step-by-Step Drawing Guides | `/flower-drawing/` |
| Browse Drawing Worksheets | `/downloads/flower-drawing-worksheet.pdf` |
| Print a Practice Page | `/downloads/flower-drawing-worksheet.pdf` (new tab) |
| View All Flower Tutorials | `/flower-drawing/` |
| Start Drawing | `/flower-drawing/` |
| View Practice Worksheets | `/#worksheets` |

## SEO

- Use exact SEO titles and meta descriptions from source files
- FAQ schema must match visible FAQs exactly
- Do not add Product, Course, Review, or SoftwareApplication schema
- Do not invent ratings or testimonials

## Validation

Before finishing homepage or tutorial content changes:

```bash
npm run validate:content
npm run lint
npm run build
```

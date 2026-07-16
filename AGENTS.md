# AGENTS.md

## Project Identity

This repository contains the production website for **FlowerDrawings.org**.

- Framework: Next.js App Router
- Language: TypeScript
- Styling: Tailwind CSS and project-level CSS
- Deployment: GitHub → Vercel
- Production domain: https://flowerdrawings.org
- Contact email: ale298784@gmail.com
- Content system: Local MDX files
- Audience: Children, kids, toddlers with parent supervision, primary-school students, school children, beginners, parents, teachers, and hobby artists in the United States
- Official brand note: FlowerDrawings.com is obsolete; use FlowerDrawings.org only

The repository root is the Next.js project root. Do not move the app into a nested `web`, `frontend`, or `website` directory.

---

## Read Before Editing

Before creating, editing, moving, or deleting files:

1. Read this file completely.
2. Inspect the repository structure.
3. Read `source-assets/homepage-content.txt`.
4. Read the relevant files in `docs/`.
5. Inspect current routes, components, metadata, assets, and content folders.
6. Preserve approved content, URLs, and image paths.

Do not begin implementation until the existing architecture is understood.

---

## Required Architecture

Use:

- Next.js App Router
- TypeScript with strict mode
- React Server Components by default
- Client Components only for real browser interaction
- `next/image`
- Next.js Metadata API
- Static generation wherever practical
- Local MDX tutorial content
- Semantic HTML
- Minimal dependencies

Never introduce:

- WordPress
- PHP
- Kadence
- Elementor
- MySQL
- A database in Phase 1
- A CMS in Phase 1
- jQuery
- Bootstrap
- Framer Motion
- GSAP
- Heavy UI libraries
- Remote Google Fonts
- Third-party image hotlinking
- Auto-playing sliders
- Carousels
- Parallax effects

The Vercel Root Directory must remain:

```text
.
```

---

## Homepage Content Is Locked

The homepage source of truth is:

```text
source-assets/homepage-content.txt
```

Unless the user explicitly requests a specific content edit, do not:

- Rewrite text
- Correct grammar
- Paraphrase
- Summarize
- Shorten
- Expand
- Reorder sections
- Replace keywords
- Change headings
- Change FAQ wording
- Change button labels (except approved worksheet labels: Download Free Worksheet / Print Now)
- Change the SEO title
- Change the meta description
- Insert new marketing paragraphs

Preserve unusual grammar exactly.

Approved exceptions:

- Replace FlowerDrawings.com / flowerdrawings.com with FlowerDrawings.org / flowerdrawings.org
- Worksheet section buttons use Download Free Worksheet and Print Now

Allowed transformations:

- Convert headings into semantic HTML
- Convert source lists into HTML lists
- Convert `Button: LABEL` into a working button using the exact label
- Add layout wrappers and components
- Add accessibility attributes
- Add section IDs
- Add schema matching visible content

Run the homepage content validation script before finishing any homepage-related change.

---

## Brand and Design Rules

The website must remain modern, premium, colorful, art-focused, card-based, editorial, mobile-first, and lightweight.

White and paper backgrounds are the base. Sky blue, yellow, coral, mint, lavender, and peach are the approved accents.

Approved palette:

```css
--color-ink: #202124;
--color-white: #FFFFFF;
--color-paper: #FFFEFA;
--color-background: #FFFDF8;
--color-surface: #F8F7F2;
--color-border: #DDDCD5;
--color-muted: #686964;
--color-sky-light: #E5F4FF;
--color-sky: #75C9F5;
--color-sky-dark: #247EAA;
--color-yellow-light: #FFF5C7;
--color-yellow: #F5CF58;
--color-yellow-dark: #8B6812;
--color-coral-light: #FFE3DD;
--color-coral: #F38C7A;
--color-coral-dark: #A94D40;
--color-mint-light: #E3F5E8;
--color-mint: #8CCFA0;
--color-mint-dark: #356F46;
--color-lavender-light: #EEE8FF;
--color-lavender: #B9A7EA;
--color-lavender-dark: #625095;
--color-peach-light: #FFECD9;
--color-peach: #F2B278;
```

Design direction:

- Colorful, creative, friendly, premium, and modern
- Suitable for children, kids, toddlers, school students, parents, and teachers
- Related to drawing, coloring, crayons, pencils, and art practice
- Clean white/paper base with controlled cheerful accents
- Cards use soft layered shadows (`--shadow-card`, `--shadow-card-hover`, `--shadow-feature`)
- Drawing-related decorations must be lightweight inline SVG or CSS only
- Uploaded images must never be cropped, recolored, regenerated, filtered, or otherwise edited

Use:

- White or paper page backgrounds
- Charcoal primary text
- Soft colorful card tints (sky, yellow, coral, mint, lavender, peach)
- Thin neutral borders
- Mint download buttons and pale-yellow print buttons
- Subtle premium shadows
- Comfortable editorial spacing
- Clear visual hierarchy

Avoid:

- Dark full-page themes
- Dull plain-gray corporate looks
- Heavy gradients
- Neon or casino-like styling
- Extremely childish cartoon-app interfaces
- Excessive shadows
- Oversized headings
- Thick borders
- Visual clutter
- Large decorative elements that cover content
- Excessive animation
- Editing uploaded artwork

Maximum main width: approximately `1240px`.

Long-form reading width: approximately `720px–760px`.

Use `clamp()` for fluid typography and spacing where practical.

---

## Fixed Routes and Permalinks

Required routes:

```text
/
/flower-drawing/
/flower-drawing/[slug]/
/worksheets/
```

Examples:

```text
/flower-drawing/rose-drawing/
/flower-drawing/sunflower-drawing/
/flower-drawing/hibiscus-flower-drawing/
/flower-drawing/tulip-drawing/
/worksheets/
```

Rules:

- Lowercase URLs only
- Hyphenated slugs
- Trailing slashes enabled
- One canonical URL per tutorial intent
- Existing URLs must remain stable

Never create competing routes such as:

```text
/easy-rose-drawing/
/simple-rose-drawing/
/rose-drawing-step-by-step/
```

Do not rename an existing slug without explicit user approval.

---

## Source Assets Are Read-Only

The entire `source-assets/` directory is strictly read-only.

Do not:

- Rename, move, edit, delete, crop, recolor, regenerate, retouch, or recompress source files
- Change worksheet artwork or image dimensions inside `source-assets/`
- Create duplicate source files

You may only:

- Read and parse approved metadata and content
- Copy contents into the production content system
- Copy images into the appropriate `public/` folders
- Generate PDF copies of worksheet images outside `source-assets/` when necessary

Approved content and source assets must never be changed.

---

## Tutorial Content System

Future tutorials must use the existing file-based MDX system.

Expected structure:

```text
content/flower-drawing/[slug]/
├── content.mdx
├── meta.ts
├── tutorial-content.ts
└── body.ts   # optional adapter for the shared TutorialBody renderer
```

Tutorial metadata must support:

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

Focus keyword, SEO title, and meta description come from the source content file and must be preserved exactly.

The final completed step image is also the featured image, archive card image, and Open Graph image. Do not create or require a duplicate final-step file such as `[slug]-step-N.webp`.

Do not create fake tutorials, placeholder posts, fabricated dates, fake ratings, invented reviews, or sample flower pages unless the user explicitly asks for them.

The archive must display only real tutorial folders.

Every genuine tutorial receives Article and BreadcrumbList schema. FAQPage schema is used only when visible FAQs exist.

New tutorials must be added to internal linking, related tutorials, previous/next navigation, the worksheet collection, and the sitemap.

Read `docs/ADD-NEW-TUTORIAL.md` before adding a tutorial.

---

## Tutorial Image Rules

Use:

```text
public/images/flower-drawing/[slug]/
```

Example:

```text
public/images/flower-drawing/rose-drawing/
├── rose-drawing.webp
├── rose-drawing-step-1.webp
├── rose-drawing-step-2.webp
├── rose-drawing-step-3.webp
├── rose-drawing-step-4.webp
├── rose-drawing-step-5.webp
├── rose-drawing-step-6.webp
├── rose-drawing-step-7.webp
├── rose-drawing-step-8.webp
└── rose-drawing-step-9.webp
```

Rules:

- Use `.webp`, never `.web`
- Use lowercase filenames
- Use hyphens
- Preserve aspect ratio
- Use explicit width and height
- Prevent layout shift
- Lazy-load images below the fold
- Use priority loading only where justified
- Do not duplicate the final completed drawing
- The final completed step image must also be the featured image

Example featured image:

```text
rose-drawing.webp
```

Example featured alt:

```text
rose drawing
```

Example featured title:

```text
easy rose drawing
```

Alt text must be short, accurate, relevant, and free from keyword stuffing.

Do not place multiple exact-match phrases in one alt attribute.

Logo alt must remain:

```text
FlowerDrawings.org
```

---

## Homepage Assets

Approved paths:

```text
/public/images/brand/flowerdrawings-logo.webp
/public/images/flower-drawing/home/flower-drawing-hero.webp
/public/images/flower-drawing/home/flower-drawing.webp
/public/downloads/flower-drawing-worksheet.webp
/public/downloads/flower-drawing-worksheet.pdf
```

Required image SEO:

Hero:

```text
Alt: simple flower drawing
Title: flower drawing easy
```

Homepage featured image:

```text
Alt: flower drawing
Title: easy flower drawing
```

Worksheet preview:

```text
Alt: flower drawing worksheets
Title: download practice worksheets
```

Do not crop, recolor, regenerate, redraw, sharpen, blur, or add text to supplied images unless explicitly instructed.

The supplied logo must be used for:

- Header logo
- Footer logo
- Favicon
- App icon
- Apple touch icon
- Site icon

Do not design a separate favicon symbol.

---

## Homepage Section Order

Keep this exact section order:

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
15. About the Author (homepage only; after Final CTA, before footer)

Additional homepage structural elements (do not remove):

- Table of Contents appears after the introduction and before homepagebanner2 / the first H2
- `homepagebanner2.webp` appears immediately before the first homepage H2
- Homepage Step 7 must display its real uploaded image (reuse the featured public file when the artwork is identical; do not create a duplicate copy)
- Every real tutorial page includes a generated Table of Contents built from real H2/H3 headings

Do not rearrange sections without explicit approval.

---

## Button Labels and Destinations

Keep every source button label exactly unchanged.

Approved mapping:

```text
Explore Drawing Tutorials → /flower-drawing/
Download Practice Worksheets → /worksheets/
View Step-by-Step Drawing Guides → /flower-drawing/
Browse Drawing Worksheets → /worksheets/
Download Free Worksheet → matching worksheet PDF
Print Now → matching worksheet PDF (new tab)
View All Flower Tutorials → /flower-drawing/
Start Drawing → /flower-drawing/
View Practice Worksheets → /worksheets/
```

Worksheet sections on the homepage and tutorial pages must use:

- `Download Free Worksheet`
- `Print Now`

The header Worksheets button and navigation link must go to `/worksheets/`.
The footer Worksheets link must go to `/worksheets/`.

Homepage collection buttons (`Download Practice Worksheets`, `Browse Drawing Worksheets`, `View Practice Worksheets`) link to `/worksheets/`.

Specific tutorial download buttons still use their matching worksheet PDFs.

Download buttons must download a real file.

Print buttons must open the PDF in a new tab.

Do not rename buttons without explicit instruction.

---

## Table of Contents Rules

Homepage and every real tutorial must include an open-by-default, closable Table of Contents.

Requirements:

- Prefer semantic `<details open>` and `<summary>Table of Contents</summary>`
- Open by default
- Closable and reopenable by the visitor
- Accessible without JavaScript
- Server-rendered
- Keyboard accessible
- Screen-reader friendly
- Keep the approved colorful card design

TOC entries:

- Homepage: real homepage H2 sections, including About the Author where present
- Tutorials: real H2 and H3 headings only (never invent, never include the H1)

TOC click behavior:

- Smooth-scroll to the selected section
- Account for the sticky header with `scroll-margin-top`
- Briefly highlight the target with lightweight CSS (`:target` pop emphasis)
- Respect `prefers-reduced-motion`

---

## Worksheet Collection

`/worksheets/` is the worksheet collection route.

SEO title:

```text
Printable Flower Drawing Worksheets | FlowerDrawings.org
```

Meta description:

```text
Browse free printable flower drawing worksheets for rose, tulip, sunflower, hibiscus, and beginner flower drawing practice.
```

Canonical:

```text
https://flowerdrawings.org/worksheets/
```

Worksheet collection cards are generated from real worksheet metadata and tutorial data, including the general homepage worksheet. Do not create fake worksheet cards.

Use CollectionPage and ItemList schema that matches visible cards.

Keep the page index, follow, and include it in `sitemap.xml`.

Privacy, Disclaimer, and Terms remain noindex, nofollow and excluded from sitemap.

## Footer and Author Rules

- Do not display the raw contact email address as visible footer text.
- A Contact navigation link may keep the mailto destination internally.
- About the Author appears on the homepage only, after the Final CTA and before the global footer.
- Author name: AlexArts
- Author heading: About the Author
- Do not invent credentials, social profiles, or biography beyond the approved text.

---

## SEO Rules

Use the Next.js Metadata API.

Required SEO foundations:

- `metadataBase`
- Canonical URLs
- Open Graph metadata
- Twitter card metadata
- `sitemap.ts`
- `robots.ts`
- `manifest.ts`
- WebSite JSON-LD
- WebPage JSON-LD
- FAQPage JSON-LD
- BreadcrumbList schema for real tutorial pages
- Article schema for real tutorial pages
- Semantic heading hierarchy
- Accurate internal links

Homepage canonical:

```text
https://flowerdrawings.org/
```

Homepage Open Graph image:

```text
/images/flower-drawing/home/flower-drawing-hero.webp
```

Do not add:

- Product schema
- Course schema
- Review schema
- SoftwareApplication schema
- Fake ratings
- Fake testimonials
- Fabricated author credentials

FAQ schema must exactly match visible FAQ questions and answers.

Never add hidden or nonexistent content to schema.

---

## Component Rules

Use Server Components by default.

Use Client Components only when browser state is needed, such as:

- Mobile navigation
- FAQ accordion
- Back-to-top button
- Lightweight reveal behavior
- Print behavior

Do not convert an entire page into a Client Component for one interactive element.

Components must be focused, typed, reusable, accessible, and maintainable.

Avoid excessive component fragmentation and duplicated content.

---

## Interaction Rules

Allowed interactions:

- Accessible mobile navigation
- FAQ accordion
- Smooth anchor scrolling
- Subtle card hover
- Subtle reveal-on-scroll
- Back-to-top button
- Worksheet download
- Worksheet print/open

Animations must:

- Be subtle
- Last about 150–250ms
- Respect `prefers-reduced-motion`
- Never block navigation
- Never hide SEO content
- Never make the page unusable without JavaScript

Do not add autoplay, parallax, cursor-following effects, heavy motion, animated backgrounds, or large animation libraries.

---

## Accessibility Requirements

Target WCAG 2.2 AA where practical.

Always preserve:

- Skip-to-content link
- Semantic landmarks
- Correct heading hierarchy
- Visible focus states
- Minimum 44px touch targets
- Keyboard-accessible mobile menu
- Keyboard-accessible FAQ controls
- Correct `aria-expanded`
- Correct `aria-controls`
- Sufficient color contrast
- Meaningful link text
- Accurate image alt text
- Reduced-motion support

Use native buttons and links instead of clickable `div` elements.

Do not remove labels or focus outlines.

---

## Performance Requirements

Targets:

- Lighthouse Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

Use:

- Static rendering where possible
- Server Components
- `next/image`
- Explicit image dimensions
- Minimal Client Components
- System fonts
- Minimal JavaScript
- Minimal dependencies
- Local assets
- No layout shifts
- No unnecessary tracking code
- No external font requests

Do not use the hero as a CSS background. Use a real `Image` element.

---

## Responsive Requirements

Test important changes at:

- 320px
- 360px
- 390px
- 430px
- 768px
- 1024px
- 1280px
- 1440px
- 1920px

Confirm:

- No horizontal scrolling
- No cropped hero text
- No cropped worksheet
- No overlapping cards
- No cut-off buttons
- No tiny tap targets
- No oversized mobile heading
- Navigation remains usable
- Images preserve aspect ratio
- FAQ controls remain usable
- Footer does not overflow

---

## Future Drawing Tool Compatibility

The long-term goal includes an interactive flower drawing tool.

Preserve this integration shell:

```html
<div id="flower-drawing-tool-root" hidden></div>
```

Do not:

- Remove the shell
- Display a public “coming soon” message
- Rebuild the site architecture around a future tool
- Add a tool framework before the user requests it

The future tool must be addable without changing existing tutorial URLs or content architecture.

---

## Security and Code Quality

Use strict TypeScript.

Avoid:

- `any` unless fully justified
- Unchecked HTML
- Unsafe URL construction
- Hardcoded localhost URLs
- Secrets committed to Git
- Unnecessary environment variables
- Dead code
- Abandoned commented-out code
- Console errors
- Hydration mismatches

Render MDX safely.

Do not add analytics, ads, or trackers unless explicitly requested.

---

## Required Commands

Before finishing meaningful development work, run:

```bash
npm install
npm run validate:content
npm run lint
npm run build
```

When available, prefer:

```bash
npm run check
```

The `check` script should run content validation, linting, and the production build.

Do not claim completion while the build fails.

Fix all TypeScript errors, ESLint errors, broken imports, missing assets, invalid routes, metadata errors, hydration warnings, and console errors.

---

## Final Verification Checklist

Before reporting completion, confirm:

1. Homepage loads.
2. Homepage content is unchanged.
3. SEO title is unchanged.
4. Meta description is unchanged.
5. Logo loads.
6. Hero image loads.
7. Featured image loads.
8. Worksheet WebP loads.
9. Worksheet PDF downloads.
10. Print link opens the PDF.
11. `/flower-drawing/` loads.
12. No fake tutorials appear.
13. Mobile navigation works.
14. FAQ accordion works.
15. Canonical URLs are correct.
16. JSON-LD matches visible content.
17. `sitemap.xml` works.
18. `robots.txt` works.
19. Favicon loads.
20. No horizontal overflow appears at 320px.
21. `npm run lint` passes.
22. `npm run build` passes.
23. No WordPress or PHP dependency exists.
24. Vercel can deploy from the repository root.

---

## Git and File Safety

Do not:

- Delete user files without explicit approval
- Rewrite Git history
- Force-push
- Change the production branch
- Remove source assets
- Rename approved public URLs
- Remove documentation
- Commit secrets
- Replace working code without understanding it

Preserve unrelated work.

Use clear commit messages.

If Git authentication is unavailable, leave the repository ready for manual commit and push.

---

## Important Pages and Internal Linking

Fixed important-page routes:

```text
/about/
/contact/
/privacy-policy/
/disclaimer/
/terms-and-conditions/
/worksheets/
```

Rules:

- Footer contains compact links to these important pages
- Header Contact links to `/contact/` (not a visible raw email address)
- Header and footer Worksheets links go to `/worksheets/`
- Contact page uses a `Contact AlexArts` control with the mailto destination internally
- Internal linking should use existing buttons, cards, breadcrumbs, TOCs, navigation, related tutorials, previous/next links, and footer links
- Do not insert promotional paragraphs into approved homepage or Rose content merely to add links
- Homepage and every real tutorial must keep a Table of Contents
- Uploaded images must remain unchanged
- Existing colorful design, card colors, shadows, header, footer, and approved content remain protected unless the user requests a specific change
- Privacy, Disclaimer, and Terms remain noindex, nofollow and excluded from sitemap
- Approved content and source assets must never be changed

## Documentation Rules

Keep these files accurate:

```text
README.md
README-VERCEL.md
docs/ADD-NEW-TUTORIAL.md
docs/IMAGE-NAMING.md
docs/CONTENT-RULES.md
```

Update documentation when architecture, routes, content format, or publishing steps change.

Do not leave documentation describing WordPress, PHP, Kadence, or another obsolete architecture.

---

## Completion Response

When finishing a task, report:

- What changed
- Files created or updated
- Validation commands run
- Build status
- Any unresolved issue
- Exact preview or deployment steps when relevant

Do not report completion when validation has not passed.

---

## Instruction Priority

When instructions conflict, use this priority:

1. The user’s latest explicit instruction
2. This `AGENTS.md`
3. Approved source content
4. Existing repository documentation
5. Existing implementation conventions
6. General framework conventions

The following rules remain mandatory unless the user explicitly changes them:

- Next.js only
- GitHub → Vercel deployment
- Repository root as project root
- Homepage content unchanged
- Fixed `/flower-drawing/[slug]/` permalinks
- Final step image used as featured image
- No fake tutorial posts
- No WordPress or PHP
- Lint and build must pass

---

## Draw Along

Public feature name: **Draw Along** (never “Tutorial Player”, “Draw Along Tool”, or “Interactive App” in visitor-facing UI).

- Public route: `/tools/draw-along/` (included in sitemap)
- Legacy `/tools/draw-along-preview/` permanently redirects to `/tools/draw-along/`
- Do not add Draw Along to the main header, footer, homepage, or legal pages
- A compact launcher appears near the top of each individual drawing tutorial post and shows only that post’s drawing
- Shared data is built from the existing tutorial meta + body registries via `src/lib/draw-along/get-draw-along.ts`
- Future tutorials registered in `get-tutorials` / `get-tutorial-body` with real step images appear automatically on `/tools/draw-along/` and receive a launcher
- Interactive UI lives in `src/components/draw-along/` and is dynamically imported; keep article pages as Server Components
- Popup shows only images, step titles, Step X of Y, and navigation — no descriptions, tips, music, or autoplay
- Main step images must use `object-contain` on a light canvas; never crop or stretch artwork
- Keep Draw Along lightweight: no modal/carousel/animation libraries, no audio, no analytics

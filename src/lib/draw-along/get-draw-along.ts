import { homepageSteps } from "@/lib/homepage-content";
import { getTutorialBody } from "@/lib/tutorials/get-tutorial-body";
import {
  getAllTutorials,
  getTutorialMeta,
} from "@/lib/tutorials/get-tutorials";
import type { TutorialMeta } from "@/lib/tutorials/types";
import {
  FLOWER_DRAWING_SLUG,
  type DrawingStep,
  type DrawingTutorial,
} from "@/lib/draw-along/types";

/** Strip leading "Step N:" so Draw Along shows only the short step title. */
function cleanStepTitle(title: string): string {
  const cleaned = title.replace(/^Step\s+\d+\s*:\s*/i, "").trim();
  return cleaned.length > 0 ? cleaned : title.trim();
}

/** Public short title derived from the tutorial focus keyword. */
function toFocusKeywordTitle(focusKeyword: string, fallback = ""): string {
  const fromKeyword = focusKeyword
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

  return fromKeyword || fallback.trim();
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function buildStepsFromBody(
  items: {
    title: string;
    image?: { src: string; alt: string; title?: string };
  }[],
): DrawingStep[] {
  const steps: DrawingStep[] = [];

  for (const item of items) {
    if (!isNonEmptyString(item.title)) continue;
    if (!isNonEmptyString(item.image?.src)) continue;
    if (!item.image.src.startsWith("/")) continue;

    const title = cleanStepTitle(item.title);
    if (!title) continue;

    const alt = isNonEmptyString(item.image.alt)
      ? item.image.alt.trim()
      : title;

    const imageTitle = isNonEmptyString(item.image.title)
      ? item.image.title.trim()
      : undefined;

    steps.push({
      id: steps.length + 1,
      title,
      image: item.image.src,
      alt,
      ...(imageTitle ? { imageTitle } : {}),
    });
  }

  return steps;
}

function isValidArticleUrl(slug: string, articleUrl: string): boolean {
  if (slug === FLOWER_DRAWING_SLUG) {
    return articleUrl === "/" || articleUrl.startsWith("/#");
  }
  return articleUrl === `/flower-drawing/${slug}/`;
}

function isCompleteDrawingTutorial(
  tutorial: DrawingTutorial,
): tutorial is DrawingTutorial {
  if (!isNonEmptyString(tutorial.slug)) return false;
  if (!isNonEmptyString(tutorial.focusKeyword)) return false;
  if (!isNonEmptyString(tutorial.title)) return false;
  if (!isNonEmptyString(tutorial.featuredImage)) return false;
  if (!isNonEmptyString(tutorial.featuredImageAlt)) return false;
  if (!isNonEmptyString(tutorial.articleUrl)) return false;
  if (!isValidArticleUrl(tutorial.slug, tutorial.articleUrl)) return false;
  if (tutorial.steps.length < 1) return false;

  return tutorial.steps.every(
    (step, index) =>
      step.id === index + 1 &&
      isNonEmptyString(step.title) &&
      isNonEmptyString(step.image) &&
      step.image.startsWith("/") &&
      isNonEmptyString(step.alt),
  );
}

function toDrawingTutorial(
  meta: TutorialMeta,
  steps: DrawingStep[],
): DrawingTutorial | null {
  if (!isNonEmptyString(meta.slug)) return null;
  if (!isNonEmptyString(meta.featuredImage)) return null;
  if (!isNonEmptyString(meta.featuredImageAlt)) return null;

  const focusKeyword = toFocusKeywordTitle(meta.focusKeyword, meta.title);
  if (!focusKeyword) return null;

  const tutorial: DrawingTutorial = {
    slug: meta.slug,
    focusKeyword,
    title: focusKeyword,
    featuredImage: meta.featuredImage,
    featuredImageAlt: meta.featuredImageAlt,
    featuredImageTitle: isNonEmptyString(meta.featuredImageTitle)
      ? meta.featuredImageTitle
      : undefined,
    articleUrl: `/flower-drawing/${meta.slug}/`,
    worksheetUrl: isNonEmptyString(meta.worksheetImage)
      ? meta.worksheetImage
      : isNonEmptyString(meta.worksheetPDF)
        ? meta.worksheetPDF
        : undefined,
    steps,
  };

  return isCompleteDrawingTutorial(tutorial) ? tutorial : null;
}

/**
 * Homepage Flower Drawing tutorial built from shared homepage step data.
 * Used by the homepage launcher and included on /tools/draw-along/.
 */
export function getFlowerDrawingTutorial(): DrawingTutorial | null {
  const steps = buildStepsFromBody(
    homepageSteps.map((step) => ({
      title: step.title,
      image: {
        src: step.image.src,
        alt: step.image.alt,
        title: "title" in step.image ? step.image.title : undefined,
      },
    })),
  );

  const tutorial: DrawingTutorial = {
    slug: FLOWER_DRAWING_SLUG,
    focusKeyword: "Flower Drawing",
    title: "Flower Drawing",
    featuredImage: "/images/flower-drawing/home/flower-drawing.webp",
    featuredImageAlt: "flower drawing",
    featuredImageTitle: "flower drawing easy",
    articleUrl: "/",
    worksheetUrl: "/downloads/flower-drawing-worksheet.webp",
    steps,
  };

  return isCompleteDrawingTutorial(tutorial) ? tutorial : null;
}

/**
 * Build Draw Along data for one tutorial from the shared article meta + body,
 * or the homepage Flower Drawing tutorial when slug is `flower-drawing`.
 */
export async function getDrawAlongTutorialBySlug(
  slug: string,
): Promise<DrawingTutorial | null> {
  if (!isNonEmptyString(slug)) return null;

  if (slug === FLOWER_DRAWING_SLUG) {
    return getFlowerDrawingTutorial();
  }

  const [meta, body] = await Promise.all([
    getTutorialMeta(slug),
    getTutorialBody(slug),
  ]);

  if (!meta || !body) return null;
  return toDrawingTutorial(meta, buildStepsFromBody(body.steps.items));
}

/**
 * Every valid Draw Along tutorial, including homepage Flower Drawing first.
 * Future tutorials registered in get-tutorials + get-tutorial-body appear
 * automatically — there is no separate Draw Along card list.
 */
export async function getAllDrawAlongTutorials(): Promise<DrawingTutorial[]> {
  const flowerDrawing = getFlowerDrawingTutorial();
  const tutorials = await getAllTutorials();
  const results = await Promise.all(
    tutorials.map((tutorial) => getDrawAlongTutorialBySlug(tutorial.slug)),
  );

  return [
    ...(flowerDrawing ? [flowerDrawing] : []),
    ...results.filter((tutorial): tutorial is DrawingTutorial =>
      Boolean(tutorial),
    ),
  ];
}

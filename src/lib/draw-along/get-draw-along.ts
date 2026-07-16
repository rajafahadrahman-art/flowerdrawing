import { getTutorialBody } from "@/lib/tutorials/get-tutorial-body";
import {
  getAllTutorials,
  getTutorialMeta,
} from "@/lib/tutorials/get-tutorials";
import type { TutorialMeta } from "@/lib/tutorials/types";
import type { DrawingStep, DrawingTutorial } from "@/lib/draw-along/types";

/** Strip leading "Step N:" so Draw Along shows only the short step title. */
function cleanStepTitle(title: string): string {
  const cleaned = title.replace(/^Step\s+\d+\s*:\s*/i, "").trim();
  return cleaned.length > 0 ? cleaned : title.trim();
}

/** Public short title derived from the tutorial focus keyword. */
function toDisplayTitle(meta: TutorialMeta): string {
  const fromKeyword = meta.focusKeyword
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

  return fromKeyword || meta.title.trim();
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function buildStepsFromBody(
  items: { title: string; image?: { src: string; alt: string } }[],
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

    steps.push({
      id: steps.length + 1,
      title,
      image: item.image.src,
      alt,
    });
  }

  return steps;
}

function isCompleteDrawingTutorial(
  tutorial: DrawingTutorial,
): tutorial is DrawingTutorial {
  if (!isNonEmptyString(tutorial.slug)) return false;
  if (!isNonEmptyString(tutorial.title)) return false;
  if (!isNonEmptyString(tutorial.featuredImage)) return false;
  if (!isNonEmptyString(tutorial.featuredImageAlt)) return false;
  if (!isNonEmptyString(tutorial.articleUrl)) return false;
  if (!tutorial.articleUrl.startsWith("/flower-drawing/")) return false;
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

  const tutorial: DrawingTutorial = {
    slug: meta.slug,
    title: toDisplayTitle(meta),
    featuredImage: meta.featuredImage,
    featuredImageAlt: meta.featuredImageAlt,
    articleUrl: `/flower-drawing/${meta.slug}/`,
    worksheetUrl: isNonEmptyString(meta.worksheetPDF)
      ? meta.worksheetPDF
      : undefined,
    steps,
  };

  return isCompleteDrawingTutorial(tutorial) ? tutorial : null;
}

/**
 * Build Draw Along data for one tutorial from the shared article meta + body.
 * Returns null when required fields or step images are incomplete.
 */
export async function getDrawAlongTutorialBySlug(
  slug: string,
): Promise<DrawingTutorial | null> {
  if (!isNonEmptyString(slug)) return null;

  const [meta, body] = await Promise.all([
    getTutorialMeta(slug),
    getTutorialBody(slug),
  ]);

  if (!meta || !body) return null;
  return toDrawingTutorial(meta, buildStepsFromBody(body.steps.items));
}

/**
 * Every published tutorial that has valid Draw Along step images.
 * Future tutorials registered in get-tutorials + get-tutorial-body appear
 * automatically — there is no separate Draw Along card list.
 */
export async function getAllDrawAlongTutorials(): Promise<DrawingTutorial[]> {
  const tutorials = await getAllTutorials();
  const results = await Promise.all(
    tutorials.map((tutorial) => getDrawAlongTutorialBySlug(tutorial.slug)),
  );
  return results.filter((tutorial): tutorial is DrawingTutorial =>
    Boolean(tutorial),
  );
}

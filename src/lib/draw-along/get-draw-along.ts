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
  return meta.focusKeyword
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function buildStepsFromBody(
  items: { title: string; image?: { src: string; alt: string } }[],
): DrawingStep[] {
  const steps: DrawingStep[] = [];

  for (const item of items) {
    if (!item.image?.src) continue;
    steps.push({
      id: steps.length + 1,
      title: cleanStepTitle(item.title),
      image: item.image.src,
      alt: item.image.alt || cleanStepTitle(item.title),
    });
  }

  return steps;
}

function toDrawingTutorial(
  meta: TutorialMeta,
  steps: DrawingStep[],
): DrawingTutorial | null {
  if (steps.length === 0) return null;

  return {
    slug: meta.slug,
    title: toDisplayTitle(meta),
    featuredImage: meta.featuredImage,
    featuredImageAlt: meta.featuredImageAlt,
    articleUrl: `/flower-drawing/${meta.slug}/`,
    worksheetUrl: meta.worksheetPDF || undefined,
    steps,
  };
}

/**
 * Build Draw Along data for one tutorial from the shared article meta + body.
 * Returns null when step images are missing so broken tutorials stay hidden.
 */
export async function getDrawAlongTutorialBySlug(
  slug: string,
): Promise<DrawingTutorial | null> {
  const [meta, body] = await Promise.all([
    getTutorialMeta(slug),
    getTutorialBody(slug),
  ]);

  if (!meta || !body) return null;
  return toDrawingTutorial(meta, buildStepsFromBody(body.steps.items));
}

/**
 * Every published tutorial that has valid Draw Along step images.
 * Future tutorials registered in get-tutorials + body registry appear automatically.
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

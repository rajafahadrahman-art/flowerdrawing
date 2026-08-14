import { meta as daisyDrawing } from "@content/flower-drawing/daisy-drawing/meta";
import { meta as hibiscusDrawing } from "@content/flower-drawing/hibiscus-flower-drawing/meta";
import { meta as lilyDrawing } from "@content/flower-drawing/lily-flower-drawing/meta";
import { meta as lotusDrawing } from "@content/flower-drawing/lotus-flower-drawing/meta";
import { meta as orchidDrawing } from "@content/flower-drawing/orchid-drawing/meta";
import { meta as peonyDrawing } from "@content/flower-drawing/peony-drawing/meta";
import { meta as roseDrawing } from "@content/flower-drawing/rose-drawing/meta";
import { meta as sunflowerDrawing } from "@content/flower-drawing/sunflower-drawing/meta";
import { meta as tulipDrawing } from "@content/flower-drawing/tulip-drawing/meta";
import type { TutorialMeta } from "@/lib/tutorials/types";

/** Deterministic collection order used by archive cards and previous/next navigation. */
export const tutorialOrder = [
  "rose-drawing",
  "tulip-drawing",
  "sunflower-drawing",
  "hibiscus-flower-drawing",
  "lily-flower-drawing",
  "peony-drawing",
  "orchid-drawing",
  "lotus-flower-drawing",
  "daisy-drawing",
] as const;

const tutorialRegistry: Record<string, TutorialMeta> = {
  [roseDrawing.slug]: roseDrawing,
  [tulipDrawing.slug]: tulipDrawing,
  [sunflowerDrawing.slug]: sunflowerDrawing,
  [hibiscusDrawing.slug]: hibiscusDrawing,
  [lilyDrawing.slug]: lilyDrawing,
  [peonyDrawing.slug]: peonyDrawing,
  [orchidDrawing.slug]: orchidDrawing,
  [lotusDrawing.slug]: lotusDrawing,
  [daisyDrawing.slug]: daisyDrawing,
};

function sortByCollectionOrder(tutorials: TutorialMeta[]): TutorialMeta[] {
  const rank = new Map<string, number>(tutorialOrder.map((slug, index) => [slug, index]));
  return [...tutorials].sort((a, b) => {
    const aRank = rank.get(a.slug) ?? Number.MAX_SAFE_INTEGER;
    const bRank = rank.get(b.slug) ?? Number.MAX_SAFE_INTEGER;
    if (aRank !== bRank) return aRank - bRank;
    return a.slug.localeCompare(b.slug);
  });
}

export async function getTutorialSlugs(): Promise<string[]> {
  return sortByCollectionOrder(Object.values(tutorialRegistry)).map((tutorial) => tutorial.slug);
}

export async function getTutorialMeta(slug: string): Promise<TutorialMeta | null> {
  return tutorialRegistry[slug] ?? null;
}

export async function getAllTutorials(): Promise<TutorialMeta[]> {
  return sortByCollectionOrder(Object.values(tutorialRegistry));
}

export async function getRelatedTutorials(slug: string): Promise<TutorialMeta[]> {
  const meta = tutorialRegistry[slug];
  if (!meta) return [];
  return meta.relatedTutorials
    .map((relatedSlug) => tutorialRegistry[relatedSlug])
    .filter((tutorial): tutorial is TutorialMeta => Boolean(tutorial));
}

export async function getAdjacentTutorials(slug: string) {
  const tutorials = await getAllTutorials();
  const index = tutorials.findIndex((tutorial) => tutorial.slug === slug);
  if (index === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: index > 0 ? tutorials[index - 1] : null,
    next: index < tutorials.length - 1 ? tutorials[index + 1] : null,
  };
}

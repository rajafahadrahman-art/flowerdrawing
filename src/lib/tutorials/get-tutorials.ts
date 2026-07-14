import { meta as roseDrawing } from "@content/flower-drawing/rose-drawing/meta";
import type { TutorialMeta } from "@/lib/tutorials/types";

const tutorialRegistry: Record<string, TutorialMeta> = {
  [roseDrawing.slug]: roseDrawing,
};

export async function getTutorialSlugs(): Promise<string[]> {
  return Object.keys(tutorialRegistry).sort();
}

export async function getTutorialMeta(slug: string): Promise<TutorialMeta | null> {
  return tutorialRegistry[slug] ?? null;
}

export async function getAllTutorials(): Promise<TutorialMeta[]> {
  return Object.values(tutorialRegistry).sort(
    (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime(),
  );
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

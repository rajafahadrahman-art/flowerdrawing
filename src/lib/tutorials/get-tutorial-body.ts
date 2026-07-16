import { roseBody } from "@content/flower-drawing/rose-drawing/body";
import { hibiscusBody } from "@content/flower-drawing/hibiscus-flower-drawing/tutorial-content";
import { sunflowerBody } from "@content/flower-drawing/sunflower-drawing/tutorial-content";
import { tulipBody } from "@content/flower-drawing/tulip-drawing/tutorial-content";
import type { TutorialBody } from "@/lib/tutorials/body-types";

const bodyRegistry: Record<string, TutorialBody> = {
  "rose-drawing": roseBody,
  "tulip-drawing": tulipBody,
  "sunflower-drawing": sunflowerBody,
  "hibiscus-flower-drawing": hibiscusBody,
};

export async function getTutorialBody(slug: string): Promise<TutorialBody | null> {
  return bodyRegistry[slug] ?? null;
}

import { roseDrawAlongTutorial } from "@/lib/draw-along/rose";
import { tulipDrawAlongTutorial } from "@/lib/draw-along/tulip";
import type { DrawingTutorial } from "@/lib/draw-along/types";

/**
 * Registry of draw-along tutorials available in the isolated prototype.
 * Only tutorials with real step images are listed here.
 * To add a future tutorial, create its data file and append it to this array.
 */
const drawAlongTutorials: DrawingTutorial[] = [
  roseDrawAlongTutorial,
  tulipDrawAlongTutorial,
];

function hasUsableSteps(tutorial: DrawingTutorial): boolean {
  return (
    tutorial.steps.length > 0 &&
    tutorial.steps.every(
      (step) =>
        typeof step.image === "string" &&
        step.image.length > 0 &&
        typeof step.title === "string" &&
        step.title.length > 0,
    )
  );
}

/** Tutorials safe to show on the preview selection screen. */
export function getDrawAlongTutorials(): DrawingTutorial[] {
  return drawAlongTutorials.filter(hasUsableSteps);
}

export function getDrawAlongTutorial(
  slug: string,
): DrawingTutorial | undefined {
  return getDrawAlongTutorials().find((tutorial) => tutorial.slug === slug);
}

export function getStepDurationSeconds(
  stepDurationSeconds: number | undefined,
  defaultSeconds: number,
): number {
  if (
    typeof stepDurationSeconds === "number" &&
    Number.isFinite(stepDurationSeconds) &&
    stepDurationSeconds > 0
  ) {
    return stepDurationSeconds;
  }
  return defaultSeconds;
}

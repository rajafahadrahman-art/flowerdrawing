import type { TutorialMeta } from "@/lib/tutorials/types";
import { getAllTutorials } from "@/lib/tutorials/get-tutorials";

export type WorksheetCollectionItem = {
  id: string;
  title: string;
  description: string;
  flowerName: string;
  stepCount?: number;
  worksheetImage: string;
  worksheetPDF: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  imageTitle: string;
  tutorialHref?: string;
  tutorialLabel?: string;
};

const homepageWorksheet: WorksheetCollectionItem = {
  id: "flower-drawing",
  title: "Flower Drawing Worksheet",
  description:
    "A beginner practice page with a completed flower reference, tracing outline, and space to redraw the flower independently.",
  flowerName: "Flower Drawing",
  stepCount: 7,
  worksheetImage: "/downloads/flower-drawing-worksheet.webp",
  worksheetPDF: "/downloads/flower-drawing-worksheet.pdf",
  imageWidth: 1055,
  imageHeight: 1491,
  imageAlt: "flower drawing worksheets",
  imageTitle: "download practice worksheets",
  tutorialHref: "/#worksheets",
  tutorialLabel: "View on Homepage",
};

function tutorialWorksheet(tutorial: TutorialMeta): WorksheetCollectionItem {
  return {
    id: tutorial.slug,
    title: `${tutorial.focusKeyword} Worksheet`,
    description: tutorial.excerpt,
    flowerName: tutorial.focusKeyword,
    stepCount: tutorial.stepCount,
    worksheetImage: tutorial.worksheetImage,
    worksheetPDF: tutorial.worksheetPDF,
    imageWidth: 1055,
    imageHeight: 1491,
    imageAlt: `${tutorial.focusKeyword} worksheet`,
    imageTitle: `download ${tutorial.focusKeyword.toLowerCase()} worksheet`,
    tutorialHref: `/flower-drawing/${tutorial.slug}/`,
    tutorialLabel: "View Tutorial",
  };
}

export async function getWorksheetCollection(): Promise<WorksheetCollectionItem[]> {
  const tutorials = await getAllTutorials();
  return [homepageWorksheet, ...tutorials.map(tutorialWorksheet)];
}

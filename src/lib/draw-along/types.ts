export type DrawingStep = {
  id: number;
  title: string;
  image: string;
  alt: string;
  imageTitle?: string;
};

export type DrawingTutorial = {
  slug: string;
  focusKeyword: string;
  title: string;
  featuredImage: string;
  featuredImageAlt: string;
  featuredImageTitle?: string;
  articleUrl: string;
  worksheetUrl?: string;
  steps: DrawingStep[];
};

/** Homepage Flower Drawing tutorial slug used by Draw Along. */
export const FLOWER_DRAWING_SLUG = "flower-drawing";

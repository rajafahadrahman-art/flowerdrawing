export type DrawingStep = {
  id: number;
  title: string;
  image: string;
  alt: string;
};

export type DrawingTutorial = {
  slug: string;
  title: string;
  featuredImage: string;
  featuredImageAlt: string;
  articleUrl: string;
  worksheetUrl?: string;
  steps: DrawingStep[];
};

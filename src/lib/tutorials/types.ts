export type TutorialDifficulty = "Easy" | "Beginner" | "Intermediate";

export type TutorialFaq = {
  question: string;
  answer: string;
};

export type TutorialMeta = {
  title: string;
  slug: string;
  focusKeyword: string;
  seoTitle: string;
  metaDescription: string;
  excerpt: string;
  difficulty: TutorialDifficulty;
  estimatedTime: string;
  stepCount: number;
  featuredImage: string;
  featuredImageAlt: string;
  featuredImageTitle: string;
  worksheetImage: string;
  worksheetPDF: string;
  publishedDate: string;
  updatedDate: string;
  faqs: TutorialFaq[];
  relatedTutorials: string[];
  drawingStyle?: string;
  mainSubject?: string;
  bestFor?: string;
  materials?: string[];
};

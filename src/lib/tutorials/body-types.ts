import type { TocItem } from "@/components/tutorial/TableOfContents";

export type TutorialStepImage = {
  src: string;
  alt: string;
  title?: string;
  width: number;
  height: number;
};

export type TutorialStep = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  closing?: string;
  image?: TutorialStepImage;
};

export type TutorialCardItem = {
  title: string;
  id: string;
  text: string;
};

export type TutorialCardVariant = "default" | "outline" | "mistake" | "tip";

export type TutorialSectionTone =
  | "default"
  | "paper"
  | "surface"
  | "sky"
  | "mint"
  | "yellow"
  | "lavender"
  | "coral"
  | "peach";

export type TutorialProseSection = {
  id: string;
  title: string;
  tone?: TutorialSectionTone;
  intro?: string[];
  paragraphs?: string[];
  bullets?: string[];
  checklist?: string[];
  closing?: string | string[];
  cards?: TutorialCardItem[];
  cardVariant?: TutorialCardVariant;
};

export type TutorialInfoBlock = {
  id: string;
  title: string;
  items: { label: string; value: string }[];
  closing?: string;
};

export type TutorialMaterialsBlock = {
  id: string;
  title: string;
  note: string;
  items: string[];
  extra?: string;
};

export type TutorialStepsBlock = {
  id: string;
  title: string;
  intro: string[];
  items: TutorialStep[];
};

export type TutorialWorksheetBlock = {
  id: string;
  title: string;
  intro: string[];
  includes: string[];
  closing: string[];
  imageAlt: string;
  imageTitle: string;
  imageWidth: number;
  imageHeight: number;
};

export type TutorialCtaBlock = {
  id: string;
  title: string;
  paragraphs: string[];
};

export type TutorialBody = {
  intro: string[];
  /** Sections that appear after the intro and before the info grid. */
  preInfoSections?: TutorialProseSection[];
  info: TutorialInfoBlock;
  /** Optional materials block. Omit when the source has no materials heading. */
  materials?: TutorialMaterialsBlock;
  /** Sections that appear after materials (or info) and before the step-by-step block. */
  preStepSections?: TutorialProseSection[];
  steps: TutorialStepsBlock;
  /** Sections that appear after the step-by-step block. */
  sections: TutorialProseSection[];
  /** Omit when the tutorial has no printable worksheet download. */
  worksheet?: TutorialWorksheetBlock;
  faqTitle: string;
  faqId: string;
  cta: TutorialCtaBlock;
  toc: TocItem[];
};

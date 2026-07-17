import { slugifyHeading, type TocItem } from "@/components/tutorial/TableOfContents";
import type {
  TutorialBody,
  TutorialCardItem,
  TutorialProseSection,
  TutorialStep,
} from "@/lib/tutorials/body-types";
import { roseTocItems } from "@/lib/tutorials/rose-toc";
import {
  roseColorSections,
  roseConclusion,
  roseInfo,
  roseIntro,
  roseMaterialsExtra,
  roseMaterialsNote,
  roseMistakes,
  roseOutlineSection,
  roseRealisticSection,
  roseStep8Closing,
  roseStep9Closing,
  roseSteps,
  roseStepsIntro,
  roseTips,
  roseTipsClosing,
  roseTipsIntro,
  roseWorksheetClosing,
  roseWorksheetIncludes,
  roseWorksheetIntro,
} from "./tutorial-content";

const colorSections: TutorialProseSection[] = roseColorSections.map((section) => {
  const bullets = "bullets" in section ? (section.bullets as readonly string[]) : undefined;
  const closing = "closing" in section ? (section.closing as string) : undefined;
  const built: TutorialProseSection = {
    id: slugifyHeading(section.title),
    title: section.title,
    paragraphs: [...section.paragraphs],
  };
  if (bullets) built.bullets = [...bullets];
  if (closing) built.closing = closing;
  return built;
});

const outlineCards: TutorialCardItem[] = roseOutlineSection.versions.map((version) => ({
  title: version.title,
  id: slugifyHeading(version.title),
  text: version.text,
}));

const realisticCards: TutorialCardItem[] = roseRealisticSection.areas.map((area) => ({
  title: area.title,
  id: slugifyHeading(area.title),
  text: area.text,
}));

const mistakeCards: TutorialCardItem[] = roseMistakes.map((mistake) => ({
  title: mistake.title,
  id: slugifyHeading(mistake.title),
  text: mistake.text,
}));

const toc: TocItem[] = roseTocItems.map((item) =>
  "level" in item && item.level ? { id: item.id, label: item.label, level: item.level } : { id: item.id, label: item.label },
);

export const roseBody: TutorialBody = {
  intro: [...roseIntro],
  info: {
    id: "rose-drawing-tutorial-information",
    title: "Rose Drawing Tutorial Information",
    items: [
      { label: "Difficulty", value: roseInfo.difficulty },
      { label: "Estimated time", value: roseInfo.estimatedTime },
      { label: "Drawing style", value: roseInfo.drawingStyle },
      { label: "Main subject", value: roseInfo.mainSubject },
      { label: "Best for", value: roseInfo.bestFor },
    ],
  },
  materials: {
    id: "materials-you-need",
    title: "Materials You Need",
    note: roseMaterialsNote,
    items: [
      "HB or number 2 pencil",
      "Clean drawing paper",
      "Soft eraser",
      "Pencil sharpener",
      "Black fineliner, if you want a darker outline",
      "Colored pencils or markers, if you want to add color",
    ],
    extra: roseMaterialsExtra,
  },
  steps: {
    id: "how-to-draw-a-rose-step-by-step",
    title: "How to Draw a Rose Step by Step",
    intro: [...roseStepsIntro],
    items: roseSteps.map((step, index): TutorialStep => {
      const item: TutorialStep = {
        title: step.title,
        paragraphs: [...step.paragraphs],
      };
      if (step.bullets) item.bullets = [...step.bullets];
      if (step.image) item.image = { ...step.image };
      if (index === 7) item.closing = roseStep8Closing;
      if (index === 8) item.closing = roseStep9Closing;
      return item;
    }),
  },
  sections: [
    {
      id: "simple-rose-drawing-tips-for-beginners",
      title: "Simple Rose Drawing Tips for Beginners",
      tone: "yellow",
      intro: [...roseTipsIntro],
      checklist: [...roseTips],
      closing: roseTipsClosing,
    },
    {
      id: "how-to-create-outline",
      title: "How to Create Outline",
      intro: [...roseOutlineSection.intro],
      cards: outlineCards,
      cardVariant: "outline",
      closing: roseOutlineSection.closing,
    },
    {
      id: "how-to-make-a-realistic-rose-drawing",
      title: "How to Make a Realistic Rose Drawing",
      tone: "lavender",
      intro: [...roseRealisticSection.intro],
      cards: realisticCards,
      closing: roseRealisticSection.closing,
    },
    ...colorSections,
    {
      id: "common-mistakes-when-drawing-a-rose",
      title: "Common Mistakes When Drawing a Rose",
      cards: mistakeCards,
      cardVariant: "mistake",
    },
  ],
  worksheet: {
    id: "worksheets",
    title: "Downloadable Worksheet",
    intro: [...roseWorksheetIntro],
    includes: [...roseWorksheetIncludes],
    closing: [...roseWorksheetClosing],
    imageAlt: "rose drawing worksheet",
    imageTitle: "download rose drawing worksheet",
    imageWidth: 1055,
    imageHeight: 1491,
  },
  faqTitle: "Frequently Asked Questions",
  faqId: "faq",
  cta: {
    id: "start-your-roses-drawing",
    title: "Start Your Roses Drawing",
    paragraphs: [...roseConclusion],
  },
  toc,
};

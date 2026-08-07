import type { TutorialBody, TutorialStep } from "@/lib/tutorials/body-types";
import { peonyTocItems } from "@/lib/tutorials/peony-toc";

export const peonyIntro = [
  "A peony is made from many overlapping petals, which can make it look difficult to sketch at first. The easiest way to create a peony drawing is not to draw every petal separately from the beginning. Instead, start with the compact centre and gradually build larger layers around it.",
  "This tutorial breaks the peony flower into eight manageable stages. You will create a small central bud shape, surround it with curled inner petals, develop the wide outer bloom, and then finish the drawing with a stem and characteristic peony leaves.",
  "For more [flower drawing](/) Guides visit the link to learn how to draw flowers. Also visit the Easy Flower Drawing Tutorials page for similar tutorials.",
  "The method is suitable for beginners because it focuses on simple curved shapes rather than perfect botanical detail. You can leave your finished artwork as a clean pencil outline, add light graphite shadows for depth, or use it as a base for colour.",
] as const;

export const peonyBeforeIntro = [
  "Peonies look different from flowers with clearly separated petals. Their petals overlap closely and often fold inward around the centre.",
  "For this tutorial, remember three simple ideas:",
] as const;

export const peonyBeforeBullets = [
  "Inner petals should be smaller and closer together.",
  "Petals become wider as you move toward the outside.",
  "The outer edges should be irregular rather than perfectly circular.",
] as const;

export const peonyBeforeClosing =
  "You do not need to count individual petals. The goal is to create the impression of a full, layered flower.";

export const peonyInfo = {
  difficulty: "Beginner",
  estimatedTime: "Around 15 minutes",
  numberOfSteps: "8",
  drawingStyle: "Pencil outline with optional shading",
  mainSubject: "Open peony with stem and leaves",
  bestFor: "Beginners, students, children, parents, and teachers",
} as const;

export const peonyMaterialsNote =
  "You can complete this tutorial using supplies you probably already have:";

export const peonyMaterialsExtra =
  "A sharp pencil works well for small inner petals, while slightly lighter pressure makes the larger outside petals easier to adjust.";

export const peonyStepsIntro = [
  "This peony drawing step by step tutorial builds the flower from the inside outward.",
  "Do not make your first lines too dark. Some shapes will eventually overlap, and light pencil marks are much easier to erase when you refine the flower.",
] as const;

export const peonySteps: TutorialStep[] = [
  {
    title: "Step 1: Sketch the Centre of the Peony",
    paragraphs: [
      "Begin with a small loose circle or oval near the upper-middle part of your paper.",
      "Inside it, add two or three short curved shapes. These will become the tightly folded petals in the centre of the bloom.",
      "The centre does not need to look perfectly round. A slightly uneven shape will make the final flower feel more natural.",
      "Leave generous room around it because the peony will become much larger in later steps.",
    ],
    image: {
      src: "/images/flower-drawing/peony-drawing/peony-drawing-step-1.webp",
      alt: "drawing of a peony",
      title: "peony line drawing",
      width: 1448,
      height: 1086,
    },
  },
  {
    title: "Step 2: Build the First Petal Layer",
    paragraphs: [
      "Draw several small curved petals around the centre.",
      "Let some petals overlap each other. A few can curl inward, while others may open slightly toward the sides.",
      "Keep these first petals compact. If they become too large now, you will not have enough visual difference between the centre and outer flower.",
      "At this stage, the peony flower drawing should begin to resemble a small rose-like bud.",
    ],
    image: {
      src: "/images/flower-drawing/peony-drawing/peony-drawing-step-2.webp",
      alt: "peony flower drawing",
      title: "simple peony drawing",
      width: 1448,
      height: 1086,
    },
  },
  {
    title: "Step 3: Add Medium-Sized Petals",
    paragraphs: [
      "Create another layer around the first group.",
      "These petals should be wider and more open than the centre petals. Use smooth curved lines and allow one edge to disappear behind another petal occasionally.",
      "Avoid making a perfect ring.",
      "Instead, vary:",
    ],
    bullets: ["Petal width", "Petal height", "Direction", "Amount of overlap"],
    closing:
      "This irregular layering is an important part of a convincing peony.",
    image: {
      src: "/images/flower-drawing/peony-drawing/peony-drawing-step-3.webp",
      alt: "peony drawing easy",
      title: "easy peony drawing",
      width: 1448,
      height: 1086,
    },
  },
  {
    title: "Step 4: Form the Large Outer Bloom",
    paragraphs: [
      "Add the largest petals around the outside of the flower.",
      "Some can bend upward, while others should open toward the left and right. Allow a few outer petals to droop slightly downward.",
      "The overall silhouette should now look full and rounded without becoming a perfect circle.",
    ],
    image: {
      src: "/images/flower-drawing/peony-drawing/peony-drawing-step-4.webp",
      alt: "peonies drawing",
      title: "peony flower drawing easy",
      width: 1448,
      height: 1086,
    },
  },
  {
    title: "Step 5: Refine the Petal Folds",
    paragraphs: [
      "Add a small number of interior lines to show where petals fold or curl.",
      "Follow the direction of each petal with your marks. Do not draw straight veins across the flower.",
      "Useful places for short fold lines include:",
    ],
    bullets: [
      "Near the base of large petals",
      "Along a curled edge",
      "Where two petals overlap",
      "Inside the dense flower centre",
    ],
    closing:
      "Keep these lines lighter than the main outline. This step can turn a basic simple peony drawing into something that looks much more dimensional.",
    image: {
      src: "/images/flower-drawing/peony-drawing/peony-drawing-step-5.webp",
      alt: "peony pencil drawing",
      title: "realistic peony drawing",
      width: 1448,
      height: 1086,
    },
  },
  {
    title: "Step 6: Draw the Stem",
    paragraphs: [
      "From underneath the flower, draw two gently curved parallel lines downward.",
      "Keep the stem relatively narrow compared with the bloom.",
      "A slight curve usually looks better than a perfectly straight vertical stem because the large flower head has visual weight.",
      "Connect the stem behind the lower petals so it appears to support the bloom naturally.",
    ],
    image: {
      src: "/images/flower-drawing/peony-drawing/peony-drawing-step-6.webp",
      alt: "drawing peony",
      title: "peony drawing step by step",
      width: 1448,
      height: 1086,
    },
  },
  {
    title: "Step 7: Add Peony Leaves",
    paragraphs: [
      "Draw several leaves branching from the stem.",
      "Peony leaves are usually divided into pointed sections rather than appearing as one plain oval leaf. For a beginner version, draw each leaf as a simple cluster of two or three pointed lobes.",
      "Place one leaf group toward the left and another toward the right.",
      "You can also add a smaller group lower on the stem if the composition has enough space.",
      "A good peony leaves drawing does not require every botanical detail. The pointed grouped shapes are enough to suggest the plant.",
    ],
    image: {
      src: "/images/flower-drawing/peony-drawing/peony-drawing-step-7.webp",
      alt: "peony leaves drawing",
      title: "peony simple drawing",
      width: 1448,
      height: 1086,
    },
  },
  {
    title: "Step 8: Clean and Finish the Peony",
    paragraphs: [
      "Erase any construction lines that are still visible.",
      "Strengthen the important outer edges while leaving most interior marks slightly lighter.",
      "Check the complete drawing for:",
    ],
    bullets: [
      "A dense centre",
      "Several layers of petals",
      "Larger open outer petals",
      "Natural overlap",
      "A curved stem",
      "Pointed leaf groups",
    ],
    closing:
      "At this stage, your finished drawing of a peony can remain as a simple outline or be developed with shading and colour.",
    image: {
      src: "/images/flower-drawing/peony-drawing/peony-drawing-step-8.webp",
      alt: "easy step by step peony drawing",
      title: "finished peony drawing",
      width: 1448,
      height: 1086,
    },
  },
];

export const peonyRealisticIntro = [
  "A realistic peony drawing depends largely on depth.",
  "The centre should usually contain the darkest values because many small petals overlap closely there. As the petals move outward, the flower becomes more open and receives more light.",
  "Use a soft pencil to shade:",
] as const;

export const peonyRealisticBullets = [
  "Between overlapping inner petals",
  "Under curled petal edges",
  "Near the flower centre",
  "Behind petals that sit farther back",
  "One side of the stem",
  "The bases of overlapping leaves",
] as const;

export const peonyRealisticClosing = [
  "Do not shade every petal equally.",
  "Leave broad areas of clean paper visible. These highlights help the flower maintain its soft appearance.",
  "You can also vary line weight. A front petal may have a slightly darker lower edge, while a petal behind it can be drawn more lightly.",
] as const;

export const peonySimpleVsDetailedIntro = [
  "There is no need to make every peony highly detailed.",
] as const;

export const peonySimpleVsDetailedCards = [
  {
    title: "Easy Drawing",
    text: "For an easy drawing, use fewer inner petals, six to eight clear outer petals, minimal fold lines, one stem, and two simple leaf groups. This version is easier for children and first-time artists.",
  },
  {
    title: "Detailed Drawing",
    text: "For a more advanced flower, add several small curled centre petals, use more overlapping layers, vary individual petal edges, add subtle graphite shading, and include more complex leaves. Both versions can still follow the same basic construction.",
  },
] as const;

export const peonyOutlineIntro = [
  "A line drawing works well when you want a clean design without shading.",
  "After completing the basic shape:",
] as const;

export const peonyOutlineBullets = [
  "Remove construction marks.",
  "Trace only the important outlines.",
  "Keep interior lines limited.",
  "Leave the petals mostly open and white.",
  "Simplify the leaves.",
] as const;

export const peonyOutlineClosing =
  "For a more expressive peony outline drawing, vary the line weight slightly around overlapping petals. If you want to know how to draw rose visit the [rose drawing](/flower-drawing/rose-drawing/) link";

export const peonyTechniquesIntro = [
  "A peony pencil drawing can look soft and detailed without requiring colour.",
  "Try using three levels of pencil pressure:",
] as const;

export const peonyTechniquesBullets = [
  "Light pressure: construction lines and petal folds.",
  "Medium pressure: main petal edges and leaves.",
  "Darker pressure: deep overlaps and centre shadows.",
] as const;

export const peonyTechniquesClosing = [
  "Keep the shading direction consistent with the petal curves.",
  "Small curved graphite strokes often look more natural than filling large areas with flat grey.",
] as const;

export const peonyPetalsIntro = [
  "One common challenge when learning how to draw a peony is deciding where every petal should go.",
  "A simple solution is to think in layers.",
] as const;

export const peonyPetalsBullets = [
  "The centre uses small petals.",
  "The middle uses medium petals.",
  "The outside uses large petals.",
] as const;

export const peonyPetalsClosing = [
  "Do not add random petals to empty spaces once the structure is already balanced. Too many extra shapes can make the centre difficult to read.",
  "It is also helpful to stop periodically and look at the whole flower rather than concentrating on one petal.",
] as const;

export const peonyProblems = [
  {
    title: "The Flower Looks Like a Rose",
    text: "Peonies and roses can appear similar in simplified sketches. To make the peony more distinctive, use a fuller outer shape with wider, softer petals and a less spiral-like centre.",
  },
  {
    title: "The Centre Is Too Large",
    text: "Keep the first cluster compact. The outer petals should eventually occupy most of the finished bloom.",
  },
  {
    title: "Every Petal Is the Same Shape",
    text: "Mix rounded, folded, narrow, and wide petals. Natural variation makes the flower more believable.",
  },
  {
    title: "There Are Too Many Lines",
    text: "A beginner peony easy drawing does not need every crease. Remove unnecessary marks when the image starts to feel crowded.",
  },
  {
    title: "The Flower Looks Flat",
    text: "Increase overlap and add small shadows where petals meet.",
  },
  {
    title: "The Leaves Look Unrelated to the Flower",
    text: "Use grouped pointed leaves rather than wide single leaves.",
  },
] as const;

export const peonyColourIntro = [
  "A peony flower drawing can be turned into a colouring page by removing most shading and leaving large open petal areas.",
  "Popular colour choices include:",
] as const;

export const peonyColourBullets = [
  "Pale pink",
  "Deep pink",
  "White",
  "Coral",
  "Red",
  "Burgundy",
  "Soft yellow",
] as const;

export const peonyColourClosing = [
  "Begin with light colour near the outer edges and add slightly darker tones toward overlapping folds.",
  "White peonies can be shaded with very pale grey, cream, lavender, or blue rather than leaving every area completely blank.",
] as const;

export const peonyMultipleIntro = [
  "After drawing one flower, try a small cluster of peonies drawing together.",
  "You can vary:",
] as const;

export const peonyMultipleBullets = [
  "Flower size",
  "Direction",
  "Amount of opening",
  "Stem length",
  "Leaf arrangement",
] as const;

export const peonyMultipleClosing = [
  "Place the largest bloom first and add smaller flowers around it.",
  "This creates a more complete botanical composition without needing a completely different technique.",
] as const;

export const peonyCreativeIntro = [
  "Once finished, your artwork can become more than a practice sketch.",
  "Try using it for:",
] as const;

export const peonyCreativeBullets = [
  "Handmade cards",
  "Floral posters",
  "Journal pages",
  "Colouring sheets",
  "Printable worksheets",
  "School projects",
  "Botanical sketchbooks",
  "Wall decorations",
  "Digital illustrations",
  "Tattoo concept art",
] as const;

export const peonyCreativeClosing =
  "A clean drawing can also be scanned and coloured digitally.";

export const peonyWorksheetIntro = [
  "A printable worksheet can help beginners practise each stage independently.",
] as const;

export const peonyWorksheetClosing = [
  "Complete the worksheet with a pencil first so mistakes remain easy to erase.",
] as const;

export const peonyConclusion = [
  "A peony becomes much easier to draw when you think of it as a series of expanding petal layers rather than dozens of individual shapes.",
  "Start with a compact centre, surround it with medium petals, then use broad outer petals to create the full bloom. Add a curved stem and grouped leaves only after the flower itself feels balanced.",
  "Keep early lines light and allow natural variation between petals. Once you understand this layered construction, you can adapt the same method for simple outlines, realistic pencil sketches, floral arrangements, or decorative linework.",
] as const;

const slug = (value: string) =>
  value
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const peonyBody: TutorialBody = {
  intro: [...peonyIntro],
  preInfoSections: [
    {
      id: "before-you-start-drawing-the-peony",
      title: "Before You Start Drawing the Peony",
      tone: "peach",
      intro: [...peonyBeforeIntro],
      bullets: [...peonyBeforeBullets],
      closing: peonyBeforeClosing,
    },
  ],
  info: {
    id: "tutorial-details",
    title: "Tutorial Details",
    items: [
      { label: "Difficulty", value: peonyInfo.difficulty },
      { label: "Time required", value: peonyInfo.estimatedTime },
      { label: "Steps", value: peonyInfo.numberOfSteps },
      { label: "Style", value: peonyInfo.drawingStyle },
      { label: "Main subject", value: peonyInfo.mainSubject },
      { label: "Suitable for", value: peonyInfo.bestFor },
    ],
  },
  materials: {
    id: "materials-for-an-easy-peony-drawing",
    title: "Materials for an Easy Peony Drawing",
    note: peonyMaterialsNote,
    items: [
      "HB or number 2 pencil",
      "Plain drawing paper",
      "Soft eraser",
      "Pencil sharpener",
      "Black fineliner, optional",
      "Coloured pencils or crayons, optional",
      "Printable worksheet for extra practice, when available",
    ],
    extra: peonyMaterialsExtra,
  },
  steps: {
    id: "how-to-draw-a-peony-step-by-step",
    title: "How to Draw a Peony Step by Step",
    intro: [...peonyStepsIntro],
    items: peonySteps,
  },
  sections: [
    {
      id: "how-to-make-a-peony-look-more-realistic",
      title: "How to Make a Peony Look More Realistic",
      tone: "lavender",
      intro: [...peonyRealisticIntro],
      bullets: [...peonyRealisticBullets],
      closing: [...peonyRealisticClosing],
    },
    {
      id: "simple-drawing-vs-detailed-drawing",
      title: "Simple Drawing vs Detailed Drawing",
      tone: "yellow",
      intro: [...peonySimpleVsDetailedIntro],
      cards: peonySimpleVsDetailedCards.map((card) => ({
        title: card.title,
        id: slug(card.title),
        text: card.text,
      })),
    },
    {
      id: "peony-line-drawing-and-outline-styles",
      title: "Peony Line Drawing and Outline Styles",
      intro: [...peonyOutlineIntro],
      bullets: [...peonyOutlineBullets],
      closing: peonyOutlineClosing,
    },
    {
      id: "drawing-techniques",
      title: "Drawing Techniques",
      tone: "sky",
      intro: [...peonyTechniquesIntro],
      bullets: [...peonyTechniquesBullets],
      closing: [...peonyTechniquesClosing],
    },
    {
      id: "how-to-draw-peony-petals-without-making-them-messy",
      title: "How to Draw Peony Petals Without Making Them Messy",
      intro: [...peonyPetalsIntro],
      bullets: [...peonyPetalsBullets],
      closing: [...peonyPetalsClosing],
    },
    {
      id: "common-problems",
      title: "Common Problems",
      cards: peonyProblems.map((problem) => ({
        title: problem.title,
        id: slug(problem.title),
        text: problem.text,
      })),
      cardVariant: "mistake",
    },
    {
      id: "simple-peony-flower-drawing-for-colouring",
      title: "Simple Peony Flower Drawing for Colouring",
      tone: "peach",
      intro: [...peonyColourIntro],
      bullets: [...peonyColourBullets],
      closing: [...peonyColourClosing],
    },
    {
      id: "practising-multiple-peonies",
      title: "Practising Multiple Peonies",
      tone: "mint",
      intro: [...peonyMultipleIntro],
      bullets: [...peonyMultipleBullets],
      closing: [...peonyMultipleClosing],
    },
    {
      id: "creative-ways-to-use-your-drawing",
      title: "Creative Ways to Use Your Drawing",
      intro: [...peonyCreativeIntro],
      bullets: [...peonyCreativeBullets],
      closing: peonyCreativeClosing,
    },
  ],
  worksheet: {
    id: "printable-drawing-worksheet",
    title: "Printable Drawing Worksheet",
    intro: [...peonyWorksheetIntro],
    includes: [],
    closing: [...peonyWorksheetClosing],
    imageAlt: "peony drawing worksheet",
    imageTitle: "printable peony drawing worksheet",
    imageWidth: 1103,
    imageHeight: 1426,
  },
  faqTitle: "Frequently Asked Questions",
  faqId: "faq",
  cta: {
    id: "final-thoughts",
    title: "Final Thoughts",
    paragraphs: [...peonyConclusion],
  },
  toc: peonyTocItems.map((item) =>
    "level" in item && item.level
      ? { id: item.id, label: item.label, level: item.level }
      : { id: item.id, label: item.label },
  ),
};

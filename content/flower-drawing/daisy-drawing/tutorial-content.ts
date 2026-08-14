import type { TutorialBody, TutorialStep } from "@/lib/tutorials/body-types";
import { daisyTocItems } from "@/lib/tutorials/daisy-toc";

export const daisyIntro = [
  "A daisy drawing is a great flower project for beginners because its basic structure is easy to understand: a round centre surrounded by long petals. Once you learn how to space those petals and vary their shapes slightly, you can turn a very simple sketch into a natural-looking flower.",
  "This tutorial shows how to draw a daisy in eight clear stages. You will begin with the flower centre, build the petals gradually, refine the outline, and then add a stem and leaves before finishing with light pencil details.",
  "The method is simple enough for children and first-time artists, but you can also develop the same drawing into a realistic daisy drawing, clean line illustration, coloured flower, bouquet, or decorative design.",
  "Visit [Flower Drawing](/flower-drawing/) to access tutorials of similar flowers in one place.",
] as const;

export const daisyEasyIntro = [
  "Unlike flowers with many overlapping petal layers, a daisy has a clear structure that is easy to divide into basic shapes.",
  "The main parts are:",
] as const;

export const daisyEasyBullets = [
  "A rounded flower centre.",
  "A ring of long petals.",
  "A narrow stem.",
  "Simple leaves.",
  "Optional texture and shading.",
] as const;

export const daisyEasyClosing =
  "The petals do not need to be identical. In fact, slightly different lengths and angles usually make a drawing look more natural.";

export const daisyInfo = {
  difficulty: "Beginner",
  estimatedTime: "About 10–15 minutes",
  numberOfSteps: "8",
  drawingStyle: "Pencil line drawing",
  optionalFinish: "Light shading or colour",
  bestFor: "Beginners, kids, students, teachers, and hobby artists",
} as const;

export const daisyMaterialsNote = "You only need a few basic supplies.";

export const daisyMaterialsExtra =
  "For a more detailed daisy sketch drawing, a 2B pencil can also be useful for adding soft shadows around the centre and between petals.";

export const daisyBeforeIntro = [
  "The flower centre is usually round, but the petals around it do not form a perfectly mechanical pattern. Some petals may lean sideways, overlap slightly, or appear shorter because of their angle.",
  "Keep these points in mind:",
] as const;

export const daisyBeforeBullets = [
  "Start with a small centre rather than a very large circle.",
  "Space petals around the whole flower.",
  "Vary the petal lengths slightly.",
  "Keep each petal narrow near the centre and broader through the middle.",
  "Avoid making every petal perfectly identical.",
] as const;

export const daisyBeforeClosing =
  "These small differences will help your drawing of a daisy feel softer and more natural.";

export const daisyStepsIntro = [
  "The easiest way to learn how to draw a daisy how to draw daisy floweris to build it from the centre outward.",
  "Keep your first marks fairly light so you can make adjustments as the flower develops.",
] as const;

export const daisySteps: TutorialStep[] = [
  {
    title: "Step 1: Draw the Daisy Centre",
    paragraphs: [
      "Start with a small circle near the upper-middle part of your paper.",
      "It does not need to be mathematically perfect. A slightly uneven circle can actually make the flower look more organic.",
      "Keep enough empty space around the circle because the petals will extend outward in every direction.",
      "Do not add details inside the centre yet.",
    ],
    image: {
      src: "/images/flower-drawing/daisy-drawing/daisy-drawing-step-1.webp",
      alt: "drawing drawings daisy flowers",
      title: "daisy drawing outline",
      width: 1448,
      height: 1086,
    },
  },
  {
    title: "Step 2: Add the First Four Petals",
    paragraphs: ["Draw four long petals around the centre:"],
    bullets: [
      "One pointing upward.",
      "One pointing downward.",
      "One extending left.",
      "One extending right.",
    ],
    closing:
      "Each petal should begin narrow near the centre, widen gently through the middle, and finish with a softly rounded tip. These first four petals act as guides for spacing the remaining petals.",
    image: {
      src: "/images/flower-drawing/daisy-drawing/daisy-drawing-step-2.webp",
      alt: "drawing of daisy",
      title: "daisy flowers drawing",
      width: 1448,
      height: 1086,
    },
  },
  {
    title: "Step 3: Fill the Large Petal Gaps",
    paragraphs: [
      "Add more petals between the four guide petals.",
      "Try to keep the spacing fairly even, but do not make the flower perfectly symmetrical.",
      "Allow some petals to:",
    ],
    bullets: [
      "Tilt slightly left or right.",
      "Become a little shorter.",
      "Curve gently.",
      "Overlap neighboring petals slightly.",
    ],
    closing:
      "At this stage, the easy daisy drawing should already have a recognizable flower shape.",
    image: {
      src: "/images/flower-drawing/daisy-drawing/daisy-drawing-step-3.webp",
      alt: "cute daisy drawing",
      title: "drawing of a daisy",
      width: 1448,
      height: 1086,
    },
  },
  {
    title: "Step 4: Complete the Petal Ring",
    paragraphs: [
      "Continue adding petals until the centre is surrounded.",
      "Avoid squeezing too many petals into tiny spaces. It is better to use fewer clean shapes than many confusing lines.",
      "Look at the complete bloom before continuing.",
      "Check that:",
    ],
    bullets: [
      "There are no unusually large empty gaps.",
      "Petal lengths vary slightly.",
      "The centre remains clearly visible.",
      "The overall flower feels balanced.",
    ],
    image: {
      src: "/images/flower-drawing/daisy-drawing/daisy-drawing-step-4.webp",
      alt: "daisy flower drawing easy",
      title: "daisy easy drawing",
      width: 1448,
      height: 1086,
    },
  },
  {
    title: "Step 5: Add Centre Texture and Petal Details",
    paragraphs: [
      "Now add some detail to the flower.",
      "Inside the circular centre, use small dots, tiny curves, or short irregular marks to suggest the many small florets found in a real daisy.",
      "Keep the texture controlled rather than filling the centre with heavy black marks.",
      "Next, add one or two very light lines inside selected petals. These lines should follow the direction of each petal and suggest a gentle fold.",
      "Do not detail every petal.",
      "Drawing usually looks cleaner when many petals remain open and uncluttered.",
    ],
    image: {
      src: "/images/flower-drawing/daisy-drawing/daisy-drawing-step-5.webp",
      alt: "easy daisy drawing",
      title: "realistic daisy drawing",
      width: 1448,
      height: 1086,
    },
  },
  {
    title: "Step 6: Draw the Daisy Stem",
    paragraphs: [
      "From behind the lower petals, draw a long stem extending downward.",
      "Use two close parallel lines to give the stem a narrow natural width.",
      "The stem can bend slightly to one side instead of being completely straight.",
      "A soft curve adds movement to the drawing and prevents the flower from looking too stiff.",
    ],
    image: {
      src: "/images/flower-drawing/daisy-drawing/daisy-drawing-step-6.webp",
      alt: "daisy drawing easy",
      title: "simple daisy drawing",
      width: 1448,
      height: 1086,
    },
  },
  {
    title: "Step 7: Add Daisy Leaves",
    paragraphs: [
      "Draw a few leaves growing naturally from the stem.",
      "Leaves can vary depending on the species, so for a beginner tutorial use simple narrow leaves with gently irregular edges.",
      "Try adding:",
    ],
    bullets: [
      "One larger leaf extending toward the left.",
      "One leaf extending toward the right.",
      "One smaller leaf lower on the stem.",
    ],
    closing:
      "Add a light central vein to the larger leaves. Keep the leaves secondary so they do not compete with the flower.",
    image: {
      src: "/images/flower-drawing/daisy-drawing/daisy-drawing-step-7.webp",
      alt: "how to draw daisy flower",
      title: "daisy flower drawing",
      width: 1448,
      height: 1086,
    },
  },
  {
    title: "Step 8: Refine and Finish the Daisy",
    paragraphs: [
      "Erase unnecessary construction marks and strengthen the final outline.",
      "Keep the main outer edges darker than the interior details.",
      "Add very light graphite shading in selected places:",
    ],
    bullets: [
      "Around parts of the flower centre.",
      "Between a few overlapping petals.",
      "Near the bases of some petals.",
      "Along one side of the stem.",
      "Beneath overlapping leaf sections.",
    ],
    closing:
      "Leave most of the petals bright. Your finished daisy drawing easy tutorial result should remain clean enough for a beginner to reproduce.",
    image: {
      src: "/images/flower-drawing/daisy-drawing/daisy-drawing-step-8.webp",
      alt: "how to draw a daisy",
      title: "how to draw a daisy flower",
      width: 1448,
      height: 1086,
    },
  },
];

export const daisyNaturalIntro = [
  "A daisy is simple, but overly perfect shapes can make it look artificial.",
] as const;

export const daisyNaturalCards = [
  {
    title: "Vary the petals",
    text: "Instead of drawing twenty identical petals, introduce small differences:",
    bullets: [
      "Change the length slightly.",
      "Tilt some petals.",
      "Make a few tips more rounded.",
      "Let occasional petals overlap.",
      "Curve some petals gently.",
    ],
    closing:
      "These subtle variations make a daisy simple drawing much more convincing.",
  },
  {
    title: "Keep the centre proportional",
    text: "A very large centre can make the flower look more like a [sunflower](/flower-drawing/sunflower-drawing/).",
    closing:
      "Keep the central disk relatively compact compared with the full width of the daisy.",
  },
  {
    title: "Use light interior lines",
    text: "Petal folds should support the form, not dominate it.",
    closing:
      "One or two fine marks on selected petals are usually enough.",
  },
] as const;

export const daisyOutlineIntro = [
  "A drawing outline works especially well for beginners because the flower can be recognised without any shading.",
  "To create a clean outline version:",
] as const;

export const daisyOutlineBullets = [
  "Complete the basic flower shape.",
  "Erase construction marks.",
  "Trace the important outer edges.",
  "Keep the centre texture minimal.",
  "Use only a few interior petal lines.",
  "Leave most areas completely white.",
] as const;

export const daisyOutlineClosing = [
  "This produces a simple design suitable for:",
] as const;

export const daisyOutlineUses = [
  "Colouring pages.",
  "Worksheets.",
  "Tracing exercises.",
  "Greeting cards.",
  "Journal decorations.",
  "Digital line art.",
] as const;

export const daisyOutlineFinal =
  "For an even cleaner result, a daisy line drawing can use a single consistent line weight throughout the flower.";

export const daisyRealisticIntro = [
  "A realistic drawing does not require hundreds of details. The biggest improvements come from petal variation, centre texture, and careful shading.",
] as const;

export const daisyRealisticCards = [
  {
    title: "Make the petals less uniform",
    text: "Real petals may twist, bend, overlap, or face slightly different directions.",
    closing: "A realistic flower should contain:",
    bullets: [
      "A few shorter petals.",
      "Some longer petals.",
      "Slight overlaps.",
      "Small directional changes.",
      "Subtle curved edges.",
    ],
  },
  {
    title: "Develop the flower centre",
    text: "The centre should look textured rather than like a flat circle.",
    closing:
      "Use many tiny controlled marks, keeping some areas lighter and some slightly darker. Avoid drawing a perfectly solid black centre.",
  },
  {
    title: "Add shadows beneath overlaps",
    text: "Use soft shading where:",
    bullets: [
      "One petal crosses another.",
      "Petals connect to the centre.",
      "A leaf overlaps the stem.",
      "The flower head meets the stem.",
    ],
    closing: "This creates depth without making the drawing overly dark.",
  },
] as const;

export const daisyRealisticTipsIntro = [
  "Beginners can create a realistic drawing without changing the basic eight-step method.",
  "After completing the outline:",
] as const;

export const daisyRealisticTipsBullets = [
  "Slightly adjust a few petal shapes.",
  "Add more centre texture.",
  "Add light shadows at overlaps.",
  "Vary the pressure of your pencil.",
  "Leave highlights on most petals.",
] as const;

export const daisyRealisticTipsClosing =
  "The result will still be easy to reproduce while looking more dimensional.";

export const daisyColorIntro = [
  "A daisy drawing with color can be very simple because traditional daisies often have white petals and a yellow centre.",
] as const;

export const daisyColorCards = [
  {
    title: "Classic white daisy",
    text: "Use:",
    bullets: [
      "White or uncoloured petals.",
      "Yellow centre.",
      "Green stem.",
      "Green leaves.",
    ],
    closing:
      "Because the petals are white, you can use a very pale grey or cool blue near the petal bases to make their shapes easier to see.",
  },
  {
    title: "Creative daisy colours",
    text: "You do not have to stay realistic.",
    closing: "Try:",
    bullets: [
      "Pink petals.",
      "Pale blue petals.",
      "Lavender petals.",
      "Soft yellow petals.",
      "Peach petals.",
      "Multi-coloured petals.",
    ],
  },
] as const;

export const daisyColorClosing =
  "For children, a cute daisy drawing can use brighter colours and simpler outlines.";

export const daisyWhiteIntro = [
  "A drawing of daisy needs careful contrast because the petals and paper may both be white.",
  "Instead of filling the petals with colour:",
] as const;

export const daisyWhiteBullets = [
  "Keep the outer outlines clear.",
  "Add faint grey shading near the bases.",
  "Darken only the deepest overlaps.",
  "Keep the central disk noticeably darker.",
  "Leave large areas of each petal untouched.",
] as const;

export const daisyWhiteClosing =
  "This creates white petals without needing to colour them white.";

export const daisyKidsIntro = [
  "Daisy flower is easy enough for children as it use fewer details.",
  "You can simplify the lesson by using:",
] as const;

export const daisyKidsBullets = [
  "One round centre.",
  "Eight to twelve larger petals.",
  "One straight or gently curved stem.",
  "Two simple leaves.",
  "No detailed pencil shading.",
] as const;

export const daisyKidsClosing = [
  "Children can then colour the finished design.",
  "A daisy flower easy drawing is also useful for classroom activities because students can complete the basic flower quickly and then personalise it.",
] as const;

export const daisyCuteIntro = [
  "To make a daisy look cute rather than realistic, simplify the shapes.",
  "Try:",
] as const;

export const daisyCuteBullets = [
  "Larger rounded petals.",
  "A slightly bigger centre.",
  "Fewer petals.",
  "Smooth simple leaves.",
  "Bright colours.",
  "A shorter stem.",
] as const;

export const daisyCuteClosing = [
  "The flower can also be used in small illustrations, journal pages, stickers, or greeting card designs.",
  "Keep facial features or cartoon additions optional so the underlying flower drawing still remains clear.",
] as const;

export const daisyGerberaIntro = [
  "Gerbera drawing follows a similar basic structure but usually has more petals packed around a larger centre.",
  "Compared with the simple daisy in this tutorial, a gerbera often includes:",
] as const;

export const daisyGerberaBullets = [
  "A larger central disk.",
  "More numerous petals.",
  "Several visible petal layers.",
  "Narrower individual petals.",
  "More dramatic colour.",
] as const;

export const daisyGerberaClosing =
  "Beginners should first practise the basic daisy. Once the spacing feels comfortable, additional petal layers can be added to create a gerbera-inspired flower.";

export const daisyBouquetIntro = [
  "After practising one flower, try making a daisy bouquet drawing.",
  "Start by placing the largest flower first.",
  "Then add:",
] as const;

export const daisyBouquetBullets = [
  "Two or three smaller daisies.",
  "Flowers facing slightly different directions.",
  "Overlapping stems.",
  "Small leaves.",
  "A few partially hidden blooms.",
] as const;

export const daisyBouquetClosing = [
  "Do not make every daisy the same size.",
  "Variation gives the bouquet a more natural composition.",
] as const;

export const daisyTattooIntro = [
  "Daisy tattoos often uses a simpler design than a shaded botanical sketch.",
  "Popular approaches include:",
] as const;

export const daisyTattooBullets = [
  "Single daisy line art.",
  "Small stem and flower.",
  "Daisy bouquet outline.",
  "Fine-line petals.",
  "Minimal leaf details.",
  "Several small daisies connected by stems.",
] as const;

export const daisyTattooClosing =
  "For actual tattoo use, a professional tattoo artist should adapt the artwork for placement, size, line weight, and long-term readability on skin.";

export const daisyMistakes = [
  {
    title: "Making every petal identical",
    text: "Perfectly repeated petals can make the flower look mechanical. Vary their lengths, angles, and curves slightly.",
  },
  {
    title: "Making the centre too large",
    text: "An oversized centre can change the character of the flower. Keep it proportional to the petals.",
  },
  {
    title: "Adding too many petal lines",
    text: "Petals do not need several dark lines inside them. Use only a few subtle folds.",
  },
  {
    title: "Making the flower completely flat",
    text: "Small overlaps and shadows add depth. Allow some petals to appear slightly in front of others.",
  },
  {
    title: "Using a perfectly straight stem",
    text: "A slight curve usually makes the composition more natural.",
  },
  {
    title: "Shading white petals too heavily",
    text: "Most of the petals should remain light. Use shading mainly near overlaps and bases.",
  },
] as const;

export const daisyPracticeIntro = [
  "Once your drawing is complete, practise different versions.",
  "Try:",
] as const;

export const daisyPracticeBullets = [
  "One simple daisy.",
  "A realistic pencil daisy.",
  "A clean outline version.",
  "A coloured daisy.",
  "A white daisy.",
  "A gerbera-style daisy.",
  "A small daisy bouquet.",
  "A minimal line drawing.",
] as const;

export const daisyPracticeClosing =
  "Repeating the same basic flower in different styles is a useful way to improve line control and petal spacing.";

export const daisyWorksheetIntro = [
  "A printable worksheet allows you to repeat each stage without needing to remember the entire process.",
] as const;

export const daisyWorksheetClosing = ["Download for Free."] as const;

export const daisyMoreIntro = [
  "Once you can draw the daisy confidently, practising other flowers can help you learn different petal structures.",
  "Daisies are useful for learning radial petal placement, while flowers with layered or irregular petals teach different drawing skills.",
  "Continue with other [flower drawing tutorials](/flower-drawing/) to practise a wider range of floral shapes and step-by-step techniques.",
] as const;

export const daisyConclusion = [
  "A daisy drawing becomes much easier when you stop trying to place every petal perfectly.",
  "Begin with a small centre, establish a few guide petals, and then gradually fill the spaces around them. Slight differences between petals will usually improve the final result rather than hurt it.",
  "Once the basic flower is complete, you can keep it simple, refine it into realistic pencil art, create clean linework, add colour, or combine several flowers into a bouquet.",
  "The same basic construction gives you many ways to practise while keeping the drawing beginner-friendly.",
] as const;

const slug = (value: string) =>
  value
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const daisyBody: TutorialBody = {
  intro: [...daisyIntro],
  preInfoSections: [
    {
      id: "what-makes-a-daisy-easy-to-draw",
      title: "What Makes a Daisy Easy to Draw?",
      tone: "peach",
      intro: [...daisyEasyIntro],
      bullets: [...daisyEasyBullets],
      closing: daisyEasyClosing,
    },
  ],
  info: {
    id: "tutorial-details",
    title: "Tutorial Details",
    items: [
      { label: "Difficulty", value: daisyInfo.difficulty },
      { label: "Drawing time", value: daisyInfo.estimatedTime },
      { label: "Number of steps", value: daisyInfo.numberOfSteps },
      { label: "Style", value: daisyInfo.drawingStyle },
      { label: "Optional finish", value: daisyInfo.optionalFinish },
      { label: "Suitable for", value: daisyInfo.bestFor },
    ],
  },
  materials: {
    id: "materials-for-drawing-a-daisy",
    title: "Materials for Drawing a Daisy",
    note: daisyMaterialsNote,
    items: [
      "HB or number 2 pencil",
      "Plain drawing paper",
      "Soft eraser",
      "Pencil sharpener",
      "Black fineliner, optional",
      "Coloured pencils or crayons, optional",
    ],
    extra: daisyMaterialsExtra,
  },
  preStepSections: [
    {
      id: "look-at-the-flower-before-you-draw",
      title: "Look at the Flower Before You Draw",
      tone: "sky",
      intro: [...daisyBeforeIntro],
      bullets: [...daisyBeforeBullets],
      closing: daisyBeforeClosing,
    },
  ],
  steps: {
    id: "how-to-draw-a-daisy-flower-step-by-step",
    title: "How to Draw a Daisy Flower Step by Step",
    intro: [...daisyStepsIntro],
    items: daisySteps,
  },
  sections: [
    {
      id: "how-to-make-a-simple-daisy-drawing-look-natural",
      title: "How to Make a Simple Daisy Drawing Look Natural",
      tone: "lavender",
      intro: [...daisyNaturalIntro],
      cards: daisyNaturalCards.map((card) => ({
        title: card.title,
        id: slug(card.title),
        text: card.text,
        bullets: "bullets" in card && card.bullets ? [...card.bullets] : undefined,
        closing: card.closing,
      })),
    },
    {
      id: "daisy-drawing-outline-and-line-art",
      title: "Daisy Drawing Outline and Line Art",
      intro: [...daisyOutlineIntro],
      bullets: [...daisyOutlineBullets],
      ordered: true,
      cards: [
        {
          title: "Simple design uses",
          id: "simple-design-uses",
          text: daisyOutlineClosing[0],
          bullets: [...daisyOutlineUses],
          closing: daisyOutlineFinal,
        },
      ],
    },
    {
      id: "how-to-draw-a-realistic-daisy",
      title: "How to Draw a Realistic Daisy",
      tone: "mint",
      intro: [...daisyRealisticIntro],
      cards: daisyRealisticCards.map((card) => ({
        title: card.title,
        id: slug(card.title),
        text: card.text,
        bullets: "bullets" in card && card.bullets ? [...card.bullets] : undefined,
        closing: card.closing,
      })),
    },
    {
      id: "tips-to-make-realistic-daisy-drawing",
      title: "Tips to Make Realistic Daisy Drawing",
      tone: "yellow",
      intro: [...daisyRealisticTipsIntro],
      bullets: [...daisyRealisticTipsBullets],
      ordered: true,
      closing: daisyRealisticTipsClosing,
    },
    {
      id: "daisy-drawing-with-color",
      title: "Daisy Drawing With Color",
      tone: "peach",
      intro: [...daisyColorIntro],
      cards: daisyColorCards.map((card) => ({
        title: card.title,
        id: slug(card.title),
        text: card.text,
        bullets: card.bullets ? [...card.bullets] : undefined,
        closing: card.closing,
      })),
      closing: daisyColorClosing,
    },
    {
      id: "white-daisy-drawing-tips",
      title: "White Daisy Drawing Tips",
      intro: [...daisyWhiteIntro],
      bullets: [...daisyWhiteBullets],
      ordered: true,
      closing: daisyWhiteClosing,
    },
    {
      id: "daisy-flower-drawing-easy-for-kids",
      title: "Daisy Flower Drawing Easy for Kids",
      tone: "coral",
      intro: [...daisyKidsIntro],
      bullets: [...daisyKidsBullets],
      closing: [...daisyKidsClosing],
    },
    {
      id: "cute-daisy-easy-drawing-ideas",
      title: "Cute Daisy Easy Drawing Ideas",
      tone: "sky",
      intro: [...daisyCuteIntro],
      bullets: [...daisyCuteBullets],
      closing: [...daisyCuteClosing],
    },
    {
      id: "gerbera-daisy-drawing",
      title: "Gerbera Daisy Drawing",
      intro: [...daisyGerberaIntro],
      bullets: [...daisyGerberaBullets],
      closing: daisyGerberaClosing,
    },
    {
      id: "daisy-bouquet-drawing",
      title: "Daisy Bouquet Drawing",
      tone: "lavender",
      intro: [...daisyBouquetIntro],
      bullets: [...daisyBouquetBullets],
      closing: [...daisyBouquetClosing],
    },
    {
      id: "daisy-tattoo-drawing-and-linework-ideas",
      title: "Daisy Tattoo Drawing and Linework Ideas",
      intro: [...daisyTattooIntro],
      bullets: [...daisyTattooBullets],
      closing: daisyTattooClosing,
    },
    {
      id: "common-drawing-mistakes",
      title: "Common Drawing Mistakes",
      cards: daisyMistakes.map((mistake) => ({
        title: mistake.title,
        id: slug(mistake.title),
        text: mistake.text,
      })),
      cardVariant: "mistake",
    },
    {
      id: "practice-ideas-after-finishing-the-tutorial",
      title: "Practice Ideas After Finishing the Tutorial",
      tone: "mint",
      intro: [...daisyPracticeIntro],
      bullets: [...daisyPracticeBullets],
      closing: daisyPracticeClosing,
    },
    {
      id: "more-flower-drawing-practice",
      title: "More Flower Drawing Practice",
      intro: [...daisyMoreIntro],
    },
  ],
  worksheet: {
    id: "printable-daisy-drawing-worksheet",
    title: "Printable Daisy Drawing Worksheet",
    intro: [...daisyWorksheetIntro],
    includes: [],
    closing: [...daisyWorksheetClosing],
    imageAlt: "daisy drawing worksheet",
    imageTitle: "printable daisy drawing worksheet",
    imageWidth: 1055,
    imageHeight: 1491,
  },
  faqTitle: "Frequently Asked Questions",
  faqId: "faq",
  cta: {
    id: "final-thoughts",
    title: "Final Thoughts",
    paragraphs: [...daisyConclusion],
  },
  toc: daisyTocItems.map((item) => ({ id: item.id, label: item.label })),
};

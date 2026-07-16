import type { TutorialBody, TutorialStep } from "@/lib/tutorials/body-types";
import { hibiscusTocItems } from "@/lib/tutorials/hibiscus-toc";

export const hibiscusIntro = [
  "A hibiscus is one of the most recognizable flowers to sketch because of its wide petals, trumpet-like shape, and long stamen extending from the center. Although the bloom contains several details, a hibiscus flower drawing becomes much easier when you first understand its main shapes.",
  "This tutorial is designed for beginners, students, kids, and anyone who wants to practice floral illustration. You will begin with the flower center, build five large petals, add the stamen, and finish the drawing with a stem, leaves, clean outlines, and optional shading.",
  "The goal is not to copy every tiny detail immediately. Instead, this guide shows how to simplify the flower into manageable stages while keeping the final result natural and recognizable.",
] as const;

export const hibiscusInfo = {
  difficulty: "Beginner to intermediate",
  estimatedTime: "25–35 minutes",
  mainTools: "Pencil, eraser, paper, and sharpener",
  optionalTools: "Fineliner, colored pencils, or markers",
  drawingStyle: "Front-facing flower with stem and leaves",
  numberOfSteps: "9",
} as const;

export const hibiscusInfoClosing =
  "This easy hibiscus flower drawing can be completed with basic materials. You do not need professional pencils or expensive art paper to follow the tutorial.";

export const hibiscusRecognizeIntro = [
  "Before drawing, it helps to observe the flower’s main features.",
  "A hibiscus usually has:",
] as const;

export const hibiscusRecognizeBullets = [
  "Five broad petals",
  "Gently wavy petal edges",
  "A deep center",
  "A long stamen extending outward",
  "Small anthers near the tip",
  "A narrow stem",
  "Wide leaves with visible veins",
  "Slightly pointed or serrated leaf edges",
] as const;

export const hibiscusRecognizeClosing =
  "When creating a drawing of a hibiscus flower, focus first on the overall silhouette. The petal edges and central stamen can be refined after the main shape is established.";

export const hibiscusObserveIntro = [
  "Look for these visual relationships:",
] as const;

export const hibiscusObserveBullets = [
  "Where each petal begins",
  "Which petals appear in front",
  "Where the petal edges overlap",
  "How the stamen extends from the center",
  "Which areas are darker",
  "How the leaf veins spread outward",
] as const;

export const hibiscusStepsIntro = [
  "Follow the stages in order and keep the first lines light.",
] as const;

export const hibiscusSteps: TutorialStep[] = [
  {
    title: "Step 1: Mark the Flower Center",
    paragraphs: [
      "Draw a small oval or circle near the middle of the page. This will guide the inner part of the bloom.",
      "Add two faint guidelines crossing through the center. These will help you position the five petals around the flower.",
      "Do not make the center too large. Most of the space should remain available for the wide petals.",
    ],
    image: {
      src: "/images/flower-drawing/hibiscus-flower-drawing/hibiscus-flower-drawing-step-1.webp",
      alt: "Mark the hibiscus flower center",
      width: 1448,
      height: 1086,
    },
  },
  {
    title: "Step 2: Draw the First Petal",
    paragraphs: [
      "Add one large rounded petal above the center. The outer edge should be wider than the base where it connects to the flower.",
      "Give the top edge a gentle wave rather than making it perfectly smooth. A few small curves help suggest the soft and slightly folded texture of the petal.",
      "This first petal will establish the size of the rest of your hibiscus flower drawing.",
    ],
    image: {
      src: "/images/flower-drawing/hibiscus-flower-drawing/hibiscus-flower-drawing-step-2.webp",
      alt: "Draw the first hibiscus petal",
      width: 1448,
      height: 1086,
    },
  },
  {
    title: "Step 3: Add the Side Petals",
    paragraphs: [
      "Draw one petal on the left and one on the right of the center.",
      "Allow their inner edges to overlap slightly with the first petal. The left and right shapes do not need to be identical, but they should feel similar in size.",
      "Keep checking the distance between the petals so the flower does not become too narrow or too wide.",
    ],
    image: {
      src: "/images/flower-drawing/hibiscus-flower-drawing/hibiscus-flower-drawing-step-3.webp",
      alt: "Add the side hibiscus petals",
      width: 1448,
      height: 1086,
    },
  },
  {
    title: "Step 4: Complete the Five-Petal Shape",
    paragraphs: [
      "Add two lower petals to complete the flower.",
      "The bottom petals may appear shorter because part of their shape sits behind the center. Use curved lines to show the overlap.",
      "At this stage, the basic hibiscus flower easy drawing should already look recognizable, even without the stamen, stem, or leaves.",
    ],
    image: {
      src: "/images/flower-drawing/hibiscus-flower-drawing/hibiscus-flower-drawing-step-4.webp",
      alt: "Complete the five-petal hibiscus shape",
      width: 1448,
      height: 1086,
    },
  },
  {
    title: "Step 5: Refine the Wavy Petal Edges",
    paragraphs: [
      "Review all five petals and soften any stiff or geometric lines.",
      "Add small dips, curved edges, and gentle folds. Avoid making every edge equally wavy. Some parts can remain smooth while others have more movement.",
      "Draw a few light contour lines from the center toward the outer petal edges. These lines should follow the natural direction of each petal rather than running randomly across the surface.",
    ],
    image: {
      src: "/images/flower-drawing/hibiscus-flower-drawing/hibiscus-flower-drawing-step-5.webp",
      alt: "Refine the wavy hibiscus petal edges",
      width: 1448,
      height: 1086,
    },
  },
  {
    title: "Step 6: Draw the Long Stamen",
    paragraphs: [
      "From the flower center, draw a long narrow shape extending outward. The stamen may point upward, sideways, or slightly downward, depending on the angle of your flower.",
      "At the end, add several small rounded or oval shapes to represent the anthers.",
      "This long central feature is important because it separates a hibiscus flower drawing simple design from a generic five-petal flower.",
      "Keep the stamen slender. If it becomes too thick, it may overpower the bloom.",
    ],
    image: {
      src: "/images/flower-drawing/hibiscus-flower-drawing/hibiscus-flower-drawing-step-6.webp",
      alt: "Draw the long hibiscus stamen",
      width: 1448,
      height: 1086,
    },
  },
  {
    title: "Step 7: Add the Stem and Leaves",
    paragraphs: [
      "Draw two close parallel lines extending from beneath the flower to create the stem.",
      "Add one or two leaves along the stem. Hibiscus leaves are usually wider near the middle and taper toward a pointed tip.",
      "Draw a central vein inside each leaf, followed by shorter side veins. You can use lightly jagged edges to suggest the natural serration of the leaf.",
    ],
    image: {
      src: "/images/flower-drawing/hibiscus-flower-drawing/hibiscus-flower-drawing-step-7.webp",
      alt: "Add the hibiscus stem and leaves",
      width: 1448,
      height: 1086,
    },
  },
  {
    title: "Step 8: Clean the Hibiscus Outline",
    paragraphs: [
      "Erase the construction guidelines and any unwanted overlapping marks.",
      "Strengthen the outer petal edges, stamen, stem, and leaves with cleaner lines. Keep the internal details slightly lighter so the drawing remains easy to read.",
      "A clean hibiscus flower line drawing should still be recognizable without color or heavy shading.",
      "If you plan to use a pen, trace the final pencil lines carefully and allow the ink to dry before erasing the graphite.",
    ],
    image: {
      src: "/images/flower-drawing/hibiscus-flower-drawing/hibiscus-flower-drawing-step-8.webp",
      alt: "Clean the hibiscus outline",
      width: 1448,
      height: 1086,
    },
  },
  {
    title: "Step 9: Add Shading or Color",
    paragraphs: [
      "Choose a light direction before shading.",
      "Add darker values:",
    ],
    bullets: [
      "Near the flower center",
      "Beneath overlapping petals",
      "Along selected petal folds",
      "Under the bloom",
      "On one side of the stem",
      "Beside the main leaf veins",
    ],
    closing:
      "Leave the outer petal surfaces lighter to create contrast. This final stage transforms the basic sketch into a finished hibiscus flower drawing with greater depth and dimension.",
    image: {
      src: "/images/flower-drawing/hibiscus-flower-drawing/hibiscus-flower-drawing.webp",
      alt: "Hibiscus Flower Drawing",
      width: 1448,
      height: 1086,
    },
  },
];

export const hibiscusTipsIntro = [
  "A simple hibiscus flower drawing looks best when the flower’s main features remain clear.",
  "Use these tips during practice:",
] as const;

export const hibiscusTips = [
  "Draw the five-petal silhouette before adding texture.",
  "Keep the first pencil lines light.",
  "Make the petals broad rather than narrow.",
  "Let some petal edges overlap.",
  "Keep the stamen long and slender.",
  "Avoid placing heavy details on every petal.",
  "Follow the direction of the petal when shading.",
  "Draw the leaves after finishing the bloom.",
  "Compare the size of the stem with the flower.",
  "Leave enough white space around the illustration.",
] as const;

export const hibiscusTipsClosing =
  "Beginners often improve more quickly by repeating the basic flower two or three times instead of adding too many details to one drawing.";

export const hibiscusOutlineIntro = [
  "An outline drawing is useful for coloring pages, worksheets, classroom projects, Cricut-style references, and simple decorative illustrations.",
  "Begin by removing all guidelines and unnecessary interior marks. Keep only the main petal edges, flower center, stamen, stem, and leaves.",
  "You can create two outline styles:",
] as const;

export const hibiscusOutlineVersions = [
  {
    title: "Minimal Outline",
    text: "Use smooth petal edges, one long stamen, a curved stem, and two basic leaves. This version is ideal for kids, beginners, and tracing exercises.",
  },
  {
    title: "Detailed Outline",
    text: "Add petal folds, small anthers, leaf veins, and slightly serrated leaf edges. This version offers more visual interest without requiring full shading.",
  },
] as const;

export const hibiscusOutlineClosing =
  "For a clean hibiscus flower outline drawing, avoid placing too many lines inside the petals. The image should remain clear when printed at a smaller size.";

export const hibiscusHawaiianIntro = [
  "The hibiscus is strongly associated with tropical and Hawaiian imagery. A hawaiian hibiscus flower drawing often uses a wide open bloom, flowing petal edges, bright colors, and surrounding tropical leaves.",
  "To create a Hawaiian-inspired version:",
] as const;

export const hibiscusHawaiianBullets = [
  "Make the petals wider and more flowing.",
  "Curve the stamen outward.",
  "Add one or two large tropical leaves.",
  "Use coral, pink, red, orange, or yellow.",
  "Include a soft color transition near the flower center.",
  "Keep the composition open and decorative.",
] as const;

export const hibiscusHawaiianClosing = [
  "For a hawaiian hibiscus flower drawing easy enough for beginners, use one large front-facing flower instead of a complex arrangement.",
  "You can later combine several hibiscus flowers with palm leaves or simple curved branches to create a tropical border.",
] as const;

export const hibiscusRealisticIntro = [
  "A realistic hibiscus flower drawing depends on shape, overlap, texture, and controlled shading.",
] as const;

export const hibiscusRealisticAreas = [
  {
    title: "Study the Petal Folds",
    text: "Hibiscus petals often contain long folds running from the center toward the outside. Use curved pencil strokes that follow the direction of these folds.",
  },
  {
    title: "Add Depth Near the Center",
    text: "The flower center is usually darker because the petals curve inward. Build the shadow gradually rather than filling the area with solid graphite.",
  },
  {
    title: "Vary the Petal Edges",
    text: "Some petal edges may fold forward while others turn away. Use changes in line weight and small contour lines to show these differences.",
  },
  {
    title: "Shade the Stamen Carefully",
    text: "Add a soft shadow along one side of the stamen. Keep the small anthers visible and avoid turning them into one dark shape.",
  },
  {
    title: "Use Uneven Highlights",
    text: "Do not shade every petal equally. Leave lighter areas on the surfaces facing the light.",
  },
] as const;

export const hibiscusRealisticClosing =
  "A hibiscus flower drawing realistic in appearance should still have clean, readable forms. Too much graphite can hide the natural petal structure.";

export const hibiscusColorIntro = [
  "Pink Hibiscus Flower Drawing is most liked flower colour and it appear in many vibrant combinations.",
  "Try these Colours:",
] as const;

export const hibiscusColorBullets = [
  "Red petals with a dark burgundy center",
  "Yellow petals with orange shading",
  "Coral petals with a red center",
  "Purple petals with violet shadows",
  "White petals with pale pink folds",
  "Orange petals with yellow highlights",
] as const;

export const hibiscusColorClosing =
  "Blend colors gradually and keep the lightest areas visible. Adding the darkest color only near the center and overlapping edges can make the petals feel softer.";

export const hibiscusSmallIntro = [
  "A small hibiscus flower drawing is suitable for journals, greeting cards, bookmarks, small worksheets, and quick sketchbook practice.",
  "When working at a small size:",
] as const;

export const hibiscusSmallBullets = [
  "Reduce the number of petal folds.",
  "Keep the stamen clear and simple.",
  "Use one stem and one leaf.",
  "Avoid heavy shading.",
  "Strengthen the outer contour slightly.",
  "Leave enough space between interior lines.",
] as const;

export const hibiscusSmallClosing =
  "Try drawing three small hibiscus flowers at different angles. This helps you practice shape variation without committing to a large detailed illustration.";

export const hibiscusMistakes = [
  {
    title: "Drawing More Than Five Main Petals",
    text: "A hibiscus is usually represented with five broad petals. Too many equally large petals can make it resemble a different flower.",
  },
  {
    title: "Making the Petals Too Narrow",
    text: "Hibiscus petals are generally open and wide. Narrow shapes can make the bloom look stiff.",
  },
  {
    title: "Forgetting the Stamen",
    text: "The long stamen is one of the flower’s most distinctive features. Without it, the drawing may look generic.",
  },
  {
    title: "Using a Perfectly Straight Stem",
    text: "A slight curve usually gives the composition more movement.",
  },
  {
    title: "Making Every Petal Identical",
    text: "Natural flowers contain variation. Change the width, curve, and edge of each petal slightly.",
  },
  {
    title: "Adding Dark Shading Too Early",
    text: "Finish the structure first. Early heavy shading can hide proportion problems and make corrections difficult.",
  },
  {
    title: "Ignoring Leaf Structure",
    text: "Even simple leaves should have a central vein and a clear pointed shape.",
  },
] as const;

export const hibiscusConclusion = [
  "Begin with the center, place the five petals carefully, and add the stamen only after the main bloom feels balanced. Keep the early lines light and refine the edges gradually.",
  "A hibiscus drawing flower exercise is a useful way to practice curved lines, broad petal shapes, overlaps, shading, and leaf details in one illustration.",
  "Use the printable worksheet for extra practice and repeat the flower at different sizes or angles. With regular sketching, your hibiscus flower drawing will become cleaner, more confident, and more natural.",
] as const;

const slug = (value: string) =>
  value
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const hibiscusBody: TutorialBody = {
  intro: [...hibiscusIntro],
  info: {
    id: "quick-tutorial-details",
    title: "Quick Tutorial Details",
    items: [
      { label: "Difficulty", value: hibiscusInfo.difficulty },
      { label: "Estimated drawing time", value: hibiscusInfo.estimatedTime },
      { label: "Main tools", value: hibiscusInfo.mainTools },
      { label: "Optional tools", value: hibiscusInfo.optionalTools },
      { label: "Drawing style", value: hibiscusInfo.drawingStyle },
      { label: "Number of steps", value: hibiscusInfo.numberOfSteps },
    ],
  },
  materials: {
    id: "materials",
    title: "Materials",
    note: "This tutorial can be completed with basic drawing supplies:",
    items: [
      "Pencil",
      "Eraser",
      "Paper",
      "Sharpener",
      "Fineliner, colored pencils, or markers",
    ],
    extra: hibiscusInfoClosing,
  },
  steps: {
    id: "hibiscus-flower-drawing-step-by-step",
    title: "Hibiscus Flower Drawing Step by Step",
    intro: [...hibiscusStepsIntro],
    items: hibiscusSteps,
  },
  sections: [
    {
      id: "what-makes-a-hibiscus-flower-easy-to-recognize",
      title: "What Makes a Hibiscus Flower Easy to Recognize?",
      tone: "sky",
      intro: [...hibiscusRecognizeIntro],
      bullets: [...hibiscusRecognizeBullets],
      closing: hibiscusRecognizeClosing,
    },
    {
      id: "observe-the-flower-before-you-draw",
      title: "Observe the Flower Before You Draw",
      intro: [...hibiscusObserveIntro],
      bullets: [...hibiscusObserveBullets],
    },
    {
      id: "simple-hibiscus-drawing-tips",
      title: "Simple Hibiscus Drawing Tips",
      tone: "yellow",
      intro: [...hibiscusTipsIntro],
      checklist: [...hibiscusTips],
      closing: hibiscusTipsClosing,
    },
    {
      id: "create-an-outline-hibiscus-flower-drawing",
      title: "Create an Outline Hibiscus Flower Drawing",
      intro: [...hibiscusOutlineIntro],
      cards: hibiscusOutlineVersions.map((v) => ({
        title: v.title,
        id: slug(v.title),
        text: v.text,
      })),
      cardVariant: "outline",
      closing: hibiscusOutlineClosing,
    },
    {
      id: "easy-hawaiian-hibiscus-flower-drawing",
      title: "Easy Hawaiian Hibiscus Flower Drawing",
      tone: "coral",
      intro: [...hibiscusHawaiianIntro],
      bullets: [...hibiscusHawaiianBullets],
      closing: [...hibiscusHawaiianClosing],
    },
    {
      id: "how-to-make-a-realistic-hibiscus-flower-drawing",
      title: "How to Make a Realistic Hibiscus Flower Drawing",
      tone: "lavender",
      intro: [...hibiscusRealisticIntro],
      cards: hibiscusRealisticAreas.map((a) => ({
        title: a.title,
        id: slug(a.title),
        text: a.text,
      })),
      closing: hibiscusRealisticClosing,
    },
    {
      id: "colored-hibiscus-flower-drawing-ideas",
      title: "Colored Hibiscus Flower Drawing Ideas",
      tone: "peach",
      intro: [...hibiscusColorIntro],
      bullets: [...hibiscusColorBullets],
      closing: hibiscusColorClosing,
    },
    {
      id: "small-hibiscus-flower-drawing",
      title: "Small Hibiscus Flower Drawing",
      intro: [...hibiscusSmallIntro],
      bullets: [...hibiscusSmallBullets],
      closing: hibiscusSmallClosing,
    },
    {
      id: "common-mistakes-to-avoid",
      title: "Common Mistakes to Avoid",
      cards: hibiscusMistakes.map((m) => ({
        title: m.title,
        id: slug(m.title),
        text: m.text,
      })),
      cardVariant: "mistake",
    },
  ],
  worksheet: {
    id: "worksheets",
    title: "Downloadable Worksheet",
    intro: [],
    includes: [],
    closing: [],
    imageAlt: "Hibiscus Flower Drawing worksheet",
    imageTitle: "download hibiscus flower drawing worksheet",
    imageWidth: 1054,
    imageHeight: 1492,
  },
  faqTitle: "Frequently Asked Questions",
  faqId: "faq",
  cta: {
    id: "complete-your-drawing",
    title: "Complete Your Drawing",
    paragraphs: [...hibiscusConclusion],
  },
  toc: hibiscusTocItems.map((item) =>
    "level" in item && item.level
      ? { id: item.id, label: item.label, level: item.level }
      : { id: item.id, label: item.label },
  ),
};

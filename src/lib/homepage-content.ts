import type { FaqItem } from "@/components/ui/FaqAccordion";

export const homepageFaqs: FaqItem[] = [
  {
    question: "What is the easiest way to start a flower drawing?",
    answer:
      "Begin with a small circle or oval for the center. Add a few large petals around it, then draw a stem and simple leaves. Keep the first lines light so you can adjust the proportions.",
  },
  {
    question: "How can beginners learn to draw flowers?",
    answer:
      "Beginners can improve by breaking the subject into basic shapes and following one step at a time. Practicing the same flower more than once also helps develop line control and confidence.",
  },
  {
    question: "What materials do I need for a basic flower drawing?",
    answer:
      "You can begin with paper, a graphite pencil, an eraser, and a sharpener. Colored pencils or markers can be added after the outline is complete.",
  },
  {
    question: "How do I make a simple flower drawing look more natural?",
    answer:
      "Vary the size and direction of the petals, allow a few shapes to overlap, and avoid making every side perfectly symmetrical. A slightly curved stem can also make the drawing feel less rigid.",
  },
  {
    question: "Can I learn by tracing a complete flower picture?",
    answer:
      "Tracing is useful for understanding line direction and shape. After tracing, recreate the same flower on a blank area without following the outline. This helps turn tracing into active practice.",
  },
  {
    question: "Are flower drawing worksheets suitable for beginners?",
    answer:
      "Yes. Worksheets can provide a completed reference, tracing practice, individual shape exercises, and blank space for independent drawing. Choose a worksheet with fewer steps when you are just starting.",
  },
  {
    question: "Do I need coaching for drawing easy flowers?",
    answer:
      "Drawing flowers for beginners can feel difficult at first, but formal classes are not always necessary. Follow the visual steps, use the worksheets for guided practice, and repeat each drawing until the shapes feel familiar.",
  },
];

export const homepageSteps = [
  {
    title: "Step 1: Mark the Flower Center",
    paragraphs: [
      "Begin with a small circle or oval. This shape will act as the center and help you decide the size and position of the flower.",
      "Keep the line light so it can be adjusted later.",
    ],
    image: {
      src: "/images/flower-drawing/home/flower-drawing-step-1.webp",
      alt: "drawing easy flower",
      title: "drawing flowers for beginners",
      width: 1254,
      height: 1254,
    },
  },
  {
    title: "Step 2: Add the First Petals",
    paragraphs: [
      "Draw a few petals around the center. Instead of trying to complete the whole flower at once, place the first petals at different points to establish the overall shape.",
      "Petals can be rounded, pointed, narrow, wide, or slightly folded.",
    ],
    image: {
      src: "/images/flower-drawing/home/flower-drawing-step-2.webp",
      alt: "How to draw a flower",
      title: "flowers for drawing",
      width: 1254,
      height: 1254,
    },
  },
  {
    title: "Step 3: Fill the Remaining Spaces",
    paragraphs: [
      "Add more petals between the first set. Allow some petals to overlap so the flower does not look flat or overly symmetrical.",
      "The petals do not need to be identical. Small variations make the drawing more natural.",
    ],
    image: {
      src: "/images/flower-drawing/home/flower-drawing-step-3.webp",
      alt: "easy drawing of a flower",
      title: "flower drawing ideas easy",
      width: 1254,
      height: 1254,
    },
  },
  {
    title: "Step 4: Draw the Stem",
    paragraphs: [
      "Add two light lines extending downward from the flower. Keep them close enough to form a slender stem.",
      "A slightly curved stem often looks softer than a completely straight one.",
    ],
    image: {
      src: "/images/flower-drawing/home/flower-drawing-step-4.webp",
      alt: "drawing flowers step by step",
      title: "simple flowers drawing",
      width: 1254,
      height: 1254,
    },
  },
  {
    title: "Step 5: Add Leaves",
    paragraphs: [
      "Draw one or more leaves along the stem. Begin with a center line, then build the outer leaf shape around it.",
      "Leaves may be long, rounded, pointed, smooth, or gently uneven.",
    ],
    image: {
      src: "/images/flower-drawing/home/flower-drawing-step-5.webp",
      alt: "basic flower drawing",
      title: "beginner simple flower designs for pencil drawing",
      width: 1254,
      height: 1254,
    },
  },
  {
    title: "Step 6: Refine the Outline",
    paragraphs: [
      "Look over the complete sketch and adjust any flower shapes that feel too narrow, wide or uneven.",
    ],
    image: {
      src: "/images/flower-drawing/home/flower-drawing.webp",
      alt: "a flower drawing",
      title: "easy flowers drawing",
      width: 1254,
      height: 1254,
    },
  },
  {
    title: "Step 7: Add Shading or Color",
    paragraphs: [
      "Finish the drawing with light pencil shading, colored pencils, markers, or another medium you enjoy.",
      "Place darker values near overlapping petals and underneath the flower center. Leave some areas lighter to create contrast.",
    ],
    // Identical to featured flower-drawing.webp — reuse that public file (no duplicate copy).
    // Featured-image SEO applies when this final step reuses the featured file.
    image: {
      src: "/images/flower-drawing/home/flower-drawing.webp",
      alt: "flower drawing",
      title: "flower drawing easy",
      width: 1254,
      height: 1254,
    },
  },
] as const;

export const homepageTocItems = [
  {
    id: "explore-easy-flower-drawing-tutorial",
    label: "Explore Easy Flower Drawing Tutorial",
  },
  {
    id: "how-to-draw-a-flower-step-by-step",
    label: "How to Draw a Flower Step by Step",
  },
  {
    id: "simple-flower-drawing-ideas-to-practice",
    label: "Simple Flower Drawing Ideas to Practice",
  },
  {
    id: "flower-drawing-for-beginners",
    label: "Flower Drawing for Beginners",
  },
  {
    id: "from-basic-shapes-to-a-beautiful-flower-drawing",
    label: "From Basic Shapes to a Beautiful Flower Drawing",
  },
  {
    id: "sketching-flowers-with-pencil",
    label: "Sketching Flowers with Pencil",
  },
  {
    id: "worksheets",
    label: "Download Worksheets for Practice",
  },
  {
    id: "find-a-flower-drawing-that-matches-your-skill-level",
    label: "Find a Flower Drawing That Matches Your Skill Level",
  },
  {
    id: "tips-for-better-drawing-of-flower",
    label: "Tips for Better Drawing of Flower",
  },
  {
    id: "explore-more-easy-flowers-drawing-ideas",
    label: "Explore More Easy Flowers Drawing Ideas",
  },
  {
    id: "faq",
    label: "Frequently Asked Questions",
  },
  {
    id: "start-your-next-flower-drawing",
    label: "Start Your Next Flower Drawing",
  },
  {
    id: "about-the-author",
    label: "About the Author",
  },
] as const;

export const practiceIdeas = [
  {
    title: "A Five-Petal Flower",
    paragraphs: [
      "Draw a small center and place five rounded petals around it. Add a stem and two simple leaves.",
      "This is a good starting point for anyone making a very simple drawing.",
    ],
  },
  {
    title: "A Side-View Flower",
    paragraphs: [
      "Instead of showing every petal from the front, draw the flower from the side. Use a curved cup-like shape for the bloom and connect it to a gently bending stem.",
    ],
  },
  {
    title: "A Flower with Large Petals",
    paragraphs: [
      "Create four or six wide petals around a visible center. Large petals provide more room for shading, patterns, and color.",
    ],
  },
  {
    title: "A Small Floral Cluster",
    paragraphs: [
      "Draw several small flowers close together. Vary their sizes and directions to create a loose floral arrangement.",
    ],
  },
  {
    title: "A Flower Plant Drawing",
    paragraphs: [
      "Combine one main flower with a longer stem, several leaves, smaller buds, and lines suggesting new growth.",
    ],
  },
  {
    title: "A Pencil Flower Sketch",
    paragraphs: [
      "Use light construction lines first, then build darker contours and soft shading. Focus on line weight rather than adding color.",
    ],
  },
] as const;

export const beginnerHabits = [
  "Sketch lightly before creating a final outline.",
  "Compare the size of the petals to the center.",
  "Notice where one petal overlaps another.",
  "Use curved lines instead of making every edge stiff.",
  "Rotate the paper when a line feels difficult to draw.",
  "Erase only after the main structure is complete.",
  "Practice the same petal shape several times.",
  "Leave small imperfections instead of repeatedly correcting them.",
] as const;

export const shapeElements = [
  {
    title: "Shape",
    text: "Look at the overall silhouette before focusing on small details. A clear outer shape helps the flower remain readable.",
  },
  {
    title: "Proportion",
    text: "Compare the width of the flower to the length of the stem and the size of the leaves. These relationships help the drawing feel balanced.",
  },
  {
    title: "Overlap",
    text: "Allow some petals and leaves to sit in front of others. Overlapping shapes create depth without requiring advanced shading.",
  },
  {
    title: "Line Weight",
    text: "Use light lines for early construction and darker lines for the final outline. Varying line strength can separate important edges from smaller details.",
  },
  {
    title: "Texture",
    text: "Short strokes, dots, curves, and fine lines can suggest pollen, veins, folds, and surface detail.",
  },
  {
    title: "Light and Shadow",
    text: "Choose a general direction for the light. Add darker marks where petals overlap, where the center meets the petals, and where leaves join the stem.",
  },
] as const;

export const pencilTechniques = [
  "Short curved strokes that follow the direction of a petal",
  "Light hatching underneath overlapping shapes",
  "Darker lines near the flower center",
  "Soft shadows beside the stem and leaves",
  "Small highlights created by leaving areas of the paper untouched",
] as const;

export const worksheetIncludes = [
  "A complete flower picture for reference",
  "A lighter outline for tracing",
  "A step-by-step drawing sequence",
  "Individual petal and leaf exercises",
  "A blank practice area",
  "Space to recreate the complete drawing",
  "A difficulty level and suggested practice time",
] as const;

export const skillLevels = [
  {
    title: "Easy",
    text: "Each flower step by step drawing uses clear outlines and a short sequence that beginners can follow at their own pace.",
  },
  {
    title: "Beginner",
    text: "Beginner tutorials introduce overlapping petals, leaves, stems, and light details while keeping the process manageable.",
  },
  {
    title: "Intermediate",
    text: "These drawings may include more petals, angled views, layered forms, pencil shading, or a complete flower plant.",
  },
] as const;

export const drawingTips = [
  "When creating a petals, observe their size, direction, and position around the center.",
  "Observe the complete flower before drawing individual petals.",
  "Use the center as an anchor for the surrounding shapes.",
  "Keep construction lines light and loose.",
  "Avoid making every petal exactly the same.",
  "Show depth by overlapping a few forms.",
  "Follow the natural direction of petals when adding shading.",
  "Use blank space around the flower to keep the composition clear.",
  "Compare your final drawing with the reference and choose one area to improve next time.",
  "Save earlier sketches so you can see your progress.",
  "Practice slowly instead of trying to complete every drawing quickly.",
] as const;

import type { DrawingTutorial } from "@/lib/draw-along/types";
import { DRAW_ALONG_MUSIC_PATH } from "@/lib/draw-along/types";

/**
 * Draw-along player data for Tulip Drawing.
 * Exactly 8 real drawing steps; step 8 uses the final featured drawing image.
 */
export const tulipDrawAlongTutorial: DrawingTutorial = {
  slug: "tulip-drawing",
  title: "Tulip Drawing",
  description:
    "Build a clean tulip from a simple oval guide through petals, stem, leaves, and finishing touches.",
  difficulty: "Beginner",
  estimatedMinutes: 12,
  featuredImage: "/images/flower-drawing/tulip-drawing/tulip-drawing.webp",
  featuredImageAlt: "Tulip Drawing",
  articleUrl: "/flower-drawing/tulip-drawing/",
  worksheetUrl: "/downloads/tulip-drawing/tulip-drawing-worksheet.pdf",
  musicUrl: DRAW_ALONG_MUSIC_PATH,
  steps: [
    {
      id: 1,
      title: "Draw the Main Flower Guide",
      instruction:
        "Begin with a light oval near the upper part of the page. Draw a faint vertical guideline through the center to keep the flower balanced.",
      image: "/images/flower-drawing/tulip-drawing/tulip-drawing-step-1.webp",
      alt: "Draw the main tulip flower guide",
      tip: "The oval should be slightly taller than it is wide.",
      durationSeconds: 12,
    },
    {
      id: 2,
      title: "Shape the Bottom of the Bloom",
      instruction:
        "Refine the lower part of the oval into a soft rounded point. Draw two curved lines moving inward from the sides.",
      image: "/images/flower-drawing/tulip-drawing/tulip-drawing-step-2.webp",
      alt: "Shape the bottom of the tulip bloom",
      tip: "Do not make the lower point too sharp — a gentle transition looks more natural.",
      durationSeconds: 12,
    },
    {
      id: 3,
      title: "Draw the Front Petal",
      instruction:
        "Inside the guide, draw one large central petal. Begin near the lower middle, curve upward, and create a rounded point near the top.",
      image: "/images/flower-drawing/tulip-drawing/tulip-drawing-step-3.webp",
      alt: "Draw the front tulip petal",
      tip: "Keep petal edges soft instead of using stiff straight lines.",
      durationSeconds: 13,
    },
    {
      id: 4,
      title: "Add the Side Petals",
      instruction:
        "Draw one curved petal on the left and another on the right. Allow part of each side petal to sit behind the central one.",
      image: "/images/flower-drawing/tulip-drawing/tulip-drawing-step-4.webp",
      alt: "Add the side tulip petals",
      tip: "Slight differences in height and curve help the tulip feel more natural.",
      durationSeconds: 14,
    },
    {
      id: 5,
      title: "Add the Back Petals",
      instruction:
        "Add one or two smaller petal points behind the main three petals. Only the upper portions need to remain visible.",
      image: "/images/flower-drawing/tulip-drawing/tulip-drawing-step-5.webp",
      alt: "Add the back tulip petals",
      tip: "The bloom should appear compact and cup-shaped rather than flat.",
      durationSeconds: 13,
    },
    {
      id: 6,
      title: "Draw the Stem",
      instruction:
        "From beneath the bloom, extend two close parallel lines downward. Keep the stem long and slightly curved.",
      image: "/images/flower-drawing/tulip-drawing/tulip-drawing-step-6.webp",
      alt: "Draw the tulip stem",
      tip: "Leave enough room beside the stem for two long leaves.",
      durationSeconds: 12,
    },
    {
      id: 7,
      title: "Add the Tulip Leaves",
      instruction:
        "Draw one leaf rising from the lower left side of the stem and another from the right at a different height. Add a central vein inside each leaf.",
      image: "/images/flower-drawing/tulip-drawing/tulip-drawing-step-7.webp",
      alt: "Add the tulip leaves",
      tip: "Tulip leaves are long, smooth, pointed, and slightly curved.",
      durationSeconds: 14,
    },
    {
      id: 8,
      title: "Refine, Shade, or Color",
      instruction:
        "Erase the oval guideline and remove unwanted marks. Strengthen important outlines, then add soft shading between petals and along the stem.",
      image: "/images/flower-drawing/tulip-drawing/tulip-drawing.webp",
      alt: "Tulip Drawing",
      tip: "Keep interior petal folds lighter than the outer contour.",
      durationSeconds: 16,
    },
  ],
};

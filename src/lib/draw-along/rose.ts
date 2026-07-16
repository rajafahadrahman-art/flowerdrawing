import type { DrawingTutorial } from "@/lib/draw-along/types";
import { DRAW_ALONG_MUSIC_PATH } from "@/lib/draw-along/types";

/**
 * Draw-along player data for Rose Drawing.
 * Step count is always derived from `steps.length` (currently 9 real steps).
 * Step 9 reuses the featured final drawing image, matching the article.
 */
export const roseDrawAlongTutorial: DrawingTutorial = {
  slug: "rose-drawing",
  title: "Rose Drawing",
  description:
    "Draw a rose one layer at a time — center, petals, stem, leaves, and light shading.",
  difficulty: "Beginner",
  estimatedMinutes: 10,
  featuredImage: "/images/flower-drawing/rose-drawing/rose-drawing.webp",
  featuredImageAlt: "rose drawing",
  articleUrl: "/flower-drawing/rose-drawing/",
  worksheetUrl: "/downloads/rose-drawing/rose-drawing-worksheet.pdf",
  musicUrl: DRAW_ALONG_MUSIC_PATH,
  steps: [
    {
      id: 1,
      title: "Draw the Rose Center",
      instruction:
        "Begin with a small oval near the center of the page. Inside the oval, draw a short curved line that resembles a loose spiral or a folded ribbon.",
      image: "/images/flower-drawing/rose-drawing/rose-drawing-step-1.webp",
      alt: "Draw the rose center",
      tip: "Avoid making the central spiral too large. Leave space for more petal layers.",
      durationSeconds: 14,
    },
    {
      id: 2,
      title: "Add the First Folded Petals",
      instruction:
        "Draw two or three short curved shapes around the center. Allow each petal to partially cover the one behind it.",
      image: "/images/flower-drawing/rose-drawing/rose-drawing-step-2.webp",
      alt: "Add the first folded petals",
      tip: "Think of these early petals as small cups wrapped around the middle of the flower.",
      durationSeconds: 14,
    },
    {
      id: 3,
      title: "Build the Middle Petals",
      instruction:
        "Add a second layer of petals around the first group. Make these petals slightly wider and allow their edges to turn outward.",
      image: "/images/flower-drawing/rose-drawing/rose-drawing-step-3.webp",
      alt: "Build the middle petals",
      tip: "Let some petals overlap from the front while others sit partly behind nearby shapes.",
      durationSeconds: 15,
    },
    {
      id: 4,
      title: "Add the Outer Petals",
      instruction:
        "Draw several larger petals around the middle section. These outer shapes should be broader and more open than the inner petals.",
      image: "/images/flower-drawing/rose-drawing/rose-drawing-step-4.webp",
      alt: "Add the outer petals",
      tip: "Vary petal size and direction so the bloom does not look too mechanical.",
      durationSeconds: 15,
    },
    {
      id: 5,
      title: "Refine the Petal Edges",
      instruction:
        "Review the petals and adjust any shapes that look too narrow, pointed, or crowded. Add gentle dips and curves along a few outer edges.",
      image: "/images/flower-drawing/rose-drawing/rose-drawing-step-5.webp",
      alt: "Refine the petal edges",
      tip: "Strengthen only the lines you want in the final outline.",
      durationSeconds: 14,
    },
    {
      id: 6,
      title: "Draw the Stem and Sepals",
      instruction:
        "From underneath the flower, add two close parallel lines to form the stem. At the base of the bloom, draw a few narrow pointed sepals.",
      image: "/images/flower-drawing/rose-drawing/rose-drawing-step-6.webp",
      alt: "Draw the stem and sepals",
      tip: "A slight curve in the stem usually looks more natural than a straight line.",
      durationSeconds: 13,
    },
    {
      id: 7,
      title: "Add Rose Leaves",
      instruction:
        "Draw one or two leaf stems extending from the main stem. Create each leaflet with a pointed tip and a slightly serrated outer edge.",
      image: "/images/flower-drawing/rose-drawing/rose-drawing-step-7.webp",
      alt: "Add rose leaves",
      tip: "For a beginner version, keep the leaf edges smooth.",
      durationSeconds: 14,
    },
    {
      id: 8,
      title: "Clean the Final Outline",
      instruction:
        "Look over the complete drawing and remove any remaining guidelines. Darken the most important edges while keeping inner petal details slightly lighter.",
      image: "/images/flower-drawing/rose-drawing/rose-drawing-step-8.webp",
      alt: "Clean the final outline",
      tip: "Erase gently so the paper stays clean and pencil lines do not smudge.",
      durationSeconds: 12,
    },
    {
      id: 9,
      title: "Add Light Shading",
      instruction:
        "Choose a general light direction before shading. Leave areas facing the light mostly white and add darker values beneath overlapping petals.",
      image: "/images/flower-drawing/rose-drawing/rose-drawing.webp",
      alt: "rose drawing",
      tip: "Soft graphite values and a few darker accents are enough to create depth.",
      durationSeconds: 16,
    },
  ],
};

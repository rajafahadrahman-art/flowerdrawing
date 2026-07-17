import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();

async function ensureDir(dir: string) {
  await fs.mkdir(dir, { recursive: true });
}

async function copy(src: string, dest: string) {
  await ensureDir(path.dirname(dest));
  await fs.copyFile(src, dest);
  console.log(`Copied ${path.relative(root, dest)}`);
}

type TutorialImageCopy = {
  sourceDir: string;
  publicDir: string;
  featuredFile: string;
};

const tutorialImages: TutorialImageCopy[] = [
  {
    sourceDir: "source-assets/rose-drawing",
    publicDir: "public/images/flower-drawing/rose-drawing",
    featuredFile: "rose-drawing.webp",
  },
  {
    sourceDir: "source-assets/tulip-drawing",
    publicDir: "public/images/flower-drawing/tulip-drawing",
    featuredFile: "tulip-drawing.webp",
  },
  {
    sourceDir: "source-assets/sunflower-drawing",
    publicDir: "public/images/flower-drawing/sunflower-drawing",
    featuredFile: "sunflower-drawing.webp",
  },
  {
    sourceDir: "source-assets/Hibiscus-flower-drawing",
    publicDir: "public/images/flower-drawing/hibiscus-flower-drawing",
    featuredFile: "hibiscus-flower-drawing.webp",
  },
  {
    sourceDir: "source-assets/lily-flower-drawing",
    publicDir: "public/images/flower-drawing/lily-flower-drawing",
    featuredFile: "lily-flower-drawing.webp",
  },
];

async function copyTutorialImages(config: TutorialImageCopy) {
  const sourceDir = path.join(root, config.sourceDir);
  const publicDir = path.join(root, config.publicDir);
  await ensureDir(publicDir);

  const files = (await fs.readdir(sourceDir))
    .filter(
      (file) =>
        file.endsWith(".webp") &&
        !file.includes("worksheet") &&
        !file.includes("content") &&
        !file.endsWith(".webp.webp"),
    )
    .sort((a, b) => {
      const na = Number(a.match(/step-(\d+)/)?.[1] ?? 999);
      const nb = Number(b.match(/step-(\d+)/)?.[1] ?? 999);
      if (a === config.featuredFile) return 1;
      if (b === config.featuredFile) return -1;
      return na - nb;
    });

  for (const file of files) {
    await copy(path.join(sourceDir, file), path.join(publicDir, file));
  }
}

async function main() {
  const copies: [string, string][] = [
    [
      "source-assets/flowerdrawings-logo.webp",
      "public/images/brand/flowerdrawings-logo.webp",
    ],
    [
      "source-assets/flower-drawing-hero.webp",
      "public/images/flower-drawing/home/flower-drawing-hero.webp",
    ],
    [
      "source-assets/flower-drawing-step-1.webp",
      "public/images/flower-drawing/home/flower-drawing-step-1.webp",
    ],
    [
      "source-assets/flower-drawing-step-2.webp",
      "public/images/flower-drawing/home/flower-drawing-step-2.webp",
    ],
    [
      "source-assets/flower-drawing-step-3.webp",
      "public/images/flower-drawing/home/flower-drawing-step-3.webp",
    ],
    [
      "source-assets/flower-drawing-step-4.webp",
      "public/images/flower-drawing/home/flower-drawing-step-4.webp",
    ],
    [
      "source-assets/flower-drawing-step-5.webp",
      "public/images/flower-drawing/home/flower-drawing-step-5.webp",
    ],
    [
      "source-assets/flower-drawing.webp",
      "public/images/flower-drawing/home/flower-drawing.webp",
    ],
    [
      "source-assets/homepagebanner2.webp",
      "public/images/flower-drawing/home/homepagebanner2.webp",
    ],
  ];

  // flower-drawing-step-7.webp is identical to flower-drawing.webp.
  // Reuse the featured public file; do not create a duplicate public copy.

  for (const [src, dest] of copies) {
    await copy(path.join(root, src), path.join(root, dest));
  }

  for (const tutorial of tutorialImages) {
    await copyTutorialImages(tutorial);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

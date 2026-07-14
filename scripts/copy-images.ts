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
  ];

  for (const [src, dest] of copies) {
    await copy(path.join(root, src), path.join(root, dest));
  }

  // Rose images: steps 1-8 + featured
  const roseDir = path.join(root, "source-assets/rose-drawing");
  const roseOut = path.join(root, "public/images/flower-drawing/rose-drawing");
  await ensureDir(roseOut);

  const roseFiles = (await fs.readdir(roseDir))
    .filter((f) => f.endsWith(".webp") && !f.includes("worksheet") && !f.includes("content"))
    .sort((a, b) => {
      const na = Number(a.match(/step-(\d+)/)?.[1] ?? 999);
      const nb = Number(b.match(/step-(\d+)/)?.[1] ?? 999);
      if (a === "rose-drawing.webp") return 1;
      if (b === "rose-drawing.webp") return -1;
      return na - nb;
    });

  for (const file of roseFiles) {
    // Only copy properly named .webp files (skip .webp.webp worksheets)
    if (file.endsWith(".webp.webp")) continue;
    await copy(path.join(roseDir, file), path.join(roseOut, file));
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

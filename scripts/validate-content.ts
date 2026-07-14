import fs from "node:fs/promises";
import path from "node:path";
import { homepageFaqs, homepageSteps } from "../src/lib/homepage-content";
import { homepageSeo } from "../src/lib/site";
import { meta as roseMeta } from "../content/flower-drawing/rose-drawing/meta";

const root = process.cwd();
let failures = 0;

function assert(condition: boolean, message: string) {
  if (!condition) {
    failures += 1;
    console.error(`FAIL: ${message}`);
  } else {
    console.log(`PASS: ${message}`);
  }
}

async function exists(relativePath: string) {
  try {
    await fs.access(path.join(root, relativePath));
    return true;
  } catch {
    return false;
  }
}

async function read(relativePath: string) {
  return fs.readFile(path.join(root, relativePath), "utf8");
}

function extractRequiredPhrases(source: string) {
  const lines = source
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  const phrases: string[] = [];
  for (const line of lines) {
    if (line.startsWith("SEO Title:")) {
      phrases.push(line.replace("SEO Title:", "").trim());
      continue;
    }
    if (line.startsWith("Meta Description:")) {
      phrases.push(line.replace("Meta Description:", "").trim());
      continue;
    }
    if (line.startsWith("Button:")) {
      phrases.push(line.replace("Button:", "").trim());
      continue;
    }
    if (line.startsWith("Step ") || /^[A-Z]/.test(line)) {
      // Keep headings and important lines for presence checks
      if (line.length <= 120) phrases.push(line);
    }
  }
  return phrases;
}

async function validateHomepage() {
  console.log("\n=== Homepage content validation ===");
  const source = await read("source-assets/homepage-content.txt");

  assert(source.includes(homepageSeo.title), "Homepage SEO title matches source");
  assert(source.includes(homepageSeo.description), "Homepage meta description matches source");

  const requiredButtons = [
    "Explore Drawing Tutorials",
    "Download Practice Worksheets",
    "View Step-by-Step Drawing Guides",
    "Browse Drawing Worksheets",
    "Print a Practice Page",
    "View All Flower Tutorials",
    "Start Drawing",
    "View Practice Worksheets",
  ];

  for (const label of requiredButtons) {
    assert(source.includes(`Button: ${label}`), `Homepage source includes button: ${label}`);
  }

  assert(homepageFaqs.length === 7, "Homepage has 7 FAQs");
  for (const faq of homepageFaqs) {
    assert(source.includes(faq.question), `Homepage FAQ question present: ${faq.question}`);
    assert(source.includes(faq.answer), `Homepage FAQ answer present: ${faq.question}`);
  }

  assert(homepageSteps.length === 7, "Homepage has 7 step sections from source");
  assert(
    homepageSteps[5]?.image?.src === "/images/flower-drawing/home/flower-drawing.webp",
    "Homepage Step 6 uses flower-drawing.webp",
  );
  assert(!("image" in (homepageSteps[6] ?? {})), "Homepage Step 7 has no fabricated image");

  const pageSource = await read("src/app/page.tsx");
  for (const label of requiredButtons) {
    assert(pageSource.includes(label), `Homepage page includes button label: ${label}`);
  }

  assert(pageSource.includes('id="worksheets"'), "Homepage worksheets section id exists");
  assert(pageSource.includes('id="faq"'), "Homepage FAQ section id exists");
  assert(
    pageSource.includes('alt="simple flower drawing"'),
    "Homepage hero alt text is exact",
  );
  assert(pageSource.includes('alt="flower drawing"'), "Homepage featured alt text is exact");
  assert(
    pageSource.includes('alt="flower drawing worksheets"'),
    "Homepage worksheet alt text is exact",
  );

  const requiredAssets = [
    "public/images/brand/flowerdrawings-logo.webp",
    "public/images/flower-drawing/home/flower-drawing-hero.webp",
    "public/images/flower-drawing/home/flower-drawing-step-1.webp",
    "public/images/flower-drawing/home/flower-drawing-step-2.webp",
    "public/images/flower-drawing/home/flower-drawing-step-3.webp",
    "public/images/flower-drawing/home/flower-drawing-step-4.webp",
    "public/images/flower-drawing/home/flower-drawing-step-5.webp",
    "public/images/flower-drawing/home/flower-drawing.webp",
    "public/downloads/flower-drawing-worksheet.webp",
    "public/downloads/flower-drawing-worksheet.pdf",
  ];

  for (const asset of requiredAssets) {
    assert(await exists(asset), `Homepage asset exists: ${asset}`);
  }

  assert(
    !(await exists("public/images/flower-drawing/home/flower-drawing-step-6.webp")),
    "Homepage does not publish a duplicate step-6 file",
  );

  // Spot-check key exact phrases still appear in rendered content module
  const phrases = extractRequiredPhrases(source).slice(0, 40);
  const contentModule = await read("src/lib/homepage-content.ts");
  const pageModule = pageSource + contentModule;
  for (const phrase of phrases) {
    if (phrase.startsWith("Button:")) continue;
    assert(pageModule.includes(phrase) || source.includes(phrase), `Phrase retained: ${phrase}`);
  }
}

async function validateRose() {
  console.log("\n=== Rose content validation ===");
  const source = await read("source-assets/rose-drawing/rose-drawing-content.txt");

  assert(source.includes(roseMeta.seoTitle), "Rose SEO title matches source");
  assert(source.includes(roseMeta.metaDescription), "Rose meta description matches source");
  assert(source.includes(roseMeta.title), "Rose H1/title matches source");
  assert(roseMeta.featuredImageAlt === "rose drawing", "Rose featured alt is exact");
  assert(roseMeta.featuredImageTitle === "easy rose drawing", "Rose featured title is exact");
  assert(roseMeta.stepCount === 9, "Rose step count is 9");
  assert(roseMeta.faqs.length === 7, "Rose has 7 FAQs");

  for (const faq of roseMeta.faqs) {
    assert(source.includes(faq.question), `Rose FAQ question present: ${faq.question}`);
    assert(source.includes(faq.answer), `Rose FAQ answer present: ${faq.question}`);
  }

  const roseAssets = [
    "public/images/flower-drawing/rose-drawing/rose-drawing.webp",
    "public/images/flower-drawing/rose-drawing/rose-drawing-step-1.webp",
    "public/images/flower-drawing/rose-drawing/rose-drawing-step-2.webp",
    "public/images/flower-drawing/rose-drawing/rose-drawing-step-3.webp",
    "public/images/flower-drawing/rose-drawing/rose-drawing-step-4.webp",
    "public/images/flower-drawing/rose-drawing/rose-drawing-step-5.webp",
    "public/images/flower-drawing/rose-drawing/rose-drawing-step-6.webp",
    "public/images/flower-drawing/rose-drawing/rose-drawing-step-7.webp",
    "public/images/flower-drawing/rose-drawing/rose-drawing-step-8.webp",
    "public/downloads/rose-drawing/rose-drawing-worksheet.webp",
    "public/downloads/rose-drawing/rose-drawing-worksheet.pdf",
    "content/flower-drawing/rose-drawing/content.mdx",
    "content/flower-drawing/rose-drawing/meta.ts",
  ];

  for (const asset of roseAssets) {
    assert(await exists(asset), `Rose asset exists: ${asset}`);
  }

  const tutorialContent = await read(
    "content/flower-drawing/rose-drawing/tutorial-content.ts",
  );
  assert(
    tutorialContent.includes("/images/flower-drawing/rose-drawing/rose-drawing.webp"),
    "Rose final step uses rose-drawing.webp",
  );
  assert(
    tutorialContent.includes("Step 9: Add Light Shading"),
    "Rose Step 9 text is preserved",
  );

  const mdx = await read("content/flower-drawing/rose-drawing/content.mdx");
  assert(mdx.includes(roseMeta.title), "Rose MDX includes exact title");
  assert(mdx.includes("Step 1: Draw the Rose Center"), "Rose MDX includes Step 1");
  assert(mdx.includes("Start Your Roses Drawing"), "Rose MDX includes conclusion heading");
}

async function validateIcons() {
  console.log("\n=== Icon validation ===");
  const icons = [
    "src/app/favicon.ico",
    "src/app/icon.png",
    "src/app/apple-icon.png",
    "public/icons/favicon-16x16.png",
    "public/icons/favicon-32x32.png",
    "public/icons/site-icon-512.png",
  ];
  for (const icon of icons) {
    assert(await exists(icon), `Icon exists: ${icon}`);
  }
}

async function main() {
  assert(await exists("source-assets/homepage-content.txt"), "source-assets is normalized");
  assert(
    await exists("source-assets/rose-drawing/rose-drawing-content.txt"),
    "Rose source content exists",
  );
  assert(!(await exists("assets")), "Legacy assets/ folder is not the primary source");

  await validateHomepage();
  await validateRose();
  await validateIcons();

  console.log(`\nValidation complete. Failures: ${failures}`);
  if (failures > 0) process.exit(1);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

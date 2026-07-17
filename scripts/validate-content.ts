import fs from "node:fs/promises";
import path from "node:path";
import { homepageFaqs, homepageSteps } from "../src/lib/homepage-content";
import { homepageSeo } from "../src/lib/site";
import { meta as hibiscusMeta } from "../content/flower-drawing/hibiscus-flower-drawing/meta";
import { meta as lilyMeta } from "../content/flower-drawing/lily-flower-drawing/meta";
import { meta as roseMeta } from "../content/flower-drawing/rose-drawing/meta";
import { meta as sunflowerMeta } from "../content/flower-drawing/sunflower-drawing/meta";
import { meta as tulipMeta } from "../content/flower-drawing/tulip-drawing/meta";
import { getWorksheetCollection } from "../src/lib/worksheets/get-worksheets";
import { tutorialOrder } from "../src/lib/tutorials/get-tutorials";

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

function parseSourceMeta(source: string) {
  const focus =
    source.match(/^Focus Keyword:\s*(.+)$/m)?.[1]?.trim() ??
    source.match(/^Focus keyword:\s*(.+)$/m)?.[1]?.trim() ??
    "";
  const seoTitle =
    source.match(/^SEO Title:\s*(.+)$/m)?.[1]?.trim() ??
    source.match(/^Meta Title\s*\n\s*(.+)$/m)?.[1]?.trim() ??
    "";
  const metaDescription =
    source.match(/^Meta Description:\s*(.+)$/m)?.[1]?.trim() ??
    source.match(/^Meta Description\s*\n\s*(.+)$/m)?.[1]?.trim() ??
    "";
  return { focus, seoTitle, metaDescription };
}

async function validateHomepage() {
  console.log("\n=== Homepage content validation ===");
  const source = await read("source-assets/homepage-content.txt");

  assert(source.includes(homepageSeo.title), "Homepage SEO title matches source");
  assert(source.includes(homepageSeo.description), "Homepage meta description matches source");

  const sourceButtons = [
    "Explore Drawing Tutorials",
    "Download Practice Worksheets",
    "View Step-by-Step Drawing Guides",
    "Browse Drawing Worksheets",
    "Print a Practice Page",
    "View All Flower Tutorials",
    "Start Drawing",
    "View Practice Worksheets",
  ];

  for (const label of sourceButtons) {
    assert(source.includes(`Button: ${label}`), `Homepage source includes button: ${label}`);
  }

  const pageButtons = [
    "Explore Drawing Tutorials",
    "Download Practice Worksheets",
    "View Step-by-Step Drawing Guides",
    "Download Free Worksheet",
    "Print Now",
    "Browse Drawing Worksheets",
    "View All Flower Tutorials",
    "Start Drawing",
    "View Practice Worksheets",
  ];

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
  assert(
    homepageSteps[6]?.image?.src === "/images/flower-drawing/home/flower-drawing.webp",
    "Homepage Step 7 reuses featured flower-drawing.webp (identical artwork)",
  );
  assert(
    homepageSteps[6]?.image?.alt === "flower drawing" &&
      homepageSteps[6]?.image?.title === "flower drawing easy",
    "Homepage Step 7 uses featured image SEO values",
  );

  const pageSource = await read("src/app/page.tsx");
  for (const label of pageButtons) {
    assert(pageSource.includes(label), `Homepage page includes button label: ${label}`);
  }

  assert(pageSource.includes('href="/worksheets/"'), "Homepage links to /worksheets/");
  assert(
    pageSource.includes("Download Practice Worksheets") &&
      pageSource.includes('href="/worksheets/"'),
    "Download Practice Worksheets points toward worksheets collection",
  );
  assert(pageSource.includes("Table of Contents"), "Homepage includes Table of Contents");
  assert(
    pageSource.includes("defaultOpen={false}"),
    "Homepage TOC starts collapsed",
  );
  assert(
    pageSource.includes("DrawAlongLauncher") &&
      pageSource.includes("getFlowerDrawingTutorial"),
    "Homepage includes Flower Drawing Draw Along launcher",
  );
  assert(
    pageSource.includes('href="/tools/draw-along/"'),
    "Homepage Draw Along category card links to /tools/draw-along/",
  );
  assert(pageSource.includes("homepagebanner2.webp"), "Homepage includes homepagebanner2.webp");

  const homepageTutorialLinks: [string, string][] = [
    ["rose drawing", "/flower-drawing/rose-drawing/"],
    ["tulip drawing", "/flower-drawing/tulip-drawing/"],
    ["sunflower drawing", "/flower-drawing/sunflower-drawing/"],
    ["hibiscus flower drawing", "/flower-drawing/hibiscus-flower-drawing/"],
    ["lily flower drawing", "/flower-drawing/lily-flower-drawing/"],
  ];
  for (const [anchor, href] of homepageTutorialLinks) {
    assert(
      pageSource.includes(anchor) && pageSource.includes(`href="${href}"`),
      `Homepage links to ${href} with anchor context for ${anchor}`,
    );
  }

  assert(
    pageSource.includes('alt="easy flower drawing"') &&
      pageSource.includes('title="simple flower drawing"'),
    "Homepage banner 1 / hero image SEO is exact",
  );
  assert(
    pageSource.includes('alt="flower drawing easy and beautiful"') &&
      pageSource.includes('title="flower drawing simple"'),
    "Homepage banner 2 image SEO is exact",
  );
  assert(
    pageSource.includes('alt="flower drawing"') &&
      pageSource.includes('title="flower drawing easy"'),
    "Homepage featured image SEO is exact",
  );

  const tocSource = await read("src/components/tutorial/TableOfContents.tsx");
  assert(tocSource.includes("defaultOpen"), "TOC supports defaultOpen prop");
  assert(tocSource.includes("<details"), "TOC uses details element");
  assert(tocSource.includes("<summary"), "TOC uses summary element");
  assert(tocSource.includes("Table of Contents"), "TOC summary text is Table of Contents");

  const articleSource = await read("src/components/tutorial/TutorialArticle.tsx");
  assert(
    articleSource.includes("defaultOpen={false}"),
    "Tutorial TOC starts collapsed",
  );

  const globals = await read("src/app/globals.css");
  assert(globals.includes("scroll-margin-top"), "TOC target scroll-margin is defined");
  assert(globals.includes(":target"), "TOC target highlight styles exist");

  assert(
    pageSource.includes("<AboutAuthor") || pageSource.includes("AboutAuthor"),
    "Homepage includes About the Author section",
  );

  const footerSource = await read("src/components/layout/Footer.tsx");
  assert(!footerSource.includes("{siteConfig.email}"), "Footer does not render visible raw email");
  assert(
    !footerSource.includes("ale298784@gmail.com"),
    "Footer source does not hardcode visible email",
  );

  const siteSource = await read("src/lib/site.ts");
  assert(siteSource.includes('href: "/worksheets/"'), "Nav Worksheets link goes to /worksheets/");
  assert(siteSource.includes("FlowerDrawings.org"), "siteConfig brand is FlowerDrawings.org");
  assert(
    siteSource.includes("https://flowerdrawings.org"),
    "siteConfig URL uses flowerdrawings.org",
  );
  assert(
    !siteSource.toLowerCase().includes("flowerdrawings.com"),
    "siteConfig does not use flowerdrawings.com",
  );

  const headerSource = await read("src/components/layout/Header.tsx");
  assert(
    headerSource.includes('href="/worksheets/"'),
    "Header Worksheets button links to /worksheets/",
  );
  assert(
    headerSource.includes('href="/tools/draw-along/"') &&
      headerSource.includes("Draw Along"),
    "Header includes Draw Along button before Worksheets",
  );

  const requiredAssets = [
    "public/images/brand/flowerdrawings-logo.webp",
    "public/images/flower-drawing/home/flower-drawing-hero.webp",
    "public/images/flower-drawing/home/flower-drawing.webp",
    "public/images/flower-drawing/home/homepagebanner2.webp",
    "public/downloads/flower-drawing-worksheet.webp",
    "public/downloads/flower-drawing-worksheet.pdf",
  ];
  for (const asset of requiredAssets) {
    assert(await exists(asset), `Homepage asset exists: ${asset}`);
  }
}

type TutorialCheck = {
  slug: string;
  sourcePath: string;
  meta: typeof roseMeta;
  stepCount: number;
  finalStepTitleIncludes: string;
  featuredFile: string;
  featuredImageAlt: string;
  featuredImageTitle: string;
  hasWorksheet: boolean;
};

async function validateTutorial(check: TutorialCheck) {
  console.log(`\n=== ${check.slug} validation ===`);
  const source = await read(check.sourcePath);
  const parsed = parseSourceMeta(source);

  if (parsed.focus) {
    assert(
      check.meta.focusKeyword === parsed.focus,
      `${check.slug} focus keyword matches source`,
    );
  } else {
    assert(
      Boolean(check.meta.focusKeyword) &&
        source.toLowerCase().includes(check.meta.focusKeyword.toLowerCase()),
      `${check.slug} focus keyword is present in source content`,
    );
  }
  assert(check.meta.seoTitle === parsed.seoTitle, `${check.slug} SEO title matches source`);
  assert(
    check.meta.metaDescription === parsed.metaDescription,
    `${check.slug} meta description matches source`,
  );
  assert(
    check.meta.featuredImageAlt === check.featuredImageAlt,
    `${check.slug} featured alt matches approved image SEO`,
  );
  assert(
    check.meta.featuredImageTitle === check.featuredImageTitle,
    `${check.slug} featured title matches approved image SEO`,
  );
  assert(check.meta.stepCount === check.stepCount, `${check.slug} step count is ${check.stepCount}`);
  assert(
    check.meta.featuredImage === `/images/flower-drawing/${check.slug}/${check.featuredFile}`,
    `${check.slug} featured image path is correct`,
  );
  if (check.hasWorksheet) {
    assert(
      check.meta.worksheetPDF === `/downloads/${check.slug}/${check.slug}-worksheet.pdf`,
      `${check.slug} worksheet PDF path is correct`,
    );
  } else {
    assert(!check.meta.worksheetPDF, `${check.slug} has no worksheet PDF`);
    assert(!check.meta.worksheetImage, `${check.slug} has no worksheet image`);
  }

  for (const faq of check.meta.faqs) {
    assert(source.includes(faq.question), `${check.slug} FAQ question present: ${faq.question}`);
    assert(source.includes(faq.answer), `${check.slug} FAQ answer present: ${faq.question}`);
  }

  const contentDir = `content/flower-drawing/${check.slug}`;
  assert(await exists(`${contentDir}/meta.ts`), `${check.slug} meta.ts exists`);
  assert(await exists(`${contentDir}/content.mdx`), `${check.slug} content.mdx exists`);
  assert(
    (await exists(`${contentDir}/tutorial-content.ts`)) ||
      (await exists(`${contentDir}/body.ts`)),
    `${check.slug} structured tutorial content exists`,
  );

  const publicImages = `public/images/flower-drawing/${check.slug}`;
  assert(
    await exists(`${publicImages}/${check.featuredFile}`),
    `${check.slug} featured image exists`,
  );
  for (let step = 1; step < check.stepCount; step += 1) {
    assert(
      await exists(`${publicImages}/${check.slug}-step-${step}.webp`),
      `${check.slug} step ${step} image exists`,
    );
  }
  assert(
    !(await exists(`${publicImages}/${check.slug}-step-${check.stepCount}.webp`)),
    `${check.slug} does not duplicate final step as step-${check.stepCount}.webp`,
  );
  if (check.hasWorksheet) {
    assert(
      await exists(`public/downloads/${check.slug}/${check.slug}-worksheet.webp`),
      `${check.slug} worksheet webp exists`,
    );
    assert(
      await exists(`public/downloads/${check.slug}/${check.slug}-worksheet.pdf`),
      `${check.slug} worksheet pdf exists`,
    );
  }

  const tutorialContent = await read(
    (await exists(`${contentDir}/tutorial-content.ts`))
      ? `${contentDir}/tutorial-content.ts`
      : `${contentDir}/body.ts`,
  );
  assert(
    tutorialContent.includes(`/images/flower-drawing/${check.slug}/${check.featuredFile}`),
    `${check.slug} final step uses featured image`,
  );
  assert(
    tutorialContent.includes(check.finalStepTitleIncludes),
    `${check.slug} final step title preserved`,
  );
  assert(
    tutorialContent.includes("[flower drawing](/)"),
    `${check.slug} includes homepage flower drawing link`,
  );
  assert(
    /\]\(\/flower-drawing\/[a-z0-9-]+\/\)/.test(tutorialContent),
    `${check.slug} includes related tutorial link`,
  );
  assert(
    !tutorialContent.includes(`](/flower-drawing/${check.slug}/)`),
    `${check.slug} does not self-link`,
  );
  assert(
    !tutorialContent.toLowerCase().includes("flowerdrawings.com") &&
      !tutorialContent.toLowerCase().includes("drawings.com"),
    `${check.slug} does not use obsolete domains`,
  );

  const mdx = await read(`${contentDir}/content.mdx`);
  assert(
    mdx.includes(check.meta.title) || mdx.includes(parsed.seoTitle) || mdx.length > 100,
    `${check.slug} MDX has content`,
  );
}

async function validateInternalLinks() {
  console.log("\n=== Internal link validation ===");
  const slugSet = new Set<string>(tutorialOrder);
  const contentFiles = [
    "content/flower-drawing/rose-drawing/tutorial-content.ts",
    "content/flower-drawing/rose-drawing/body.ts",
    "content/flower-drawing/tulip-drawing/tutorial-content.ts",
    "content/flower-drawing/sunflower-drawing/tutorial-content.ts",
    "content/flower-drawing/hibiscus-flower-drawing/tutorial-content.ts",
    "content/flower-drawing/lily-flower-drawing/tutorial-content.ts",
    "src/app/page.tsx",
    "src/components/layout/Header.tsx",
  ];

  for (const file of contentFiles) {
    if (!(await exists(file))) continue;
    const text = await read(file);
    const hrefs = [...text.matchAll(/href=["']([^"']+)["']/g)].map((match) => match[1]);
    const mdLinks = [...text.matchAll(/\]\((\/[^)]+)\)/g)].map((match) => match[1]);
    for (const href of [...hrefs, ...mdLinks]) {
      if (!href.startsWith("/")) continue;
      if (href.startsWith("/#") || href === "/") continue;
      if (href.startsWith("/downloads/")) {
        assert(await exists(`public${href.split("?")[0]}`), `Download exists for ${href} in ${file}`);
        continue;
      }
      if (href.startsWith("/images/")) {
        assert(await exists(`public${href.split("?")[0]}`), `Image exists for ${href} in ${file}`);
        continue;
      }
      if (href.startsWith("/flower-drawing/") && href !== "/flower-drawing/") {
        const slug = href.replace(/^\/flower-drawing\//, "").replace(/\/$/, "");
        assert(slugSet.has(slug), `Tutorial slug ${slug} from ${file} is registered`);
        assert(href.endsWith("/"), `Tutorial link ${href} in ${file} uses trailing slash`);
        continue;
      }
      assert(
        !href.includes("flowerdrawings.com") && !href.includes("vercel.app"),
        `Link ${href} in ${file} avoids preview/obsolete domains`,
      );
    }
  }
}

async function validateWorksheets() {
  console.log("\n=== Worksheet collection validation ===");
  assert(await exists("src/app/worksheets/page.tsx"), "Worksheets page exists");
  const page = await read("src/app/worksheets/page.tsx");
  assert(
    page.includes("Printable Flower Drawing Worksheets | FlowerDrawings.org"),
    "Worksheets SEO title is exact",
  );
  assert(
    page.includes(
      "Browse free printable flower drawing worksheets for rose, tulip, sunflower, hibiscus, and beginner flower drawing practice.",
    ),
    "Worksheets meta description is exact",
  );
  assert(page.includes('canonical: "/worksheets/"'), "Worksheets canonical is /worksheets/");
  assert(page.includes("CollectionPage"), "Worksheets schema includes CollectionPage");
  assert(page.includes("ItemList"), "Worksheets schema includes ItemList");

  const worksheets = await getWorksheetCollection();
  assert(
    worksheets.length === 5,
    "Worksheet collection includes homepage + 4 tutorials with worksheets",
  );
  const ids = worksheets.map((item) => item.id);
  for (const id of [
    "flower-drawing",
    "rose-drawing",
    "tulip-drawing",
    "sunflower-drawing",
    "hibiscus-flower-drawing",
  ]) {
    assert(ids.includes(id), `Worksheet collection includes ${id}`);
  }
  assert(!ids.includes("lily-flower-drawing"), "Lily without worksheet is excluded from collection");

  const sitemap = await read("src/app/sitemap.ts");
  assert(sitemap.includes("/worksheets/"), "Sitemap includes /worksheets/");
  assert(
    !sitemap.includes("/privacy-policy/") || sitemap.includes("noIndexImportantPaths"),
    "Legal pages remain excluded via filter",
  );
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

async function validateRegistry() {
  console.log("\n=== Tutorial registry validation ===");
  const registry = await read("src/lib/tutorials/get-tutorials.ts");
  const bodyRegistry = await read("src/lib/tutorials/get-tutorial-body.ts");
  for (const slug of tutorialOrder) {
    assert(registry.includes(slug), `Registry references ${slug}`);
    assert(bodyRegistry.includes(slug), `Body registry references ${slug}`);
  }
  assert(tutorialOrder.length === 5, "Exactly five genuine tutorials are registered");
  assert(
    tutorialOrder.includes("lily-flower-drawing"),
    "Lily is included in tutorialOrder",
  );
}

async function main() {
  assert(await exists("source-assets/homepage-content.txt"), "source-assets is normalized");
  assert(
    await exists("source-assets/rose-drawing/rose-drawing-content.txt"),
    "Rose source content exists",
  );
  assert(
    await exists("source-assets/tulip-drawing/tulip-drawing-content.txt"),
    "Tulip source content exists",
  );
  assert(
    await exists("source-assets/sunflower-drawing/sunflower-drawing-content.txt"),
    "Sunflower source content exists",
  );
  assert(
    await exists("source-assets/Hibiscus-flower-drawing/hibiscus-flower-drawing-content.txt"),
    "Hibiscus source content exists",
  );
  assert(
    await exists("source-assets/lily-flower-drawing/lily-flower-drawing-content.txt"),
    "Lily source content exists",
  );
  assert(!(await exists("assets")), "Legacy assets/ folder is not the primary source");

  await validateHomepage();
  await validateTutorial({
    slug: "rose-drawing",
    sourcePath: "source-assets/rose-drawing/rose-drawing-content.txt",
    meta: roseMeta,
    stepCount: 9,
    finalStepTitleIncludes: "Step 9: Add Light Shading",
    featuredFile: "rose-drawing.webp",
    featuredImageAlt: "rose drawing",
    featuredImageTitle: "rose drawing easy",
    hasWorksheet: true,
  });
  await validateTutorial({
    slug: "tulip-drawing",
    sourcePath: "source-assets/tulip-drawing/tulip-drawing-content.txt",
    meta: tulipMeta,
    stepCount: 8,
    finalStepTitleIncludes: "Step 8: Refine, Shade, or Color",
    featuredFile: "tulip-drawing.webp",
    featuredImageAlt: "tulip drawing",
    featuredImageTitle: "tulip drawing easy",
    hasWorksheet: true,
  });
  await validateTutorial({
    slug: "sunflower-drawing",
    sourcePath: "source-assets/sunflower-drawing/sunflower-drawing-content.txt",
    meta: sunflowerMeta,
    stepCount: 9,
    finalStepTitleIncludes: "Step 9: Add Shading and Texture",
    featuredFile: "sunflower-drawing.webp",
    featuredImageAlt: "sunflower drawing",
    featuredImageTitle: "sunflower drawing easy",
    hasWorksheet: true,
  });
  await validateTutorial({
    slug: "hibiscus-flower-drawing",
    sourcePath:
      "source-assets/Hibiscus-flower-drawing/hibiscus-flower-drawing-content.txt",
    meta: hibiscusMeta,
    stepCount: 9,
    finalStepTitleIncludes: "Step 9: Add Shading or Color",
    featuredFile: "hibiscus-flower-drawing.webp",
    featuredImageAlt: "hibiscus flower drawing",
    featuredImageTitle: "hibiscus flower drawing easy",
    hasWorksheet: true,
  });
  await validateTutorial({
    slug: "lily-flower-drawing",
    sourcePath: "source-assets/lily-flower-drawing/lily-flower-drawing-content.txt",
    meta: lilyMeta,
    stepCount: 8,
    finalStepTitleIncludes: "Step 8: Refine and Finish the Drawing",
    featuredFile: "lily-flower-drawing.webp",
    featuredImageAlt: "lily flower drawing",
    featuredImageTitle: "lily flower drawing easy",
    hasWorksheet: false,
  });
  await validateInternalLinks();
  await validateWorksheets();
  await validateRegistry();
  await validateIcons();

  console.log(`\nValidation complete. Failures: ${failures}`);
  if (failures > 0) process.exit(1);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

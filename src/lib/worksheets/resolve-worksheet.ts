import { access } from "node:fs/promises";
import path from "node:path";
import { FLOWER_DRAWING_SLUG } from "@/lib/draw-along/types";
import { getTutorialMeta } from "@/lib/tutorials/get-tutorials";

/** Strict slug pattern — rejects path traversal and arbitrary strings. */
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const MIME_BY_EXTENSION: Record<string, string> = {
  ".webp": "image/webp",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".pdf": "application/pdf",
};

const HOMEPAGE_WORKSHEET = {
  slug: FLOWER_DRAWING_SLUG,
  worksheetImage: "/downloads/flower-drawing-worksheet.webp",
  worksheetPDF: "/downloads/flower-drawing-worksheet.pdf",
  imageAlt: "flower drawing worksheets",
  imageTitle: "download practice worksheets",
} as const;

export type ResolvedWorksheet = {
  slug: string;
  /** Public URL path of the file served for download (original bytes). */
  publicUrl: string;
  /** Absolute filesystem path under `public/`. */
  absolutePath: string;
  /** Descriptive attachment filename preserving the original extension. */
  downloadFilename: string;
  mimeType: string;
  /** Public URL used for print preview (prefer image over PDF). */
  printSrc: string;
  imageAlt: string;
  imageTitle: string;
};

function isSafePublicAssetUrl(value: string): boolean {
  if (!value.startsWith("/downloads/") || value.includes("..") || value.includes("\\")) {
    return false;
  }
  // Disallow query/hash and encoded traversal.
  if (value.includes("?") || value.includes("#") || value.includes("%")) {
    return false;
  }
  return true;
}

function extensionOf(publicUrl: string): string {
  return path.extname(publicUrl).toLowerCase();
}

function mimeTypeFor(publicUrl: string): string | null {
  return MIME_BY_EXTENSION[extensionOf(publicUrl)] ?? null;
}

function downloadFilenameFor(slug: string, publicUrl: string): string {
  const ext = extensionOf(publicUrl);
  if (!ext) return `${slug}-worksheet`;
  return `${slug}-worksheet${ext}`;
}

async function fileExists(absolutePath: string): Promise<boolean> {
  try {
    await access(absolutePath);
    return true;
  } catch {
    return false;
  }
}

/**
 * Resolve a registered worksheet by tutorial (or homepage) slug.
 * Only paths declared in the shared tutorial/homepage worksheet data are allowed.
 */
export async function resolveWorksheetBySlug(
  rawSlug: string,
): Promise<ResolvedWorksheet | null> {
  if (typeof rawSlug !== "string") return null;
  const slug = rawSlug.trim().toLowerCase();
  if (!SLUG_PATTERN.test(slug)) return null;

  let worksheetImage = "";
  let worksheetPDF = "";
  let imageAlt = `${slug} worksheet`;
  let imageTitle = `download ${slug} worksheet`;

  if (slug === HOMEPAGE_WORKSHEET.slug) {
    worksheetImage = HOMEPAGE_WORKSHEET.worksheetImage;
    worksheetPDF = HOMEPAGE_WORKSHEET.worksheetPDF;
    imageAlt = HOMEPAGE_WORKSHEET.imageAlt;
    imageTitle = HOMEPAGE_WORKSHEET.imageTitle;
  } else {
    const meta = await getTutorialMeta(slug);
    if (!meta) return null;
    worksheetImage = meta.worksheetImage?.trim() ?? "";
    worksheetPDF = meta.worksheetPDF?.trim() ?? "";
    if (meta.focusKeyword) {
      imageAlt = `${meta.focusKeyword} worksheet`;
      imageTitle = `download ${meta.focusKeyword.toLowerCase()} worksheet`;
    }
  }

  // Prefer the worksheet image for download/print; fall back to PDF when needed.
  const candidates = [worksheetImage, worksheetPDF].filter(
    (value) => value.length > 0 && isSafePublicAssetUrl(value),
  );
  if (candidates.length === 0) return null;

  const publicDir = path.resolve(process.cwd(), "public");

  for (const publicUrl of candidates) {
    const relative = publicUrl.replace(/^\//, "");
    const absolutePath = path.resolve(publicDir, relative);
    if (!absolutePath.startsWith(publicDir + path.sep)) continue;

    const mimeType = mimeTypeFor(publicUrl);
    if (!mimeType) continue;
    if (!(await fileExists(absolutePath))) continue;

    const printSrc =
      worksheetImage &&
      isSafePublicAssetUrl(worksheetImage) &&
      (await fileExists(path.resolve(publicDir, worksheetImage.replace(/^\//, ""))))
        ? worksheetImage
        : publicUrl;

    return {
      slug,
      publicUrl,
      absolutePath,
      downloadFilename: downloadFilenameFor(slug, publicUrl),
      mimeType,
      printSrc,
      imageAlt,
      imageTitle,
    };
  }

  return null;
}

export function worksheetDownloadPath(slug: string): string {
  return `/api/worksheets/${slug}/`;
}

export function worksheetPrintPath(slug: string): string {
  return `/print/worksheet/${slug}/`;
}

export function isValidWorksheetSlug(rawSlug: string): boolean {
  return typeof rawSlug === "string" && SLUG_PATTERN.test(rawSlug.trim().toLowerCase());
}

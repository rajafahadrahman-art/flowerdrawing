import fs from "node:fs/promises";
import path from "node:path";
import { PDFDocument } from "pdf-lib";
import sharp from "sharp";

const root = process.cwd();

const worksheets = [
  {
    source: "source-assets/flower-drawing-worksheet.webp",
    webpOut: "public/downloads/flower-drawing-worksheet.webp",
    pdfOut: "public/downloads/flower-drawing-worksheet.pdf",
  },
  {
    source: "source-assets/rose-drawing/rose-drawing-worksheet.webp.webp",
    webpOut: "public/downloads/rose-drawing/rose-drawing-worksheet.webp",
    pdfOut: "public/downloads/rose-drawing/rose-drawing-worksheet.pdf",
  },
];

async function ensureDir(dir: string) {
  await fs.mkdir(dir, { recursive: true });
}

async function generatePdf(sourcePath: string, pdfOut: string) {
  const image = sharp(sourcePath);
  const meta = await image.metadata();
  if (!meta.width || !meta.height) {
    throw new Error(`Unable to read dimensions for ${sourcePath}`);
  }

  // Embed as PNG for reliable pdf-lib support
  const pngBuffer = await image.png().toBuffer();

  const pdfDoc = await PDFDocument.create();
  // A4 portrait in points (1 point = 1/72 inch). A4 = 210mm x 297mm
  const pageWidth = 595.28;
  const pageHeight = 841.89;
  const page = pdfDoc.addPage([pageWidth, pageHeight]);

  const embedded = await pdfDoc.embedPng(pngBuffer);
  const margin = 36; // 0.5 inch
  const maxWidth = pageWidth - margin * 2;
  const maxHeight = pageHeight - margin * 2;
  const scale = Math.min(maxWidth / embedded.width, maxHeight / embedded.height);
  const drawWidth = embedded.width * scale;
  const drawHeight = embedded.height * scale;
  const x = (pageWidth - drawWidth) / 2;
  const y = (pageHeight - drawHeight) / 2;

  page.drawRectangle({
    x: 0,
    y: 0,
    width: pageWidth,
    height: pageHeight,
    color: undefined,
  });

  page.drawImage(embedded, {
    x,
    y,
    width: drawWidth,
    height: drawHeight,
  });

  const pdfBytes = await pdfDoc.save();
  await ensureDir(path.dirname(pdfOut));
  await fs.writeFile(pdfOut, pdfBytes);
  console.log(`Wrote ${pdfOut}`);
}

async function main() {
  for (const item of worksheets) {
    const source = path.join(root, item.source);
    const webpOut = path.join(root, item.webpOut);
    const pdfOut = path.join(root, item.pdfOut);

    await ensureDir(path.dirname(webpOut));
    await fs.copyFile(source, webpOut);
    console.log(`Copied ${item.webpOut}`);
    await generatePdf(source, pdfOut);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const logoPath = path.join(root, "source-assets/flowerdrawings-logo.webp");

async function ensureDir(dir: string) {
  await fs.mkdir(dir, { recursive: true });
}

async function writePng(size: number, outPath: string) {
  await sharp(logoPath)
    .resize(size, size, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png()
    .toFile(outPath);
  console.log(`Wrote ${outPath}`);
}

async function writeIco() {
  // Multi-size ICO via PNG buffers packaged as ICO
  const sizes = [16, 32, 48];
  const pngBuffers = await Promise.all(
    sizes.map((size) =>
      sharp(logoPath)
        .resize(size, size, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } })
        .png()
        .toBuffer(),
    ),
  );

  const outPath = path.join(root, "src/app/favicon.ico");
  await ensureDir(path.dirname(outPath));

  // Build a simple ICO file with embedded PNGs
  const headerSize = 6;
  const dirEntrySize = 16;
  const dirSize = headerSize + dirEntrySize * pngBuffers.length;
  let offset = dirSize;
  const entries: { size: number; width: number; height: number; offset: number }[] = [];

  for (let i = 0; i < pngBuffers.length; i++) {
    const buf = pngBuffers[i];
    const size = sizes[i];
    entries.push({ size: buf.length, width: size, height: size, offset });
    offset += buf.length;
  }

  const ico = Buffer.alloc(offset);
  ico.writeUInt16LE(0, 0); // reserved
  ico.writeUInt16LE(1, 2); // type icon
  ico.writeUInt16LE(pngBuffers.length, 4);

  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    const pos = headerSize + i * dirEntrySize;
    ico.writeUInt8(entry.width >= 256 ? 0 : entry.width, pos);
    ico.writeUInt8(entry.height >= 256 ? 0 : entry.height, pos + 1);
    ico.writeUInt8(0, pos + 2); // color count
    ico.writeUInt8(0, pos + 3); // reserved
    ico.writeUInt16LE(1, pos + 4); // planes
    ico.writeUInt16LE(32, pos + 6); // bit count
    ico.writeUInt32LE(entry.size, pos + 8);
    ico.writeUInt32LE(entry.offset, pos + 12);
  }

  let writeOffset = dirSize;
  for (const buf of pngBuffers) {
    buf.copy(ico, writeOffset);
    writeOffset += buf.length;
  }

  await fs.writeFile(outPath, ico);
  console.log(`Wrote ${outPath}`);
}

async function main() {
  await ensureDir(path.join(root, "src/app"));
  await ensureDir(path.join(root, "public/icons"));

  await writePng(32, path.join(root, "src/app/icon.png"));
  await writePng(180, path.join(root, "src/app/apple-icon.png"));
  await writePng(16, path.join(root, "public/icons/favicon-16x16.png"));
  await writePng(32, path.join(root, "public/icons/favicon-32x32.png"));
  await writePng(512, path.join(root, "public/icons/site-icon-512.png"));
  await writeIco();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

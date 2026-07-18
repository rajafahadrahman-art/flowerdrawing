import { readFile } from "node:fs/promises";
import { NextResponse } from "next/server";
import {
  isValidWorksheetSlug,
  resolveWorksheetBySlug,
} from "@/lib/worksheets/resolve-worksheet";

type RouteContext = {
  params: Promise<{ slug: string }>;
};

export async function GET(_request: Request, context: RouteContext) {
  const { slug: rawSlug } = await context.params;

  if (!isValidWorksheetSlug(rawSlug)) {
    return new NextResponse("Not Found", { status: 404 });
  }

  const worksheet = await resolveWorksheetBySlug(rawSlug);
  if (!worksheet) {
    return new NextResponse("Not Found", { status: 404 });
  }

  try {
    const bytes = await readFile(worksheet.absolutePath);

    return new NextResponse(bytes, {
      status: 200,
      headers: {
        "Content-Type": worksheet.mimeType,
        "Content-Length": String(bytes.byteLength),
        "Content-Disposition": `attachment; filename="${worksheet.downloadFilename}"`,
        "Cache-Control": "public, max-age=31536000, immutable",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return new NextResponse("Not Found", { status: 404 });
  }
}

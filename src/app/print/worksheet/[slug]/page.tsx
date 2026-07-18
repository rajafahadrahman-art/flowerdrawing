import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WorksheetPrintView } from "@/components/worksheets/WorksheetPrintView";
import { FLOWER_DRAWING_SLUG } from "@/lib/draw-along/types";
import {
  isValidWorksheetSlug,
  resolveWorksheetBySlug,
} from "@/lib/worksheets/resolve-worksheet";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: "Print Worksheet",
    robots: {
      index: false,
      follow: false,
    },
    alternates: {
      canonical: `/print/worksheet/${slug}/`,
    },
  };
}

export default async function WorksheetPrintPage({ params }: PageProps) {
  const { slug: rawSlug } = await params;

  if (!isValidWorksheetSlug(rawSlug)) {
    notFound();
  }

  const worksheet = await resolveWorksheetBySlug(rawSlug);
  if (!worksheet) {
    return (
      <div className="worksheet-print" data-worksheet-print="">
        <div className="worksheet-print__controls">
          <p className="worksheet-print__hint">This worksheet is currently unavailable.</p>
          <div className="worksheet-print__actions">
            <a href="/worksheets/" className="btn btn-ghost">
              Return to Worksheets
            </a>
          </div>
        </div>
        <div className="worksheet-print__sheet">
          <p className="worksheet-print__missing">
            Sorry, no printable worksheet was found for this tutorial.
          </p>
        </div>
      </div>
    );
  }

  const returnHref =
    worksheet.slug === FLOWER_DRAWING_SLUG
      ? "/#worksheets"
      : `/flower-drawing/${worksheet.slug}/`;
  const returnLabel =
    worksheet.slug === FLOWER_DRAWING_SLUG ? "Return to Homepage" : "Return to Tutorial";

  return (
    <WorksheetPrintView
      src={worksheet.printSrc}
      alt={worksheet.imageAlt}
      title={worksheet.imageTitle}
      returnHref={returnHref}
      returnLabel={returnLabel}
    />
  );
}

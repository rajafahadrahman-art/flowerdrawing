import Image from "next/image";
import Link from "next/link";
import type { WorksheetCollectionItem } from "@/lib/worksheets/get-worksheets";
import { ButtonLink } from "@/components/ui/ButtonLink";

type WorksheetCardProps = {
  worksheet: WorksheetCollectionItem;
};

export function WorksheetCard({ worksheet }: WorksheetCardProps) {
  return (
    <article className="surface-card surface-card--hover overflow-hidden">
      <div className="border-b border-border bg-white p-4">
        <Image
          src={worksheet.worksheetImage}
          alt={worksheet.imageAlt}
          title={worksheet.imageTitle}
          width={worksheet.imageWidth}
          height={worksheet.imageHeight}
          className="mx-auto h-auto w-full max-w-[280px]"
          sizes="(max-width: 768px) 100vw, 280px"
        />
      </div>
      <div className="space-y-4 p-5">
        <div className="space-y-2">
          <p className="eyebrow">{worksheet.flowerName}</p>
          <h2 className="heading-card">{worksheet.title}</h2>
          <p className="text-muted">{worksheet.description}</p>
          {typeof worksheet.stepCount === "number" ? (
            <p className="text-sm font-medium text-ink/80">{worksheet.stepCount} steps</p>
          ) : null}
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={worksheet.worksheetPDF} variant="download" download>
            Download Free Worksheet
          </ButtonLink>
          <ButtonLink href={worksheet.worksheetPDF} variant="print" newTab>
            Print Now
          </ButtonLink>
          {worksheet.tutorialHref ? (
            <Link
              href={worksheet.tutorialHref}
              className="btn btn-sky !min-h-11 !px-4 !text-sm"
            >
              {worksheet.tutorialLabel ?? "View Tutorial"}
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}

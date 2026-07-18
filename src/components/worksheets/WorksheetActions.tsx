import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import {
  worksheetDownloadPath,
  worksheetPrintPath,
} from "@/lib/worksheets/resolve-worksheet";

type WorksheetActionsProps = {
  /** Tutorial or homepage worksheet slug (e.g. `rose-drawing`, `flower-drawing`). */
  slug: string;
  className?: string;
  /** Optional extra actions rendered after Download / Print. */
  children?: ReactNode;
};

/**
 * Shared Download Free Worksheet + Print Now controls.
 * Future tutorials with a registered worksheet slug work automatically.
 */
export function WorksheetActions({ slug, className = "", children }: WorksheetActionsProps) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`.trim()}>
      <ButtonLink href={worksheetDownloadPath(slug)} variant="download" download>
        Download Free Worksheet
      </ButtonLink>
      <ButtonLink href={worksheetPrintPath(slug)} variant="print" newTab>
        Print Now
      </ButtonLink>
      {children}
    </div>
  );
}

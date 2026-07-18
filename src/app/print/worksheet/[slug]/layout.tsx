import type { ReactNode } from "react";

/**
 * Print routes intentionally omit the main site chrome via CSS in globals
 * (`body:has([data-worksheet-print])`). This layout keeps the print shell minimal.
 */
export default function WorksheetPrintLayout({ children }: { children: ReactNode }) {
  return children;
}

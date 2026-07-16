import type { ReactNode } from "react";

export type TocItem = {
  id: string;
  label: string;
  level?: 2 | 3;
};

type TableOfContentsProps = {
  items: TocItem[];
  ariaLabel?: string;
  className?: string;
};

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Open-by-default, closable Table of Contents.
 * Uses native <details>/<summary> so it works without JavaScript.
 */
export function TableOfContents({
  items,
  ariaLabel = "Table of Contents",
  className = "",
}: TableOfContentsProps) {
  if (items.length === 0) return null;

  return (
    <nav aria-label={ariaLabel} className={className}>
      <details open className="toc-panel surface-card surface-card--sky border border-border">
        <summary className="toc-summary heading-card">Table of Contents</summary>
        <ul className="mt-4 grid gap-2 px-5 pb-5 sm:grid-cols-2 sm:px-6 sm:pb-6">
          {items.map((item) => (
            <li key={item.id} className={item.level === 3 ? "sm:col-span-1 pl-3" : ""}>
              <a
                href={`#${item.id}`}
                className={`inline-flex min-h-11 items-center rounded-xl px-3 py-2 text-sm font-medium text-ink transition hover:bg-white hover:text-sky-dark ${
                  item.level === 3 ? "text-muted" : ""
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </details>
    </nav>
  );
}

export function TocHeading({
  as: Tag = "h2",
  id,
  className = "",
  children,
}: {
  as?: "h2" | "h3";
  id: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag id={id} className={`toc-target ${className}`.trim()}>
      {children}
    </Tag>
  );
}

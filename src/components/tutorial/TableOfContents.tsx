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

export function TableOfContents({
  items,
  ariaLabel = "Table of Contents",
  className = "",
}: TableOfContentsProps) {
  if (items.length === 0) return null;

  return (
    <nav
      aria-label={ariaLabel}
      className={`surface-card surface-card--sky border border-border p-5 sm:p-6 ${className}`.trim()}
    >
      <h2 className="heading-card">Table of Contents</h2>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
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
    </nav>
  );
}

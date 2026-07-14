import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  surface?: boolean;
};

export function Section({ id, children, className = "", surface = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`section-space ${surface ? "bg-surface" : ""} ${className}`.trim()}
    >
      <div className="container-main">{children}</div>
    </section>
  );
}

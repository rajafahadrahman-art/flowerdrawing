import type { ReactNode } from "react";

type SectionTone =
  | "default"
  | "surface"
  | "paper"
  | "sky"
  | "mint"
  | "lavender"
  | "yellow";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  surface?: boolean;
  tone?: SectionTone;
};

const toneClass: Record<SectionTone, string> = {
  default: "",
  surface: "bg-surface",
  paper: "bg-paper",
  sky: "bg-sky-light/50",
  mint: "bg-mint-light/45",
  lavender: "bg-lavender-light/40",
  yellow: "bg-yellow-light/40",
};

export function Section({
  id,
  children,
  className = "",
  surface = false,
  tone,
}: SectionProps) {
  const resolvedTone = tone ?? (surface ? "surface" : "default");

  return (
    <section id={id} className={`section-space ${toneClass[resolvedTone]} ${className}`.trim()}>
      <div className="container-main">{children}</div>
    </section>
  );
}

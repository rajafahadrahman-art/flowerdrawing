"use client";

import { useId, useState } from "react";

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
  idPrefix?: string;
};

const accentBorders = [
  "border-l-sky",
  "border-l-coral",
  "border-l-mint",
  "border-l-yellow",
  "border-l-lavender",
  "border-l-peach",
  "border-l-sky",
] as const;

export function FaqAccordion({ items, idPrefix = "faq" }: FaqAccordionProps) {
  const reactId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const panelId = `${idPrefix}-${reactId}-panel-${index}`;
        const buttonId = `${idPrefix}-${reactId}-button-${index}`;
        const isOpen = openIndex === index;
        const accent = accentBorders[index % accentBorders.length];

        return (
          <div
            key={item.question}
            className={`surface-card overflow-hidden border-l-4 ${accent} ${
              isOpen ? "bg-paper shadow-[var(--shadow-card-hover)]" : "bg-white"
            }`}
          >
            <h3 className="m-0">
              <button
                id={buttonId}
                type="button"
                className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-lg font-bold ${
                    isOpen
                      ? "bg-coral-light text-coral-dark"
                      : "bg-sky-light text-sky-dark"
                  }`}
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`border-t border-border px-5 text-muted transition-[padding,opacity] duration-200 ${
                isOpen
                  ? "bg-yellow-light/40 py-4 opacity-100"
                  : "pointer-events-none max-h-0 overflow-hidden border-t-0 py-0 opacity-0"
              }`}
            >
              <p className="m-0">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

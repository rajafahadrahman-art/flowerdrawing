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

export function FaqAccordion({ items, idPrefix = "faq" }: FaqAccordionProps) {
  const reactId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const panelId = `${idPrefix}-${reactId}-panel-${index}`;
        const buttonId = `${idPrefix}-${reactId}-button-${index}`;
        const isOpen = openIndex === index;

        return (
          <div key={item.question} className="surface-card overflow-hidden">
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
                <span aria-hidden="true" className="text-muted">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`border-t border-border px-5 text-muted transition-[padding,opacity] duration-200 ${
                isOpen ? "py-4 opacity-100" : "pointer-events-none max-h-0 overflow-hidden border-t-0 py-0 opacity-0"
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

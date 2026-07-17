"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { DrawingStep } from "@/lib/draw-along/types";

type DrawAlongStepsRowProps = {
  steps: DrawingStep[];
  currentIndex: number;
  onSelect: (index: number) => void;
};

export function DrawAlongStepsRow({
  steps,
  currentIndex,
  onSelect,
}: DrawAlongStepsRowProps) {
  const listRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    activeRef.current?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [currentIndex]);

  return (
    <div
      ref={listRef}
      className="da-steps-row"
      role="listbox"
      aria-label="Drawing steps"
    >
      {steps.map((step, index) => {
        const active = index === currentIndex;
        return (
          <button
            key={step.id}
            ref={active ? activeRef : undefined}
            type="button"
            role="option"
            aria-selected={active}
            className={`da-step-chip${active ? " da-step-chip--active" : ""}`}
            onClick={() => onSelect(index)}
          >
            <span className="da-step-chip__thumb">
              <Image
                src={step.image}
                alt={step.alt}
                title={step.imageTitle}
                width={120}
                height={90}
                className="da-step-chip__image"
                sizes="72px"
              />
            </span>
            <span className="da-step-chip__label">
              <span className="da-step-chip__number">Step {index + 1}</span>
              <span className="da-step-chip__title">{step.title}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}

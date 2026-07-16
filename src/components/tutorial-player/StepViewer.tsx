"use client";

import Image from "next/image";
import { useState } from "react";
import type { DrawingStep } from "@/lib/draw-along/types";

type StepViewerProps = {
  step: DrawingStep;
  stepNumber: number;
  totalSteps: number;
  priority?: boolean;
};

export function StepViewer({
  step,
  stepNumber,
  totalSteps,
  priority = false,
}: StepViewerProps) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-4 lg:flex-row lg:gap-6">
      <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-2xl border border-border bg-white p-2 sm:p-3">
        {imageFailed ? (
          <div
            className="flex aspect-[4/3] w-full max-h-[min(52vh,520px)] items-center justify-center rounded-xl bg-surface px-4 text-center text-sm text-muted"
            role="img"
            aria-label={step.alt}
          >
            Step image unavailable. Continue with the written instruction.
          </div>
        ) : (
          <Image
            key={step.image}
            src={step.image}
            alt={step.alt}
            width={1448}
            height={1086}
            priority={priority}
            className="h-auto max-h-[min(52vh,520px)] w-full object-contain"
            sizes="(max-width: 1024px) 100vw, 60vw"
            onError={() => setImageFailed(true)}
          />
        )}
      </div>

      <aside className="flex w-full shrink-0 flex-col gap-3 lg:w-[min(100%,22rem)] xl:w-96">
        <p className="text-sm font-semibold text-sky-dark">
          Step {stepNumber} of {totalSteps}
        </p>
        <h3 className="heading-card text-balance">{step.title}</h3>
        <p className="text-[0.95rem] leading-relaxed text-ink">{step.instruction}</p>
        {step.tip ? (
          <div className="rounded-xl border border-border bg-yellow-light/80 px-3 py-2.5 text-sm text-yellow-dark">
            <p className="font-semibold">Helpful tip</p>
            <p className="mt-1 leading-relaxed">{step.tip}</p>
          </div>
        ) : null}
      </aside>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { DrawingTutorial } from "@/lib/draw-along/types";

type TutorialPreviewCardProps = {
  tutorial: DrawingTutorial;
  accent: "coral" | "sky" | "mint" | "lavender" | "peach" | "yellow";
  onStart: (tutorial: DrawingTutorial, trigger: HTMLButtonElement) => void;
};

const accentClass: Record<TutorialPreviewCardProps["accent"], string> = {
  coral: "surface-card--coral",
  sky: "surface-card--sky",
  mint: "surface-card--mint",
  lavender: "surface-card--lavender",
  peach: "surface-card--peach",
  yellow: "surface-card--yellow",
};

export function TutorialPreviewCard({
  tutorial,
  accent,
  onStart,
}: TutorialPreviewCardProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const stepCount = tutorial.steps.length;

  return (
    <article
      className={`surface-card surface-card--hover overflow-hidden ${accentClass[accent]}`}
    >
      <div className="border-b border-border bg-white p-4">
        {imageFailed ? (
          <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-surface text-sm text-muted">
            Featured image unavailable
          </div>
        ) : (
          <Image
            src={tutorial.featuredImage}
            alt={tutorial.featuredImageAlt}
            width={1448}
            height={1086}
            className="h-auto w-full rounded-xl"
            sizes="(max-width: 768px) 100vw, 480px"
            onError={() => setImageFailed(true)}
          />
        )}
      </div>

      <div className="space-y-4 p-5">
        <div className="space-y-2">
          <h2 className="heading-card">{tutorial.title}</h2>
          <p className="text-muted">{tutorial.description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="meta-badge meta-badge--mint">
            {tutorial.difficulty}
          </span>
          <span className="meta-badge meta-badge--sky">
            {tutorial.estimatedMinutes} min
          </span>
          <span className="meta-badge meta-badge--lavender">
            {stepCount} {stepCount === 1 ? "step" : "steps"}
          </span>
          <span
            className={`meta-badge ${
              tutorial.worksheetUrl ? "meta-badge--mint" : "meta-badge--sky"
            }`}
          >
            {tutorial.worksheetUrl ? "Worksheet included" : "No worksheet"}
          </span>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            className="btn btn-primary"
            onClick={(event) => onStart(tutorial, event.currentTarget)}
          >
            Start Drawing
          </button>
          <Link href={tutorial.articleUrl} className="btn btn-sky">
            View Full Guide
          </Link>
        </div>
      </div>
    </article>
  );
}

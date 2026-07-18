"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { DrawingTutorial } from "@/lib/draw-along/types";

type DrawAlongCompletionProps = {
  tutorial: DrawingTutorial;
  onRestart: () => void;
  onClose: () => void;
};

export function DrawAlongCompletion({
  tutorial,
  onRestart,
  onClose,
}: DrawAlongCompletionProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const finalStep = tutorial.steps[tutorial.steps.length - 1];
  const previewSrc = finalStep?.image ?? tutorial.featuredImage;
  const previewAlt = finalStep?.alt ?? tutorial.featuredImageAlt;
  const previewTitle =
    finalStep?.imageTitle ?? tutorial.featuredImageTitle ?? undefined;
  const worksheetHref = tutorial.worksheetUrl
    ? `/api/worksheets/${tutorial.slug}/`
    : undefined;

  return (
    <div className="da-completion">
      <div className="da-completion__canvas">
        {imageFailed ? (
          <p className="da-fallback">Final drawing unavailable</p>
        ) : (
          <Image
            src={previewSrc}
            alt={previewAlt}
            title={previewTitle}
            fill
            className="da-main-image"
            sizes="(max-width: 768px) 92vw, 560px"
            onError={() => setImageFailed(true)}
          />
        )}
      </div>

      <div className="da-completion__copy">
        <p className="da-completion__eyebrow">Drawing Complete</p>
        <h3 className="da-completion__title">
          {tutorial.focusKeyword || tutorial.title}
        </h3>
      </div>

      <div className="da-completion__actions">
        <button type="button" className="da-btn da-btn--primary" onClick={onRestart}>
          Restart
        </button>
        <Link href={tutorial.articleUrl} className="da-btn da-btn--secondary">
          View Tutorial
        </Link>
        {worksheetHref ? (
          <a href={worksheetHref} className="da-btn da-btn--accent" download>
            Download Worksheet
          </a>
        ) : null}
        <Link href="/tools/draw-along/" className="da-btn da-btn--secondary">
          Home
        </Link>
        <button type="button" className="da-btn da-btn--ghost" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

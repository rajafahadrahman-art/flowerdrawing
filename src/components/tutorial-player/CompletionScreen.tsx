"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { DrawingTutorial } from "@/lib/draw-along/types";

type CompletionScreenProps = {
  tutorial: DrawingTutorial;
  onRestart: () => void;
  onTryAnother: () => void;
  onReturnToSelection: () => void;
};

export function CompletionScreen({
  tutorial,
  onRestart,
  onTryAnother,
  onReturnToSelection,
}: CompletionScreenProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const finalStep = tutorial.steps[tutorial.steps.length - 1];
  const previewSrc = finalStep?.image ?? tutorial.featuredImage;
  const previewAlt = finalStep?.alt ?? tutorial.featuredImageAlt;
  const worksheetName = tutorial.worksheetUrl
    ? `${tutorial.slug}-worksheet.pdf`
    : undefined;

  return (
    <div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-5 overflow-y-auto px-1 py-2 text-center">
      <div
        className="draw-along-success mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-mint bg-mint-light text-mint-dark"
        aria-hidden="true"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 13l4 4L19 7"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="space-y-2">
        <h3 className="heading-section text-balance">
          Great work! Your {tutorial.title} Is Complete.
        </h3>
        <p className="lead mx-auto max-w-lg text-base">
          You finished all {tutorial.steps.length} drawing steps. Restart to
          practice again, download the worksheet, or open the full written guide.
        </p>
      </div>

      <div className="w-full max-w-md overflow-hidden rounded-2xl border border-border bg-white p-3 shadow-[var(--shadow-card)]">
        {imageFailed ? (
          <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-surface text-sm text-muted">
            Final drawing preview unavailable
          </div>
        ) : (
          <Image
            src={previewSrc}
            alt={previewAlt}
            width={1448}
            height={1086}
            className="h-auto w-full rounded-xl object-contain"
            sizes="(max-width: 768px) 90vw, 420px"
            onError={() => setImageFailed(true)}
          />
        )}
      </div>

      <div className="flex w-full max-w-xl flex-wrap items-stretch justify-center gap-3">
        <button type="button" className="btn btn-primary" onClick={onRestart}>
          Restart Tutorial
        </button>
        {tutorial.worksheetUrl ? (
          <a
            href={tutorial.worksheetUrl}
            className="btn btn-download"
            download={worksheetName}
          >
            Download Worksheet
          </a>
        ) : null}
        <Link href={tutorial.articleUrl} className="btn btn-sky">
          View Full Guide
        </Link>
        <button type="button" className="btn btn-coral" onClick={onTryAnother}>
          Try Another Tutorial
        </button>
        <button
          type="button"
          className="btn btn-ghost"
          onClick={onReturnToSelection}
        >
          Return to Tutorial Selection
        </button>
      </div>
    </div>
  );
}

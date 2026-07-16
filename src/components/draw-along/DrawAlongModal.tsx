"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type SyntheticEvent,
} from "react";
import { DrawAlongCompletion } from "@/components/draw-along/DrawAlongCompletion";
import { DrawAlongStepsRow } from "@/components/draw-along/DrawAlongStepsRow";
import type { DrawingTutorial } from "@/lib/draw-along/types";

type DrawAlongModalProps = {
  tutorial: DrawingTutorial;
  open: boolean;
  onClose: () => void;
};

function isInteractiveTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName;
  return (
    tag === "BUTTON" ||
    tag === "A" ||
    tag === "INPUT" ||
    tag === "SELECT" ||
    tag === "TEXTAREA" ||
    target.isContentEditable
  );
}

export function DrawAlongModal({
  tutorial,
  open,
  onClose,
}: DrawAlongModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const liveId = useId();

  const [stepIndex, setStepIndex] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const [liveMessage, setLiveMessage] = useState("");

  const totalSteps = tutorial.steps.length;
  const currentStep = tutorial.steps[stepIndex];
  const progressPercent =
    totalSteps > 0
      ? ((completed ? totalSteps : stepIndex + 1) / totalSteps) * 100
      : 0;

  const announce = useCallback(
    (index: number) => {
      const step = tutorial.steps[index];
      if (!step) return;
      setLiveMessage(`Step ${index + 1} of ${totalSteps}: ${step.title}`);
    },
    [totalSteps, tutorial.steps],
  );

  const goToStep = useCallback(
    (index: number) => {
      if (totalSteps === 0) return;
      const next = Math.min(Math.max(index, 0), totalSteps - 1);
      setCompleted(false);
      setStepIndex(next);
      setImageFailed(false);
      announce(next);
    },
    [announce, totalSteps],
  );

  const handlePrevious = useCallback(() => {
    if (completed) {
      goToStep(totalSteps - 1);
      return;
    }
    if (stepIndex <= 0) return;
    goToStep(stepIndex - 1);
  }, [completed, goToStep, stepIndex, totalSteps]);

  const handleNext = useCallback(() => {
    if (completed) return;
    if (stepIndex >= totalSteps - 1) {
      setCompleted(true);
      setLiveMessage("Drawing Complete");
      return;
    }
    goToStep(stepIndex + 1);
  }, [completed, goToStep, stepIndex, totalSteps]);

  const handleRestart = useCallback(() => {
    setCompleted(false);
    goToStep(0);
  }, [goToStep]);

  useLayoutEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (!open) {
      if (dialog.open) dialog.close();
      document.body.style.overflow = "";
      return;
    }

    try {
      if (!dialog.open) dialog.showModal();
    } catch {
      // Ignore duplicate showModal calls during strict-mode remounts.
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    setStepIndex(0);
    setCompleted(false);
    setImageFailed(false);
    announce(0);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
    };
    // Reset only when the popup opens.
    // eslint-disable-next-line react-hooks/exhaustive-deps -- intentional open-only reset
  }, [open]);

  useEffect(() => {
    if (!open || completed) return;
    const next = tutorial.steps[stepIndex + 1];
    if (!next?.image) return;
    const img = new window.Image();
    img.src = next.image;
  }, [completed, open, stepIndex, tutorial.steps]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (isInteractiveTarget(event.target)) return;

      if (event.key === "ArrowRight") {
        event.preventDefault();
        if (!completed) handleNext();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        handlePrevious();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [completed, handleNext, handlePrevious, onClose, open]);

  const onDialogCancel = (event: SyntheticEvent<HTMLDialogElement>) => {
    event.preventDefault();
    onClose();
  };

  const isFirst = stepIndex <= 0 && !completed;
  const isLast = stepIndex >= totalSteps - 1;

  return (
    <dialog
      ref={dialogRef}
      className="da-dialog"
      aria-labelledby={titleId}
      aria-modal="true"
      onCancel={onDialogCancel}
    >
      <div className="da-shell">
        <header className="da-header">
          <Link
            href="/tools/draw-along/"
            className="da-btn da-btn--ghost da-btn--compact"
            onClick={onClose}
          >
            Home
          </Link>
          <div className="da-header__center">
            <h2 id={titleId} className="da-header__title">
              {tutorial.title}
            </h2>
            <p className="da-header__step da-header__step--desktop">
              {completed
                ? "Drawing Complete"
                : `Step ${stepIndex + 1} of ${totalSteps}`}
            </p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            className="da-btn da-btn--ghost da-btn--compact"
            onClick={onClose}
          >
            Close
          </button>
        </header>

        <p className="da-header__step da-header__step--mobile">
          {completed
            ? "Drawing Complete"
            : `Step ${stepIndex + 1} of ${totalSteps}`}
        </p>

        <div
          className="da-progress"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progressPercent)}
          aria-label="Drawing progress"
        >
          <div
            className="da-progress__bar"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div id={liveId} className="sr-only" aria-live="polite" aria-atomic="true">
          {liveMessage}
        </div>

        {completed ? (
          <DrawAlongCompletion
            tutorial={tutorial}
            onRestart={handleRestart}
            onClose={onClose}
          />
        ) : (
          <>
            <DrawAlongStepsRow
              steps={tutorial.steps}
              currentIndex={stepIndex}
              onSelect={goToStep}
            />

            <div className="da-stage">
              <div className="da-canvas">
                {!currentStep || imageFailed ? (
                  <p className="da-fallback">
                    {currentStep
                      ? `Image unavailable: ${currentStep.image}`
                      : "Step unavailable"}
                  </p>
                ) : (
                  <Image
                    key={currentStep.image}
                    src={currentStep.image}
                    alt={currentStep.alt}
                    fill
                    priority
                    className="da-main-image"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 820px"
                    onError={() => setImageFailed(true)}
                  />
                )}
              </div>
            </div>

            <p className="da-step-title">{currentStep?.title ?? ""}</p>

            <div className="da-nav">
              <button
                type="button"
                className="da-btn da-btn--secondary"
                onClick={handlePrevious}
                disabled={isFirst}
              >
                Previous
              </button>
              <button
                type="button"
                className="da-btn da-btn--primary"
                onClick={handleNext}
              >
                {isLast ? "Finish" : "Next"}
              </button>
            </div>
          </>
        )}
      </div>
    </dialog>
  );
}

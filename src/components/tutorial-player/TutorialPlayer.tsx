"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type SyntheticEvent,
} from "react";
import { CompletionScreen } from "@/components/tutorial-player/CompletionScreen";
import { PlayerControls } from "@/components/tutorial-player/PlayerControls";
import { StepViewer } from "@/components/tutorial-player/StepViewer";
import {
  readAudioPrefs,
  writeAudioPrefs,
} from "@/lib/draw-along/audio-prefs";
import { getStepDurationSeconds } from "@/lib/draw-along/registry";
import {
  AUTOPLAY_SPEED_MULTIPLIER,
  DEFAULT_STEP_DURATION_SECONDS,
  type AutoplaySpeed,
  type DrawingTutorial,
  type PlaybackMode,
} from "@/lib/draw-along/types";

type TutorialPlayerProps = {
  tutorial: DrawingTutorial;
  open: boolean;
  onClose: () => void;
};

function isEditableTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName;
  if (
    tag === "INPUT" ||
    tag === "SELECT" ||
    tag === "TEXTAREA" ||
    tag === "BUTTON" ||
    tag === "A"
  ) {
    return true;
  }
  return target.isContentEditable;
}

export function TutorialPlayer({
  tutorial,
  open,
  onClose,
}: TutorialPlayerProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const exitButtonRef = useRef<HTMLButtonElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const autoplayTimerRef = useRef<number | null>(null);
  const titleId = useId();
  const liveId = useId();

  const [stepIndex, setStepIndex] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [mode, setMode] = useState<PlaybackMode>("manual");
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState<AutoplaySpeed>("normal");
  const [musicAvailable, setMusicAvailable] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.25);
  const [liveMessage, setLiveMessage] = useState("");

  const totalSteps = tutorial.steps.length;
  const currentStep = tutorial.steps[stepIndex];
  const progressPercent =
    totalSteps > 0 ? ((stepIndex + (completed ? 1 : 0)) / totalSteps) * 100 : 0;

  const clearAutoplayTimer = useCallback(() => {
    if (autoplayTimerRef.current !== null) {
      window.clearTimeout(autoplayTimerRef.current);
      autoplayTimerRef.current = null;
    }
  }, []);

  const cleanupAudio = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.removeAttribute("src");
    audio.load();
    audioRef.current = null;
    setMusicPlaying(false);
  }, []);

  const announceStep = useCallback(
    (index: number) => {
      const step = tutorial.steps[index];
      if (!step) return;
      setLiveMessage(
        `Step ${index + 1} of ${tutorial.steps.length}: ${step.title}`,
      );
    },
    [tutorial.steps],
  );

  const goToStep = useCallback(
    (index: number) => {
      if (totalSteps === 0) return;
      const next = Math.min(Math.max(index, 0), totalSteps - 1);
      setCompleted(false);
      setStepIndex(next);
      announceStep(next);
      clearAutoplayTimer();
    },
    [announceStep, clearAutoplayTimer, totalSteps],
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
      clearAutoplayTimer();
      setIsPlaying(false);
      setCompleted(true);
      setLiveMessage(`${tutorial.title} complete`);
      return;
    }
    goToStep(stepIndex + 1);
  }, [
    clearAutoplayTimer,
    completed,
    goToStep,
    stepIndex,
    totalSteps,
    tutorial.title,
  ]);

  const handleRestart = useCallback(() => {
    setCompleted(false);
    setMode("manual");
    setIsPlaying(false);
    clearAutoplayTimer();
    goToStep(0);
  }, [clearAutoplayTimer, goToStep]);

  const handleClose = useCallback(() => {
    clearAutoplayTimer();
    setIsPlaying(false);
    cleanupAudio();
    onClose();
  }, [cleanupAudio, clearAutoplayTimer, onClose]);

  const handleModeChange = useCallback(
    (nextMode: PlaybackMode) => {
      setMode(nextMode);
      clearAutoplayTimer();
      if (nextMode === "manual") {
        setIsPlaying(false);
      } else if (!completed && stepIndex < totalSteps - 1) {
        setIsPlaying(true);
      }
    },
    [clearAutoplayTimer, completed, stepIndex, totalSteps],
  );

  const handleTogglePlay = useCallback(() => {
    if (mode !== "auto" || completed) return;
    setIsPlaying((prev) => !prev);
    clearAutoplayTimer();
  }, [clearAutoplayTimer, completed, mode]);

  // Open / close native dialog + scroll lock + initial state
  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      const dialog = dialogRef.current;
      if (dialog?.open) dialog.close();
      return;
    }

    const dialog = dialogRef.current;
    if (!dialog) return;

    if (!dialog.open) {
      dialog.showModal();
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    setStepIndex(0);
    setCompleted(false);
    setMode("manual");
    setIsPlaying(false);
    setSpeed("normal");
    announceStep(0);
    window.requestAnimationFrame(() => {
      exitButtonRef.current?.focus();
    });

    return () => {
      document.body.style.overflow = previousOverflow;
    };
    // Reset player state only when the overlay opens.
    // eslint-disable-next-line react-hooks/exhaustive-deps -- intentional open-only reset
  }, [open]);

  // Load optional music only after Start Drawing opens the player
  useEffect(() => {
    if (!open) {
      cleanupAudio();
      setMusicAvailable(false);
      return;
    }

    const prefs = readAudioPrefs();
    setVolume(prefs.volume);
    setMuted(prefs.muted);

    const musicUrl = tutorial.musicUrl;
    if (!musicUrl) {
      setMusicAvailable(false);
      return;
    }

    let cancelled = false;
    const audio = new Audio();
    audio.preload = "metadata";
    audio.loop = true;
    audio.volume = prefs.muted ? 0 : prefs.volume;

    const markAvailable = () => {
      if (cancelled) return;
      audioRef.current = audio;
      setMusicAvailable(true);
    };

    const markUnavailable = () => {
      if (cancelled) return;
      setMusicAvailable(false);
      setMusicPlaying(false);
      if (audioRef.current === audio) {
        audioRef.current = null;
      }
      audio.removeAttribute("src");
      audio.load();
    };

    audio.addEventListener("loadedmetadata", markAvailable);
    audio.addEventListener("canplay", markAvailable);
    audio.addEventListener("error", markUnavailable);
    audio.src = musicUrl;
    audio.load();

    return () => {
      cancelled = true;
      audio.removeEventListener("loadedmetadata", markAvailable);
      audio.removeEventListener("canplay", markAvailable);
      audio.removeEventListener("error", markUnavailable);
      cleanupAudio();
    };
  }, [cleanupAudio, open, tutorial.musicUrl]);

  // Sync audio element with mute/volume/play state
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !musicAvailable) return;
    audio.muted = muted;
    audio.volume = muted ? 0 : volume;
    writeAudioPrefs({ volume, muted });

    if (musicPlaying) {
      void audio.play().catch(() => {
        setMusicPlaying(false);
      });
    } else {
      audio.pause();
    }
  }, [musicAvailable, musicPlaying, muted, volume]);

  // Autoplay advancement
  useEffect(() => {
    clearAutoplayTimer();
    if (!open || completed || mode !== "auto" || !isPlaying) return;
    if (stepIndex >= totalSteps - 1) {
      setIsPlaying(false);
      return;
    }

    const step = tutorial.steps[stepIndex];
    const base = getStepDurationSeconds(
      step?.durationSeconds,
      DEFAULT_STEP_DURATION_SECONDS,
    );
    const delayMs = base * AUTOPLAY_SPEED_MULTIPLIER[speed] * 1000;

    autoplayTimerRef.current = window.setTimeout(() => {
      goToStep(stepIndex + 1);
    }, delayMs);

    return () => {
      clearAutoplayTimer();
    };
  }, [
    clearAutoplayTimer,
    completed,
    goToStep,
    isPlaying,
    mode,
    open,
    speed,
    stepIndex,
    totalSteps,
    tutorial.steps,
  ]);

  // Preload next step image only
  useEffect(() => {
    if (!open || completed) return;
    const next = tutorial.steps[stepIndex + 1];
    if (!next?.image) return;
    const img = new window.Image();
    img.src = next.image;
  }, [completed, open, stepIndex, tutorial.steps]);

  // Keyboard shortcuts
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (isEditableTarget(event.target)) {
        if (event.key === "Escape") {
          event.preventDefault();
          handleClose();
        }
        return;
      }

      switch (event.key) {
        case "Escape":
          event.preventDefault();
          handleClose();
          break;
        case "ArrowRight":
          event.preventDefault();
          if (!completed) handleNext();
          break;
        case "ArrowLeft":
          event.preventDefault();
          handlePrevious();
          break;
        case " ":
          event.preventDefault();
          if (mode === "auto") {
            handleTogglePlay();
          }
          break;
        case "m":
        case "M":
          event.preventDefault();
          if (musicAvailable) {
            setMuted((prev) => !prev);
          }
          break;
        case "r":
        case "R":
          event.preventDefault();
          handleRestart();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [
    completed,
    handleClose,
    handleNext,
    handlePrevious,
    handleRestart,
    handleTogglePlay,
    mode,
    musicAvailable,
    open,
  ]);

  const onDialogCancel = (event: SyntheticEvent<HTMLDialogElement>) => {
    event.preventDefault();
    handleClose();
  };

  if (totalSteps === 0 || !currentStep) {
    return (
      <dialog
        ref={dialogRef}
        className="draw-along-dialog m-0 h-dvh max-h-dvh w-screen max-w-none border-0 bg-background p-0 text-ink"
        aria-labelledby={titleId}
        onCancel={onDialogCancel}
      >
        <div className="flex h-full flex-col items-center justify-center gap-4 p-6">
          <h2 id={titleId} className="heading-section">
            Tutorial unavailable
          </h2>
          <p className="text-muted">
            This drawing tutorial could not be loaded. Please return to the
            selection screen.
          </p>
          <button type="button" className="btn btn-primary" onClick={handleClose}>
            Exit
          </button>
        </div>
      </dialog>
    );
  }

  return (
    <dialog
      ref={dialogRef}
      className="draw-along-dialog m-0 h-dvh max-h-dvh w-screen max-w-none border-0 bg-background p-0 text-ink"
      aria-labelledby={titleId}
      aria-modal="true"
      onCancel={onDialogCancel}
    >
      <div className="flex h-dvh flex-col bg-background">
        <header className="shrink-0 border-b border-border bg-paper/95 px-3 py-3 sm:px-5">
          <div className="mx-auto flex w-full max-w-[1240px] items-start justify-between gap-3">
            <div className="min-w-0 space-y-1">
              <p className="text-xs font-semibold uppercase tracking-wide text-lavender-dark">
                Draw Along Player
              </p>
              <h2 id={titleId} className="heading-card truncate sm:text-xl">
                {tutorial.title}
              </h2>
              <p className="text-sm font-semibold text-muted">
                {completed
                  ? "Complete"
                  : `Step ${stepIndex + 1} of ${totalSteps}`}
              </p>
            </div>
            <button
              ref={exitButtonRef}
              type="button"
              className="btn btn-ghost shrink-0"
              onClick={handleClose}
            >
              Exit
            </button>
          </div>
          <div className="mx-auto mt-3 w-full max-w-[1240px]">
            <div
              className="h-2 overflow-hidden rounded-full bg-surface-strong"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(progressPercent)}
              aria-label="Tutorial progress"
            >
              <div
                className="h-full rounded-full bg-mint transition-[width] duration-200"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </header>

        <div
          id={liveId}
          className="sr-only"
          aria-live="polite"
          aria-atomic="true"
        >
          {liveMessage}
        </div>

        <div className="mx-auto flex min-h-0 w-full max-w-[1240px] flex-1 flex-col gap-4 overflow-y-auto px-3 py-4 sm:px-5">
          {completed ? (
            <CompletionScreen
              tutorial={tutorial}
              onRestart={handleRestart}
              onTryAnother={handleClose}
              onReturnToSelection={handleClose}
            />
          ) : (
            <>
              <StepViewer
                step={currentStep}
                stepNumber={stepIndex + 1}
                totalSteps={totalSteps}
                priority
              />
              <PlayerControls
                tutorial={tutorial}
                stepIndex={stepIndex}
                mode={mode}
                isPlaying={isPlaying}
                speed={speed}
                musicAvailable={musicAvailable}
                musicPlaying={musicPlaying}
                muted={muted}
                volume={volume}
                onPrevious={handlePrevious}
                onNext={handleNext}
                onTogglePlay={handleTogglePlay}
                onModeChange={handleModeChange}
                onSpeedChange={(next) => {
                  setSpeed(next);
                  clearAutoplayTimer();
                }}
                onRestart={handleRestart}
                onJumpToStep={goToStep}
                onToggleMusic={() => setMusicPlaying((prev) => !prev)}
                onToggleMute={() => setMuted((prev) => !prev)}
                onVolumeChange={(next) => {
                  setVolume(next);
                  if (next > 0 && muted) setMuted(false);
                }}
              />
            </>
          )}
        </div>
      </div>
    </dialog>
  );
}

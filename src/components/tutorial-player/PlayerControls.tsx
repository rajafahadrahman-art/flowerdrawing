"use client";

import type {
  AutoplaySpeed,
  DrawingTutorial,
  PlaybackMode,
} from "@/lib/draw-along/types";

type PlayerControlsProps = {
  tutorial: DrawingTutorial;
  stepIndex: number;
  mode: PlaybackMode;
  isPlaying: boolean;
  speed: AutoplaySpeed;
  musicAvailable: boolean;
  musicPlaying: boolean;
  muted: boolean;
  volume: number;
  onPrevious: () => void;
  onNext: () => void;
  onTogglePlay: () => void;
  onModeChange: (mode: PlaybackMode) => void;
  onSpeedChange: (speed: AutoplaySpeed) => void;
  onRestart: () => void;
  onJumpToStep: (index: number) => void;
  onToggleMusic: () => void;
  onToggleMute: () => void;
  onVolumeChange: (volume: number) => void;
};

export function PlayerControls({
  tutorial,
  stepIndex,
  mode,
  isPlaying,
  speed,
  musicAvailable,
  musicPlaying,
  muted,
  volume,
  onPrevious,
  onNext,
  onTogglePlay,
  onModeChange,
  onSpeedChange,
  onRestart,
  onJumpToStep,
  onToggleMusic,
  onToggleMute,
  onVolumeChange,
}: PlayerControlsProps) {
  const totalSteps = tutorial.steps.length;
  const isFirst = stepIndex <= 0;
  const isLast = stepIndex >= totalSteps - 1;
  const worksheetName = tutorial.worksheetUrl
    ? `${tutorial.slug}-worksheet.pdf`
    : undefined;

  return (
    <div className="space-y-3 border-t border-border pt-3">
      <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-between">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            type="button"
            className="btn btn-ghost min-w-[7.5rem]"
            onClick={onPrevious}
            disabled={isFirst}
            aria-disabled={isFirst}
          >
            Previous
          </button>
          <button
            type="button"
            className="btn btn-sky min-w-[7.5rem]"
            onClick={onTogglePlay}
            aria-pressed={isPlaying}
            disabled={mode !== "auto"}
            title={
              mode === "auto"
                ? isPlaying
                  ? "Pause autoplay"
                  : "Resume autoplay"
                : "Switch to Auto mode to use play/pause"
            }
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
          <button
            type="button"
            className="btn btn-primary min-w-[7.5rem]"
            onClick={onNext}
          >
            {isLast ? "Finish" : "Next"}
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          <label className="flex items-center gap-2 text-sm text-muted">
            <span className="sr-only">Playback mode</span>
            <select
              className="min-h-11 rounded-xl border border-border bg-white px-3 py-2 text-sm font-semibold text-ink"
              value={mode}
              onChange={(event) =>
                onModeChange(event.target.value as PlaybackMode)
              }
              aria-label="Manual or Auto mode"
            >
              <option value="manual">Manual</option>
              <option value="auto">Auto</option>
            </select>
          </label>
          <label className="flex items-center gap-2 text-sm text-muted">
            <span className="sr-only">Autoplay speed</span>
            <select
              className="min-h-11 rounded-xl border border-border bg-white px-3 py-2 text-sm font-semibold text-ink"
              value={speed}
              onChange={(event) =>
                onSpeedChange(event.target.value as AutoplaySpeed)
              }
              aria-label="Autoplay speed"
              disabled={mode !== "auto"}
            >
              <option value="slow">Slow</option>
              <option value="normal">Normal</option>
              <option value="fast">Fast</option>
            </select>
          </label>
          <button type="button" className="btn btn-ghost" onClick={onRestart}>
            Restart
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-muted">
          Jump to step
        </span>
        <div
          className="flex max-w-full flex-wrap justify-center gap-1.5"
          role="group"
          aria-label="Step navigation"
        >
          {tutorial.steps.map((step, index) => {
            const active = index === stepIndex;
            return (
              <button
                key={step.id}
                type="button"
                className={`step-badge min-h-11 min-w-11 ${
                  active ? "step-badge--mint" : "step-badge--sky"
                }`}
                aria-label={`Go to step ${index + 1}: ${step.title}`}
                aria-current={active ? "step" : undefined}
                onClick={() => onJumpToStep(index)}
              >
                {index + 1}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 rounded-xl border border-border bg-surface/80 px-3 py-2.5">
        {musicAvailable ? (
          <>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={onToggleMusic}
              aria-pressed={musicPlaying}
            >
              {musicPlaying ? "Pause Music" : "Play Music"}
            </button>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={onToggleMute}
              aria-pressed={muted}
            >
              {muted ? "Unmute" : "Mute"}
            </button>
            <label className="flex min-w-[10rem] flex-1 items-center gap-2 text-sm text-muted sm:max-w-xs">
              <span className="whitespace-nowrap font-semibold text-ink">
                Volume
              </span>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={(event) =>
                  onVolumeChange(Number(event.target.value))
                }
                aria-label="Music volume"
                className="h-2 w-full accent-mint-dark"
              />
            </label>
          </>
        ) : (
          <p className="text-sm text-muted" role="status">
            Music unavailable
          </p>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        {tutorial.worksheetUrl ? (
          <a
            href={tutorial.worksheetUrl}
            className="btn btn-download"
            download={worksheetName}
          >
            Download Worksheet
          </a>
        ) : null}
        <a href={tutorial.articleUrl} className="btn btn-sky">
          View Full Guide
        </a>
      </div>

      <p className="text-center text-xs leading-relaxed text-muted">
        Shortcuts: ← Previous · → Next · Space Play/Pause · M Mute · R Restart ·
        Esc Exit
      </p>
    </div>
  );
}

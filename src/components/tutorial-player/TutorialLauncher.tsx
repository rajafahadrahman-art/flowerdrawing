"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState } from "react";
import { TutorialPreviewCard } from "@/components/tutorial-player/TutorialPreviewCard";
import type { DrawingTutorial } from "@/lib/draw-along/types";

const TutorialPlayer = dynamic(
  () =>
    import("@/components/tutorial-player/TutorialPlayer").then(
      (mod) => mod.TutorialPlayer,
    ),
  {
    ssr: false,
    loading: () => null,
  },
);

type TutorialLauncherProps = {
  tutorials: DrawingTutorial[];
};

const accents = ["coral", "sky", "mint", "lavender", "peach", "yellow"] as const;

export function TutorialLauncher({ tutorials }: TutorialLauncherProps) {
  const [activeTutorial, setActiveTutorial] = useState<DrawingTutorial | null>(
    null,
  );
  const [playerOpen, setPlayerOpen] = useState(false);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  const handleStart = useCallback(
    (tutorial: DrawingTutorial, trigger: HTMLButtonElement) => {
      returnFocusRef.current = trigger;
      setActiveTutorial(tutorial);
      setPlayerOpen(true);
    },
    [],
  );

  const handleClose = useCallback(() => {
    setPlayerOpen(false);
  }, []);

  // Keep the player mounted briefly so focus can return to Start Drawing
  useEffect(() => {
    if (playerOpen || !activeTutorial) return;
    const frame = window.requestAnimationFrame(() => {
      returnFocusRef.current?.focus();
      setActiveTutorial(null);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [playerOpen, activeTutorial]);

  if (tutorials.length === 0) {
    return (
      <div className="surface-card surface-card--paper p-6 text-center">
        <h2 className="heading-card">No tutorials available</h2>
        <p className="mt-2 text-muted">
          Draw-along tutorials will appear here once real step images are ready.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2">
        {tutorials.map((tutorial, index) => (
          <TutorialPreviewCard
            key={tutorial.slug}
            tutorial={tutorial}
            accent={accents[index % accents.length]}
            onStart={handleStart}
          />
        ))}
      </div>

      {activeTutorial ? (
        <TutorialPlayer
          tutorial={activeTutorial}
          open={playerOpen}
          onClose={handleClose}
        />
      ) : null}
    </>
  );
}

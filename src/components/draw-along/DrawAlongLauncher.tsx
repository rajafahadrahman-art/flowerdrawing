"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { DrawingTutorial } from "@/lib/draw-along/types";

const DrawAlongModal = dynamic(
  () =>
    import("@/components/draw-along/DrawAlongModal").then(
      (mod) => mod.DrawAlongModal,
    ),
  { ssr: false, loading: () => null },
);

type DrawAlongLauncherProps = {
  tutorial: DrawingTutorial;
};

/**
 * Compact per-post launcher. Shows only the current tutorial.
 * Popup JS loads only after Start Drawing is pressed.
 */
export function DrawAlongLauncher({ tutorial }: DrawAlongLauncherProps) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);
  const startButtonRef = useRef<HTMLButtonElement>(null);

  const handleOpen = useCallback(() => {
    setActive(true);
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    if (open || !active) return;
    const frame = window.requestAnimationFrame(() => {
      startButtonRef.current?.focus();
      setActive(false);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [open, active]);

  return (
    <aside className="da-launcher" aria-label="Draw Along">
      <div className="da-launcher__media">
        <Image
          src={tutorial.featuredImage}
          alt={tutorial.featuredImageAlt}
          title={tutorial.featuredImageTitle}
          width={1448}
          height={1086}
          className="da-launcher__image"
          sizes="(max-width: 640px) 96px, 112px"
        />
      </div>
      <div className="da-launcher__copy">
        <p className="da-launcher__label">Draw Along</p>
        <p className="da-launcher__title">
          {tutorial.focusKeyword || tutorial.title}
        </p>
      </div>
      <button
        ref={startButtonRef}
        type="button"
        className="da-btn da-btn--primary da-launcher__cta"
        onClick={handleOpen}
      >
        Start Drawing
      </button>

      {active ? (
        <DrawAlongModal
          tutorial={tutorial}
          open={open}
          onClose={handleClose}
        />
      ) : null}
    </aside>
  );
}

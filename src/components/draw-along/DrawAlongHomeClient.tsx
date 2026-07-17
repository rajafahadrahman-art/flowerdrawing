"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { DrawingTutorial } from "@/lib/draw-along/types";

const DrawAlongModal = dynamic(
  () =>
    import("@/components/draw-along/DrawAlongModal").then(
      (mod) => mod.DrawAlongModal,
    ),
  { ssr: false, loading: () => null },
);

type DrawAlongHomeClientProps = {
  tutorials: DrawingTutorial[];
};

export function DrawAlongHomeClient({ tutorials }: DrawAlongHomeClientProps) {
  const [active, setActive] = useState<DrawingTutorial | null>(null);
  const [open, setOpen] = useState(false);
  const returnFocusRef = useRef<HTMLButtonElement | null>(null);

  const handleStart = useCallback(
    (tutorial: DrawingTutorial, button: HTMLButtonElement) => {
      returnFocusRef.current = button;
      setActive(tutorial);
      setOpen(true);
    },
    [],
  );

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    if (open || !active) return;
    const frame = window.requestAnimationFrame(() => {
      returnFocusRef.current?.focus();
      setActive(null);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [open, active]);

  if (tutorials.length === 0) {
    return (
      <p className="da-home-empty">
        Draw Along drawings will appear here when tutorials are ready.
      </p>
    );
  }

  return (
    <>
      <div className="da-home-grid">
        {tutorials.map((tutorial) => (
          <article key={tutorial.slug} className="da-home-card">
            <div className="da-home-card__media">
              <Image
                src={tutorial.featuredImage}
                alt={tutorial.featuredImageAlt}
                title={tutorial.featuredImageTitle}
                width={1448}
                height={1086}
                className="da-home-card__image"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 280px"
              />
            </div>
            <div className="da-home-card__body">
              <h2 className="da-home-card__title">
                {tutorial.focusKeyword || tutorial.title}
              </h2>
              <div className="da-home-card__actions">
                <button
                  type="button"
                  className="da-btn da-btn--primary"
                  onClick={(event) =>
                    handleStart(tutorial, event.currentTarget)
                  }
                >
                  Start Drawing
                </button>
                <Link
                  href={tutorial.articleUrl}
                  className="da-btn da-btn--secondary"
                >
                  View Tutorial
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {active ? (
        <DrawAlongModal tutorial={active} open={open} onClose={handleClose} />
      ) : null}
    </>
  );
}

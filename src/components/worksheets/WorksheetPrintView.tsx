"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type WorksheetPrintViewProps = {
  src: string;
  alt: string;
  title: string;
  returnHref: string;
  returnLabel: string;
};

export function WorksheetPrintView({
  src,
  alt,
  title,
  returnHref,
  returnLabel,
}: WorksheetPrintViewProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const [autoPrintAttempted, setAutoPrintAttempted] = useState(false);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  useEffect(() => {
    if (!imageLoaded || imageFailed || autoPrintAttempted) return;

    setAutoPrintAttempted(true);
    const timer = window.setTimeout(() => {
      window.print();
    }, 150);

    return () => window.clearTimeout(timer);
  }, [imageLoaded, imageFailed, autoPrintAttempted]);

  return (
    <div className="worksheet-print" data-worksheet-print="">
      <div className="worksheet-print__controls">
        <p className="worksheet-print__hint">
          {imageFailed
            ? "This worksheet is currently unavailable."
            : imageLoaded
              ? "Use Print if the dialog did not open automatically."
              : "Loading worksheet…"}
        </p>
        <div className="worksheet-print__actions">
          <button
            type="button"
            className="btn btn-print"
            onClick={handlePrint}
            disabled={!imageLoaded || imageFailed}
          >
            Print
          </button>
          <a href={returnHref} className="btn btn-ghost">
            {returnLabel}
          </a>
        </div>
      </div>

      <div className="worksheet-print__sheet">
        {imageFailed ? (
          <p className="worksheet-print__missing">
            Sorry, this worksheet could not be loaded. Please return to the tutorial and try again
            later.
          </p>
        ) : (
          <Image
            src={src}
            alt={alt}
            title={title}
            width={1055}
            height={1491}
            className="worksheet-print__image"
            sizes="100vw"
            priority
            onLoad={() => setImageLoaded(true)}
            onError={() => {
              setImageFailed(true);
              setImageLoaded(false);
            }}
          />
        )}
      </div>
    </div>
  );
}

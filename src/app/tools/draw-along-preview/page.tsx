import type { Metadata } from "next";
import { TutorialPreviewGrid } from "@/components/tutorial-player/TutorialPreviewGrid";

export const metadata: Metadata = {
  title: "Draw Along Tutorial Player Preview",
  description:
    "Isolated prototype preview of the FlowerDrawings.org interactive draw-along tutorial player.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  alternates: {
    canonical: "/tools/draw-along-preview/",
  },
};

export default function DrawAlongPreviewPage() {
  return (
    <div className="section-space">
      <div className="container-main space-y-8">
        <header className="mx-auto max-w-3xl space-y-4 text-center">
          <span className="meta-badge meta-badge--lavender inline-flex">
            Prototype Preview
          </span>
          <h1 className="heading-display text-balance">
            Draw Along Tutorial Player
          </h1>
          <p className="lead mx-auto max-w-2xl">
            This interactive drawing player is currently being tested and is not
            yet part of the main website.
          </p>
        </header>

        <TutorialPreviewGrid />
      </div>

      {/* Future interactive tool integration shell — keep hidden */}
      <div id="flower-drawing-tool-root" hidden />
    </div>
  );
}

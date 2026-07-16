import type { Metadata } from "next";
import { DrawAlongHomeClient } from "@/components/draw-along/DrawAlongHomeClient";
import "@/components/draw-along/draw-along.css";
import { JsonLd } from "@/components/seo/JsonLd";
import { getAllDrawAlongTutorials } from "@/lib/draw-along/get-draw-along";
import { buildBreadcrumbJsonLd, buildWebPageJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const pageTitle = "Draw Along | FlowerDrawings.org";
const pageDescription =
  "Choose a flower drawing and follow each step using the simple Draw Along experience.";
const pagePath = "/tools/draw-along/";
const pageUrl = `${siteConfig.url}${pagePath}`;

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: "website",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/flower-drawing/home/flower-drawing-hero.webp",
        width: 1734,
        height: 907,
        alt: "simple flower drawing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/images/flower-drawing/home/flower-drawing-hero.webp"],
  },
};

export default async function DrawAlongPage() {
  const tutorials = await getAllDrawAlongTutorials();

  return (
    <>
      <JsonLd
        data={buildWebPageJsonLd({
          name: pageTitle,
          description: pageDescription,
          url: pageUrl,
        })}
      />
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Draw Along", url: pageUrl },
        ])}
      />

      <div className="da-home-page">
        <div className="da-home-inner">
          <header className="da-home-header">
            <h1>Draw Along</h1>
            <p>
              Choose a flower drawing and follow each step using the simple Draw
              Along experience.
            </p>
          </header>
          <DrawAlongHomeClient tutorials={tutorials} />
        </div>
      </div>
    </>
  );
}

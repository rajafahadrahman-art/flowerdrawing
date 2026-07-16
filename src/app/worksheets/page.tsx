import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/tutorials/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section } from "@/components/ui/Section";
import { WorksheetCard } from "@/components/worksheets/WorksheetCard";
import { siteConfig } from "@/lib/site";
import { getWorksheetCollection } from "@/lib/worksheets/get-worksheets";

const title = "Printable Flower Drawing Worksheets | FlowerDrawings.org";
const description =
  "Browse free printable flower drawing worksheets for rose, tulip, sunflower, hibiscus, and beginner flower drawing practice.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: "/worksheets/",
  },
  openGraph: {
    title,
    description,
    url: `${siteConfig.url}/worksheets/`,
    type: "website",
    images: [
      {
        url: "/downloads/flower-drawing-worksheet.webp",
        width: 1055,
        height: 1491,
        alt: "flower drawing worksheets",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/downloads/flower-drawing-worksheet.webp"],
  },
};

export default async function WorksheetsPage() {
  const worksheets = await getWorksheetCollection();
  const pageUrl = `${siteConfig.url}/worksheets/`;

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: pageUrl,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: worksheets.map((worksheet, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: worksheet.title,
        url: worksheet.tutorialHref
          ? worksheet.tutorialHref.startsWith("http")
            ? worksheet.tutorialHref
            : `${siteConfig.url}${worksheet.tutorialHref === "/#worksheets" ? "/" : worksheet.tutorialHref}`
          : pageUrl,
      })),
    },
  };

  return (
    <>
      <JsonLd data={collectionJsonLd} />
      <Section tone="paper">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Worksheets" },
          ]}
        />
        <div className="mx-auto max-w-[760px] text-center">
          <h1 className="heading-display">Printable Flower Drawing Worksheets</h1>
          <p className="lead mt-4">
            Download free printable worksheets for beginner flower drawing practice. Each page
            includes a clear reference and space to redraw rose, tulip, sunflower, hibiscus, and
            simple flower shapes.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {worksheets.map((worksheet) => (
            <WorksheetCard key={worksheet.id} worksheet={worksheet} />
          ))}
        </div>
      </Section>
    </>
  );
}

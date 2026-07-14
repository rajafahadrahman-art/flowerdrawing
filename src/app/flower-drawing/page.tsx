import type { Metadata } from "next";
import { TutorialCard } from "@/components/tutorials/TutorialCard";
import { Breadcrumbs } from "@/components/tutorials/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section } from "@/components/ui/Section";
import { buildWebPageJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { getAllTutorials } from "@/lib/tutorials/get-tutorials";

const title = "Easy Flower Drawing Tutorials";
const description =
  "Browse easy flower drawing tutorials with step-by-step guidance, beginner tips, and printable worksheets.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/flower-drawing/",
  },
  openGraph: {
    title,
    description,
    url: `${siteConfig.url}/flower-drawing/`,
  },
};

export default async function FlowerDrawingArchivePage() {
  const tutorials = await getAllTutorials();

  return (
    <>
      <JsonLd
        data={buildWebPageJsonLd({
          name: title,
          description,
          url: `${siteConfig.url}/flower-drawing/`,
        })}
      />
      <Section>
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Drawing Tutorials" },
          ]}
        />
        <div className="mx-auto mb-10 max-w-[760px]">
          <h1 className="heading-display">Easy Flower Drawing Tutorials</h1>
          <p className="mt-4 lead">
            Browse our growing collection of individual flower tutorials. Each post focuses on one
            flower and includes a finished reference, visual drawing steps, simple instructions,
            practice tips, and a printable worksheet where available.
          </p>
        </div>

        {tutorials.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {tutorials.map((tutorial) => (
              <TutorialCard key={tutorial.slug} tutorial={tutorial} />
            ))}
          </div>
        ) : (
          <p className="text-muted">No tutorials published yet.</p>
        )}
      </Section>
    </>
  );
}

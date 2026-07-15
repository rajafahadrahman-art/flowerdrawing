import type { Metadata } from "next";
import { ImportantPageNav } from "@/components/ui/ImportantPageNav";
import { Section } from "@/components/ui/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildWebPageJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const title = "About FlowerDrawings.org | Drawing Tutorials and Worksheets";
const description =
  "Learn about FlowerDrawings.org, beginner-friendly flower drawing tutorials, printable worksheets, and creator AlexArts.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/about/" },
  openGraph: {
    title,
    description,
    url: `${siteConfig.url}/about/`,
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={buildWebPageJsonLd({
          name: title,
          description,
          url: `${siteConfig.url}/about/`,
        })}
      />
      <Section tone="paper">
        <div className="mx-auto max-w-[760px]">
          <div className="surface-card p-6 sm:p-8">
            <h1 className="heading-display">About FlowerDrawings.org</h1>
            <div className="prose-exact mt-6">
              <p>
                FlowerDrawings.org provides beginner-friendly flower drawing tutorials and printable
                practice worksheets. The goal is to make drawing feel clear, creative, and approachable
                for people who are just getting started.
              </p>
              <p>
                The resources are designed for children, school students, parents, teachers, and
                beginner artists. Tutorials focus on simple shapes, step-by-step guidance, and calm
                practice rather than complicated techniques.
              </p>
              <p>
                FlowerDrawings.org is created by AlexArts. The site shares drawing guides and
                worksheets that families, classrooms, and independent learners can use for creative
                practice.
              </p>
            </div>
            <ImportantPageNav />
          </div>
        </div>
      </Section>
    </>
  );
}

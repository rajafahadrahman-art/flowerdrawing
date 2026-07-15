import type { Metadata } from "next";
import { ImportantPageNav } from "@/components/ui/ImportantPageNav";
import { Section } from "@/components/ui/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildWebPageJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const title = "Disclaimer | FlowerDrawings.org";
const description =
  "Read the FlowerDrawings.org disclaimer for educational flower drawing tutorials and printable practice worksheets.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/disclaimer/" },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title,
    description,
    url: `${siteConfig.url}/disclaimer/`,
  },
};

export default function DisclaimerPage() {
  return (
    <>
      <JsonLd
        data={buildWebPageJsonLd({
          name: title,
          description,
          url: `${siteConfig.url}/disclaimer/`,
        })}
      />
      <Section tone="yellow">
        <div className="mx-auto max-w-[760px]">
          <div className="surface-card p-6 sm:p-8">
            <h1 className="heading-display">Disclaimer</h1>
            <div className="prose-exact mt-6">
              <p>
                FlowerDrawings.org provides drawing tutorials and printable worksheets for general
                educational and creative practice. The guides are intended to help beginners learn
                simple flower drawing steps at their own pace.
              </p>
              <p>
                Results may vary. Drawing skill depends on practice, materials, age, attention, and
                many other factors. The website does not guarantee a particular artistic outcome.
              </p>
              <p>
                Adults should supervise young children when using pencils, sharpeners, scissors,
                printers, or other art materials. Safe use of tools and materials is the
                responsibility of the parent, guardian, teacher, or adult supervising the activity.
              </p>
              <p>
                FlowerDrawings.org content is not professional training advice, and it should not be
                treated as medical, financial, or legal guidance.
              </p>
            </div>
            <ImportantPageNav />
          </div>
        </div>
      </Section>
    </>
  );
}

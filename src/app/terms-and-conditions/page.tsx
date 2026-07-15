import type { Metadata } from "next";
import { ImportantPageNav } from "@/components/ui/ImportantPageNav";
import { Section } from "@/components/ui/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildWebPageJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const title = "Terms and Conditions | FlowerDrawings.org";
const description =
  "Read the FlowerDrawings.org terms for personal, family, classroom, and educational use of tutorials and worksheets.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/terms-and-conditions/" },
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
    url: `${siteConfig.url}/terms-and-conditions/`,
  },
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <JsonLd
        data={buildWebPageJsonLd({
          name: title,
          description,
          url: `${siteConfig.url}/terms-and-conditions/`,
        })}
      />
      <Section tone="lavender">
        <div className="mx-auto max-w-[760px]">
          <div className="surface-card p-6 sm:p-8">
            <h1 className="heading-display">Terms and Conditions</h1>
            <div className="prose-exact mt-6">
              <p>
                By using FlowerDrawings.org, you agree to use the website responsibly for personal,
                family, classroom, and educational creative practice.
              </p>
              <h2 className="heading-section mt-8">Acceptable use</h2>
              <p>
                You may view tutorials and use the downloadable worksheets for personal learning,
                family activities, classroom practice, and other educational drawing practice.
              </p>
              <h2 className="heading-section mt-8">Website content</h2>
              <p>
                Tutorials, text, and images on FlowerDrawings.org are provided so visitors can learn
                and practice drawing. Please do not misuse the website, attempt to disrupt the
                service, or present the content in a misleading way.
              </p>
              <h2 className="heading-section mt-8">Worksheets</h2>
              <p>
                Printable worksheets are offered for practice. Access to those downloadable files is
                part of the website’s intended use for drawing practice and classroom or home
                activities.
              </p>
              <h2 className="heading-section mt-8">No account or payment terms</h2>
              <p>
                The current website does not offer user accounts, subscriptions, paid memberships, or
                refund processes. If those features are added later, these terms should be updated.
              </p>
              <h2 className="heading-section mt-8">Changes</h2>
              <p>
                FlowerDrawings.org may update pages, tutorials, worksheets, or these terms as the
                website grows. Continued use of the site after updates means you accept the revised
                terms shown on this page.
              </p>
            </div>
            <ImportantPageNav />
          </div>
        </div>
      </Section>
    </>
  );
}

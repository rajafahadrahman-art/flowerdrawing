import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ImportantPageNav } from "@/components/ui/ImportantPageNav";
import { Section } from "@/components/ui/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildWebPageJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const title = "Contact FlowerDrawings.org";
const description =
  "Contact FlowerDrawings.org for questions about flower drawing tutorials and printable practice worksheets.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/contact/" },
  openGraph: {
    title,
    description,
    url: `${siteConfig.url}/contact/`,
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={buildWebPageJsonLd({
          name: title,
          description,
          url: `${siteConfig.url}/contact/`,
        })}
      />
      <Section tone="sky">
        <div className="mx-auto max-w-[760px]">
          <div className="surface-card p-6 sm:p-8">
            <h1 className="heading-display">Contact FlowerDrawings.org</h1>
            <div className="prose-exact mt-6">
              <p>
                If you have a question about FlowerDrawings.org tutorials or printable worksheets,
                you can reach out using the contact button below.
              </p>
              <p>
                Parents, guardians, and teachers are encouraged to make contact on behalf of
                children. Please do not ask children to share personal information in order to use
                this website.
              </p>
            </div>
            <div className="mt-6">
              <ButtonLink href={`mailto:${siteConfig.email}`} variant="coral" icon="arrow">
                Contact AlexArts
              </ButtonLink>
            </div>
            <ImportantPageNav includeContact={false} />
          </div>
        </div>
      </Section>
    </>
  );
}

import type { Metadata } from "next";
import { ImportantPageNav } from "@/components/ui/ImportantPageNav";
import { Section } from "@/components/ui/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildWebPageJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const title = "Privacy Policy | FlowerDrawings.org";
const description =
  "Read the FlowerDrawings.org privacy policy explaining how this static tutorial website is served and used.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/privacy-policy/" },
  openGraph: {
    title,
    description,
    url: `${siteConfig.url}/privacy-policy/`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={buildWebPageJsonLd({
          name: title,
          description,
          url: `${siteConfig.url}/privacy-policy/`,
        })}
      />
      <Section>
        <div className="mx-auto max-w-[760px]">
          <div className="surface-card p-6 sm:p-8">
            <h1 className="heading-display">Privacy Policy</h1>
            <div className="prose-exact mt-6">
              <p>
                FlowerDrawings.org is a static website that publishes flower drawing tutorials and
                printable practice worksheets. This privacy policy describes the website’s current
                behavior in plain language.
              </p>
              <h2 className="heading-section mt-8">Who this site is for</h2>
              <p>
                Children should use FlowerDrawings.org with parent, guardian, or teacher supervision.
                The website does not knowingly collect personal information from children.
              </p>
              <h2 className="heading-section mt-8">Accounts and registration</h2>
              <p>
                The current website does not require user registration, user accounts, or paid
                subscriptions.
              </p>
              <h2 className="heading-section mt-8">Worksheets and downloads</h2>
              <p>
                Downloadable worksheets are provided as static files. Visitors can open or download
                those files directly from the website.
              </p>
              <h2 className="heading-section mt-8">Hosting and technical information</h2>
              <p>
                The website is hosted by third-party services. Those services may process basic
                technical information required to serve the website, such as connection details needed
                for security, reliability, and delivery of pages and files.
              </p>
              <h2 className="heading-section mt-8">What this site does not currently include</h2>
              <p>
                FlowerDrawings.org does not currently operate website user accounts, payment systems,
                newsletters, advertising platforms, or a contact form that stores submitted messages
                on this website. If those features are added later, this policy should be updated.
              </p>
              <h2 className="heading-section mt-8">Questions</h2>
              <p>
                If you have a privacy question about FlowerDrawings.org, please use the Contact page.
              </p>
            </div>
            <ImportantPageNav />
          </div>
        </div>
      </Section>
    </>
  );
}

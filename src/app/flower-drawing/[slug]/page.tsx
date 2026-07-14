import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/tutorials/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section } from "@/components/ui/Section";
import {
  roseColorSections,
  roseConclusion,
  roseInfo,
  roseIntro,
  roseMaterialsExtra,
  roseMaterialsNote,
  roseMistakes,
  roseOutlineSection,
  roseRealisticSection,
  roseStep8Closing,
  roseStep9Closing,
  roseSteps,
  roseStepsIntro,
  roseTips,
  roseTipsClosing,
  roseTipsIntro,
  roseWorksheetClosing,
  roseWorksheetIncludes,
  roseWorksheetIntro,
} from "@content/flower-drawing/rose-drawing/tutorial-content";
import {
  buildArticleJsonLd,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildWebPageJsonLd,
} from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import {
  getAdjacentTutorials,
  getAllTutorials,
  getTutorialMeta,
} from "@/lib/tutorials/get-tutorials";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const tutorials = await getAllTutorials();
  return tutorials.map((tutorial) => ({ slug: tutorial.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const meta = await getTutorialMeta(slug);
  if (!meta) return {};

  return {
    title: { absolute: meta.seoTitle },
    description: meta.metaDescription,
    alternates: {
      canonical: `/flower-drawing/${meta.slug}/`,
    },
    openGraph: {
      title: meta.seoTitle,
      description: meta.metaDescription,
      url: `${siteConfig.url}/flower-drawing/${meta.slug}/`,
      type: "article",
      images: [
        {
          url: meta.featuredImage,
          width: 1448,
          height: 1086,
          alt: meta.featuredImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.seoTitle,
      description: meta.metaDescription,
      images: [meta.featuredImage],
    },
  };
}

export default async function TutorialPage({ params }: PageProps) {
  const { slug } = await params;
  const meta = await getTutorialMeta(slug);
  if (!meta) notFound();

  // Phase 1: Rose is the only tutorial with full structured content.
  if (slug !== "rose-drawing") notFound();

  const { previous, next } = await getAdjacentTutorials(slug);
  const pageUrl = `${siteConfig.url}/flower-drawing/${meta.slug}/`;

  return (
    <>
      <JsonLd
        data={buildWebPageJsonLd({
          name: meta.seoTitle,
          description: meta.metaDescription,
          url: pageUrl,
        })}
      />
      <JsonLd
        data={buildArticleJsonLd({
          headline: meta.title,
          description: meta.metaDescription,
          url: pageUrl,
          image: `${siteConfig.url}${meta.featuredImage}`,
          datePublished: meta.publishedDate,
          dateModified: meta.updatedDate,
        })}
      />
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Drawing Tutorials", url: `${siteConfig.url}/flower-drawing/` },
          { name: meta.title, url: pageUrl },
        ])}
      />
      <JsonLd data={buildFaqJsonLd(meta.faqs)} />

      <Section>
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Drawing Tutorials", href: "/flower-drawing/" },
            { label: meta.title },
          ]}
        />

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="prose-exact max-w-[760px]">
            <h1 className="heading-display">{meta.title}</h1>
            {roseIntro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="surface-card overflow-hidden p-4">
            <Image
              src={meta.featuredImage}
              alt={meta.featuredImageAlt}
              title={meta.featuredImageTitle}
              width={1448}
              height={1086}
              className="h-auto w-full rounded-xl"
              sizes="(max-width: 1024px) 100vw, 520px"
              priority
            />
          </div>
        </div>

        <div className="mt-12">
          <h2 className="heading-section">Rose Drawing Tutorial Information</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {(
              [
                ["Difficulty", roseInfo.difficulty],
                ["Estimated time", roseInfo.estimatedTime],
                ["Drawing style", roseInfo.drawingStyle],
                ["Main subject", roseInfo.mainSubject],
                ["Best for", roseInfo.bestFor],
              ] as const
            ).map(([label, value]) => (
              <div key={label} className="surface-card p-4">
                <p className="text-sm text-muted">{label}</p>
                <p className="mt-1 font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section surface>
        <div className="mx-auto max-w-[760px] prose-exact">
          <h2 className="heading-section">Materials You Need</h2>
          <p>{roseMaterialsNote}</p>
          <ul>
            {meta.materials?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>{roseMaterialsExtra}</p>
        </div>
      </Section>

      <Section>
        <div className="mx-auto mb-8 max-w-[760px]">
          <h2 className="heading-section">Rose Drawing Step by Step</h2>
          {roseStepsIntro.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-muted">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="space-y-10">
          {roseSteps.map((step, index) => (
            <article
              key={step.title}
              className="surface-card overflow-hidden lg:grid lg:grid-cols-[0.95fr_1.05fr]"
            >
              {step.image ? (
                <div className="border-b border-border bg-white p-4 lg:border-b-0 lg:border-r">
                  <Image
                    src={step.image.src}
                    alt={step.image.alt}
                    title={index === roseSteps.length - 1 ? meta.featuredImageTitle : undefined}
                    width={step.image.width}
                    height={step.image.height}
                    className="h-auto w-full rounded-xl"
                    sizes="(max-width: 1024px) 100vw, 520px"
                  />
                </div>
              ) : null}
              <div className="prose-exact p-6">
                <h3 className="heading-card">{step.title}</h3>
                {step.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {step.bullets ? (
                  <ul>
                    {step.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
                {index === 7 ? <p>{roseStep8Closing}</p> : null}
                {index === 8 ? <p>{roseStep9Closing}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section surface>
        <div className="mx-auto max-w-[760px] prose-exact">
          <h2 className="heading-section">Simple Rose Drawing Tips for Beginners</h2>
          {roseTipsIntro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <ul>
            {roseTips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
          <p>{roseTipsClosing}</p>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-[760px] prose-exact">
          <h2 className="heading-section">How to Create Outline</h2>
          {roseOutlineSection.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {roseOutlineSection.versions.map((version) => (
            <div key={version.title} className="mt-6">
              <h3 className="heading-card">{version.title}</h3>
              <p>{version.text}</p>
            </div>
          ))}
          <p>{roseOutlineSection.closing}</p>
        </div>
      </Section>

      <Section surface>
        <div className="mx-auto max-w-[760px] prose-exact">
          <h2 className="heading-section">How to Make a Realistic Rose Drawing</h2>
          {roseRealisticSection.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {roseRealisticSection.areas.map((area) => (
            <div key={area.title} className="mt-6">
              <h3 className="heading-card">{area.title}</h3>
              <p>{area.text}</p>
            </div>
          ))}
          <p>{roseRealisticSection.closing}</p>
        </div>
      </Section>

      {roseColorSections.map((section, sectionIndex) => (
        <Section key={section.title} surface={sectionIndex % 2 === 0}>
          <div className="mx-auto max-w-[760px] prose-exact">
            <h2 className="heading-section">{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {"bullets" in section && section.bullets ? (
              <ul>
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            {"closing" in section && section.closing ? <p>{section.closing}</p> : null}
          </div>
        </Section>
      ))}

      <Section>
        <div className="mx-auto max-w-[760px] prose-exact">
          <h2 className="heading-section">Common Mistakes When Drawing a Rose</h2>
          <div className="mt-6 space-y-5">
            {roseMistakes.map((mistake) => (
              <div key={mistake.title}>
                <h3 className="heading-card">{mistake.title}</h3>
                <p>{mistake.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="worksheets" surface>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="surface-card overflow-hidden p-4">
            <Image
              src={meta.worksheetImage}
              alt="rose drawing worksheet"
              title="download rose drawing worksheet"
              width={1055}
              height={1491}
              className="mx-auto h-auto w-full max-w-[420px]"
              sizes="(max-width: 1024px) 100vw, 420px"
            />
          </div>
          <div className="prose-exact">
            <h2 className="heading-section">Downloadable Worksheet</h2>
            {roseWorksheetIntro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <ul>
              {roseWorksheetIncludes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {roseWorksheetClosing.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href={meta.worksheetPDF} variant="sage" download>
                Download Rose Drawing Worksheet
              </ButtonLink>
              <ButtonLink href={meta.worksheetPDF} variant="ghost" newTab>
                Print Practice Page
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <Section id="faq">
        <div className="mx-auto mb-8 max-w-[760px]">
          <h2 className="heading-section">Frequently Asked Questions</h2>
        </div>
        <div className="mx-auto max-w-[860px]">
          <FaqAccordion items={meta.faqs} idPrefix="rose-faq" />
        </div>
      </Section>

      <Section surface>
        <div className="surface-card mx-auto max-w-[860px] px-6 py-10 text-center sm:px-10">
          <h2 className="heading-section">Start Your Roses Drawing</h2>
          {roseConclusion.map((paragraph) => (
            <p key={paragraph} className="mx-auto mt-4 max-w-[640px] text-muted">
              {paragraph}
            </p>
          ))}
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/flower-drawing/">Start Drawing</ButtonLink>
            <ButtonLink href={meta.worksheetPDF} variant="sage" download>
              Download Worksheet
            </ButtonLink>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-[860px] flex-col gap-3 sm:flex-row sm:justify-between">
          {previous ? (
            <Link
              href={`/flower-drawing/${previous.slug}/`}
              className="btn btn-ghost justify-start"
            >
              Previous: {previous.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/flower-drawing/${next.slug}/`} className="btn btn-ghost justify-end">
              Next: {next.title}
            </Link>
          ) : (
            <Link href="/flower-drawing/" className="btn btn-ghost justify-end">
              View All Flower Tutorials
            </Link>
          )}
        </div>

        <div id="flower-drawing-tool-root" hidden />
      </Section>
    </>
  );
}

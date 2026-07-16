import Image from "next/image";
import Link from "next/link";
import { DrawAlongLauncher } from "@/components/draw-along/DrawAlongLauncher";
import "@/components/draw-along/draw-along.css";
import { PaperTape } from "@/components/decorations/PaperTape";
import { PencilStroke } from "@/components/decorations/PencilStroke";
import { TableOfContents } from "@/components/tutorial/TableOfContents";
import { Breadcrumbs } from "@/components/tutorials/Breadcrumbs";
import { TutorialCard } from "@/components/tutorials/TutorialCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { Section } from "@/components/ui/Section";
import type { DrawingTutorial } from "@/lib/draw-along/types";
import type {
  TutorialBody,
  TutorialProseSection,
  TutorialSectionTone,
} from "@/lib/tutorials/body-types";
import type { TutorialMeta } from "@/lib/tutorials/types";

type TutorialArticleProps = {
  meta: TutorialMeta;
  body: TutorialBody;
  previous: TutorialMeta | null;
  next: TutorialMeta | null;
  related: TutorialMeta[];
  drawAlong?: DrawingTutorial | null;
};

const stepBadgeTones = [
  "step-badge--coral",
  "step-badge--sky",
  "step-badge--mint",
  "step-badge--yellow",
  "step-badge--lavender",
  "step-badge--peach",
  "step-badge--coral",
  "step-badge--sky",
  "step-badge--mint",
] as const;

const stepCardTones = [
  "surface-card--coral",
  "surface-card--sky",
  "surface-card--mint",
  "surface-card--yellow",
  "surface-card--lavender",
  "surface-card--peach",
  "surface-card--coral",
  "surface-card--sky",
  "surface-card--mint",
] as const;

const infoCardTones = [
  "surface-card--mint",
  "surface-card--sky",
  "surface-card--lavender",
  "surface-card--yellow",
  "surface-card--coral",
  "surface-card--peach",
] as const;

function sectionTone(
  tone?: TutorialSectionTone,
): "default" | "paper" | "surface" | "sky" | "mint" | "lavender" | "yellow" {
  if (!tone || tone === "coral" || tone === "peach") return "default";
  return tone;
}

function renderClosing(closing?: string | string[]) {
  if (!closing) return null;
  if (typeof closing === "string") return <p>{closing}</p>;
  return closing.map((paragraph) => <p key={paragraph}>{paragraph}</p>);
}

function ProseSectionBlock({
  section,
  index,
}: {
  section: TutorialProseSection;
  index: number;
}) {
  const cardTone =
    section.cardVariant === "mistake"
      ? (cardIndex: number) =>
          cardIndex % 2 === 0 ? "surface-card--coral" : "surface-card--peach"
      : () => "surface-card";

  const tone = section.tone
    ? sectionTone(section.tone)
    : index % 2 === 0
      ? "surface"
      : "default";

  return (
    <Section id={section.id} tone={tone}>
      <div className="mx-auto max-w-[760px] prose-exact">
        {section.checklist ? (
          <div className="surface-card surface-card--yellow border border-yellow p-6 sm:p-8">
            <h2 className="heading-section toc-target">{section.title}</h2>
            {section.intro?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <ul className="checklist">
              {section.checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {renderClosing(section.closing)}
          </div>
        ) : (
          <>
            <h2 className="heading-section toc-target">{section.title}</h2>
            {section.intro?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.bullets ? (
              <ul>
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            {section.cards ? (
              <div className="mt-6 space-y-4">
                {section.cards.map((card, cardIndex) => (
                  <div
                    key={card.id}
                    id={card.id}
                    className={`surface-card toc-target p-5 ${cardTone(cardIndex)}`}
                  >
                    <h3 className="heading-card">{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                ))}
              </div>
            ) : null}
            {renderClosing(section.closing)}
          </>
        )}
      </div>
    </Section>
  );
}

export function TutorialArticle({
  meta,
  body,
  previous,
  next,
  related,
  drawAlong = null,
}: TutorialArticleProps) {
  return (
    <>
      <Section tone="paper">
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
            <PencilStroke className="mt-2 mb-4" color="#F38C7A" />
            {body.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="relative">
            <div className="decoration-hide-mobile pointer-events-none absolute -right-2 -top-3 z-10">
              <PaperTape rotate={10} />
            </div>
            <div className="surface-card overflow-hidden p-4 shadow-[var(--shadow-feature)]">
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
        </div>

        {drawAlong ? (
          <div className="mx-auto mt-8 max-w-[860px]">
            <DrawAlongLauncher tutorial={drawAlong} />
          </div>
        ) : null}

        <div className="mx-auto mt-10 max-w-[860px]">
          <TableOfContents items={body.toc} />
        </div>
      </Section>

      {body.preInfoSections?.map((section, index) => (
        <ProseSectionBlock key={section.id} section={section} index={index} />
      ))}

      <Section id={body.info.id} tone="paper">
        <h2 className="heading-section toc-target">{body.info.title}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {body.info.items.map((item, index) => (
            <div
              key={item.label}
              className={`surface-card p-4 ${infoCardTones[index % infoCardTones.length]}`}
            >
              <p className="text-sm text-muted">{item.label}</p>
              <p className="mt-1 font-semibold">{item.value}</p>
            </div>
          ))}
        </div>
        {body.info.closing ? (
          <p className="prose-exact mt-6 max-w-[760px]">{body.info.closing}</p>
        ) : null}
      </Section>

      {body.materials ? (
        <Section id={body.materials.id} tone="mint">
          <div className="mx-auto max-w-[760px] prose-exact">
            <h2 className="heading-section toc-target">{body.materials.title}</h2>
            <p>{body.materials.note}</p>
            <ul>
              {body.materials.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {body.materials.extra ? <p>{body.materials.extra}</p> : null}
          </div>
        </Section>
      ) : null}

      {body.preStepSections?.map((section, index) => (
        <ProseSectionBlock key={section.id} section={section} index={index} />
      ))}

      <Section id={body.steps.id}>
        <div className="mx-auto mb-8 max-w-[760px]">
          <h2 className="heading-section toc-target">{body.steps.title}</h2>
          {body.steps.intro.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-muted">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="space-y-10">
          {body.steps.items.map((step, index) => (
            <article
              key={step.title}
              className={`surface-card overflow-hidden lg:grid lg:grid-cols-[0.95fr_1.05fr] ${stepCardTones[index % stepCardTones.length]}`}
            >
              {step.image ? (
                <div className="border-b border-border bg-white p-4 lg:border-b-0 lg:border-r">
                  <Image
                    src={step.image.src}
                    alt={step.image.alt}
                    title={
                      index === body.steps.items.length - 1
                        ? meta.featuredImageTitle
                        : undefined
                    }
                    width={step.image.width}
                    height={step.image.height}
                    className="h-auto w-full rounded-xl"
                    sizes="(max-width: 1024px) 100vw, 520px"
                  />
                </div>
              ) : null}
              <div className="prose-exact p-6">
                <div className="mb-3 flex items-start gap-3">
                  <span
                    className={`step-badge ${stepBadgeTones[index % stepBadgeTones.length]}`}
                  >
                    {index + 1}
                  </span>
                  <h3 className="heading-card">{step.title}</h3>
                </div>
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
                {step.closing ? <p>{step.closing}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </Section>

      {body.sections.map((section, index) => (
        <ProseSectionBlock key={section.id} section={section} index={index} />
      ))}

      <Section id={body.worksheet.id} tone="sky">
        <div className="feature-frame grid gap-10 overflow-hidden bg-gradient-to-br from-mint-light/55 via-white to-sky-light/70 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-[420px]">
            <div className="decoration-hide-mobile pointer-events-none absolute -left-2 -top-3 z-10">
              <PaperTape rotate={-10} />
            </div>
            <div className="image-frame overflow-hidden p-3 shadow-[var(--shadow-feature)]">
              <Image
                src={meta.worksheetImage}
                alt={body.worksheet.imageAlt}
                title={body.worksheet.imageTitle}
                width={body.worksheet.imageWidth}
                height={body.worksheet.imageHeight}
                className="mx-auto h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
            </div>
          </div>
          <div className="prose-exact">
            <h2 className="heading-section toc-target">{body.worksheet.title}</h2>
            {body.worksheet.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {body.worksheet.includes.length > 0 ? (
              <ul>
                {body.worksheet.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            {body.worksheet.closing.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href={meta.worksheetPDF} variant="download" download>
                Download Free Worksheet
              </ButtonLink>
              <ButtonLink href={meta.worksheetPDF} variant="print" newTab>
                Print Now
              </ButtonLink>
              <ButtonLink href="/worksheets/" variant="sky">
                Browse Drawing Worksheets
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      {meta.faqs.length > 0 ? (
        <Section id={body.faqId} tone="lavender">
          <div className="mx-auto mb-8 max-w-[760px]">
            <h2 className="heading-section toc-target">{body.faqTitle}</h2>
          </div>
          <div className="mx-auto max-w-[860px]">
            <FaqAccordion items={meta.faqs} idPrefix={`${meta.slug}-faq`} />
          </div>
        </Section>
      ) : null}

      <Section id={body.cta.id} tone="paper">
        <div className="surface-card mx-auto max-w-[860px] overflow-hidden border border-border bg-ink px-6 py-10 text-center text-paper shadow-[var(--shadow-feature)] sm:px-10">
          <div
            aria-hidden="true"
            className="mb-5 h-1.5 rounded-full bg-gradient-to-r from-coral via-yellow to-mint"
          />
          <h2 className="heading-section toc-target text-paper">{body.cta.title}</h2>
          {body.cta.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mx-auto mt-4 max-w-[640px] text-white/75">
              {paragraph}
            </p>
          ))}
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/flower-drawing/">Start Drawing</ButtonLink>
            <ButtonLink href={meta.worksheetPDF} variant="download" download>
              Download Worksheet
            </ButtonLink>
          </div>
        </div>

        {related.length > 0 ? (
          <div className="mx-auto mt-12 max-w-[1240px]">
            <h2 className="heading-section text-center">Related Tutorials</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {related.slice(0, 3).map((tutorial) => (
                <TutorialCard key={tutorial.slug} tutorial={tutorial} />
              ))}
            </div>
          </div>
        ) : null}

        <nav
          aria-label="Tutorial sequence"
          className="mx-auto mt-10 flex max-w-[860px] flex-col gap-3 sm:flex-row sm:justify-between"
        >
          {previous ? (
            <Link
              href={`/flower-drawing/${previous.slug}/`}
              className="btn btn-sky justify-start"
            >
              Previous: {previous.focusKeyword}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/flower-drawing/${next.slug}/`} className="btn btn-coral justify-end">
              Next: {next.focusKeyword}
            </Link>
          ) : (
            <Link href="/flower-drawing/" className="btn btn-coral justify-end">
              View All Flower Tutorials
            </Link>
          )}
        </nav>

        <div id="flower-drawing-tool-root" hidden />
      </Section>
    </>
  );
}

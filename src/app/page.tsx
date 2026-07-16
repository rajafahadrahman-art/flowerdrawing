import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { DrawAlongLauncher } from "@/components/draw-along/DrawAlongLauncher";
import { ColoredPencils } from "@/components/decorations/ColoredPencils";
import { CrayonCluster } from "@/components/decorations/CrayonCluster";
import { FlowerDoodle } from "@/components/decorations/FlowerDoodle";
import { PaintDots } from "@/components/decorations/PaintDots";
import { PaperTape } from "@/components/decorations/PaperTape";
import { PencilStroke } from "@/components/decorations/PencilStroke";
import { StarDoodle } from "@/components/decorations/StarDoodle";
import { AboutAuthor } from "@/components/ui/AboutAuthor";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ShapeConceptIcon } from "@/components/ui/Icons";
import { Section } from "@/components/ui/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { TutorialCard } from "@/components/tutorials/TutorialCard";
import { TableOfContents } from "@/components/tutorial/TableOfContents";
import { getFlowerDrawingTutorial } from "@/lib/draw-along/get-draw-along";
import {
  beginnerHabits,
  drawingTips,
  homepageFaqs,
  homepageSteps,
  homepageTocItems,
  pencilTechniques,
  practiceIdeas,
  shapeElements,
  skillLevels,
  worksheetIncludes,
} from "@/lib/homepage-content";
import {
  buildFaqJsonLd,
  buildWebPageJsonLd,
  buildWebsiteJsonLd,
} from "@/lib/seo";
import { homepageSeo, siteConfig } from "@/lib/site";
import { getAllTutorials } from "@/lib/tutorials/get-tutorials";

export const metadata: Metadata = {
  title: { absolute: homepageSeo.title },
  description: homepageSeo.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: homepageSeo.title,
    description: homepageSeo.description,
    url: siteConfig.url,
    images: [
      {
        url: "/images/flower-drawing/home/flower-drawing-hero.webp",
        width: 1734,
        height: 907,
        alt: "simple flower drawing",
      },
    ],
  },
};

const stepBadgeTones = [
  "step-badge--sky",
  "step-badge--coral",
  "step-badge--mint",
  "step-badge--yellow",
  "step-badge--lavender",
  "step-badge--peach",
  "step-badge--sky",
] as const;

const stepCardTones = [
  "surface-card--sky",
  "surface-card--coral",
  "surface-card--mint",
  "surface-card--yellow",
  "surface-card--lavender",
  "surface-card--peach",
  "surface-card--paper",
] as const;

const ideaCardTones = [
  "surface-card--sky",
  "surface-card--yellow",
  "surface-card--coral",
  "surface-card--mint",
  "surface-card--lavender",
  "surface-card--peach",
] as const;

const shapeIcons = [
  "shape",
  "proportion",
  "overlap",
  "line",
  "texture",
  "shadow",
] as const;

const shapeCardTones = [
  "surface-card--sky",
  "surface-card--mint",
  "surface-card--coral",
  "surface-card--yellow",
  "surface-card--lavender",
  "surface-card--peach",
] as const;

const skillCardTones = [
  "surface-card--mint",
  "surface-card--sky",
  "surface-card--lavender",
] as const;

export default async function HomePage() {
  const tutorials = await getAllTutorials();
  const flowerDrawing = getFlowerDrawingTutorial();

  return (
    <>
      <JsonLd data={buildWebsiteJsonLd()} />
      <JsonLd
        data={buildWebPageJsonLd({
          name: homepageSeo.title,
          description: homepageSeo.description,
          url: `${siteConfig.url}/`,
        })}
      />
      <JsonLd data={buildFaqJsonLd(homepageFaqs)} />

      {/* 1. Hero banner */}
      <section className="border-b border-border bg-paper">
        <div className="container-main py-8 lg:py-12">
          <div className="feature-frame relative overflow-hidden px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
            <div className="decoration-hide-mobile pointer-events-none absolute right-8 top-6 opacity-70">
              <ColoredPencils />
            </div>
            <div className="decoration-hide-mobile pointer-events-none absolute bottom-8 left-8 opacity-70">
              <CrayonCluster />
            </div>

            <div className="relative grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
              <div className="reveal space-y-5">
                <p className="eyebrow">{siteConfig.name}</p>
                <div>
                  <h1 className="heading-display">
                    Flower Drawing Easy and Simple Step-by-Step Guide for Beginners
                  </h1>
                  <PencilStroke className="mt-3" color="#75C9F5" />
                </div>
                <p className="lead">
                  A flower drawing does not have to begin with a complicated sketch. A few light
                  lines, basic shapes, and simple petal forms are often enough to create something
                  beautiful.
                </p>
                <div className="flex flex-wrap gap-3">
                  <ButtonLink href="/flower-drawing/">Explore Drawing Tutorials</ButtonLink>
                  <ButtonLink href="/worksheets/" variant="download">
                    Download Practice Worksheets
                  </ButtonLink>
                </div>
              </div>

              <div className="reveal relative">
                <div className="decoration-hide-mobile pointer-events-none absolute -right-2 -top-3 z-10">
                  <PaperTape rotate={12} />
                </div>
                <div className="image-frame overflow-hidden shadow-[var(--shadow-feature)]">
                  <Image
                    src="/images/flower-drawing/home/flower-drawing-hero.webp"
                    alt="simple flower drawing"
                    title="flower drawing easy"
                    width={1734}
                    height={907}
                    priority
                    className="h-auto w-full"
                    sizes="(max-width: 1024px) 100vw, 560px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main introduction */}
      <Section>
        <div className="container-prose prose-exact mx-auto max-w-[760px]">
          <p>
            This collection is made for beginners, students, kids, and anyone who wants to enjoy
            drawing flowers without feeling overwhelmed. You can start with a basic flower drawing,
            follow a clear step-by-step process, and practice at your own pace using printable
            worksheets.
          </p>
          <p>
            Whether you want to create a quick pencil sketch, a simple floral design, or a detailed
            flower with a stem and leaves, you will find approachable ideas and visual tutorials to
            help you get started.
          </p>
        </div>
      </Section>

      {/* Flower Drawing Draw Along launcher, then collapsed Table of Contents */}
      <Section>
        <div className="mx-auto max-w-[860px] space-y-6">
          {flowerDrawing ? (
            <DrawAlongLauncher tutorial={flowerDrawing} />
          ) : null}
          <TableOfContents
            items={[...homepageTocItems]}
            defaultOpen={false}
          />
        </div>
      </Section>

      {/* Homepage banner 2 */}
      <section className="w-full">
        <Image
          src="/images/flower-drawing/home/homepagebanner2.webp"
          alt="Realistic Flower Drawing"
          title="flowers drawing"
          width={1774}
          height={887}
          className="h-auto w-full"
          sizes="100vw"
        />
      </section>

      {/* 3. Explore Easy Flower Drawing Tutorial */}
      <Section id="explore-easy-flower-drawing-tutorial" tone="sky">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="prose-exact">
            <h2 className="heading-section">Explore Easy Flower Drawing Tutorial</h2>
            <p>
              An easy drawing of a flower usually begins with familiar shapes such as circles,
              ovals, curved lines, and soft pointed forms. These shapes create the center, petals,
              stem, and leaves before any detail is added.
            </p>
            <p>
              You do not need to make every line perfect. Flowers naturally vary in shape, size, and
              direction, so small differences can make your drawing feel more organic.
            </p>
            <p>
              Start with a light pencil outline and focus on the overall form. Once the basic
              structure looks balanced, refine the petals, clean up extra guidelines, and add simple
              details.
            </p>
            <p>
              Our step-by-step flower drawing tutorials are arranged to make the process easy to
              follow. Each guide includes a completed drawing, clear visual steps, beginner-friendly
              instructions, and a downloadable practice worksheet where available.
            </p>
            <p>
              You can keep your flower drawing simple for a quick activity or follow a more detailed
              tutorial when you are ready for an extra challenge.
            </p>
          </div>
          <div className="relative">
            <div className="decoration-hide-mobile pointer-events-none absolute -left-3 -top-3 z-10">
              <PaperTape rotate={-10} />
            </div>
            <div className="surface-card overflow-hidden p-3">
              <Image
                src="/images/flower-drawing/home/flower-drawing.webp"
                alt="flower drawing"
                title="easy flower drawing"
                width={1254}
                height={1254}
                className="h-auto w-full rounded-[0.85rem]"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* 4. How to Draw a Flower Step by Step */}
      <Section id="how-to-draw-a-flower-step-by-step">
        <div className="mx-auto mb-10 max-w-[760px] text-center">
          <h2 className="heading-section">How to Draw a Flower Step by Step</h2>
          <p className="mt-4 lead">
            Most flowers can be broken into a few manageable parts. The exact petal shape may
            change, but the basic drawing process often remains similar.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {homepageSteps.map((step, index) => (
              <article
                key={step.title}
                className={`surface-card surface-card--hover flex h-full flex-col overflow-hidden ${stepCardTones[index]}`}
              >
                {"image" in step && step.image ? (
                  <div className="border-b border-border bg-white p-4">
                    <Image
                      src={step.image.src}
                      alt={step.image.alt}
                      title={"title" in step.image ? step.image.title : undefined}
                      width={step.image.width}
                      height={step.image.height}
                      className="mx-auto h-auto w-full max-w-[320px]"
                      sizes="(max-width: 768px) 100vw, 320px"
                    />
                  </div>
                ) : null}
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div className="flex items-start gap-3">
                    <span className={`step-badge ${stepBadgeTones[index]}`}>{index + 1}</span>
                    <h3 className="heading-card">{step.title}</h3>
                  </div>
                  {step.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-muted">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
        </div>

        <div className="mt-8 flex justify-center">
          <ButtonLink href="/flower-drawing/" variant="sky">
            View Step-by-Step Drawing Guides
          </ButtonLink>
        </div>
      </Section>

      {/* 5. Simple Flower Drawing Ideas to Practice */}
      <Section id="simple-flower-drawing-ideas-to-practice" tone="paper">
        <div className="mx-auto mb-8 max-w-[760px]">
          <div className="mb-2 flex items-center gap-3">
            <h2 className="heading-section">Simple Flower Drawing Ideas to Practice</h2>
            <span className="decoration-hide-mobile">
              <FlowerDoodle className="h-10 w-10" />
            </span>
          </div>
          <p className="mt-4">
            Not every practice session needs a complicated subject. Short drawing exercises are
            useful for improving line control, proportion, and confidence.
          </p>
          <p className="mt-3">Try these approachable ideas in your sketchbook:</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {practiceIdeas.map((idea, index) => (
            <article
              key={idea.title}
              className={`surface-card surface-card--hover relative p-5 ${ideaCardTones[index]}`}
            >
              {index % 3 === 0 ? (
                <span className="decoration-hide-mobile pointer-events-none absolute right-3 top-3 opacity-60">
                  <StarDoodle className="h-5 w-5" />
                </span>
              ) : null}
              <h3 className="heading-card">{idea.title}</h3>
              {idea.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-3 text-muted">
                  {paragraph}
                </p>
              ))}
            </article>
          ))}
        </div>
      </Section>

      {/* 6. Flower Drawing for Beginners */}
      <Section id="flower-drawing-for-beginners">
        <div className="feature-frame mx-auto grid max-w-[960px] overflow-hidden lg:grid-cols-[1fr_0.35fr]">
          <div className="prose-exact bg-white p-6 sm:p-8">
            <div className="mb-2 flex items-start justify-between gap-4">
              <h2 className="heading-section">Flower Drawing for Beginners</h2>
              <span className="decoration-hide-mobile shrink-0 opacity-80">
                <ColoredPencils className="h-10 w-16" />
              </span>
            </div>
            <p>
              Beginners often make the process harder by trying to draw every detail immediately. A
              better approach is to work from large shapes toward smaller ones.
            </p>
            <p>
              Begin by observing the direction of the flower. Is it facing forward, leaning to one
              side, or turning upward? Next, look at the center, the outer edge of the petals, and
              the way the stem connects to the bloom.
            </p>
            <p>Use these simple habits while practicing:</p>
            <ul className="checklist">
              {beginnerHabits.map((habit) => (
                <li key={habit}>{habit}</li>
              ))}
            </ul>
          </div>
          <div className="hidden bg-sky-light p-6 lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-4">
            <FlowerDoodle />
            <PaintDots />
            <CrayonCluster />
          </div>
        </div>
      </Section>

      {/* 7. From Basic Shapes to a Beautiful Flower Drawing */}
      <Section id="from-basic-shapes-to-a-beautiful-flower-drawing" tone="mint">
        <div className="mx-auto mb-8 max-w-[760px] prose-exact">
          <h2 className="heading-section">From Basic Shapes to a Beautiful Flower Drawing</h2>
          <p>
            A finished drawing may look detailed, but its structure is usually based on a small
            group of simple forms.
          </p>
          <p>
            The flower center may begin as a circle or oval. Petals are created with curved lines,
            teardrop shapes, or pointed forms. Stems are built with parallel lines, while leaves
            often start with a center guideline and an outer contour.
          </p>
          <p>
            Our flowers simple drawing exercises are designed to help beginners understand petals,
            centers, stems, and leaves through basic shapes.
          </p>
          <p>Pay attention to the following elements:</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {shapeElements.map((element, index) => (
            <article
              key={element.title}
              className={`surface-card surface-card--hover p-5 ${shapeCardTones[index]}`}
            >
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-ink shadow-[var(--shadow-button)]">
                <ShapeConceptIcon name={shapeIcons[index]} />
              </div>
              <h3 className="heading-card">{element.title}</h3>
              <p className="mt-3 text-muted">{element.text}</p>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-[760px] text-muted">
          These basic drawing ideas can be used in simple sketches, floral illustrations,
          greeting-card designs, worksheets, and more detailed pencil artwork.
        </p>
      </Section>

      {/* 8. Sketching Flowers with Pencil */}
      <Section id="sketching-flowers-with-pencil">
        <div className="graphite-paper mx-auto max-w-[860px] overflow-hidden rounded-[1.4rem] border border-border p-6 shadow-[var(--shadow-card)] sm:p-8">
          <div className="prose-exact rounded-[1.1rem] border border-border bg-lavender-light/50 p-5 sm:p-6">
            <h2 className="heading-section">Sketching Flowers with Pencil</h2>
            <p>
              Pencil is a flexible choice for drawing because it allows you to build the image
              gradually.
            </p>
            <p>
              Start with gentle pressure and make loose marks. At this stage, you are deciding where
              the flower will sit on the page and how large it will be.
            </p>
            <p>
              Once the proportions feel right, define the petal edges and erase the lines that are no
              longer needed. Add darker strokes near overlapping forms and use softer marks in
              lighter areas.
            </p>
            <p>For a beginner-friendly pencil drawing, keep the shading simple. You can use:</p>
            <ul>
              {pencilTechniques.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              Avoid pressing too hard during the first sketch. Heavy lines can be difficult to remove
              and may make the final drawing look stiff.
            </p>
            <p>
              A regular graphite pencil, eraser, smooth paper, and pencil sharpener are enough for
              most basic practice sessions.
            </p>
          </div>
        </div>
      </Section>

      {/* 9. Download Worksheets for Practice */}
      <Section id="worksheets" tone="sky">
        <div className="feature-frame grid gap-10 overflow-hidden bg-gradient-to-br from-mint-light/60 via-white to-sky-light/70 p-6 sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-[420px]">
            <div className="decoration-hide-mobile pointer-events-none absolute -left-2 -top-3 z-10">
              <PaperTape rotate={-12} />
            </div>
            <div className="decoration-hide-mobile pointer-events-none absolute -bottom-2 -right-2 z-10">
              <PaperTape rotate={8} />
            </div>
            <div className="image-frame overflow-hidden p-3 shadow-[var(--shadow-feature)]">
              <Image
                src="/downloads/flower-drawing-worksheet.webp"
                alt="flower drawing worksheets"
                title="download practice worksheets"
                width={1055}
                height={1491}
                className="mx-auto h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
            </div>
          </div>
          <div className="prose-exact">
            <h2 className="heading-section">Download Worksheets for Practice</h2>
            <p>
              These flowers for drawing worksheets provide clear reference pictures, tracing
              outlines, and blank areas for independent practice.
            </p>
            <p>
              Our downloadable flower drawing worksheets are designed to support hands-on practice.
              Each worksheet include:
            </p>
            <ul>
              {worksheetIncludes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              You can print a worksheet and draw directly on the page or keep the finished picture
              beside your sketchbook as a reference.
            </p>
            <p>
              Tracing can help you understand the movement of a line, but try drawing the same flower
              again without tracing. This turns a guided activity into an independent drawing
              exercise.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink
                href="/downloads/flower-drawing-worksheet.pdf"
                variant="download"
                download
              >
                Download Free Worksheet
              </ButtonLink>
              <ButtonLink href="/downloads/flower-drawing-worksheet.pdf" variant="print" newTab>
                Print Now
              </ButtonLink>
              <ButtonLink href="/worksheets/" variant="sky">
                Browse Drawing Worksheets
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      {/* 10. Skill levels */}
      <Section id="find-a-flower-drawing-that-matches-your-skill-level">
        <div className="mx-auto mb-8 max-w-[760px]">
          <h2 className="heading-section">Find a Flower Drawing That Matches Your Skill Level</h2>
          <p className="mt-4">
            Choose a simple floral drawing that matches your current skill level and the amount of
            detail you want to practice.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {skillLevels.map((level, index) => (
            <article
              key={level.title}
              className={`surface-card surface-card--hover p-5 ${skillCardTones[index]}`}
            >
              <h3 className="heading-card">{level.title}</h3>
              <p className="mt-3 text-muted">{level.text}</p>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-[760px] text-muted">
          You can repeat an easy tutorial several times before moving to the next level. Improvement
          often comes from practicing familiar shapes rather than constantly choosing a new subject.
        </p>
      </Section>

      {/* 11. Drawing tips */}
      <Section id="tips-for-better-drawing-of-flower" tone="paper">
        <div className="mx-auto max-w-[760px]">
          <div className="surface-card surface-card--yellow border border-yellow p-6 sm:p-8">
            <h2 className="heading-section">Tips for Better Drawing of Flower</h2>
            <ul className="checklist mt-4">
              {drawingTips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
            <p className="mt-4 text-muted">
              The goal is not to produce a perfect picture on the first attempt. Each sketch helps
              you become more comfortable with lines, shapes, observation, and proportion.
            </p>
          </div>
        </div>
      </Section>

      {/* 12. Explore More Easy Flowers Drawing Ideas */}
      <Section id="explore-more-easy-flowers-drawing-ideas">
        <div className="mx-auto mb-8 max-w-[760px]">
          <h2 className="heading-section">Explore More Easy Flowers Drawing Ideas</h2>
          <p className="mt-4">
            Browse our growing collection of individual flower tutorials. Each post focuses on one
            flower and includes a finished reference, visual drawing steps, simple instructions,
            practice tips, and a printable worksheet where available.
          </p>
          <p className="mt-3">
            New tutorials will be added regularly, giving you more petal shapes, plant forms,
            sketching ideas, and floral designs to explore.
          </p>
        </div>
        <div className="mb-6">
          <article className="surface-card surface-card--hover surface-card--mint overflow-hidden">
            <Link href="/tools/draw-along/" className="block p-5 sm:p-6">
              <p className="eyebrow text-mint-dark">Interactive steps</p>
              <h3 className="heading-card mt-2">Draw Along</h3>
              <span className="btn btn-primary mt-4 !min-h-11">All Drawings</span>
            </Link>
          </article>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {tutorials.map((tutorial) => (
            <TutorialCard key={tutorial.slug} tutorial={tutorial} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/flower-drawing/" variant="coral">
            View All Flower Tutorials
          </ButtonLink>
        </div>
      </Section>

      {/* 13. FAQs */}
      <Section id="faq" tone="lavender">
        <div className="mx-auto mb-8 max-w-[760px]">
          <h2 className="heading-section">Frequently Asked Questions</h2>
        </div>
        <div className="mx-auto max-w-[860px]">
          <FaqAccordion items={homepageFaqs} idPrefix="home-faq" />
        </div>
      </Section>

      {/* 14. Final CTA */}
      <Section id="start-your-next-flower-drawing">
        <div className="relative mx-auto max-w-[860px] overflow-hidden rounded-[1.5rem] border border-border bg-ink px-6 py-10 text-center text-paper shadow-[var(--shadow-feature)] sm:px-10">
          <div className="decoration-hide-mobile pointer-events-none absolute left-6 top-6 opacity-70">
            <FlowerDoodle />
          </div>
          <div className="decoration-hide-mobile pointer-events-none absolute bottom-6 right-6 opacity-70">
            <ColoredPencils />
          </div>
          <div
            aria-hidden="true"
            className="mb-5 h-1.5 rounded-full bg-gradient-to-r from-sky via-mint to-yellow"
          />
          <h2 className="heading-section text-paper">Start Your Next Flower Drawing</h2>
          <p className="mx-auto mt-4 max-w-[640px] text-white/75">
            Choose a tutorial, prepare your pencil and paper to begin with the first light shape. Do
            not worry about making the drawing perfect.
          </p>
          <p className="mx-auto mt-3 max-w-[640px] text-white/75">
            Follow the steps, make adjustments as you go, and use the downloadable worksheets for
            extra practice. With each new sketch, petals, stems, leaves, and floral shapes will
            become easier to understand and draw.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/flower-drawing/">Start Drawing</ButtonLink>
            <ButtonLink href="/worksheets/" variant="sky">
              View Practice Worksheets
            </ButtonLink>
          </div>
        </div>
        <div id="flower-drawing-tool-root" hidden />
      </Section>

      <AboutAuthor />
    </>
  );
}

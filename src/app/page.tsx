import Image from "next/image";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { Section } from "@/components/ui/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { TutorialCard } from "@/components/tutorials/TutorialCard";
import {
  beginnerHabits,
  drawingTips,
  homepageFaqs,
  homepageSteps,
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

export default async function HomePage() {
  const tutorials = await getAllTutorials();

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
      <section className="border-b border-border bg-surface">
        <div className="container-main grid items-center gap-8 py-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-12">
          <div className="reveal space-y-5">
            <p className="eyebrow">FlowerDrawings.com</p>
            <h1 className="heading-display">
              Flower Drawing Easy and Simple Step-by-Step Guide for Beginners
            </h1>
            <p className="lead">
              A flower drawing does not have to begin with a complicated sketch. A few light lines,
              basic shapes, and simple petal forms are often enough to create something beautiful.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/flower-drawing/">Explore Drawing Tutorials</ButtonLink>
              <ButtonLink
                href="/downloads/flower-drawing-worksheet.pdf"
                variant="sage"
                download
              >
                Download Practice Worksheets
              </ButtonLink>
            </div>
          </div>
          <div className="reveal overflow-hidden rounded-2xl border border-border bg-white shadow-soft">
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

      {/* 3. Explore Easy Flower Drawing Tutorial */}
      <Section surface>
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
      </Section>

      {/* 4. How to Draw a Flower Step by Step */}
      <Section>
        <div className="mx-auto mb-10 max-w-[760px] text-center">
          <h2 className="heading-section">How to Draw a Flower Step by Step</h2>
          <p className="mt-4 lead">
            Most flowers can be broken into a few manageable parts. The exact petal shape may
            change, but the basic drawing process often remains similar.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {homepageSteps.map((step) => (
            <article key={step.title} className="surface-card flex h-full flex-col overflow-hidden">
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
                <h3 className="heading-card">{step.title}</h3>
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
          <ButtonLink href="/flower-drawing/">View Step-by-Step Drawing Guides</ButtonLink>
        </div>
      </Section>

      {/* 5. Simple Flower Drawing Ideas to Practice */}
      <Section surface>
        <div className="mx-auto mb-8 max-w-[760px]">
          <h2 className="heading-section">Simple Flower Drawing Ideas to Practice</h2>
          <p className="mt-4">
            Not every practice session needs a complicated subject. Short drawing exercises are
            useful for improving line control, proportion, and confidence.
          </p>
          <p className="mt-3">Try these approachable ideas in your sketchbook:</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {practiceIdeas.map((idea) => (
            <article key={idea.title} className="surface-card p-5">
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
      <Section>
        <div className="mx-auto max-w-[760px] prose-exact">
          <h2 className="heading-section">Flower Drawing for Beginners</h2>
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
          <ul>
            {beginnerHabits.map((habit) => (
              <li key={habit}>{habit}</li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 7. From Basic Shapes to a Beautiful Flower Drawing */}
      <Section surface>
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
          {shapeElements.map((element) => (
            <article key={element.title} className="surface-card p-5">
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
      <Section>
        <div className="mx-auto max-w-[760px] prose-exact">
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
            longer needed. Add darker strokes near overlapping forms and use softer marks in lighter
            areas.
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
      </Section>

      {/* 9. Download Worksheets for Practice */}
      <Section id="worksheets" surface>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="surface-card overflow-hidden p-4">
            <Image
              src="/downloads/flower-drawing-worksheet.webp"
              alt="flower drawing worksheets"
              title="download practice worksheets"
              width={1055}
              height={1491}
              className="mx-auto h-auto w-full max-w-[420px]"
              sizes="(max-width: 1024px) 100vw, 420px"
            />
          </div>
          <div className="prose-exact">
            <h2 className="heading-section">Download Worksheets for Practice</h2>
            <p>
              These flowers for drawing worksheets provide clear reference pictures, tracing
              outlines, and blank areas for independent practice.
            </p>
            <p>Our downloadable flower drawing worksheets are designed to support hands-on practice. Each worksheet include:</p>
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
                variant="sage"
                download
              >
                Browse Drawing Worksheets
              </ButtonLink>
              <ButtonLink
                href="/downloads/flower-drawing-worksheet.pdf"
                variant="ghost"
                newTab
              >
                Print a Practice Page
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      {/* 10. Skill levels */}
      <Section>
        <div className="mx-auto mb-8 max-w-[760px]">
          <h2 className="heading-section">Find a Flower Drawing That Matches Your Skill Level</h2>
          <p className="mt-4">
            Choose a simple floral drawing that matches your current skill level and the amount of
            detail you want to practice.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {skillLevels.map((level) => (
            <article key={level.title} className="surface-card p-5">
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
      <Section surface>
        <div className="mx-auto max-w-[760px] prose-exact">
          <h2 className="heading-section">Tips for Better Drawing of Flower</h2>
          <ul>
            {drawingTips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
          <p>
            The goal is not to produce a perfect picture on the first attempt. Each sketch helps you
            become more comfortable with lines, shapes, observation, and proportion.
          </p>
        </div>
      </Section>

      {/* 12. Explore More Easy Flowers Drawing Ideas */}
      <Section>
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
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {tutorials.map((tutorial) => (
            <TutorialCard key={tutorial.slug} tutorial={tutorial} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/flower-drawing/">View All Flower Tutorials</ButtonLink>
        </div>
      </Section>

      {/* 13. FAQs */}
      <Section id="faq" surface>
        <div className="mx-auto mb-8 max-w-[760px]">
          <h2 className="heading-section">Frequently Asked Questions</h2>
        </div>
        <div className="mx-auto max-w-[860px]">
          <FaqAccordion items={homepageFaqs} idPrefix="home-faq" />
        </div>
      </Section>

      {/* 14. Final CTA */}
      <Section>
        <div className="surface-card mx-auto max-w-[860px] px-6 py-10 text-center sm:px-10">
          <h2 className="heading-section">Start Your Next Flower Drawing</h2>
          <p className="mx-auto mt-4 max-w-[640px] text-muted">
            Choose a tutorial, prepare your pencil and paper to begin with the first light shape. Do
            not worry about making the drawing perfect.
          </p>
          <p className="mx-auto mt-3 max-w-[640px] text-muted">
            Follow the steps, make adjustments as you go, and use the downloadable worksheets for
            extra practice. With each new sketch, petals, stems, leaves, and floral shapes will
            become easier to understand and draw.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/flower-drawing/">Start Drawing</ButtonLink>
            <ButtonLink href="/#worksheets" variant="sage">
              View Practice Worksheets
            </ButtonLink>
          </div>
        </div>
        <div id="flower-drawing-tool-root" hidden />
      </Section>
    </>
  );
}

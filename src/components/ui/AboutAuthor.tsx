import Image from "next/image";
import { PencilStroke } from "@/components/decorations/PencilStroke";
import { siteConfig } from "@/lib/site";

export function AboutAuthor() {
  const { author } = siteConfig;

  return (
    <section
      id="about-the-author"
      className="section-space bg-lavender-light/35"
      aria-labelledby="about-author-heading"
    >
      <div className="container-main">
        <div className="mx-auto max-w-[760px]">
          <div className="surface-card overflow-hidden border border-border bg-white p-6 shadow-[var(--shadow-feature)] sm:p-8">
            <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:text-left">
              <Image
                src={author.image}
                alt={author.imageAlt}
                width={112}
                height={112}
                className="h-28 w-28 shrink-0 rounded-full border-2 border-sky shadow-[var(--shadow-button)]"
              />
              <div className="min-w-0">
                <h2 id="about-author-heading" className="heading-section">
                  About the Author
                </h2>
                <p className="mt-2 font-serif text-xl font-semibold tracking-tight text-ink">
                  {author.name}
                </p>
                <div className="mt-1 flex justify-center sm:justify-start">
                  <PencilStroke color="#B9A7EA" className="w-28" />
                </div>
                <p className="mt-4 text-muted">{author.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

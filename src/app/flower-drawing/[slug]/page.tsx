import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { TutorialArticle } from "@/components/tutorial/TutorialArticle";
import {
  buildArticleJsonLd,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildWebPageJsonLd,
} from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { getTutorialBody } from "@/lib/tutorials/get-tutorial-body";
import {
  getAdjacentTutorials,
  getAllTutorials,
  getRelatedTutorials,
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
  const body = await getTutorialBody(slug);
  if (!meta || !body) notFound();

  const [{ previous, next }, related] = await Promise.all([
    getAdjacentTutorials(slug),
    getRelatedTutorials(slug),
  ]);
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
      {meta.faqs.length > 0 ? <JsonLd data={buildFaqJsonLd(meta.faqs)} /> : null}

      <TutorialArticle
        meta={meta}
        body={body}
        previous={previous}
        next={next}
        related={related}
      />
    </>
  );
}

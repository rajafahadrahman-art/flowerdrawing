import type { MetadataRoute } from "next";
import { importantPages, siteConfig } from "@/lib/site";
import { getAllTutorials } from "@/lib/tutorials/get-tutorials";

const noIndexImportantPaths = new Set([
  "/privacy-policy/",
  "/disclaimer/",
  "/terms-and-conditions/",
]);

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const tutorials = await getAllTutorials();
  const lastModified = new Date();

  return [
    {
      url: `${siteConfig.url}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/flower-drawing/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/worksheets/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${siteConfig.url}/tools/draw-along/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...tutorials.map((tutorial) => ({
      url: `${siteConfig.url}/flower-drawing/${tutorial.slug}/`,
      lastModified: new Date(tutorial.updatedDate),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...importantPages
      .filter((page) => !noIndexImportantPaths.has(page.path))
      .map((page) => ({
        url: `${siteConfig.url}${page.path}`,
        lastModified,
        changeFrequency: "yearly" as const,
        priority: 0.4,
      })),
  ];
}

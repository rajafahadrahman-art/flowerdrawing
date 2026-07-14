import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { getAllTutorials } from "@/lib/tutorials/get-tutorials";

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
    ...tutorials.map((tutorial) => ({
      url: `${siteConfig.url}/flower-drawing/${tutorial.slug}/`,
      lastModified: new Date(tutorial.updatedDate),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}

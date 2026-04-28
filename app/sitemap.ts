import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticRoutes = [
    "",
    "/comparatif",
    "/guides",
    "/blog",
    "/mentions-legales",
    "/politique-confidentialite",
  ];

  const operators = ["orange", "free", "sfr", "bouygues"];
  const regions = [
    "ile-de-france",
    "provence-alpes-cote-d-azur",
    "auvergne-rhone-alpes",
    "occitanie",
    "nouvelle-aquitaine",
    "hauts-de-france",
  ];

  const routes = [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
      alternates: {
        languages: {
          "fr-FR": `${baseUrl}${route}`,
        },
      },
    })),
    ...operators.map((op) => ({
      url: `${baseUrl}/operateurs/${op}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
      alternates: {
        languages: {
          "fr-FR": `${baseUrl}/operateurs/${op}`,
        },
      },
    })),
    ...regions.map((region) => ({
      url: `${baseUrl}/regions/${region}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
      alternates: {
        languages: {
          "fr-FR": `${baseUrl}/regions/${region}`,
        },
      },
    })),
  ];

  return routes;
}

import type { MetadataRoute } from "next";
import { countries } from "@/data/countries";
import { industries } from "@/data/industries";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { getBlogSlugs } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "about", "industrial-sourcing", "services", "industries", "countries", "blog", "contact"];
  const translatedPaths = ["", "industrial-sourcing", "contact"];
  const detailPaths = [
    ...services.map((item) => `services/${item.slug}`),
    ...industries.map((item) => `industries/${item.slug}`),
    ...countries.map((item) => `countries/${item.slug}`),
    ...getBlogSlugs().map((slug) => `blog/${slug}`)
  ];
  const enUrls = [...staticPaths, ...detailPaths].map((path) => ({
      url: `${site.url}/en/${path}`.replace(/\/$/, "") + "/",
      lastModified: new Date("2026-05-28"),
      changeFrequency: path.includes("blog/") ? "monthly" as const : "weekly" as const,
      priority: path === "" ? 1 : path.includes("/") ? 0.72 : 0.82
    }));

  const localeUrls = site.locales
    .filter((locale) => locale !== "en")
    .flatMap((locale) =>
      translatedPaths.map((path) => ({
        url: `${site.url}/${locale}/${path}`.replace(/\/$/, "") + "/",
        lastModified: new Date("2026-05-28"),
        changeFrequency: "weekly" as const,
        priority: path === "" ? 0.95 : 0.82
      }))
  );

  return [...enUrls, ...localeUrls];
}

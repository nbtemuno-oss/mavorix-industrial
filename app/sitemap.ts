import type { MetadataRoute } from "next";
import { countries } from "@/data/countries";
import { industries } from "@/data/industries";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { getBlogSlugs } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "about", "industrial-sourcing", "services", "industries", "countries", "blog", "contact"];
  const detailPaths = [
    ...services.map((item) => `services/${item.slug}`),
    ...industries.map((item) => `industries/${item.slug}`),
    ...countries.map((item) => `countries/${item.slug}`),
    ...getBlogSlugs().map((slug) => `blog/${slug}`)
  ];
  return site.locales.flatMap((locale) =>
    [...staticPaths, ...detailPaths].map((path) => ({
      url: `${site.url}/${locale}/${path}`.replace(/\/$/, "") + "/",
      lastModified: new Date("2026-05-28"),
      changeFrequency: path.includes("blog/") ? "monthly" : "weekly",
      priority: path === "" ? 1 : path.includes("/") ? 0.72 : 0.82
    }))
  );
}

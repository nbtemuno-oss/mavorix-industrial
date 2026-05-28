import type { Metadata } from "next";
import { site } from "@/data/site";

type SeoInput = {
  title: string;
  description: string;
  path: string;
  locale?: string;
  type?: "website" | "article";
};

export function seo({ title, description, path, locale = "en", type = "website" }: SeoInput): Metadata {
  const canonical = `${site.url}${path}`;
  const suffix = path.replace(/^\/[a-z]{2}/, "") || "/";
  const translatedPaths = new Set(["/", "/industrial-sourcing/", "/contact/"]);
  const normalizedSuffix = suffix.endsWith("/") ? suffix : `${suffix}/`;
  const languages = translatedPaths.has(normalizedSuffix)
    ? {
        ...Object.fromEntries(site.locales.map((code) => [code, `${site.url}/${code}${normalizedSuffix === "/" ? "" : normalizedSuffix}`])),
        "x-default": `${site.url}/en${normalizedSuffix === "/" ? "" : normalizedSuffix}`
      }
    : { en: `${site.url}/en${normalizedSuffix === "/" ? "" : normalizedSuffix}` };

  return {
    title,
    description,
    alternates: {
      canonical,
      languages
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: site.name,
      locale,
      type
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

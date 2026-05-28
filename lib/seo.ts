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
  const languages = Object.fromEntries(site.locales.map((code) => [code, `${site.url}/${code}${path.replace(/^\/[a-z]{2}/, "")}`]));

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

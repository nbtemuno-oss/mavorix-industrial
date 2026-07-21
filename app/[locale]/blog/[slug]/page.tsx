import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { IndustrialImage } from "@/components/ui/IndustrialImage";
import { blogImages, pageImages } from "@/data/page-images";
import { site } from "@/data/site";
import { articleSchema, breadcrumbSchema, faqSchema, JsonLd } from "@/lib/schema";
import { getBlogPost, getBlogSlugs, markdownToHtml } from "@/lib/mdx";
import { seo } from "@/lib/seo";

export function generateStaticParams() {
  return site.locales.flatMap((locale) => getBlogSlugs().map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  try {
    const post = getBlogPost(slug);
    const image = blogImages[slug] ?? pageImages.blog;
    return seo({
      title: post.metaTitle ?? post.title,
      description: post.description,
      path: `/${locale}/blog/${slug}/`,
      canonicalPath: `/en/blog/${slug}/`,
      index: locale === "en",
      type: "article",
      image
    });
  } catch {
    return {};
  }
}

export default async function BlogDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  let post;
  try {
    post = getBlogPost(slug);
  } catch {
    notFound();
  }
  const html = markdownToHtml(post.body);
  const image = blogImages[post.slug] ?? pageImages.blog;
  const articleUrl = `${site.url}/${locale}/blog/${post.slug}/`;
  const breadcrumbItems = [
    { name: "Home", url: `${site.url}/${locale}/` },
    { name: "Blog", url: `${site.url}/${locale}/blog/` },
    { name: post.title, url: articleUrl }
  ];

  return (
    <>
      <PageHero badge="Guide" title={post.title} description={post.description} breadcrumbs={[{ label: "Home", href: `/${locale}/` }, { label: "Blog", href: `/${locale}/blog/` }, { label: post.title, href: `/${locale}/blog/${post.slug}/` }]} />
      <Container className="grid gap-8 py-16 lg:grid-cols-[1fr_300px]">
        <article className="prose-industrial min-w-0 rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-10">
          {locale !== "en" ? <div className="mb-8 rounded-lg border border-orange-200 bg-orange-50 p-4 text-sm font-semibold text-orange-900">English version: this blog guide has not been fully translated into {locale.toUpperCase()} yet.</div> : null}
          <IndustrialImage src={image.src} alt={image.alt} className="mb-8 min-h-[320px]" sizes="(min-width: 1024px) 760px, 100vw" />
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
        <aside className="h-fit rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="font-black text-navy">Next Steps</h2>
          <div className="mt-4 space-y-3 text-sm font-semibold text-slate-600">
            <Link href={`/${locale}/services/china-industrial-sourcing/`} className="block hover:text-signal">China Industrial Sourcing</Link>
            <Link href={`/${locale}/services/supplier-verification/`} className="block hover:text-signal">Supplier Verification</Link>
            <Link href={`/${locale}/contact/`} className="block hover:text-signal">Send Inquiry</Link>
          </div>
        </aside>
      </Container>
      <CTASection />
      <JsonLd data={[breadcrumbSchema(breadcrumbItems), articleSchema({ title: post.title, description: post.description, date: post.date, url: articleUrl, image: `${site.url}${image.src}` }), faqSchema(post.faqs)]} />
    </>
  );
}

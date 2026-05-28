import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";
import { articleSchema, faqSchema, JsonLd } from "@/lib/schema";
import { getBlogPost, getBlogSlugs, markdownToHtml } from "@/lib/mdx";
import { seo } from "@/lib/seo";

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ locale: "en", slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  try {
    const post = getBlogPost(slug);
    return seo({ title: post.title, description: post.description, path: `/${locale}/blog/${slug}/`, type: "article" });
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
  return (
    <>
      <PageHero badge="Guide" title={post.title} description={post.description} breadcrumbs={[{ label: "Home", href: `/${locale}/` }, { label: "Blog", href: `/${locale}/blog/` }, { label: post.title, href: `/${locale}/blog/${post.slug}/` }]} />
      <Container className="grid gap-8 py-16 lg:grid-cols-[1fr_300px]">
        <article className="prose-industrial rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-10" dangerouslySetInnerHTML={{ __html: html }} />
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
      <JsonLd data={[articleSchema({ title: post.title, description: post.description, date: post.date, url: `${site.url}/${locale}/blog/${post.slug}/` }), faqSchema(post.faqs)]} />
    </>
  );
}

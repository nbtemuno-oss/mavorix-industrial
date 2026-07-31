import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
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
      index: locale === "en" && !post.draft,
      follow: !post.draft,
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
  const isRexrothCase = post.slug === "bosch-rexroth-hydraulic-valves-sourcing-consolidation-case";
  const isCeramicMediaCase = post.slug === "tr-t-20x20-ceramic-tumbling-media-sourcing-case";
  const isLedFloodLightCase = post.slug === "industrial-led-flood-light-sourcing-case";
  const isCustomCuttingToolsGuide = post.slug === "how-to-source-custom-cutting-tools-from-china";
  const isSourcingCase = isRexrothCase || isCeramicMediaCase || isLedFloodLightCase;
  const body = isSourcingCase ? post.body.replace(/\n## FAQ\n[\s\S]*$/, "") : post.body;
  const html = markdownToHtml(body);
  const image = blogImages[post.slug] ?? pageImages.blog;
  const articleUrl = `${site.url}/${locale}/blog/${post.slug}/`;
  const breadcrumbItems = [
    { name: "Home", url: `${site.url}/${locale}/` },
    { name: "Blog", url: `${site.url}/${locale}/blog/` },
    { name: post.title, url: articleUrl }
  ];

  return (
    <>
      <PageHero
        badge={isSourcingCase ? "Case Study" : "Guide"}
        title={post.title}
        description={isLedFloodLightCase ? "A recent overseas order involving large finned floodlight housings, reflector assembly, LED component checking, power-on testing and export packing preparation in China." : isCeramicMediaCase ? "An overseas customer required 10 tons of TR-T 20×20 ceramic abrasive media for a mass-finishing application. MAVORIX coordinated specification confirmation, China-side sourcing, bulk packing checks and shipment preparation." : post.description}
        breadcrumbs={[{ label: "Home", href: `/${locale}/` }, { label: "Blog", href: `/${locale}/blog/` }, { label: post.title, href: `/${locale}/blog/${post.slug}/` }]}
        cta={!isRexrothCase}
        primaryCta={isLedFloodLightCase ? { href: `/${locale}/contact/`, label: "Send Your Lighting Requirement" } : isCeramicMediaCase ? { href: `/${locale}/contact/`, label: "Send Your Media Requirement" } : isCustomCuttingToolsGuide ? { href: `/${locale}/contact/`, label: "Send Your Tool Drawing" } : undefined}
        secondaryCta={isLedFloodLightCase || isCeramicMediaCase ? { href: `/${locale}/industrial-sourcing/`, label: "Industrial Sourcing Services" } : isCustomCuttingToolsGuide ? { href: `/${locale}/products/cutting-tools/custom-cutting-tools/`, label: "Custom Tool Capability" } : undefined}
        containerClassName={isSourcingCase ? "py-12 lg:py-16" : undefined}
        titleClassName={isSourcingCase ? "mt-5 max-w-[920px] text-[2.15rem] font-black leading-tight md:text-[3.15rem]" : undefined}
        descriptionClassName={isSourcingCase ? "mt-6 max-w-[860px] text-base leading-8 text-slate-300 md:text-lg" : undefined}
      />
      <Container className={isSourcingCase ? "py-14" : "grid gap-8 py-16 lg:grid-cols-[1fr_300px]"}>
        <article className={isSourcingCase ? "prose-industrial mx-auto min-w-0 max-w-[900px] rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-10" : "prose-industrial min-w-0 rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-10"}>
          {locale !== "en" ? <div className="mb-8 rounded-lg border border-orange-200 bg-orange-50 p-4 text-sm font-semibold text-orange-900">English version: this blog guide has not been fully translated into {locale.toUpperCase()} yet.</div> : null}
          <IndustrialImage src={image.src} alt={image.alt} className={isSourcingCase ? "mb-8 aspect-[16/9]" : "mb-8 min-h-[320px]"} sizes={isSourcingCase ? "(min-width: 1024px) 840px, 100vw" : "(min-width: 1024px) 760px, 100vw"} fit={isSourcingCase ? "contain" : "cover"} />
          {isRexrothCase ? <p className="case-featured-caption">Rexroth hydraulic valves arranged for model and quantity checking before consolidated packing.</p> : null}
          {isCeramicMediaCase ? <p className="case-featured-caption">Bagged ceramic abrasive media arranged on wooden pallets for packing and shipment preparation.</p> : null}
          {isLedFloodLightCase ? <p className="case-featured-caption">Industrial LED flood light housings arranged during supplier-side production follow-up.</p> : null}
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
        {!isSourcingCase ? (
          <aside className="h-fit rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="font-black text-navy">Next Steps</h2>
            <div className="mt-4 space-y-3 text-sm font-semibold text-slate-600">
              <Link href={`/${locale}/services/china-industrial-sourcing/`} className="block hover:text-signal">China Industrial Sourcing</Link>
              {isCustomCuttingToolsGuide ? <Link href={`/${locale}/products/cutting-tools/custom-cutting-tools/`} className="block hover:text-signal">Custom Cutting Tools</Link> : null}
              <Link href={`/${locale}/services/supplier-verification/`} className="block hover:text-signal">Supplier Verification</Link>
              <Link href={`/${locale}/contact/`} className="block hover:text-signal">Send Inquiry</Link>
            </div>
          </aside>
        ) : null}
      </Container>
      {isSourcingCase ? (
        <>
          <FAQSection faqs={post.faqs} containerClassName="max-w-[980px]" gridClassName="mt-8 grid gap-4" />
          <section className="bg-slate-50 pb-16">
            <Container>
              <div className="mx-auto max-w-[900px] rounded-lg bg-navy p-7 text-white shadow-industrial md:p-10">
                <h2 className="text-2xl font-black leading-tight md:text-3xl">
                  {isLedFloodLightCase ? "Planning an Industrial LED Flood Light Order?" : isCeramicMediaCase ? "Need Ceramic Tumbling Media for a New or Existing Finishing Process?" : "Have a Hydraulic Valve or Mixed Spare-Parts List to Source?"}
                </h2>
                <p className="mt-4 max-w-3xl leading-8 text-slate-300">
                  {isLedFloodLightCase
                    ? "Send the application, wattage and lumen target, input voltage, beam requirement, mounting details, protection rating, quantity and destination market. MAVORIX can assist with supplier sourcing, specification comparison and production follow-up in China."
                    : isCeramicMediaCase
                    ? "Send the media sample or photo, workpiece details, required finishing result, trial quantity and expected bulk quantity. MAVORIX can assist with supplier sourcing, specification comparison and packing coordination in China."
                    : "Send the complete model codes, material numbers, label photos and required quantities. MAVORIX can help organize China-side supplier sourcing, model checking and consolidated packing."}
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button href={`/${locale}/contact/`}>{isLedFloodLightCase ? "Send Your Lighting Requirement" : isCeramicMediaCase ? "Send Your Requirement" : "Send Your Parts List"}</Button>
                  <Button href={site.whatsappUrl} variant="secondary">{isLedFloodLightCase ? "Discuss the Project" : isCeramicMediaCase ? "Discuss a Bulk Order" : "Discuss Your Requirement"}</Button>
                </div>
              </div>
            </Container>
          </section>
        </>
      ) : (
        <CTASection
          title={isCustomCuttingToolsGuide ? "Need a Custom Cutting Tool for a Specific Machining Operation?" : undefined}
          text={isCustomCuttingToolsGuide ? "Send the tool drawing, sample photos, workpiece drawing, machining details and required quantity. MAVORIX can help coordinate supplier evaluation and quotation in China." : undefined}
        />
      )}
      <JsonLd data={[breadcrumbSchema(breadcrumbItems), articleSchema({ title: post.title, description: post.description, date: post.date, url: articleUrl, image: `${site.url}${image.src}` }), faqSchema(post.faqs)]} />
    </>
  );
}

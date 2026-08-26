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
  const isHydraulicValveSourcingCase = post.slug === "rexroth-dbds6p1x-315-pressure-relief-valve-sourcing";
  const isStrappingMachineCase = post.slug === "automatic-strapping-machine-sourcing-romania-case";
  const isCountersunkScrewCase = post.slug === "304-stainless-steel-countersunk-screw-inspection-serbia";
  const isAirCompressorCase = post.slug === "22kw-rotary-screw-air-compressor-system-uae";
  const isPipeTaperingCase = post.slug === "tube-tapering-machine-sourcing-romania";
  const isUsedInjectionMoldCase = post.slug === "used-injection-mold-sourcing-export-packing-case";
  const isBearingArgentinaCase = post.slug === "hrb-23220ca-w33-bearing-sourcing-argentina";
  const isCrnqPeruCase = post.slug === "copeland-crnq-050e-compressor-sourcing-peru";
  const isZr61kcPeruCase = post.slug === "copeland-zr61kc-scroll-compressor-sourcing-peru";
  const isPeruCompressorCase = isCrnqPeruCase || isZr61kcPeruCase;
  const isCustomCuttingToolsGuide = post.slug === "how-to-source-custom-cutting-tools-from-china";
  const isSourcingCase = isRexrothCase || isCeramicMediaCase || isLedFloodLightCase || isHydraulicValveSourcingCase || isStrappingMachineCase || isCountersunkScrewCase || isAirCompressorCase || isPipeTaperingCase || isUsedInjectionMoldCase || isBearingArgentinaCase || isPeruCompressorCase;
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
        description={isLedFloodLightCase ? "A recent overseas order involving large finned floodlight housings, reflector assembly, LED component checking, power-on testing and export packing preparation in China." : isCeramicMediaCase ? "An overseas customer required 10 tons of TR-T 20×20 ceramic abrasive media for a mass-finishing application. MAVORIX coordinated specification confirmation, China-side sourcing, bulk packing checks and shipment preparation." : isHydraulicValveSourcingCase ? "A real customer order of Rexroth pressure relief valves, and a practical look at how MAVORIX helps overseas buyers source hydraulic valves from multiple brands in China." : isStrappingMachineCase ? "An MS-505 automatic PP strapping machine order for Romania, documented through specification review, workshop inspection photos, warehouse intake and wooden-case packing." : isCountersunkScrewCase ? "An M6 x 15 stainless steel countersunk screw order for Serbia, documented through batch inspection, carton identification and palletized export packing." : isAirCompressorCase ? "A complete XPS22/8 22 kW screw air compressor system for the UAE, followed from equipment selection and production through packing and container loading." : isPipeTaperingCase ? "A ZS-60 tube tapering machine order for Romania, followed from the tapered steel-tube drawing and workshop test through wooden-case packing and container loading." : isUsedInjectionMoldCase ? "A real mixed batch of used plastic injection molds sourced in China, with practical checks for mold identity, condition, machine compatibility and export packing." : isBearingArgentinaCase ? "A real HRB 23220CA/W33 spherical roller bearing order for Argentina, documented through model marking, visible-condition and protective-packing checks." : isCrnqPeruCase ? "A Copeland CRNQ-050E-TFD-556 hermetic reciprocating compressor order for Peru, followed from nameplate verification through fitted wooden-case packing." : isZr61kcPeruCase ? "A Copeland ZR61KC-TFD-522 scroll compressor order for Peru, covering complete-model verification, visible connection checks and outer-carton packing." : post.description}
        breadcrumbs={[{ label: "Home", href: `/${locale}/` }, { label: "Blog", href: `/${locale}/blog/` }, { label: post.title, href: `/${locale}/blog/${post.slug}/` }]}
        cta={!isRexrothCase}
        primaryCta={isLedFloodLightCase ? { href: `/${locale}/contact/`, label: "Send Your Lighting Requirement" } : isCeramicMediaCase ? { href: `/${locale}/contact/`, label: "Send Your Media Requirement" } : isHydraulicValveSourcingCase ? { href: `/${locale}/contact/`, label: "Send Your Valve List" } : isStrappingMachineCase ? { href: `/${locale}/contact/`, label: "Send Your Package Details" } : isCountersunkScrewCase ? { href: `/${locale}/contact/`, label: "Send Your Screw List" } : isAirCompressorCase ? { href: `/${locale}/contact/`, label: "Send Your Air Requirement" } : isPipeTaperingCase ? { href: `/${locale}/contact/`, label: "Send Your Tube Drawing" } : isUsedInjectionMoldCase ? { href: `/${locale}/contact/`, label: "Send Your Mold Requirement" } : isBearingArgentinaCase ? { href: `/${locale}/contact/`, label: "Send Your Bearing List" } : isPeruCompressorCase ? { href: `/${locale}/contact/`, label: "Send Your Compressor Label" } : isCustomCuttingToolsGuide ? { href: `/${locale}/contact/`, label: "Send Your Tool Drawing" } : undefined}
        secondaryCta={isSourcingCase ? { href: `/${locale}/industrial-sourcing/`, label: "Industrial Sourcing Services" } : isCustomCuttingToolsGuide ? { href: `/${locale}/products/cutting-tools/custom-cutting-tools/`, label: "Custom Tool Capability" } : undefined}
        containerClassName={isSourcingCase ? "py-12 lg:py-16" : undefined}
        titleClassName={isSourcingCase ? "mt-5 max-w-[920px] text-[2.15rem] font-black leading-tight md:text-[3.15rem]" : undefined}
        descriptionClassName={isSourcingCase ? "mt-6 max-w-[860px] text-base leading-8 text-slate-300 md:text-lg" : undefined}
      />
      <Container className={isSourcingCase ? "py-14" : "grid gap-8 py-16 lg:grid-cols-[1fr_300px]"}>
        <article className={isSourcingCase ? "prose-industrial mx-auto min-w-0 max-w-[900px] rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-10" : "prose-industrial min-w-0 rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-10"}>
          {locale !== "en" ? <div className="mb-8 rounded-lg border border-orange-200 bg-orange-50 p-4 text-sm font-semibold text-orange-900">English version: this blog guide has not been fully translated into {locale.toUpperCase()} yet.</div> : null}
          <IndustrialImage
            src={image.src}
            alt={image.alt}
            className={isHydraulicValveSourcingCase ? "mx-auto mb-8 aspect-[9/16] w-full max-w-[680px]" : isStrappingMachineCase ? "mx-auto mb-8 aspect-[3/4] w-full max-w-[680px]" : isCountersunkScrewCase ? "mx-auto mb-8 aspect-[459/538] w-full max-w-[720px]" : isAirCompressorCase ? "mx-auto mb-8 aspect-[403/544] w-full max-w-[720px]" : isPipeTaperingCase ? "mx-auto mb-8 aspect-[531/626] w-full max-w-[720px]" : isUsedInjectionMoldCase || isBearingArgentinaCase || isZr61kcPeruCase ? "mx-auto mb-8 aspect-[3/4] w-full max-w-[720px]" : isCrnqPeruCase ? "mx-auto mb-8 aspect-[40/47] w-full max-w-[720px]" : isSourcingCase ? "mb-8 aspect-[16/9]" : "mb-8 min-h-[320px]"}
            sizes={isHydraulicValveSourcingCase || isStrappingMachineCase || isCountersunkScrewCase || isAirCompressorCase || isPipeTaperingCase || isUsedInjectionMoldCase || isBearingArgentinaCase || isPeruCompressorCase ? "(min-width: 768px) 680px, 100vw" : isSourcingCase ? "(min-width: 1024px) 840px, 100vw" : "(min-width: 1024px) 760px, 100vw"}
            fit={isSourcingCase ? "contain" : "cover"}
            priority={isSourcingCase}
          />
          {isRexrothCase ? <p className="case-featured-caption">Rexroth hydraulic valves arranged for model and quantity checking before consolidated packing.</p> : null}
          {isCeramicMediaCase ? <p className="case-featured-caption">Bagged ceramic abrasive media arranged on wooden pallets for packing and shipment preparation.</p> : null}
          {isLedFloodLightCase ? <p className="case-featured-caption">Industrial LED flood light housings arranged during supplier-side production follow-up.</p> : null}
          {isHydraulicValveSourcingCase ? <p className="case-featured-caption">Rexroth DBDS6P1X/315 pressure relief valves purchased for a customer and photographed during shipment packing.</p> : null}
          {isStrappingMachineCase ? <p className="case-featured-caption">MS-505 automatic PP strapping machine photographed during supplier-side checking before warehouse intake and export packing.</p> : null}
          {isCountersunkScrewCase ? <p className="case-featured-caption">M6 x 15 stainless steel countersunk screws packed in labeled cartons and secured on a wooden pallet for Serbia.</p> : null}
          {isAirCompressorCase ? <p className="case-featured-caption">XPS22/8 compressor system, air receiver and consolidated equipment positioned inside the export container for the UAE.</p> : null}
          {isPipeTaperingCase ? <p className="case-featured-caption">ZS-60 tube tapering machine photographed in the workshop before the Romania project test and export packing.</p> : null}
          {isUsedInjectionMoldCase ? <p className="case-featured-caption">A mixed batch of used plastic injection molds wrapped and grouped in the workshop before export shipment.</p> : null}
          {isBearingArgentinaCase ? <p className="case-featured-caption">HRB 23220CA/W33 spherical roller bearings photographed during model and packing checks for Argentina.</p> : null}
          {isCrnqPeruCase ? <p className="case-featured-caption">Copeland CRNQ-050E-TFD-556 compressor secured upright inside its fitted wooden export case for Peru.</p> : null}
          {isZr61kcPeruCase ? <p className="case-featured-caption">Copeland ZR61KC-TFD-522 scroll compressor supplied for the Peru replacement order.</p> : null}
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
                  {isLedFloodLightCase ? "Planning an Industrial LED Flood Light Order?" : isCeramicMediaCase ? "Need Ceramic Tumbling Media for a New or Existing Finishing Process?" : isStrappingMachineCase ? "Planning an Automatic Strapping Machine Order?" : isCountersunkScrewCase ? "Need Stainless Steel Screws or Mixed Fasteners from China?" : isAirCompressorCase ? "Planning a Complete Industrial Air Compressor System?" : isPipeTaperingCase ? "Need a Tube Tapering Machine for a Specific Part?" : isUsedInjectionMoldCase ? "Looking for Used Injection Molds or Existing Tooling?" : isBearingArgentinaCase ? "Need an Industrial Bearing or Mixed Bearing List?" : isPeruCompressorCase ? "Need an Exact-Model HVAC Compressor?" : "Have a Hydraulic Valve or Mixed Spare-Parts List to Source?"}
                </h2>
                <p className="mt-4 max-w-3xl leading-8 text-slate-300">
                  {isLedFloodLightCase
                    ? "Send the application, wattage and lumen target, input voltage, beam requirement, mounting details, protection rating, quantity and destination market. MAVORIX can assist with supplier sourcing, specification comparison and production follow-up in China."
                    : isCeramicMediaCase
                    ? "Send the media sample or photo, workpiece details, required finishing result, trial quantity and expected bulk quantity. MAVORIX can assist with supplier sourcing, specification comparison and packing coordination in China."
                    : isStrappingMachineCase
                    ? "Send package photos, minimum and maximum dimensions, weight, throughput, PP strap, required arch, site power, destination and quantity. MAVORIX can help compare suppliers, coordinate inspection and follow export packing in China."
                    : isCountersunkScrewCase
                    ? "Send the drawing or standard, size list, stainless steel grade, quantities, inspection scope, packing requirement and destination. MAVORIX can help compare suppliers and coordinate shipment preparation in China."
                    : isAirCompressorCase
                    ? "Send the required pressure, average and peak airflow, operating hours, site power, air-quality target and destination. MAVORIX can help coordinate the compressor, dryer, filters, receiver and export shipment."
                    : isPipeTaperingCase
                    ? "Send the original tube size and material, finished drawing, taper length, tolerances, required mold sets, output target, site power and destination. MAVORIX can help compare suppliers, coordinate a sample test and follow export packing."
                    : isUsedInjectionMoldCase
                    ? "Send the plastic part drawing or sample, resin, required output, injection machine details, inspection scope and destination. MAVORIX can help search available molds, coordinate checks and follow export packing."
                    : isBearingArgentinaCase
                    ? "Send the complete bearing codes, brand preference, quantities, old-part photos, inspection scope and destination. MAVORIX can help compare suppliers, coordinate model checks and consolidate approved bearings."
                    : isPeruCompressorCase
                    ? "Send the old compressor nameplate, HVAC unit model, refrigerant, electrical supply, connections, quantity and destination. MAVORIX can help verify the full model and follow export packing."
                    : "Send the complete model codes, material numbers, label photos and required quantities. MAVORIX can help organize China-side supplier sourcing, model checking and consolidated packing."}
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button href={`/${locale}/contact/`}>{isLedFloodLightCase ? "Send Your Lighting Requirement" : isCeramicMediaCase ? "Send Your Requirement" : isStrappingMachineCase ? "Send Package Details" : isCountersunkScrewCase ? "Send Your Screw List" : isAirCompressorCase ? "Send Your Air Requirement" : isPipeTaperingCase ? "Send Your Tube Drawing" : isUsedInjectionMoldCase ? "Send Your Mold Requirement" : isBearingArgentinaCase ? "Send Your Bearing List" : isPeruCompressorCase ? "Send Your Compressor Label" : "Send Your Parts List"}</Button>
                  <Button href={site.whatsappUrl} variant="secondary">{isLedFloodLightCase ? "Discuss the Project" : isCeramicMediaCase ? "Discuss a Bulk Order" : isStrappingMachineCase ? "Discuss the Machine" : isCountersunkScrewCase ? "Discuss the Fasteners" : isAirCompressorCase ? "Discuss the System" : isPipeTaperingCase ? "Discuss the Machine" : isUsedInjectionMoldCase ? "Discuss the Molds" : isBearingArgentinaCase ? "Discuss the Bearings" : isPeruCompressorCase ? "Discuss the Compressor" : "Discuss Your Requirement"}</Button>
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

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { IndustrialImage } from "@/components/ui/IndustrialImage";
import { industries } from "@/data/industries";
import { pageImages } from "@/data/page-images";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { faqSchema, JsonLd, serviceSchema } from "@/lib/schema";
import { seo } from "@/lib/seo";

export function generateStaticParams() {
  return site.locales.flatMap((locale) => industries.map((industry) => ({ locale, slug: industry.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const industry = industries.find((item) => item.slug === slug);
  if (!industry) return {};
  const customMeta = industryMetadata[slug];
  const image = slug === "plastic-industry" ? pageImages.plasticIndustryOg : { src: industry.image, alt: `${industry.title} sourcing visual for China industrial procurement`, width: 1200, height: 800 };
  return seo({
    title: customMeta?.title ?? `${industry.title} Sourcing from China`,
    description: customMeta?.description ?? industry.description,
    path: `/${locale}/industries/${slug}/`,
    canonicalPath: `/en/industries/${slug}/`,
    index: locale === "en",
    image
  });
}

export default async function IndustryDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const industry = industries.find((item) => item.slug === slug);
  if (!industry) notFound();
  const faqs = industry.slug === "plastic-industry" ? plasticIndustryFaqs : buildIndustryFaqs(industry.title);
  return (
    <>
      <PageHero badge="Industry" title={`${industry.title} Sourcing from China`} description={industry.description} breadcrumbs={[{ label: "Home", href: `/${locale}/` }, { label: "Industries", href: `/${locale}/industries/` }, { label: industry.title, href: `/${locale}/industries/${industry.slug}/` }]} />
      {locale === "en" && industry.slug === "plastic-industry" ? <PlasticHeroImage /> : null}
      <Container className="grid gap-8 py-16 lg:grid-cols-[1fr_320px]">
        <article className="space-y-10">
          {locale !== "en" ? <EnglishVersionNotice locale={locale} /> : null}
          {locale === "en" && industry.slug === "plastic-industry" ? <PlasticLandingContent /> : <IndustrialImage src={industry.image} alt={`${industry.title} sourcing from China`} className="min-h-[360px]" />}
          <Block title="Industry-Focused Introduction" text={`MAVORIX INDUSTRIAL helps overseas buyers source, verify, and coordinate Chinese suppliers for ${industry.title.toLowerCase()} products. We do not claim to manufacture every item; our role is procurement support and supplier coordination.`} />
          <ListBlock title="Common Sourcing Needs" items={industry.products} />
          <ListBlock title="Common Buyer Problems" items={["Unclear supplier capability", "Difficulty confirming technical specifications", "Quality variation before shipment", "Fragmented communication across multiple factories", "Export packing and document coordination"]} />
          <Block title="How MAVORIX INDUSTRIAL Supports Sourcing" text="We review requirements, search and compare suppliers, coordinate technical questions, follow samples or trial orders, arrange quality checks, and support supplier-side export coordination." />
          {locale === "en" && industry.slug === "plastic-industry" ? <PlasticIndustryExtra /> : null}
          <Block title="Supplier Verification and Quality Control" text="Supplier screening and quality coordination help buyers reduce risk before payment and before shipment. We focus on realistic checks, clear communication, and practical issue follow-up." />
          <Block title="Export and Logistics Support" text="We support supplier-side export communication, packing follow-up, shipping coordination, and consolidation planning when buyers purchase from several suppliers." />
        </article>
        <aside className="h-fit rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <IndustrialImage src={industry.image} alt={`${industry.title} sourcing products from China`} className="mb-6 h-44" />
          <h2 className="font-black text-navy">Related Services</h2>
          <div className="mt-4 space-y-3 text-sm font-semibold text-slate-600">
            {services.slice(0, 6).map((item) => <Link key={item.slug} href={`/${locale}/services/${item.slug}/`} className="block hover:text-signal">{item.title}</Link>)}
            <Link href={`/${locale}/contact/`} className="block hover:text-signal">Send Inquiry</Link>
          </div>
        </aside>
      </Container>
      <FAQSection faqs={faqs} />
      <CTASection />
      <JsonLd data={[faqSchema(faqs), serviceSchema(`${industry.title} Sourcing`, industry.description, `${site.url}/${locale}/industries/${industry.slug}/`)]} />
    </>
  );
}
const industryMetadata: Record<string, { title: string; description: string }> = {
  "plastic-industry": {
    title: "Plastic Industry Sourcing from China | Injection Molding & Equipment | MAVORIX",
    description: "MAVORIX supports plastic factories with sourcing injection molding machines, molds, auxiliary equipment, spare parts, and industrial supply chain solutions from China."
  }
};

function EnglishVersionNotice({ locale }: { locale: string }) {
  return <div className="rounded-lg border border-orange-200 bg-orange-50 p-4 text-sm font-semibold text-orange-900">English version: this detailed industry page has not been fully translated into {locale.toUpperCase()} yet.</div>;
}

function Block({ title, text }: { title: string; text: string }) {
  return <section><h2 className="text-3xl font-black text-navy">{title}</h2><p className="mt-4 leading-8 text-slate-600">{text}</p></section>;
}
function ListBlock({ title, items }: { title: string; items: string[] }) {
  return <section><h2 className="text-3xl font-black text-navy">{title}</h2><ul className="mt-4 grid gap-3 md:grid-cols-2">{items.map((item) => <li key={item} className="rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">{item}</li>)}</ul></section>;
}
function buildIndustryFaqs(title: string) {
  return [
    { q: `Can you source products for the ${title}?`, a: `Yes. We help buyers source, verify, and coordinate suppliers for ${title.toLowerCase()} requirements from China.` },
    { q: "Do you manufacture these products?", a: "No. MAVORIX INDUSTRIAL is a sourcing and procurement support partner, not a manufacturer of every listed product." },
    { q: "Can you verify suppliers?", a: "Yes. We help screen suppliers before buyers commit to orders." },
    { q: "Can you support quality checks?", a: "Yes. We coordinate inspection requirements, photos, reports, and issue follow-up." },
    { q: "How can I send product details?", a: "Send photos, drawings, specifications, quantity, destination country, and application through the contact page or WhatsApp." }
  ];
}

function PlasticHeroImage() {
  return (
    <section className="bg-white pt-8">
      <Container>
        <IndustrialImage
          src={pageImages.plasticIndustryHero.src}
          alt={pageImages.plasticIndustryHero.alt}
          className="min-h-[300px] rounded-lg md:min-h-[460px]"
          sizes="100vw"
          priority
        />
      </Container>
    </section>
  );
}

function PlasticLandingContent() {
  return (
    <>
      <section>
        <h2 className="text-3xl font-black text-navy">Plastic Industry Sourcing from China</h2>
        <div className="mt-4 space-y-5 leading-8 text-slate-600">
          <p>
            MAVORIX INDUSTRIAL supports global plastic factories that need practical China sourcing support for injection molding production, factory maintenance, spare parts, molds, auxiliary equipment, and related industrial supplies. Plastic manufacturing buyers often deal with mixed requirements: one project may include an injection molding machine, mold components, dryers, chillers, loaders, conveyors, hot runner parts, consumables, and packaging materials from several different suppliers. Without careful supplier screening and technical confirmation, these orders can become difficult to compare and easy to misunderstand.
          </p>
          <p>
            Our work is focused on the sourcing and coordination side. We help buyers clarify requirements, search suitable Chinese suppliers, compare quotations, verify supplier signals before payment, coordinate drawings or sample details, follow inspection points, and support shipment consolidation when products come from multiple factories. This is useful for new factory setup, machine replacement, urgent spare parts, MRO replenishment, cost reduction projects, and buyers who already found suppliers online but need a China-side partner to review risk before moving forward.
          </p>
          <p>
            In the injection molding industry, small technical details matter. A machine configuration, mold material, hot runner specification, voltage, spare part model, packing method, or delivery schedule can change the real cost and risk of an order. MAVORIX helps buyers organize these details before purchase and keep supplier communication clearer during production, inspection, packing, and export coordination. The goal is not exaggerated claims or lowest-price promises; it is a more controlled sourcing process for plastic factories buying from China.
          </p>
        </div>
      </section>
      <ListBlock title="What We Can Source for Plastic Industry" items={[
        "Injection molding machines",
        "Plastic molds and tooling",
        "Auxiliary equipment including dryers, chillers, loaders, crushers, mixers, conveyors, and temperature controllers",
        "Mold components including ejector pins, sliders, guide parts, wear plates, and maintenance items",
        "Hot runner systems, heaters, sensors, cables, nozzles, controllers, and replacement components",
        "Spare parts for molding machines, auxiliary equipment, conveyors, dryers, chillers, and production lines",
        "Factory consumables, MRO supplies, tools, fasteners, hoses, fittings, lubricants, and electrical-mechanical parts",
        "Packaging materials including cartons, bags, labels, pallets, and export packing supplies"
      ]} />
      <ListBlock title="Typical Buyer Needs" items={[
        "New factory setup requiring machines, molds, auxiliaries, tools, spare parts, and packing materials from several suppliers",
        "Machine replacement or production line upgrade with quotation comparison and technical confirmation",
        "Emergency spare parts sourcing when the original supplier is slow, expensive, or unavailable",
        "Multi-supplier consolidation for molds, auxiliaries, consumables, packaging, and maintenance items",
        "Cost reduction sourcing from China while keeping supplier verification, inspection, and packing control in place"
      ]} />
      <ListBlock title="How MAVORIX Supports Plastic Factories" items={[
        "Requirement clarification",
        "Supplier search",
        "Quotation comparison",
        "Technical confirmation",
        "Sample or drawing verification",
        "Quality inspection",
        "Shipment consolidation",
        "Export coordination"
      ]} />
      <ListBlock title="Risks in Plastic Industry Sourcing" items={[
        "Fake or unclear specifications for machines, auxiliaries, molds, and spare parts",
        "Low-quality molds caused by weak materials, poor machining, or incomplete technical confirmation",
        "Hidden costs in machinery such as missing accessories, spare parts, installation details, or packing charges",
        "Spare parts mismatch due to incomplete model numbers, photos, dimensions, or machine information",
        "After-sales risk when suppliers do not clearly explain warranty limits, replacement parts, or technical support",
        "Delivery delays when molds, machines, auxiliaries, and consumables come from several suppliers without coordination"
      ]} />
      <InternalLinks />
    </>
  );
}

function PlasticIndustryExtra() {
  return (
    <>
      <ListBlock title="Products MAVORIX Can Help Source for Plastic Factories" items={[
        "Injection molding machines and selected machine accessories",
        "Plastic injection molds, mold components, hot runner parts, ejector pins, and mold maintenance items",
        "Auxiliary equipment including crushers, dryers, chillers, loaders, mixers, conveyors, and temperature controllers",
        "Spare parts for molding machines, auxiliaries, conveyors, dryers, chillers, and factory maintenance",
        "Factory consumables, MRO supplies, tools, heaters, sensors, fittings, hoses, fasteners, and electrical-mechanical parts",
        "Packaging materials, bags, cartons, labels, pallets, and export packing support for plastic product factories"
      ]} />
      <ListBlock title="Typical Sourcing Needs for Plastic Product Factories" items={[
        "Replacing urgent spare parts when the original supplier is slow, expensive, or unavailable",
        "Comparing Chinese suppliers for a new auxiliary machine or mold-related component",
        "Finding mixed MRO supplies and consumables for daily factory maintenance",
        "Coordinating machines, molds, spare parts, and packaging materials from several suppliers",
        "Checking whether a supplier understands drawings, part samples, resin type, machine model, and production use",
        "Arranging inspection, photos, videos, packing checks, and shipment consolidation before export"
      ]} />
      <ListBlock title="Common Risks When Buying Plastic Industry Equipment from China" items={[
        "Machine or auxiliary equipment capacity does not match the factory's production requirement",
        "Mold or spare part details are unclear because drawings, resin type, machine model, or sample photos are incomplete",
        "Quotation looks attractive but excludes important accessories, packing, spare parts, or after-sales details",
        "Supplier cannot explain technical parameters, lead time, voltage, control system, or replacement part availability clearly",
        "Poor export packing causes damage to molds, machines, chillers, conveyors, or fragile components",
        "Several suppliers deliver at different times and the buyer has no China-side consolidation coordination"
      ]} />
      <section>
        <h2 className="text-3xl font-black text-navy">Related Links for Plastic Factory Buyers</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {[
            { href: "/en/services/china-industrial-sourcing/", label: "China Industrial Sourcing" },
            { href: "/en/services/supplier-verification/", label: "Supplier Verification" },
            { href: "/en/services/quality-inspection/", label: "Quality Inspection" },
            { href: "/en/services/industrial-spare-parts-sourcing/", label: "Spare Parts Sourcing" },
            { href: "/en/services/container-consolidation/", label: "Container Consolidation" },
            { href: "/en/industries/", label: "All Industries" },
            { href: "/en/countries/", label: "Countries We Support" },
            { href: "/en/blog/mro-sourcing-from-china-guide/", label: "MRO Sourcing Guide" },
            { href: "/en/blog/reduce-risks-buying-industrial-equipment-from-china/", label: "Equipment Risk Control" },
            { href: "/en/contact/", label: "Contact MAVORIX" }
          ].map((link) => <Link key={link.href} href={link.href} className="inline-flex min-h-11 items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-bold text-navy ring-1 ring-slate-200 transition hover:bg-slate-50">{link.label}</Link>)}
        </div>
      </section>
    </>
  );
}

function InternalLinks() {
  const links = [
    { href: "/en/services/china-industrial-sourcing/", label: "China Industrial Sourcing" },
    { href: "/en/services/supplier-verification/", label: "Supplier Verification" },
    { href: "/en/services/quality-inspection/", label: "Quality Inspection" },
    { href: "/en/services/container-consolidation/", label: "Container Consolidation" },
    { href: "/en/industries/", label: "Industries We Support" },
    { href: "/en/countries/", label: "Countries We Support" },
    { href: "/en/contact/", label: "Contact MAVORIX" }
  ];
  return (
    <section>
      <h2 className="text-3xl font-black text-navy">Related Plastic Industry Sourcing Support</h2>
      <div className="mt-4 flex flex-wrap gap-3">
        {links.map((link) => <Link key={link.href} href={link.href} className="inline-flex min-h-11 items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-bold text-navy ring-1 ring-slate-200 transition hover:bg-slate-50">{link.label}</Link>)}
      </div>
    </section>
  );
}

const plasticIndustryFaqs = [
  { q: "What plastic industry products can you source from China?", a: "We can help source injection molding machines, plastic molds, auxiliary equipment, mold components, hot runner parts, spare parts, factory consumables, MRO supplies, and packaging materials." },
  { q: "Can you help with injection molding machines and molds?", a: "Yes. We support supplier search, quotation comparison, technical confirmation, drawing or sample coordination, inspection follow-up, and export coordination for injection molding machines and mold-related sourcing." },
  { q: "Do you verify suppliers before payment?", a: "Yes. We can review supplier identity, communication quality, capability signals, quotation details, documents, and practical risk points before buyers pay a deposit." },
  { q: "Can you consolidate shipments from multiple factories?", a: "Yes. When machines, molds, spare parts, consumables, and packaging materials come from several suppliers, we can help coordinate delivery timing, packing notes, warehouse communication, and consolidation follow-up." },
  { q: "Do you support small spare parts orders?", a: "Yes, when the parts can be identified clearly through photos, drawings, model numbers, nameplates, samples, or dimensions and suppliers can support the order quantity." },
  { q: "Which countries do you support for sourcing?", a: "We support overseas buyers in many regions, including the Balkan region, Latin America, Middle East, Africa, Europe, and other markets that need China-side industrial sourcing coordination." }
];

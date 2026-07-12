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
  const image = slug === "plastic-industry"
    ? pageImages.plasticIndustryOg
    : slug === "metal-parts"
      ? pageImages.metalPartsOg
      : slug === "electrical-mechanical-parts"
        ? pageImages.electricalMechanicalPartsOg
        : slug === "industrial-machinery"
          ? pageImages.industrialMachineryOg
          : slug === "agricultural-equipment"
            ? pageImages.agriculturalEquipmentOg
            : slug === "factory-spare-parts"
              ? pageImages.factorySparePartsOg
              : slug === "packaging-industry"
                ? pageImages.packagingIndustryOg
                : { src: industry.image, alt: `${industry.title} sourcing visual for China industrial procurement`, width: 1200, height: 800 };
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
  const faqs = industry.slug === "plastic-industry"
    ? plasticIndustryFaqs
    : industry.slug === "metal-parts"
      ? metalPartsFaqs
      : industry.slug === "mro-supplies"
        ? mroSuppliesFaqs
        : industry.slug === "packaging-industry"
          ? packagingIndustryFaqs
          : buildIndustryFaqs(industry.title);
  return (
    <>
      <PageHero badge="Industry" title={`${industry.title} Sourcing from China`} description={industry.description} breadcrumbs={[{ label: "Home", href: `/${locale}/` }, { label: "Industries", href: `/${locale}/industries/` }, { label: industry.title, href: `/${locale}/industries/${industry.slug}/` }]} />
      {locale === "en" && industry.slug === "plastic-industry" ? <PlasticHeroImage /> : null}
      {locale === "en" && industry.slug === "metal-parts" ? <MetalPartsHeroImage /> : null}
      {locale === "en" && industry.slug === "electrical-mechanical-parts" ? <ElectricalMechanicalPartsHeroImage /> : null}
      {locale === "en" && industry.slug === "industrial-machinery" ? <IndustrialMachineryHeroImage /> : null}
      {locale === "en" && industry.slug === "agricultural-equipment" ? <AgriculturalEquipmentHeroImage /> : null}
      {locale === "en" && industry.slug === "factory-spare-parts" ? <FactorySparePartsHeroImage /> : null}
      {locale === "en" && industry.slug === "packaging-industry" ? <PackagingIndustryHeroImage /> : null}
      <Container className="grid gap-8 py-16 lg:grid-cols-[1fr_320px]">
        <article className="space-y-10">
          {locale !== "en" ? <EnglishVersionNotice locale={locale} /> : null}
          {locale === "en" && industry.slug === "plastic-industry" ? <PlasticLandingContent /> : null}
          {locale === "en" && industry.slug === "metal-parts" ? <MetalPartsLandingContent /> : null}
          {locale === "en" && industry.slug === "electrical-mechanical-parts" ? <ElectricalMechanicalPartsIntro /> : null}
          {locale === "en" && industry.slug === "industrial-machinery" ? <IndustrialMachineryIntro /> : null}
          {locale === "en" && industry.slug === "agricultural-equipment" ? <AgriculturalEquipmentIntro /> : null}
          {locale === "en" && industry.slug === "mro-supplies" ? <MroSuppliesLandingContent /> : null}
          {locale === "en" && industry.slug === "packaging-industry" ? <PackagingIndustryLandingContent /> : null}
          {locale === "en" && (industry.slug === "plastic-industry" || industry.slug === "metal-parts" || industry.slug === "electrical-mechanical-parts" || industry.slug === "industrial-machinery" || industry.slug === "agricultural-equipment" || industry.slug === "factory-spare-parts" || industry.slug === "packaging-industry") ? null : <IndustrialImage src={industry.image} alt={`${industry.title} sourcing from China`} className="min-h-[360px]" />}
          <Block title="Industry-Focused Introduction" text={`MAVORIX INDUSTRIAL helps overseas buyers source, verify, and coordinate Chinese suppliers for ${industry.title.toLowerCase()} products. We do not claim to manufacture every item; our role is procurement support and supplier coordination.`} />
          <ListBlock title="Common Sourcing Needs" items={industry.products} />
          <ListBlock title="Common Buyer Problems" items={["Unclear supplier capability", "Difficulty confirming technical specifications", "Quality variation before shipment", "Fragmented communication across multiple factories", "Export packing and document coordination"]} />
          <Block title="How MAVORIX INDUSTRIAL Supports Sourcing" text="We review requirements, search and compare suppliers, coordinate technical questions, follow samples or trial orders, arrange quality checks, and support supplier-side export coordination." />
          {locale === "en" && industry.slug === "plastic-industry" ? <PlasticIndustryExtra /> : null}
          {locale === "en" ? <IndustryRelatedGuides slug={industry.slug} /> : null}
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
  },
  "metal-parts": {
    title: "Metal Parts Sourcing from China | Fasteners & Machined Components | MAVORIX",
    description: "MAVORIX supports sourcing of metal parts from China including screws, bolts, spacers, gears, and precision machined components for industrial buyers."
  },
  "mro-supplies": {
    title: "Industrial MRO Supplies from China | Factory Maintenance Sourcing | MAVORIX",
    description: "Source industrial MRO supplies from China with MAVORIX, including factory maintenance parts, tools, consumables, fasteners, pneumatic parts, hydraulic parts, and spare parts."
  },
  "packaging-industry": {
    title: "Packaging Machine Parts & MRO Sourcing from China | MAVORIX",
    description: "MAVORIX supports sourcing of packaging machines, conveyor parts, filling parts, sealing equipment, packaging machine spares, and MRO supplies from China."
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
function RelatedLinks({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <section>
      <h2 className="text-3xl font-black text-navy">{title}</h2>
      <div className="mt-4 flex flex-wrap gap-3">
        {links.map((link) => <Link key={link.href} href={link.href} className="inline-flex min-h-11 items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-bold text-navy ring-1 ring-slate-200 transition hover:bg-slate-50">{link.label}</Link>)}
      </div>
    </section>
  );
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

function MetalPartsHeroImage() {
  return (
    <section className="bg-white pt-8">
      <Container>
        <IndustrialImage
          src={pageImages.metalPartsHero.src}
          alt={pageImages.metalPartsHero.alt}
          className="min-h-[300px] rounded-lg md:min-h-[460px]"
          sizes="100vw"
          priority
        />
      </Container>
    </section>
  );
}

function ElectricalMechanicalPartsHeroImage() {
  return (
    <section className="bg-white pt-8">
      <Container>
        <IndustrialImage
          src={pageImages.electricalMechanicalPartsHero.src}
          alt={pageImages.electricalMechanicalPartsHero.alt}
          className="min-h-[300px] rounded-lg md:min-h-[460px]"
          sizes="100vw"
          priority
        />
      </Container>
    </section>
  );
}

function IndustrialMachineryHeroImage() {
  return (
    <section className="bg-white pt-8">
      <Container>
        <IndustrialImage
          src={pageImages.industrialMachineryHero.src}
          alt={pageImages.industrialMachineryHero.alt}
          className="min-h-[300px] rounded-lg md:min-h-[460px]"
          sizes="100vw"
          priority
        />
      </Container>
    </section>
  );
}

function AgriculturalEquipmentHeroImage() {
  return (
    <section className="bg-white pt-8">
      <Container>
        <IndustrialImage
          src={pageImages.agriculturalEquipmentHero.src}
          alt={pageImages.agriculturalEquipmentHero.alt}
          className="min-h-[300px] rounded-lg md:min-h-[460px]"
          sizes="100vw"
          priority
        />
      </Container>
    </section>
  );
}

function FactorySparePartsHeroImage() {
  return (
    <section className="bg-white pt-8">
      <Container>
        <IndustrialImage
          src={pageImages.factorySparePartsHero.src}
          alt={pageImages.factorySparePartsHero.alt}
          className="min-h-[300px] rounded-lg md:min-h-[460px]"
          sizes="100vw"
          priority
        />
      </Container>
    </section>
  );
}

function PackagingIndustryHeroImage() {
  return (
    <section className="bg-white pt-8">
      <Container>
        <IndustrialImage
          src={pageImages.packagingIndustryHero.src}
          alt={pageImages.packagingIndustryHero.alt}
          className="min-h-[300px] rounded-lg md:min-h-[460px]"
          sizes="100vw"
          priority
        />
      </Container>
    </section>
  );
}

function AgriculturalEquipmentIntro() {
  return (
    <section>
      <h2 className="text-3xl font-black text-navy">Agricultural Equipment Sourcing from China</h2>
      <p className="mt-4 leading-8 text-slate-600">
        MAVORIX INDUSTRIAL supports overseas buyers sourcing agricultural machinery parts, tractor parts, farm equipment spare parts, replacement parts, wear parts, irrigation-related products, and maintenance components from China. Typical sourcing needs include filters, bearings, belts, seals, bushings, gears, shafts, clutch and transmission-related parts, hydraulic or pump-related parts, and general tractor spare parts. We help clarify part numbers, photos, samples, dimensions, materials, supplier capability, quotation details, inspection requirements, and shipment consolidation so agricultural equipment buyers can coordinate sourcing with less uncertainty.
      </p>
    </section>
  );
}

function MroSuppliesLandingContent() {
  return (
    <>
      <section>
        <h2 className="text-3xl font-black text-navy">Industrial MRO Supplies from China</h2>
        <div className="mt-4 space-y-5 leading-8 text-slate-600">
          <p>
            MRO supplies are the maintenance, repair, and operation items that factories use to keep equipment, production lines, workshops, utilities, and spare parts inventories working. They can include industrial consumables, maintenance parts, pneumatic parts, hydraulic parts, electrical parts, fasteners, tools, safety products, workshop supplies, filters, bearings, belts, seals, hoses, fittings, lubricants, cutting items, and factory spare parts.
          </p>
          <p>
            Buyers searching for industrial MRO suppliers in China often face a practical problem: the order is not one simple product. It may contain many small items from several categories, and each item needs enough technical information to avoid wrong replacements. A bearing may require size, load, seal type, and brand reference. A pneumatic valve may require voltage, port size, pressure, coil type, and mounting. A belt may require length, profile, width, and working environment.
          </p>
          <p>
            MAVORIX INDUSTRIAL helps overseas factories and distributors organize MRO sourcing from China with supplier search, quotation comparison, supplier verification, quality coordination, and shipment consolidation. We do not claim to manufacture these products. Our role is to help buyers reduce sourcing risk, clarify technical details, compare realistic options, and coordinate export-side execution when mixed factory maintenance supplies come from multiple Chinese suppliers.
          </p>
        </div>
      </section>
      <ListBlock title="MRO Product Categories We Can Help Source" items={[
        "Industrial consumables, workshop supplies, tools, safety products, and factory maintenance items",
        "Maintenance parts including bearings, belts, chains, seals, filters, hoses, rollers, couplings, and fasteners",
        "Pneumatic parts including cylinders, solenoid valves, fittings, tubes, regulators, and air preparation units",
        "Hydraulic parts including hoses, fittings, seals, pumps, valves, cylinders, and maintenance accessories",
        "Electrical parts including sensors, switches, relays, contactors, cables, motors, drives, and control accessories",
        "Factory spare parts and replacement components for production lines, machinery, packaging equipment, and utilities"
      ]} />
      <ListBlock title="Typical Buyers" items={[
        "Factories that need mixed maintenance supplies and replacement parts from China",
        "MRO distributors and importers building repeat sourcing channels for factory customers",
        "Maintenance teams that have photos, nameplates, or samples but incomplete part numbers",
        "Procurement managers comparing China MRO suppliers before payment",
        "Industrial buyers consolidating small orders from several suppliers into one shipment"
      ]} />
      <ListBlock title="Common Sourcing Risks" items={[
        "Wrong model, material, voltage, pressure rating, dimension, or installation detail",
        "Supplier quotes a similar-looking item without confirming real application requirements",
        "Small mixed items become expensive when shipped separately by different suppliers",
        "Unverified suppliers overpromise lead time or product compatibility",
        "No clear inspection, packing, labeling, or item-list control before shipment",
        "Poor record keeping makes repeat MRO orders difficult months later"
      ]} />
      <RelatedLinks title="Related MRO Support" links={[
        { href: "/en/services/mro-sourcing-from-china/", label: "MRO Sourcing Service" },
        { href: "/en/industries/factory-spare-parts/", label: "Factory Spare Parts" },
        { href: "/en/services/supplier-verification/", label: "Supplier Verification" },
        { href: "/en/services/container-consolidation/", label: "Container Consolidation" },
        { href: "/en/blog/how-to-source-mro-supplies-from-china/", label: "How to Source MRO Supplies from China" },
        { href: "/en/contact/", label: "Send MRO Inquiry" }
      ]} />
    </>
  );
}

function PackagingIndustryLandingContent() {
  return (
    <>
      <section>
        <h2 className="text-3xl font-black text-navy">Packaging Machine Parts and MRO Sourcing from China</h2>
        <div className="mt-4 space-y-5 leading-8 text-slate-600">
          <p>
            MAVORIX INDUSTRIAL supports overseas buyers sourcing packaging machines, packaging machine spare parts, conveyor parts, filling parts, sealing equipment, labeling equipment, rollers, belts, guide rails, sensors, bearings, nozzles, heaters, pneumatic components, electrical parts, and industrial packaging supplies from China. Packaging industry sourcing often involves both production equipment and MRO maintenance items, so the sourcing process needs careful technical confirmation.
          </p>
          <p>
            A packaging line may include conveyors, fillers, cappers, sealers, labelers, coders, wrapping machines, cartoners, and inspection equipment from different suppliers. Spare parts can look simple in photos, but small differences in voltage, size, mounting, material, product-contact area, sealing temperature, belt profile, nozzle design, sensor type, or pneumatic connection can cause downtime or poor packaging quality.
          </p>
          <p>
            We help buyers compare Chinese suppliers by reviewing product focus, quotation clarity, communication quality, technical answers, inspection options, packing notes, and export coordination. This is especially useful when a buyer needs packaging machine MRO items from several factories and wants one China-side sourcing partner to coordinate supplier verification, quality checks, and consolidation.
          </p>
        </div>
      </section>
      <ListBlock title="Packaging Machine MRO and Maintenance Needs" items={[
        "Conveyor belts, rollers, chains, guide rails, shafts, bearings, motors, reducers, and support parts",
        "Filling machine parts including filling nozzles, valves, seals, pumps, tubes, fittings, and product-contact components",
        "Sealing equipment parts including heaters, sealing bars, temperature sensors, belts, cutters, and wear parts",
        "Labeling and coding machine parts including sensors, rollers, motors, belts, brackets, and electrical accessories",
        "Pneumatic and electrical components including cylinders, solenoid valves, switches, relays, cables, and control items",
        "Packaging supplies including films, cartons, labels, bags, pallets, and export packing materials where relevant"
      ]} />
      <ListBlock title="How MAVORIX Helps Compare Chinese Suppliers" items={[
        "Clarify the machine model, spare part function, dimensions, material, voltage, and installation details",
        "Search suppliers with relevant packaging equipment or spare parts experience",
        "Compare quotations, MOQ, lead time, packing notes, photos, and technical responses",
        "Review supplier verification signals before payment and coordinate inspection points before shipment",
        "Support mixed packaging MRO sourcing and consolidation when several suppliers are involved"
      ]} />
      <RelatedLinks title="Related Packaging Sourcing Pages" links={[
        { href: "/en/services/mro-sourcing-from-china/", label: "MRO Sourcing from China" },
        { href: "/en/services/china-industrial-sourcing/", label: "China Industrial Sourcing" },
        { href: "/en/industries/factory-spare-parts/", label: "Factory Spare Parts" },
        { href: "/en/services/supplier-verification/", label: "Supplier Verification" },
        { href: "/en/blog/packaging-machine-spare-parts-mro-sourcing-from-china/", label: "Packaging MRO Buying Guide" },
        { href: "/en/contact/", label: "Contact MAVORIX" }
      ]} />
    </>
  );
}

function IndustrialMachineryIntro() {
  return (
    <section>
      <h2 className="text-3xl font-black text-navy">Industrial Machinery Sourcing from China</h2>
      <p className="mt-4 leading-8 text-slate-600">
        MAVORIX INDUSTRIAL supports overseas buyers sourcing industrial machinery, workshop equipment, production equipment, machinery spare parts, maintenance parts, wear parts, and factory consumables from China. Typical requirements may include band saws, air compressors, punch presses, taper pipe or shrinking machines, laser welding equipment, and related spare parts such as saw blades, filters, belts, pulleys, bearings, seals, bushings, nozzles, copper consumables, springs, dies, and metal components. We help clarify specifications, compare suppliers, review quotations, verify supplier capability, coordinate inspection points, and support sourcing execution for both equipment and spare parts.
      </p>
    </section>
  );
}

function ElectricalMechanicalPartsIntro() {
  return (
    <section>
      <h2 className="text-3xl font-black text-navy">Electrical and Mechanical Parts Sourcing from China</h2>
      <p className="mt-4 leading-8 text-slate-600">
        MAVORIX INDUSTRIAL supports overseas buyers sourcing electrical and mechanical industrial parts from China, including servo motors and drives, pumps, oil coolers, butterfly valves, hydraulic valves, pneumatic valves, quick couplings, speed reducers, gearboxes, pneumatic cylinders, and related factory maintenance components. We help clarify product models, technical specifications, compatibility, quantities, supplier capability, quotation details, inspection needs, and export packing so factories, machinery users, MRO buyers, and distributors can compare suppliers with less uncertainty.
      </p>
    </section>
  );
}

function MetalPartsLandingContent() {
  return (
    <>
      <section>
        <h2 className="text-3xl font-black text-navy">Metal Parts Sourcing from China</h2>
        <div className="mt-4 space-y-5 leading-8 text-slate-600">
          <p>
            MAVORIX INDUSTRIAL supports overseas industrial buyers sourcing metal parts from China for machinery maintenance, OEM production, factory spare parts, distribution, and project procurement. Metal parts sourcing often looks simple at first because product names such as screws, bolts, spacers, gears, brackets, or machined components are familiar. In practice, small details can decide whether an order works: material grade, hardness, thread standard, tolerance, surface treatment, drawing revision, sample confirmation, packing method, and supplier capability all need to be checked before purchase.
          </p>
          <p>
            We help factories, distributors, machinery users, and procurement teams source stainless steel screws and bolts, threaded fasteners, set screws, standoffs, spacers, precision machined parts, stamped metal parts, gears, mechanical components, and custom metal hardware. Our role is not to claim ownership of every production facility. We support the sourcing process by clarifying requirements, searching and comparing suitable Chinese suppliers, checking supplier communication and capability signals, coordinating quotations, and following sample or drawing confirmation when needed.
          </p>
          <p>
            This support is useful when buyers need cost optimization, alternative supplier search, small batch urgent parts, multi-supplier consolidation, or a China-side contact to reduce communication gaps. For metal parts, supplier verification and quality control are especially important because two quotations can look similar while using different materials, tolerances, surface finishes, inspection standards, or packing assumptions. MAVORIX helps buyers organize these details before payment, follow inspection requirements before shipment, and coordinate export packaging or shipment consolidation when several suppliers are involved.
          </p>
        </div>
      </section>
      <ListBlock title="We Help Source" items={[
        "Stainless steel screws and bolts",
        "Threaded fasteners and set screws",
        "Standoffs and spacers",
        "Precision machined parts",
        "Industrial gears and mechanical components",
        "Stamped metal parts",
        "Custom metal hardware"
      ]} />
      <ListBlock title="Typical Buyer Needs" items={[
        "Machinery maintenance spare parts sourcing when original parts are expensive, slow, or unavailable",
        "Factory production line replacement parts that require model, drawing, dimension, or sample confirmation",
        "OEM custom metal components with drawings, tolerances, surface treatment, and packing requirements",
        "Small batch urgent sourcing for fasteners, spacers, set screws, machined parts, and mechanical hardware",
        "Multi-supplier consolidation when buyers purchase fasteners, machined parts, stamped parts, and gears from different factories"
      ]} />
      <ListBlock title="Metal Parts Sourcing Process" items={[
        "Requirement clarification",
        "Supplier search and matching",
        "Quotation comparison",
        "Sample or drawing confirmation",
        "Quality inspection",
        "Export packaging",
        "Shipment consolidation",
        "Delivery coordination"
      ]} />
      <ListBlock title="Risks in Metal Part Sourcing" items={[
        "Wrong material specification or unclear stainless steel grade",
        "Low-quality machining tolerance that affects assembly or machine performance",
        "Surface treatment inconsistency across batches or suppliers",
        "Thread mismatch issues caused by incomplete drawings, standards, or samples",
        "Supplier capability mismatch for custom machining, stamped parts, gears, or repeat orders"
      ]} />
      <MetalPartsInternalLinks />
    </>
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

function MetalPartsInternalLinks() {
  const links = [
    { href: "/en/services/china-industrial-sourcing/", label: "China Industrial Sourcing" },
    { href: "/en/services/supplier-verification/", label: "Supplier Verification" },
    { href: "/en/services/quality-inspection/", label: "Quality Inspection" },
    { href: "/en/services/container-consolidation/", label: "Container Consolidation" },
    { href: "/en/industries/", label: "Industries We Support" },
    { href: "/en/contact/", label: "Contact MAVORIX" }
  ];
  return (
    <section>
      <h2 className="text-3xl font-black text-navy">Related Metal Parts Sourcing Support</h2>
      <div className="mt-4 flex flex-wrap gap-3">
        {links.map((link) => <Link key={link.href} href={link.href} className="inline-flex min-h-11 items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-bold text-navy ring-1 ring-slate-200 transition hover:bg-slate-50">{link.label}</Link>)}
      </div>
    </section>
  );
}

function IndustryRelatedGuides({ slug }: { slug: string }) {
  const guides: Record<string, { href: string; label: string }[]> = {
    "factory-spare-parts": [
      { href: "/en/blog/identify-industrial-spare-parts-without-part-number/", label: "Guide: Identify Spare Parts Without Part Numbers" },
      { href: "/en/blog/source-obsolete-discontinued-industrial-spare-parts/", label: "Guide: Obsolete and Discontinued Spare Parts" },
      { href: "/en/blog/how-to-source-mro-supplies-from-china/", label: "Guide: MRO Supplies for Factory Maintenance" }
    ],
    "packaging-industry": [
      { href: "/en/blog/packaging-machine-spare-parts-sourcing-china/", label: "Guide: Packaging Machine Spare Parts Sourcing" },
      { href: "/en/blog/packaging-machine-spare-parts-mro-sourcing-from-china/", label: "Guide: Packaging Machine MRO Sourcing" }
    ],
    "mro-supplies": [
      { href: "/en/blog/how-to-source-mro-supplies-from-china/", label: "Guide: How to Source MRO Supplies from China" },
      { href: "/en/blog/factory-consumables-and-mro-supplies-from-china/", label: "Guide: Factory Consumables and MRO Supplies" }
    ],
    "agricultural-equipment": [
      { href: "/en/blog/agricultural-machinery-spare-parts-china-buying-guide/", label: "Guide: Agricultural Machinery Spare Parts Buying" }
    ],
    "electrical-mechanical-parts": [
      { href: "/en/blog/source-obsolete-discontinued-industrial-spare-parts/", label: "Guide: Obsolete and Discontinued Spare Parts" }
    ],
    "plastic-industry": [
      { href: "/en/blog/injection-molding-factory-procurement-checklist/", label: "Guide: Injection Molding Factory Procurement Checklist" }
    ]
  };
  const links = guides[slug];
  if (!links) return null;
  return (
    <section>
      <h2 className="text-3xl font-black text-navy">Related Buyer Guide</h2>
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

const metalPartsFaqs = [
  { q: "What types of metal parts can you source from China?", a: "We can help source stainless steel screws, bolts, threaded fasteners, set screws, standoffs, spacers, gears, machined components, stamped parts, metal hardware, and custom precision components." },
  { q: "Can you source small batch fasteners and screws?", a: "Yes, when the requirement is clear enough for supplier matching. Photos, drawings, samples, material grade, thread standard, quantity, and target use help improve search accuracy." },
  { q: "Do you verify suppliers before purchase?", a: "Yes. We can review supplier identity, communication quality, capability signals, quotation details, production evidence, and practical risk points before buyers pay a deposit or confirm an order." },
  { q: "Can you consolidate shipments from multiple factories?", a: "Yes. If buyers purchase fasteners, machined parts, stamped parts, gears, and other hardware from different suppliers, we can help coordinate packing, delivery timing, warehouse communication, and consolidation follow-up." },
  { q: "Do you support OEM metal machining parts?", a: "Yes. We can support OEM metal machining sourcing when buyers provide drawings, samples, tolerances, materials, surface treatment requirements, quantity, and inspection expectations." },
  { q: "What industries do you support for metal parts sourcing?", a: "We support machinery maintenance, factory production lines, MRO buyers, distributors, OEM projects, packaging equipment, agricultural equipment, plastic factories, and other industrial buyers needing metal parts from China." }
];

const mroSuppliesFaqs = [
  { q: "What are industrial MRO supplies?", a: "Industrial MRO supplies are maintenance, repair, and operation items used to keep factories running, including consumables, spare parts, tools, bearings, belts, filters, fasteners, pneumatic parts, hydraulic parts, electrical parts, and workshop supplies." },
  { q: "Can MAVORIX help source mixed MRO items from China?", a: "Yes. We help overseas buyers organize mixed item lists, search and compare suppliers, coordinate technical questions, and plan shipment consolidation when several Chinese suppliers are involved." },
  { q: "What information should I prepare for MRO sourcing?", a: "Prepare item names, quantities, photos, part numbers, model numbers, nameplates, dimensions, drawings, machine application, destination country, and any previous supplier links or quotations." },
  { q: "Can you verify MRO suppliers?", a: "Yes. We can review supplier identity, product focus, quotation clarity, communication quality, export experience, and basic risk signals before payment." },
  { q: "Do you support factory spare parts and urgent replacement items?", a: "Yes, when the parts can be identified with enough information. For urgent items, clear photos, nameplates, dimensions, samples, or drawings are especially important." },
  { q: "Can MRO orders be consolidated?", a: "Yes. Mixed MRO orders from multiple suppliers can often be consolidated to improve packing control, documentation, and shipment coordination." }
];

const packagingIndustryFaqs = [
  { q: "What packaging machine parts can you help source from China?", a: "We can help source conveyor parts, filling parts, sealing equipment parts, labeling machine parts, rollers, belts, guide rails, sensors, bearings, nozzles, pneumatic parts, electrical parts, and packaging supplies." },
  { q: "Can you support packaging equipment MRO sourcing?", a: "Yes. We support packaging machine MRO sourcing by clarifying part details, comparing suppliers, checking quotation risks, coordinating inspection, and supporting mixed-item consolidation." },
  { q: "What information is needed for packaging machine spare parts?", a: "Useful information includes machine model, part photos, installed position, nameplate, dimensions, voltage, material, function, product handled, quantity, and any old supplier or part number." },
  { q: "Can you verify packaging machine spare parts suppliers?", a: "Yes. We can help review supplier identity, product focus, communication quality, quotation clarity, evidence, packing notes, and practical sourcing risks before payment." },
  { q: "Do you manufacture packaging machines?", a: "No. MAVORIX INDUSTRIAL is a sourcing and procurement support partner. We help buyers source, verify, compare, coordinate, and consolidate suppliers from China." },
  { q: "Can several packaging suppliers be consolidated into one shipment?", a: "Yes. When buyers purchase packaging parts, MRO supplies, packaging materials, and factory spare parts from different suppliers, we can help coordinate shipment consolidation." }
];

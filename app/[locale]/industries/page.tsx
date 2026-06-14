import type { Metadata } from "next";
import Link from "next/link";
import { IndustryCard } from "@/components/cards/IndustryCard";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { IndustrialImage } from "@/components/ui/IndustrialImage";
import { industries } from "@/data/industries";
import { pageImages } from "@/data/page-images";
import { services } from "@/data/services";
import { faqSchema, JsonLd } from "@/lib/schema";
import { seo } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return seo({
    title: "Industries Supported for China Industrial Sourcing | MAVORIX",
    description: "Industry-focused China sourcing support for plastic factories, industrial machinery users, spare parts buyers, MRO teams, agricultural equipment buyers, packaging operations, metal parts, and electrical-mechanical parts.",
    path: `/${locale}/industries/`,
    canonicalPath: "/en/industries/",
    index: locale === "en",
    image: pageImages.industries
  });
}

export default function IndustriesPage() {
  return (
    <>
      <PageHero badge="Industries" title="Industries We Support" description="We help buyers source, verify, and coordinate suppliers for industrial products from China." breadcrumbs={[{ label: "Home", href: "/en/" }, { label: "Industries", href: "/en/industries/" }]} />
      <section className="bg-white py-16">
        <Container className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-center">
          <div className="max-w-5xl space-y-5 text-base leading-8 text-slate-600">
            <p>
              Industrial sourcing works best when the buyer's industry is understood before supplier search begins. A plastic product factory does not evaluate equipment in the same way as a distributor buying spare parts, and an MRO buyer usually needs fast identification, mixed quantities, and practical alternatives rather than a long catalog conversation. MAVORIX INDUSTRIAL supports overseas buyers by organizing China sourcing around real industrial use cases: production equipment, replacement parts, maintenance items, factory consumables, OEM components, and export-ready purchasing.
            </p>
            <p>
              We help buyers in the plastic industry, industrial machinery, factory spare parts, MRO supplies, agricultural equipment, packaging, metal parts, and electrical or mechanical parts categories. The work may include checking whether a supplier understands drawings, confirming part numbers and models, comparing quotations from several factories, coordinating samples, asking for packing details, arranging inspection requirements, or consolidating goods from different suppliers before export.
            </p>
            <p>
              Our role is not to make exaggerated claims about owning factories in every industry. It is to provide China-side sourcing support that helps buyers ask better questions, avoid weak suppliers, and move from unclear requirement to a more controlled procurement process. These industry pages are designed to help buyers find the most relevant sourcing path and related services.
            </p>
          </div>
          <IndustrialImage src={pageImages.industries.src} alt={pageImages.industries.alt} className="aspect-video" sizes="(min-width: 1024px) 420px, 100vw" fit="contain" />
        </Container>
      </section>
      <section className="bg-slate-50 py-16">
        <Container>
          <h2 className="text-3xl font-black text-navy">Industry Examples</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{industries.map((industry) => <IndustryCard key={industry.slug} industry={industry} />)}</div>
        </Container>
      </section>
      <GridSection title="How We Support Different Industries" items={supportItems} />
      <GridSection title="Common Products We Help Source" items={commonProducts} />
      <section className="bg-slate-50 py-16">
        <Container>
          <h2 className="text-3xl font-black text-navy">Related Industry and Service Links</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {industries.map((industry) => (
              <Link key={industry.slug} href={`/en/industries/${industry.slug}/`} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm hover:shadow-industrial">
                <h3 className="font-black text-navy">{industry.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{industry.description}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {services.slice(0, 5).map((service) => <Button key={service.slug} href={`/en/services/${service.slug}/`} variant="secondary">{service.shortTitle}</Button>)}
            <Button href="/en/contact/">Contact MAVORIX</Button>
          </div>
        </Container>
      </section>
      <FAQSection faqs={industryFaqs} />
      <CTASection />
      <JsonLd data={faqSchema(industryFaqs)} />
    </>
  );
}

const supportItems = [
  "Clarify drawings, photos, model numbers, application, quantity, and target market before supplier search",
  "Search and compare suppliers that match the product category and order size",
  "Ask technical questions that fit the product, machine, spare part, or consumable use case",
  "Coordinate samples, trial orders, inspection points, packing notes, and export follow-up",
  "Help buyers combine several suppliers when one project includes machines, parts, and consumables",
  "Support after-sales communication when buyers need missing documents, replacement parts, or clarification"
];

const commonProducts = [
  "Injection molding machines, molds, dryers, loaders, conveyors, chillers, crushers, and plastic factory auxiliaries",
  "General industrial machinery, production equipment, reducers, pumps, valves, bearings, motors, and sensors",
  "Factory spare parts, electrical spares, mechanical spares, obsolete replacement parts, and emergency maintenance items",
  "MRO supplies, tools, consumables, fasteners, sealing parts, pneumatic parts, hydraulic parts, and safety items",
  "Agricultural equipment parts for tractors, tillers, harvesters, irrigation systems, and farm implements",
  "Packaging machines, filling parts, sealing equipment, conveyors, packaging materials, and factory supplies",
  "Metal parts including casting, machining, stamping, fabrication, and custom components",
  "Electrical and mechanical parts used in production lines, repair work, and OEM assemblies"
];

const industryFaqs = [
  { q: "Which industries can MAVORIX support?", a: "We focus on practical industrial categories including plastic industry, industrial machinery, factory spare parts, MRO supplies, agricultural equipment, packaging, metal parts, and electrical-mechanical parts." },
  { q: "Can you source products outside these listed industries?", a: "Sometimes. If the requirement is industrial, technical, or factory-related, send details and we can review whether it fits our supplier search and coordination capability." },
  { q: "Do you verify industry-specific suppliers?", a: "Yes. We can help check supplier identity, capability signals, product experience, communication quality, quotation clarity, and order execution risk." },
  { q: "Can you help with small spare parts or MRO orders?", a: "Yes, when the product can be identified clearly and suppliers can support the order. Mixed orders may also be consolidated when practical." },
  { q: "How should I send an industry sourcing inquiry?", a: "Send product name, photos, drawings, model numbers, quantity, application, destination country, target price if available, and supplier links if you already found candidates." }
];

function GridSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="bg-white py-16">
      <Container>
        <h2 className="text-3xl font-black text-navy">{title}</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {items.map((item) => <div key={item} className="rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm font-semibold leading-7 text-slate-700">{item}</div>)}
        </div>
      </Container>
    </section>
  );
}

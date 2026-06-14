import type { Metadata } from "next";
import Link from "next/link";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { IndustrialImage } from "@/components/ui/IndustrialImage";
import { pageImages } from "@/data/page-images";
import { services } from "@/data/services";
import { faqSchema, JsonLd } from "@/lib/schema";
import { seo } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return seo({
    title: "China Industrial Sourcing Services for B2B Buyers | MAVORIX",
    description: "Practical China industrial sourcing services for factories, MRO buyers, spare parts buyers, machinery users, distributors, and project buyers who need supplier checks, quotation comparison, inspection, export support, and consolidation.",
    path: `/${locale}/services/`,
    canonicalPath: "/en/services/",
    index: locale === "en",
    image: pageImages.services
  });
}

export default function ServicesPage() {
  return (
    <>
      <PageHero badge="Services" title="Industrial Sourcing Services from China" description="Services designed to reduce sourcing risk and improve execution for overseas industrial buyers." breadcrumbs={[{ label: "Home", href: "/en/" }, { label: "Services", href: "/en/services/" }]} />
      <section className="bg-white py-16">
        <Container className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-center">
          <div className="max-w-5xl space-y-5 text-base leading-8 text-slate-600">
            <p>
              MAVORIX INDUSTRIAL works as a China industrial sourcing partner for overseas buyers who need more than a list of supplier names. Industrial purchasing often involves unclear specifications, mixed product categories, small but urgent spare parts orders, and suppliers with different levels of export experience. Our role is to help buyers turn a practical requirement into a clearer sourcing path: what should be searched, which suppliers look suitable, what information must be confirmed, and what risks should be checked before payment or shipment.
            </p>
            <p>
              We support B2B buyers sourcing machinery, OEM parts, MRO supplies, factory consumables, replacement parts, plastic industry equipment, agricultural equipment parts, packaging-related products, metal parts, and electrical or mechanical components from China. We do not present ourselves as the manufacturer of every product category. Instead, we focus on supplier search, supplier verification, quotation comparison, technical communication, sample or drawing confirmation, quality inspection coordination, export packing follow-up, shipment consolidation, and after-sales coordination with suppliers when issues need to be clarified.
            </p>
            <p>
              This is especially useful for buyers who already found possible suppliers online but are unsure how to compare them, or for procurement teams that need a China-side contact to reduce communication gaps. The goal is honest execution: clearer requirements, fewer avoidable misunderstandings, better documentation, and more visibility before goods leave China.
            </p>
          </div>
          <IndustrialImage src={pageImages.services.src} alt={pageImages.services.alt} className="aspect-video" sizes="(min-width: 1024px) 420px, 100vw" fit="contain" />
        </Container>
      </section>
      <Section title="Types of Buyers We Support" items={buyerTypes} />
      <section className="bg-white py-16">
        <Container>
          <h2 className="text-3xl font-black text-navy">Sourcing Workflow</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {workflow.map((item, index) => (
              <div key={item} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-signal">Step {index + 1}</p>
                <h3 className="mt-2 text-base font-black text-navy">{item}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-slate-50 py-16">
        <Container>
          <div className="max-w-4xl">
            <h2 className="text-3xl font-black text-navy">Service Directory with Practical Scope</h2>
            <p className="mt-4 leading-8 text-slate-600">Each service page explains a specific part of the sourcing process. Use these links to review the support that matches your current purchasing risk.</p>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{services.map((service) => <ServiceCard key={service.slug} service={service} />)}</div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <Link key={service.slug} href={`/en/services/${service.slug}/`} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-industrial">
                <h3 className="text-lg font-black text-navy">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-white py-16">
        <Container>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-3xl font-black text-navy">Ready to Check a Supplier, Quotation, or Product Requirement?</h2>
            <p className="mt-4 max-w-4xl leading-8 text-slate-600">Send product name, quantity, drawings or photos, destination country, and any supplier links you already have. We will review the sourcing path and suggest practical next steps.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/en/contact/">Contact MAVORIX</Button>
              <Button href="/en/industries/" variant="secondary">View Supported Industries</Button>
            </div>
          </div>
        </Container>
      </section>
      <FAQSection faqs={serviceFaqs} />
      <CTASection />
      <JsonLd data={faqSchema(serviceFaqs)} />
    </>
  );
}

const buyerTypes = [
  "Factories buying production equipment, spare parts, and consumables",
  "Machinery users replacing parts or comparing alternative suppliers",
  "Spare parts buyers with drawings, photos, model numbers, or samples",
  "MRO buyers consolidating maintenance and factory operation items",
  "Plastic product manufacturers sourcing machines, molds, auxiliaries, and parts",
  "Distributors comparing Chinese suppliers for repeat purchasing",
  "Project buyers coordinating several product categories from different factories",
  "Importers who need supplier verification before paying a deposit"
];

const workflow = [
  "Requirement clarification",
  "Supplier search",
  "Quotation comparison",
  "Sample or drawing confirmation",
  "Quality inspection",
  "Export packing",
  "Shipment consolidation",
  "After-sales coordination"
];

const serviceFaqs = [
  { q: "What information should I prepare before asking for sourcing support?", a: "Prepare product name, photos, drawings, specifications, quantity, destination country, expected delivery time, target price if available, and supplier information if you already found a supplier." },
  { q: "Can MAVORIX help compare several Chinese quotations?", a: "Yes. We can compare quotation structure, technical clarity, supplier communication, lead time, packing notes, and obvious risk points so buyers can make a more informed decision." },
  { q: "Do you only handle large container orders?", a: "No. We also support mixed MRO orders, spare parts, sample orders, and consolidated shipments when the requirement is practical and suppliers can support the order." },
  { q: "Can you guarantee the lowest price in China?", a: "No. We focus on reliable sourcing, supplier screening, quotation clarity, quality coordination, and execution risk reduction instead of promising the lowest price." },
  { q: "Which service should I start with?", a: "If you do not have a supplier yet, start with China industrial sourcing. If you already found a supplier, supplier verification or quotation comparison is usually the first step." },
  { q: "How do I contact MAVORIX?", a: "Use the contact page, email, or WhatsApp and include product details, quantity, destination country, and any supplier links or documents available." }
];

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="bg-slate-50 py-16">
      <Container>
        <h2 className="text-3xl font-black text-navy">{title}</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => <div key={item} className="rounded-lg border border-slate-200 bg-white p-5 text-sm font-semibold leading-7 text-slate-700 shadow-sm">{item}</div>)}
        </div>
      </Container>
    </section>
  );
}

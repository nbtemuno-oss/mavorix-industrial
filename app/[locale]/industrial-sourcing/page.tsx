import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";
import { t } from "@/data/translations";
import { faqSchema, JsonLd, serviceSchema } from "@/lib/schema";
import { seo } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const copy = t(locale).industrial;
  return seo({
    title: copy.metaTitle,
    description: copy.metaDescription,
    path: `/${locale}/industrial-sourcing/`,
    locale
  });
}

export default async function IndustrialSourcingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const copy = t(locale).industrial;
  return (
    <>
      <PageHero badge={copy.badge} title={copy.title} description={copy.description} breadcrumbs={[{ label: t(locale).nav.home, href: `/${locale}/` }, { label: t(locale).nav.industrial, href: `/${locale}/industrial-sourcing/` }]} />
      <Container className="py-16">
        <FeatureGrid items={copy.features} />
        <div className="mt-14">
          <h2 className="text-3xl font-black text-navy">{copy.processTitle}</h2>
          <div className="mt-8"><ProcessSteps locale={locale} /></div>
        </div>
        {locale === "en" ? <IndustrialSourcingSearchContent /> : null}
      </Container>
      <FAQSection faqs={copy.faqs} />
      <CTASection locale={locale} />
      <JsonLd data={[faqSchema(copy.faqs), serviceSchema(copy.title, copy.metaDescription, `${site.url}/${locale}/industrial-sourcing/`)]} />
    </>
  );
}

function IndustrialSourcingSearchContent() {
  return (
    <div className="mt-16 space-y-10">
      <section>
        <h2 className="text-3xl font-black text-navy">Industrial Sourcing from China for Real Factory Buying Needs</h2>
        <div className="mt-4 space-y-5 leading-8 text-slate-600">
          <p>
            Overseas buyers often search for a China industrial sourcing partner when the requirement is more complicated than one standard catalog item. The order may include machinery, factory spare parts, MRO supplies, metal parts, electrical components, hydraulic parts, packaging machine parts, tools, consumables, and export packing from several Chinese suppliers.
          </p>
          <p>
            MAVORIX helps organize these mixed requirements before supplier search begins. We focus on supplier screening, quotation comparison, technical clarification, supplier verification, inspection coordination, packing follow-up, and consolidation planning. The aim is to make the sourcing process clearer before payment, production, and shipment.
          </p>
        </div>
      </section>
      <ListBlock title="Typical Procurement Scenarios" items={[
        "A factory needs MRO supplies, spare parts, and maintenance consumables from several Chinese suppliers",
        "A buyer has supplier quotations but needs help checking technical details, payment risk, packing, and lead time",
        "An OEM project requires drawings, samples, tolerances, material confirmation, and supplier comparison",
        "A distributor wants repeat sourcing channels for hydraulic parts, metal parts, electrical components, tools, and factory supplies",
        "A project buyer needs several machines, spare parts, and packaging materials consolidated before export",
        "A maintenance team has photos or nameplates but incomplete part numbers and needs China-side identification support"
      ]} />
      <ListBlock title="What Buyers Should Send" items={[
        "Product names, photos, drawings, model numbers, nameplates, samples, or supplier links",
        "Quantity, expected repeat demand, target use, urgency, and destination country",
        "Material, size, voltage, pressure, tolerance, surface treatment, standard, or other technical details",
        "Current quotation, target budget, previous supplier records, or quality problems if available",
        "Inspection requirements, documents needed, packing instructions, labeling needs, and shipping preference",
        "Whether exact original parts, compatible alternatives, Chinese equivalents, or custom manufacturing are acceptable"
      ]} />
      <ListBlock title="High-Value Internal Sourcing Paths" items={[
        "MRO supplier search and mixed factory maintenance item sourcing",
        "Factory spare parts sourcing when part numbers are missing or replacement options need checking",
        "Supplier verification before paying a deposit to a Chinese factory, distributor, or trading company",
        "Metal parts sourcing for fasteners, CNC machined parts, stamped parts, gears, and drawing-based hardware",
        "Quality inspection and photo checks before shipment",
        "Shipment consolidation when several suppliers are involved in one purchasing project"
      ]} />
      <RelatedLinks title="Related Pages and Buyer Guides" links={[
        { href: "/en/industries/mro-supplies/", label: "Industrial MRO Supplies" },
        { href: "/en/services/mro-sourcing-from-china/", label: "MRO Sourcing from China" },
        { href: "/en/services/supplier-verification/", label: "Supplier Verification" },
        { href: "/en/industries/metal-parts/", label: "Metal Parts Sourcing" },
        { href: "/en/services/industrial-spare-parts-sourcing/", label: "Spare Parts Sourcing" },
        { href: "/en/services/container-consolidation/", label: "Container Consolidation" },
        { href: "/en/blog/how-to-find-industrial-mro-suppliers-in-china/", label: "Find Industrial MRO Suppliers" },
        { href: "/en/blog/mro-sourcing-from-china-buyer-checklist/", label: "MRO Buyer Checklist" },
        { href: "/en/blog/factory-spare-parts-sourcing-from-china/", label: "Factory Spare Parts Guide" },
        { href: "/en/blog/mro-supplier-risk-chinese-trading-company-checklist/", label: "Supplier Risk Checklist" },
        { href: "/en/contact/", label: "Send Sourcing Inquiry" }
      ]} />
    </div>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <h2 className="text-3xl font-black text-navy">{title}</h2>
      <ul className="mt-4 grid gap-3 md:grid-cols-2">
        {items.map((item) => <li key={item} className="rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">{item}</li>)}
      </ul>
    </section>
  );
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

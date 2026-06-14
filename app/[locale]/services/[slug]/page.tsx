import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Container } from "@/components/ui/Container";
import { IndustrialImage } from "@/components/ui/IndustrialImage";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { faqSchema, JsonLd, serviceSchema } from "@/lib/schema";
import { seo } from "@/lib/seo";

export function generateStaticParams() {
  return site.locales.flatMap((locale) => services.map((service) => ({ locale, slug: service.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  const customMeta = serviceMetadata[slug];
  return seo({
    title: customMeta?.title ?? `${service.title} | China Industrial Procurement Support`,
    description: customMeta?.description ?? service.description,
    path: `/${locale}/services/${slug}/`,
    canonicalPath: `/en/services/${slug}/`,
    index: locale === "en"
  });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const faqs = buildServiceFaqs(service.title);
  return (
    <>
      <PageHero badge="Service" title={service.title} description={`${service.description} Keywords: ${service.keywords.join(", ")}.`} breadcrumbs={[{ label: "Home", href: `/${locale}/` }, { label: "Services", href: `/${locale}/services/` }, { label: service.title, href: `/${locale}/services/${service.slug}/` }]} />
      <Container className="py-16">
        {locale !== "en" ? <EnglishVersionNotice locale={locale} /> : null}
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <article className="space-y-10">
            <IndustrialImage src={service.image} alt={`${service.title} from China`} className="min-h-[360px]" />
            <Block title={`What is ${service.title}?`} text={`${service.title} is a practical sourcing service for overseas industrial buyers who need supplier screening, technical clarification, quotation comparison, quality coordination, and export follow-up from China.`} />
            <ListBlock title="Who This Service Is For" items={["Overseas industrial buyers purchasing from China", "Importers comparing several Chinese suppliers", "Factories needing spare parts, MRO items, or OEM parts", "Procurement teams that need risk reduction before payment"]} />
            <ListBlock title="Common Buyer Problems" items={service.problems} />
            <ListBlock title="How MAVORIX INDUSTRIAL Helps" items={service.support} />
            <ListBlock title="What We Can Support" items={["Requirement review and supplier matching", "Technical communication and document exchange", "Quotation and sample coordination", "Quality and packing follow-up", "Export coordination and long-term sourcing support"]} />
            {locale === "en" && service.slug === "china-industrial-sourcing" ? <IndustrialSourcingExtra /> : null}
            {locale === "en" && service.slug === "supplier-verification" ? <SupplierVerificationExtra /> : null}
            <Block title="Quality and Risk Control" text="We focus on reducing uncertainty before and during the order. This includes supplier verification, clear specifications, inspection coordination, photo or video checks, packing communication, and practical issue follow-up." />
            <div>
              <h2 className="text-3xl font-black text-navy">Process</h2>
              <div className="mt-6"><ProcessSteps /></div>
            </div>
          </article>
          <aside className="h-fit rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <IndustrialImage src={service.image} alt={`${service.title} procurement support visual`} className="mb-6 h-44" />
            <h2 className="font-black text-navy">Related Links</h2>
            <div className="mt-4 space-y-3 text-sm font-semibold text-slate-600">
              <Link href={`/${locale}/industries/`} className="block hover:text-signal">Industries We Support</Link>
              <Link href={`/${locale}/contact/`} className="block hover:text-signal">Send Inquiry</Link>
              {services.filter((item) => item.slug !== service.slug).slice(0, 4).map((item) => (
                <Link key={item.slug} href={`/${locale}/services/${item.slug}/`} className="block hover:text-signal">{item.title}</Link>
              ))}
            </div>
          </aside>
        </div>
      </Container>
      <FAQSection faqs={faqs} />
      <CTASection />
      <JsonLd data={[faqSchema(faqs), serviceSchema(service.title, service.description, `${site.url}/${locale}/services/${service.slug}/`)]} />
    </>
  );
}

const serviceMetadata: Record<string, { title: string; description: string }> = {
  "china-industrial-sourcing": {
    title: "China Industrial Sourcing Service for Overseas Buyers | MAVORIX",
    description: "China industrial sourcing support for machinery, spare parts, MRO supplies, OEM products, plastic factory equipment, quotation comparison, supplier search, inspection coordination, export packing, and shipment consolidation."
  },
  "supplier-verification": {
    title: "Supplier Verification in China Before Deposit | MAVORIX",
    description: "China supplier verification support for overseas industrial buyers, including business identity checks, quotation review, red flags, capability signals, documents, evidence, and pre-deposit risk review."
  }
};

function IndustrialSourcingExtra() {
  return (
    <>
      <ListBlock title="Practical Sourcing Examples" items={[
        "A plastic factory needs auxiliary equipment, replacement heaters, mold components, and factory consumables from different suppliers.",
        "A machinery user has photos and nameplates but no exact part number and needs alternative suppliers for replacement parts.",
        "A distributor wants to compare several Chinese quotations for pumps, valves, bearings, reducers, motors, and electrical parts.",
        "A project buyer needs machines, spare parts, packing materials, and MRO supplies consolidated before export.",
        "An OEM buyer has drawings and needs supplier comparison, sample coordination, tolerance clarification, and production follow-up."
      ]} />
      <ListBlock title="Buyer Checklist Before Supplier Search" items={[
        "Product name, application, quantity, and expected repeat demand",
        "Photos, drawings, samples, model numbers, nameplates, or part numbers",
        "Material, size, voltage, standard, tolerance, color, packaging, and destination country",
        "Target price, current supplier quotation, or budget range if available",
        "Required documents, inspection needs, delivery time, and export packing expectations",
        "Whether the order should be shipped alone or consolidated with other suppliers"
      ]} />
      <ListBlock title="What MAVORIX Can Do" items={[
        "Clarify requirements and identify missing technical information",
        "Search and screen suppliers based on product category and order requirements",
        "Compare quotations, lead times, packing notes, and supplier communication quality",
        "Coordinate samples, drawings, inspection requirements, and supplier-side export follow-up",
        "Support consolidation planning when several Chinese suppliers are involved"
      ]} />
      <ListBlock title="What MAVORIX Cannot Do" items={[
        "Guarantee the lowest price in China or force suppliers to accept unrealistic pricing",
        "Replace formal engineering approval when safety-critical specifications require certified design review",
        "Guarantee customs clearance, import permits, or local compliance in the buyer's country",
        "Confirm product performance without samples, inspection, or buyer-approved technical standards",
        "Claim to manufacture every product category listed on the website"
      ]} />
      <RelatedLinks title="Related Sourcing Services" links={[
        { href: "/en/services/supplier-verification/", label: "Supplier Verification" },
        { href: "/en/services/quality-inspection/", label: "Quality Inspection" },
        { href: "/en/services/container-consolidation/", label: "Container Consolidation" },
        { href: "/en/services/industrial-spare-parts-sourcing/", label: "Spare Parts Sourcing" },
        { href: "/en/contact/", label: "Contact MAVORIX" }
      ]} />
    </>
  );
}

function SupplierVerificationExtra() {
  return (
    <>
      <ListBlock title="Supplier Verification Checklist" items={[
        "Company name, Chinese business name, registration details, and matching contact information",
        "Whether the supplier appears to be a manufacturer, trading company, distributor, or mixed operation",
        "Product scope, factory photos or videos, equipment evidence, case photos, and technical response quality",
        "Quotation clarity, payment terms, lead time, packing details, and export experience",
        "Consistency between website, marketplace profile, documents, bank information, and sales communication",
        "Whether the supplier can answer practical questions about drawings, samples, tolerances, inspection, and after-sales"
      ]} />
      <ListBlock title="What to Check Before Paying a Deposit" items={[
        "Confirm the legal company name and payment beneficiary match the supplier story",
        "Ask for a proforma invoice with product details, quantity, unit price, payment terms, delivery time, and packing notes",
        "Confirm technical specifications, drawings, photos, model numbers, and any agreed tolerances in writing",
        "Ask how quality will be checked before shipment and what evidence will be provided",
        "Clarify export packing, shipping terms, document responsibility, and after-sales handling",
        "Avoid rushing payment when supplier answers are vague, inconsistent, or unwilling to provide basic evidence"
      ]} />
      <ListBlock title="Common Red Flags" items={[
        "The supplier changes company names, bank accounts, or contact identities without a clear explanation",
        "Quotation is much lower than comparable suppliers but technical details are incomplete",
        "Supplier avoids direct answers about production capability, inspection, packing, or lead time",
        "Documents, website claims, marketplace profile, and communication details do not match",
        "Pressure to pay quickly before basic verification, sample confirmation, or written specifications",
        "No clear after-sales contact or refusal to discuss replacement parts, warranty limits, or issue handling"
      ]} />
      <ListBlock title="Documents and Evidence Buyers Should Ask For" items={[
        "Business license or company registration information",
        "Detailed quotation or proforma invoice",
        "Product photos, factory photos, production videos, or inspection photos where relevant",
        "Specification sheet, drawing confirmation, packing list draft, and export document examples",
        "Test report, certificate, or compliance document only when relevant and verifiable",
        "References to previous product experience without asking for private customer names or fake testimonials"
      ]} />
      <RelatedLinks title="Related Verification Links" links={[
        { href: "/en/services/china-industrial-sourcing/", label: "China Industrial Sourcing" },
        { href: "/en/services/quality-inspection/", label: "Quality Inspection" },
        { href: "/en/blog/how-to-verify-chinese-industrial-supplier/", label: "How to Verify a Chinese Supplier" },
        { href: "/en/blog/verify-chinese-industrial-suppliers-before-order/", label: "Verify Suppliers Before Order" },
        { href: "/en/contact/", label: "Contact MAVORIX" }
      ]} />
    </>
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

function EnglishVersionNotice({ locale }: { locale: string }) {
  return <div className="mb-8 rounded-lg border border-orange-200 bg-orange-50 p-4 text-sm font-semibold text-orange-900">English version: this detailed service page has not been fully translated into {locale.toUpperCase()} yet.</div>;
}

function Block({ title, text }: { title: string; text: string }) {
  return <section><h2 className="text-3xl font-black text-navy">{title}</h2><p className="mt-4 leading-8 text-slate-600">{text}</p></section>;
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return <section><h2 className="text-3xl font-black text-navy">{title}</h2><ul className="mt-4 grid gap-3 md:grid-cols-2">{items.map((item) => <li key={item} className="rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">{item}</li>)}</ul></section>;
}

function buildServiceFaqs(title: string) {
  return [
    { q: `What is ${title}?`, a: `${title} helps overseas buyers coordinate China supplier sourcing, verification, technical communication, quality follow-up, and export execution.` },
    { q: "What information should buyers prepare?", a: "Prepare product name, photos, drawings, specifications, quantity, destination country, target use, and any supplier links or samples." },
    { q: "Can MAVORIX verify suppliers?", a: "Yes. We can help screen supplier identity, capability signals, communication quality, quotation clarity, and order execution risk." },
    { q: "Do you guarantee the lowest price?", a: "No. We focus on reliable sourcing, risk reduction, quality coordination, and practical execution rather than lowest-price promises." },
    { q: "How do I start?", a: "Send your requirement through the contact form, email, or WhatsApp. We will review the sourcing path and next steps." }
  ];
}

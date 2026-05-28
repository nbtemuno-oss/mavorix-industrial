import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { countries } from "@/data/countries";
import { industries } from "@/data/industries";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { faqSchema, JsonLd, serviceSchema } from "@/lib/schema";
import { seo } from "@/lib/seo";

export function generateStaticParams() {
  return countries.map((country) => ({ locale: "en", slug: country.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const country = countries.find((item) => item.slug === slug);
  if (!country) return {};
  return seo({
    title: `China Industrial Sourcing for ${country.title} Buyers`,
    description: `MAVORIX INDUSTRIAL supports buyers from ${country.title} with China sourcing coordination, supplier verification, quality control, and export support for industrial products.`,
    path: `/${locale}/countries/${slug}/`
  });
}

export default async function CountryDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const country = countries.find((item) => item.slug === slug);
  if (!country) notFound();
  const faqs = buildCountryFaqs(country.title);
  return (
    <>
      <PageHero badge="Country" title={`China Industrial Sourcing for ${country.title} Buyers`} description={`We support buyers from ${country.title} with China sourcing coordination, supplier communication, quality control, and export support.`} breadcrumbs={[{ label: "Home", href: `/${locale}/` }, { label: "Countries", href: `/${locale}/countries/` }, { label: country.title, href: `/${locale}/countries/${country.slug}/` }]} />
      <Container className="grid gap-8 py-16 lg:grid-cols-[1fr_320px]">
        <article className="space-y-10">
          <Block title={`China Industrial Sourcing Introduction for ${country.title}`} text={`Industrial buyers in ${country.title} often need reliable China sourcing support for machinery, spare parts, OEM products, and MRO supplies. MAVORIX INDUSTRIAL helps coordinate supplier search, technical communication, quality checks, and export-side execution from China.`} />
          <ListBlock title="Common Sourcing Needs from China" items={country.needs} />
          <ListBlock title="Product Categories We Can Support" items={["Industrial machinery and equipment", "OEM industrial parts", "MRO supplies", "Factory spare parts", "Agricultural equipment parts", "Packaging and metal parts"]} />
          <ListBlock title="Common Risks When Sourcing from China" items={["Unverified supplier identity", "Unclear product specifications", "Quality inconsistency", "Weak communication after payment", "Packing and shipment coordination problems"]} />
          <Block title={`How MAVORIX INDUSTRIAL Helps Buyers from ${country.title}`} text="We review requirements, screen suppliers, compare quotations, clarify technical details, coordinate samples or trial orders, arrange quality checks, and follow up export communication from China." />
          <Block title="Supplier Verification, Quality Control, and Export Coordination" text="Our support helps buyers reduce procurement uncertainty without making unrealistic promises about customs, local regulations, guaranteed delivery, or lowest price." />
          <Block title="Documents and Communication Support" text="We help coordinate supplier-side documents, packing information, product photos, specifications, and shipment communication. Buyers should confirm import requirements with their local customs or logistics partners." />
        </article>
        <aside className="h-fit rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="font-black text-navy">Related Pages</h2>
          <div className="mt-4 space-y-3 text-sm font-semibold text-slate-600">
            {industries.slice(0, 4).map((item) => <Link key={item.slug} href={`/${locale}/industries/${item.slug}/`} className="block hover:text-signal">{item.title}</Link>)}
            {services.slice(0, 4).map((item) => <Link key={item.slug} href={`/${locale}/services/${item.slug}/`} className="block hover:text-signal">{item.title}</Link>)}
            <Link href={`/${locale}/contact/`} className="block hover:text-signal">Send Inquiry</Link>
          </div>
        </aside>
      </Container>
      <FAQSection faqs={faqs} />
      <CTASection />
      <JsonLd data={[faqSchema(faqs), serviceSchema(`China Industrial Sourcing for ${country.title}`, `China sourcing support for buyers from ${country.title}.`, `${site.url}/${locale}/countries/${country.slug}/`)]} />
    </>
  );
}

function Block({ title, text }: { title: string; text: string }) {
  return <section><h2 className="text-3xl font-black text-navy">{title}</h2><p className="mt-4 leading-8 text-slate-600">{text}</p></section>;
}
function ListBlock({ title, items }: { title: string; items: string[] }) {
  return <section><h2 className="text-3xl font-black text-navy">{title}</h2><ul className="mt-4 grid gap-3 md:grid-cols-2">{items.map((item) => <li key={item} className="rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">{item}</li>)}</ul></section>;
}
function buildCountryFaqs(country: string) {
  return [
    { q: `Do you support buyers from ${country}?`, a: `Yes. We support buyers from ${country} with China sourcing coordination, supplier communication, quality control, and export-side support.` },
    { q: "Do you have an office in this country?", a: "We do not claim overseas offices unless specifically stated. Our role is China-side sourcing and supplier coordination." },
    { q: "Can you verify Chinese suppliers?", a: "Yes. We help review supplier identity, communication, capability signals, and quotation clarity." },
    { q: "Can you guarantee customs clearance?", a: "No. Buyers should confirm import rules with local customs or logistics partners. We support China-side export communication." },
    { q: "How can I start an inquiry?", a: "Send product details, quantity, destination country, photos, drawings, or supplier links through the contact page or WhatsApp." }
  ];
}

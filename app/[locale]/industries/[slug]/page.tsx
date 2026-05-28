import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { IndustrialImage } from "@/components/ui/IndustrialImage";
import { industries } from "@/data/industries";
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
  return seo({ title: `${industry.title} Sourcing from China`, description: industry.description, path: `/${locale}/industries/${slug}/` });
}

export default async function IndustryDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const industry = industries.find((item) => item.slug === slug);
  if (!industry) notFound();
  const faqs = buildIndustryFaqs(industry.title);
  return (
    <>
      <PageHero badge="Industry" title={`${industry.title} Sourcing from China`} description={industry.description} breadcrumbs={[{ label: "Home", href: `/${locale}/` }, { label: "Industries", href: `/${locale}/industries/` }, { label: industry.title, href: `/${locale}/industries/${industry.slug}/` }]} />
      <Container className="grid gap-8 py-16 lg:grid-cols-[1fr_320px]">
        <article className="space-y-10">
          {locale !== "en" ? <EnglishVersionNotice locale={locale} /> : null}
          <IndustrialImage src={industry.image} alt={`${industry.title} sourcing from China`} className="min-h-[360px]" />
          <Block title="Industry-Focused Introduction" text={`MAVORIX INDUSTRIAL helps overseas buyers source, verify, and coordinate Chinese suppliers for ${industry.title.toLowerCase()} products. We do not claim to manufacture every item; our role is procurement support and supplier coordination.`} />
          <ListBlock title="Common Sourcing Needs" items={industry.products} />
          <ListBlock title="Common Buyer Problems" items={["Unclear supplier capability", "Difficulty confirming technical specifications", "Quality variation before shipment", "Fragmented communication across multiple factories", "Export packing and document coordination"]} />
          <Block title="How MAVORIX INDUSTRIAL Supports Sourcing" text="We review requirements, search and compare suppliers, coordinate technical questions, follow samples or trial orders, arrange quality checks, and support supplier-side export coordination." />
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

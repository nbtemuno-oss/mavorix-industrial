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
  return seo({ title: `${service.title} | China Industrial Procurement Support`, description: service.description, path: `/${locale}/services/${slug}/` });
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
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <article className="space-y-10">
            <IndustrialImage src={service.image} alt={`${service.title} from China`} className="min-h-[360px]" />
            <Block title={`What is ${service.title}?`} text={`${service.title} is a practical sourcing service for overseas industrial buyers who need supplier screening, technical clarification, quotation comparison, quality coordination, and export follow-up from China.`} />
            <ListBlock title="Who This Service Is For" items={["Overseas industrial buyers purchasing from China", "Importers comparing several Chinese suppliers", "Factories needing spare parts, MRO items, or OEM parts", "Procurement teams that need risk reduction before payment"]} />
            <ListBlock title="Common Buyer Problems" items={service.problems} />
            <ListBlock title="How MAVORIX INDUSTRIAL Helps" items={service.support} />
            <ListBlock title="What We Can Support" items={["Requirement review and supplier matching", "Technical communication and document exchange", "Quotation and sample coordination", "Quality and packing follow-up", "Export coordination and long-term sourcing support"]} />
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

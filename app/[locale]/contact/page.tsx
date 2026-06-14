import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { FAQSection } from "@/components/sections/FAQSection";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { IndustrialImage } from "@/components/ui/IndustrialImage";
import { pageImages } from "@/data/page-images";
import { site } from "@/data/site";
import { t } from "@/data/translations";
import { faqSchema, JsonLd } from "@/lib/schema";
import { seo } from "@/lib/seo";

const contactDirectTitles: Record<string, string> = {
  en: "Contact us directly",
  es: "Contacta con nosotros directamente",
  fr: "Contactez-nous directement",
  de: "Kontaktieren Sie uns direkt",
  pt: "Fale conosco diretamente",
  ru: "Свяжитесь с нами напрямую",
  ar: "تواصل معنا مباشرة"
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const copy = t(locale).contact;
  return seo({
    title: copy.metaTitle,
    description: copy.metaDescription,
    path: `/${locale}/contact/`,
    locale,
    image: pageImages.contact
  });
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const copy = t(locale).contact;
  const contactDirectTitle = copy.contactDirectTitle ?? contactDirectTitles[locale] ?? contactDirectTitles.en;
  return (
    <>
      <PageHero badge={copy.badge} title={copy.title} description={copy.description} breadcrumbs={[{ label: t(locale).nav.home, href: `/${locale}/` }, { label: t(locale).nav.contact, href: `/${locale}/contact/` }]} cta={false} />
      {locale === "en" ? <ContactIntro /> : null}
      <Container className="grid gap-8 py-16 lg:grid-cols-[1.1fr_.9fr]">
        <form action={`mailto:${site.email}`} method="post" encType="text/plain" className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-4 md:grid-cols-2">
            {copy.fields.map((label) => (
              <label key={label} className="text-sm font-bold text-slate-700">{label}<input name={label.toLowerCase().replaceAll(" ", "-")} className="mt-2 h-12 w-full rounded-md border border-slate-300 px-3 outline-none focus:border-signal" /></label>
            ))}
            <label className="text-sm font-bold text-slate-700 md:col-span-2">{copy.requirement}<input name="requirement" className="mt-2 h-12 w-full rounded-md border border-slate-300 px-3 outline-none focus:border-signal" /></label>
            <label className="text-sm font-bold text-slate-700 md:col-span-2">{copy.message}<textarea name="message" rows={6} className="mt-2 w-full rounded-md border border-slate-300 px-3 py-3 outline-none focus:border-signal" /></label>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <button type="submit" className="min-h-11 rounded-md bg-signal px-5 py-3 text-sm font-black text-white hover:bg-orange-600">{copy.submit}</button>
            <Button href={site.whatsappUrl} variant="dark"><MessageCircle className="mr-2" size={17} /> {copy.whatsapp}</Button>
          </div>
        </form>
        <aside className="overflow-hidden rounded-lg bg-navy text-white">
          <IndustrialImage src={pageImages.contact.src} alt={pageImages.contact.alt} className="h-72 rounded-none" sizes="(min-width: 1024px) 40vw, 100vw" />
          <div className="p-7">
            <h2 className="text-2xl font-black">{copy.checklistTitle}</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
              {copy.checklist.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <div className="mt-7 rounded-lg border border-orange-400/40 bg-slate-800/95 p-5 text-sm shadow-xl shadow-black/20 transition hover:border-signal hover:bg-slate-800">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-200">{contactDirectTitle}</p>
              <div className="mt-4 space-y-4">
                <div>
                  <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-300">
                    <Mail size={15} className="text-signal" /> Email
                  </span>
                  <a href={`mailto:${site.email}`} dir="ltr" className="mt-2 block break-all text-lg font-black leading-snug text-signal hover:text-orange-200 hover:underline">
                    {site.email}
                  </a>
                </div>
                <div>
                  <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-300">
                    <MessageCircle size={15} className="text-emerald-400" /> WhatsApp
                  </span>
                  <a href={site.whatsappUrl} dir="ltr" className="mt-2 block text-base font-bold text-white hover:text-emerald-200 hover:underline">
                    {site.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </Container>
      {locale === "en" ? <RelatedContactLinks /> : null}
      <FAQSection faqs={copy.faqs} />
      <JsonLd data={faqSchema(copy.faqs)} />
    </>
  );
}

function ContactIntro() {
  return (
    <section className="bg-white py-16">
      <Container>
        <div className="max-w-5xl space-y-5 text-base leading-8 text-slate-600">
          <p>
            Contact MAVORIX INDUSTRIAL when you need practical China-side support before choosing a supplier, paying a deposit, confirming samples, arranging inspection, or consolidating shipment from several factories. Buyers usually contact us when a quotation is unclear, a supplier needs to be checked, a spare part is hard to identify, or a mixed industrial order needs better coordination.
          </p>
          <p>
            We can review supplier verification requests, quotation comparison, product sourcing, spare parts sourcing, MRO sourcing, quality inspection coordination, export packing follow-up, and shipment consolidation. The more product information you provide at the beginning, the faster we can understand whether the request fits our sourcing support.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {contactUseCases.map((item) => <div key={item} className="rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm font-semibold leading-7 text-slate-700">{item}</div>)}
        </div>
      </Container>
    </section>
  );
}

function RelatedContactLinks() {
  return (
    <section className="bg-slate-50 py-16">
      <Container>
        <h2 className="text-3xl font-black text-navy">Key Services Before You Send an Inquiry</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {relatedLinks.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm hover:shadow-industrial">
              <h3 className="font-black text-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

const contactUseCases = [
  "Supplier verification before paying a deposit",
  "Quotation comparison for machinery, parts, or OEM products",
  "Product sourcing when you have drawings, photos, samples, or target specifications",
  "Spare parts sourcing for machinery, production lines, and factory maintenance",
  "MRO sourcing for mixed maintenance, repair, operation, and consumable items",
  "Shipment consolidation when several Chinese suppliers are involved"
];

const relatedLinks = [
  { title: "China Industrial Sourcing", href: "/en/services/china-industrial-sourcing/", text: "Start here when you need supplier search, comparison, and sourcing coordination." },
  { title: "Supplier Verification", href: "/en/services/supplier-verification/", text: "Use this when you already found a supplier and need risk checks before payment." },
  { title: "Quality Inspection", href: "/en/services/quality-inspection/", text: "Plan inspection requirements, photos, reports, and issue follow-up before shipment." },
  { title: "Container Consolidation", href: "/en/services/container-consolidation/", text: "Coordinate mixed supplier shipments, packing, loading, and consolidation details." }
];

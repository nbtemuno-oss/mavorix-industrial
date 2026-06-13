import type { Metadata } from "next";
import { Mail, MessageCircle } from "lucide-react";
import { FAQSection } from "@/components/sections/FAQSection";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { IndustrialImage } from "@/components/ui/IndustrialImage";
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
    locale
  });
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const copy = t(locale).contact;
  const contactDirectTitle = copy.contactDirectTitle ?? contactDirectTitles[locale] ?? contactDirectTitles.en;
  return (
    <>
      <PageHero badge={copy.badge} title={copy.title} description={copy.description} breadcrumbs={[{ label: t(locale).nav.home, href: `/${locale}/` }, { label: t(locale).nav.contact, href: `/${locale}/contact/` }]} cta={false} />
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
          <IndustrialImage src="/images/contact-global-sourcing.webp" alt="Contact MAVORIX INDUSTRIAL for China sourcing support" className="h-72 rounded-none" />
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
      <FAQSection faqs={copy.faqs} />
      <JsonLd data={faqSchema(copy.faqs)} />
    </>
  );
}

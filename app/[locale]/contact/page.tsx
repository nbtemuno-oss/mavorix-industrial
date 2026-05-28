import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { FAQSection } from "@/components/sections/FAQSection";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { IndustrialImage } from "@/components/ui/IndustrialImage";
import { site } from "@/data/site";
import { t } from "@/data/translations";
import { faqSchema, JsonLd } from "@/lib/schema";
import { seo } from "@/lib/seo";

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
  return (
    <>
      <PageHero badge={copy.badge} title={copy.title} description={copy.description} breadcrumbs={[{ label: t(locale).nav.home, href: `/${locale}/` }, { label: t(locale).nav.contact, href: `/${locale}/contact/` }]} cta={false} />
      <Container className="grid gap-8 py-16 lg:grid-cols-[1.1fr_.9fr]">
        <form action={`mailto:${site.email}`} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
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
            <div className="mt-7 rounded-md bg-white/10 p-4 text-sm">Email: {site.email}<br />WhatsApp: {site.phone}</div>
          </div>
        </aside>
      </Container>
      <FAQSection faqs={copy.faqs} />
      <JsonLd data={faqSchema(copy.faqs)} />
    </>
  );
}

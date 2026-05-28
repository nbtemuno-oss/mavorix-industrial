import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { FAQSection } from "@/components/sections/FAQSection";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { IndustrialImage } from "@/components/ui/IndustrialImage";
import { site } from "@/data/site";
import { faqSchema, JsonLd } from "@/lib/schema";
import { seo } from "@/lib/seo";

const faqs = [
  { q: "What information should I send?", a: "Send product name, photos, drawings, quantity, destination country, target use, quality requirements, and any supplier links if available." },
  { q: "Can I contact you by WhatsApp?", a: "Yes. The WhatsApp link is configured in data/site.ts and can be replaced with the final phone number." },
  { q: "Do you provide instant quotations?", a: "Industrial quotations usually require supplier screening and technical clarification, so we avoid unreliable instant pricing." },
  { q: "Can you support OEM products?", a: "Yes. Please provide drawings, samples, specifications, materials, tolerances, and expected quantity." },
  { q: "Do you handle customs in my country?", a: "We support supplier-side export coordination from China. Buyers should confirm import rules and customs requirements in their destination market." }
];

export const metadata: Metadata = seo({
  title: "Contact MAVORIX INDUSTRIAL | China Industrial Sourcing Inquiry",
  description: "Contact MAVORIX INDUSTRIAL for industrial sourcing, OEM manufacturing support, MRO supplies, supplier verification, quality inspection, and export support from China.",
  path: "/en/contact/"
});

export default function ContactPage() {
  return (
    <>
      <PageHero badge="Contact" title="Send Your China Industrial Sourcing Inquiry" description="Share your product requirement, quantity, target market, drawings, photos, or supplier links. We will review the sourcing path and next steps." breadcrumbs={[{ label: "Home", href: "/en/" }, { label: "Contact", href: "/en/contact/" }]} cta={false} />
      <Container className="grid gap-8 py-16 lg:grid-cols-[1.1fr_.9fr]">
        <form action={`mailto:${site.email}`} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-4 md:grid-cols-2">
            {["Name", "Company", "Country", "Email", "WhatsApp", "Quantity", "Target market"].map((label) => (
              <label key={label} className="text-sm font-bold text-slate-700">{label}<input name={label.toLowerCase().replaceAll(" ", "-")} className="mt-2 h-12 w-full rounded-md border border-slate-300 px-3 outline-none focus:border-signal" /></label>
            ))}
            <label className="text-sm font-bold text-slate-700 md:col-span-2">Product or sourcing requirement<input name="requirement" className="mt-2 h-12 w-full rounded-md border border-slate-300 px-3 outline-none focus:border-signal" /></label>
            <label className="text-sm font-bold text-slate-700 md:col-span-2">Message<textarea name="message" rows={6} className="mt-2 w-full rounded-md border border-slate-300 px-3 py-3 outline-none focus:border-signal" /></label>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <button type="submit" className="min-h-11 rounded-md bg-signal px-5 py-3 text-sm font-black text-white hover:bg-orange-600">Send Inquiry</button>
            <Button href={site.whatsappUrl} variant="dark"><MessageCircle className="mr-2" size={17} /> Contact on WhatsApp</Button>
          </div>
        </form>
        <aside className="overflow-hidden rounded-lg bg-navy text-white">
          <IndustrialImage src="/images/contact-global-sourcing.webp" alt="Contact MAVORIX INDUSTRIAL for China sourcing support" className="h-72 rounded-none" />
          <div className="p-7">
            <h2 className="text-2xl font-black">Inquiry checklist</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
              <li>Product name, photos, drawings, or sample details</li>
              <li>Quantity and expected repeat demand</li>
              <li>Material, size, technical standard, or application</li>
              <li>Destination country and target market</li>
              <li>Preferred delivery time and packing needs</li>
            </ul>
            <div className="mt-7 rounded-md bg-white/10 p-4 text-sm">Email: {site.email}</div>
          </div>
        </aside>
      </Container>
      <FAQSection faqs={faqs} />
      <JsonLd data={faqSchema(faqs)} />
    </>
  );
}

import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Container } from "@/components/ui/Container";
import { faqSchema, JsonLd, serviceSchema } from "@/lib/schema";
import { seo } from "@/lib/seo";

const faqs = [
  { q: "What is industrial sourcing?", a: "Industrial sourcing is the process of finding, verifying, comparing, and coordinating suppliers for machinery, parts, MRO items, OEM products, and industrial equipment." },
  { q: "Why use a China sourcing partner?", a: "A sourcing partner helps reduce risk by improving supplier screening, technical communication, quotation comparison, quality checks, and export coordination." },
  { q: "Can you source custom industrial parts?", a: "Yes. We can support OEM and custom parts sourcing when buyers provide drawings, samples, photos, specifications, or target use information." },
  { q: "Do you inspect products?", a: "We can coordinate quality checks and inspection requirements before shipment based on buyer specifications." },
  { q: "What should buyers prepare?", a: "Product name, photos, drawings, quantity, target quality level, destination country, preferred terms, and any supplier links or samples." }
];

export const metadata: Metadata = seo({
  title: "China Industrial Sourcing Services | MAVORIX INDUSTRIAL",
  description: "MAVORIX INDUSTRIAL provides China industrial sourcing services for overseas buyers, including machinery, OEM products, MRO supplies, spare parts, supplier verification, quality control, and export coordination.",
  path: "/en/industrial-sourcing/"
});

export default function IndustrialSourcingPage() {
  return (
    <>
      <PageHero badge="Industrial sourcing" title="China Industrial Sourcing Services" description="Structured sourcing support for overseas buyers purchasing machinery, OEM products, MRO supplies, spare parts, and industrial equipment from China." breadcrumbs={[{ label: "Home", href: "/en/" }, { label: "Industrial Sourcing", href: "/en/industrial-sourcing/" }]} />
      <Container className="py-16">
        <FeatureGrid items={[
          { title: "What Is Industrial Sourcing?", text: "It is supplier identification, verification, technical clarification, quotation comparison, quality coordination, and export follow-up for industrial procurement." },
          { title: "Why Buyers Need Support", text: "China has many suppliers, but industrial buyers need reliable screening, specification control, and practical execution support." },
          { title: "What We Can Source", text: "Machinery, OEM parts, MRO supplies, spare parts, agricultural equipment parts, packaging products, metal parts, and factory supplies." },
          { title: "Supplier Verification", text: "We help check supplier identity, capability signals, communication quality, quotation clarity, and execution risk." },
          { title: "Quality Control", text: "We coordinate inspection requirements, specification checks, photo reports, packing checks, and issue follow-up before shipment." },
          { title: "Export Support", text: "We support supplier-side documentation communication, shipping coordination, packing follow-up, and consolidation planning." }
        ]} />
        <div className="mt-14">
          <h2 className="text-3xl font-black text-navy">Sourcing Process</h2>
          <div className="mt-8"><ProcessSteps /></div>
        </div>
      </Container>
      <FAQSection faqs={faqs} />
      <CTASection />
      <JsonLd data={[faqSchema(faqs), serviceSchema("China Industrial Sourcing Services", "China industrial sourcing services for overseas buyers.", "https://mavorixindustrial.com/en/industrial-sourcing/")]} />
    </>
  );
}

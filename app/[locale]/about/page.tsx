import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { seo } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return seo({
    title: "About MAVORIX INDUSTRIAL | China Industrial Sourcing and Procurement Support",
    description: "Learn about MAVORIX INDUSTRIAL, a China-based industrial sourcing partner helping overseas buyers with machinery, OEM products, MRO supplies, supplier verification, and export support.",
    path: `/${locale}/about/`,
    canonicalPath: "/en/about/",
    index: locale === "en"
  });
}

export default function AboutPage() {
  const sections = [
    ["Who We Are", "MAVORIX INDUSTRIAL is a China-based industrial sourcing partner for overseas B2B buyers. We support sourcing, supplier communication, verification, quality coordination, and export execution for industrial products."],
    ["Our Industrial Background", "MAVORIX INDUSTRIAL is built on practical experience in machinery, industrial equipment, molds, spare parts, and export supply chain coordination from China."],
    ["Why We Focus on Industrial Sourcing", "Industrial purchasing is technical, detail-heavy, and risk-sensitive. Buyers need more than product links; they need reliable communication, clear specifications, and practical order follow-up."],
    ["What Makes Us Different", "We do not present ourselves as a giant group or a one-click marketplace. Our role is to reduce procurement uncertainty and coordinate the details that often create sourcing risk."],
    ["Our Role in China Procurement", "We help overseas buyers review requirements, screen suppliers, compare quotations, coordinate samples, follow production status, arrange inspection, and communicate export steps."],
    ["Our Sourcing Principles", "We focus on realistic communication, supplier verification, technical clarity, quality coordination, and long-term procurement support instead of exaggerated promises or lowest-price claims."]
  ];
  return (
    <>
      <PageHero badge="About" title="About MAVORIX INDUSTRIAL" description="China industrial sourcing and procurement support for overseas buyers who need reliable supplier coordination from China." breadcrumbs={[{ label: "Home", href: "/en/" }, { label: "About", href: "/en/about/" }]} />
      <Container className="grid gap-6 py-16 md:grid-cols-2">
        {sections.map(([title, text]) => (
          <div key={title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black text-navy">{title}</h2>
            <p className="mt-3 leading-8 text-slate-600">{text}</p>
          </div>
        ))}
      </Container>
      <CTASection />
    </>
  );
}

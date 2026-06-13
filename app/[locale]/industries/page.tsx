import type { Metadata } from "next";
import { IndustryCard } from "@/components/cards/IndustryCard";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { industries } from "@/data/industries";
import { seo } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return seo({
    title: "Industries We Support | Industrial Sourcing from China",
    description: "MAVORIX INDUSTRIAL supports overseas buyers in sourcing products for plastic industry, agricultural equipment, industrial machinery, packaging, metal parts, MRO supplies, and factory spare parts from China.",
    path: `/${locale}/industries/`,
    canonicalPath: "/en/industries/",
    index: locale === "en"
  });
}

export default function IndustriesPage() {
  return (
    <>
      <PageHero badge="Industries" title="Industries We Support" description="We help buyers source, verify, and coordinate suppliers for industrial products from China." breadcrumbs={[{ label: "Home", href: "/en/" }, { label: "Industries", href: "/en/industries/" }]} />
      <Container className="grid gap-5 py-16 md:grid-cols-2 lg:grid-cols-4">{industries.map((industry) => <IndustryCard key={industry.slug} industry={industry} />)}</Container>
      <CTASection />
    </>
  );
}

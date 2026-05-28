import type { Metadata } from "next";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { services } from "@/data/services";
import { seo } from "@/lib/seo";

export const metadata: Metadata = seo({
  title: "Industrial Sourcing Services from China | MAVORIX INDUSTRIAL",
  description: "Explore MAVORIX INDUSTRIAL services including China industrial sourcing, OEM manufacturing support, MRO sourcing, supplier verification, quality inspection, export support, and container consolidation.",
  path: "/en/services/"
});

export default function ServicesPage() {
  return (
    <>
      <PageHero badge="Services" title="Industrial Sourcing Services from China" description="Services designed to reduce sourcing risk and improve execution for overseas industrial buyers." breadcrumbs={[{ label: "Home", href: "/en/" }, { label: "Services", href: "/en/services/" }]} />
      <Container className="grid gap-5 py-16 md:grid-cols-2 lg:grid-cols-4">{services.map((service) => <ServiceCard key={service.slug} service={service} />)}</Container>
      <CTASection />
    </>
  );
}

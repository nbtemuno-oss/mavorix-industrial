import type { Metadata } from "next";
import { CountryCard } from "@/components/cards/CountryCard";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { countries } from "@/data/countries";
import { seo } from "@/lib/seo";

export const metadata: Metadata = seo({
  title: "China Industrial Sourcing for Global Buyers | MAVORIX INDUSTRIAL",
  description: "MAVORIX INDUSTRIAL supports industrial buyers from Algeria, Peru, Russia, Saudi Arabia, Mexico, Egypt, UAE, Colombia, Chile, Nigeria, South Africa, Serbia, Romania, Bulgaria, and Morocco with China sourcing and procurement support.",
  path: "/en/countries/"
});

export default function CountriesPage() {
  return (
    <>
      <PageHero badge="Countries" title="China Industrial Sourcing for Global Buyers" description="Country-focused sourcing pages for overseas industrial buyers who need supplier verification, quality coordination, and export support from China." breadcrumbs={[{ label: "Home", href: "/en/" }, { label: "Countries", href: "/en/countries/" }]} />
      <Container className="grid gap-5 py-16 md:grid-cols-2 lg:grid-cols-4">{countries.map((country) => <CountryCard key={country.slug} country={country} />)}</Container>
      <CTASection />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { CountryCard } from "@/components/cards/CountryCard";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { countries } from "@/data/countries";
import { services } from "@/data/services";
import { faqSchema, JsonLd } from "@/lib/schema";
import { seo } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return seo({
    title: "China Industrial Sourcing by Country and Region | MAVORIX",
    description: "China sourcing support for overseas industrial buyers in the Balkan region, Latin America, Middle East, Africa, and Europe, covering machinery, spare parts, MRO, packaging, agricultural equipment, and supplier verification.",
    path: `/${locale}/countries/`,
    canonicalPath: "/en/countries/",
    index: locale === "en"
  });
}

export default function CountriesPage() {
  return (
    <>
      <PageHero badge="Countries" title="China Industrial Sourcing for Global Buyers" description="Country-focused sourcing pages for overseas industrial buyers who need supplier verification, quality coordination, and export support from China." breadcrumbs={[{ label: "Home", href: "/en/" }, { label: "Countries", href: "/en/countries/" }]} />
      <section className="bg-white py-16">
        <Container>
          <div className="max-w-5xl space-y-5 text-base leading-8 text-slate-600">
            <p>
              Overseas buyers often search for China sourcing support through their own country or region because procurement conditions are not identical from market to market. A buyer in the Balkan region may need mixed MRO and spare parts consolidation for factories with European technical standards. A Latin American importer may focus on machinery parts, agricultural equipment, packaging supplies, and reliable export communication across long shipping routes. Buyers in the Middle East may prioritize industrial equipment, electrical and mechanical parts, documentation, and packing clarity. African buyers may need practical supplier comparison, durable spare parts, and shipment coordination for machinery, factories, and agricultural projects.
            </p>
            <p>
              MAVORIX INDUSTRIAL supports country-specific sourcing requests by reviewing the buyer's product details, destination country, application, quantity, and supplier information if already available. We help search and compare Chinese suppliers, check supplier communication and capability signals, coordinate technical questions, arrange quality inspection requirements, and follow export packing or consolidation when several suppliers are involved.
            </p>
            <p>
              These country pages do not claim local offices or guaranteed customs outcomes. They are built to help buyers from the Balkan region, Latin America, Middle East, Africa, Europe, and other markets understand how China-side sourcing support can be adapted to real purchasing needs such as plastic factories, industrial spare parts, MRO supplies, machinery, packaging, and agricultural equipment.
            </p>
          </div>
        </Container>
      </section>
      <GridSection title="How Sourcing Needs Differ by Market" items={marketNeeds} />
      <section className="bg-white py-16">
        <Container>
          <h2 className="text-3xl font-black text-navy">Country Pages</h2>
          <p className="mt-4 max-w-4xl leading-8 text-slate-600">Use these pages to review sourcing support for specific destination markets and common procurement needs.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{countries.map((country) => <CountryCard key={country.slug} country={country} />)}</div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {countries.map((country) => (
              <Link key={country.slug} href={`/en/countries/${country.slug}/`} className="rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm hover:shadow-industrial">
                <h3 className="font-black text-navy">{country.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{country.region}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{country.needs.join(", ")}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <GridSection title="How MAVORIX Supports Country-Specific Sourcing Requests" items={countrySupport} />
      <section className="bg-slate-50 py-16">
        <Container>
          <div className="rounded-lg border border-slate-200 bg-white p-8">
            <h2 className="text-3xl font-black text-navy">Send a Country-Specific China Sourcing Request</h2>
            <p className="mt-4 max-w-4xl leading-8 text-slate-600">Tell us your destination country, product category, quantity, technical details, and supplier information if available. We will review the sourcing path and the China-side coordination needed.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/en/contact/">Contact MAVORIX</Button>
              {services.slice(0, 4).map((service) => <Button key={service.slug} href={`/en/services/${service.slug}/`} variant="secondary">{service.shortTitle}</Button>)}
            </div>
          </div>
        </Container>
      </section>
      <FAQSection faqs={countryFaqs} />
      <CTASection />
      <JsonLd data={faqSchema(countryFaqs)} />
    </>
  );
}

const marketNeeds = [
  "Balkan region buyers often need practical spare parts, MRO, packaging machinery parts, agricultural equipment parts, and consolidated mixed orders.",
  "Latin American buyers may focus on machinery parts, OEM industrial components, packaging equipment, factory maintenance supplies, and long-route shipment coordination.",
  "Middle East buyers often ask for industrial equipment, electrical and mechanical parts, export packing clarity, documentation communication, and supplier verification.",
  "African buyers may need durable machinery parts, agricultural equipment support, factory spare parts, MRO supplies, and clear supplier comparison before payment.",
  "European buyers usually require clearer specifications, drawing confirmation, technical communication, and careful quotation comparison before trial orders.",
  "Plastic factories in different regions may need machines, molds, auxiliary equipment, spare parts, factory consumables, and packaging materials from several suppliers."
];

const countrySupport = [
  "Review destination country, product use, quantity, delivery expectations, and whether the order needs one supplier or several suppliers",
  "Search Chinese suppliers that fit the product category, order size, export experience, and technical requirements",
  "Compare quotations, technical details, lead times, packing notes, payment terms, and supplier communication quality",
  "Coordinate supplier verification before deposit when buyers already have a candidate supplier",
  "Follow samples, drawings, inspection requirements, export packing, and consolidation details before shipment",
  "Support after-sales communication with suppliers when documents, replacement parts, or clarification are needed"
];

const countryFaqs = [
  { q: "Does MAVORIX have offices in every listed country?", a: "No. MAVORIX provides China-side sourcing and supplier coordination support. Country pages describe buyer markets we can support, not local office claims." },
  { q: "Can you help buyers from the Balkan region, Latin America, Middle East, Africa, and Europe?", a: "Yes. We can support industrial buyers from these regions with supplier search, verification, quotation comparison, quality coordination, export packing follow-up, and consolidation support from China." },
  { q: "Why does destination country matter for sourcing?", a: "Destination country affects shipping route, packing expectations, documentation needs, product standards, after-sales requirements, and how buyers compare supplier risk." },
  { q: "Can you help with plastic factory equipment or spare parts for my country?", a: "Yes. We can review plastic industry requirements such as machines, molds, auxiliary equipment, spare parts, consumables, and packaging materials." },
  { q: "What should I include in a country-specific inquiry?", a: "Include destination country, product name, photos or drawings, quantity, target use, expected delivery time, target price if available, and supplier links if you already found candidates." }
];

function GridSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="bg-slate-50 py-16">
      <Container>
        <h2 className="text-3xl font-black text-navy">{title}</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {items.map((item) => <div key={item} className="rounded-lg border border-slate-200 bg-white p-5 text-sm font-semibold leading-7 text-slate-700 shadow-sm">{item}</div>)}
        </div>
      </Container>
    </section>
  );
}

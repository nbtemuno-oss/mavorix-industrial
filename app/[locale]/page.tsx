import type { Metadata } from "next";
import { BlogCard } from "@/components/cards/BlogCard";
import { CountryCard } from "@/components/cards/CountryCard";
import { IndustryCard } from "@/components/cards/IndustryCard";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Hero } from "@/components/sections/Hero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Container } from "@/components/ui/Container";
import { countries } from "@/data/countries";
import { homeFaqs } from "@/data/faqs";
import { industries } from "@/data/industries";
import { services } from "@/data/services";
import { getAllBlogPosts } from "@/lib/mdx";
import { faqSchema, JsonLd } from "@/lib/schema";
import { seo } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return seo({
    title: "MAVORIX INDUSTRIAL | Industrial Sourcing Partner in China",
    description:
      "MAVORIX INDUSTRIAL helps overseas industrial buyers source reliable machinery, OEM products, MRO supplies, spare parts, and industrial equipment from China with supplier verification, quality control, and export support.",
    path: `/${locale}/`
  });
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const posts = getAllBlogPosts().slice(0, 3);
  return (
    <>
      <Hero locale={locale} />
      <section className="bg-white py-8">
        <Container className="grid gap-3 md:grid-cols-5">
          {["Supplier Verification", "Quality Control", "OEM Coordination", "MRO Sourcing", "Export Support"].map((item) => (
            <div key={item} className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-4 text-center text-sm font-black text-navy">{item}</div>
          ))}
        </Container>
      </section>
      <Section title="What We Source" text="Focused industrial sourcing support for practical B2B procurement needs, not an everything-for-everyone marketplace.">
        <FeatureGrid items={[
          { title: "Machinery and Equipment", text: "Production equipment, general machinery, and machinery-related purchasing coordination." },
          { title: "OEM Industrial Parts", text: "Custom parts, drawings, samples, supplier comparison, and production follow-up." },
          { title: "MRO Supplies", text: "Maintenance, repair, operation supplies, consumables, replacement items, and mixed-order sourcing." },
          { title: "Industrial Spare Parts", text: "Factory maintenance parts, mechanical spares, electrical spares, and urgent replacement sourcing." },
          { title: "Agricultural Equipment Parts", text: "Tractor, tiller, harvester, irrigation, and farm implement part sourcing from China." },
          { title: "Packaging and Factory Supplies", text: "Packaging machinery parts, conveyors, sealing parts, filling parts, and factory consumables." }
        ]} />
      </Section>
      <Section title="More Than Finding Suppliers" text="AI, Google, and marketplaces can help buyers find supplier names. Industrial procurement needs more than search results: verification, technical communication, quotation comparison, sample coordination, quality inspection, export documents, consolidation, and long-term follow-up." dark />
      <Section title="Core Services" text="Each service page is structured for Google SEO, AI answer engines, and practical buyer evaluation.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{services.map((service) => <ServiceCard key={service.slug} service={service} locale={locale} />)}</div>
      </Section>
      <Section title="Industries We Support" text="We help buyers source, verify, and coordinate suppliers for industrial products from China.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{industries.map((industry) => <IndustryCard key={industry.slug} industry={industry} locale={locale} />)}</div>
      </Section>
      <Section title="Countries We Serve" text="Country pages target long-tail sourcing searches while avoiding false claims about local offices or guaranteed customs outcomes.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{countries.map((country) => <CountryCard key={country.slug} country={country} locale={locale} />)}</div>
      </Section>
      <Section title="Why MAVORIX INDUSTRIAL" text="Our background in industrial machinery and export operations helps us understand technical sourcing requirements better than general trading companies.">
        <ProcessSteps />
      </Section>
      <Section title="Featured Blog Guides" text="Practical guides for overseas industrial buyers sourcing from China.">
        <div className="grid gap-5 md:grid-cols-3">{posts.map((post) => <BlogCard key={post.slug} post={post} locale={locale} />)}</div>
      </Section>
      <FAQSection faqs={homeFaqs} />
      <CTASection />
      <JsonLd data={faqSchema(homeFaqs)} />
    </>
  );
}

function Section({ title, text, children, dark = false }: { title: string; text: string; children?: React.ReactNode; dark?: boolean }) {
  return (
    <section className={dark ? "bg-navy py-16 text-white" : "bg-white py-16"}>
      <Container>
        <h2 className={`text-3xl font-black md:text-4xl ${dark ? "text-white" : "text-navy"}`}>{title}</h2>
        <p className={`mt-4 max-w-4xl text-base leading-8 ${dark ? "text-slate-300" : "text-slate-600"}`}>{text}</p>
        {children ? <div className="mt-9">{children}</div> : null}
      </Container>
    </section>
  );
}

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
import { industries } from "@/data/industries";
import { services } from "@/data/services";
import { t } from "@/data/translations";
import { getAllBlogPosts } from "@/lib/mdx";
import { faqSchema, JsonLd } from "@/lib/schema";
import { seo } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const copy = t(locale);
  return seo({
    title: copy.home.metaTitle,
    description: copy.home.metaDescription,
    path: `/${locale}/`
  });
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const copy = t(locale);
  const posts = getAllBlogPosts().slice(0, 3);
  return (
    <>
      <Hero locale={locale} />
      <section className="bg-white py-8">
        <Container className="grid gap-3 md:grid-cols-5">
          {copy.home.strip.map((item) => (
            <div key={item} className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-4 text-center text-sm font-black text-navy">{item}</div>
          ))}
        </Container>
      </section>
      <Section title={copy.home.sourceTitle} text={copy.home.sourceText}>
        <FeatureGrid items={copy.home.sourceItems} />
      </Section>
      <Section title={copy.home.moreTitle} text={copy.home.moreText} dark />
      <Section title={copy.home.servicesTitle} text={copy.home.servicesText}>
        {locale === "en" ? <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{services.map((service) => <ServiceCard key={service.slug} service={service} locale={locale} />)}</div> : <FeatureGrid items={copy.industrial.features.slice(0, 3)} />}
      </Section>
      <Section title={copy.home.industriesTitle} text={copy.home.industriesText}>
        {locale === "en" ? <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{industries.map((industry) => <IndustryCard key={industry.slug} industry={industry} locale={locale} />)}</div> : <FeatureGrid items={copy.home.sourceItems.slice(0, 3)} />}
      </Section>
      {locale === "en" ? <Section title="Countries We Serve" text="Country pages target long-tail sourcing searches while avoiding false claims about local offices or guaranteed customs outcomes.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{countries.map((country) => <CountryCard key={country.slug} country={country} locale={locale} />)}</div>
      </Section> : null}
      <Section title={copy.home.processTitle} text={copy.home.processText}>
        <ProcessSteps locale={locale} />
      </Section>
      {locale === "en" ? <Section title="Featured Blog Guides" text="Practical guides for overseas industrial buyers sourcing from China.">
        <div className="grid gap-5 md:grid-cols-3">{posts.map((post) => <BlogCard key={post.slug} post={post} locale={locale} />)}</div>
      </Section> : null}
      <FAQSection faqs={copy.home.faqs} title={copy.home.faqTitle} />
      <CTASection locale={locale} />
      <JsonLd data={faqSchema(copy.home.faqs)} />
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

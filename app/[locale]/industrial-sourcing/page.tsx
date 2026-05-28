import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";
import { t } from "@/data/translations";
import { faqSchema, JsonLd, serviceSchema } from "@/lib/schema";
import { seo } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const copy = t(locale).industrial;
  return seo({
    title: copy.metaTitle,
    description: copy.metaDescription,
    path: `/${locale}/industrial-sourcing/`,
    locale
  });
}

export default async function IndustrialSourcingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const copy = t(locale).industrial;
  return (
    <>
      <PageHero badge={copy.badge} title={copy.title} description={copy.description} breadcrumbs={[{ label: t(locale).nav.home, href: `/${locale}/` }, { label: t(locale).nav.industrial, href: `/${locale}/industrial-sourcing/` }]} />
      <Container className="py-16">
        <FeatureGrid items={copy.features} />
        <div className="mt-14">
          <h2 className="text-3xl font-black text-navy">{copy.processTitle}</h2>
          <div className="mt-8"><ProcessSteps locale={locale} /></div>
        </div>
      </Container>
      <FAQSection faqs={copy.faqs} />
      <CTASection locale={locale} />
      <JsonLd data={[faqSchema(copy.faqs), serviceSchema(copy.title, copy.metaDescription, `${site.url}/${locale}/industrial-sourcing/`)]} />
    </>
  );
}

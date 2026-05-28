import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { site } from "@/data/site";
import { isLocale } from "@/lib/i18n";
import { JsonLd, organizationSchema, websiteSchema } from "@/lib/schema";

export function generateStaticParams() {
  return site.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <>
      <Header locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} />
      <JsonLd data={[organizationSchema(), websiteSchema()]} />
    </>
  );
}

import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { site } from "@/data/site";
import { t } from "@/data/translations";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { IndustrialImage } from "@/components/ui/IndustrialImage";
import { pageImages } from "@/data/page-images";

export function Hero({ locale }: { locale: string }) {
  const copy = t(locale);
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <Container className="grid min-h-[680px] items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-orange-100">{copy.hero.eyebrow}</div>
          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight md:text-7xl">{copy.hero.h1}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{copy.hero.subtitle}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href={`/${locale}/contact/`}>{copy.hero.primary} <ArrowRight className="ml-2" size={17} /></Button>
            <Button href={site.whatsappUrl} variant="secondary"><MessageCircle className="mr-2" size={17} /> {copy.hero.whatsapp}</Button>
            <Button href={locale === "en" ? `/${locale}/services/` : `/${locale}/industrial-sourcing/`} variant="dark">{copy.hero.services}</Button>
          </div>
          <div className="mt-10 grid gap-3 text-sm font-semibold text-slate-200 sm:grid-cols-3">
            {copy.hero.trust.map((item) => (
              <div key={item} className="flex items-center gap-2"><CheckCircle2 className="text-mint" size={18} /> {item}</div>
            ))}
          </div>
        </div>
        <IndustrialImage src={pageImages.home.src} alt={pageImages.home.alt} className="min-h-[420px]" priority />
      </Container>
    </section>
  );
}

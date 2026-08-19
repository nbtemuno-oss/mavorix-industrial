import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import Image from "next/image";
import { site } from "@/data/site";
import { t } from "@/data/translations";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { pageImages } from "@/data/page-images";

export function Hero({ locale }: { locale: string }) {
  const copy = t(locale);
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <Image
        src={pageImages.home.src}
        alt={pageImages.home.alt}
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(9,25,48,0.64)_0%,rgba(9,25,48,0.52)_30%,rgba(9,25,48,0.24)_58%,rgba(9,25,48,0.04)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(9,25,48,0.12)_0%,rgba(9,25,48,0)_46%,rgba(9,25,48,0.28)_100%)]" />
      <Container className="flex min-h-[720px] items-center py-16">
        <div className="max-w-4xl [text-shadow:0_2px_18px_rgba(0,0,0,0.45)]">
          <div className="inline-flex rounded-full border border-white/20 bg-navy/35 px-4 py-2 text-sm font-bold text-orange-100 backdrop-blur-sm">{copy.hero.eyebrow}</div>
          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight md:text-7xl">{copy.hero.h1}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">{copy.hero.subtitle}</p>
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
      </Container>
    </section>
  );
}

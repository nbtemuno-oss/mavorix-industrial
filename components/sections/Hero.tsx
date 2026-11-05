import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import Image from "next/image";
import { site } from "@/data/site";
import { t } from "@/data/translations";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { pageImages } from "@/data/page-images";

export function Hero({ locale }: { locale: string }) {
  const copy = t(locale);
  const drawingHref = locale === "en" ? "/en/contact/?request=drawing" : `/${locale}/contact/`;
  const sourcingHref = locale === "en" ? "/en/contact/?request=sourcing" : `/${locale}/industrial-sourcing/`;
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
      <Container className="flex min-h-[680px] items-center py-10 sm:py-14 md:min-h-[720px] md:py-16">
        <div className="max-w-4xl [text-shadow:0_2px_18px_rgba(0,0,0,0.45)]">
          <div className="inline-flex rounded-full border border-white/20 bg-navy/35 px-4 py-2 text-xs font-bold text-orange-100 backdrop-blur-sm sm:text-sm">{copy.hero.eyebrow}</div>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.08] sm:mt-6 sm:text-5xl md:text-6xl lg:text-7xl">{copy.hero.h1}</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:mt-6 sm:text-lg sm:leading-8">{copy.hero.subtitle}</p>
          <div className="mt-7 flex flex-wrap gap-3 sm:mt-9">
            <Button href={drawingHref}>{copy.hero.primary} <ArrowRight className="ml-2" size={17} /></Button>
            <Button href={sourcingHref} variant="secondary">{copy.hero.services}</Button>
            <Button href={site.whatsappUrl} variant="dark" className="hidden sm:inline-flex"><MessageCircle className="mr-2" size={17} /> {copy.hero.whatsapp}</Button>
          </div>
          <div className="mt-10 hidden gap-3 text-sm font-semibold text-slate-200 sm:grid sm:grid-cols-3">
            {copy.hero.trust.map((item) => (
              <div key={item} className="flex items-center gap-2"><CheckCircle2 className="text-mint" size={18} /> {item}</div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

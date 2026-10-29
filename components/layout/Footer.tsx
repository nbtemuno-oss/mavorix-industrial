import Image from "next/image";
import Link from "next/link";
import { countries } from "@/data/countries";
import { industries } from "@/data/industries";
import { japaneseCustomParts } from "@/data/japanese-custom-parts";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { t } from "@/data/translations";
import { Container } from "@/components/ui/Container";

type LandingFooter = {
  homeHref: string;
  intro: string;
  columns: { title: string; items: { label: string; href: string }[] }[];
  contactTitle: string;
  contactHref: string;
  contactLabel: string;
  whatsappLabel: string;
};

export function Footer({ locale, landing }: { locale: string; landing?: LandingFooter }) {
  const prefix = `/${locale}`;
  const copy = t(locale);
  const NavigationLink = landing ? "a" : Link;

  return (
    <footer className="bg-navy text-white">
      <Container className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <NavigationLink href={landing?.homeHref ?? `/${locale}/`} className="inline-flex" aria-label={site.name}>
            <Image
              src="/images/logo/mavorix-logo-transparent.webp"
              alt="MAVORIX INDUSTRIAL"
              width={260}
              height={120}
              className="h-14 w-auto object-contain"
            />
          </NavigationLink>
          <p className="mt-3 text-sm leading-7 text-slate-300">{landing?.intro ?? copy.footerIntro}</p>
          {!landing && japaneseCustomParts.published ? <a href={japaneseCustomParts.path} lang="ja" className="mt-4 inline-block text-sm leading-6 text-slate-300 hover:text-white">日本語 — 図面製作の特注金属部品</a> : null}
        </div>
        {landing ? landing.columns.map((column) => <FooterColumn key={column.title} {...column} nativeAnchors />) : <>
        <FooterColumn title={copy.footerColumns.services} items={locale === "en" ? services.slice(0, 6).map((s) => ({ label: s.shortTitle, href: `${prefix}/services/${s.slug}/` })) : [{ label: copy.nav.industrial, href: `${prefix}/industrial-sourcing/` }]} />
        <FooterColumn title={copy.footerColumns.industries} items={locale === "en" ? industries.slice(0, 6).map((s) => ({ label: s.title, href: `${prefix}/industries/${s.slug}/` })) : [{ label: copy.nav.home, href: `${prefix}/` }]} />
        <FooterColumn title={copy.footerColumns.countries} items={locale === "en" ? countries.map((s) => ({ label: s.title, href: `${prefix}/countries/${s.slug}/` })) : [{ label: copy.nav.contact, href: `${prefix}/contact/` }]} />
        </>}
        <div>
          <h3 className="font-black">{landing?.contactTitle ?? copy.footerColumns.contact}</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <NavigationLink href={`mailto:${site.email}`} className="block hover:text-white">{site.email}</NavigationLink>
            <NavigationLink href={site.whatsappUrl} className="block hover:text-white">{landing?.whatsappLabel ?? copy.footerColumns.whatsapp}: {site.phone}</NavigationLink>
            <NavigationLink href={landing?.contactHref ?? `${prefix}/contact/`} className="block hover:text-white">{landing?.contactLabel ?? copy.footerColumns.contactPage}</NavigationLink>
          </div>
        </div>
      </Container>
      <div className="border-t border-white/10 py-5 text-center text-sm text-slate-400">&copy; MAVORIX INDUSTRIAL. All rights reserved.</div>
    </footer>
  );
}

function FooterColumn({ title, items, nativeAnchors = false }: { title: string; items: { label: string; href: string }[]; nativeAnchors?: boolean }) {
  const NavigationLink = nativeAnchors ? "a" : Link;
  return (
    <div>
      <h3 className="font-black">{title}</h3>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <NavigationLink key={item.href} href={item.href} className="block text-sm text-slate-300 hover:text-white">
            {item.label}
          </NavigationLink>
        ))}
      </div>
    </div>
  );
}

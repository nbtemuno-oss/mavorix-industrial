import Link from "next/link";
import { countries } from "@/data/countries";
import { industries } from "@/data/industries";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { t } from "@/data/translations";
import { Container } from "@/components/ui/Container";

export function Footer({ locale }: { locale: string }) {
  const prefix = `/${locale}`;
  const copy = t(locale);

  return (
    <footer className="bg-navy text-white">
      <Container className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <div className="text-xl font-black">{site.name}</div>
          <p className="mt-3 text-sm leading-7 text-slate-300">{copy.footerIntro}</p>
        </div>
        <FooterColumn title={copy.footerColumns.services} items={locale === "en" ? services.slice(0, 6).map((s) => ({ label: s.shortTitle, href: `${prefix}/services/${s.slug}/` })) : [{ label: copy.nav.industrial, href: `${prefix}/industrial-sourcing/` }]} />
        <FooterColumn title={copy.footerColumns.industries} items={locale === "en" ? industries.slice(0, 6).map((s) => ({ label: s.title, href: `${prefix}/industries/${s.slug}/` })) : [{ label: copy.nav.home, href: `${prefix}/` }]} />
        <FooterColumn title={copy.footerColumns.countries} items={locale === "en" ? countries.slice(0, 6).map((s) => ({ label: s.title, href: `${prefix}/countries/${s.slug}/` })) : [{ label: copy.nav.contact, href: `${prefix}/contact/` }]} />
        <div>
          <h3 className="font-black">{copy.footerColumns.contact}</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <Link href={`mailto:${site.email}`} className="block hover:text-white">{site.email}</Link>
            <Link href={site.whatsappUrl} className="block hover:text-white">{copy.footerColumns.whatsapp}: {site.phone}</Link>
            <Link href={`${prefix}/contact/`} className="block hover:text-white">{copy.footerColumns.contactPage}</Link>
          </div>
        </div>
      </Container>
      <div className="border-t border-white/10 py-5 text-center text-sm text-slate-400">© MAVORIX INDUSTRIAL. All rights reserved.</div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="font-black">{title}</h3>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="block text-sm text-slate-300 hover:text-white">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

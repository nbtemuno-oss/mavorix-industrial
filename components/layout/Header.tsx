import Link from "next/link";
import { Globe2, MessageCircle } from "lucide-react";
import { mainNav } from "@/data/navigation";
import { site } from "@/data/site";
import { t } from "@/data/translations";
import { localeLabels } from "@/lib/i18n";
import { Container } from "@/components/ui/Container";

export function Header({ locale }: { locale: string }) {
  const copy = t(locale);
  const nav =
    locale === "en"
      ? mainNav
      : [
          { label: copy.nav.home, href: `/${locale}/` },
          { label: copy.nav.industrial, href: `/${locale}/industrial-sourcing/` },
          { label: copy.nav.contact, href: `/${locale}/contact/` }
        ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <Container className="flex min-h-20 items-center justify-between gap-4">
        <Link href={`/${locale}/`} className="shrink-0">
          <div className="text-lg font-black tracking-wide text-navy">{site.name}</div>
          <div className="text-xs font-semibold text-slate-500">{locale === "en" ? site.tagline : copy.hero.h1}</div>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <div key={item.label} className="group relative">
              <Link href={item.href.replace("/en/", `/${locale}/`)} className="rounded-md px-3 py-2 text-sm font-bold text-slate-700 hover:bg-slate-100 hover:text-navy">
                {item.label}
              </Link>
              {"children" in item && item.children ? (
                <div className="invisible absolute left-0 top-full w-72 translate-y-2 rounded-lg border border-slate-200 bg-white p-2 opacity-0 shadow-industrial transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link key={child.href} href={child.href.replace("/en/", `/${locale}/`)} className="block rounded-md px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:text-signal">
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <div className="group relative">
            <button className="inline-flex h-11 items-center gap-2 rounded-md border border-slate-200 px-3 text-sm font-bold text-slate-700">
              <Globe2 size={16} /> {locale.toUpperCase()}
            </button>
            <div className="invisible absolute right-0 top-full w-40 translate-y-2 rounded-lg border border-slate-200 bg-white p-2 opacity-0 shadow-industrial transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {site.locales.map((code) => (
                <Link key={code} href={`/${code}/`} className="block rounded-md px-3 py-2 text-sm font-semibold hover:bg-slate-50">
                  {localeLabels[code]}
                </Link>
              ))}
            </div>
          </div>
          <Link href={site.whatsappUrl} className="inline-flex h-11 items-center gap-2 rounded-md bg-signal px-4 text-sm font-black text-white hover:bg-orange-600">
            <MessageCircle size={17} /> {copy.nav.whatsapp}
          </Link>
        </div>
        <Link href={`/${locale}/contact/`} className="inline-flex h-11 items-center rounded-md bg-navy px-4 text-sm font-bold text-white lg:hidden">
          {copy.nav.contact}
        </Link>
      </Container>
    </header>
  );
}

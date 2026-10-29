import Link from "next/link";
import Image from "next/image";
import { FileUp, Globe2, Menu, MessageCircle } from "lucide-react";
import { mainNav } from "@/data/navigation";
import { japaneseCustomParts } from "@/data/japanese-custom-parts";
import { site } from "@/data/site";
import { t } from "@/data/translations";
import { localeLabels } from "@/lib/i18n";
import { Container } from "@/components/ui/Container";
import { MobileMenu } from "@/components/layout/MobileMenu";

type HeaderNavItem = { label: string; href: string; children?: { label: string; href: string }[] };

type LandingHeader = {
  homeHref: string;
  nav: HeaderNavItem[];
  contactHref: string;
  contactLabel: string;
  mobileContactLabel?: string;
  menuLabel: string;
  whatsappLabel: string;
  languageLabel: string;
  languages: { label: string; href: string }[];
};

export function Header({ locale, landing }: { locale: string; landing?: LandingHeader }) {
  const copy = t(locale);
  const nav: HeaderNavItem[] = landing?.nav ?? (
    locale === "en"
      ? mainNav
      : [
          { label: copy.nav.home, href: `/${locale}/` },
          { label: copy.nav.industrial, href: `/${locale}/industrial-sourcing/` },
          { label: copy.nav.contact, href: `/${locale}/contact/` }
        ]);
  const homeHref = landing?.homeHref ?? `/${locale}/`;
  const contactHref = landing?.contactHref ?? `/${locale}/contact/`;
  const contactLabel = landing?.contactLabel ?? "Request RFQ";
  const languages = landing?.languages ?? [
    ...site.locales.map((code) => ({ label: localeLabels[code], href: `/${code}/` })),
    ...(japaneseCustomParts.published ? [{ label: "日本語", href: japaneseCustomParts.path }] : [])
  ];
  const navHref = (href: string) => landing ? href : href.replace("/en/", `/${locale}/`);
  const MenuRoot = landing ? MobileMenu : "details";
  const NavigationLink = landing ? "a" : Link;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <Container className="flex min-h-16 items-center justify-between gap-4 py-2">
        <NavigationLink href={homeHref} className="flex shrink-0 items-center gap-3" aria-label={site.name}>
          <Image
            src="/images/logo/mavorix-logo-header-64.webp"
            alt="MAVORIX INDUSTRIAL"
            width={192}
            height={64}
            priority
            className={landing ? "h-7 w-auto object-contain min-[360px]:h-8 sm:h-10 md:h-12" : "h-10 w-auto object-contain md:h-12"}
          />
          <span className="sr-only">{site.name}</span>
        </NavigationLink>
        <nav className={landing ? "hidden items-center xl:flex" : "hidden items-center gap-1 lg:flex"}>
          {nav.map((item) => (
            <div key={item.label} className="group relative">
              <NavigationLink href={navHref(item.href)} className={`rounded-md ${landing ? "px-2.5" : "px-3"} py-2 text-sm font-bold text-slate-700 hover:bg-slate-100 hover:text-navy`}>
                {item.label}
              </NavigationLink>
              {"children" in item && item.children ? (
                <div className="invisible absolute left-0 top-full w-72 translate-y-2 rounded-lg border border-slate-200 bg-white p-2 opacity-0 shadow-industrial transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <NavigationLink key={child.href} href={navHref(child.href)} className="block rounded-md px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:text-signal">
                      {child.label}
                    </NavigationLink>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>
        <div className={landing ? "hidden items-center gap-2 xl:flex" : "hidden items-center gap-2 lg:flex"}>
          <div className="group relative">
            <button type="button" aria-label={landing?.languageLabel} className="inline-flex h-11 items-center gap-2 rounded-md border border-slate-200 px-3 text-sm font-bold text-slate-700">
              <Globe2 size={16} /> {locale.toUpperCase()}
            </button>
            <div className="invisible absolute right-0 top-full w-40 translate-y-2 rounded-lg border border-slate-200 bg-white p-2 opacity-0 shadow-industrial transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              {languages.map((language) => (
                <NavigationLink key={language.href} href={language.href} className="block rounded-md px-3 py-2 text-sm font-semibold hover:bg-slate-50">
                  {language.label}
                </NavigationLink>
              ))}
            </div>
          </div>
          {landing ? <NavigationLink href={contactHref} className="inline-flex h-11 items-center gap-2 rounded-md bg-signal px-4 text-sm font-black text-white hover:bg-orange-600">
            <FileUp size={17} /> {contactLabel}
          </NavigationLink> : <Link href={site.whatsappUrl} className="inline-flex h-11 items-center gap-2 rounded-md bg-signal px-4 text-sm font-black text-white hover:bg-orange-600">
            <MessageCircle size={17} /> {copy.nav.whatsapp}
          </Link>}
        </div>
        {landing ? (
        <div className="flex items-center gap-2 xl:hidden">
          <NavigationLink href={contactHref} className={`inline-flex h-10 items-center rounded-md bg-signal px-3 text-sm font-bold text-white${landing ? " shrink-0 whitespace-nowrap" : ""}`}>
            {landing?.mobileContactLabel ?? contactLabel}
          </NavigationLink>
          <MenuRoot className="group relative">
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-md border border-slate-200 text-navy [&::-webkit-details-marker]:hidden">
              <Menu size={20} />
              <span className="sr-only">{landing?.menuLabel ?? "Open navigation"}</span>
            </summary>
            <div className={`absolute right-0 top-12 max-h-[75vh] w-80 overflow-y-auto rounded-lg border border-slate-200 bg-white p-3 shadow-industrial${landing ? " max-w-[calc(100vw-2rem)]" : ""}`}>
              {nav.map((item) => (
                <div key={item.label} className="border-b border-slate-100 py-2 last:border-0">
                  <NavigationLink href={navHref(item.href)} className="block rounded-md px-3 py-2 text-sm font-black text-navy hover:bg-slate-50">
                    {item.label}
                  </NavigationLink>
                  {"children" in item && item.children ? (
                    <div className="pb-1 pl-3">
                      {item.children.map((child) => (
                        <NavigationLink key={child.href} href={navHref(child.href)} className="block rounded-md px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:text-signal">
                          {child.label}
                        </NavigationLink>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
              <NavigationLink href={site.whatsappUrl} className="mt-2 flex items-center gap-2 rounded-md px-3 py-3 text-sm font-black text-signal hover:bg-orange-50">
                <MessageCircle size={17} /> {landing?.whatsappLabel ?? "Contact on WhatsApp"}
              </NavigationLink>
            </div>
          </MenuRoot>
        </div>
        ) : (
          <Link href={`/${locale}/contact/`} className="inline-flex h-11 items-center rounded-md bg-navy px-4 text-sm font-bold text-white lg:hidden">
            {copy.nav.contact}
          </Link>
        )}
      </Container>
    </header>
  );
}

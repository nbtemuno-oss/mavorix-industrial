import Link from "next/link";
import { countries } from "@/data/countries";
import { industries } from "@/data/industries";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";

export function Footer({ locale }: { locale: string }) {
  const prefix = `/${locale}`;
  return (
    <footer className="bg-navy text-white">
      <Container className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <div className="text-xl font-black">{site.name}</div>
          <p className="mt-3 text-sm leading-7 text-slate-300">{site.tagline}. China industrial sourcing, OEM, MRO, supplier verification, quality coordination, and export support.</p>
        </div>
        <FooterColumn title="Services" items={services.slice(0, 6).map((s) => ({ label: s.shortTitle, href: `${prefix}/services/${s.slug}/` }))} />
        <FooterColumn title="Industries" items={industries.slice(0, 6).map((s) => ({ label: s.title, href: `${prefix}/industries/${s.slug}/` }))} />
        <FooterColumn title="Countries" items={countries.slice(0, 6).map((s) => ({ label: s.title, href: `${prefix}/countries/${s.slug}/` }))} />
        <div>
          <h3 className="font-black">Contact</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <Link href={`mailto:${site.email}`} className="block hover:text-white">{site.email}</Link>
            <Link href={site.whatsappUrl} className="block hover:text-white">WhatsApp Inquiry</Link>
            <Link href={`${prefix}/contact/`} className="block hover:text-white">Contact Page</Link>
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

import Link from "next/link";
import { site } from "@/data/site";

export function MobileInquiryBar() {
  return (
    <>
      <div className="h-24 md:hidden" aria-hidden="true" />
      <nav aria-label="Quick inquiry" className="fixed inset-x-0 bottom-0 z-40 flex gap-3 border-t border-slate-200 bg-white p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-lg md:hidden">
        <Link href="/en/contact/#inquiry" className="flex min-h-11 flex-1 items-center justify-center rounded-md bg-signal px-3 text-sm font-bold text-white">Request a Quote</Link>
        <a href={site.whatsappUrl} className="flex min-h-11 flex-1 items-center justify-center rounded-md bg-navy px-3 text-sm font-bold text-white">WhatsApp Us</a>
      </nav>
    </>
  );
}

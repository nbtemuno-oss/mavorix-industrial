import { MessageCircle } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CTASection({ title = "Need Industrial Sourcing Support from China?", text = "Send your product details, target quantity, photos, drawings, or supplier links. We will help review the sourcing path and next steps." }: { title?: string; text?: string }) {
  return (
    <section className="bg-white py-16">
      <Container>
        <div className="rounded-lg bg-navy p-8 text-white shadow-industrial md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-3xl font-black">{title}</h2>
              <p className="mt-3 max-w-3xl text-slate-300">{text}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/en/contact/">Send Your Requirement</Button>
              <Button href={site.whatsappUrl} variant="secondary"><MessageCircle className="mr-2" size={17} /> WhatsApp</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

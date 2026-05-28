import { Container } from "@/components/ui/Container";

export function FAQSection({ faqs, title = "FAQ" }: { faqs: { q: string; a: string }[]; title?: string }) {
  return (
    <section className="bg-slate-50 py-16">
      <Container>
        <h2 className="text-3xl font-black text-navy">{title}</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <details key={faq.q} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <summary className="cursor-pointer text-base font-black text-slate-900">{faq.q}</summary>
              <p className="mt-3 text-sm leading-7 text-slate-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

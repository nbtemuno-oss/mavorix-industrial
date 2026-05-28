import { sourcingProcess } from "@/data/services";

const descriptions: Record<string, string> = {
  "Requirement Review": "We review product details, drawings, photos, target quantity, market requirements, and sourcing risks before searching suppliers.",
  "Supplier Search and Screening": "We identify potential suppliers and compare their product focus, communication quality, production capability, and export experience.",
  "Quotation and Technical Comparison": "We compare quotations, specifications, materials, lead time, MOQ, packaging, and payment terms to avoid hidden risks.",
  "Sample or Trial Order Coordination": "We help coordinate samples, small trial orders, technical feedback, and improvement points before larger orders.",
  "Quality Check": "We support quality inspection coordination, photo/video checks, packaging review, and pre-shipment communication.",
  "Export and Shipping Support": "We follow export documentation, supplier-side shipment preparation, consolidation needs, and logistics communication.",
  "Long-Term Supply Chain Follow-up": "We help buyers build repeatable sourcing channels, supplier records, reorder plans, and long-term procurement support."
};

export function ProcessSteps({ steps = sourcingProcess }: { steps?: string[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <div key={step} className="rounded-lg border border-slate-200 bg-white p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-navy text-sm font-black text-white">{index + 1}</div>
          <h3 className="mt-4 font-black text-slate-900">{step}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{descriptions[step] || "Clear communication, practical checks, and documented follow-up keep the sourcing process controlled."}</p>
        </div>
      ))}
    </div>
  );
}

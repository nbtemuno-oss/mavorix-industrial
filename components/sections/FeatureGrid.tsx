import { CheckCircle2 } from "lucide-react";

export function FeatureGrid({ items }: { items: { title: string; text: string }[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <CheckCircle2 className="text-mint" size={24} />
          <h3 className="mt-4 text-lg font-black text-slate-900">{item.title}</h3>
          <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
        </div>
      ))}
    </div>
  );
}

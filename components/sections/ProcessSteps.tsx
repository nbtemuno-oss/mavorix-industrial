import { sourcingProcess } from "@/data/services";

export function ProcessSteps({ steps = sourcingProcess }: { steps?: string[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <div key={step} className="rounded-lg border border-slate-200 bg-white p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-navy text-sm font-black text-white">{index + 1}</div>
          <h3 className="mt-4 font-black text-slate-900">{step}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">Clear communication, practical checks, and documented follow-up keep the sourcing process controlled.</p>
        </div>
      ))}
    </div>
  );
}

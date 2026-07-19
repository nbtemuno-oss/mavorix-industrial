"use client";

import { FormEvent, useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

type ContactFormCopy = {
  fields: string[];
  requirement: string;
  message: string;
  submit: string;
  whatsapp: string;
};

type ContactFormProps = {
  copy: ContactFormCopy;
  locale: string;
  whatsappUrl: string;
};

function fieldName(label: string) {
  return label.toLowerCase().replaceAll(" ", "-");
}

function fieldKey(label: string) {
  const key = fieldName(label);
  if (key === "target-market") return "targetMarket";
  return key;
}

export function ContactForm({ copy, locale, whatsappUrl }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");

    const formData = new FormData(form);
    const fields = Object.fromEntries(copy.fields.map((label) => [fieldKey(label), String(formData.get(fieldName(label)) || "")]));

    try {
      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale,
          ...fields,
          requirement: String(formData.get("requirement") || ""),
          message: String(formData.get("message") || "")
        })
      });

      if (response.ok) {
        form.reset();
        setStatus("success");
        return;
      }

      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        {copy.fields.map((label) => (
          <label key={label} className="text-sm font-bold text-slate-700">{label}<input name={fieldName(label)} className="mt-2 h-12 w-full rounded-md border border-slate-300 px-3 outline-none focus:border-signal" /></label>
        ))}
        <label className="text-sm font-bold text-slate-700 md:col-span-2">{copy.requirement}<input name="requirement" className="mt-2 h-12 w-full rounded-md border border-slate-300 px-3 outline-none focus:border-signal" /></label>
        <label className="text-sm font-bold text-slate-700 md:col-span-2">{copy.message}<textarea name="message" rows={6} className="mt-2 w-full rounded-md border border-slate-300 px-3 py-3 outline-none focus:border-signal" /></label>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <button type="submit" disabled={status === "submitting"} className="min-h-11 rounded-md bg-signal px-5 py-3 text-sm font-black text-white hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-orange-300">{copy.submit}</button>
        <Button href={whatsappUrl} variant="dark"><MessageCircle className="mr-2" size={17} /> {copy.whatsapp}</Button>
      </div>
      {status === "success" ? <p className="mt-4 text-sm font-bold text-emerald-700">Thank you. Your inquiry has been submitted. We will reply as soon as possible.</p> : null}
      {status === "error" ? <p className="mt-4 text-sm font-bold text-red-700">Sorry, the inquiry could not be sent. Please contact us by email or WhatsApp.</p> : null}
    </form>
  );
}

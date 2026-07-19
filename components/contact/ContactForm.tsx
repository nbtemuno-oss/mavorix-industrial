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
  successMessage?: string;
  errorMessage?: string;
};

type ContactFormProps = {
  copy: ContactFormCopy;
  locale: string;
  whatsappUrl: string;
};

function fieldName(label: string) {
  return label.toLowerCase().replaceAll(" ", "-");
}

const contactFieldKeys = ["name", "company", "country", "email", "whatsapp", "quantity", "targetMarket"] as const;

function inputName(label: string, index: number) {
  return contactFieldKeys[index] || fieldName(label);
}

export function ContactForm({ copy, locale, whatsappUrl }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const successMessage = copy.successMessage || "Thank you. Your inquiry has been submitted. We will reply as soon as possible.";
  const errorMessage = copy.errorMessage || "Sorry, the inquiry could not be sent. Please contact us by email or WhatsApp.";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");

    const formData = new FormData(form);
    const fields = Object.fromEntries(
      copy.fields.map((label, index) => [contactFieldKeys[index], String(formData.get(inputName(label, index)) || "")])
    );

    try {
      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale,
          name: fields.name || "",
          company: fields.company || "",
          country: fields.country || "",
          email: fields.email || "",
          whatsapp: fields.whatsapp || "",
          quantity: fields.quantity || "",
          targetMarket: fields.targetMarket || "",
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
        {copy.fields.map((label, index) => (
          <label key={label} className="text-sm font-bold text-slate-700">{label}<input name={inputName(label, index)} className="mt-2 h-12 w-full rounded-md border border-slate-300 px-3 outline-none focus:border-signal" /></label>
        ))}
        <label className="text-sm font-bold text-slate-700 md:col-span-2">{copy.requirement}<input name="requirement" className="mt-2 h-12 w-full rounded-md border border-slate-300 px-3 outline-none focus:border-signal" /></label>
        <label className="text-sm font-bold text-slate-700 md:col-span-2">{copy.message}<textarea name="message" rows={6} className="mt-2 w-full rounded-md border border-slate-300 px-3 py-3 outline-none focus:border-signal" /></label>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <button type="submit" disabled={status === "submitting"} className="min-h-11 rounded-md bg-signal px-5 py-3 text-sm font-black text-white hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-orange-300">{copy.submit}</button>
        <Button href={whatsappUrl} variant="dark"><MessageCircle className="mr-2" size={17} /> {copy.whatsapp}</Button>
      </div>
      {status === "success" ? <p className="mt-4 text-sm font-bold text-emerald-700">{successMessage}</p> : null}
      {status === "error" ? <p className="mt-4 text-sm font-bold text-red-700">{errorMessage}</p> : null}
    </form>
  );
}

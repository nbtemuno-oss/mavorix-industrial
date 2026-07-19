import { NextResponse } from "next/server";
import { sendContactNotification } from "@/lib/contact-mail";

type ContactRequest = {
  [key: string]: unknown;
  locale?: string;
  name?: string;
  company?: string;
  country?: string;
  email?: string;
  whatsapp?: string;
  quantity?: string;
  targetMarket?: string;
  requirement?: string;
  message?: string;
};

export const runtime = "nodejs";

function field(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function fieldFrom(body: ContactRequest, ...keys: string[]) {
  for (const key of keys) {
    const value = field(body[key]);
    if (value) return value;
  }

  return "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: ContactRequest;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const name = fieldFrom(body, "name", "nombre", "nom");
  const company = fieldFrom(body, "company", "empresa", "societe");
  const country = fieldFrom(body, "country", "pais", "pays");
  const email = fieldFrom(body, "email");
  const whatsapp = fieldFrom(body, "whatsapp");
  const quantity = fieldFrom(body, "quantity", "cantidad", "quantite");
  const targetMarket = fieldFrom(body, "targetMarket", "mercadoObjetivo", "mercado-objetivo", "marcheCible", "marche-cible");
  const requirement = fieldFrom(body, "requirement", "requisito", "besoin");
  const message = fieldFrom(body, "message", "mensaje");

  if (!name) {
    return NextResponse.json({ ok: false, error: "Name is required." }, { status: 400 });
  }

  if (!email || !isEmail(email)) {
    return NextResponse.json({ ok: false, error: "A valid email is required." }, { status: 400 });
  }

  if (!requirement && !message) {
    return NextResponse.json({ ok: false, error: "Please provide a requirement or message." }, { status: 400 });
  }

  try {
    await sendContactNotification({
      locale: typeof body.locale === "string" ? body.locale : undefined,
      name,
      company,
      country,
      email,
      whatsapp,
      quantity,
      targetMarket,
      requirement,
      message
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form submission failed:", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json({ ok: false, error: "Unable to submit inquiry right now." }, { status: 500 });
  }
}

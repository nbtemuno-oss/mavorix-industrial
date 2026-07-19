import { NextResponse } from "next/server";
import { sendContactNotification } from "@/lib/contact-mail";

type ContactRequest = {
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

  const name = field(body.name);
  const company = field(body.company);
  const country = field(body.country);
  const email = field(body.email);
  const whatsapp = field(body.whatsapp);
  const quantity = field(body.quantity);
  const targetMarket = field(body.targetMarket);
  const requirement = field(body.requirement);
  const message = field(body.message);

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

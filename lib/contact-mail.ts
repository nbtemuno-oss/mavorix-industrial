import nodemailer from "nodemailer";

export type ContactMessage = {
  locale?: string;
  name: string;
  company: string;
  country: string;
  email: string;
  whatsapp: string;
  quantity: string;
  targetMarket: string;
  requirement: string;
  message: string;
};

function cleanHeader(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function getContactRecipient() {
  return process.env.CONTACT_FORM_NOTIFY_EMAIL || "mavorixindustrial@163.com";
}

function getSmtpPort() {
  const port = Number(process.env.SMTP_PORT || "587");
  if (!Number.isFinite(port)) throw new Error("SMTP_PORT is invalid");
  return port;
}

function getSmtpTransport() {
  const host = process.env.SMTP_HOST;
  const port = getSmtpPort();
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host) throw new Error("SMTP_HOST is not configured");
  if (!user) throw new Error("SMTP_USER is not configured");
  if (!pass) throw new Error("SMTP_PASS is not configured");

  return nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE === "true" || port === 465,
    auth: {
      user,
      pass
    }
  });
}

function createEmailText(input: ContactMessage) {
  return [
    "New MAVORIX INDUSTRIAL website inquiry",
    "",
    `Locale: ${input.locale || "unknown"}`,
    "",
    `Name: ${input.name}`,
    `Company: ${input.company || "Not provided"}`,
    `Country: ${input.country || "Not provided"}`,
    `Email: ${input.email}`,
    `WhatsApp: ${input.whatsapp || "Not provided"}`,
    `Quantity: ${input.quantity || "Not provided"}`,
    `Target market: ${input.targetMarket || "Not provided"}`,
    "",
    `Requirement: ${input.requirement || "Not provided"}`,
    "",
    "Message:",
    input.message || "Not provided"
  ].join("\n");
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function createEmailHtml(input: ContactMessage) {
  const rows = [
    ["Locale", input.locale || "unknown"],
    ["Name", input.name],
    ["Company", input.company || "Not provided"],
    ["Country", input.country || "Not provided"],
    ["Email", input.email],
    ["WhatsApp", input.whatsapp || "Not provided"],
    ["Quantity", input.quantity || "Not provided"],
    ["Target market", input.targetMarket || "Not provided"],
    ["Requirement", input.requirement || "Not provided"],
    ["Message", input.message || "Not provided"]
  ];

  return `<h2>New MAVORIX INDUSTRIAL website inquiry</h2><table>${rows
    .map(([label, value]) => `<tr><th align="left" style="padding:6px 12px 6px 0;">${label}</th><td style="padding:6px 0;">${escapeHtml(String(value)).replace(/\n/g, "<br>")}</td></tr>`)
    .join("")}</table>`;
}

export async function sendContactNotification(input: ContactMessage) {
  const transporter = getSmtpTransport();
  const to = getContactRecipient();
  const from = process.env.SMTP_FROM || process.env.SMTP_USER || to;
  const subjectName = input.name || input.company || "Website visitor";

  await transporter.sendMail({
    from,
    to,
    replyTo: cleanHeader(input.email),
    subject: `New MAVORIX Industrial Inquiry - ${cleanHeader(subjectName)}`,
    text: createEmailText(input),
    html: createEmailHtml(input)
  });
}

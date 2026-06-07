import { NextResponse } from "next/server";
import { Resend } from "resend";

// Where messages get delivered. Change this if you want a dedicated inbox.
const TO_EMAIL = "peteradedokun167@gmail.com";

// Resend's shared sender works out of the box with no domain setup. Swap to an
// address on your own verified domain (e.g. "Peter <hello@peteradedokun.com>")
// once you've verified it in the Resend dashboard for better deliverability.
const FROM_EMAIL = "Portfolio Contact <onboarding@resend.dev>";

const MAX = { name: 120, email: 200, subject: 160, message: 5000 } as const;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const data = body as Record<string, unknown>;
  const name = clean(data.name);
  const email = clean(data.email);
  const subject = clean(data.subject);
  const message = clean(data.message);

  // Honeypot — bots fill hidden fields, humans don't. Silently accept and drop.
  if (clean(data.company)) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  if (
    name.length > MAX.name ||
    email.length > MAX.email ||
    subject.length > MAX.subject ||
    message.length > MAX.message
  ) {
    return NextResponse.json(
      { error: "One or more fields are too long." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `Portfolio inquiry: ${subject}`,
      text: `New message from your portfolio contact form\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
      html: `
        <div style="font-family: system-ui, sans-serif; line-height: 1.6; color: #111;">
          <h2 style="margin: 0 0 16px;">New portfolio inquiry</h2>
          <p style="margin: 0 0 4px;"><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p style="margin: 0 0 4px;"><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p style="margin: 0 0 16px;"><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Could not send message. Please email directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please email directly." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

import { NextResponse } from "next/server"

const SERVICE_LABELS: Record<string, string> = {
  "video-placement": "Music Video Placement",
  playlisting: "Editorial Playlisting",
  radio: "Radio Promotion",
  management: "Artist Management",
  press: "Press & Media",
  "sports-athlete": "We Up Sports - Athlete Opportunities",
  "sports-academy": "We Up Sports - Academy or Club Partnership",
  "sports-sponsor": "We Up Sports - Sponsorship",
  "sports-institution": "We Up Sports - Institutional Enquiry",
  other: "Other",
}

const RECIPIENT_EMAIL = "sidmali2@gmail.com"
const RECIPIENT_NAME = "Sid Mali"

// Best-effort per-IP rate limiting (in-memory; per serverless instance)
const hits = new Map<string, number[]>()
const RATE_WINDOW_MS = 10 * 60 * 1000
const RATE_MAX = 5

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS)
  if (recent.length >= RATE_MAX) {
    hits.set(ip, recent)
    return true
  }
  recent.push(now)
  hits.set(ip, recent)
  return false
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function clamp(value: unknown, max: number): string {
  return typeof value === "string" ? value.slice(0, max) : ""
}

export async function POST(req: Request) {
  let body: Record<string, unknown>
  try {
    body = (await req.json()) as Record<string, unknown>
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 })
  }

  // Honeypot: real users never see or fill this field. Fake a success so bots
  // get no signal, but send nothing.
  if (clamp(body.botcheck, 200)) {
    return NextResponse.json({ ok: true })
  }

  const name = clamp(body.name, 120).trim()
  const email = clamp(body.email, 200).trim()
  const phone = clamp(body.phone, 60).trim()
  const artist = clamp(body.artist, 120).trim()
  const service = clamp(body.service, 60).trim()
  const message = clamp(body.message, 5000).trim()

  if (!name || !email || !message || !service || !EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_fields" }, { status: 400 })
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown"
  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 })
  }

  const apiKey = process.env.BREVO_API_KEY
  const senderEmail = process.env.CONTACT_SENDER_EMAIL
  const senderName = process.env.CONTACT_SENDER_NAME || "We Up Music Website"
  if (!apiKey || !senderEmail) {
    console.error("contact route: missing BREVO_API_KEY or CONTACT_SENDER_EMAIL")
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 500 })
  }

  const serviceLabel = SERVICE_LABELS[service] ?? service
  const lines = [
    `New enquiry from weupmusic.com`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    artist ? `Artist/Group: ${artist}` : null,
    `Service: ${serviceLabel}`,
    ``,
    `Message:`,
    message,
    ``,
    `--`,
    `Sent from the contact form at weupmusic.com/contact. Reply directly to this email to respond to ${name}.`,
  ].filter((l): l is string => l !== null)

  const brevoRes = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      sender: { email: senderEmail, name: senderName },
      to: [{ email: RECIPIENT_EMAIL, name: RECIPIENT_NAME }],
      replyTo: { email, name },
      subject: `Website enquiry: ${serviceLabel} - ${name}`,
      textContent: lines.join("\n"),
      tags: ["weupmusic-contact-form"],
    }),
  })

  if (!brevoRes.ok) {
    const detail = await brevoRes.text().catch(() => "")
    console.error(`contact route: Brevo send failed ${brevoRes.status}: ${detail.slice(0, 300)}`)
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}

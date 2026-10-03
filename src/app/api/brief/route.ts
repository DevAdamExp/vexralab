import { BUDGETS, TIMELINES, WORRIES, validateBrief, type Brief } from "@/components/contact/brief";
import { SERVICES } from "@/data/vx";

const label = (list: readonly { id: string; label: string }[], id: string) => list.find((x) => x.id === id)?.label ?? "";

function asText(b: Brief) {
  return [
    `From: ${b.name} <${b.email}>`,
    `Company: ${b.company}`,
    b.website && `Website: ${b.website}`,
    `Challenges: ${b.worries.map((w) => label(WORRIES, w)).join("; ") || "(none picked)"}`,
    b.words && `In their words:\n${b.words}`,
    `Services: ${b.services.map((s) => SERVICES.find((x) => x.id === s)?.name).join(", ") || "(none picked)"}`,
    `Timeline: ${label(TIMELINES, b.timeline) || "(not given)"}`,
    `Budget: ${label(BUDGETS, b.budget) || "(not given)"}`,
  ]
    .filter(Boolean)
    .join("\n\n");
}

export async function POST(req: Request) {
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return Response.json({ errors: { form: "We couldn't read that. Please try again." } }, { status: 400 });
  }

  // Honeypot: people never see this field, bots fill it. Pretend it worked and drop it.
  if (raw && typeof raw === "object" && (raw as Record<string, unknown>).nickname) return Response.json({ ok: true });

  const { brief, errors } = validateBrief(raw, SERVICES.map((s) => s.id));
  if (Object.keys(errors).length) return Response.json({ errors }, { status: 400 });

  const text = asText(brief);
  const key = process.env.RESEND_API_KEY;
  const to = process.env.BRIEF_TO_EMAIL;

  // ponytail: without Resend env vars the brief only reaches the server log. Set
  // RESEND_API_KEY + BRIEF_TO_EMAIL (and BRIEF_FROM_EMAIL on a verified domain) to email it.
  // No rate limit either; add one at the edge if the honeypot stops being enough.
  if (!key || !to) {
    console.log(`[brief] New letter (email not configured)\n${text}`);
    return Response.json({ ok: true });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.BRIEF_FROM_EMAIL ?? "VexraLab <onboarding@resend.dev>",
        to: [to],
        reply_to: brief.email,
        subject: `New enquiry from ${brief.name}, ${brief.company}`,
        text,
      }),
    });
    if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
  } catch (err) {
    // Keep the brief in the log so a failed send never loses it, and let the founder retry.
    console.error("[brief] Send failed", err, `\n${text}`);
    return Response.json({ errors: { form: "Our mail didn't go through." } }, { status: 502 });
  }
  return Response.json({ ok: true });
}

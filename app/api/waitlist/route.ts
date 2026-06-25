import { NextRequest, NextResponse } from "next/server";

const CAMPAIGN_ID = "tools";

export async function POST(req: NextRequest) {
  const { email, utm_source, utm_medium, utm_campaign, utm_content } = await req.json();

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  // 1. Persist to Supabase (service role key bypasses RLS for server-side writes)
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_ANON_KEY;

  if (supabaseUrl && supabaseKey) {
    const res = await fetch(`${supabaseUrl}/rest/v1/email_waitlist`, {
      method: "POST",
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        email,
        campaign_id: utm_campaign || CAMPAIGN_ID,
        utm_source: utm_source || "",
        utm_medium: utm_medium || "",
        utm_campaign: utm_campaign || "",
        utm_content: utm_content || "",
      }),
    });
    if (!res.ok) {
      console.error("[waitlist] Supabase insert failed:", res.status, await res.text());
    }
  }

  // 2. Delegate email sending + Resend audience add to 3vo-ai central service
  const resendSyncUrl = process.env.RESEND_SYNC_URL ?? "https://3vo.ai/api/resend-sync";
  const resendSyncSecret = process.env.RESEND_SYNC_SECRET;

  try {
    await fetch(resendSyncUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(resendSyncSecret ? { "x-resend-sync-secret": resendSyncSecret } : {}),
      },
      body: JSON.stringify({ email, campaign_id: CAMPAIGN_ID }),
    });
  } catch (err) {
    console.error("[waitlist] resend-sync call failed:", err);
  }

  return NextResponse.json({ ok: true });
}

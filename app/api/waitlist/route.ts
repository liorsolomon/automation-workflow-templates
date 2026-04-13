import { NextRequest, NextResponse } from 'next/server';

const CAMPAIGN_ID = 'automation-workflow-templates';

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY;
  const resendApiKey = process.env.RESEND_API_KEY;

  if (supabaseUrl && supabaseKey) {
    try {
      await fetch(`${supabaseUrl}/rest/v1/email_waitlist`, {
        method: 'POST',
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json',
          Prefer: 'return=minimal',
        },
        body: JSON.stringify({ email, campaign_id: CAMPAIGN_ID }),
      });
    } catch {
      // fail silently
    }
  }

  if (resendApiKey) {
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Automation Workflow Templates <noreply@3vo.ai>',
          to: [email],
          subject: "You're on the waitlist — Automation Workflow Templates coming soon",
          html: `
            <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto; padding: 32px; color: #111;">
              <h1 style="font-size: 24px; font-weight: 700; margin-bottom: 16px;">You're in! 🎉</h1>
              <p style="color: #555; line-height: 1.6;">
                Thanks for joining the Automation Workflow Templates waitlist. We'll notify you the moment we launch.
              </p>
              <p style="color: #555; line-height: 1.6;">
                We're building pre-built automation workflows for the tools you already use — connect your stack, eliminate manual work, reclaim your time.
              </p>
              <p style="color: #555; line-height: 1.6; margin-top: 24px;">
                — The Automation Workflow Templates team
              </p>
            </div>
          `,
        }),
      });
    } catch (err) {
      console.error('[waitlist] Resend welcome email error:', err);
    }
  }

  return NextResponse.json({ ok: true });
}

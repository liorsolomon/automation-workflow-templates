import { NextRequest, NextResponse } from 'next/server';

const CAMPAIGN_ID = 'automation-workflow-templates';

interface ResendEmailResponse {
  id?: string;
  error?: { message: string };
}

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY;
  const resendApiKey = process.env.RESEND_API_KEY;
  const resendAudienceId = process.env.RESEND_AUDIENCE_ID;

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

  let emailDelivered = false;

  if (resendApiKey) {
    // Add contact to Resend audience for future marketing emails
    if (resendAudienceId) {
      try {
        await fetch(`https://api.resend.com/audiences/${resendAudienceId}/contacts`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, unsubscribed: false }),
        });
      } catch (err) {
        console.error('[waitlist] Resend audience add error:', err);
      }
    }

    // Send confirmation email to the customer
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Automation Workflow Templates <noreply@3vo.ai>',
          to: [email],
          subject: "Smart move — your automation shortcut is almost ready ⚡",
          html: `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Your automation shortcut is coming</title></head>
<body style="margin:0;padding:0;background:#f9f9f9;font-family:system-ui,-apple-system,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9f9f9;">
    <tr><td align="center" style="padding:40px 16px;">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;padding:40px;max-width:560px;">
        <tr><td>
          <h1 style="margin:0 0 24px;font-size:28px;font-weight:700;color:#111;">You're on the list. ⚡</h1>
          <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#444;">You just secured your spot on the Automation Workflow Templates waitlist — which means when we launch, you'll skip the setup grind and start automating in minutes.</p>
          <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#444;">We're building ready-to-deploy workflow templates for Make, Zapier, n8n, and more. Think lead routing, onboarding flows, content pipelines — all pre-wired. Just plug them in and go.</p>
          <p style="margin:0 0 32px;font-size:16px;line-height:1.6;color:#444;">You'll hear from us the moment we open. Watch your inbox.</p>
          <p style="margin:0;font-size:15px;color:#666;">— The Automation Templates team</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`,
        }),
      });

      const data: ResendEmailResponse = await response.json();

      if (data.id) {
        emailDelivered = true;
        console.log(`[waitlist] Email sent successfully to ${email}. Resend ID: ${data.id}`);
      } else if (data.error) {
        console.error(`[waitlist] Resend email failed for ${email}:`, data.error.message);
      }
    } catch (err) {
      console.error('[waitlist] Resend welcome email error:', err);
    }
  }

  return NextResponse.json({ ok: true, emailDelivered });
}

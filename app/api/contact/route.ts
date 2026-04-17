import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!email || !email.includes('@') || !message) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;

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
          to: ['hello@3vo.ai'],
          reply_to: email,
          subject: `Contact form: ${name}`,
          html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br>')}</p>`,
        }),
      });
    } catch (err) {
      console.error('[contact] Resend error:', err);
    }
  }

  return NextResponse.json({ ok: true });
}

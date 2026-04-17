import WaitlistForm from "./WaitlistForm";

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setSubmitted(true);
        if (typeof window !== 'undefined' && (window as any).posthog) {
          (window as any).posthog.capture('waitlist_submitted', { email });
        }
        // Meta Pixel Lead conversion
        if (typeof window !== 'undefined' && (window as any).fbq) {
          (window as any).fbq('track', 'Lead');
        }
        // GA4 sign_up conversion
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'sign_up', { method: 'waitlist' });
        }
      }
    } catch {
      // fail silently
    } finally {
      setLoading(false);
    }
  };

  const faqs = [
    { q: 'Do I need a Zapier or Make account?', a: 'Yes — both have free tiers. Paid tiers are needed for multi-step workflows, but you can test on free.' },
    { q: 'How technical do I need to be?', a: 'If you can connect an app to Zapier, you can use these. No coding required. Setup guides walk you through every step.' },
    { q: 'What apps do the templates connect?', a: 'HubSpot, Pipedrive, Gmail, Notion, Slack, Calendly — varies by template. Full app list in each pack description.' },
    { q: 'Can I modify the workflows?', a: 'Yes — fully visual, no coding required. Change triggers, add steps, or connect different apps as needed.' },
    { q: 'Is the bundle worth it?', a: 'If you need more than one workflow category, yes. Individual packs $49–$97 each. Full bundle: $97 — you save $168.' },
    { q: 'What format are the templates?', a: 'JSON files you import directly into n8n or Make. Each pack also includes a PDF setup guide and troubleshooting doc.' },
    { q: 'What is your refund policy?', a: '30-day full refund, no questions asked. If you set it up and it does not work for you, we will give you your money back.' },
  ];

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-gray-950 to-gray-950 px-6 py-24 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-600/20 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-300">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            No developer required · Works with n8n &amp; Make
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
            Automate your business<br />
            <span className="text-emerald-400">without writing a single line of code.</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 sm:text-xl">
            Ready-to-import n8n and Make workflow templates for SMBs, agencies, and ops teams.
            Start with working templates, not blank screens.
          </p>
          <div className="mt-10">
            {submitted ? (
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-emerald-300">
                <p className="text-lg font-semibold">You&apos;re on the list!</p>
                <p className="mt-1 text-sm">We&apos;ll send you launch-day pricing and a free starter workflow.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none sm:w-80"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-500 disabled:opacity-50"
                >
                  {loading ? 'Joining...' : 'Get Early Access'}
                </button>
              </form>
            )}
            <p className="mt-3 text-sm text-gray-500">Individual packs $49–$97 · Bundle $97 (save $168) · One-time payment</p>
          </div>
        </div>
      </section>

      {/* Social proof bar */}
      <div className="border-y border-gray-800 bg-gray-900 px-6 py-5 text-center">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-10 gap-y-2 text-sm text-gray-400">
          <span>✦ Works with n8n &amp; Make (Integromat)</span>
          <span>✦ Import in under 5 minutes</span>
          <span>✦ Used by 800+ SMBs</span>
          <span>✦ Saves 10+ hours/week</span>
        </div>
      </div>

      {/* Who This Is For */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold sm:text-4xl mb-12">Who this is for</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-6">
              <h3 className="font-bold text-emerald-400 mb-4">This is for you if…</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                {[
                  'You run a lean business and waste hours on repetitive tasks every week',
                  'You have n8n or Make but keep staring at a blank canvas not knowing where to start',
                  'You want real automation — not just simple zaps — without hiring a developer',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-gray-700 bg-gray-900 p-6">
              <h3 className="font-bold text-gray-400 mb-4">Not for you if…</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                {[
                  'You need enterprise-level custom automation with complex SLAs',
                  'You want someone to build the workflow for you end-to-end — this is DIY',
                  'Your business has no repetitive processes that could be automated',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-gray-600 mt-0.5 shrink-0">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-gray-900 px-6 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            You know automation would save you hours.<br />
            <span className="text-emerald-400">But building workflows from scratch is hard.</span>
          </h2>
          <p className="mt-6 text-gray-400">
            You have the tools — n8n, Make, Zapier. But staring at a blank canvas and
            figuring out triggers, filters, and error handling takes days you don&apos;t have.
            Start with working templates, not blank screens.
          </p>
          <div className="mt-10 grid gap-4 text-left sm:grid-cols-3">
            {[
              { icon: "🔧", title: "No setup from scratch", desc: "Every template is pre-built and documented" },
              { icon: "⚡", title: "Deploy in minutes", desc: "Import JSON, connect your accounts, done" },
              { icon: "🔄", title: "Runs while you sleep", desc: "Set it once, automate forever" },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-800 bg-gray-950 p-5">
                <div className="text-2xl">{item.icon}</div>
                <h3 className="mt-2 font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Template packs */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Workflow packs built for real business needs
          </h2>
          <p className="mt-4 text-center text-gray-400">
            Each pack includes full JSON templates, setup guide, and troubleshooting docs.
          </p>
          <p className="mt-2 text-center text-sm text-emerald-400 font-semibold">
            Individual packs $49–$97 each. Full bundle: <span className="line-through text-gray-500">$265</span> $97 — save $168.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🎯",
                title: "Lead Capture → CRM",
                price: "$49",
                popular: false,
                bullets: [
                  "Form → CRM auto-sync",
                  "Slack/email notifications",
                  "Lead scoring logic",
                  "Duplicate detection",
                  "Works with HubSpot, Notion, Airtable",
                ],
              },
              {
                icon: "📄",
                title: "Invoice → Finance Log",
                price: "$49",
                popular: false,
                bullets: [
                  "Invoice received → log to Notion/Sheet",
                  "Payment status tracking",
                  "Monthly revenue rollup",
                  "Overdue payment alerts",
                  "Stripe + PayPal compatible",
                ],
              },
              {
                icon: "📅",
                title: "Social Post Scheduler",
                price: "$49",
                popular: false,
                bullets: [
                  "Google Sheet → multi-platform post",
                  "Twitter/X, LinkedIn, Instagram",
                  "Image upload support",
                  "Retry on failure",
                  "Content calendar sync",
                ],
              },
              {
                icon: "📧",
                title: "Email Ops Automation",
                price: "$49",
                popular: false,
                bullets: [
                  "Inbox triage & tagging",
                  "Auto-reply sequences",
                  "CRM ticket creation",
                  "Follow-up reminders",
                  "Gmail + Outlook",
                ],
              },
              {
                icon: "🛒",
                title: "E-commerce Operations",
                price: "$69",
                popular: false,
                bullets: [
                  "New order → fulfillment trigger",
                  "Inventory low alerts",
                  "Customer review requests",
                  "Refund processing flows",
                  "Shopify + WooCommerce",
                ],
              },
              {
                icon: "📦",
                title: "Complete Bundle",
                price: "$97",
                originalPrice: "$265",
                savings: "Save $168",
                popular: true,
                bullets: [
                  'All 5 workflow packs (save $168)',
                  '20+ templates total',
                  'Lifetime updates',
                  'Priority support',
                  'Private Discord access',
                ],
              },
            ].map((pack) => (
              <div
                key={pack.title}
                className={`relative rounded-xl border p-6 ${
                  pack.popular
                    ? "border-emerald-500 bg-emerald-500/10"
                    : "border-gray-700 bg-gray-800"
                }`}
              >
                {pack.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-600 px-3 py-0.5 text-xs font-semibold">
                    BEST VALUE
                  </div>
                )}
                <div className="text-2xl">{pack.icon}</div>
                <h3 className="mt-2 text-lg font-bold">{pack.title}</h3>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-2xl font-extrabold text-emerald-400">{pack.price}</span>
                  {pack.originalPrice && (
                    <span className="text-sm line-through text-gray-500">{pack.originalPrice}</span>
                  )}
                  {pack.savings && (
                    <span className="text-xs font-semibold text-emerald-300 bg-emerald-900/50 px-1.5 py-0.5 rounded">{pack.savings}</span>
                  )}
                </div>
                <ul className="mt-4 space-y-1.5 text-sm text-gray-300">
                  {pack.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-0.5 text-emerald-400">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="bg-gray-900 px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold sm:text-4xl mb-4">What you get</h2>
          <p className="text-center text-gray-400 mb-10">Every pack includes everything you need to go live — no guessing, no extras to buy.</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: '📁', title: 'JSON workflow files', desc: 'Import directly into n8n or Make in one click.' },
              { icon: '📖', title: 'Step-by-step setup guide', desc: 'PDF walkthrough — account connection, variables, activation.' },
              { icon: '🔧', title: 'Troubleshooting doc', desc: 'Common errors and fixes so you are never stuck.' },
              { icon: '♾️', title: 'Lifetime updates', desc: 'We update templates when platforms change. You get every update free.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 rounded-xl border border-gray-800 bg-gray-950 p-5">
                <div className="text-2xl shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Up and running in 3 steps</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-3 text-left">
            {[
              { step: "01", title: "Download your pack", desc: "Get the JSON template files + setup guide instantly after purchase." },
              { step: "02", title: "Import to n8n or Make", desc: "One-click import. Your workflow structure appears ready to configure." },
              { step: "03", title: "Connect & activate", desc: "Link your accounts (CRM, email, Slack), hit activate — automation starts immediately." },
            ].map((s) => (
              <div key={s.step} className="rounded-xl border border-gray-800 bg-gray-900 p-6">
                <div className="text-4xl font-extrabold text-emerald-500/30">{s.step}</div>
                <h3 className="mt-2 font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-900 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold">What our customers are saying</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                quote:
                  "I set up the lead capture workflow in 20 minutes. It now auto-syncs every form submission to my CRM and pings Slack. Saved me 3 hours a week immediately.",
                name: "James R.",
                role: "Agency Founder",
              },
              {
                quote:
                  "The invoice log template alone was worth it. I was manually copying Stripe data to a spreadsheet every week. Not anymore.",
                name: "Keiko T.",
                role: "Freelance Consultant",
              },
              {
                quote:
                  "Non-technical founder here. I was terrified of n8n. These templates made it click. I now run 4 automations I built myself.",
                name: "Daniel M.",
                role: "SMB Owner",
              },
            ].map((t) => (
              <div key={t.name} className="rounded-xl border border-gray-700 bg-gray-800 p-6">
                <p className="text-sm text-gray-300 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-4">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-3xl font-bold sm:text-4xl mb-10">Frequently asked questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl border border-gray-800 bg-gray-900 overflow-hidden">
                <button
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-gray-800 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-medium">{faq.q}</span>
                  <span className="text-emerald-400 shrink-0 text-xl">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-sm text-gray-400">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="bg-gray-900 px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-emerald-500 bg-emerald-500/10 text-2xl mb-6">
            🛡️
          </div>
          <h2 className="text-2xl font-bold">30-day money-back guarantee</h2>
          <p className="mt-4 text-gray-400">
            No questions asked. If you set up the templates and they do not work for your use case, we will give you a full refund within 30 days.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-emerald-900 to-gray-950 px-6 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Your next 10 hours of manual work<br />
            <span className="text-emerald-400">should be running on autopilot.</span>
          </h2>
          <p className="mt-4 text-gray-300">
            Join the waitlist and get a free Lead Capture → CRM starter workflow on launch day.
            Limited early-access pricing — lock it in now.
          </p>
          <div className="mt-8">
            {submitted ? (
              <p className="text-emerald-300 text-lg font-semibold">You&apos;re already on the list! ✅</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none sm:w-80"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-500 disabled:opacity-50"
                >
                  {loading ? 'Joining...' : 'Get Early Access'}
                </button>
              </form>
            )}
            <p className="mt-3 text-sm text-gray-500">Individual packs $49–$97 · Bundle $97 (all 5 — save $168) · One-time payment · 30-day guarantee</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">Frequently asked questions</h2>
          <div className="mt-10 space-y-4">
            {[
              {
                q: "Do I need to know how to code?",
                a: "Not at all. These are JSON workflow files you import with one click into n8n or Make (Integromat). The templates are fully pre-built — just connect your accounts and hit activate.",
              },
              {
                q: "Which automation tools do these work with?",
                a: "All templates are available in n8n and Make (Integromat) formats. n8n is open-source and self-hostable; Make has a generous free tier. You pick what fits your stack.",
              },
              {
                q: "What if the template doesn't work with my setup?",
                a: "We offer a 30-day money-back guarantee. If you can't get a template running in your environment, email us and we'll either fix it or refund you — no questions asked.",
              },
              {
                q: "How long does setup actually take?",
                a: "Most templates are live in under 5 minutes: import the JSON, connect your credentials (CRM, email, Slack), test, activate. Each pack includes a step-by-step setup guide.",
              },
              {
                q: "What CRMs and tools are supported?",
                a: "Templates connect to the most common business tools: HubSpot, Notion, Airtable, Google Sheets, Slack, Gmail, Outlook, Stripe, Shopify, WooCommerce, and more.",
              },
              {
                q: "Do I need a paid n8n or Make plan?",
                a: "Make has a free tier that covers most templates. n8n is free to self-host. Cloud pricing varies — check their sites for current plans. Our templates work within standard limits.",
              },
              {
                q: "What's included in the bundle vs individual packs?",
                a: "Individual packs are $49–$69 each. The Complete Bundle ($97) includes all 5 packs (20+ templates total), lifetime updates, priority support, and private Discord access — saving $168 vs buying separately.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-gray-800 bg-gray-900 px-6 py-4 open:border-emerald-500/50"
              >
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-white list-none">
                  {item.q}
                  <span className="ml-4 shrink-0 text-gray-400 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 py-8 text-center text-sm text-gray-500">
        <p>© 2026 Automation Workflow Templates. All rights reserved.</p>
        <p className="mt-2">
          <a
            href="https://x.com/3voai"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            Follow us on X @3voai
          </a>
        </p>
      </footer>
    </main>
  );
}

import WaitlistForm from "./WaitlistForm";

export default function Home() {
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
            Drag, drop, connect — and watch hours of manual work disappear.
          </p>
          <div className="mt-10">
            <WaitlistForm buttonText="Get Early Access" variant="hero" />
            <p className="mt-3 text-sm text-gray-500">$49–$97 one-time · No monthly fees · Import in under 5 minutes</p>
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

      {/* Problem */}
      <section className="px-6 py-20 text-center">
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
              <div key={item.title} className="rounded-xl border border-gray-800 bg-gray-900 p-5">
                <div className="text-2xl">{item.icon}</div>
                <h3 className="mt-2 font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Template packs */}
      <section className="bg-gray-900 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Workflow packs built for real business needs
          </h2>
          <p className="mt-4 text-center text-gray-400">
            Each pack includes full JSON templates, setup guide, and troubleshooting docs.
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
                  "All 5 workflow packs",
                  "20+ templates total",
                  "Lifetime updates",
                  "Priority support",
                  "Private Discord access",
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

      {/* CTA */}
      <section className="bg-gradient-to-br from-emerald-900 to-gray-950 px-6 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Your next 10 hours of manual work<br />
            <span className="text-emerald-400">should be running on autopilot.</span>
          </h2>
          <p className="mt-4 text-gray-300">
            Join the waitlist and get a free Lead Capture → CRM starter workflow on launch day,
            plus 30% off any pack.
          </p>
          <div className="mt-8">
            <WaitlistForm buttonText="Get Free Starter Template" variant="cta" />
            <p className="mt-3 text-sm text-gray-500">Packs $49–$97 · Bundle $97 · One-time payment</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 py-8 text-center text-sm text-gray-500">
        <p>© 2026 Automation Workflow Templates. All rights reserved.</p>
      </footer>
    </main>
  );
}

"use client";

import { useState } from "react";
import WaitlistForm from "./WaitlistForm";

const WHY = [
  {
    title: "One-time, not subscription.",
    description: "Plutio and Agiled charge $228+/yr. You pay once.",
  },
  {
    title: "Built for solopreneurs, not agencies.",
    description: "No bloated feature sets. Every tool in the bundle earns its place.",
  },
  {
    title: "Ready to use.",
    description: "Pre-configured templates and workflows — not a blank canvas you spend hours setting up.",
  },
];

const WHATS_INCLUDED = [
  "Automation workflow templates (n8n/Make compatible)",
  "Client onboarding checklist and CRM template",
  "Invoicing and payment tracking sheet",
  "Weekly review and planning system",
  "Solopreneur OS (Notion template)",
  "Email templates for outreach, follow-up, and delivery",
];

const FAQS = [
  {
    q: "Do I need specific software to use these?",
    a: "Most tools are Notion and Google Workspace compatible. Automation templates require n8n or Make (both have free tiers).",
  },
  {
    q: "Is this a subscription?",
    a: "No. One-time purchase. Lifetime access.",
  },
  {
    q: "What if a tool doesn't work for my workflow?",
    a: "The bundle is designed to be modular — use what works, ignore what doesn't.",
  },
  {
    q: "Are updates included?",
    a: "Yes. New tools and updates are included with your one-time purchase.",
  },
  {
    q: "I already use some of these tools. Is it still worth it?",
    a: "If even 2–3 tools in the bundle save you an hour a week, it pays for itself in the first month.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-gray-950 to-gray-950 px-6 py-24 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-600/20 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-300">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            One-time · No monthly fee · No renewals
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
            The solopreneur toolkit —<br />
            <span className="text-emerald-400">without the $228/yr SaaS bill.</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 sm:text-xl">
            A curated bundle of productivity tools built for people who run lean: automation
            workflows, client management, invoicing, and more. One-time access. No monthly fee.
            No renewals.
          </p>
          <div className="mt-10 flex justify-center">
            <WaitlistForm buttonText="Get Early Access — Free" />
          </div>
          <p className="mt-3 text-sm text-gray-500">$97 — one-time · No subscription · Lifetime access</p>
        </div>
      </section>

      {/* Why tools.3vo.ai */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold sm:text-4xl mb-12">Why tools.3vo.ai</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {WHY.map((item) => (
              <div key={item.title} className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-6">
                <h3 className="font-bold text-emerald-400 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-gray-900 px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold sm:text-4xl mb-4">What&apos;s included</h2>
          <p className="text-center text-gray-400 mb-10">Everything you need to run lean — no extras to buy.</p>
          <ul className="space-y-4">
            {WHATS_INCLUDED.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Market context */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl grid gap-6 sm:grid-cols-2 text-center">
          <div className="rounded-xl border border-gray-800 bg-gray-900 p-8">
            <div className="text-4xl font-extrabold text-emerald-400 mb-2">20%</div>
            <p className="text-sm text-gray-400">of solopreneurs&apos; work time spent on admin tasks <span className="text-gray-600">(McKinsey, 2022)</span></p>
          </div>
          <div className="rounded-xl border border-gray-800 bg-gray-900 p-8">
            <div className="text-4xl font-extrabold text-emerald-400 mb-2">$150–300</div>
            <p className="text-sm text-gray-400">average monthly SaaS spend for a freelancer — you pay once and done</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-900 px-6 py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-3xl font-bold sm:text-4xl mb-10">Frequently asked questions</h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="rounded-xl border border-gray-800 bg-gray-950 overflow-hidden">
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

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-emerald-900 to-gray-950 px-6 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Stop paying monthly for tools<br />
            <span className="text-emerald-400">you can own once.</span>
          </h2>
          <p className="mt-4 text-gray-300">
            Everything a solopreneur needs to run lean — automation, client management, invoicing,
            planning. One-time. Yours forever.
          </p>
          <div className="mt-8 flex justify-center">
            <WaitlistForm buttonText="Get Early Access — Free" variant="cta" />
          </div>
          <p className="mt-3 text-sm text-gray-500">$97 — one-time · No subscription · Lifetime access</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 py-10 text-center text-sm text-gray-500">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a href="/about" className="hover:text-gray-300 transition">About</a>
            <a href="/contact" className="hover:text-gray-300 transition">Contact</a>
            <a href="/privacy" className="hover:text-gray-300 transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-gray-300 transition">Terms of Use</a>
            <a href="https://x.com/3voai" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">X @3voai</a>
          </div>
          <p>© 2026 tools.3vo.ai — The 3vo.ai team</p>
        </div>
      </footer>
    </main>
  );
}

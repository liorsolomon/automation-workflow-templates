"use client";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-20">
      <div className="mx-auto max-w-lg">
        <a href="/" className="text-sm text-emerald-400 hover:text-emerald-300 transition">← Back to home</a>
        <h1 className="mt-6 text-4xl font-extrabold">Contact us</h1>
        <p className="mt-4 text-gray-400">
          Questions about templates, custom workflow builds, refunds, or anything else — we typically respond within 24 hours.
        </p>
        {submitted ? (
          <div className="mt-10 rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-8 text-center">
            <p className="text-xl font-bold">Message sent!</p>
            <p className="mt-2 text-gray-400">We&apos;ll get back to you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-5">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-300" htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-600 focus:border-emerald-500 focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-300" htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-600 focus:border-emerald-500 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-300" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-600 focus:border-emerald-500 focus:outline-none"
                placeholder="How can we help?"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-500"
            >
              Send message
            </button>
          </form>
        )}
        <div className="mt-12 border-t border-gray-800 pt-8 text-sm text-gray-500 flex gap-6">
          <a href="/about" className="hover:text-gray-300 transition">About</a>
          <a href="/privacy" className="hover:text-gray-300 transition">Privacy Policy</a>
          <a href="/terms" className="hover:text-gray-300 transition">Terms of Use</a>
        </div>
      </div>
    </main>
  );
}

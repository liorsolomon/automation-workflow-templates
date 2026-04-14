"use client";

import { useState } from "react";

interface WaitlistFormProps {
  buttonText?: string;
  variant?: "hero" | "cta";
}

export default function WaitlistForm({
  buttonText = "Get Early Access",
  variant = "hero",
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setSubmitted(true);
        if (typeof window !== "undefined" && (window as any).posthog) {
          (window as any).posthog.capture("waitlist_submitted", { email });
        }
        if (typeof window !== "undefined" && (window as any).fbq) {
          (window as any).fbq("track", "Lead");
        }
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "sign_up", { method: "waitlist" });
        }
      }
    } catch {
      // fail silently
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    if (variant === "cta") {
      return (
        <p className="text-emerald-300 text-lg font-semibold">
          You&apos;re already on the list! ✅
        </p>
      );
    }
    return (
      <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-emerald-300">
        <p className="text-lg font-semibold">You&apos;re on the list! 🎉</p>
        <p className="mt-1 text-sm">We&apos;ll send you launch-day pricing and a free starter workflow.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 sm:flex-row sm:justify-center"
    >
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
        {loading ? "Joining..." : buttonText}
      </button>
    </form>
  );
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <a href="/" className="text-sm text-emerald-400 hover:text-emerald-300 transition">← Back to home</a>
        <h1 className="mt-6 text-4xl font-extrabold">Privacy Policy</h1>
        <p className="mt-2 text-sm text-gray-500">Last updated: April 2026</p>
        <div className="mt-8 space-y-6 text-gray-300 leading-relaxed">
          <h2 className="text-xl font-bold text-white">Information we collect</h2>
          <p>
            We collect your email address when you join our waitlist or make a purchase. We may also
            collect usage data (page views, clicks) through analytics tools to improve our products.
          </p>
          <h2 className="text-xl font-bold text-white">How we use your information</h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-400">
            <li>To deliver your purchased products</li>
            <li>To send product updates and launch announcements (you can unsubscribe at any time)</li>
            <li>To respond to support requests</li>
            <li>To improve our products and website</li>
          </ul>
          <h2 className="text-xl font-bold text-white">Sharing your information</h2>
          <p>
            We do not sell or rent your personal data. We use third-party services (Resend for email,
            Supabase for data storage, Vercel for hosting) that process data on our behalf under
            appropriate data processing agreements.
          </p>
          <h2 className="text-xl font-bold text-white">Cookies</h2>
          <p>
            We use essential cookies for site functionality. Analytics cookies may be used to understand
            traffic patterns. No advertising cookies are used.
          </p>
          <h2 className="text-xl font-bold text-white">Your rights</h2>
          <p>
            You may request deletion of your personal data at any time by emailing{" "}
            <a href="mailto:hello@3vo.ai" className="text-emerald-400 hover:text-emerald-300 underline">hello@3vo.ai</a>.
          </p>
          <h2 className="text-xl font-bold text-white">Contact</h2>
          <p>
            Privacy questions? Email us at{" "}
            <a href="mailto:hello@3vo.ai" className="text-emerald-400 hover:text-emerald-300 underline">hello@3vo.ai</a>.
          </p>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-sm text-gray-500 flex gap-6">
          <a href="/about" className="hover:text-gray-300 transition">About</a>
          <a href="/contact" className="hover:text-gray-300 transition">Contact</a>
          <a href="/terms" className="hover:text-gray-300 transition">Terms of Use</a>
        </div>
      </div>
    </main>
  );
}

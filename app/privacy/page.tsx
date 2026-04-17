export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <a href="/" className="text-sm text-blue-400 hover:text-blue-300 transition">← Back to home</a>
        <h1 className="mt-6 text-4xl font-extrabold">Privacy Policy</h1>
        <p className="mt-2 text-xs text-gray-500">Last updated: April 2026</p>
        <div className="mt-8 space-y-6 text-gray-300 leading-relaxed">
          <p>
            Automation Workflow Templates is a product of 3vo.ai. This policy explains how we handle
            your information.
          </p>
          <h2 className="text-xl font-bold text-white pt-2">What we collect</h2>
          <p>
            When you purchase, we collect your name, email address, and payment details (processed
            securely via Stripe). We also collect standard analytics data (page views, device type)
            to improve our products.
          </p>
          <h2 className="text-xl font-bold text-white pt-2">How we use it</h2>
          <p>
            We use your email to deliver your purchase and send occasional product updates. You can
            unsubscribe at any time. We do not sell your data to third parties.
          </p>
          <h2 className="text-xl font-bold text-white pt-2">Cookies</h2>
          <p>
            We use analytics cookies (Google Analytics) to understand how our site is used. You can
            disable cookies in your browser at any time.
          </p>
          <h2 className="text-xl font-bold text-white pt-2">Contact</h2>
          <p>
            Questions about your data? Email{" "}
            <a href="mailto:hello@3vo.ai" className="text-blue-400 hover:text-blue-300 underline">
              hello@3vo.ai
            </a>
          </p>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-sm text-gray-500 flex gap-6">
          <a href="/about" className="hover:text-gray-300 transition">About</a>
          <a href="/terms" className="hover:text-gray-300 transition">Terms of Use</a>
          <a href="/contact" className="hover:text-gray-300 transition">Contact</a>
        </div>
      </div>
    </main>
  );
}

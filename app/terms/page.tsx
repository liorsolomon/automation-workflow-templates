export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <a href="/" className="text-sm text-emerald-400 hover:text-emerald-300 transition">← Back to home</a>
        <h1 className="mt-6 text-4xl font-extrabold">Terms of Use</h1>
        <p className="mt-2 text-sm text-gray-500">Last updated: April 2026</p>
        <div className="mt-8 space-y-6 text-gray-300 leading-relaxed">
          <h2 className="text-xl font-bold text-white">1. License</h2>
          <p>
            Upon purchase, you receive a personal, non-exclusive, non-transferable license to use the
            workflow templates for your own business projects. You may not resell, redistribute, or
            share the template files with others outside your organization.
          </p>
          <h2 className="text-xl font-bold text-white">2. Refund policy</h2>
          <p>
            We offer a 30-day money-back guarantee. If you are not satisfied with your purchase, contact
            us at <a href="mailto:hello@3vo.ai" className="text-emerald-400 hover:text-emerald-300 underline">hello@3vo.ai</a> within
            30 days of purchase for a full refund.
          </p>
          <h2 className="text-xl font-bold text-white">3. Acceptable use</h2>
          <p>
            Templates may be used for commercial or personal automation projects. You may not resell
            or redistribute the templates as-is or in modified form as competing products.
          </p>
          <h2 className="text-xl font-bold text-white">4. Disclaimer</h2>
          <p>
            Templates are provided &quot;as is.&quot; Automation results depend on your specific tool versions,
            account configurations, and third-party API behavior. We do not guarantee specific
            outcomes or uptime of connected services.
          </p>
          <h2 className="text-xl font-bold text-white">5. Governing law</h2>
          <p>
            These terms are governed by the laws of the State of Delaware, United States.
          </p>
          <h2 className="text-xl font-bold text-white">6. Contact</h2>
          <p>
            Questions about these terms? Email{" "}
            <a href="mailto:hello@3vo.ai" className="text-emerald-400 hover:text-emerald-300 underline">hello@3vo.ai</a>.
          </p>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-sm text-gray-500 flex gap-6">
          <a href="/about" className="hover:text-gray-300 transition">About</a>
          <a href="/contact" className="hover:text-gray-300 transition">Contact</a>
          <a href="/privacy" className="hover:text-gray-300 transition">Privacy Policy</a>
        </div>
      </div>
    </main>
  );
}

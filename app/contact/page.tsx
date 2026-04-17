export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <a href="/" className="text-sm text-blue-400 hover:text-blue-300 transition">← Back to home</a>
        <h1 className="mt-6 text-4xl font-extrabold">Contact</h1>
        <div className="mt-8 space-y-6 text-gray-300 leading-relaxed">
          <p>
            Questions about a workflow template? Need a refund? Want a custom automation built for
            your stack? Email us at{" "}
            <a href="mailto:hello@3vo.ai" className="text-blue-400 hover:text-blue-300 underline">
              hello@3vo.ai
            </a>
          </p>
          <p>
            For refund requests, include your order email and the template name. We process all
            30-day money-back guarantee requests within 1 business day.
          </p>
          <p>
            Follow us on{" "}
            <a href="https://x.com/3voai" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
              X @3voai
            </a>{" "}
            for new template releases and automation tips.
          </p>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-sm text-gray-500 flex gap-6">
          <a href="/about" className="hover:text-gray-300 transition">About</a>
          <a href="/privacy" className="hover:text-gray-300 transition">Privacy Policy</a>
          <a href="/terms" className="hover:text-gray-300 transition">Terms of Use</a>
        </div>
      </div>
    </main>
  );
}

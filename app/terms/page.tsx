export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <a href="/" className="text-sm text-blue-400 hover:text-blue-300 transition">← Back to home</a>
        <h1 className="mt-6 text-4xl font-extrabold">Terms of Use</h1>
        <p className="mt-2 text-xs text-gray-500">Last updated: April 2026</p>
        <div className="mt-8 space-y-6 text-gray-300 leading-relaxed">
          <p>
            By purchasing or using Automation Workflow Templates, you agree to these terms.
          </p>
          <h2 className="text-xl font-bold text-white pt-2">License</h2>
          <p>
            Templates are licensed for personal or business use by the purchaser. You may not
            resell, share, or redistribute templates without written permission.
          </p>
          <h2 className="text-xl font-bold text-white pt-2">Refund policy</h2>
          <p>
            We offer a 30-day money-back guarantee. If a template doesn&apos;t work for your
            environment, email hello@3vo.ai with your order details and we&apos;ll either fix it
            or refund you in full — no questions asked.
          </p>
          <h2 className="text-xl font-bold text-white pt-2">Intellectual property</h2>
          <p>
            All workflow templates, copy, and design on this site are the intellectual property of
            3vo.ai. Unauthorized reproduction or redistribution is prohibited.
          </p>
          <h2 className="text-xl font-bold text-white pt-2">Contact</h2>
          <p>
            Questions?{" "}
            <a href="mailto:hello@3vo.ai" className="text-blue-400 hover:text-blue-300 underline">
              hello@3vo.ai
            </a>
          </p>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-sm text-gray-500 flex gap-6">
          <a href="/about" className="hover:text-gray-300 transition">About</a>
          <a href="/privacy" className="hover:text-gray-300 transition">Privacy Policy</a>
          <a href="/contact" className="hover:text-gray-300 transition">Contact</a>
        </div>
      </div>
    </main>
  );
}

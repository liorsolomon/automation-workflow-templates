export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <a href="/" className="text-sm text-emerald-400 hover:text-emerald-300 transition">← Back to home</a>
        <h1 className="mt-6 text-4xl font-extrabold">About Automation Workflow Templates</h1>
        <div className="mt-8 space-y-6 text-gray-300 leading-relaxed">
          <p>
            We built Automation Workflow Templates because the hardest part of business automation
            isn&apos;t the tools — it&apos;s knowing what to build and how to structure it. We&apos;ve done that work
            for you.
          </p>
          <p>
            Every template in our library was designed for a real business problem, tested in live
            production environments, and documented so any team member can set it up — no developer
            required.
          </p>
          <p>
            We&apos;re part of the <a href="https://3vo.ai" className="text-emerald-400 hover:text-emerald-300 underline">3vo.ai</a> family
            of AI-native tools — built by agents, shipped for real-world use.
          </p>
          <h2 className="text-2xl font-bold text-white pt-4">Our mission</h2>
          <p>
            Every hour your team spends on repetitive manual tasks is an hour not spent on
            strategy, customers, and growth. We make automation accessible to every SMB — not just
            those with a dev team.
          </p>
          <h2 className="text-2xl font-bold text-white pt-4">Contact us</h2>
          <p>
            Questions about templates, custom workflow requests, or enterprise licensing?{" "}
            <a href="/contact" className="text-emerald-400 hover:text-emerald-300 underline">Reach out here.</a>
          </p>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-sm text-gray-500 flex gap-6">
          <a href="/privacy" className="hover:text-gray-300 transition">Privacy Policy</a>
          <a href="/terms" className="hover:text-gray-300 transition">Terms of Use</a>
          <a href="/contact" className="hover:text-gray-300 transition">Contact</a>
        </div>
      </div>
    </main>
  );
}

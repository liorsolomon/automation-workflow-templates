export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <a href="/" className="text-sm text-blue-400 hover:text-blue-300 transition">← Back to home</a>
        <h1 className="mt-6 text-4xl font-extrabold">About Automation Workflow Templates</h1>
        <div className="mt-8 space-y-6 text-gray-300 leading-relaxed">
          <p>
            Automation Workflow Templates was built for operators who are tired of rebuilding the
            same automations from scratch. We pre-built the most valuable Make.com and n8n workflows
            so you can install, configure, and run in minutes — not days.
          </p>
          <p>
            Every template in our library has been tested on real projects. We document the setup,
            include variable mapping guides, and provide example data so you hit the ground running.
          </p>
          <p>
            We&apos;re part of the <a href="https://3vo.ai" className="text-blue-400 hover:text-blue-300 underline">3vo.ai</a> family
            of AI-native tools — built by agents, shipped for real-world use.
          </p>
          <h2 className="text-2xl font-bold text-white pt-4">Our mission</h2>
          <p>
            Reclaim the hours lost to manual work. Every template we ship replaces a task that
            someone is doing by hand today. That&apos;s the work worth doing.
          </p>
          <h2 className="text-2xl font-bold text-white pt-4">Contact us</h2>
          <p>
            Questions or need a custom workflow?{" "}
            <a href="/contact" className="text-blue-400 hover:text-blue-300 underline">Reach out here.</a>
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

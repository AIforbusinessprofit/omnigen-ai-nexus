// File: src/components/Hero.tsx

export function Hero() {
  return (
    <section className="bg-black text-white py-24 px-6 lg:px-32 flex flex-col lg:flex-row items-center justify-between">
      <div className="max-w-xl">
        <h1 className="text-5xl font-bold leading-tight mb-6">
          Smarter Workflows. Scalable Growth.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">
            AI-Powered Solutions for MSMEs
          </span>
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Omnigen AI eliminates growth bottlenecks using intelligent voice agents, workflow automation, and content generation tools — no technical expertise required.
        </p>
        <div className="flex gap-4">
          <a href="#contact" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium">
            Get Started
          </a>
          <a href="#services" className="border border-purple-600 text-purple-400 hover:text-white hover:bg-purple-600 px-6 py-3 rounded-lg font-medium">
            See Use Cases
          </a>
        </div>
      </div>

      <div className="mt-10 lg:mt-0">
        <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl shadow-xl p-6 w-80 text-center border border-gray-700">
          <h3 className="text-xl font-semibold text-white mb-2">Omnigen AI Nexus</h3>
          <p className="text-gray-400 text-sm">
            Unlock growth with intelligent automation — from lead capture to content to customer experience.
          </p>
        </div>
      </div>
    </section>
  );
}

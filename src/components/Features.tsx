const features = [
  {
    title: "AI Voice Agents",
    description: "Handle calls, schedule appointments, and onboard customers with human-like AI voice agents—24/7 availability, no downtime.",
  },
  {
    title: "Process Automation",
    description: "Streamline operations and eliminate repetitive workflows with our adaptive automation modules, tailored for MSMEs.",
  },
  {
    title: "SocialBoost – Content AI",
    description: "Automate personalized content creation for every platform. From captions to carousels—your AI social team in a box.",
  },
  {
    title: "Multimodal Intelligence",
    description: "Combine text, voice, and video AI to engage users across every touchpoint. Smart, scalable, and instantly deployable.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">What Omnigen AI Can Do</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition">
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-gray-300">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

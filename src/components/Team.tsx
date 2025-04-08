
import { Linkedin, Twitter, Mail } from "lucide-react";

const team = [
  {
    name: "Dr. Emily Chen",
    role: "Chief AI Officer & Co-Founder",
    bio: "Former lead researcher at Stanford's AI Lab with 15+ years of experience in machine learning and neural networks.",
    image: "https://randomuser.me/api/portraits/women/23.jpg"
  },
  {
    name: "David Rodriguez",
    role: "CEO & Co-Founder",
    bio: "Serial entrepreneur with 3 successful tech exits. Visionary leader focused on AI's transformative potential.",
    image: "https://randomuser.me/api/portraits/men/42.jpg"
  },
  {
    name: "Dr. James Wilson",
    role: "Head of Research",
    bio: "PhD in Computational Linguistics with groundbreaking work in natural language processing and sentiment analysis.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Sophia Patel",
    role: "VP of Engineering",
    bio: "20 years of software architecture experience specializing in scalable AI systems and cloud infrastructure.",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

const Team = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet the <span className="gradient-text">Brilliant Minds</span> Behind Omnigen AI
          </h2>
          <p className="text-lg text-gray-600">
            Our team combines decades of expertise in artificial intelligence, machine learning, and business transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm card-hover animate-fade-in animate-delay-1"
            >
              <div className="aspect-square relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-sm text-gray-200">{member.role}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-500 hover:text-omnigen-purple transition-colors">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-omnigen-purple transition-colors">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-omnigen-purple transition-colors">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

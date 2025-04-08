
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Team from "@/components/Team";
import { ArrowRight, BookOpen, Target, Users, Award, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description: "We relentlessly pursue cutting-edge solutions that push the boundaries of what's possible with AI."
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "We work as an extension of your team, aligning our goals with your business objectives."
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "We stay at the forefront of AI research, continuously improving our methodologies and technologies."
  },
  {
    icon: Award,
    title: "Ethical Excellence",
    description: "We prioritize responsible AI development with transparency, fairness, and privacy at its core."
  }
];

const milestones = [
  {
    year: "2018",
    title: "Omnigen AI Founded",
    description: "Started with a team of 5 AI researchers from Stanford and MIT."
  },
  {
    year: "2019",
    title: "First Enterprise Client",
    description: "Secured partnership with Fortune 500 healthcare provider."
  },
  {
    year: "2020",
    title: "ML Patent Approval",
    description: "Groundbreaking algorithm for minimal-data learning approved."
  },
  {
    year: "2021",
    title: "Series A Funding",
    description: "$28M in funding to expand research and development."
  },
  {
    year: "2022",
    title: "Global Expansion",
    description: "Opened offices in London, Singapore, and Toronto."
  },
  {
    year: "2023",
    title: "100+ Enterprise Clients",
    description: "Reached milestone of 100+ enterprise implementations."
  }
];

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="pt-28 pb-20 bg-gradient-to-br from-omnigen-purple to-omnigen-darkpurple text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-omnigen-teal">Omnigen AI</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                We're on a mission to democratize advanced AI capabilities and empower organizations to solve their most complex challenges.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold mb-6">
                  Our <span className="gradient-text">Story</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Founded in 2018 by a team of AI researchers from Stanford and MIT, Omnigen AI was born from a simple yet powerful belief: artificial intelligence should be accessible, practical, and transformative for businesses of all sizes.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  What began as a research project to develop more efficient algorithms has evolved into a comprehensive AI solutions provider serving clients across healthcare, finance, manufacturing, and retail sectors worldwide.
                </p>
                <p className="text-lg text-gray-600">
                  Today, with offices in San Francisco, London, Singapore, and Toronto, our team of 125+ AI specialists continues to pioneer innovations that make advanced AI capabilities accessible and impactful for organizations globally.
                </p>
              </div>
              
              <div className="relative animate-fade-in animate-delay-2">
                <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1558402529-d2638a7023e9?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3" 
                    alt="Omnigen AI Team" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-omnigen-teal/20 rounded-full blur-3xl"></div>
                <div className="absolute -top-8 -left-8 w-40 h-40 bg-omnigen-purple/20 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="gradient-text">Values</span>
              </h2>
              <p className="text-lg text-gray-600">
                These core principles guide our approach to AI development and client partnerships.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "bg-white rounded-xl p-8 shadow-sm card-hover animate-fade-in",
                    `animate-delay-${index + 1}`
                  )}
                >
                  <div className="w-14 h-14 bg-omnigen-purple/10 rounded-full flex items-center justify-center mb-6">
                    <value.icon size={28} className="text-omnigen-purple" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="gradient-text">Journey</span>
              </h2>
              <p className="text-lg text-gray-600">
                Key milestones in Omnigen AI's growth and development.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index} 
                    className={cn(
                      "relative flex items-start animate-fade-in",
                      `animate-delay-${index % 3 + 1}`,
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse text-right"
                    )}
                  >
                    <div className={cn(
                      "absolute left-1/2 transform -translate-x-1/2 z-10",
                      index % 2 === 0 ? "md:left-1/2 md:-translate-x-1/2" : "md:left-1/2 md:-translate-x-1/2"
                    )}>
                      <div className="w-10 h-10 rounded-full bg-omnigen-purple flex items-center justify-center">
                        <Check className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    
                    <div className={cn(
                      "ml-12 md:ml-0 md:w-1/2 md:px-8 pb-8",
                      index % 2 === 0 ? "md:pr-16 md:pl-0" : "md:pl-16 md:pr-0"
                    )}>
                      <div className="bg-white p-6 rounded-xl shadow-sm">
                        <span className="text-sm font-semibold text-omnigen-teal">{milestone.year}</span>
                        <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <Team />
        
        <section className="py-20 bg-omnigen-dark text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join the Omnigen AI <span className="text-omnigen-teal">Journey</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Whether you're looking to transform your business with AI or join our growing team, we'd love to connect with you.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-omnigen-teal text-omnigen-dark hover:bg-white">
                  Explore Careers
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;

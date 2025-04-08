
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const caseStudies = [
  {
    title: "Healthcare Diagnostics Revolution",
    description: "How our AI platform helped a leading hospital reduce diagnostic errors by 37% and improve patient outcomes.",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
  },
  {
    title: "Financial Fraud Detection",
    description: "Implementing our predictive models helped a global bank prevent $14M in fraudulent transactions in just 3 months.",
    category: "Finance",
    image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
  },
  {
    title: "Supply Chain Optimization",
    description: "Our AI-driven system reduced inventory costs by 22% while improving product availability for this retail giant.",
    category: "Retail",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
  }
];

const CaseStudies = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div className="max-w-2xl animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Delivering Real-World <span className="gradient-text">Impact</span>
            </h2>
            <p className="text-lg text-gray-600">
              See how our AI solutions are transforming businesses across industries.
            </p>
          </div>
          <Button variant="outline" className="mt-6 md:mt-0 border-omnigen-purple text-omnigen-purple hover:bg-omnigen-purple/10 animate-fade-in">
            View All Case Studies
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={cn(
                "rounded-xl overflow-hidden shadow-md card-hover animate-fade-in",
                `animate-delay-${index + 1}`
              )}
            >
              <div className="aspect-video relative">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <span className="absolute bottom-4 left-4 text-white text-sm font-medium bg-omnigen-teal px-3 py-1 rounded-full">
                  {study.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                <p className="text-gray-600 mb-4">{study.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-omnigen-purple font-medium"
                >
                  Read Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

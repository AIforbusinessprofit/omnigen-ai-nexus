
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, ArrowUpRight, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const caseStudies = [
  {
    title: "Healthcare Diagnostics Revolution",
    description: "How our AI platform helped a leading hospital reduce diagnostic errors by 37% and improve patient outcomes.",
    category: "Healthcare",
    results: [
      "37% reduction in diagnostic errors",
      "28% faster patient diagnoses",
      "22% improvement in treatment effectiveness"
    ],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
    featured: true
  },
  {
    title: "Financial Fraud Detection",
    description: "Implementing our predictive models helped a global bank prevent $14M in fraudulent transactions in just 3 months.",
    category: "Finance",
    results: [
      "$14M in prevented fraud",
      "93% reduction in false positives",
      "Real-time detection capabilities"
    ],
    image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
    featured: true
  },
  {
    title: "Supply Chain Optimization",
    description: "Our AI-driven system reduced inventory costs by 22% while improving product availability for this retail giant.",
    category: "Retail",
    results: [
      "22% reduction in inventory costs",
      "18% improvement in product availability",
      "35% decrease in stockouts"
    ],
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
    featured: false
  },
  {
    title: "Personalized Learning Platform",
    description: "Our adaptive learning system improved student engagement and outcomes for a global education provider.",
    category: "Education",
    results: [
      "31% improvement in student retention",
      "26% higher completion rates",
      "Personalized learning paths for 250,000+ students"
    ],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
    featured: false
  },
  {
    title: "Manufacturing Quality Control",
    description: "Our computer vision solution reduced defects by 76% in a high-precision manufacturing environment.",
    category: "Manufacturing",
    results: [
      "76% reduction in defects",
      "43% decrease in quality control costs",
      "Real-time defect detection at scale"
    ],
    image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
    featured: false
  },
  {
    title: "Customer Service Automation",
    description: "Our NLP system transformed customer support for a telecoms provider, handling 65% of inquiries automatically.",
    category: "Telecommunications",
    results: [
      "65% of inquiries automated",
      "87% customer satisfaction rate",
      "52% reduction in response time"
    ],
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
    featured: false
  }
];

const categories = ["All", "Healthcare", "Finance", "Retail", "Education", "Manufacturing", "Telecommunications"];

const CaseStudiesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="pt-28 pb-20 bg-gradient-to-br from-omnigen-purple to-omnigen-darkpurple text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Transforming Industries with <span className="text-omnigen-teal">AI Innovation</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Explore how our AI solutions have delivered measurable results for leading organizations across sectors.
              </p>
              <Button className="bg-omnigen-teal text-omnigen-dark hover:bg-white">
                Get Your Success Story
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <h2 className="text-3xl font-bold mb-6 md:mb-0">
                Featured <span className="gradient-text">Case Studies</span>
              </h2>
              <div className="flex items-center gap-4">
                <Button variant="outline" className="flex items-center gap-2 border-omnigen-purple text-omnigen-purple">
                  <Filter size={18} />
                  Filter by Industry
                </Button>
              </div>
            </div>

            <div className="flex overflow-x-auto gap-3 pb-4 mb-10 scrollbar-none">
              {categories.map((category, index) => (
                <Button 
                  key={index} 
                  variant={index === 0 ? "default" : "outline"} 
                  className={index === 0 ? "bg-omnigen-purple" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className={cn(
                    "rounded-xl overflow-hidden shadow-md card-hover animate-fade-in",
                    `animate-delay-${index % 3 + 1}`
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
                    {study.featured && (
                      <span className="absolute top-4 right-4 text-white text-sm font-medium bg-omnigen-purple px-3 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                    <p className="text-gray-600 mb-4">{study.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <span className="mr-2 text-omnigen-teal">✓</span>
                            <span className="text-gray-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <a
                      href="#"
                      className="inline-flex items-center text-omnigen-purple font-medium group"
                    >
                      Read Full Case Study
                      <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button variant="outline" className="border-omnigen-purple text-omnigen-purple hover:bg-omnigen-purple/10">
                Load More Case Studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-14 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Interested in becoming our <span className="gradient-text">next success story?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Let's discuss how our AI solutions can transform your business challenges into opportunities for growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-omnigen-purple hover:bg-omnigen-darkpurple text-white">
                  Schedule a Consultation
                </Button>
                <Button variant="outline" className="border-omnigen-purple text-omnigen-purple hover:bg-omnigen-purple/10">
                  See All Industries
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

export default CaseStudiesPage;

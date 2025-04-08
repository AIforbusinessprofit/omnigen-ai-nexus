
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Brain, Database, LineChart, Shield, Zap, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Brain,
    title: "Machine Learning Solutions",
    description: "Custom machine learning models tailored to your specific business challenges. Our algorithms adapt and improve with minimal training data.",
    features: [
      "Supervised & Unsupervised Learning",
      "Transfer Learning Techniques",
      "Continuous Model Improvement",
      "Performance Monitoring"
    ]
  },
  {
    icon: Database,
    title: "Data Processing & Analytics",
    description: "Transform your raw data into actionable insights. Our data processing pipeline cleans, structures, and analyzes your information.",
    features: [
      "Automated ETL Processes",
      "Real-time Data Processing",
      "Data Warehousing Solutions",
      "Custom Dashboards & Reporting"
    ]
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description: "Forecast trends, customer behavior, and market shifts with our powerful predictive models. Stay ahead of the competition with data-driven foresight.",
    features: [
      "Time Series Analysis",
      "Customer Behavior Prediction",
      "Market Trend Forecasting",
      "Risk Assessment Models"
    ]
  },
  {
    icon: Cpu,
    title: "Natural Language Processing",
    description: "Understand, interpret, and generate human language with our advanced NLP solutions. Extract insights from text data at scale.",
    features: [
      "Sentiment Analysis",
      "Entity Recognition",
      "Document Summarization",
      "Multilingual Support"
    ]
  },
  {
    icon: Shield,
    title: "AI Security & Compliance",
    description: "Ensure your AI implementations meet the highest security standards and compliance requirements. Our solutions prioritize data privacy and protection.",
    features: [
      "Privacy-Preserving Techniques",
      "Model Encryption",
      "Bias Detection & Mitigation",
      "Regulatory Compliance"
    ]
  },
  {
    icon: Zap,
    title: "Enterprise AI Integration",
    description: "Seamlessly integrate AI capabilities into your existing infrastructure. Our solutions work with your current systems for minimal disruption.",
    features: [
      "API-First Architecture",
      "Legacy System Integration",
      "Microservices Support",
      "Scalable Deployment Options"
    ]
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="pt-28 pb-20 bg-gradient-to-br from-omnigen-purple to-omnigen-darkpurple text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our AI <span className="text-omnigen-teal">Services</span> & Solutions
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Comprehensive, cutting-edge AI solutions designed to transform your business and drive measurable outcomes.
              </p>
              <Button className="bg-omnigen-teal text-omnigen-dark hover:bg-white">
                Get Started
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "bg-white rounded-xl p-8 shadow-sm card-hover animate-fade-in",
                    `animate-delay-${index % 3 + 1}`
                  )}
                >
                  <div className="w-14 h-14 bg-omnigen-purple/10 rounded-xl flex items-center justify-center mb-6">
                    <service.icon size={28} className="text-omnigen-purple" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 text-omnigen-teal">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full border-omnigen-purple text-omnigen-purple hover:bg-omnigen-purple/10">
                    Learn More
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="gradient-text">Implementation</span> Process
              </h2>
              <p className="text-lg text-gray-600">
                We follow a proven methodology to ensure successful AI integration that delivers measurable results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {["Discovery", "Design", "Development", "Deployment"].map((phase, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "relative p-6 rounded-xl border border-gray-200 bg-white animate-fade-in",
                    `animate-delay-${index + 1}`
                  )}
                >
                  <div className="w-12 h-12 rounded-full bg-omnigen-purple/10 flex items-center justify-center mb-4">
                    <span className="text-omnigen-purple font-bold text-xl">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{phase}</h3>
                  <p className="text-gray-600">
                    {index === 0 && "We analyze your business needs and data landscape to identify the right AI approach."}
                    {index === 1 && "Our team designs a customized solution architecture tailored to your specific requirements."}
                    {index === 2 && "We develop and train models using your data, with continuous testing and refinement."}
                    {index === 3 && "Seamless integration with your existing systems and ongoing optimization."}
                  </p>
                  
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#5740BA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-omnigen-dark text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Schedule a consultation with our experts to discuss your specific needs and discover how Omnigen AI can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-omnigen-teal text-omnigen-dark hover:bg-white">
                  Schedule a Consultation
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  View Case Studies
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

export default ServicesPage;


import { CheckCircle2, Brain, Database, LineChart, Shield, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Brain,
    title: "Advanced Machine Learning",
    description: "Our proprietary algorithms adapt to your unique business needs with minimal training data.",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: Database,
    title: "Intelligent Data Processing",
    description: "Transform unstructured data into actionable insights with our powerful processing engine.",
    color: "bg-purple-50 text-purple-600"
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description: "Anticipate market shifts and customer behavior with precision forecasting models.",
    color: "bg-green-50 text-green-600"
  },
  {
    icon: Shield,
    title: "Secure AI Implementation",
    description: "Enterprise-grade security with encrypted models and privacy-preserving techniques.",
    color: "bg-red-50 text-red-600"
  },
  {
    icon: Zap,
    title: "Rapid Integration",
    description: "Seamless integration with your existing infrastructure, minimizing disruption.",
    color: "bg-amber-50 text-amber-600"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI-Powered Solutions for{" "}
            <span className="gradient-text">Every Challenge</span>
          </h2>
          <p className="text-lg text-gray-600">
            Our comprehensive suite of AI technologies enables businesses to innovate faster and operate smarter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "bg-white rounded-xl p-6 shadow-sm card-hover animate-fade-in",
                `animate-delay-${index % 5}`
              )}
            >
              <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4", feature.color)}>
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
              <div className="mt-4 flex items-center text-omnigen-purple">
                <CheckCircle2 size={16} className="mr-2" />
                <span className="text-sm font-medium">Enterprise Ready</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

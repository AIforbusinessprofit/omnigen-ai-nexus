
import { useState } from "react";
import { MapPin, Phone, Mail, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
      // Reset form
      setFormState({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section className="py-20" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to <span className="gradient-text">Transform</span> Your Business?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Connect with our team of AI experts to explore how Omnigen AI can drive innovation and efficiency in your organization.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="bg-omnigen-purple/10 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-omnigen-purple" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Headquarters</h4>
                    <p className="text-gray-600">
                      Pattabhipuram 3rd lane extension<br />
                      Guntur, 522006
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-omnigen-purple/10 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-omnigen-purple" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Phone</h4>
                    <p className="text-gray-600">+1 (800) 555-0123</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-omnigen-purple/10 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-omnigen-purple" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Email</h4>
                    <p className="text-gray-600">info@omnigenai.com</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-omnigen-dark rounded-xl text-white">
                <h4 className="text-xl font-bold mb-3">Ready for a Demo?</h4>
                <p className="mb-4">Schedule a personalized demo to see our AI solutions in action.</p>
                <Button className="bg-omnigen-teal hover:bg-omnigen-teal/90 text-omnigen-dark">
                  Book a Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm animate-fade-in animate-delay-2">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-omnigen-purple focus:border-omnigen-purple transition-colors"
                    placeholder="Your name"
                    value={formState.name}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-omnigen-purple focus:border-omnigen-purple transition-colors"
                    placeholder="your.email@company.com"
                    value={formState.email}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-omnigen-purple focus:border-omnigen-purple transition-colors"
                    placeholder="Your company"
                    value={formState.company}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-omnigen-purple focus:border-omnigen-purple transition-colors"
                    placeholder="Tell us about your project or inquiry..."
                    value={formState.message}
                    onChange={handleChange}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-omnigen-purple hover:bg-omnigen-darkpurple text-white"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>
                
                <p className="text-sm text-gray-500 flex items-start">
                  <Check className="h-4 w-4 text-omnigen-teal mr-2 shrink-0 mt-0.5" />
                  <span>By submitting this form, you agree to our privacy policy and terms of service.</span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

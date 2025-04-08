
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-28 pb-20 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-omnigen-purple opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-omnigen-teal opacity-10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transforming Industries With{" "}
              <span className="gradient-text">Intelligent AI</span> Solutions
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Omnigen AI leverages cutting-edge artificial intelligence to solve complex business challenges and drive innovation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-omnigen-purple hover:bg-omnigen-darkpurple text-white px-6 py-6">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-omnigen-purple text-omnigen-purple hover:bg-omnigen-purple/10 px-6 py-6">
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="relative z-10 animate-float">
              <svg
                viewBox="0 0 200 200"
                className="w-full max-w-lg mx-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#5740BA"
                  d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.4,-1.6C86.7,13.2,80.8,26.3,73.1,38.4C65.3,50.4,55.7,61.3,43.5,67.7C31.3,74.1,15.7,76.1,0.2,75.8C-15.3,75.5,-30.5,72.9,-44.5,66.7C-58.5,60.5,-71.2,50.8,-76.8,38.2C-82.4,25.6,-80.8,10.3,-78.7,-4.9C-76.6,-20.1,-74,-39.3,-64.8,-53.3C-55.7,-67.3,-40,-76.2,-24.6,-82.1C-9.2,-88,5.9,-90.9,20.6,-88.3C35.4,-85.7,49.8,-77.7,44.7,-76.4Z"
                  transform="translate(100 100)"
                  className="opacity-10"
                />
              </svg>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-gradient-to-br from-omnigen-purple to-omnigen-darkpurple p-1 rounded-2xl shadow-xl w-4/5 h-4/5 flex items-center justify-center">
                  <div className="bg-white rounded-xl w-full h-full flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-20 h-20 rounded-full bg-omnigen-teal/20 flex items-center justify-center mb-4 animate-pulse-glow">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z" stroke="#36DFBF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 12H4M20 12H22M12 2V4M12 20V22M5.93 5.93L7.34 7.34M16.66 16.66L18.07 18.07M18.07 5.93L16.66 7.34M7.34 16.66L5.93 18.07" stroke="#36DFBF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-omnigen-darkpurple mb-2">Omnigen AI Nexus</h3>
                    <p className="text-gray-600 text-sm">Our adaptive AI framework powers intelligent solutions across industries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

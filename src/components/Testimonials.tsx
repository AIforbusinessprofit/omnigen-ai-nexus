import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "SocialBoost helped us go from inconsistent Instagram posts to daily content that actually drives footfall. We now get 30% more inbound calls thanks to automated DM replies!",
    name: "Satish Kumar Pannerselvan",
    title: "Founder, Sports Turf",
    avatar: "https://randomuser.me/api/portraits/men/91.jpg",
  },
  {
    quote:
      "Omnigen AI’s voice agent ensures we never miss a client inquiry—even after office hours. It books consultations and answers FAQs with amazing accuracy.",
    name: "Karthik",
    title: "Doctor",
    avatar: "https://randomuser.me/api/portraits/men/56.jpg",
  },
  {
    quote:
      "Leads used to fall through the cracks—especially weekends. Now our AI agent handles queries, trials, and even follow-ups! Truly a game changer.",
    name: "Chinna Babu",
    title: "Owner, Local Restaurant",
    avatar: "https://randomuser.me/api/portraits/men/23.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-omnigen-dark text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by <span className="text-omnigen-teal">Real Businesses</span>
          </h2>
          <p className="text-lg text-gray-300">
            Our early adopters share how Omnigen AI transformed their operations, engagement, and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={cn(
                "bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 card-hover animate-fade-in",
                `animate-delay-${index + 1}`
              )}
            >
              <svg
                className="w-10 h-10 text-omnigen-teal mb-4 opacity-70"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217...Z" />
              </svg>
              <p className="mb-6 text-gray-300">“{testimonial.quote}”</p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
          <img src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" className="h-8 opacity-50 hover:opacity-80 transition-opacity" />
          <img src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" className="h-8 opacity-50 hover:opacity-80 transition-opacity" />
          <img src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit" className="h-8 opacity-50 hover:opacity-80 transition-opacity" />
          <img src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg" alt="Transistor" className="h-8 opacity-50 hover:opacity-80 transition-opacity" />
          <img src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg" alt="Workcation" className="h-8 opacity-50 hover:opacity-80 transition-opacity" />
          <img src="https://tailwindui.com/img/logos/laravel-logo-gray-400.svg" alt="Laravel" className="h-8 opacity-50 hover:opacity-80 transition-opacity" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

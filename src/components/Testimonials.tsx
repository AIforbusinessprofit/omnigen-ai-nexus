
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Satish Kumar Pannerselvan",
    company: "Sports Turf",
    quote:
      "SocialBoost helped us go from inconsistent Instagram posts to daily content that actually drives footfall. We now get 30% more inbound calls thanks to automated DM replies!",
  },
  {
    name: "Karthik",
    company: "Doctor",
    quote:
      "Omnigen AI’s voice agent ensures we never miss a client inquiry—even after office hours. It books consultations and answers FAQs with amazing accuracy.",
  },
  {
    name: "Chinna Babu",
    company: "Restaurant",
    quote:
      "Leads used to fall through the cracks—especially weekends. Now our AI agent handles queries, trials, and even follow-ups! Truly a game changer.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-white text-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">What Our Users Are Saying</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="italic text-lg text-gray-800">“{t.quote}”</p>
              <div className="mt-4 font-semibold text-indigo-700">{t.name}</div>
              <div className="text-sm text-gray-600">{t.company}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


const Testimonials = () => {
  return (
    <section className="py-20 bg-omnigen-dark text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="text-omnigen-teal">Industry Leaders</span>
          </h2>
          <p className="text-lg text-gray-300">
            Hear what our clients have to say about their experience with Omnigen AI.
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
                <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.223.315-.6.677-1.132 1.085-1.6.408-.47.778-.898 1.108-1.286.33-.388.5-.728.51-1.02.012-.29-.13-.533-.425-.727-.296-.195-.686-.254-1.17-.177-.485.077-.91.216-1.273.418-.365.202-.622.43-.773.683-.15.254-.19.465-.122.635.07.168.18.262.336.28.156.02.3-.03.43-.143.13-.115.23-.26.3-.43.08-.17.13-.332.15-.49.024-.16.05-.255.08-.29.09-.09.22-.14.4-.155.18-.014.35.025.51.115.16.09.26.225.31.4.05.175.03.358-.04.55-.07.194-.18.37-.32.53-.15.156-.32.29-.5.405-.18.114-.35.213-.51.294-.41.25-.75.532-1.01.847-.27.315-.47.63-.63.945-.17.315-.28.62-.34.915-.06.296-.09.596-.09.902 0 .19.02.41.05.63.04.22.11.4.19.55.08.15.19.27.34.37.14.09.32.15.55.17.23.02.41-.02.55-.11.14-.09.25-.21.32-.36.07-.15.13-.31.17-.46.03-.16.06-.29.06-.38.01-.09.02-.16.04-.22.03-.09.08-.14.16-.16.08-.02.15 0 .21.04.07.04.11.1.13.18.02.08.01.17-.03.28-.03.11-.09.23-.17.35-.08.13-.16.25-.25.36-.08.12-.15.2-.2.26-.1.13-.15.27-.17.4-.02.14-.01.27.04.39.05.12.15.22.3.3.14.08.35.12.62.12.43 0 .83-.12 1.19-.35.36-.22.67-.53.91-.92.24-.38.43-.82.56-1.31.13-.49.19-.98.19-1.46ZM21.378 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.223.315-.6.677-1.132 1.085-1.6.408-.47.778-.898 1.108-1.286.33-.388.5-.728.51-1.02.012-.29-.13-.533-.425-.727-.296-.195-.686-.254-1.17-.177-.485.077-.91.216-1.273.418-.365.202-.622.43-.773.683-.15.254-.19.465-.122.635.07.168.18.262.336.28.156.02.3-.03.43-.143.13-.115.23-.26.3-.43.08-.17.13-.332.15-.49.024-.16.05-.255.08-.29.09-.09.22-.14.4-.155.18-.014.35.025.51.115.16.09.26.225.31.4.05.175.03.358-.04.55-.07.194-.18.37-.32.53-.15.156-.32.29-.5.405-.18.114-.35.213-.51.294-.41.25-.75.532-1.01.847-.27.315-.47.63-.63.945-.17.315-.28.62-.34.915-.06.296-.09.596-.09.902 0 .19.02.41.05.63.04.22.11.4.19.55.08.15.19.27.34.37.14.09.32.15.55.17.23.02.41-.02.55-.11.14-.09.25-.21.32-.36.07-.15.13-.31.17-.46.03-.16.06-.29.06-.38.01-.09.02-.16.04-.22.03-.09.08-.14.16-.16.08-.02.15 0 .21.04.07.04.11.1.13.18.02.08.01.17-.03.28-.03.11-.09.23-.17.35-.08.13-.16.25-.25.36-.08.12-.15.2-.2.26-.1.13-.15.27-.17.4-.02.14-.01.27.04.39.05.12.15.22.3.3.14.08.35.12.62.12.43 0 .83-.12 1.19-.35.36-.22.67-.53.91-.92.24-.38.43-.82.56-1.31.13-.49.19-.98.19-1.46Z" />
              </svg>
              <p className="mb-6 text-gray-300">{testimonial.quote}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-medium">{testimonial.author}</p>
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

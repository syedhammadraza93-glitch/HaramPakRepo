import { MessageCircle, Search, FileCheck, Plane } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Share Your Plans",
    description: "Contact us with your travel dates, preferences, and any special requirements for your journey."
  },
  {
    number: "02",
    icon: Search,
    title: "We Plan Together",
    description: "Our team prepares customized options for flights, accommodations, and services within your budget."
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Confirm & Prepare",
    description: "Review your package, complete booking, and we'll assist with visa processing and documentation."
  },
  {
    number: "04",
    icon: Plane,
    title: "Begin Your Journey",
    description: "Travel with confidence knowing our support team is available throughout your pilgrimage."
  }
];

export function BookingJourney() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-[#C5A46D] text-sm font-semibold tracking-wider uppercase mb-4">
            Simple Process
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#062A26] mb-6">
            Your Journey Starts Here
          </h2>
          <p className="text-xl text-foreground/75">
            Four straightforward steps from inquiry to departure
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connection Lines - Hidden on mobile */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C5A46D]/20 via-[#C5A46D] to-[#C5A46D]/20 -z-10" 
                 style={{ width: 'calc(100% - 8rem)', left: '4rem' }} 
            />

            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                {/* Step Card */}
                <div className="bg-[#FAF8F3] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 h-full border-2 border-transparent hover:border-[#C5A46D]/30">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#063B32] text-white font-bold text-xl mb-6 relative z-10">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#C5A46D]/10 mb-4">
                    <step.icon className="h-7 w-7 text-[#C5A46D]" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-[#062A26] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-foreground/75 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow Connector - Mobile only */}
                {idx < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-0.5 h-8 bg-[#C5A46D]/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

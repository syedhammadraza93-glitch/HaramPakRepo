import { Heart, Shield, Users, Clock, Check } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Heart,
    title: "Spiritual Focus",
    description: "We understand the sacred nature of your journey and treat every detail with reverence and care.",
  },
  {
    icon: Users,
    title: "Personalized Service",
    description: "Tailored packages and individual attention to meet your specific needs and preferences.",
  },
  {
    icon: Shield,
    title: "Reliable Support",
    description: "Professional assistance throughout your journey, from planning to your safe return.",
  },
  {
    icon: Clock,
    title: "Flexible Options",
    description: "Various package categories and customization options to suit different budgets and requirements.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-[#FAF8F3]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Content Column */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <p className="text-[#C5A46D] text-sm font-semibold tracking-wider uppercase mb-4">
                  Why Choose Us
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#062A26] mb-6 leading-tight">
                  Your Journey, <br />Our Commitment
                </h2>
                <p className="text-xl text-foreground/75 leading-relaxed">
                  We are dedicated to making your sacred journey meaningful, comfortable, and spiritually enriching.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {features.map((feature) => (
                  <div key={feature.title} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[#063B32]/10">
                        <feature.icon className="h-7 w-7 text-[#063B32]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#062A26] mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-foreground/75 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional trust points */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-[#063B32]" />
                  <span className="text-foreground/75">24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-[#063B32]" />
                  <span className="text-foreground/75">Verified Services</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-[#063B32]" />
                  <span className="text-foreground/75">Expert Guidance</span>
                </div>
              </div>
            </div>

            {/* Image Column - Asymmetric Layout */}
            <div className="lg:col-span-5">
              <div className="relative">
                {/* Main Image */}
                <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/masjid-al-haram-courtyard.jpg"
                    alt="Pilgrims at Masjid al-Haram"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                
                {/* Accent Image - Overlapping */}
                <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden md:block">
                  <Image
                    src="/images/masjid-nabawi-minarets.jpg"
                    alt="Masjid an-Nabawi"
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#C5A46D]/20 rounded-full -z-10" />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#063B32]/10 rounded-full -z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

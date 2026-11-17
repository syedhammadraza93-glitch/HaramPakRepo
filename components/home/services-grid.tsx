import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Hajj Services",
    description: "Complete Hajj packages with comprehensive support and guidance for your once-in-a-lifetime journey.",
    image: "/images/kaaba-pilgrims.jpg",
    href: "/hajj",
  },
  {
    title: "Umrah Packages",
    description: "Tailored Umrah packages for individuals, families, and groups with flexible options.",
    image: "/images/masjid-al-haram-courtyard.jpg",
    href: "/umrah",
  },
  {
    title: "Premium Hotels",
    description: "Comfortable accommodations in Makkah and Madinah, close to the holy sites.",
    image: "/images/masjid-nabawi-exterior.jpg",
    href: "/hotels",
  },
  {
    title: "Flight Booking",
    description: "Convenient international and domestic flight arrangements for your journey.",
    image: "/images/kaaba-daytime.jpg",
    href: "/flights",
  },
  {
    title: "Visa Services",
    description: "Complete visa processing assistance and documentation support.",
    image: "/images/masjid-nabawi-minarets.jpg",
    href: "/services",
  },
  {
    title: "Travel Services",
    description: "Comprehensive travel solutions including tours, transport, and holiday packages.",
    image: "/images/masjid-nabawi-closeup.jpg",
    href: "/services",
  },
];

export function ServicesGrid() {
  return (
    <section className="py-24 md:py-32 bg-[#FAF8F3]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-[#C5A46D] text-sm font-semibold tracking-wider uppercase mb-4">
            What We Offer
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#062A26] mb-6">
            Comprehensive Services
          </h2>
          <p className="text-xl text-foreground/75 leading-relaxed">
            Everything you need for a meaningful and comfortable pilgrimage journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service) => (
            <Link 
              key={service.title} 
              href={service.href}
              className="group block"
            >
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:scale-[1.02]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#062A26]/95 via-[#063B32]/60 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-[#C5A46D] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/90 text-base leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-[#C5A46D] font-semibold group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

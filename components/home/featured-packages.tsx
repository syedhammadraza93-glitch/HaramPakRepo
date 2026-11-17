"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Hotel, Check } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import Image from "next/image";

const featuredPackages = [
  {
    id: 1,
    title: "Economy Umrah Package",
    category: "Best Value",
    image: "/images/kaaba-dusk.jpg",
    duration: "10 Days / 9 Nights",
    makkahNights: 5,
    madinahNights: 4,
    highlights: [
      "3-star accommodation near Haram",
      "Return economy flights",
      "Visa processing support",
      "Ground transportation"
    ]
  },
  {
    id: 2,
    title: "Premium Umrah Package",
    category: "Most Popular",
    image: "/images/masjid-al-haram-night.jpg",
    duration: "14 Days / 13 Nights",
    makkahNights: 7,
    madinahNights: 6,
    highlights: [
      "5-star hotels with Haram view",
      "VIP airport services",
      "Private transportation",
      "Comprehensive Ziyarat tours"
    ]
  },
  {
    id: 3,
    title: "Ramadan Special",
    category: "Limited Availability",
    image: "/images/masjid-nabawi-exterior.jpg",
    duration: "21 Days / 20 Nights",
    makkahNights: 15,
    madinahNights: 5,
    highlights: [
      "Extended Ramadan stay",
      "Iftar and Suhoor included",
      "4-star accommodation",
      "Special Taraweeh arrangements"
    ]
  }
];

export function FeaturedPackages() {
  const handleInquire = (packageTitle: string) => {
    const message = `I'm interested in learning more about the ${packageTitle}. Could you provide details and pricing?`;
    const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-24 md:py-32 bg-[#FAF8F3]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#C5A46D] text-sm font-semibold tracking-wider uppercase mb-4">
            Popular Choices
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#062A26] mb-6">
            Featured Umrah Packages
          </h2>
          <p className="text-xl text-foreground/75 max-w-3xl mx-auto">
            Carefully designed journeys to meet your spiritual needs and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {featuredPackages.map((pkg) => (
            <Card key={pkg.id} className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="inline-block bg-[#C5A46D] text-[#062A26] text-xs font-bold px-4 py-2 rounded-full">
                    {pkg.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-white/90">
                    <Calendar className="h-4 w-4" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4 text-sm text-foreground/80">
                  <Hotel className="h-4 w-4 text-[#063B32]" />
                  <span>{pkg.makkahNights} nights Makkah • {pkg.madinahNights} nights Madinah</span>
                </div>

                <div className="space-y-2 mb-6">
                  {pkg.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check className="h-4 w-4 text-[#063B32] flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => handleInquire(pkg.title)}
                  className="w-full bg-[#063B32] hover:bg-[#062A26] text-white rounded-full"
                  size="lg"
                >
                  Request Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-4">
            Packages shown are representative examples. Final details and pricing depend on travel dates and availability.
          </p>
        </div>
      </div>
    </section>
  );
}

"use client";

import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Calendar, Hotel, Plane, Users, Check, MapPin, Clock, Shield, ArrowLeft 
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

// Package data - in a real app, this would come from a database or API
const packages = [
  {
    id: "economy-umrah",
    title: "Economy Umrah Package",
    category: "Economy",
    image: "/images/kaaba-dusk.jpg",
    duration: "10 Days / 9 Nights",
    departureCity: "Lahore",
    makkahNights: 5,
    madinahNights: 4,
    hotel: "3-star hotels",
    description: "An affordable Umrah package designed for pilgrims seeking a comfortable spiritual journey without compromising on essential services. Perfect for first-time pilgrims or those looking for value-oriented options.",
    highlights: [
      "Return economy flights from Lahore",
      "Umrah visa processing assistance",
      "3-star hotel accommodation near Haram",
      "Ground transportation between cities",
      "Airport transfers included",
      "Basic Ziyarat tours",
      "24/7 support hotline"
    ],
    itinerary: [
      { day: "Day 1", title: "Departure to Madinah", description: "Depart from Lahore to Madinah. Check-in to hotel and rest." },
      { day: "Day 2-4", title: "Madinah Stay", description: "Visit Masjid an-Nabawi, perform prayers, and explore significant historical sites." },
      { day: "Day 5", title: "Travel to Makkah", description: "Check out and travel to Makkah. Check-in to Makkah hotel." },
      { day: "Day 6-9", title: "Makkah & Umrah", description: "Perform Umrah rituals, daily prayers at Haram, and optional Ziyarat tours." },
      { day: "Day 10", title: "Return Home", description: "Check out, airport transfer, and departure to Lahore." }
    ],
    inclusions: [
      "Return economy class flights",
      "Umrah visa processing support",
      "3-star hotel accommodation",
      "Daily breakfast",
      "Ground transportation",
      "Airport transfers",
      "Basic Ziyarat tours",
      "Travel assistance"
    ],
    exclusions: [
      "Lunch and dinner meals",
      "Personal expenses",
      "Additional tours",
      "Travel insurance (recommended)",
      "Excess baggage fees"
    ]
  },
  {
    id: "standard-umrah",
    title: "Standard Umrah Package",
    category: "Standard",
    image: "/images/masjid-al-haram-night.jpg",
    duration: "14 Days / 13 Nights",
    departureCity: "Lahore",
    makkahNights: 7,
    madinahNights: 6,
    hotel: "4-star hotels",
    description: "A well-balanced Umrah package offering comfortable accommodation, convenient transportation, and comprehensive services for a fulfilling spiritual experience.",
    highlights: [
      "Return economy flights from Lahore",
      "Umrah visa processing assistance",
      "4-star hotel accommodation",
      "All ground transportation included",
      "Airport VIP assistance",
      "Comprehensive Ziyarat tours",
      "24/7 dedicated support"
    ],
    itinerary: [
      { day: "Day 1-2", title: "Arrival in Madinah", description: "Arrive in Madinah, check-in to 4-star hotel, and rest after journey." },
      { day: "Day 3-6", title: "Madinah Experience", description: "Daily prayers at Masjid an-Nabawi, guided Ziyarat tours to historical sites." },
      { day: "Day 7", title: "Transfer to Makkah", description: "Comfortable transfer from Madinah to Makkah with rest stops." },
      { day: "Day 8-13", title: "Makkah & Umrah", description: "Perform Umrah, daily prayers, extended Ziyarat tours, and spiritual activities." },
      { day: "Day 14", title: "Departure", description: "Final prayers, check out, and return flight to Lahore." }
    ],
    inclusions: [
      "Return economy class flights",
      "Umrah visa processing",
      "4-star hotel accommodation",
      "Daily breakfast and dinner",
      "All ground transportation",
      "Airport VIP services",
      "Comprehensive Ziyarat tours",
      "English-speaking guide",
      "24/7 support"
    ],
    exclusions: [
      "Lunch meals",
      "Personal shopping",
      "Optional additional tours",
      "Travel insurance",
      "Laundry services"
    ]
  },
  {
    id: "premium-umrah",
    title: "Premium Umrah Package",
    category: "Premium",
    image: "/images/kaaba-pilgrims.jpg",
    duration: "14 Days / 13 Nights",
    departureCity: "Lahore",
    makkahNights: 7,
    madinahNights: 6,
    hotel: "5-star hotels near Haram",
    description: "Luxury Umrah experience with 5-star accommodation offering direct Haram views, VIP services, and premium amenities throughout your spiritual journey.",
    highlights: [
      "Return economy flights with upgrade options",
      "Fast-track visa processing",
      "5-star hotels with Haram views",
      "Private luxury transportation",
      "VIP airport meet & assist",
      "Premium Ziyarat tours",
      "Dedicated personal coordinator"
    ],
    itinerary: [
      { day: "Day 1-2", title: "VIP Arrival Madinah", description: "VIP airport reception, luxury transfer to 5-star hotel near Prophet's Mosque." },
      { day: "Day 3-6", title: "Premium Madinah Stay", description: "5-star accommodation, private guided tours, and exclusive experiences." },
      { day: "Day 7", title: "Luxury Transfer", description: "Private vehicle transfer from Madinah to Makkah with premium comfort." },
      { day: "Day 8-13", title: "Premium Makkah Experience", description: "5-star hotel with Haram view, VIP Umrah arrangements, premium tours." },
      { day: "Day 14", title: "VIP Departure", description: "Priority check-out, VIP airport services, and comfortable return journey." }
    ],
    inclusions: [
      "Return flights with upgrade options",
      "Fast-track visa processing",
      "5-star hotels with Haram views",
      "All meals included (breakfast, lunch, dinner)",
      "Private luxury transportation",
      "VIP airport services",
      "Premium guided tours",
      "Personal coordinator",
      "Laundry services",
      "Room upgrades",
      "24/7 premium support"
    ],
    exclusions: [
      "Flight upgrades (available on request)",
      "Personal shopping expenses",
      "Spa and wellness services",
      "International travel insurance"
    ]
  }
];

export default function PackageDetailPage({ params }: { params: { id: string } }) {
  const pkg = packages.find(p => p.id === params.id);

  if (!pkg) {
    notFound();
  }

  const handleRequestQuote = () => {
    const message = `I'm interested in the ${pkg.title}. Please provide detailed pricing and availability for my travel dates.`;
    const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={pkg.image}
            alt={pkg.title}
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#062A26]/85 via-[#063B32]/75 to-[#062A26]/90" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/umrah" 
              className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 text-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to All Packages
            </Link>
            
            <div className="text-white">
              <span className="inline-block bg-[#C5A46D] text-[#062A26] text-sm font-bold px-4 py-2 rounded-full mb-4">
                {pkg.category} Package
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {pkg.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/95 leading-relaxed max-w-3xl">
                {pkg.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="flex items-center gap-3">
              <Calendar className="h-6 w-6 text-[#063B32]" />
              <div>
                <p className="text-xs text-muted-foreground">Duration</p>
                <p className="font-semibold text-sm">{pkg.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Hotel className="h-6 w-6 text-[#063B32]" />
              <div>
                <p className="text-xs text-muted-foreground">Accommodation</p>
                <p className="font-semibold text-sm">{pkg.hotel}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Plane className="h-6 w-6 text-[#063B32]" />
              <div>
                <p className="text-xs text-muted-foreground">Departure</p>
                <p className="font-semibold text-sm">{pkg.departureCity}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-6 w-6 text-[#063B32]" />
              <div>
                <p className="text-xs text-muted-foreground">Cities</p>
                <p className="font-semibold text-sm">{pkg.makkahNights}N Makkah • {pkg.madinahNights}N Madinah</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-[#FAF8F3]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Left Column - Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Highlights */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-[#062A26] mb-6">Package Highlights</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {pkg.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-[#063B32] flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Itinerary */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-[#062A26] mb-6">Itinerary Overview</h2>
                  <div className="space-y-6">
                    {pkg.itinerary.map((item, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-[#063B32] text-white flex items-center justify-center font-bold text-sm">
                            {idx + 1}
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-[#C5A46D] font-semibold mb-1">{item.day}</p>
                          <h3 className="font-bold text-[#062A26] mb-2">{item.title}</h3>
                          <p className="text-foreground/75 text-sm">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Inclusions & Exclusions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-[#062A26] mb-4">What's Included</h3>
                    <ul className="space-y-2">
                      {pkg.inclusions.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-[#062A26] mb-4">What's Not Included</h3>
                    <ul className="space-y-2">
                      {pkg.exclusions.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <span className="text-red-500 flex-shrink-0 mt-0.5">✕</span>
                          <span className="text-foreground/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[#062A26] mb-6">Request Quote</h3>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-[#063B32] mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm mb-1">Flexible Booking</p>
                        <p className="text-xs text-muted-foreground">Customizable to your needs</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-[#063B32] mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm mb-1">Quick Response</p>
                        <p className="text-xs text-muted-foreground">We'll reply within 24 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-[#063B32] mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm mb-1">Expert Support</p>
                        <p className="text-xs text-muted-foreground">Dedicated team assistance</p>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={handleRequestQuote}
                    className="w-full bg-[#063B32] hover:bg-[#062A26] text-white py-6 text-base rounded-full"
                    size="lg"
                  >
                    Request Detailed Quote
                  </Button>

                  <p className="text-xs text-center text-muted-foreground mt-4">
                    Pricing depends on travel dates, group size, and hotel availability
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-[#FAF8F3] p-6 rounded-lg border border-[#C5A46D]/30">
            <h3 className="font-semibold text-lg mb-3 text-[#062A26]">Important Information</h3>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>• Final package details are subject to availability at time of booking</li>
              <li>• Pricing varies based on travel season, group size, and hotel confirmation</li>
              <li>• Visa processing times follow Saudi Arabia regulations</li>
              <li>• All packages can be customized to your specific requirements</li>
              <li>• Contact us for current rates and detailed information</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

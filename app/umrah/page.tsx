"use client";

import { useState } from "react";
import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Hotel, Plane, Calendar, Users, Check } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

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
    description: "Affordable package perfect for first-time pilgrims",
    inclusions: [
      "Return economy flights",
      "Umrah visa processing assistance",
      "3-star hotel accommodation",
      "Ground transportation",
      "Airport transfers",
    ],
    features: ["Visa Support", "Flights", "Hotels", "Transport"],
  },
  {
    id: "standard-umrah",
    title: "Standard Umrah Package",
    category: "Standard",
    image: "/images/masjid-al-haram-courtyard.jpg",
    duration: "14 Days / 13 Nights",
    departureCity: "Lahore",
    makkahNights: 7,
    madinahNights: 6,
    hotel: "4-star hotels",
    description: "Well-balanced comfort and comprehensive services",
    inclusions: [
      "Return economy flights",
      "Umrah visa processing assistance",
      "4-star hotel accommodation",
      "Ground transportation",
      "Airport transfers",
      "Ziyarat tours",
    ],
    features: ["Visa Support", "Flights", "Hotels", "Transport", "Tours"],
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
    description: "Luxury experience with Haram view hotels",
    inclusions: [
      "Return economy flights",
      "Umrah visa processing assistance",
      "5-star hotel accommodation near Haram",
      "Private ground transportation",
      "Airport VIP service",
      "Comprehensive Ziyarat tours",
      "24/7 dedicated support",
    ],
    features: ["Visa Support", "Flights", "Premium Hotels", "Private Transport", "VIP Service"],
  },
  {
    id: 4,
    title: "Family Umrah Package",
    category: "Family",
    image: "/images/masjid-nabawi-exterior.jpg",
    duration: "14 Days / 13 Nights",
    departureCity: "Lahore",
    makkahNights: 7,
    madinahNights: 6,
    hotel: "Family-friendly 4-star hotels",
    description: "Designed for families with children",
    inclusions: [
      "Return economy flights for family",
      "Umrah visa processing for all family members",
      "Family rooms in 4-star hotels",
      "Ground transportation",
      "Special arrangements for children",
      "Family-oriented Ziyarat tours",
    ],
    features: ["Visa Support", "Flights", "Family Rooms", "Child Care", "Family Tours"],
  },
  {
    id: 5,
    title: "Ramadan Umrah Package",
    category: "Ramadan",
    image: "/images/masjid-al-haram-night.jpg",
    duration: "21 Days / 20 Nights",
    departureCity: "Lahore",
    makkahNights: 15,
    madinahNights: 5,
    hotel: "4-star hotels",
    description: "Extended Ramadan spiritual experience",
    inclusions: [
      "Return economy flights",
      "Umrah visa processing assistance",
      "4-star hotel accommodation",
      "Iftar and Suhoor arrangements",
      "Ground transportation",
      "Extended stay for complete Ramadan experience",
    ],
    features: ["Visa Support", "Flights", "Hotels", "Ramadan Meals", "Extended Stay"],
  },
  {
    id: 6,
    title: "Custom Umrah Package",
    category: "Custom",
    image: "/images/masjid-nabawi-minarets.jpg",
    duration: "Flexible",
    departureCity: "Any city",
    makkahNights: "Customizable",
    madinahNights: "Customizable",
    hotel: "Your choice",
    description: "Fully customizable to your requirements",
    inclusions: [
      "Tailored to your specific requirements",
      "Flexible duration and hotels",
      "Choice of flight options",
      "Personalized services",
      "Budget-based customization",
    ],
    features: ["Fully Customizable", "Flexible Duration", "Choice of Services"],
  },
];

export default function UmrahPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>("all");

  const filteredPackages = selectedCategory === "all" || !selectedCategory
    ? packages
    : packages.filter(pkg => pkg.category === selectedCategory);

  const handleRequestQuote = (packageTitle: string) => {
    const message = `I'm interested in the ${packageTitle}. Please provide more details.`;
    const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div>
      {/* Hero Section with Unique Photography */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/kaaba-dusk.jpg"
            alt="The Holy Kaaba at dusk"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#062A26]/80 via-[#063B32]/70 to-[#062A26]/85" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center text-white">
            <p className="text-[#C5A46D] text-sm font-semibold tracking-wider uppercase mb-4">
              Umrah Travel
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Discover Your Perfect
              <br />
              <span className="text-[#C5A46D]">Umrah Journey</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed max-w-3xl mx-auto">
              Choose from our thoughtfully designed packages, tailored to meet your spiritual needs and preferences.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-[#FAF8F3]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between max-w-7xl mx-auto">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#062A26]">
                Find Your Perfect Package
              </h2>
              <p className="text-foreground/75 mt-1">Filter by category to find the right fit</p>
            </div>
            <div className="flex gap-4 items-center">
              <Select onValueChange={(value: string | null) => setSelectedCategory(value || "all")}>
                <SelectTrigger className="w-[220px] h-12 text-base">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Economy">Economy</SelectItem>
                  <SelectItem value="Standard">Standard</SelectItem>
                  <SelectItem value="Premium">Premium</SelectItem>
                  <SelectItem value="Family">Family</SelectItem>
                  <SelectItem value="Ramadan">Ramadan</SelectItem>
                  <SelectItem value="Custom">Custom</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 pb-24 bg-[#FAF8F3]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredPackages.map((pkg) => (
              <Card key={pkg.id} className="flex flex-col overflow-hidden group hover:shadow-2xl transition-all duration-300">
                {/* Image Header */}
                {typeof pkg.id === 'string' && pkg.image && (
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block bg-[#C5A46D] text-[#062A26] text-xs font-bold px-3 py-1 rounded-full mb-2">
                        {pkg.category}
                      </span>
                      <h3 className="text-xl font-bold text-white">{pkg.title}</h3>
                    </div>
                  </div>
                )}
                
                <CardContent className="flex-1 flex flex-col p-6">
                  {pkg.description && (
                    <p className="text-sm text-foreground/75 mb-4">{pkg.description}</p>
                  )}
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-[#063B32]" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Hotel className="h-4 w-4 text-[#063B32]" />
                      <span>{pkg.makkahNights} nights Makkah • {pkg.madinahNights} nights Madinah</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Plane className="h-4 w-4 text-[#063B32]" />
                      <span>From {pkg.departureCity}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm">Key Inclusions:</h4>
                    <ul className="space-y-1">
                      {pkg.inclusions.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                          <Check className="h-4 w-4 text-[#063B32] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    {pkg.inclusions.length > 3 && (
                      <p className="text-xs text-muted-foreground mt-1">
                        +{pkg.inclusions.length - 3} more inclusions
                      </p>
                    )}
                  </div>

                  <div className="mt-auto pt-4 flex gap-3">
                    {typeof pkg.id === 'string' ? (
                      <>
                        <Link href={`/umrah/${pkg.id}`} className="flex-1">
                          <Button
                            variant="outline"
                            className="w-full border-2 border-[#063B32] text-[#063B32] hover:bg-[#063B32] hover:text-white"
                          >
                            View Details
                          </Button>
                        </Link>
                        <Button
                          onClick={() => handleRequestQuote(pkg.title)}
                          className="flex-1 bg-[#063B32] hover:bg-[#062A26]"
                        >
                          Request Quote
                        </Button>
                      </>
                    ) : (
                      <Button
                        onClick={() => handleRequestQuote(pkg.title)}
                        className="w-full bg-[#063B32] hover:bg-[#062A26]"
                      >
                        Request Quote
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-[#FAF8F3] p-6 rounded-lg border border-[#C5A46D]/30">
            <h3 className="font-semibold text-lg mb-2 text-[#062A26]">Important Information</h3>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>• Package details and prices are subject to availability and verification</li>
              <li>• Final costs depend on travel dates, hotel selection, and flight availability</li>
              <li>• Contact us for current pricing and detailed package information</li>
              <li>• Visa processing times and requirements are subject to Saudi Arabia regulations</li>
              <li>• All packages can be customized to your specific needs</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

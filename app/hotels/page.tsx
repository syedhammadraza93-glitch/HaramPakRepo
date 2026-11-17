"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Star, Wifi, Coffee, Car } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import Image from "next/image";
import { HotelInquiryForm } from "@/components/hotels/hotel-inquiry-form";

const hotels = [
  {
    id: 1,
    name: "Makkah 3-Star Hotels",
    city: "Makkah",
    category: "3-star",
    description: "Comfortable accommodation near Masjid al-Haram",
    amenities: ["Wi-Fi", "Air Conditioning", "Daily Housekeeping", "24/7 Reception"],
  },
  {
    id: 2,
    name: "Makkah 4-Star Hotels",
    city: "Makkah",
    category: "4-star",
    description: "Premium hotels with excellent proximity to Haram",
    amenities: ["Wi-Fi", "Restaurant", "Room Service", "Shuttle Service", "Prayer Facilities"],
  },
  {
    id: 3,
    name: "Makkah 5-Star Hotels",
    city: "Makkah",
    category: "5-star",
    description: "Luxury accommodation with direct Haram views",
    amenities: ["Wi-Fi", "Multiple Restaurants", "Concierge", "VIP Services", "Premium Facilities"],
  },
  {
    id: 4,
    name: "Madinah 3-Star Hotels",
    city: "Madinah",
    category: "3-star",
    description: "Comfortable stay near Masjid an-Nabawi",
    amenities: ["Wi-Fi", "Air Conditioning", "Daily Housekeeping", "24/7 Reception"],
  },
  {
    id: 5,
    name: "Madinah 4-Star Hotels",
    city: "Madinah",
    category: "4-star",
    description: "Quality hotels close to the Prophet's Mosque",
    amenities: ["Wi-Fi", "Restaurant", "Room Service", "Shuttle Service", "Prayer Facilities"],
  },
  {
    id: 6,
    name: "Madinah 5-Star Hotels",
    city: "Madinah",
    category: "5-star",
    description: "Premium accommodation with exceptional service",
    amenities: ["Wi-Fi", "Multiple Restaurants", "Concierge", "VIP Services", "Premium Facilities"],
  },
];

export default function HotelsPage() {
  const [selectedCity, setSelectedCity] = useState<string | null>("all");
  const [selectedCategory, setSelectedCategory] = useState<string | null>("all");

  const filteredHotels = hotels.filter((hotel) => {
    const cityMatch = selectedCity === "all" || !selectedCity || hotel.city === selectedCity;
    const categoryMatch = selectedCategory === "all" || !selectedCategory || hotel.category === selectedCategory;
    return cityMatch && categoryMatch;
  });

  const handleRequestInfo = (hotelName: string) => {
    const message = `I'd like to know more about: ${hotelName}`;
    const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div>
      {/* Hero Section with Unique Photography */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/masjid-nabawi-exterior.jpg"
            alt="Masjid an-Nabawi"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#062A26]/85 via-[#063B32]/75 to-[#062A26]/90" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center text-white">
            <p className="text-[#C5A46D] text-sm font-semibold tracking-wider uppercase mb-4">
              Accommodation
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Premium Hotels in <br />
              <span className="text-[#C5A46D]">Makkah & Madinah</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed">
              Comfortable stays close to the holy sites to support your spiritual journey.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <h2 className="text-xl font-semibold text-[#062A26]">Find Your Accommodation</h2>
            <div className="flex gap-4">
              <Select onValueChange={(value: string | null) => setSelectedCity(value || "all")}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="All Cities" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Cities</SelectItem>
                  <SelectItem value="Makkah">Makkah</SelectItem>
                  <SelectItem value="Madinah">Madinah</SelectItem>
                </SelectContent>
              </Select>

              <Select onValueChange={(value: string | null) => setSelectedCategory(value || "all")}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="3-star">3-Star</SelectItem>
                  <SelectItem value="4-star">4-Star</SelectItem>
                  <SelectItem value="5-star">5-Star</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Hotels Grid */}
      <section className="py-20 bg-[#FAF8F3]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#062A26] mb-4">
              Accommodation Categories
            </h2>
            <p className="text-lg text-foreground/75 max-w-2xl mx-auto">
              We work with a range of hotels to suit different preferences and budgets.
              Submit an inquiry below for specific options with confirmed availability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredHotels.map((hotel) => (
              <Card key={hotel.id} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <CardTitle className="text-lg text-[#062A26]">{hotel.name}</CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-1">
                        <MapPin className="h-4 w-4" />
                        {hotel.city}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-semibold text-[#C5A46D] bg-[#C5A46D]/10 px-3 py-1 rounded-full">
                      {hotel.category.toUpperCase()}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 mb-4">{hotel.description}</p>
                  <div className="space-y-2 mb-4">
                    <p className="text-xs font-semibold text-[#062A26]">Typical Amenities:</p>
                    <div className="flex flex-wrap gap-2">
                      {hotel.amenities.slice(0, 3).map((amenity) => (
                        <span
                          key={amenity}
                          className="text-xs bg-[#063B32]/10 text-[#063B32] px-2 py-1 rounded"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button
                    onClick={() => handleRequestInfo(hotel.name)}
                    className="w-full bg-[#063B32] hover:bg-[#062A26]"
                    size="sm"
                  >
                    Request Information
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Hotel Inquiry Form */}
          <HotelInquiryForm />
        </div>
      </section>

      {/* Important Note */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-[#FAF8F3] p-6 rounded-lg border border-[#C5A46D]/30">
            <h3 className="font-semibold text-lg mb-2 text-[#062A26]">Important Information</h3>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>• Hotel categories are general descriptions; specific properties vary</li>
              <li>• Availability and proximity to Haram depend on travel dates and booking time</li>
              <li>• Contact us for current hotel options, specific property details, and rates</li>
              <li>• Hotels can be customized based on your preferences and budget</li>
              <li>• Distance to Haram and amenities will be confirmed at time of booking</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

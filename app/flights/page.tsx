"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plane, Calendar, Users } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import Image from "next/image";

export default function FlightsPage() {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    departureDate: "",
    returnDate: "",
    tripType: "round-trip",
    adults: "1",
    children: "0",
    cabin: "economy",
    name: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `
Flight Inquiry:
Trip Type: ${formData.tripType === "round-trip" ? "Round Trip" : "One Way"}
From: ${formData.from}
To: ${formData.to}
Departure: ${formData.departureDate}
${formData.tripType === "round-trip" ? `Return: ${formData.returnDate}` : ""}
Passengers: ${formData.adults} Adult(s), ${formData.children} Child(ren)
Cabin Class: ${formData.cabin}

Contact:
Name: ${formData.name}
Phone: ${formData.phone}
    `.trim();
    
    const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div>
      {/* Hero Section with Unique Photography */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/kaaba-daytime.jpg"
            alt="The Holy Kaaba under blue skies"
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
              Travel Arrangements
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Flight Booking
              <br />
              <span className="text-[#C5A46D]">Assistance</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed">
              Let us help you find the best flight options for your sacred journey.
            </p>
          </div>
        </div>
      </section>

      {/* Flight Inquiry Form */}
      <section className="py-20 bg-[#FAF8F3]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-[#062A26] flex items-center gap-2">
                  <Plane className="h-6 w-6" />
                  Flight Inquiry Form
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll find the best flight options for you.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Trip Type */}
                  <div className="space-y-2">
                    <Label>Trip Type</Label>
                    <Select
                      onValueChange={(value: string | null) =>
                        setFormData({ ...formData, tripType: value || "round-trip" })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Round Trip" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="round-trip">Round Trip</SelectItem>
                        <SelectItem value="one-way">One Way</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* From/To */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="from">From (City/Airport) *</Label>
                      <Input
                        id="from"
                        required
                        value={formData.from}
                        onChange={(e) =>
                          setFormData({ ...formData, from: e.target.value })
                        }
                        placeholder="e.g., Lahore, Karachi, Islamabad"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="to">To (City/Airport) *</Label>
                      <Input
                        id="to"
                        required
                        value={formData.to}
                        onChange={(e) =>
                          setFormData({ ...formData, to: e.target.value })
                        }
                        placeholder="e.g., Jeddah, Madinah"
                      />
                    </div>
                  </div>

                  {/* Dates */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="departureDate">Departure Date *</Label>
                      <Input
                        id="departureDate"
                        type="date"
                        required
                        value={formData.departureDate}
                        onChange={(e) =>
                          setFormData({ ...formData, departureDate: e.target.value })
                        }
                      />
                    </div>
                    {formData.tripType === "round-trip" && (
                      <div className="space-y-2">
                        <Label htmlFor="returnDate">Return Date *</Label>
                        <Input
                          id="returnDate"
                          type="date"
                          required={formData.tripType === "round-trip"}
                          value={formData.returnDate}
                          onChange={(e) =>
                            setFormData({ ...formData, returnDate: e.target.value })
                          }
                        />
                      </div>
                    )}
                  </div>

                  {/* Passengers */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="adults">Adults *</Label>
                      <Input
                        id="adults"
                        type="number"
                        min="1"
                        required
                        value={formData.adults}
                        onChange={(e) =>
                          setFormData({ ...formData, adults: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="children">Children</Label>
                      <Input
                        id="children"
                        type="number"
                        min="0"
                        value={formData.children}
                        onChange={(e) =>
                          setFormData({ ...formData, children: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Cabin Class</Label>
                      <Select
                        onValueChange={(value: string | null) =>
                          setFormData({ ...formData, cabin: value || "economy" })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Economy" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="economy">Economy</SelectItem>
                          <SelectItem value="business">Business</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Contact Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+92 XXX XXXXXXX"
                      />
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <p className="text-sm text-foreground/80">
                      <strong>Note:</strong> This is an inquiry form. We'll search for the best
                      available flight options and contact you with details and pricing.
                      No booking commitment is made at this stage.
                    </p>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#063B32] hover:bg-[#062A26]"
                  >
                    Submit Flight Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#062A26] mb-8 text-center">
              Flight Services We Provide
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">International Flights</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">
                    Flight bookings from Pakistan to Saudi Arabia and other international destinations.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Domestic Flights</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">
                    Domestic flight arrangements within Pakistan for your convenience.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Group Bookings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">
                    Special arrangements for families and groups traveling together.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Flight + Package Deals</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">
                    Integrated flight bookings as part of complete Umrah or Hajj packages.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

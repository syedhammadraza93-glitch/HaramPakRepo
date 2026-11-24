"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plane } from "lucide-react";
import { crmIntakeEnabled, useEnquirySubmission } from "@/lib/enquiry-submission";
import { EnquiryStatus } from "@/components/contact/enquiry-status";

export function FlightInquiry() {
  const enquiry = useEnquirySubmission();
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

    void enquiry.submit({ name: formData.name, phone: formData.phone, service: "Flights", email: undefined, city: formData.from, travellers: Number(formData.adults) + Number(formData.children), travelDate: formData.departureDate, note: ["Destination: " + formData.to, "Cabin: " + formData.cabin, formData.returnDate && "Return: " + formData.returnDate].filter(Boolean).join("\n") }, message);
  };

  return (
    <div>
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
                  Fill out the form below and we’ll find the best flight options for you.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Trip Type */}
                  <div className="space-y-2">
                    <Label htmlFor="trip-type">Trip type</Label>
                    <Select
                      onValueChange={(value: string | null) =>
                        setFormData({ ...formData, tripType: value || "round-trip" })
                      }
                    >
                      <SelectTrigger id="trip-type">
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
                          min={formData.departureDate || undefined}
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
                      <Label htmlFor="cabin-class">Cabin class</Label>
                      <Select
                        onValueChange={(value: string | null) =>
                          setFormData({ ...formData, cabin: value || "economy" })
                        }
                      >
                        <SelectTrigger id="cabin-class">
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
                      Review and send your message in WhatsApp. Our team can check fares and availability for your travel dates.
                    </p>
                  </div>

                  <Button
                    type="submit" disabled={enquiry.pending || !!enquiry.reference}
                    size="lg"
                    className="w-full bg-[#063B32] hover:bg-[#062A26]"
                  >
                    Continue to WhatsApp
                  </Button>
                {crmIntakeEnabled && <p className="text-sm text-muted-foreground">Haram Pak will use your contact details to respond to this enquiry.</p>}
          <EnquiryStatus {...enquiry} />
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

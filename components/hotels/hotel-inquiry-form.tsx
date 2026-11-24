"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Users, DollarSign } from "lucide-react";
import { crmIntakeEnabled, useEnquirySubmission } from "@/lib/enquiry-submission";
import { EnquiryStatus } from "@/components/contact/enquiry-status";

export function HotelInquiryForm() {
  const enquiry = useEnquirySubmission();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    budget: "",
    requirements: ""
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const message = `Hotel Inquiry:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
City: ${formData.city}
Check-in: ${formData.checkIn}
Check-out: ${formData.checkOut}
Guests: ${formData.guests}
Budget: ${formData.budget}
Requirements: ${formData.requirements || "None specified"}`;

    if (formData.checkOut <= formData.checkIn) {
      const checkOut = e.currentTarget.querySelector<HTMLInputElement>("#checkOut");
      checkOut?.setCustomValidity("Choose a check-out date after check-in.");
      checkOut?.reportValidity();
      return;
    }
    void enquiry.submit({ name: formData.name, phone: formData.phone, service: "Hotels", email: formData.email, city: formData.city, travellers: Number(formData.guests), travelDate: formData.checkIn, note: "Check-out: " + formData.checkOut + "\nBudget: " + formData.budget + "\n" + formData.requirements }, message);
  };

  return (
    <Card className="max-w-3xl mx-auto">
      <CardHeader className="bg-[#063B32] text-white">
        <CardTitle className="text-2xl">Hotel Inquiry Form</CardTitle>
        <p className="text-white/90 text-sm mt-2">
          Share your accommodation preferences and we’ll provide suitable options with confirmed availability and pricing.
        </p>
      </CardHeader>
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your full name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+92 300 1234567"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your.email@example.com"
              required
            />
          </div>

          {/* Travel Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="city">City *</Label>
            <Select
              value={formData.city}
              onValueChange={(value) => setFormData({ ...formData, city: value || "" })}
              required
            >
                <SelectTrigger id="city">
                  <SelectValue placeholder="Select city" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Makkah">Makkah</SelectItem>
                  <SelectItem value="Madinah">Madinah</SelectItem>
                  <SelectItem value="Both">Both Cities</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="guests">Number of Guests *</Label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="guests"
                  type="number"
                  min="1"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  placeholder="Number of people"
                  className="pl-10"
                  required
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="checkIn">Check-in Date *</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="checkIn"
                  type="date"
                  value={formData.checkIn}
                  onChange={(e) => {
                    const checkOut = e.currentTarget.form?.querySelector<HTMLInputElement>("#checkOut");
                    checkOut?.setCustomValidity("");
                    setFormData({ ...formData, checkIn: e.target.value });
                  }}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="checkOut">Check-out Date *</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="checkOut"
                  type="date"
                  min={formData.checkIn || undefined}
                  value={formData.checkOut}
                  onChange={(e) => {
                    e.currentTarget.setCustomValidity("");
                    setFormData({ ...formData, checkOut: e.target.value });
                  }}
                  className="pl-10"
                  required
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="budget">Preferred Budget Range</Label>
            <Select
              value={formData.budget}
              onValueChange={(value) => setFormData({ ...formData, budget: value || "" })}
            >
              <SelectTrigger id="budget">
                <SelectValue placeholder="Select budget range (optional)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="economy">Economy (3-star)</SelectItem>
                <SelectItem value="standard">Standard (4-star)</SelectItem>
                <SelectItem value="premium">Premium (5-star)</SelectItem>
                <SelectItem value="flexible">Flexible / Open to suggestions</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="requirements">Special Requirements or Preferences</Label>
            <Textarea
              id="requirements"
              value={formData.requirements}
              onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
              placeholder="E.g., close to Haram, specific amenities, accessibility needs, etc."
              rows={4}
            />
          </div>

          <Button
            type="submit" disabled={enquiry.pending || !!enquiry.reference}
            className="w-full bg-[#063B32] hover:bg-[#062A26] text-white py-6 text-base rounded-full"
            size="lg"
          >
            Continue to WhatsApp
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            Review and send your enquiry in WhatsApp.
          </p>
        {crmIntakeEnabled && <p className="text-sm text-muted-foreground">Haram Pak will use your contact details to respond to this enquiry.</p>}
          <EnquiryStatus {...enquiry} />
        </form>
      </CardContent>
    </Card>
  );
}

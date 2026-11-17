"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SITE_CONFIG } from "@/lib/constants";

export function HajjInquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    pilgrims: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hajj Inquiry:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
City: ${formData.city}
Number of Pilgrims: ${formData.pilgrims}
Additional Information: ${formData.message || "None specified"}`;

    const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Card className="max-w-3xl mx-auto">
      <CardHeader className="bg-[#063B32] text-white">
        <CardTitle className="text-2xl">Hajj Inquiry Form</CardTitle>
        <p className="text-white/90 text-sm mt-2">
          Register your interest for Hajj services. We'll provide information about current availability,
          requirements, and the application process.
        </p>
      </CardHeader>
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="city">Departure City *</Label>
              <Input
                id="city"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                placeholder="e.g., Lahore, Karachi"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pilgrims">Number of Pilgrims *</Label>
              <Input
                id="pilgrims"
                type="number"
                min="1"
                value={formData.pilgrims}
                onChange={(e) => setFormData({ ...formData, pilgrims: e.target.value })}
                placeholder="Number of people"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Additional Information</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Any questions, special requirements, or additional details you'd like to share..."
              rows={4}
            />
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-sm text-foreground/80">
              <strong>Note:</strong> Hajj services are subject to government quota allocations.
              We'll contact you with current availability and guide you through the application process.
            </p>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#063B32] hover:bg-[#062A26] text-white py-6 text-base rounded-full"
            size="lg"
          >
            Submit Hajj Inquiry
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            Your inquiry will be sent via WhatsApp. We'll respond within 24 hours with detailed information.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}

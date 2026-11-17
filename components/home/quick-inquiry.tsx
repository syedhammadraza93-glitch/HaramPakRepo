"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";

export function QuickInquiry() {
  const [formData, setFormData] = useState({
    journeyType: "",
    departureCity: "",
    travelMonth: "",
    travelers: "",
    whatsapp: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Journey Type: ${formData.journeyType}, Departure: ${formData.departureCity}, Month: ${formData.travelMonth}, Travelers: ${formData.travelers}`;
    const whatsappUrl = `https://wa.me/+923228054660?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-8 -mt-16 relative z-20">
      <div className="container mx-auto px-4">
        <Card className="p-6 shadow-xl bg-white/95 backdrop-blur">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            <Select onValueChange={(value: string | null) => setFormData({ ...formData, journeyType: value || "" })}>
              <SelectTrigger>
                <SelectValue placeholder="Journey Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="umrah">Umrah</SelectItem>
                <SelectItem value="hajj">Hajj</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>

            <Input
              placeholder="Departure City"
              value={formData.departureCity}
              onChange={(e) => setFormData({ ...formData, departureCity: e.target.value })}
            />

            <Input
              placeholder="Travel Month"
              value={formData.travelMonth}
              onChange={(e) => setFormData({ ...formData, travelMonth: e.target.value })}
            />

            <Input
              placeholder="Travelers"
              type="number"
              value={formData.travelers}
              onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
            />

            <Input
              placeholder="WhatsApp Number"
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
            />

            <Button type="submit" className="bg-[#063B32] hover:bg-[#062A26] text-white">
              Request Quote
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}

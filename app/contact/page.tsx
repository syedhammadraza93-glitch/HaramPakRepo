"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}
    `.trim();
    
    const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
    
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div>
      {/* Hero Section with Unique Photography */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/masjid-nabawi-closeup.jpg"
            alt="Masjid an-Nabawi architectural details"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#062A26]/85 via-[#063B32]/80 to-[#062A26]/90" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <p className="text-[#C5A46D] text-sm font-semibold tracking-wider uppercase mb-4">
              Get in Touch
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed">
              We're here to answer your questions and help you plan your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-[#FAF8F3]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-[#062A26]">
                    <Phone className="h-5 w-5" />
                    Phone
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <a
                    href={`tel:${SITE_CONFIG.contact.phones.pakistan}`}
                    className="block text-foreground/80 hover:text-[#063B32] transition-colors"
                  >
                    {SITE_CONFIG.contact.phones.pakistan}
                  </a>
                  <a
                    href={`tel:${SITE_CONFIG.contact.phones.pakistanAlt}`}
                    className="block text-foreground/80 hover:text-[#063B32] transition-colors"
                  >
                    {SITE_CONFIG.contact.phones.pakistanAlt}
                  </a>
                  <a
                    href={`tel:${SITE_CONFIG.contact.phones.international}`}
                    className="block text-foreground/80 hover:text-[#063B32] transition-colors"
                  >
                    {SITE_CONFIG.contact.phones.international}
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-[#062A26]">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-[#063B32] transition-colors"
                  >
                    {SITE_CONFIG.contact.phones.pakistan}
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">
                    Click to chat instantly
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-[#062A26]">
                    <Mail className="h-5 w-5" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href={`mailto:${SITE_CONFIG.contact.email}`}
                    className="text-foreground/80 hover:text-[#063B32] transition-colors break-all"
                  >
                    {SITE_CONFIG.contact.email}
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-[#062A26]">
                    <MapPin className="h-5 w-5" />
                    Office Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">
                    {SITE_CONFIG.contact.address}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2 italic">
                    Address subject to verification
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#062A26]">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="py-8 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                        <Phone className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#062A26] mb-2">
                        Opening WhatsApp...
                      </h3>
                      <p className="text-foreground/80">
                        Your message is being prepared in WhatsApp so you can send it directly to us.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            placeholder="Your full name"
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

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          required
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData({ ...formData, subject: e.target.value })
                          }
                          placeholder="What would you like to discuss?"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          required
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          placeholder="Please provide details about your inquiry..."
                          rows={6}
                        />
                      </div>

                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                        <p className="text-sm text-foreground/80">
                          <strong>Note:</strong> Clicking "Send Message" will open WhatsApp with your
                          message pre-filled, allowing you to send it directly to our team.
                        </p>
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-[#063B32] hover:bg-[#062A26]"
                      >
                        <MessageCircle className="h-5 w-5 mr-2" />
                        Send Message via WhatsApp
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

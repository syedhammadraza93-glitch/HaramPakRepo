import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Users, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us - Haram Pak Pvt Ltd",
  description: "Learn about Haram Pak's mission, values, and commitment to serving pilgrims on their sacred journeys.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section with Unique Photography */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/masjid-nabawi-minarets.jpg"
            alt="Masjid an-Nabawi minarets"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#062A26]/80 via-[#063B32]/70 to-[#062A26]/85" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <p className="text-[#C5A46D] text-sm font-semibold tracking-wider uppercase mb-4">
              About Us
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Dedicated to Your <br />Sacred Journey
            </h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed">
              Serving pilgrims with care, respect, and professional excellence since our founding.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[#C5A46D] text-sm font-semibold tracking-wider uppercase mb-4">
                Our Story
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#062A26] mb-8">
                A Legacy of Service
              </h2>
            </div>
            
            <div className="space-y-6 text-xl text-foreground/75 leading-relaxed">
              <p className="text-2xl text-foreground/90 font-light">
                Haram Pak Pvt Ltd is a travel services company based in Lahore, Pakistan,
                specializing in organizing Hajj, Umrah, and international travel arrangements.
              </p>
              <p>
                We understand the profound spiritual significance of the pilgrimage journey
                and approach every aspect of our service with reverence and care. Our commitment
                extends beyond mere travel logistics—we're dedicated to facilitating transformative
                spiritual experiences.
              </p>
              <p>
                Our mission is to make the sacred journey to Makkah and Madinah accessible,
                comfortable, and meaningful for pilgrims from Pakistan. We strive to handle
                every detail of your travel arrangements with professionalism and attention
                to your individual needs.
              </p>
              <p className="text-base text-muted-foreground italic mt-8 pt-8 border-t">
                Note: Company information is subject to verification. Please contact us directly
                for current details about our services and credentials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-[#FAF8F3]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#C5A46D] text-sm font-semibold tracking-wider uppercase mb-4">
              What Guides Us
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#062A26] mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-foreground/75 max-w-3xl mx-auto">
              The principles that drive everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Heart,
                title: "Spiritual Respect",
                description: "We honor the sacred nature of your pilgrimage journey with reverence and care.",
              },
              {
                icon: Shield,
                title: "Trust & Integrity",
                description: "Honest service and transparent communication in everything we do.",
              },
              {
                icon: Users,
                title: "Customer Focus",
                description: "Your comfort, safety, and satisfaction guide every decision we make.",
              },
              {
                icon: Award,
                title: "Professional Excellence",
                description: "Committed to the highest standards in every aspect of our service.",
              },
            ].map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#063B32]/10 mb-6">
                  <value.icon className="h-8 w-8 text-[#063B32]" />
                </div>
                <h3 className="text-2xl font-bold text-[#062A26] mb-3">
                  {value.title}
                </h3>
                <p className="text-foreground/75 text-lg leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#062A26] mb-12 text-center">
              What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Comprehensive Umrah packages",
                "Hajj services and support",
                "Hotel accommodations in Makkah and Madinah",
                "Flight booking assistance",
                "Visa processing support",
                "Ground transportation arrangements",
                "24/7 travel assistance",
                "Customizable travel packages",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#063B32] flex-shrink-0 mt-1" />
                  <span className="text-lg text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/kaaba-daytime.jpg"
            alt="The Holy Kaaba"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#062A26]/90 via-[#063B32]/85 to-[#062A26]/90" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Let Us Help You
              <br />
              <span className="text-[#C5A46D]">Plan Your Journey</span>
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-white/95">
              Contact us to discuss your travel plans and learn how we can serve you.
            </p>
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-[#C5A46D] hover:bg-[#B39460] text-[#062A26] font-semibold text-lg px-10 py-7 rounded-full shadow-2xl hover:scale-105 transition-all"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

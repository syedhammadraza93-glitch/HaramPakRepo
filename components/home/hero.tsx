"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/kaaba-pilgrims.jpg"
          alt="The Holy Kaaba at Masjid al-Haram in Makkah"
          fill
          className="object-cover object-center scale-105"
          priority
          quality={95}
        />
        {/* Refined gradient overlay for better image visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#062A26]/60 via-[#063B32]/50 to-[#062A26]/80" />
        
        {/* Subtle Islamic pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center text-white">
          {/* Overline */}
          <p className="text-[#C5A46D] text-sm sm:text-base font-semibold tracking-[0.2em] uppercase mb-6 animate-fade-in">
            Haram Pak Pvt Ltd
          </p>
          
          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight">
            Your Sacred Journey
            <br />
            <span className="text-[#C5A46D] inline-block mt-2">Begins Here</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl sm:text-2xl md:text-3xl mb-12 text-white/95 leading-relaxed max-w-3xl mx-auto font-light">
            Thoughtfully planned Hajj and Umrah journeys, with care and devotion at every step.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link href="/umrah">
              <Button 
                size="lg" 
                className="bg-[#C5A46D] hover:bg-[#B39460] text-[#062A26] font-semibold text-lg px-10 py-7 rounded-full shadow-2xl hover:shadow-[#C5A46D]/30 transition-all hover:scale-105"
              >
                Explore Umrah Packages
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/90 !text-white hover:bg-white hover:!text-[#062A26] font-semibold text-lg px-10 py-7 rounded-full transition-all hover:scale-105"
              >
                Plan Your Journey
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-10 w-10 text-white/70" />
      </div>
    </section>
  );
}

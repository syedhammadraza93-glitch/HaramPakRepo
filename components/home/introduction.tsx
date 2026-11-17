import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function Introduction() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Image Column */}
          <div className="relative order-2 lg:order-1">
            <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/masjid-al-haram-night.jpg"
                alt="Masjid al-Haram at night"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#C5A46D]/10 rounded-full -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#063B32]/10 rounded-full -z-10" />
          </div>

          {/* Content Column */}
          <div className="order-1 lg:order-2 space-y-6">
            <p className="text-[#C5A46D] text-sm font-semibold tracking-wider uppercase">
              About Haram Pak
            </p>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#062A26] leading-tight">
              Your Trusted Partner for Sacred Journeys
            </h2>
            
            <div className="space-y-5 text-lg text-foreground/75 leading-relaxed">
              <p>
                We are dedicated to serving pilgrims on their sacred journeys to the holy cities of Makkah and Madinah.
                Our mission is to provide thoughtfully planned travel arrangements that honor the spiritual significance
                of your pilgrimage while ensuring comfort and care at every step.
              </p>
              <p>
                Whether you're planning your first Umrah, preparing for Hajj, or seeking reliable travel services,
                our team is here to support you with personalized attention and professional service.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/about">
                <Button 
                  size="lg" 
                  className="bg-[#063B32] hover:bg-[#062A26] text-white px-8 py-6 text-base rounded-full"
                >
                  Learn More About Us
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-[#063B32] text-[#063B32] hover:bg-[#063B32] hover:text-white px-8 py-6 text-base rounded-full"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>

            <p className="text-sm text-muted-foreground italic pt-4">
              Contact information subject to verification. Please inquire for current details.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

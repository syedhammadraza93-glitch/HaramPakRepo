import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/masjid-al-haram-night.jpg"
          alt="Masjid al-Haram at night"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#062A26]/90 via-[#063B32]/85 to-[#062A26]/90" />
        
        {/* Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            Ready to Begin Your
            <br />
            <span className="text-[#C5A46D]">Sacred Journey?</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 text-white/95 leading-relaxed max-w-2xl mx-auto">
            Contact us today and let our team guide you through every step of planning
            your meaningful pilgrimage.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-[#C5A46D] hover:bg-[#B39460] text-[#062A26] font-semibold text-lg px-10 py-7 rounded-full shadow-2xl hover:shadow-[#C5A46D]/40 transition-all hover:scale-105 group"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/umrah">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/90 !text-white hover:bg-white hover:!text-[#062A26] font-semibold text-lg px-10 py-7 rounded-full transition-all hover:scale-105"
              >
                View Packages
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

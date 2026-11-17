import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";

export function DestinationsShowcase() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-[#C5A46D] text-sm font-semibold tracking-wider uppercase mb-4">
            Sacred Destinations
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#062A26] mb-6">
            The Holiest Cities
          </h2>
          <p className="text-xl text-foreground/75 leading-relaxed">
            Experience the profound spirituality of Islam's most sacred places
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {/* Makkah Card */}
          <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-[0_20px_60px_rgba(6,59,50,0.3)] transition-all duration-500">
            <div className="relative h-[550px] md:h-[650px]">
              <Image
                src="/images/kaaba-dusk.jpg"
                alt="The Holy Kaaba at Masjid al-Haram in Makkah"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#062A26]/95 via-[#063B32]/50 to-transparent" />
              
              <div className="absolute inset-0 p-10 md:p-12 flex flex-col justify-end text-white">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5 text-[#C5A46D]" />
                  <span className="text-[#C5A46D] text-sm font-semibold tracking-wider uppercase">
                    Saudi Arabia
                  </span>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-bold mb-5">
                  Makkah al-Mukarramah
                </h3>
                
                <p className="text-lg text-white/95 mb-8 leading-relaxed max-w-md">
                  Home to the Holy Kaaba and Masjid al-Haram, where millions of believers gather in worship,
                  united in faith and devotion.
                </p>
                
                <Link href="/umrah">
                  <Button 
                    className="bg-[#C5A46D] hover:bg-[#B39460] text-[#062A26] font-semibold px-8 py-6 text-base rounded-full w-fit group/btn"
                  >
                    Explore Umrah Packages
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Madinah Card */}
          <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-[0_20px_60px_rgba(6,59,50,0.3)] transition-all duration-500">
            <div className="relative h-[550px] md:h-[650px]">
              <Image
                src="/images/masjid-nabawi-exterior.jpg"
                alt="Masjid an-Nabawi in Madinah al-Munawwarah"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#062A26]/95 via-[#063B32]/50 to-transparent" />
              
              <div className="absolute inset-0 p-10 md:p-12 flex flex-col justify-end text-white">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5 text-[#C5A46D]" />
                  <span className="text-[#C5A46D] text-sm font-semibold tracking-wider uppercase">
                    Saudi Arabia
                  </span>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-bold mb-5">
                  Madinah al-Munawwarah
                </h3>
                
                <p className="text-lg text-white/95 mb-8 leading-relaxed max-w-md">
                  The radiant city of the Prophet (PBUH), home to Masjid an-Nabawi,
                  a sanctuary of peace and spiritual serenity.
                </p>
                
                <Link href="/umrah">
                  <Button 
                    className="bg-[#C5A46D] hover:bg-[#B39460] text-[#062A26] font-semibold px-8 py-6 text-base rounded-full w-fit group/btn"
                  >
                    Explore Umrah Packages
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

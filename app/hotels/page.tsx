import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PageBanner } from "@/components/layout/page-banner";
import { HotelInquiryForm } from "@/components/hotels/hotel-inquiry-form";
import { getWebsiteContent } from "@/lib/website-content";
import { whatsappUrl } from "@/lib/inquiries";

export const metadata: Metadata = {
  title: "Hotels in Makkah and Madinah",
  description: "Explore planned Umrah accommodation at Al Kiswah Towers and Najoom Al Khair. Ask Haram Pak about rooms, walking routes and availability.",
  alternates: { canonical: "/hotels/" },
};

export default async function HotelsPage() {
  const { packages, pageBanners } = await getWebsiteContent();
  const hotels = [...new Map(packages.flatMap(pkg => pkg.hotels ?? []).map(hotel => [hotel.name, hotel])).values()];
  return (
    <>
      <PageBanner {...pageBanners["hotels"]}>
        <a href="#hotel-enquiry" className="pilgrim-button pilgrim-button-gold">Ask About Rooms <ArrowRight aria-hidden="true" /></a>
      </PageBanner>
      <section className="site-shell home-section" aria-labelledby="hotel-options">
        <div className="section-heading">
          <h2 id="hotel-options">Planned Umrah accommodation</h2>
          <p>These hotels are listed for the 15-day and 20-day Lahore itineraries. Ask us to confirm rooms and availability for your date.</p>
        </div>
        <div className="hotel-summary">
          {hotels.map((hotel) => (
            <div id={hotel.city.toLowerCase()} key={hotel.city}>
              <div className="relative aspect-[2/1] mb-3 overflow-hidden rounded-md">
                <Image src={hotel.city === "Makkah" ? "/images/makkah-at-night.webp" : "/images/madinah-courtyard.webp"} fill sizes="(max-width: 600px) 100vw, 50vw" alt="" className="object-cover" />
                <span className="absolute bottom-2 right-2 bg-[#082c25] text-white rounded px-2 py-1 text-xs">{hotel.city} illustration</span>
              </div>
              <small>{hotel.city}</small>
              <h3>{hotel.name}</h3>
              <p>{hotel.note}</p>
              <a href={whatsappUrl(`As-salamu alaykum! I’d like to ask about rooms at ${hotel.name} in ${hotel.city}.`)} target="_blank" rel="noopener noreferrer" className="text-link">Ask About This Hotel <ArrowRight aria-hidden="true" /></a>
            </div>
          ))}
        </div>
      </section>
      <section id="hotel-enquiry" className="site-shell pb-20" aria-label="Hotel enquiry">
        <HotelInquiryForm />
      </section>
    </>
  );
}

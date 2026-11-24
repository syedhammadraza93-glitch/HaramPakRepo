import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Route } from "lucide-react";
import { PageBanner } from "@/components/layout/page-banner";
import { travelEnquiryLink } from "@/lib/travel-enquiries";

export const metadata: Metadata = {
  title: "Tour Packages and Ziarat",
  description: "Ask Haram Pak about Iraq and Iran Ziarat itineraries, pilgrimage packages and tailored tours for families and groups.",
  alternates: { canonical: "/tour-packages/" },
};

import { getWebsiteContent } from "@/lib/website-content";

export default async function ToursPage() {
  const { ziarat, pageBanners } = await getWebsiteContent();
  return (
    <>
      <PageBanner {...pageBanners["tour-packages"]}>
        <Link className="pilgrim-button pilgrim-button-primary" href={travelEnquiryLink("tours")}>Request an Itinerary <ArrowRight aria-hidden="true" /></Link>
      </PageBanner>
      <section id="ziarat" className="site-shell home-section" aria-labelledby="ziarat-title">
        <div className="section-heading">
          <h2 id="ziarat-title">Iran and Iraq Ziarat</h2>
          <p>Tell us the shrines you’d like to visit. Ask our team about routes, travel dates, hotels and what can be included in your quote.</p>
        </div>
        <div className="travel-services-grid ziarat-grid">
          {ziarat.map(item => (
            <article className="travel-service-card" key={item.key}>
              <MapPin aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p className="tour-stops">{item.stops}</p>
              <Link href={travelEnquiryLink(item.key)} className="text-link" aria-label={`Request an itinerary for ${item.title}`}>Request an Itinerary <ArrowRight aria-hidden="true" /></Link>
            </article>
          ))}
        </div>
      </section>
      <section className="office-directory" aria-labelledby="more-tours-title">
        <div className="site-shell home-section">
          <div className="section-heading"><h2 id="more-tours-title">More ways to travel</h2></div>
          <div className="service-paths">
            <Link href="/umrah/"><Route aria-hidden="true" /> Umrah packages <ArrowRight aria-hidden="true" /></Link>
            <Link href="/hajj/"><Route aria-hidden="true" /> Hajj services <ArrowRight aria-hidden="true" /></Link>
            <Link href={travelEnquiryLink("tours")}><Route aria-hidden="true" /> Tailored group tours <ArrowRight aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}

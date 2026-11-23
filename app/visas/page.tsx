import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ClipboardList, Globe2, Plane } from "lucide-react";
import { PageBanner } from "@/components/layout/page-banner";
import { travelEnquiryLink } from "@/lib/travel-enquiries";

export const metadata: Metadata = {
  title: "Visa Assistance",
  description: "Ask Haram Pak for visa assistance for pilgrimage and other international travel. Discuss your destination and the documents you may need.",
  alternates: { canonical: "/visas/" },
};

const help = [
  { icon: Plane, title: "Pilgrimage travel", copy: "Ask about visa assistance for your Hajj, Umrah or Ziarat itinerary." },
  { icon: Globe2, title: "International visits", copy: "Share your destination, nationality and expected travel dates so our team can explain which services are available." },
  { icon: ClipboardList, title: "Document guidance", copy: "Request a checklist and ask how to share your documents securely. Visa decisions rest with the relevant authorities." },
];

export default function VisasPage() {
  return (
    <>
      <PageBanner label="TRAVEL DOCUMENTS" title="Visa assistance" description="Tell us where you’re travelling and when. Our team can help you understand the next steps for your journey.">
        <Link className="pilgrim-button pilgrim-button-primary" href={travelEnquiryLink("visas")}>Ask About a Visa <ArrowRight aria-hidden="true" /></Link>
      </PageBanner>
      <section className="site-shell home-section" aria-labelledby="visa-help-title">
        <div className="section-heading"><h2 id="visa-help-title">How we can help</h2></div>
        <div className="travel-services-grid">
          {help.map(({ icon: Icon, title, copy }) => (
            <article className="travel-service-card" key={title}>
              <Icon aria-hidden="true" />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

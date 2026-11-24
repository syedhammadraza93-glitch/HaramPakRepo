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

import { getWebsiteContent } from "@/lib/website-content";

const icons = [Plane, Globe2, ClipboardList];

export default async function VisasPage() {
  const { visas, pageBanners } = await getWebsiteContent();
  return (
    <>
      <PageBanner {...pageBanners["visas"]}>
        <Link className="pilgrim-button pilgrim-button-primary" href={travelEnquiryLink("visas")}>Ask About a Visa <ArrowRight aria-hidden="true" /></Link>
      </PageBanner>
      <section className="site-shell home-section" aria-labelledby="visa-help-title">
        <div className="section-heading"><h2 id="visa-help-title">How we can help</h2></div>
        <div className="travel-services-grid">
          {visas.map(({ title, copy }, index) => {
            const Icon = icons[index % icons.length];
            return (
            <article className="travel-service-card" key={title}>
              <Icon aria-hidden="true" />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          );
          })}
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageBanner } from "@/components/layout/page-banner";
import { PORTAL_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pilgrim Portal",
  description: "Get help with your Haram Pak booking or access the Pilgrim Portal when it is available.",
  alternates: { canonical: "/pilgrim-portal/" },
};

export default function PilgrimPortal() {
  return (
    <>
      <PageBanner label="BOOKING SUPPORT" title="Pilgrim Portal" description="Get help with an existing Haram Pak booking." image="/images/makkah-at-night.webp" />
      <section className="site-shell home-section">
        <div className="detail-panel max-w-2xl">
          <h2 className="text-2xl mb-2">{PORTAL_URL ? "Open the Pilgrim Portal" : "Need help with a booking?"}</h2>
          <p>{PORTAL_URL ? "Visit the portal to sign in to your pilgrim account." : "Online portal access is coming soon. Our Lahore team can help with your booking reference, travel details or documents."}</p>
          {PORTAL_URL && <a href={PORTAL_URL} className="pilgrim-button pilgrim-button-primary">Open Pilgrim Portal <ArrowUpRight aria-hidden="true" /></a>}
          <Link href="/contact/?support=portal#inquiry" className="text-link mt-3">Contact Booking Support <ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>
    </>
  );
}

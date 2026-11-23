import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageBanner } from "@/components/layout/page-banner";
import { PackageList } from "@/components/umrah/package-list";

export const metadata: Metadata = {
  title: "Umrah Packages from Lahore",
  description: "Compare Haram Pak’s 15-day and 20-day Umrah itineraries from Lahore. See hotel and itinerary details or ask for a tailored quote.",
  alternates: { canonical: "/umrah/" },
};

export default function UmrahPage() {
  return (
    <>
      <PageBanner label="UMRAH TRAVEL" title="Umrah packages from Lahore" description="Compare 15-day and 20-day group itineraries with direct flights planned from Lahore, or tailor your dates and accommodation." image="/images/makkah-golden-hour.webp" />
      <section className="site-shell home-section" aria-labelledby="choose-package">
        <div className="section-heading">
          <h2 id="choose-package">Find the right package</h2>
          <p>Ask our team to confirm your travel dates, seats, hotel rooms and total price.</p>
        </div>
        <PackageList />
        <Link href="/contact/#inquiry" className="text-link mt-6">Ask us to help you choose <ArrowRight aria-hidden="true" /></Link>
      </section>
    </>
  );
}

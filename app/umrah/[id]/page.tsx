import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import { PageBanner } from "@/components/layout/page-banner";
import { packageQuote, umrahPackages } from "@/lib/umrah-packages";
import { whatsappUrl } from "@/lib/inquiries";

export function generateStaticParams() {
  return umrahPackages.map(({ id }) => ({ id }));
}

export async function generateMetadata({ params }: PageProps<"/umrah/[id]">): Promise<Metadata> {
  const { id } = await params;
  const pkg = umrahPackages.find(item => item.id === id);
  if (!pkg) notFound();
  return { title: pkg.title, description: pkg.summary, alternates: { canonical: `/umrah/${pkg.id}/` } };
}

export default async function PackageDetail({ params }: PageProps<"/umrah/[id]">) {
  const { id } = await params;
  const pkg = umrahPackages.find(item => item.id === id);
  if (!pkg) notFound();
  const quote = packageQuote(pkg.id);

  return (
    <>
      <PageBanner label={pkg.category === "Group" ? "LAHORE GROUP UMRAH" : "TAILORED UMRAH"} title={pkg.title} description={pkg.summary} image={pkg.image}>
        <div className="flex flex-wrap items-center gap-x-5">
          <Link href={quote} className="pilgrim-button pilgrim-button-gold">Request a Quote <ArrowRight aria-hidden="true" /></Link>
          <Link href="/umrah/" className="text-link mt-5"><ArrowLeft aria-hidden="true" /> Back to Packages</Link>
        </div>
      </PageBanner>
      <div className="site-shell home-section">
        <dl className="fact-band">
          <div><dt>Duration</dt><dd>{pkg.duration}</dd></div>
          <div><dt>Departure</dt><dd>{pkg.departure}</dd></div>
          <div><dt>Stay</dt><dd>{pkg.stay}</dd></div>
        </dl>
        <div className="detail-grid">
          <div>
            <section className="detail-panel">
              <h2>Itinerary overview</h2>
              {pkg.itinerary ? (
                <ol className="itinerary">
                  {pkg.itinerary.map((stop, index) => (
                    <li key={index}><h3>{stop.nights} nights in {stop.city} · {stop.hotel}</h3><p>{stop.note}</p></li>
                  ))}
                </ol>
              ) : <p>{pkg.category === "Group" ? "Ask the team for the night-by-night itinerary, direct flight dates and transfer details for this departure." : "Tell us your dates and budget. We’ll help you choose the nights in each city, flights and room arrangements."}</p>}
            </section>
            {pkg.hotels && (
              <section className="detail-panel">
                <h2>Planned accommodation</h2>
                <div className="hotel-summary">
                  {pkg.hotels.map(hotel => <div key={hotel.name}><small>{hotel.city}</small><h3>{hotel.name}</h3><p>{hotel.note}</p></div>)}
                </div>
              </section>
            )}
            <section className="detail-panel">
              <h2>What your quote can cover</h2>
              <p>Ask for a written breakdown of flights, hotel rooms, visa assistance, ground transfers and any meals or Ziyarat arrangements you want included.</p>
            </section>
          </div>
          <aside className="detail-panel" aria-labelledby="quote-title">
            <h2 id="quote-title">Get your travel quote</h2>
            <p>Share your travel dates, group size and room preferences. Flights, hotels, inclusions and prices depend on availability.</p>
            <Link href={quote} className="pilgrim-button pilgrim-button-primary">Request a Quote <ArrowRight aria-hidden="true" /></Link>
            <br />
            <a href={whatsappUrl(`As-salamu alaykum! I’d like pricing and availability for ${pkg.title}.`)} target="_blank" rel="noopener noreferrer" className="text-link mt-3"><MessageCircle aria-hidden="true" /> Ask on WhatsApp</a>
          </aside>
        </div>
      </div>
    </>
  );
}

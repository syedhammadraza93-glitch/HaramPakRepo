import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BedDouble, CalendarDays, CheckCircle2, ClipboardList, HeartHandshake, MapPin, MessageCircle, Plane, ShieldCheck, Users, ClipboardCheck, Route } from "lucide-react";
import { Hero } from "@/components/home/hero";
import { QuickInquiry } from "@/components/home/quick-inquiry";
import { ClientCompanies } from "@/components/home/client-companies";
import { sampleClientCompanies } from "@/lib/client-companies";
import { FeaturedPackages } from "@/components/home/featured-packages";
import { FAQSection } from "@/components/home/faq-section";
import { PRIVATE_REVIEW, SITE_CONFIG, SITE_ORIGIN } from "@/lib/constants";
import { whatsappUrl } from "@/lib/inquiries";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const steps = [
  { icon: CalendarDays, title: "Share your plans", copy: "Tell us your dates, departure city and who is travelling." },
  { icon: ClipboardList, title: "Review your quote", copy: "Check the itinerary, rooms, flights and included services." },
  { icon: CheckCircle2, title: "Confirm your booking", copy: "Review availability and booking terms with our team." },
  { icon: Plane, title: "Prepare to travel", copy: "Get your travel details and departure guidance." },
];

import { getWebsiteContent } from "@/lib/website-content";

export default async function Home() {
  const content = await getWebsiteContent();
  const clientCompanies = content.clients;
  const featured = content.homepage.featuredPackageIds.flatMap(id => content.packages.filter(pkg => pkg.id === id));
  const business = {
    "@context": "https://schema.org", "@type": "TravelAgency", name: SITE_CONFIG.name,
    description: SITE_CONFIG.description, url: SITE_ORIGIN, telephone: content.contact.phone,
    address: { "@type": "PostalAddress", streetAddress: "Eden Tower, Main Boulevard, Gulberg III", addressLocality: "Lahore", addressCountry: "PK" },
    areaServed: "Pakistan",
  };

  const showSampleClients = PRIVATE_REVIEW && clientCompanies.length === 0;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(business).replace(/</g, "\\u003c") }} />
      <Hero content={content.homepage} />
      <QuickInquiry />
      <ClientCompanies companies={showSampleClients ? sampleClientCompanies : clientCompanies} sample={showSampleClients} />
      <section className="trust-strip" aria-label="Haram Pak experience">
        <div className="site-shell trust-grid">
          <div><ShieldCheck aria-hidden="true" /><p><strong>20+ years</strong><small>Serving pilgrims</small></p></div>
          <div><CheckCircle2 aria-hidden="true" /><p><strong>100% success rate*</strong><small>Company-reported track record</small></p></div>
          <div><HeartHandshake aria-hidden="true" /><p><strong>Lahore-based team</strong><small>Talk to a travel specialist</small></p></div>
        </div>
        <p className="site-shell trust-note">*Haram Pak reports a 100% success rate for past pilgrimage operations. Future travel depends on availability and approvals.</p>
      </section>
      <section className="site-shell travel-quick-links" aria-label="Travel services">
        <div className="service-paths">
          <Link href="/visas/"><ClipboardCheck aria-hidden="true" /> Visas <ArrowRight aria-hidden="true" /></Link>
          <Link href="/tour-packages/"><Route aria-hidden="true" /> Tour Packages <ArrowRight aria-hidden="true" /></Link>
          <Link href="/flights/"><Plane aria-hidden="true" /> Tickets <ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>
      <FeaturedPackages packages={featured} />
      <section className="stay-section" aria-labelledby="stay-title">
        <div className="site-shell stay-grid">
          <div className="section-heading">
            <p className="section-kicker"><span /> MAKKAH &amp; MADINAH</p>
            <h2 id="stay-title">Know where you’ll stay</h2>
            <p>Compare hotel locations, room arrangements and transport before booking.</p>
            <Link href="/hotels/" className="pilgrim-button pilgrim-button-outline">Explore Hotel Options <ArrowRight aria-hidden="true" /></Link>
          </div>
          <Link href="/hotels/#makkah" className="stay-tile">
            <Image src="/images/makkah-at-night.webp" alt="" fill sizes="(max-width: 720px) 100vw, 400px" />
            <div><span><MapPin aria-hidden="true" /> Makkah</span><strong>Al Kiswah Towers</strong><small>Ask about the route to Masjid al-Haram</small></div>
          </Link>
          <Link href="/hotels/#madinah" className="stay-tile">
            <Image src="/images/madinah-courtyard.webp" alt="" fill sizes="(max-width: 720px) 100vw, 400px" />
            <div><span><MapPin aria-hidden="true" /> Madinah</span><strong>Najoom Al Khair</strong><small>Approx. 600 m from Masjid an-Nabawi</small></div>
          </Link>
        </div>
      </section>
      <section className="site-shell home-section" aria-labelledby="steps-title">
        <div className="section-heading centered-heading">
          <p className="section-kicker"><span /> FROM ENQUIRY TO DEPARTURE</p>
          <h2 id="steps-title">How to book your journey</h2>
        </div>
        <ol className="journey-steps">
          {steps.map(({ icon: Icon, title, copy }) => <li key={title}><div><Icon aria-hidden="true" /></div><h3>{title}</h3><p>{copy}</p></li>)}
        </ol>
        <div className="service-paths">
          <Link href="/hajj/"><Users aria-hidden="true" /> Hajj services <ArrowRight aria-hidden="true" /></Link>
          <Link href="/flights/"><Plane aria-hidden="true" /> Flight assistance <ArrowRight aria-hidden="true" /></Link>
          <Link href="/hotels/"><BedDouble aria-hidden="true" /> Hotel enquiries <ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>
      <FAQSection faqs={content.faqs} />
      <section className="home-cta" aria-labelledby="home-cta-title">
        <div className="site-shell">
          <h2 id="home-cta-title">Ready to plan your pilgrimage?</h2>
          <p>Tell us what you have in mind and we’ll help you work through the details.</p>
          <div className="hero-actions">
            <Link href="/contact/#inquiry" className="pilgrim-button pilgrim-button-gold">Request a Quote <ArrowRight aria-hidden="true" /></Link>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="pilgrim-button pilgrim-button-outline"><MessageCircle aria-hidden="true" /> Chat on WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { Suspense } from "react";
import { OfficeDirectory } from "@/components/contact/office-directory";
import { PageBanner } from "@/components/layout/page-banner";
import { ContactInquiry } from "@/components/contact/contact-inquiry";
import { SITE_CONFIG } from "@/lib/constants";
import { phoneUrl, whatsappUrl } from "@/lib/inquiries";

export const metadata: Metadata = {
  title: "Contact Us | Pakistan and Canada",
  description: "Contact Haram Pak’s Pakistan and Canada teams about Hajj, Umrah, Ziarat, visa assistance, tickets and tour packages.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  const { contact } = SITE_CONFIG;
  return (
    <>
      <PageBanner label="CONTACT HARAM PAK" title="Contact us" description="Speak with our Pakistan or Canada team about your pilgrimage, tour, visa or flight booking." image="/images/madinah-courtyard.webp" />
      <div className="site-shell home-section contact-grid">
        <section id="inquiry" className="detail-panel" aria-labelledby="contact-inquiry-title">
          <h2 id="contact-inquiry-title">Tell us about your trip</h2>
          <Suspense fallback={<p>Loading enquiry form. You can also <a href={whatsappUrl()} className="contact-method">open WhatsApp</a>.</p>}>
            <ContactInquiry />
          </Suspense>
        </section>
        <aside className="detail-panel" aria-labelledby="contact-details-title">
          <h2 id="contact-details-title">Contact details</h2>
          <a className="contact-method" href={phoneUrl(contact.phones.pakistan)}>{contact.phones.pakistan}</a>
          <a className="contact-method" href={phoneUrl(contact.phones.international)}>{contact.phones.international} (Canada / US)</a>
          <a className="contact-method" href={`mailto:${contact.email}`}>{contact.email}</a>
          <a className="contact-method" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
          <a className="contact-method" href="#offices">See our office directory</a>
        </aside>
      </div>
      <OfficeDirectory />
    </>
  );
}

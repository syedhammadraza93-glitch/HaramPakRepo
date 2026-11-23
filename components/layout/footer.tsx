import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Brand } from "@/components/layout/brand";
import { SITE_CONFIG } from "@/lib/constants";
import { phoneUrl } from "@/lib/inquiries";

export function Footer() {
  const { contact, navigation } = SITE_CONFIG;
  return (
    <footer className="site-footer">
      <div className="site-shell">
        <div className="footer-grid">
          <div>
            <Brand />
            <p className="footer-description">Hajj and Umrah travel from Pakistan, with over 20 years of experience serving pilgrims.</p>
          </div>
          <nav aria-label="Travel links">
            <h2>Explore</h2>
            {navigation.filter(({ href }) => ["/about", "/umrah", "/hajj", "/hotels", "/visas", "/tour-packages", "/flights"].includes(href)).map(({ href, name }) => <Link key={href} href={href}>{name}</Link>)}
          </nav>
          <nav aria-label="Support links">
            <h2>Pilgrim support</h2>
            <Link href="/#faq">FAQs</Link>
            <Link href="/services/">Other Services</Link>
            <Link href="/gallery/">Gallery</Link>
            <Link href="/contact/">Contact Us</Link>
            <Link href="/contact/#offices">Our Offices</Link>
            <Link href="/pilgrim-portal/">Pilgrim Portal</Link>
          </nav>
          <div className="footer-contact">
            <h2>Get in touch</h2>
            <p><MapPin aria-hidden="true" /> {contact.address}</p>
            <a href={phoneUrl(contact.phones.pakistan)}><Phone aria-hidden="true" /> {contact.phones.pakistan}</a>
            <a href={`mailto:${contact.email}`}><Mail aria-hidden="true" /> {contact.email}</a>
          </div>
        </div>
        <div className="footer-base">© {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</div>
      </div>
    </footer>
  );
}

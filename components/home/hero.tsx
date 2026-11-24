import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MessageCircle, MapPin } from "lucide-react";
import { whatsappUrl } from "@/lib/inquiries";

import type { WebsiteContent } from "@/lib/website-content";

export function Hero({ content }: { content: WebsiteContent["homepage"] }) {
  return (
    <section className="home-hero" aria-labelledby="home-title">
      <div className="home-hero-image">
        <picture>
          <source media="(max-width: 760px)" srcSet="/images/makkah-golden-hour-mobile.webp" />
          <Image src="/images/makkah-golden-hour.webp" fill loading="eager" fetchPriority="high" sizes="(max-width: 760px) 100vw, 82vw" alt="" />
        </picture>
      </div>
      <div className="hero-ornament" aria-hidden="true" />
      <div className="site-shell home-hero-inner">
        <div className="home-hero-copy">
          <p className="section-kicker"><span /> {content.kicker}</p>
          <h1 id="home-title">{content.headline} <em>{content.emphasis}</em></h1>
          <p className="hero-description">{content.description}</p>
          <div className="hero-actions">
            <Link href="/umrah/" className="pilgrim-button pilgrim-button-gold">Explore Umrah Packages <ArrowUpRight aria-hidden="true" /></Link>
            <a href={whatsappUrl("As-salamu alaykum! I’d like help planning my pilgrimage.")} target="_blank" rel="noopener noreferrer" className="pilgrim-button pilgrim-button-outline"><MessageCircle aria-hidden="true" /> WhatsApp Us</a>
          </div>
        </div>
        <span className="hero-location"><MapPin aria-hidden="true" /> Masjid al-Haram, Makkah</span>
      </div>
    </section>
  );
}

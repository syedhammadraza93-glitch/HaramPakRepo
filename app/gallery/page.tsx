import type { Metadata } from "next";
import { PageBanner } from "@/components/layout/page-banner";
import { GalleryGrid } from "@/components/gallery/gallery-grid";

export const metadata: Metadata = {
  title: "Makkah and Madinah Gallery",
  description: "Explore illustrated views of the Kaaba, Masjid al-Haram and Masjid an-Nabawi.",
  alternates: { canonical: "/gallery/" },
};

export default function GalleryPage() {
  return (
    <>
      <PageBanner label="DESTINATION GALLERY" title="Makkah and Madinah" description="Illustrated views of Masjid al-Haram and Masjid an-Nabawi, the two sacred mosques at the heart of Umrah travel." image="/images/makkah-golden-hour.webp" />
      <section className="site-shell home-section" aria-labelledby="gallery-title">
        <div className="section-heading"><h2 id="gallery-title">Explore the holy cities</h2></div>
        <GalleryGrid />
      </section>
    </>
  );
}

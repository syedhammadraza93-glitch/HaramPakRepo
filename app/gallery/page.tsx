import { getWebsiteContent } from "@/lib/website-content";
import type { Metadata } from "next";
import { PageBanner } from "@/components/layout/page-banner";
import { GalleryGrid } from "@/components/gallery/gallery-grid";

export const metadata: Metadata = {
  title: "Makkah and Madinah Gallery",
  description: "Explore illustrated views of the Kaaba, Masjid al-Haram and Masjid an-Nabawi.",
  alternates: { canonical: "/gallery/" },
};

export default async function GalleryPage() {
  const { pageBanners } = await getWebsiteContent();
  return (
    <>
      <PageBanner {...pageBanners["gallery"]} />
      <section className="site-shell home-section" aria-labelledby="gallery-title">
        <div className="section-heading"><h2 id="gallery-title">Explore the holy cities</h2></div>
        <GalleryGrid />
      </section>
    </>
  );
}

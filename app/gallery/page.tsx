"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    src: "/images/kaaba-dusk.jpg",
    title: "Kaaba at Dusk",
    description: "The Holy Kaaba during evening prayers",
    category: "Masjid al-Haram",
  },
  {
    src: "/images/kaaba-daytime.jpg",
    title: "Kaaba - Daytime View",
    description: "The Kaaba under clear blue skies",
    category: "Masjid al-Haram",
  },
  {
    src: "/images/masjid-al-haram-courtyard.jpg",
    title: "Masjid al-Haram Courtyard",
    description: "Pilgrims gathering in the sacred courtyard",
    category: "Masjid al-Haram",
  },
  {
    src: "/images/masjid-al-haram-night.jpg",
    title: "Masjid al-Haram at Night",
    description: "The magnificent mosque illuminated at night",
    category: "Masjid al-Haram",
  },
  {
    src: "/images/kaaba-pilgrims.jpg",
    title: "Pilgrims at the Kaaba",
    description: "Faithful gathering for worship",
    category: "Pilgrim Journeys",
  },
  {
    src: "/images/masjid-nabawi-exterior.jpg",
    title: "Masjid an-Nabawi",
    description: "The Prophet's Mosque with its iconic green dome",
    category: "Masjid an-Nabawi",
  },
  {
    src: "/images/masjid-nabawi-minarets.jpg",
    title: "Masjid an-Nabawi Minarets",
    description: "The beautiful minarets of Masjid an-Nabawi",
    category: "Masjid an-Nabawi",
  },
  {
    src: "/images/masjid-nabawi-closeup.jpg",
    title: "Masjid an-Nabawi Details",
    description: "Ornate architectural details of the Prophet's Mosque",
    category: "Masjid an-Nabawi",
  },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);

  const categories = ["all", ...Array.from(new Set(galleryImages.map(img => img.category)))];
  
  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxImage(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = () => {
    if (lightboxImage !== null) {
      setLightboxImage((lightboxImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (lightboxImage !== null) {
      setLightboxImage((lightboxImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <div>
      {/* Hero Section with Unique Photography */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/masjid-al-haram-courtyard.jpg"
            alt="Masjid al-Haram courtyard"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#062A26]/85 via-[#063B32]/75 to-[#062A26]/90" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <p className="text-[#C5A46D] text-sm font-semibold tracking-wider uppercase mb-4">
              Our Gallery
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Sacred Moments
            </h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed">
              A glimpse of the sacred places and spiritual journeys we facilitate.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={
                  selectedCategory === category
                    ? "bg-[#063B32] hover:bg-[#062A26] text-white"
                    : "border-[#063B32] text-[#063B32] hover:bg-[#063B32] hover:text-white"
                }
              >
                {category === "all" ? "All Photos" : category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery - Masonry Layout */}
      <section className="py-24 md:py-32 bg-[#FAF8F3]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {filteredImages.map((image, index) => (
                <div 
                  key={index} 
                  className="break-inside-avoid mb-6"
                >
                  <Card 
                    className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300"
                    onClick={() => openLightbox(index)}
                  >
                    <div className="relative overflow-hidden">
                      <div className="relative w-full" style={{ aspectRatio: index % 3 === 0 ? "4/5" : index % 2 === 0 ? "16/9" : "1/1" }}>
                        <Image
                          src={image.src}
                          alt={image.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <p className="text-xs text-[#C5A46D] font-semibold mb-1">{image.category}</p>
                          <h3 className="font-semibold text-sm">{image.title}</h3>
                        </div>
                      </div>
                    </div>
                    <CardContent className="pt-4">
                      <h3 className="text-lg font-semibold text-[#062A26] mb-1">
                        {image.title}
                      </h3>
                      <p className="text-sm text-foreground/80">
                        {image.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-[#C5A46D] transition-colors z-10"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 text-white hover:text-[#C5A46D] transition-colors z-10"
          >
            <ChevronLeft className="h-12 w-12" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 text-white hover:text-[#C5A46D] transition-colors z-10"
          >
            <ChevronRight className="h-12 w-12" />
          </button>

          <div 
            className="relative max-w-6xl max-h-[90vh] mx-auto px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredImages[lightboxImage].src}
              alt={filteredImages[lightboxImage].title}
              width={1200}
              height={800}
              className="object-contain max-h-[90vh] w-auto"
              quality={100}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <p className="text-sm text-[#C5A46D] font-semibold mb-1">
                {filteredImages[lightboxImage].category}
              </p>
              <h3 className="text-2xl font-bold mb-2">
                {filteredImages[lightboxImage].title}
              </h3>
              <p className="text-white/90">
                {filteredImages[lightboxImage].description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Note Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-[#FAF8F3] p-6 rounded-lg border border-[#C5A46D]/30">
            <h3 className="font-semibold text-lg mb-2 text-[#062A26]">About Our Gallery</h3>
            <p className="text-sm text-foreground/80 mb-3">
              This gallery is being developed to showcase properly licensed images of sacred sites
              and authentic moments from the pilgrimages we facilitate.
            </p>
            <p className="text-sm text-foreground/80">
              All images displayed respect the sanctity of holy places and are sourced from
              legitimate, properly attributed sources. We are committed to using only licensed
              photography that honors the spiritual significance of these locations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

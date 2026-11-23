export const SITE_CONFIG = {
  name: "Haram Pak Pvt Ltd",
  tagline: "Your Sacred Journey Begins Here",
  description: "Thoughtfully planned Hajj and Umrah journeys, with care at every step.",
  
  contact: {
    // Note: Contact information pending final verification
    phones: {
      pakistan: "+92 322 8054660",
      pakistanAlt: "+92 300 7646658",
      international: "+1 437 423 1246",
    },
    whatsapp: "+923228054660", // International format for WhatsApp
    email: "info@harampak.pk",
    address: "Eden Tower, Main Boulevard, Gulberg III, Lahore, Pakistan",
  },
  
  social: {
    facebook: "https://www.facebook.com/share/1EGSjnsmoG/",
  },
  
  navigation: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Umrah Packages", href: "/umrah" },
    { name: "Hajj", href: "/hajj" },
    { name: "Hotels", href: "/hotels" },
    { name: "Visas", href: "/visas" },
    { name: "Tour Packages", href: "/tour-packages" },
    { name: "Tickets", href: "/flights" },
    { name: "Other Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ],
} as const;

export const COLORS = {
  emeraldGreen: "#063B32",
  midnightGreen: "#062A26",
  mutedGold: "#C5A46D",
  warmIvory: "#FAF8F3",
} as const;

export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_URL || "https://www.harampak.pk";
export const PRIVATE_REVIEW = process.env.NEXT_PUBLIC_PRIVATE_REVIEW === "1";

const configuredPortalUrl = process.env.NEXT_PUBLIC_PILGRIM_PORTAL_URL?.trim();
export const PORTAL_URL = configuredPortalUrl?.startsWith("https://") ? configuredPortalUrl : undefined;

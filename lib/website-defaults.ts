import { SITE_CONFIG } from "./constants";
import { clientCompanies } from "./client-companies";
import { officeRegions } from "./offices";
import { umrahPackages } from "./umrah-packages";

export const faqs = [
  {
    question: "Which Umrah packages depart from Lahore?",
    answer: "Haram Pak offers 15-day and 20-day Umrah itineraries with direct flights planned from Lahore. Ask our team to confirm dates, airline, fares and seat availability for your group.",
  },
  {
    question: "What is included in an Umrah package?",
    answer: "A quote can cover return flights, accommodation, visa assistance and ground transfers. Ask for a written breakdown of what is included in your itinerary before confirming.",
  },
  {
    question: "Where do pilgrims stay in Makkah and Madinah?",
    answer: "The 15-day and 20-day itineraries list Al Kiswah Towers in Makkah and Najoom Al Khair in Madinah, approximately 600 m from Masjid an-Nabawi. Hotels and walking routes should be confirmed for your travel dates.",
  },
  {
    question: "Can you help with visas and travel documents?",
    answer: "Yes. Share your itinerary and traveller details with our team so we can explain the current document checklist and visa process for your circumstances.",
  },
  {
    question: "Can I tailor a package for my family?",
    answer: "Yes. Tell us your preferred dates, group size, room requirements and any mobility needs so we can discuss suitable hotels, flights and transfers.",
  },
  {
    question: "How do I get a price and confirm a booking?",
    answer: "Request a quote with your travel month and group size. Our team can confirm availability and share the itinerary, total price and booking terms before you decide.",
  },
];

const ziarat = [
  { title: "Iraq Ziarat", key: "iraq-ziarat", description: "Ask about itineraries covering the shrines of Imam Ali in Najaf and Imam Hussain and Hazrat Abbas in Karbala, with visits to Kufa, Kadhimiya and Samarra.", stops: "Najaf · Karbala · Kufa · Kadhimiya · Samarra" },
  { title: "Iran Ziarat", key: "iran-ziarat", description: "Explore a route to the shrine of Imam Reza in Mashhad and the shrine of Hazrat Fatima Masumeh and Jamkaran Mosque in Qom.", stops: "Mashhad · Qom" },
  { title: "Iran and Iraq Ziarat", key: "iran-iraq-ziarat", description: "Share your preferred cities and travel month to discuss a combined itinerary.", stops: "Multi-country itinerary" },
  { title: "Arbaeen Ziarat", key: "arbaeen", description: "Ask about seasonal travel to Karbala for Arbaeen and options around the Najaf-to-Karbala pilgrimage route.", stops: "Najaf · Karbala" },
] as const;

const help = [
  { title: "Pilgrimage travel", copy: "Ask about visa assistance for your Hajj, Umrah or Ziarat itinerary." },
  { title: "International visits", copy: "Share your destination, nationality and expected travel dates so our team can explain which services are available." },
  { title: "Document guidance", copy: "Request a checklist and ask how to share your documents securely. Visa decisions rest with the relevant authorities." },
];
export const websiteDefaults = {
  pageBanners: {
    "about": {
      "label": "ABOUT HARAM PAK",
      "title": "20+ years serving pilgrims",
      "description": "A Lahore-based Hajj and Umrah travel team helping pilgrims plan their journey to Makkah and Madinah.",
      "image": "/images/madinah-courtyard.webp"
    },
    "flights": {
      "label": "FLIGHT ASSISTANCE",
      "title": "Flight tickets",
      "description": "Share your route, travel dates and group size to ask about flights from Pakistan.",
      "image": "/images/makkah-golden-hour.webp"
    },
    "gallery": {
      "label": "DESTINATION GALLERY",
      "title": "Makkah and Madinah",
      "description": "Illustrated views of Masjid al-Haram and Masjid an-Nabawi, the two sacred mosques at the heart of Umrah travel.",
      "image": "/images/makkah-golden-hour.webp"
    },
    "hajj": {
      "label": "HAJJ SERVICES",
      "title": "Plan your Hajj from Pakistan",
      "description": "Talk to our Lahore team about Hajj registration, accommodations, transport and current availability.",
      "image": "/images/makkah-at-night.webp"
    },
    "hotels": {
      "label": "PILGRIM ACCOMMODATION",
      "title": "Hotels in Makkah and Madinah",
      "description": "Compare locations and ask our team about room types, walking routes and transport before you book.",
      "image": "/images/madinah-courtyard.webp"
    },
    "services": {
      "label": "TRAVEL SUPPORT",
      "title": "Other travel services",
      "description": "Speak with our team about tickets, local and international travel, ground transport and accommodation.",
      "image": "/images/makkah-at-night.webp"
    },
    "tour-packages": {
      "label": "PILGRIMAGE & GROUP TRAVEL",
      "title": "Tour packages",
      "description": "Explore Iran and Iraq Ziarat, Hajj and Umrah, or enquire about a trip tailored to your group.",
      "image": ""
    },
    "umrah": {
      "label": "UMRAH TRAVEL",
      "title": "Umrah packages from Lahore",
      "description": "Compare 15-day and 20-day group itineraries with direct flights planned from Lahore, or tailor your dates and accommodation.",
      "image": "/images/makkah-golden-hour.webp"
    },
    "visas": {
      "label": "TRAVEL DOCUMENTS",
      "title": "Visa assistance",
      "description": "Tell us where you’re travelling and when. Our team can help you understand the next steps for your journey.",
      "image": ""
    }
  },
  packages: umrahPackages,
  homepage: {
    kicker: "HAJJ & UMRAH FROM PAKISTAN",
    headline: "Your Sacred Journey",
    emphasis: "Begins Here.",
    description: "Plan your Hajj or Umrah with a Lahore team that helps you choose flights, hotels and travel arrangements around your needs.",
    featuredPackageIds: umrahPackages.slice(0, 3).map(pkg => pkg.id),
  },
  faqs,
  offices: officeRegions,
  clients: clientCompanies,
  ziarat,
  visas: help,
  contact: {
    description: "Speak with our Pakistan or Canada team about your pilgrimage, tour, visa or flight booking.",
    email: SITE_CONFIG.contact.email,
    phone: SITE_CONFIG.contact.phones.pakistan,
    internationalPhone: SITE_CONFIG.contact.phones.international,
  },
};

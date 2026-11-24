export type UmrahPackage = {
  id: string;
  title: string;
  category: "Group" | "Tailored";
  label: string;
  image: string;
  imageAlt: string;
  summary: string;
  duration: string;
  departure: string;
  stay: string;
  itinerary?: { city: string; nights: number; hotel: string; note: string }[];
  hotels?: { city: string; name: string; note: string }[];
};

const groupHotels = [
  { city: "Makkah", name: "Al Kiswah Towers", note: "Ask about the route to Masjid al-Haram and transport options." },
  { city: "Madinah", name: "Najoom Al Khair", note: "Approximately 600 m from Masjid an-Nabawi. Ask us about the walking route." },
];
const makkah = "/images/makkah-golden-hour.webp";
const madinah = "/images/madinah-courtyard.webp";
const night = "/images/makkah-at-night.webp";

export const umrahPackages: UmrahPackage[] = [
  {
    id: "15-day-umrah-lahore",
    title: "15-Day Umrah from Lahore",
    category: "Group",
    label: "15 days · 14 nights",
    image: makkah,
    imageAlt: "The Kaaba and Masjid al-Haram in Makkah at golden hour",
    summary: "A 14-night stay split between Makkah, Madinah, and a final return to Makkah.",
    duration: "15 days / 14 nights",
    departure: "Lahore · direct flight planned",
    stay: "8 nights in Makkah · 6 nights in Madinah",
    hotels: groupHotels,
    itinerary: [
      { city: "Makkah", nights: 5, hotel: "Al Kiswah Towers", note: "Begin your stay in Makkah and make time for Umrah and prayers at Masjid al-Haram." },
      { city: "Madinah", nights: 6, hotel: "Najoom Al Khair", note: "Spend six nights near Masjid an-Nabawi." },
      { city: "Makkah", nights: 3, hotel: "Al Kiswah Towers", note: "Return to Makkah for the final three nights before the journey home." },
    ],
  },
  {
    id: "20-day-umrah-lahore",
    title: "20-Day Umrah from Lahore",
    category: "Group",
    label: "20 days",
    image: madinah,
    imageAlt: "The courtyard and green dome of Masjid an-Nabawi in Madinah",
    summary: "A longer pilgrimage with stays in both holy cities and a direct flight planned from Lahore.",
    duration: "20 days",
    departure: "Lahore · direct flight planned",
    stay: "Makkah and Madinah · ask for the night split",
    hotels: groupHotels,
  },
  {
    id: "custom-umrah",
    title: "Tailored Umrah",
    category: "Tailored",
    label: "Flexible dates",
    image: night,
    imageAlt: "The Kaaba and illuminated courtyard of Masjid al-Haram at night",
    summary: "Build a journey around your family, preferred travel dates and accommodation needs.",
    duration: "Flexible",
    departure: "Share your preferred departure city",
    stay: "Choose your time in each city",
  },
  ...[
    { id: "economy-umrah", title: "Economy Umrah", label: "Budget-focused", summary: "Ask for a quote that prioritizes essential travel arrangements and keeps accommodation costs in mind." },
    { id: "standard-umrah", title: "Standard Umrah", label: "Flexible arrangements", summary: "Discuss a plan that balances your preferred hotels, flight options and budget." },
    { id: "premium-umrah", title: "Premium Umrah", label: "Preferred accommodation", summary: "Ask about upgraded accommodation, preferred flight times and private transfer options." },
    { id: "family-umrah", title: "Family Umrah", label: "Family travel", summary: "Tell us about your room needs, group size and any mobility requirements." },
    { id: "ramadan-umrah", title: "Ramadan Umrah", label: "Seasonal travel", summary: "Ask which dates, rooms and flight options are available for your preferred Ramadan stay." },
  ].map((item, index): UmrahPackage => ({
    ...item,
    category: "Tailored",
    image: [makkah, madinah, night, madinah, night][index],
    imageAlt: "",
    duration: "Confirm with the team",
    departure: "Share your preferred departure city",
    stay: "Discuss accommodation in Makkah and Madinah",
  })),
];

export function packageQuote(id: string) {
  return `/contact/?package=${encodeURIComponent(id)}#inquiry`;
}

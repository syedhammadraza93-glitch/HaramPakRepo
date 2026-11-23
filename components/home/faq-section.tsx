import { Plus } from "lucide-react";
import Link from "next/link";

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

export function FAQSection() {
  return (
    <section className="site-shell home-section faq-section" id="faq" aria-labelledby="faq-title">
      <div className="section-heading">
        <p className="section-kicker"><span /> PILGRIM GUIDANCE</p>
        <h2 id="faq-title">Questions before you travel</h2>
        <p>Our Lahore team can help with your itinerary, room needs and booking questions.</p>
        <Link href="/contact/" className="text-link">Contact the Team</Link>
      </div>
      <div className="faq-list">
        {faqs.map(({ question, answer }) => (
          <details key={question}><summary>{question}<Plus aria-hidden="true" /></summary><p>{answer}</p></details>
        ))}
      </div>
    </section>
  );
}

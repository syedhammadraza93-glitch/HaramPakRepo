import { Plus } from "lucide-react";
import Link from "next/link";

export function FAQSection({ faqs }: { faqs: { question: string; answer: string }[] }) {
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

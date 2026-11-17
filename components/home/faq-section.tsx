import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is included in your Umrah packages?",
    answer: "Our Umrah packages typically include visa processing assistance, return flights, accommodation in Makkah and Madinah, and ground transportation. Specific inclusions vary by package category. Please contact us for detailed information about a specific package.",
  },
  {
    question: "How far in advance should I book my Umrah trip?",
    answer: "We recommend booking at least 2-3 months in advance to ensure availability and allow sufficient time for visa processing and travel arrangements. However, we also accommodate urgent bookings when possible.",
  },
  {
    question: "Do you provide group discounts?",
    answer: "Yes, we offer special arrangements for groups and families. Please contact us with your group size and requirements for a customized quote.",
  },
  {
    question: "What documents do I need for Umrah?",
    answer: "You'll need a valid passport (with at least 6 months validity), passport-sized photographs, vaccination certificates (if required), and other documents as specified by Saudi authorities. We'll provide you with a complete checklist upon booking.",
  },
  {
    question: "Can I customize my package?",
    answer: "Absolutely! We offer flexible packages and can customize your travel arrangements based on your preferences, budget, and specific requirements. Contact us to discuss your needs.",
  },
  {
    question: "What support do you provide during the trip?",
    answer: "We provide 24/7 contact support and assistance throughout your journey. Our team is available to help with any questions or concerns that arise during your travel.",
  },
];

export function FAQSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C5A46D] text-sm font-semibold tracking-wider uppercase mb-4">
              Common Questions
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#062A26] mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-foreground/75 leading-relaxed">
              Find answers to common questions about our services and travel arrangements.
            </p>
          </div>

          <Accordion className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-2xl px-6 py-2 bg-[#FAF8F3]/50 hover:border-[#C5A46D] transition-colors"
              >
                <AccordionTrigger className="text-left text-[#062A26] font-semibold text-lg hover:text-[#063B32]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/75 text-base leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

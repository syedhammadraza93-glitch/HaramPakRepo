import { Hero } from "@/components/home/hero";
import { QuickInquiry } from "@/components/home/quick-inquiry";
import { Introduction } from "@/components/home/introduction";
import { FeaturedPackages } from "@/components/home/featured-packages";
import { BookingJourney } from "@/components/home/booking-journey";
import { ServicesGrid } from "@/components/home/services-grid";
import { DestinationsShowcase } from "@/components/home/destinations-showcase";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { FAQSection } from "@/components/home/faq-section";
import { CTASection } from "@/components/home/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickInquiry />
      <Introduction />
      <FeaturedPackages />
      <BookingJourney />
      <ServicesGrid />
      <DestinationsShowcase />
      <WhyChooseUs />
      <FAQSection />
      <CTASection />
    </>
  );
}

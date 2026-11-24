import { FlightInquiry } from "@/components/contact/flight-inquiry";
import { PageBanner } from "@/components/layout/page-banner";
import { getWebsiteContent } from "@/lib/website-content";

export default async function FlightsPage() {
  const { pageBanners } = await getWebsiteContent();
  return <><PageBanner {...pageBanners.flights} /><FlightInquiry /></>;
}

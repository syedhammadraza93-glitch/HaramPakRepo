import { getWebsiteContent } from "@/lib/website-content";
import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Palmtree, Building2, Map, Camera, Ship, Train } from "lucide-react";
import Link from "next/link";
import { PageBanner } from "@/components/layout/page-banner";

export const metadata: Metadata = {
  alternates: { canonical: "/services/" },
  title: "Other Travel Services - Haram Pak Pvt Ltd",
  description: "Additional travel services including international tours, domestic travel, and holiday packages.",
};

export default async function ServicesPage() {
  const { pageBanners } = await getWebsiteContent();
  return (
    <div>
      <PageBanner {...pageBanners["services"]} />

      {/* Services Grid */}
      <section className="py-20 bg-[#FAF8F3]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="flex flex-col">
              <CardHeader>
                <Palmtree className="h-12 w-12 text-[#063B32] mb-3" />
                <CardTitle className="text-xl">International Tours</CardTitle>
                <CardDescription>
                  Discover destinations around the world with our international travel packages
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-sm text-foreground/80 mb-4">
                  We can help arrange international travel to various destinations, including visa
                  assistance, flight bookings, and accommodation arrangements.
                </p>
                <div className="mt-auto">
                  <Link href="/contact/#inquiry" className="pilgrim-button pilgrim-button-primary">
                      Inquire Now
                    </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <Building2 className="h-12 w-12 text-[#063B32] mb-3" />
                <CardTitle className="text-xl">Domestic Travel</CardTitle>
                <CardDescription>
                  Explore Pakistan’s beautiful destinations with our domestic packages
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-sm text-foreground/80 mb-4">
                  From northern areas to coastal regions, we offer travel arrangements for domestic
                  tourism, including hotels, transport, and guided tours.
                </p>
                <div className="mt-auto">
                  <Link href="/contact/#inquiry" className="pilgrim-button pilgrim-button-primary">
                      Inquire Now
                    </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <Camera className="h-12 w-12 text-[#063B32] mb-3" />
                <CardTitle className="text-xl">Holiday Packages</CardTitle>
                <CardDescription>
                  Customized vacation packages for families and groups
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-sm text-foreground/80 mb-4">
                  Tailored holiday experiences designed to create memorable vacations for you and
                  your loved ones, with flexible itineraries.
                </p>
                <div className="mt-auto">
                  <Link href="/contact/#inquiry" className="pilgrim-button pilgrim-button-primary">
                      Inquire Now
                    </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <Map className="h-12 w-12 text-[#063B32] mb-3" />
                <CardTitle className="text-xl">Visa Services</CardTitle>
                <CardDescription>
                  Assistance with visa applications for various countries
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-sm text-foreground/80 mb-4">
                  We provide support and guidance for visa applications to help streamline your
                  travel preparation process.
                </p>
                <div className="mt-auto">
                  <Link href="/contact/#inquiry" className="pilgrim-button pilgrim-button-primary">
                      Inquire Now
                    </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <Train className="h-12 w-12 text-[#063B32] mb-3" />
                <CardTitle className="text-xl">Transport Services</CardTitle>
                <CardDescription>
                  Ground transportation and travel coordination
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-sm text-foreground/80 mb-4">
                  Reliable ground transportation services for your travel needs, including airport
                  transfers and inter-city travel.
                </p>
                <div className="mt-auto">
                  <Link href="/contact/#inquiry" className="pilgrim-button pilgrim-button-primary">
                      Inquire Now
                    </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <Ship className="h-12 w-12 text-[#063B32] mb-3" />
                <CardTitle className="text-xl">Group Travel</CardTitle>
                <CardDescription>
                  Specialized services for group and corporate travel
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-sm text-foreground/80 mb-4">
                  Comprehensive group travel management for families, corporate groups, and
                  organizations with special requirements.
                </p>
                <div className="mt-auto">
                  <Link href="/contact/#inquiry" className="pilgrim-button pilgrim-button-primary">
                      Inquire Now
                    </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-[#FAF8F3] p-6 rounded-lg border border-[#C5A46D]/30">
            <h3 className="font-semibold text-lg mb-2 text-[#062A26]">Service Availability</h3>
            <p className="text-sm text-foreground/80 mb-4">
              The services listed above represent general travel assistance we aim to provide.
              Specific service availability, terms, and arrangements are subject to confirmation
              when you contact us.
            </p>
            <p className="text-sm text-foreground/80">
              Please reach out to discuss your specific travel needs, and we’ll work to accommodate
              your requirements to the best of our ability.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#063B32] to-[#062A26] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Have a Specific Travel Need?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Contact us to discuss how we can help with your travel plans.
            </p>
            <Link href="/contact/#inquiry" className="pilgrim-button pilgrim-button-primary">
                Contact Us Today
              </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

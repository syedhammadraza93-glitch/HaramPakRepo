import { getWebsiteContent } from "@/lib/website-content";
import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, AlertCircle, FileText, Calendar } from "lucide-react";
import { PageBanner } from "@/components/layout/page-banner";
import { ArrowRight } from "lucide-react";
import { HajjInquiryForm } from "@/components/hajj/hajj-inquiry-form";

export const metadata: Metadata = {
  title: "Hajj Travel Services from Pakistan",
  alternates: { canonical: "/hajj/" },
  description: "Professional Hajj services and support for your sacred pilgrimage to Makkah.",
};

export default async function HajjPage() {
  const { pageBanners } = await getWebsiteContent();
  return (
    <div>
      <PageBanner {...pageBanners["hajj"]}>
        <a href="#hajj-enquiry" className="pilgrim-button pilgrim-button-gold">Ask About Hajj <ArrowRight aria-hidden="true" /></a>
      </PageBanner>

      {/* About Hajj */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[#86602d] text-sm font-semibold tracking-wider uppercase mb-4">
                Understanding Hajj
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#062A26] mb-6">
                The Sacred Pilgrimage
              </h2>
            </div>
            <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
              <p>
                Hajj is one of the five pillars of Islam and a once-in-a-lifetime spiritual obligation
                for Muslims who are physically and financially able to undertake the journey. This sacred
                pilgrimage to Makkah brings together millions of believers from around the world in an
                extraordinary act of worship and devotion.
              </p>
              <p>
                We are committed to supporting you through every aspect of your Hajj journey,
                providing the assistance and care you need to focus on your spiritual experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-[#FAF8F3]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#062A26] mb-12 text-center">
            Our Hajj Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Registration Assistance",
                description: "Support with Hajj registration procedures and documentation",
                icon: FileText,
              },
              {
                title: "Visa Processing",
                description: "Assistance with visa applications and related requirements",
                icon: CheckCircle,
              },
              {
                title: "Travel Arrangements",
                description: "Coordination of flights and ground transportation",
                icon: Calendar,
              },
              {
                title: "Accommodation",
                description: "Accommodation planning and guidance on arrangements for the holy sites",
                icon: CheckCircle,
              },
              {
                title: "Guidance & Support",
                description: "Information and assistance throughout your journey",
                icon: CheckCircle,
              },
              {
                title: "Group Coordination",
                description: "Services for families and groups traveling together",
                icon: CheckCircle,
              },
            ].map((service) => (
              <Card key={service.title}>
                <CardContent className="pt-6">
                  <service.icon className="h-10 w-10 text-[#063B32] mb-4" />
                  <h3 className="text-xl font-semibold text-[#062A26] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-foreground/80">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Document Checklist */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#062A26] mb-8 text-center">
              Typical Document Requirements
            </h2>
            <Card className="bg-[#FAF8F3]">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {[
                    "Passport with the validity required for your travel dates",
                    "Recent passport-sized photographs",
                    "Vaccination certificates (as required by Saudi authorities)",
                    "Completed visa application forms",
                    "Marriage certificate (if applicable)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#063B32] flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground mt-6 italic">
                  Note: Requirements may vary based on current regulations. We will provide
                  you with a complete and current checklist upon inquiry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 bg-amber-50 border-y border-amber-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex gap-4">
              <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2 text-[#062A26]">
                  Important Information
                </h3>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>• Hajj services are subject to government allocations and approvals</li>
                  <li>• Availability depends on official Hajj quotas for Pakistan</li>
                  <li>• Registration procedures and timelines follow Saudi Arabia regulations</li>
                  <li>• Confirm current registration and allocation requirements with our team</li>
                  <li>• Contact us for current year information and registration guidance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hajj Inquiry Form */}
      <section id="hajj-enquiry" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#062A26] mb-4">
              Register Your Interest
            </h2>
            <p className="text-lg text-foreground/75 max-w-2xl mx-auto">
              Send your travel details through WhatsApp to ask about current requirements and availability.
            </p>
          </div>
          <HajjInquiryForm />
        </div>
      </section>
    </div>
  );
}

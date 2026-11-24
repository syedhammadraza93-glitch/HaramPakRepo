import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageBanner } from "@/components/layout/page-banner";
import { PORTAL_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "B2B Agent Portal",
  description: "Sign in to the Haram Pak B2B Agent Portal or contact our team for agency access and support.",
  alternates: { canonical: "/agent-portal/" },
};

export default function AgentPortal() {
  return (
    <>
      <PageBanner label="FOR TRAVEL AGENTS" title="B2B Agent Portal" description="Access your Haram Pak account for travel agencies." image="/images/makkah-at-night.webp" />
      <section className="site-shell home-section">
        <div className="detail-panel max-w-2xl">
          <h2 className="text-2xl mb-2">{PORTAL_URL ? "Sign in as an agent" : "Need agent access?"}</h2>
          <p>{PORTAL_URL ? "Use your agency credentials to sign in." : "Contact our team to request access for your travel agency."}</p>
          {PORTAL_URL && <a href={PORTAL_URL} className="pilgrim-button pilgrim-button-primary">Sign in to B2B Agent Portal <ArrowUpRight aria-hidden="true" /></a>}
          <Link href="/contact/?support=portal#inquiry" className="text-link mt-3">Get agent support <ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>
    </>
  );
}

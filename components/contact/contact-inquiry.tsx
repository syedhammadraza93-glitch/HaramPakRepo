"use client";

import { useSearchParams } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { openWhatsApp } from "@/lib/inquiries";
import { getTravelEnquiry, travelEnquiries } from "@/lib/travel-enquiries";
import { umrahPackages } from "@/lib/umrah-packages";

export function ContactInquiry() {
  const params = useSearchParams();
  const selectedPackage = umrahPackages.find(pkg => pkg.id === params.get("package"));
  const topic = selectedPackage?.title ?? getTravelEnquiry(params.get("topic")) ??
    (params.get("support") === "portal" ? "Pilgrim Portal support" : "General travel enquiry");

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const details = new FormData(event.currentTarget);
    openWhatsApp([
      "As-salamu alaykum! I’d like to speak with Haram Pak.",
      `Name: ${String(details.get("name")).trim()}`,
      `Enquiry: ${details.get("topic")}`,
      `Travel month: ${String(details.get("month")).trim() || "Flexible"}`,
      `Travellers: ${details.get("travellers")}`,
      String(details.get("message")).trim(),
    ].filter(Boolean).join("\n"));
  }

  return (
    <form className="pilgrim-form" onSubmit={submit} key={topic}>
      <label>Full name <input name="name" required autoComplete="name" maxLength={80} /></label>
      <label>What can we help with?
        <select name="topic" defaultValue={topic}>
          <option>General travel enquiry</option>
          <option>Hajj</option>
          {umrahPackages.map(pkg => <option key={pkg.id}>{pkg.title}</option>)}
          <option>Hotel accommodation</option>
          <option>Flights</option>
          {Object.values(travelEnquiries).map(enquiry => <option key={enquiry}>{enquiry}</option>)}
          <option>Pilgrim Portal support</option>
        </select>
      </label>
      <div className="form-pair">
        <label>Preferred travel month <input name="month" placeholder="Flexible" maxLength={32} /></label>
        <label>Travellers <input type="number" name="travellers" min={1} max={200} defaultValue={2} required /></label>
      </div>
      <label>Anything else? <textarea name="message" rows={4} maxLength={700} placeholder="Tell us about rooms, accessibility needs or questions." /></label>
      <p id="inquiry-note">Review and send your message in WhatsApp. For passports or booking documents, contact our team about how to share them.</p>
      <button type="submit" className="pilgrim-button pilgrim-button-primary" aria-describedby="inquiry-note">Continue to WhatsApp <ArrowUpRight aria-hidden="true" /></button>
    </form>
  );
}

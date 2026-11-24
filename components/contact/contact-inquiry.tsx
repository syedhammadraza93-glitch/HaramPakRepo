"use client";

import { useSearchParams } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { crmIntakeEnabled, useEnquirySubmission } from "@/lib/enquiry-submission";
import { getTravelEnquiry, travelEnquiries } from "@/lib/travel-enquiries";
import type { UmrahPackage } from "@/lib/umrah-packages";
import { EnquiryStatus } from "./enquiry-status";

export function ContactInquiry({ packages }: { packages: UmrahPackage[] }) {
  const params = useSearchParams();
  const enquiry = useEnquirySubmission();
  const selectedPackage = packages.find(pkg => pkg.id === params.get("package"));
  const directService = params.get("journey");
  const topic = selectedPackage?.id ?? getTravelEnquiry(params.get("topic")) ??
    (params.get("support") === "portal" ? "Pilgrim Portal support" :
      directService === "Umrah" || directService === "Hajj" ? directService : "General travel enquiry");
  const value = (form: FormData, key: string) => String(form.get(key) ?? "").trim();
  const travellers = Math.max(1, Math.min(200, Number(params.get("travellers")) || 2));

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const details = new FormData(event.currentTarget);
    const selected = packages.find(pkg => pkg.id === value(details, "topic"));
    const lead = {
      name: value(details, "name"), phone: value(details, "phone"), city: value(details, "city"),
      service: selected?.title ?? value(details, "topic"), packageSlug: selected?.id,
      travelDate: value(details, "month"), travellers: Number(details.get("travellers")), note: value(details, "message"),
    };
    void enquiry.submit(lead, [
      "As-salamu alaykum! I’d like to speak with Haram Pak.", `Name: ${lead.name}`,
      `Enquiry: ${lead.service}`, lead.city && `Departure city: ${lead.city}`,
      `Travel month: ${lead.travelDate || "Flexible"}`, `Travellers: ${lead.travellers}`, lead.note,
    ].filter(Boolean).join("\n"));
  }

  return (
    <form className="pilgrim-form" onSubmit={submit} key={topic}>
      <label>Full name <input name="name" required minLength={2} autoComplete="name" maxLength={80} /></label>
      {crmIntakeEnabled && <label>Phone or WhatsApp number <input name="phone" type="tel" required autoComplete="tel" maxLength={40} /></label>}
      <label>What can we help with?
        <select name="topic" defaultValue={topic}>
          <option>General travel enquiry</option>
          <option>Hajj</option>
          <option>Umrah</option>
          {packages.map(pkg => <option key={pkg.id} value={pkg.id}>{pkg.title}</option>)}
          <option>Hotel accommodation</option>
          <option>Flights</option>
          {Object.values(travelEnquiries).map(item => <option key={item}>{item}</option>)}
          <option>Pilgrim Portal support</option>
        </select>
      </label>
      {crmIntakeEnabled && <label>Departure city <input name="city" maxLength={100} defaultValue={params.get("city")?.slice(0, 100) ?? ""} /></label>}
      <div className="form-pair">
        <label>Preferred travel month <input name="month" placeholder="Flexible" maxLength={80} defaultValue={params.get("month")?.slice(0, 80) ?? ""} /></label>
        <label>Travellers <input type="number" name="travellers" min={1} max={200} defaultValue={travellers} required /></label>
      </div>
      <label>Anything else? <textarea name="message" rows={4} maxLength={700} placeholder="Tell us about rooms, accessibility needs or questions." /></label>
      <p id="inquiry-note">{crmIntakeEnabled ? "Haram Pak will use your contact details to respond to this enquiry. You can continue to WhatsApp after saving." : "Review and send your message in WhatsApp."} Please leave passports and other documents out of this form.</p>
      <button type="submit" disabled={enquiry.pending || !!enquiry.reference} className="pilgrim-button pilgrim-button-primary" aria-describedby="inquiry-note">{enquiry.pending ? "Saving enquiry…" : crmIntakeEnabled ? "Send enquiry" : "Continue to WhatsApp"} <ArrowUpRight aria-hidden="true" /></button>
      <EnquiryStatus {...enquiry} />
    </form>
  );
}

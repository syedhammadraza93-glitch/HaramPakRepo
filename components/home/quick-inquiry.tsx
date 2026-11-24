"use client";

import { ArrowRight, CalendarDays, MapPin, Navigation, Users } from "lucide-react";
import { openWhatsApp } from "@/lib/inquiries";
import { crmIntakeEnabled } from "@/lib/enquiry-submission";
import { useRouter } from "next/navigation";

export function QuickInquiry() {
  const router = useRouter();
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const details = new FormData(event.currentTarget);
    if (crmIntakeEnabled) {
      const query = new URLSearchParams();
      for (const key of ["journey", "city", "month", "travellers"]) query.set(key, String(details.get(key) ?? ""));
      const campaign = new URLSearchParams(window.location.search);
      for (const key of ["utm_source", "utm_medium", "utm_campaign"]) {
        const value = campaign.get(key);
        if (value) query.set(key, value.slice(0, 80));
      }
      router.push("/contact/?" + query + "#inquiry");
      return;
    }
    openWhatsApp([
      "As-salamu alaykum! I’d like a pilgrimage quote.",
      `Journey: ${details.get("journey")}`,
      `Departure city: ${String(details.get("city")).trim()}`,
      `Travel month: ${String(details.get("month")).trim() || "Flexible"}`,
      `Travellers: ${details.get("travellers")}`,
    ].join("\n"));
  }

  return (
    <section className="site-shell quick-plan-wrap" id="plan" aria-labelledby="plan-title">
      <form onSubmit={submit} className="quick-plan">
        <h2 id="plan-title">Plan your trip</h2>
        <label><span><Navigation aria-hidden="true" /> Journey type</span>
          <select name="journey" defaultValue="Umrah"><option>Umrah</option><option>Hajj</option></select>
        </label>
        <label><span><MapPin aria-hidden="true" /> Departure city</span>
          <input name="city" defaultValue="Lahore" required maxLength={50} />
        </label>
        <label><span><CalendarDays aria-hidden="true" /> Travel month</span>
          <input name="month" placeholder="Flexible" maxLength={32} />
        </label>
        <label><span><Users aria-hidden="true" /> Travellers</span>
          <input name="travellers" type="number" defaultValue={2} required min={1} max={200} />
        </label>
        <div className="quick-plan-action">
          <button type="submit" className="pilgrim-button pilgrim-button-primary">Request a Quote <ArrowRight aria-hidden="true" /></button>
          <span>{crmIntakeEnabled ? "Add your contact details" : "Opens WhatsApp"}</span>
        </div>
      </form>
    </section>
  );
}

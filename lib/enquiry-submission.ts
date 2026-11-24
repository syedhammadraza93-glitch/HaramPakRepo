"use client";

import { useRef, useState } from "react";
import { openWhatsApp, whatsappUrl } from "./inquiries";

const intakeOrigin = process.env.NEXT_PUBLIC_PORTAL_INTAKE_ORIGIN?.trim();
export const crmIntakeEnabled = !!intakeOrigin;

type Enquiry = {
  name: string;
  phone: string;
  service: string;
  email?: string;
  city?: string;
  packageSlug?: string;
  travelDate?: string;
  travellers?: number;
  note?: string;
};

export function useEnquirySubmission() {
  const [state, setState] = useState<{ pending: boolean; error?: string; whatsapp?: string; reference?: string }>({ pending: false });
  const request = useRef<{ fingerprint: string; id: string } | null>(null);
  const busy = useRef(false);

  async function submit(enquiry: Enquiry, message: string) {
    if (!intakeOrigin) {
      openWhatsApp(message);
      return;
    }
    if (busy.current) return;
    busy.current = true;
    setState({ pending: true });
    try {
      const endpoint = new URL("/api/public/website/enquiries", intakeOrigin);
      if (endpoint.protocol !== "https:" && endpoint.hostname !== "localhost" && endpoint.hostname !== "127.0.0.1") {
        throw new Error("The enquiry service is unavailable");
      }
      const utm = new URLSearchParams(window.location.search);
      const campaign = [utm.get("utm_source"), utm.get("utm_medium"), utm.get("utm_campaign")].filter(Boolean).join(" / ").slice(0, 180);
      const payload = { ...enquiry, note: enquiry.note?.slice(0, 1500), campaign: campaign || undefined };
      const fingerprint = JSON.stringify(payload);
      if (request.current?.fingerprint !== fingerprint) request.current = { fingerprint, id: crypto.randomUUID() };
      const response = await fetch(endpoint, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, submissionId: request.current.id }),
        signal: AbortSignal.timeout(10000), credentials: "omit",
      });
      const result = await response.json();
      const reference = result?.data?.reference;
      if (!response.ok || result?.success !== true || typeof reference !== "string") {
        const fieldError = response.status === 400 && result?.errors?.[0];
        throw new Error(fieldError?.path === "phone" ? "Enter a valid phone number with 7 to 15 digits." : "Your enquiry could not be saved. Check your details and try again.");
      }
      setState({ pending: false, reference, whatsapp: whatsappUrl(message + "\nEnquiry reference: " + reference) });
    } catch (error) {
      setState({ pending: false, error: error instanceof Error && !["TimeoutError", "TypeError"].includes(error.name)
        ? error.message : "Your enquiry could not be saved. Try again or call our team." });
    } finally {
      busy.current = false;
    }
  }

  return { ...state, submit };
}

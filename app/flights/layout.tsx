import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flight Tickets and Booking Assistance",
  description: "Request flight options from Pakistan to Jeddah, Madinah and other destinations through Haram Pak.",
  alternates: { canonical: "/flights/" },
};

export default function FlightsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

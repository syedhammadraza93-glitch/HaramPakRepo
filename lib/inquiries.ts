import { SITE_CONFIG } from "@/lib/constants";

export function whatsappUrl(message?: string) {
  const number = SITE_CONFIG.contact.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${number}${message ? `?text=${encodeURIComponent(message)}` : ""}`;
}

export function openWhatsApp(message: string) {
  window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
}

export function phoneUrl(number: string) {
  return `tel:${number.replace(/[^+\d]/g, "")}`;
}

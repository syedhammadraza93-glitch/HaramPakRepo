import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/inquiries";

export function WhatsAppButton() {
  return (
    <a href={whatsappUrl("As-salamu alaykum! I’d like help planning my pilgrimage.")}
       target="_blank" rel="noopener noreferrer" className="floating-whatsapp"
       aria-label="Chat with Haram Pak on WhatsApp (opens in a new tab)">
      <MessageCircle aria-hidden="true" />
    </a>
  );
}

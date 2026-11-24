import { permanentRedirect } from "next/navigation";

export default function LegacyPortalPage() {
  permanentRedirect("/agent-portal/");
}

import type { Metadata } from "next";
import "@fontsource-variable/playfair-display";
import "@fontsource-variable/inter";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { PRIVATE_REVIEW, SITE_CONFIG, SITE_ORIGIN } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  icons: { icon: "/images/haram-pak-logo.png" },
  title: { default: "Haram Pak | Hajj & Umrah Travel from Pakistan", template: "%s | Haram Pak" },
  description: SITE_CONFIG.description,
  robots: PRIVATE_REVIEW ? { index: false, follow: false } : undefined,
  openGraph: {
    siteName: "Haram Pak",
    title: "Haram Pak | Hajj & Umrah Travel from Pakistan",
    description: SITE_CONFIG.description,
    type: "website",
    locale: "en_PK",
    images: [{ url: "/images/makkah-golden-hour.webp", alt: "Illustration of Masjid al-Haram in Makkah" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-PK" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        <main id="main-content" className="flex-1" tabIndex={-1}>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

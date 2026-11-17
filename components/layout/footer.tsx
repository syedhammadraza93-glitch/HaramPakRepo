"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#062A26] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#C5A46D]">
              {SITE_CONFIG.name}
            </h3>
            <p className="text-sm text-white/80 mb-4">
              {SITE_CONFIG.description}
            </p>
            <div className="flex gap-4">
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C5A46D] transition-colors text-sm"
                aria-label="Facebook"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-[#C5A46D]">Quick Links</h4>
            <ul className="space-y-2">
              {SITE_CONFIG.navigation.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 hover:text-[#C5A46D] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-[#C5A46D]">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/umrah"
                  className="text-sm text-white/80 hover:text-[#C5A46D] transition-colors"
                >
                  Umrah Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/hajj"
                  className="text-sm text-white/80 hover:text-[#C5A46D] transition-colors"
                >
                  Hajj Services
                </Link>
              </li>
              <li>
                <Link
                  href="/hotels"
                  className="text-sm text-white/80 hover:text-[#C5A46D] transition-colors"
                >
                  Hotels
                </Link>
              </li>
              <li>
                <Link
                  href="/flights"
                  className="text-sm text-white/80 hover:text-[#C5A46D] transition-colors"
                >
                  Flight Booking
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-[#C5A46D]">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-white/80">{SITE_CONFIG.contact.address}</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a
                  href={`tel:${SITE_CONFIG.contact.phones.pakistan}`}
                  className="text-white/80 hover:text-[#C5A46D] transition-colors"
                >
                  {SITE_CONFIG.contact.phones.pakistan}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="text-white/80 hover:text-[#C5A46D] transition-colors"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/60">
          <p>
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="mt-2 text-xs">
            Contact information subject to verification. Please confirm details when inquiring.
          </p>
        </div>
      </div>
    </footer>
  );
}

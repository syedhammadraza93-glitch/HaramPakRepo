"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SITE_CONFIG } from "@/lib/constants";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Contact Bar */}
      <div className="bg-[#063B32] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-2 py-2 text-xs md:text-sm">
            <div className="flex flex-wrap items-center gap-4">
              <a href={`tel:${SITE_CONFIG.contact.phones.pakistan}`} className="flex items-center gap-1 hover:text-[#C5A46D] transition-colors">
                <Phone className="h-3 w-3" />
                <span>{SITE_CONFIG.contact.phones.pakistan}</span>
              </a>
              <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hidden sm:flex items-center gap-1 hover:text-[#C5A46D] transition-colors">
                <Mail className="h-3 w-3" />
                <span>{SITE_CONFIG.contact.email}</span>
              </a>
            </div>
            <div className="hidden md:flex items-center gap-1 text-xs">
              <MapPin className="h-3 w-3" />
              <span>Lahore, Pakistan</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div
        className={`border-b transition-all duration-300 ${
          isScrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="text-xl md:text-2xl font-bold text-[#063B32]">
                {SITE_CONFIG.name}
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {SITE_CONFIG.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-foreground/80 hover:text-[#063B32] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA and Mobile Menu */}
            <div className="flex items-center gap-4">
              <Link href="/contact">
                <Button className="hidden md:flex bg-[#C5A46D] hover:bg-[#B39460] text-[#062A26]">
                  Plan Your Journey
                </Button>
              </Link>

              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger className="lg:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-accent hover:text-accent-foreground">
                  <Menu className="h-6 w-6" />
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px]">
                  <div className="flex flex-col gap-4 mt-8">
                    {SITE_CONFIG.navigation.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-base font-medium text-foreground hover:text-[#063B32] transition-colors py-2"
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Link href="/contact" className="mt-4">
                      <Button className="w-full bg-[#C5A46D] hover:bg-[#B39460] text-[#062A26]">
                        Plan Your Journey
                      </Button>
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

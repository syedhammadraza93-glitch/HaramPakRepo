"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Mail, MapPin, Menu, Phone, UserRound } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Brand } from "@/components/layout/brand";
import { SITE_CONFIG } from "@/lib/constants";
import { phoneUrl } from "@/lib/inquiries";

const mainNav = SITE_CONFIG.navigation.filter(({ href }) =>
  ["/", "/umrah", "/hajj", "/hotels", "/visas", "/tour-packages", "/flights", "/contact"].includes(href),
);

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? "/";
  const active = (href: string) => href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="site-shell utility-row">
          <a href={phoneUrl(SITE_CONFIG.contact.phones.pakistan)}><Phone aria-hidden="true" /> {SITE_CONFIG.contact.phones.pakistan}</a>
          <a className="utility-email" href={`mailto:${SITE_CONFIG.contact.email}`}><Mail aria-hidden="true" /> {SITE_CONFIG.contact.email}</a>
          <span className="utility-location"><MapPin aria-hidden="true" /> Lahore, Pakistan</span>
          <nav className="utility-links" aria-label="Company and booking links">
            <Link href="/about/" aria-current={active("/about") ? "page" : undefined}>About Us</Link>
            <Link href="/pilgrim-portal/" className="portal-link" aria-current={active("/pilgrim-portal") ? "page" : undefined}><UserRound aria-hidden="true" /> Pilgrim Portal</Link>
          </nav>
        </div>
      </div>
      <div className="site-shell navigation-row">
        <Brand />
        <nav className="desktop-navigation" aria-label="Main navigation">
          {mainNav.map(({ href, name }) => <Link href={href} key={href} aria-current={active(href) ? "page" : undefined}>{name}</Link>)}
        </nav>
        <Link href="/contact/#inquiry" className="pilgrim-button pilgrim-button-gold desktop-plan">Plan Your Journey <ArrowUpRight aria-hidden="true" /></Link>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="mobile-menu-button" aria-label="Open menu"><Menu aria-hidden="true" /></SheetTrigger>
          <SheetContent side="right" className="mobile-navigation-sheet">
            <SheetTitle className="px-4 pt-3 text-xl">Explore Haram Pak</SheetTitle>
            <nav aria-label="Mobile navigation" className="mobile-navigation">
              {SITE_CONFIG.navigation.filter(({ href }) => href !== "/about").map(({ href, name }) => (
                <Link href={href} key={href} aria-current={active(href) ? "page" : undefined} onClick={() => setOpen(false)}>{name}</Link>
              ))}
              <Link href="/about/" aria-current={active("/about") ? "page" : undefined} onClick={() => setOpen(false)}>About Us</Link>
              <Link href="/pilgrim-portal/" aria-current={active("/pilgrim-portal") ? "page" : undefined} onClick={() => setOpen(false)}>Pilgrim Portal</Link>
              <Link href="/contact/#inquiry" className="pilgrim-button pilgrim-button-gold" onClick={() => setOpen(false)}>Plan Your Journey <ArrowUpRight aria-hidden="true" /></Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

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

export function Header({ contact }: { contact: { phone: string; email: string } }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? "/";
  const active = (href: string) => href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="site-shell utility-row">
          <a href={phoneUrl(contact.phone)}><Phone aria-hidden="true" /> {contact.phone}</a>
          <a className="utility-email" href={`mailto:${contact.email}`}><Mail aria-hidden="true" /> {contact.email}</a>
          <span className="utility-location"><MapPin aria-hidden="true" /> Lahore, Pakistan</span>
          <nav className="utility-links" aria-label="Company and booking links">
            <Link href="/about/" aria-current={active("/about") ? "page" : undefined}>About Us</Link>
            <Link href="/agent-portal/" className="portal-link" aria-current={active("/agent-portal") ? "page" : undefined}><UserRound aria-hidden="true" /> B2B Agent Portal</Link>
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
              <Link href="/agent-portal/" aria-current={active("/agent-portal") ? "page" : undefined} onClick={() => setOpen(false)}>B2B Agent Portal</Link>
              <Link href="/contact/#inquiry" className="pilgrim-button pilgrim-button-gold" onClick={() => setOpen(false)}>Plan Your Journey <ArrowUpRight aria-hidden="true" /></Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

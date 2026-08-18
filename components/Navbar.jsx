"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  CalendarCheck
} from "lucide-react";
import { HOTEL_INFO } from "@/data/hotelData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (path) => pathname === path || (path !== "/" && pathname.startsWith(path));

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Rooms", href: "/rooms" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/contact" }
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs py-3"
          : "bg-white border-b border-stone-200/80 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo (Black & White Theme) */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border border-stone-900 bg-stone-900 flex items-center justify-center shadow-xs group-hover:bg-black transition-all">
            <span className="font-serif text-white font-bold text-lg tracking-wider">A</span>
          </div>
          <div>
            <span className="block font-serif text-lg md:text-xl font-bold tracking-wider text-stone-900 group-hover:text-black transition-colors">
              AURA GRAND
            </span>
            <span className="block text-[9px] uppercase tracking-[0.25em] text-stone-500 font-medium">
              Resort & Suites
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links (Luxury Floating Capsule Bar) */}
        <nav className="hidden lg:flex items-center gap-1 bg-stone-100/80 p-1.5 rounded-full border border-stone-200/80 shadow-2xs backdrop-blur-xs">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-full text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 ${
                  active
                    ? "bg-white text-stone-950 font-bold shadow-xs border border-stone-200/90 scale-[1.02]"
                    : "text-stone-600 hover:text-stone-950 hover:bg-white/70 hover:shadow-2xs"
                }`}
              >
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Book Now Action Button (Black & White Theme) */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/book"
            className="bg-stone-900 hover:bg-black text-white px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.16em] font-bold flex items-center gap-2 shadow-xs hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <CalendarCheck className="w-4 h-4" />
            <span>Book Now</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-stone-700 hover:text-stone-900 hover:bg-stone-100 border border-stone-200"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 shadow-xl px-4 pt-3 pb-6 space-y-1 animate-in slide-in-from-top-4">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  active
                    ? "text-stone-950 bg-stone-100 font-bold"
                    : "text-stone-700 hover:text-black hover:bg-stone-50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="pt-3">
            <Link
              href="/book"
              className="bg-stone-900 hover:bg-black text-white w-full py-3 rounded-xl text-center text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 shadow-sm"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Reserve A Room / Suite</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}


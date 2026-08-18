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
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs py-3.5 sm:py-4"
          : "bg-white border-b border-stone-200/80 py-5 sm:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo (Larger, Black & White Theme) */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-stone-900 bg-stone-900 flex items-center justify-center shadow-xs group-hover:bg-black group-hover:scale-105 transition-all duration-300">
            <span className="font-serif text-white font-bold text-xl sm:text-2xl tracking-wider">A</span>
          </div>
          <div>
            <span className="block font-serif text-xl sm:text-2xl font-bold tracking-wider text-stone-900 group-hover:text-black transition-colors">
              AURA GRAND
            </span>
            <span className="block text-[10px] uppercase tracking-[0.28em] text-stone-500 font-semibold">
              Resort & Suites
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links (Larger Luxury Floating Capsule Bar) */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-stone-100/80 p-2 rounded-full border border-stone-200/80 shadow-2xs backdrop-blur-xs">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-5 py-2.5 rounded-full text-xs md:text-[13px] uppercase tracking-[0.16em] font-medium transition-all duration-300 ${
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

        {/* Book Now Action Button (Larger) */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/book"
            className="bg-stone-900 hover:bg-black text-white px-7 py-3 rounded-full text-xs md:text-sm uppercase tracking-[0.16em] font-bold flex items-center gap-2.5 shadow-xs hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <CalendarCheck className="w-4 h-4" />
            <span>Book Now</span>
          </Link>
        </div>

        {/* Smooth Animated Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden relative w-11 h-11 rounded-full flex flex-col items-center justify-center gap-1.5 text-stone-900 hover:bg-stone-100 border border-stone-200 transition-colors duration-200 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          <span
            className={`w-5 h-0.5 bg-stone-900 rounded-full transition-all duration-300 origin-center ${
              mobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-stone-900 rounded-full transition-all duration-300 ${
              mobileMenuOpen ? "opacity-0 scale-0" : "opacity-100"
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-stone-900 rounded-full transition-all duration-300 origin-center ${
              mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Smooth Animated Mobile Navigation Drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-out bg-white/98 backdrop-blur-md border-b border-stone-200 ${
          mobileMenuOpen ? "max-h-[480px] opacity-100 shadow-xl" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-6 pt-4 pb-7 space-y-1.5">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-2.5 text-sm uppercase tracking-wider font-semibold rounded-xl transition-colors duration-200 ${
                  active
                    ? "text-stone-950 bg-stone-100 font-bold"
                    : "text-stone-600 hover:text-black hover:bg-stone-50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="pt-3">
            <Link
              href="/book"
              className="bg-stone-900 hover:bg-black text-white w-full py-3.5 rounded-full text-center text-xs uppercase tracking-[0.18em] font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Reserve A Room / Suite</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}


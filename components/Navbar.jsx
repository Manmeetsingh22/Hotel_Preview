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
          ? "bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm py-3"
          : "bg-white border-b border-stone-200/60 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border border-stone-300 bg-stone-900 flex items-center justify-center shadow-xs group-hover:bg-[#8C6D31] transition-all">
            <span className="font-serif text-white font-bold text-lg tracking-wider">A</span>
          </div>
          <div>
            <span className="block font-serif text-lg md:text-xl font-bold tracking-wider text-stone-900 group-hover:text-[#8C6D31] transition-colors">
              AURA GRAND
            </span>
            <span className="block text-[9px] uppercase tracking-[0.25em] text-[#8C6D31] font-semibold">
              Resort & Suites
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links (Direct, Luxury Animated Hover) */}
        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-colors duration-200 group flex flex-col items-center justify-center ${
                  active
                    ? "text-[#8C6D31] font-semibold"
                    : "text-stone-700 hover:text-stone-950"
                }`}
              >
                <span className="relative z-10 transition-transform duration-200 group-hover:translate-y-[-1px]">
                  {link.label}
                </span>

                {/* Subtle Luxury Hover Background Pill */}
                <span
                  className={`absolute inset-0 rounded-full transition-all duration-200 ${
                    active
                      ? "bg-[#F7F3EB]"
                      : "bg-transparent group-hover:bg-stone-100/80 scale-95 group-hover:scale-100 opacity-0 group-hover:opacity-100"
                  }`}
                />

                {/* Animated Bronze Bottom Accent Bar */}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-[#8C6D31] transition-all duration-300 ${
                    active
                      ? "w-6 opacity-100"
                      : "w-0 opacity-0 group-hover:w-4 group-hover:opacity-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Book Now Action Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/book"
            className="gold-button px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.15em] font-bold flex items-center gap-2 shadow-xs hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
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
                    ? "text-[#8C6D31] bg-[#F7F3EB] font-semibold"
                    : "text-stone-700 hover:text-stone-900 hover:bg-stone-50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="pt-3">
            <Link
              href="/book"
              className="gold-button w-full py-3 rounded-xl text-center text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 shadow-sm"
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


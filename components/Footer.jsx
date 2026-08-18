"use client";
import React from "react";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Mail
} from "lucide-react";
import { HOTEL_INFO } from "@/data/hotelData";

export default function Footer() {
  return (
    <footer className="bg-[#F5F5F4] border-t border-stone-200 text-stone-700 pt-14 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main Footer Sitemap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Col 1: Brand & Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-stone-300 bg-stone-900 flex items-center justify-center">
                <span className="font-serif text-white font-bold text-lg">A</span>
              </div>
              <div>
                <span className="block font-serif text-xl font-bold tracking-wider text-stone-900">
                  AURA GRAND
                </span>
                <span className="block text-[9px] uppercase tracking-[0.25em] text-[#8C6D31] font-semibold">
                  Resort & Suites
                </span>
              </div>
            </Link>
            <p className="text-sm text-stone-600 leading-relaxed pr-6">
              A 5-star luxury oceanfront resort offering bespoke accommodations, fine dining, and world-class wellness experiences in Paradise Bay.
            </p>
            <div className="space-y-2.5 pt-2 text-xs text-stone-700">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#8C6D31] shrink-0 mt-0.5" />
                <span>{HOTEL_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#8C6D31] shrink-0" />
                <a href={`tel:${HOTEL_INFO.phone}`} className="hover:text-[#8C6D31] transition-colors">
                  {HOTEL_INFO.phone} (Reservations)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#8C6D31] shrink-0" />
                <a href={`mailto:${HOTEL_INFO.email}`} className="hover:text-[#8C6D31] transition-colors">
                  {HOTEL_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Accommodations (Rooms) */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold text-stone-900 uppercase tracking-wider">
              Accommodations
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/rooms" className="hover:text-[#8C6D31] transition-colors">
                  All Rooms Overview
                </Link>
              </li>
              <li>
                <Link href="/rooms/standard" className="hover:text-[#8C6D31] transition-colors flex items-center justify-between">
                  <span>Standard Room</span>
                  <span className="text-[10px] text-stone-500 font-medium">$189</span>
                </Link>
              </li>
              <li>
                <Link href="/rooms/deluxe" className="hover:text-[#8C6D31] transition-colors flex items-center justify-between">
                  <span>Deluxe Ocean Room</span>
                  <span className="text-[10px] text-stone-500 font-medium">$320</span>
                </Link>
              </li>
              <li>
                <Link href="/rooms/suite" className="hover:text-[#8C6D31] transition-colors flex items-center justify-between">
                  <span>Presidential Suite</span>
                  <span className="text-[10px] text-stone-500 font-medium">$750</span>
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/book"
                  className="inline-flex items-center gap-1 text-[#8C6D31] font-semibold hover:underline"
                >
                  Book Instant Stay →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services & Amenities */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold text-stone-900 uppercase tracking-wider">
              Resort Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/services" className="hover:text-[#8C6D31] transition-colors">
                  Services Overview
                </Link>
              </li>
              <li>
                <Link href="/services/restaurant" className="hover:text-[#8C6D31] transition-colors">
                  Le Mirador Restaurant
                </Link>
              </li>
              <li>
                <Link href="/services/swimming-pool" className="hover:text-[#8C6D31] transition-colors">
                  Saltwater Infinity Pool
                </Link>
              </li>
              <li>
                <Link href="/services/spa" className="hover:text-[#8C6D31] transition-colors">
                  Elysium Wellness Spa
                </Link>
              </li>
              <li>
                <Link href="/services/conference-hall" className="hover:text-[#8C6D31] transition-colors">
                  Grand Monarch Hall
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold text-stone-900 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-[#8C6D31] transition-colors">
                  About Us & Resort Story
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#8C6D31] transition-colors">
                  Photo & Video Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#8C6D31] transition-colors">
                  Contact & Location
                </Link>
              </li>
              <li>
                <Link href="/book" className="hover:text-[#8C6D31] transition-colors">
                  Check Room Availability
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Social */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Aura Grand Resort & Suites. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-stone-400 hover:text-stone-900 transition-colors" aria-label="Instagram">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-stone-400 hover:text-stone-900 transition-colors" aria-label="Facebook">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-stone-400 hover:text-stone-900 transition-colors" aria-label="X / Twitter">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-stone-400 hover:text-stone-900 transition-colors" aria-label="LinkedIn">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


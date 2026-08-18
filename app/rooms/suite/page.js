"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Maximize2,
  Users,
  BedDouble,
  Eye,
  CalendarCheck,
  Star,
  Crown
} from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import SectionHeader from "@/components/SectionHeader";
import RoomCard from "@/components/RoomCard";
import { ROOMS_DATA } from "@/data/hotelData";

export default function SuitePage() {
  const room = ROOMS_DATA.find((r) => r.slug === "suite") || ROOMS_DATA[2];
  const otherRooms = ROOMS_DATA.filter((r) => r.slug !== "suite");
  const [activeImage, setActiveImage] = useState(0);
  const [checkIn, setCheckIn] = useState("2026-09-01");
  const [checkOut, setCheckOut] = useState("2026-09-05");
  const [guests, setGuests] = useState("4");

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAF9]">
      <HeroBanner
        badge="Presidential Suite"
        title="The Pinnacle of Ultra-Luxury"
        subtitle="140 square meters of pure palatial opulence featuring a private rooftop jacuzzi, 24/7 dedicated butler, and 360° horizon views."
        breadcrumbs={[
          { label: "Rooms & Suites", href: "/rooms" },
          { label: "Presidential Suite" }
        ]}
        image={room.images[0]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Left */}
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-4">
              <div className="relative h-96 sm:h-[480px] rounded-3xl overflow-hidden border border-stone-200 shadow-md bg-stone-100">
                <Image
                  src={room.images[activeImage]}
                  alt={room.name}
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#8C6D31] text-white px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                  <Crown className="w-3.5 h-3.5" />
                  <span>Signature Suite</span>
                </div>
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-full text-xs text-stone-900 border border-stone-200 shadow-xs flex items-center gap-1.5">
                  <Star className="w-4 h-4 fill-[#8C6D31] text-[#8C6D31]" />
                  <span className="font-bold">{room.rating}</span>
                  <span className="text-stone-500">({room.reviews} reviews)</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {room.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`relative h-24 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                      idx === activeImage ? "border-[#8C6D31] shadow-xs" : "border-stone-200 opacity-80 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt="Thumbnail" fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Overview */}
            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-xs">
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-4">The Penthouse Experience</h3>
              <p className="text-sm text-stone-700 leading-relaxed mb-8">{room.description}</p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-stone-50 border border-stone-200 text-center">
                <div>
                  <Maximize2 className="w-5 h-5 text-[#8C6D31] mx-auto mb-1.5" />
                  <span className="text-[11px] text-stone-500 block uppercase">Palatial Area</span>
                  <span className="font-semibold text-stone-900 text-xs">{room.size}</span>
                </div>
                <div>
                  <Users className="w-5 h-5 text-[#8C6D31] mx-auto mb-1.5" />
                  <span className="text-[11px] text-stone-500 block uppercase">Capacity</span>
                  <span className="font-semibold text-stone-900 text-xs">{room.capacity}</span>
                </div>
                <div>
                  <BedDouble className="w-5 h-5 text-[#8C6D31] mx-auto mb-1.5" />
                  <span className="text-[11px] text-stone-500 block uppercase">2 Master Suites</span>
                  <span className="font-semibold text-stone-900 text-xs">2 King Beds</span>
                </div>
                <div>
                  <Eye className="w-5 h-5 text-[#8C6D31] mx-auto mb-1.5" />
                  <span className="text-[11px] text-stone-500 block uppercase">Panoramic Vista</span>
                  <span className="font-semibold text-stone-900 text-xs">360° Ocean</span>
                </div>
              </div>
            </div>

            {/* Exclusive Inclusions */}
            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-xs">
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-6">VIP Inclusions & Amenities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {room.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200/80">
                    <Crown className="w-4 h-4 text-[#8C6D31] shrink-0 mt-0.5" />
                    <span className="text-xs text-stone-800 leading-snug">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sticky Booking */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white border border-stone-200 rounded-3xl p-6 md:p-8 shadow-md">
              <div className="flex items-baseline justify-between mb-6 pb-6 border-b border-stone-200">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-stone-500 font-bold">Suite Rate</span>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="font-serif text-3xl font-bold text-stone-900">${room.price}</span>
                    <span className="text-xs text-stone-500">/ night</span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#F7F3EB] border border-[#E8DFD1] text-[#8C6D31] text-xs font-bold uppercase">
                  All-Inclusive
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Check-in Date</label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 focus:border-[#8C6D31] focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Check-out Date</label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 focus:border-[#8C6D31] focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Guests</label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 focus:border-[#8C6D31] focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-hidden"
                  >
                    <option value="2">2 Adults (Couple)</option>
                    <option value="4">4 Adults (2 Master Suites)</option>
                    <option value="6">Up to 6 Guests</option>
                  </select>
                </div>

                <div className="p-3 rounded-xl bg-[#F7F3EB] border border-[#E8DFD1] text-xs text-[#8C6D31] space-y-1">
                  <p className="font-bold flex items-center gap-1.5">
                    <Crown className="w-3.5 h-3.5" />
                    <span>24/7 Dedicated Butler Assigned</span>
                  </p>
                  <p className="text-[11px] text-stone-600">
                    Complimentary Rolls-Royce airport transfers & custom private dining included.
                  </p>
                </div>

                <Link
                  href={`/book?room=suite&checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}`}
                  className="gold-button w-full py-3.5 rounded-xl text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 shadow-xs mt-4 block text-center"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Reserve Penthouse Suite</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Other Suites */}
        <div className="mt-24">
          <SectionHeader
            badge="Alternative Options"
            title="Other Accommodations"
            subtitle="Explore our standard and deluxe accommodations."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherRooms.map((r) => (
              <RoomCard key={r.id} room={r} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


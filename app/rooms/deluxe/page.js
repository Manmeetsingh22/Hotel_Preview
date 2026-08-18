"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Maximize2,
  Users,
  BedDouble,
  Eye,
  Check,
  CalendarCheck,
  ShieldCheck,
  Star,
  CheckCircle2,
  Wine
} from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import SectionHeader from "@/components/SectionHeader";
import RoomCard from "@/components/RoomCard";
import { ROOMS_DATA } from "@/data/hotelData";

export default function DeluxeRoomPage() {
  const room = ROOMS_DATA.find((r) => r.slug === "deluxe") || ROOMS_DATA[1];
  const otherRooms = ROOMS_DATA.filter((r) => r.slug !== "deluxe");
  const [activeImage, setActiveImage] = useState(0);
  const [checkIn, setCheckIn] = useState("2026-09-01");
  const [checkOut, setCheckOut] = useState("2026-09-04");
  const [guests, setGuests] = useState("2");

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAF9]">
      <HeroBanner
        badge="Deluxe Ocean Room"
        title="Spacious Oceanfront Sophistication"
        subtitle="Unwind with panoramic sunset views from your private balcony, freestanding marble soaking tub, and evening champagne service."
        breadcrumbs={[
          { label: "Rooms & Suites", href: "/rooms" },
          { label: "Deluxe Room" }
        ]}
        image={room.images[0]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Content */}
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

            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-xs">
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-4">Suite Overview</h3>
              <p className="text-sm text-stone-700 leading-relaxed mb-8">{room.description}</p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-stone-50 border border-stone-200 text-center">
                <div>
                  <Maximize2 className="w-5 h-5 text-[#8C6D31] mx-auto mb-1.5" />
                  <span className="text-[11px] text-stone-500 block uppercase">Room Size</span>
                  <span className="font-semibold text-stone-900 text-xs">{room.size}</span>
                </div>
                <div>
                  <Users className="w-5 h-5 text-[#8C6D31] mx-auto mb-1.5" />
                  <span className="text-[11px] text-stone-500 block uppercase">Capacity</span>
                  <span className="font-semibold text-stone-900 text-xs">{room.capacity}</span>
                </div>
                <div>
                  <BedDouble className="w-5 h-5 text-[#8C6D31] mx-auto mb-1.5" />
                  <span className="text-[11px] text-stone-500 block uppercase">Bed Type</span>
                  <span className="font-semibold text-stone-900 text-xs">{room.bed}</span>
                </div>
                <div>
                  <Eye className="w-5 h-5 text-[#8C6D31] mx-auto mb-1.5" />
                  <span className="text-[11px] text-stone-500 block uppercase">Window View</span>
                  <span className="font-semibold text-stone-900 text-xs">{room.view}</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-xs">
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-6">Deluxe Inclusions & Amenities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {room.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200/80">
                    <Check className="w-4 h-4 text-[#8C6D31] shrink-0 mt-0.5" />
                    <span className="text-xs text-stone-800 leading-snug">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sticky Booking Widget */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white border border-stone-200 rounded-3xl p-6 md:p-8 shadow-md">
              <div className="flex items-baseline justify-between mb-6 pb-6 border-b border-stone-200">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-stone-500">Nightly Rate</span>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="font-serif text-3xl font-bold text-stone-900">${room.price}</span>
                    <span className="text-xs text-stone-500">/ night</span>
                    <span className="text-xs text-stone-400 line-through">${room.originalPrice}</span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#F7F3EB] border border-[#E8DFD1] text-[#8C6D31] text-xs font-bold uppercase">
                  {room.badge}
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
                    <option value="2">2 Adults (Recommended)</option>
                    <option value="3">3 Adults</option>
                    <option value="4">2 Adults + 2 Children</option>
                  </select>
                </div>

                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-700 flex items-center gap-2">
                  <Wine className="w-4 h-4 text-[#8C6D31] shrink-0" />
                  <span>Includes Laurent-Perrier Champagne on arrival</span>
                </div>

                <Link
                  href={`/book?room=deluxe&checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}`}
                  className="gold-button w-full py-3.5 rounded-xl text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 shadow-xs mt-4 block text-center"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Reserve Deluxe Room</span>
                </Link>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200 space-y-2 text-[11px] text-stone-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#8C6D31]" />
                  <span>Free cancellation up to 48 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8C6D31]" />
                  <span>One-way airport chauffeur included</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Suites */}
        <div className="mt-24">
          <SectionHeader
            badge="Compare Options"
            title="Other Accommodations"
            subtitle="Explore our standard retreats and presidential suites."
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


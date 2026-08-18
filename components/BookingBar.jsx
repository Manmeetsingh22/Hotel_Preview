"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Calendar, Users, BedDouble, Search } from "lucide-react";
import { ROOMS_DATA } from "@/data/hotelData";

export default function BookingBar({ className = "", compact = false }) {
  const router = useRouter();
  const [checkIn, setCheckIn] = useState("2026-09-01");
  const [checkOut, setCheckOut] = useState("2026-09-05");
  const [guests, setGuests] = useState("2");
  const [roomType, setRoomType] = useState("all");
  const [promoCode, setPromoCode] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (checkIn) params.set("checkIn", checkIn);
    if (checkOut) params.set("checkOut", checkOut);
    if (guests) params.set("guests", guests);
    if (roomType && roomType !== "all") params.set("room", roomType);
    if (promoCode) params.set("promo", promoCode);

    router.push(`/book?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className={`bg-white/95 backdrop-blur-md border border-stone-200 rounded-2xl p-4 md:p-6 shadow-xl ${className}`}
    >
      <div className={`grid grid-cols-1 ${compact ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-5"} gap-4 items-end`}>
        {/* Check In */}
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#8C6D31]" />
            <span>Check-in</span>
          </label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full bg-stone-50 border border-stone-300 focus:border-[#8C6D31] focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-hidden transition-all"
          />
        </div>

        {/* Check Out */}
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#8C6D31]" />
            <span>Check-out</span>
          </label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full bg-stone-50 border border-stone-300 focus:border-[#8C6D31] focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-hidden transition-all"
          />
        </div>

        {/* Guests */}
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5 flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-[#8C6D31]" />
            <span>Guests</span>
          </label>
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full bg-stone-50 border border-stone-300 focus:border-[#8C6D31] focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-hidden transition-all"
          >
            <option value="1">1 Adult (Solo)</option>
            <option value="2">2 Adults (Couple)</option>
            <option value="3">3 Adults (Family)</option>
            <option value="4">4+ Adults (VIP Group)</option>
          </select>
        </div>

        {/* Room Type */}
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5 flex items-center gap-1.5">
            <BedDouble className="w-3.5 h-3.5 text-[#8C6D31]" />
            <span>Suite Type</span>
          </label>
          <select
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            className="w-full bg-stone-50 border border-stone-300 focus:border-[#8C6D31] focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-hidden transition-all"
          >
            <option value="all">All Available Suites</option>
            {ROOMS_DATA.map((r) => (
              <option key={r.id} value={r.slug}>
                {r.name} (${r.price}/nt)
              </option>
            ))}
          </select>
        </div>

        {/* Search CTA */}
        <div className={compact ? "sm:col-span-2 lg:col-span-4 mt-2" : ""}>
          <button
            type="submit"
            className="gold-button w-full py-3 rounded-xl text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 shadow-sm hover:shadow transition-all"
          >
            <Search className="w-4 h-4" />
            <span>Check Availability</span>
          </button>
        </div>
      </div>
    </form>
  );
}


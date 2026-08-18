import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroBanner from "@/components/HeroBanner";
import SectionHeader from "@/components/SectionHeader";
import { ROOMS_DATA } from "@/data/hotelData";
import {
  Users,
  Maximize2,
  BedDouble,
  Eye,
  Check,
  Star,
  ArrowRight,
  CalendarCheck,
  Sparkles,
  Utensils,
  ShieldCheck
} from "lucide-react";

export const metadata = {
  title: "Rooms & Suites | Aura Grand Resort & Suites",
  description: "Explore our collection of luxurious rooms and suites at Aura Grand Resort & Suites. From oceanfront rooms to penthouse suites.",
};

export default function RoomsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAF9]">
      {/* Hero Banner */}
      <HeroBanner
        badge="Accommodations"
        title="Sanctuaries of Pure Serenity"
        subtitle="Explore our collection of thoughtfully appointed standard rooms, oceanfront deluxe suites, and royal penthouses."
        breadcrumbs={[{ label: "Rooms & Suites" }]}
        image="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1800&q=80"
      />

      {/* Main Room Showcase Section (3-Row Format) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionHeader
          badge="Featured Accommodations"
          title="Our Rooms & Suites"
          subtitle="Every room and suite is designed with Italian marble baths, plush linens, and panoramic views."
        />

        {/* 3-Row Rooms Showcase */}
        <div className="space-y-12 mb-20">
          {ROOMS_DATA.map((room, idx) => (
            <div
              key={room.id}
              className="bg-white rounded-3xl border border-stone-200 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Image Container */}
              <div className="lg:col-span-5 relative h-72 sm:h-80 lg:h-auto min-h-[280px] w-full overflow-hidden bg-stone-100">
                <Image
                  src={room.images[0]}
                  alt={room.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-stone-950/40 via-transparent to-transparent pointer-events-none" />

                {/* Badge */}
                {room.badge && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-stone-900 text-white shadow-xs">
                      {room.badge}
                    </span>
                  </div>
                )}

                {/* Rating */}
                <div className="absolute top-4 right-4 z-10 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-semibold text-stone-900 border border-stone-200 flex items-center gap-1 shadow-xs">
                  <Star className="w-3.5 h-3.5 fill-[#8C6D31] text-[#8C6D31]" />
                  <span>{room.rating}</span>
                  <span className="text-[10px] text-stone-500">({room.reviews})</span>
                </div>
              </div>

              {/* Room Content */}
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 hover:text-[#8C6D31] transition-colors">
                      <Link href={`/rooms/${room.slug}`}>{room.name}</Link>
                    </h3>
                  </div>

                  <p className="text-sm text-stone-600 leading-relaxed mb-6 font-normal">
                    {room.description}
                  </p>

                  {/* Room Specs Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3.5 px-4 bg-[#FAFAF9] border border-stone-200/80 rounded-xl text-xs text-stone-700 mb-6">
                    <div className="flex items-center gap-2">
                      <Maximize2 className="w-4 h-4 text-[#8C6D31] shrink-0" />
                      <span className="truncate">{room.size}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#8C6D31] shrink-0" />
                      <span className="truncate">{room.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BedDouble className="w-4 h-4 text-[#8C6D31] shrink-0" />
                      <span className="truncate">{room.bed}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-[#8C6D31] shrink-0" />
                      <span className="truncate">{room.view}</span>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {room.features.slice(0, 4).map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-stone-600">
                        <Check className="w-3.5 h-3.5 text-[#8C6D31] shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price & Action Buttons */}
                <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] text-stone-500 block uppercase tracking-wider">Starting Rate</span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-serif text-3xl font-bold text-stone-900">${room.price}</span>
                      <span className="text-xs text-stone-500">/ night</span>
                      {room.originalPrice && (
                        <span className="text-xs text-stone-400 line-through ml-1">
                          ${room.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Link
                      href={`/rooms/${room.slug}`}
                      className="px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-stone-800 hover:text-stone-950 bg-stone-100 hover:bg-stone-200 transition-all text-center flex items-center justify-center gap-1.5"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      href={`/book?room=${room.slug}`}
                      className="gold-button px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs"
                    >
                      <CalendarCheck className="w-4 h-4" />
                      <span>Reserve Suite</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stay Inclusions Bar */}
        <div className="bg-white border border-stone-200 rounded-2xl p-8 shadow-xs">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8C6D31]">
              Included With Every Stay
            </span>
            <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">
              Complimentary Resort Privileges
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-[#FAFAF9] border border-stone-100">
              <div className="w-10 h-10 rounded-full bg-[#F7F3EB] border border-[#E8DFD1] flex items-center justify-center text-[#8C6D31] shrink-0">
                <Utensils className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-stone-900 text-sm mb-1">Artisan Breakfast</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Daily gourmet breakfast served fresh in-suite or at our oceanfront restaurant.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-[#FAFAF9] border border-stone-100">
              <div className="w-10 h-10 rounded-full bg-[#F7F3EB] border border-[#E8DFD1] flex items-center justify-center text-[#8C6D31] shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-stone-900 text-sm mb-1">High-Speed Wi-Fi & Valet</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Complimentary gigabit Wi-Fi 6 across the entire resort and 24/7 valet parking.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-[#FAFAF9] border border-stone-100">
              <div className="w-10 h-10 rounded-full bg-[#F7F3EB] border border-[#E8DFD1] flex items-center justify-center text-[#8C6D31] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-stone-900 text-sm mb-1">Flexible Cancellation</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  No-fee cancellation and reservation modification up to 48 hours prior to arrival.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

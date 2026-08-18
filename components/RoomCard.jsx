"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Users,
  Maximize2,
  BedDouble,
  Eye,
  Check,
  Star,
  ChevronLeft,
  ChevronRight,
  ArrowRight
} from "lucide-react";

export default function RoomCard({ room, onQuickBook }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const nextImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden group flex flex-col h-full border border-stone-200 shadow-xs hover:shadow-md hover:border-stone-300 transition-all duration-200">
      {/* Image Container with Slider */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-100">
        <Image
          src={room.images[activeImageIndex] || room.images[0]}
          alt={room.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent" />

        {/* Badge */}
        {room.badge && (
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-stone-900 text-white shadow-xs">
              {room.badge}
            </span>
          </div>
        )}

        {/* Rating Pill */}
        <div className="absolute top-4 right-4 z-10 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full text-xs font-semibold text-stone-900 border border-stone-200 flex items-center gap-1 shadow-xs">
          <Star className="w-3.5 h-3.5 fill-[#8C6D31] text-[#8C6D31]" />
          <span>{room.rating}</span>
          <span className="text-[10px] text-stone-500">({room.reviews})</span>
        </div>

        {/* Image Controls */}
        {room.images && room.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-stone-900/60 hover:bg-stone-900 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextImage}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-stone-900/60 hover:bg-stone-900 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
              {room.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setActiveImageIndex(idx);
                  }}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === activeImageIndex ? "w-5 bg-white" : "w-1.5 bg-white/50"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-baseline justify-between gap-2 mb-2">
            <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-[#8C6D31] transition-colors">
              {room.name}
            </h3>
          </div>
          <p className="text-xs text-stone-600 line-clamp-2 mb-4 leading-relaxed">
            {room.subtitle || room.description}
          </p>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-2 gap-2.5 py-3 border-y border-stone-100 text-xs text-stone-700 mb-4 bg-stone-50/60 rounded-lg px-3">
            <div className="flex items-center gap-2">
              <Maximize2 className="w-3.5 h-3.5 text-[#8C6D31]" />
              <span>{room.size}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-3.5 h-3.5 text-[#8C6D31]" />
              <span>{room.capacity}</span>
            </div>
            <div className="flex items-center gap-2">
              <BedDouble className="w-3.5 h-3.5 text-[#8C6D31]" />
              <span className="truncate">{room.bed}</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-3.5 h-3.5 text-[#8C6D31]" />
              <span className="truncate">{room.view}</span>
            </div>
          </div>

          {/* Top 3 Amenities */}
          <div className="space-y-1.5 mb-6">
            {room.features.slice(0, 3).map((feat, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-stone-600">
                <Check className="w-3.5 h-3.5 text-[#8C6D31] shrink-0" />
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing & CTA Actions */}
        <div className="pt-4 border-t border-stone-200 flex items-center justify-between gap-3">
          <div>
            <span className="text-[11px] text-stone-500 block">Starting from</span>
            <div className="flex items-baseline gap-1.5">
              <span className="font-serif text-2xl font-bold text-stone-900">${room.price}</span>
              <span className="text-xs text-stone-500">/ night</span>
              {room.originalPrice && (
                <span className="text-xs text-stone-400 line-through ml-1">
                  ${room.originalPrice}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href={`/rooms/${room.slug}`}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-stone-700 hover:text-stone-900 border border-stone-300 hover:bg-stone-50 transition-colors"
            >
              Details
            </Link>
            <Link
              href={`/book?room=${room.slug}`}
              className="gold-button px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-xs"
            >
              <span>Book</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


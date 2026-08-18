"use client";
import React, { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles, Filter } from "lucide-react";
import { GALLERY_ITEMS } from "@/data/hotelData";

export default function GalleryLightbox({ initialCategory = "All" }) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = ["All", "Rooms", "Dining", "Pool & Spa", "Events"];

  const filteredItems =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightbox = (e) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevLightbox = (e) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div>
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              activeCategory === cat
                ? "bg-stone-900 text-white shadow-xs font-bold"
                : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => openLightbox(idx)}
            className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer border border-stone-200 hover:border-stone-300 shadow-xs hover:shadow-md transition-all duration-300 bg-stone-100"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

            {/* Category Tag */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[#8C6D31] border border-stone-200 shadow-xs">
                {item.category}
              </span>
            </div>

            {/* Hover Zoom Icon */}
            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-stone-900/70 backdrop-blur-xs text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4 text-white" />
            </div>

            {/* Content Bottom */}
            <div className="absolute bottom-0 inset-x-0 p-6 transform translate-y-1 group-hover:translate-y-0 transition-transform">
              <h3 className="font-serif text-lg font-bold text-white mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-stone-300 line-clamp-2">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={prevLightbox}
            className="absolute left-4 md:left-8 z-50 p-3.5 rounded-full bg-white/10 hover:bg-white hover:text-stone-900 text-white transition-all backdrop-blur-md cursor-pointer"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextLightbox}
            className="absolute right-4 md:right-8 z-50 p-3.5 rounded-full bg-white/10 hover:bg-white hover:text-stone-900 text-white transition-all backdrop-blur-md cursor-pointer"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption Box */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center"
          >
            <div className="relative w-full h-[65vh] rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
              <Image
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <div className="mt-4 text-center max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
                {filteredItems[lightboxIndex].category} • Photo {lightboxIndex + 1} of {filteredItems.length}
              </span>
              <h4 className="font-serif text-2xl font-bold text-white mt-1">
                {filteredItems[lightboxIndex].title}
              </h4>
              <p className="text-xs text-slate-300 mt-1">{filteredItems[lightboxIndex].desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

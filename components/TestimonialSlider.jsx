"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from "lucide-react";
import { TESTIMONIALS } from "@/data/hotelData";

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Background card */}
      <div className="bg-white rounded-3xl p-8 md:p-12 border border-stone-200 shadow-md relative overflow-hidden">
        {/* Giant decorative watermark quote */}
        <Quote className="absolute -top-4 -right-4 w-36 h-36 text-stone-100 pointer-events-none rotate-12" />

        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
          {/* Avatar & Guest Specs */}
          <div className="flex flex-col items-center text-center shrink-0">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-stone-200 shadow-xs mb-3">
              <Image src={current.avatar} alt={current.name} fill className="object-cover" />
            </div>
            <h4 className="font-serif text-lg font-bold text-stone-900">{current.name}</h4>
            <span className="text-xs text-[#8C6D31] font-medium">{current.role}</span>
            <span className="text-[11px] text-stone-500 mt-0.5">{current.location}</span>
            <div className="inline-flex items-center gap-1 text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full mt-2 font-medium">
              <ShieldCheck className="w-3 h-3" />
              <span>Verified Stay</span>
            </div>
          </div>

          {/* Review Details */}
          <div className="flex-1 text-center md:text-left">
            {/* Stars */}
            <div className="flex items-center justify-center md:justify-start gap-1 mb-3">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#8C6D31] text-[#8C6D31]" />
              ))}
              <span className="text-xs text-stone-500 ml-2">Stayed in {current.room}</span>
            </div>

            {/* Quote */}
            <p className="font-serif italic text-base md:text-lg text-stone-800 leading-relaxed mb-4">
              "{current.comment}"
            </p>

            <span className="text-xs text-stone-400 font-normal">{current.date}</span>
          </div>
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-stone-100">
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to review ${idx + 1}`}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex ? "w-8 bg-[#8C6D31]" : "w-2 bg-stone-300 hover:bg-stone-400"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prevTestimonial}
              aria-label="Previous Review"
              className="p-2 rounded-full bg-stone-100 hover:bg-stone-900 hover:text-white text-stone-700 border border-stone-200 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextTestimonial}
              aria-label="Next Review"
              className="p-2 rounded-full bg-stone-100 hover:bg-stone-900 hover:text-white text-stone-700 border border-stone-200 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


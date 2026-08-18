"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Waves,
  CalendarCheck,
  PhoneCall,
  Play,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import RoomCard from "@/components/RoomCard";
import ServiceCard from "@/components/ServiceCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import { ROOMS_DATA, SERVICES_DATA } from "@/data/hotelData";

const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2400&q=90",
    alt: "Aura Grand Resort Oceanfront Terrace & Turquoise Sea",
    caption: "Oceanfront Sanctuary"
  },
  {
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2400&q=90",
    alt: "Aura Grand Heated Infinity Pool & Coastal Horizon",
    caption: "Heated Saltwater Infinity"
  },
  {
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2400&q=90",
    alt: "Aura Grand Architectural Resort Villa Grounds",
    caption: "Architectural Grandeur"
  },
  {
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=2400&q=90",
    alt: "Aura Grand Tropical Poolside Retreat",
    caption: "Coastal Serenity"
  }
];

export default function HomePage() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAF9]">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex flex-col justify-center overflow-hidden group">
        {/* Cinematic Background Image Slideshow with Soft Blur & Contrast */}
        <div className="absolute inset-0 z-0">
          {HERO_SLIDES.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={idx === 0}
                sizes="100vw"
                className="object-cover object-center scale-105 filter blur-[2.5px]"
              />
            </div>
          ))}
          {/* Dual Overlay: Vignette Gradient & Subtle Backdrop Blur for Flawless Readability */}
          <div className="absolute inset-0 bg-linear-to-b from-stone-950/70 via-stone-950/45 to-stone-950/80 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-radial from-stone-950/40 via-transparent to-stone-950/70 pointer-events-none" />
        </div>

        {/* Previous Slide Arrow */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/35 hover:bg-black/60 border border-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer opacity-75 hover:opacity-100 hover:scale-105 hidden sm:flex shadow-lg"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Next Slide Arrow */}
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/35 hover:bg-black/60 border border-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer opacity-75 hover:opacity-100 hover:scale-105 hidden sm:flex shadow-lg"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Vertical Slide Indicators */}
        <div className="absolute right-4 md:right-6 bottom-20 z-20 hidden md:flex flex-col items-center gap-2.5">
          {HERO_SLIDES.map((slide, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                currentSlide === idx
                  ? "w-2.5 h-8 bg-white shadow-md"
                  : "w-2.5 h-2.5 bg-white/40 hover:bg-white/80"
              }`}
              title={slide.caption}
              aria-label={`Slide ${idx + 1}: ${slide.caption}`}
            />
          ))}
        </div>

        {/* Hero Content (Positioned closer to Navbar) */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center pt-10 sm:pt-14 md:pt-16 pb-20 md:pb-24">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-normal text-white tracking-wide leading-[1.2] md:leading-[1.25] mb-10 sm:mb-12 md:mb-14 drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
            Where Bespoke Luxury <br className="hidden sm:inline" />
            <span className="font-light italic text-stone-100 block mt-3 md:mt-4">
              Meets Endless Horizon
            </span>
          </h1>

          <p className="text-stone-100 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed md:leading-[1.9] mb-12 sm:mb-14 md:mb-16 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            Immerse yourself in a coastal sanctuary of architectural beauty, Michelin-inspired dining, and holistic wellness in Paradise Bay.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-2 sm:pt-3">
            <Link
              href="/book"
              className="gold-button w-full sm:w-auto px-9 py-4.5 rounded-full text-xs uppercase tracking-[0.18em] font-bold flex items-center justify-center gap-2.5 shadow-lg hover:shadow-xl transition-all"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Reserve Your Stay</span>
            </Link>

            <Link
              href="/rooms"
              className="w-full sm:w-auto px-9 py-4.5 rounded-full text-xs uppercase tracking-[0.18em] font-bold text-stone-900 bg-white hover:bg-stone-100 shadow-md flex items-center justify-center gap-2.5 transition-all"
            >
              <span>Explore Suites</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => setVideoModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4.5 rounded-full text-xs uppercase tracking-[0.18em] font-semibold text-white hover:text-stone-200 bg-stone-900/60 hover:bg-stone-900/80 border border-white/20 backdrop-blur-xs flex items-center justify-center gap-2.5 transition-all cursor-pointer"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Watch Tour</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. THE RESORT EXPERIENCE */}
      <section className="py-24 bg-[#FAFAF9] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Composition */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-[460px] w-full rounded-3xl overflow-hidden border border-stone-200 shadow-xl bg-stone-100">
                <Image
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
                  alt="Aura Grand Resort Grand Lobby"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              {/* Floating Sanctuary Accent Box */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white border border-stone-200 p-6 rounded-2xl shadow-xl max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#F7F3EB] border border-[#E8DFD1] flex items-center justify-center text-[#8C6D31] shrink-0">
                    <Waves className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C6D31] block">
                      Oceanfront Haven
                    </span>
                    <p className="text-xs text-stone-700 font-serif">
                      Paradise Bay Coastal Sanctuary
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Story Text */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 leading-tight">
                An Oasis of Tranquility & Refined Luxury
              </h2>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                Located on the pristine coastline of Paradise Bay, Aura Grand Resort provides an unforgettable luxury escape where modern comfort meets coastal serenity.
              </p>

              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Enjoy private oceanfront suites, heated saltwater infinity pools, Michelin-inspired dining, and tailored wellness therapies crafted for pure relaxation.
              </p>

              {/* 4 Stats Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-stone-200">
                <div className="bg-white p-4 rounded-xl border border-stone-200/80 shadow-2xs">
                  <h4 className="font-serif text-2xl font-bold text-stone-900">140+</h4>
                  <p className="text-xs text-stone-600 mt-0.5">Suites & Villas</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-stone-200/80 shadow-2xs">
                  <h4 className="font-serif text-2xl font-bold text-[#8C6D31]">4.98 ★</h4>
                  <p className="text-xs text-stone-600 mt-0.5">Guest Rating</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-stone-200/80 shadow-2xs">
                  <h4 className="font-serif text-2xl font-bold text-stone-900">24/7</h4>
                  <p className="text-xs text-stone-600 mt-0.5">Dedicated Concierge</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-stone-200/80 shadow-2xs">
                  <h4 className="font-serif text-2xl font-bold text-[#8C6D31]">100%</h4>
                  <p className="text-xs text-stone-600 mt-0.5">Oceanfront Sanctuary</p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8C6D31] hover:text-[#5E471C] transition-colors group"
                >
                  <span>Explore More About Us</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED ROOMS & SUITES */}
      <section className="py-24 bg-[#F5F5F4] relative border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Accommodations"
            title="Featured Rooms & Suites"
            subtitle="Thoughtfully appointed with Italian marble finishes, artisan bedding, and panoramic views of the sea."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ROOMS_DATA.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/rooms"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-stone-800 hover:text-stone-950 bg-white hover:bg-stone-50 border border-stone-300 shadow-xs transition-all"
            >
              <span>View All Accommodations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. WORLD-CLASS RESORT SERVICES */}
      <section className="py-24 bg-[#FAFAF9] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Experiences"
            title="Services & Amenities"
            subtitle="From Michelin-inspired dining to rejuvenating wellness treatments and grand banquet galas."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_DATA.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="gold-button inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-xs"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. GUEST TESTIMONIALS */}
      <section className="py-24 bg-[#F5F5F4] relative border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Guest Impressions"
            title="Guest Reviews & Experiences"
            subtitle="Read heartfelt impressions and reviews from travelers and couples who stayed at Aura Grand."
          />

          <TestimonialSlider />
        </div>
      </section>

      {/* 6. CALL TO ACTION BANNER */}
      <section className="py-20 bg-[#1C1917] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Your Luxury Oceanfront Getaway Awaits
          </h2>

          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8">
            Book directly through our official website to enjoy complimentary welcome amenities, flexible cancellation, and guaranteed best rates.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className="gold-button-accent px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold flex items-center gap-2 shadow-lg"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book Your Stay Now</span>
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold text-white hover:text-stone-200 bg-white/10 hover:bg-white/15 border border-white/20 transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-stone-300" />
              <span>Contact Concierge</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Video Tour Modal */}
      {videoModalOpen && (
        <div
          onClick={() => setVideoModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white border border-stone-200 rounded-3xl max-w-4xl w-full p-6 relative shadow-2xl text-stone-900"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif text-xl font-bold text-stone-900">
                Aura Grand Virtual Experience
              </h3>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="text-stone-400 hover:text-stone-900 p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden bg-stone-900 flex items-center justify-center border border-stone-200">
              <Image
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80"
                alt="Resort Tour Preview"
                fill
                className="object-cover opacity-60"
              />
              <div className="relative z-10 text-center p-6">
                <div className="w-16 h-16 rounded-full bg-white text-stone-900 flex items-center justify-center mx-auto mb-3 shadow-xl">
                  <Play className="w-7 h-7 fill-stone-900" />
                </div>
                <h4 className="font-serif text-xl font-bold text-white mb-1">
                  Virtual Resort Walkthrough
                </h4>
                <p className="text-xs text-stone-200 max-w-md mx-auto">
                  Experience a simulated panoramic tour through our oceanfront suites, dining spaces, and infinity pools.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


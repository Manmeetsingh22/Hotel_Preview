import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Compass,
  HeartHandshake,
  Leaf,
  Quote,
  UtensilsCrossed,
  Waves
} from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import SectionHeader from "@/components/SectionHeader";

export const metadata = {
  title: "About Us | Aura Grand Resort & Suites",
  description: "Discover the luxury accommodations, world-class dining, wellness spa, and five-star hospitality at Aura Grand Resort & Suites.",
};

export default function AboutPage() {
  const highlights = [
    {
      title: "Oceanfront Luxury",
      desc: "140+ spacious suites and private villas with panoramic sea views and private sun terraces.",
      icon: Waves
    },
    {
      title: "Michelin-Inspired Dining",
      desc: "Gourmet multi-course gastronomy crafted with locally sourced organic ingredients.",
      icon: UtensilsCrossed
    },
    {
      title: "Holistic Wellness Spa",
      desc: "Thermal hydrotherapy baths, Moroccan hammams, and custom therapeutic treatments.",
      icon: Compass
    },
    {
      title: "24/7 Butler & Concierge",
      desc: "Dedicated personal concierge service tailored to your exact preferences and schedule.",
      icon: HeartHandshake
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAF9]">
      {/* 1. Hero Banner */}
      <HeroBanner
        badge="About Aura Grand"
        title="Luxury, Elegance & Coastal Serenity"
        subtitle="Experience five-star oceanfront luxury, Michelin-inspired dining, and personalized hospitality at Paradise Bay."
        breadcrumbs={[{ label: "About Us" }]}
        image="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=85"
      />

      {/* 2. Overview Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 leading-tight">
              A Modern Coastal Sanctuary Designed for You
            </h2>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              Nestled on the coast of Paradise Bay, Aura Grand Resort is an intimate luxury haven where contemporary design harmonizes with pristine coastal beauty.
            </p>

            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Every space—from our Italian marble suites and oceanfront cabanas to the heated saltwater infinity pool—is crafted to provide complete relaxation, privacy, and effortless comfort.
            </p>

            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
              <div className="flex items-start gap-4">
                <Quote className="w-8 h-8 text-[#8C6D31] shrink-0" />
                <div>
                  <p className="font-serif italic text-sm text-stone-800 leading-relaxed">
                    "Our commitment is simple: to make every moment of your stay effortless, beautiful, and memorable."
                  </p>
                  <span className="block text-xs font-bold text-[#8C6D31] uppercase tracking-wider mt-2">
                    — Marcus Vance, General Manager
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-64 rounded-2xl overflow-hidden border border-stone-200 shadow-md bg-stone-100">
                <Image
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
                  alt="Resort Lounge"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-44 rounded-2xl overflow-hidden border border-stone-200 shadow-md bg-stone-100">
                <Image
                  src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80"
                  alt="Wine Cellar"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative h-44 rounded-2xl overflow-hidden border border-stone-200 shadow-md bg-stone-100">
                <Image
                  src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80"
                  alt="Poolside Sunset"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden border border-stone-200 shadow-md bg-stone-100">
                <Image
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                  alt="Fine Dining Hall"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Highlights Grid */}
      <section className="py-20 bg-[#F5F5F4] border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="What We Offer"
            title="The Aura Grand Experience"
            subtitle="Thoughtfully curated amenities designed to provide an unforgettable stay."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-xl bg-[#F7F3EB] border border-[#E8DFD1] flex items-center justify-center text-[#8C6D31] mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">{item.title}</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Resort Values & Guarantees */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Promise"
          title="Exceptional Standards in Every Detail"
          subtitle="Simple, transparent, and dedicated to delivering genuine comfort and luxury."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-xs text-center">
            <div className="w-14 h-14 rounded-full bg-[#F7F3EB] border border-[#E8DFD1] flex items-center justify-center text-[#8C6D31] mx-auto mb-4">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h4 className="font-serif text-xl font-bold text-stone-900 mb-2">Best Rate Guarantee</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Book directly on our website for guaranteed best rates, flexible cancellation, and complimentary room upgrade eligibility.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-xs text-center">
            <div className="w-14 h-14 rounded-full bg-[#F7F3EB] border border-[#E8DFD1] flex items-center justify-center text-[#8C6D31] mx-auto mb-4">
              <HeartHandshake className="w-7 h-7" />
            </div>
            <h4 className="font-serif text-xl font-bold text-stone-900 mb-2">Bespoke Guest Care</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Personalized itineraries, customized dining arrangements, and attentive concierge support available 24 hours a day.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-xs text-center">
            <div className="w-14 h-14 rounded-full bg-[#F7F3EB] border border-[#E8DFD1] flex items-center justify-center text-[#8C6D31] mx-auto mb-4">
              <Leaf className="w-7 h-7" />
            </div>
            <h4 className="font-serif text-xl font-bold text-stone-900 mb-2">Sustainable Luxury</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Eco-conscious resort operations, solar energy integration, and plastic-free amenities with zero compromise on luxury.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}



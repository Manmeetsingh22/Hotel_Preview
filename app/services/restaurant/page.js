"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  UtensilsCrossed,
  Clock,
  Wine
} from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import SectionHeader from "@/components/SectionHeader";
import { SERVICES_DATA, TEAM_MEMBERS } from "@/data/hotelData";
import { useToast } from "@/components/Toast";

export default function RestaurantPage() {
  const service = SERVICES_DATA.find((s) => s.id === "restaurant") || SERVICES_DATA[0];
  const chef = TEAM_MEMBERS.find((m) => m.id === "executive-chef") || TEAM_MEMBERS[3];
  const { addToast } = useToast();

  const [resDate, setResDate] = useState("2026-09-02");
  const [resTime, setResTime] = useState("19:30");
  const [resGuests, setResGuests] = useState("2");
  const [seating, setSeating] = useState("Oceanfront Terrace");
  const [resName, setResName] = useState("");
  const [resPhone, setResPhone] = useState("");
  const [activeMenuTab, setActiveMenuTab] = useState(0);

  const handleTableReservation = (e) => {
    e.preventDefault();
    if (!resName || !resPhone) {
      addToast({
        title: "Required Information",
        message: "Please provide your name and contact phone for the table confirmation.",
        type: "error"
      });
      return;
    }

    addToast({
      title: "Table Reserved at Le Mirador",
      message: `Table for ${resGuests} on ${resDate} at ${resTime} (${seating}) is reserved. We look forward to welcoming you!`,
      type: "success"
    });
    setResName("");
    setResPhone("");
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAF9]">
      <HeroBanner
        badge="Fine Dining & Wine"
        title="Le Mirador Gourmet Restaurant"
        subtitle="Michelin-inspired culinary experiences overlooking the Pacific ocean. Multi-course menus curated by Chef Antoine Dubois."
        breadcrumbs={[
          { label: "Services & Amenities", href: "/services" },
          { label: "Restaurant" }
        ]}
        image={service.image}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        {/* Quick Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs text-center">
            <Clock className="w-6 h-6 text-[#8C6D31] mx-auto mb-2" />
            <h4 className="font-serif text-base font-bold text-stone-900 mb-1">Service Hours</h4>
            <p className="text-xs text-stone-600">Breakfast: 7:00 AM – 10:30 AM</p>
            <p className="text-xs text-stone-600">Dinner: 6:30 PM – 11:00 PM</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs text-center">
            <UtensilsCrossed className="w-6 h-6 text-[#8C6D31] mx-auto mb-2" />
            <h4 className="font-serif text-base font-bold text-stone-900 mb-1">Cuisine & Dress Code</h4>
            <p className="text-xs text-stone-600">French-Mediterranean Coastal Fusion</p>
            <p className="text-xs text-[#8C6D31] font-medium">Dress Code: Smart Elegant</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs text-center">
            <Wine className="w-6 h-6 text-[#8C6D31] mx-auto mb-2" />
            <h4 className="font-serif text-base font-bold text-stone-900 mb-1">Sommelier Cellar</h4>
            <p className="text-xs text-stone-600">2,500+ Curated Vintage Labels</p>
            <p className="text-xs text-stone-500">Grand Cru & Champagne Pairings</p>
          </div>
        </div>

        {/* Story & Chef Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
              An Elevated Coastal Dining Journey
            </h2>
            <p className="text-sm text-stone-700 leading-relaxed">
              Every creation at Le Mirador begins with respect for local produce. From fresh ocean catches to organic herbs and fine imported cheeses, each dish is balanced for flavor and presentation.
            </p>
            <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border border-stone-200 shrink-0">
                <Image src={chef.image} alt={chef.name} fill className="object-cover" />
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-stone-900">{chef.name}</h4>
                <p className="text-xs text-[#8C6D31] font-medium">{chef.role}</p>
                <Link href="/about" className="text-[11px] text-stone-600 hover:text-stone-900 underline mt-0.5 inline-block">
                  About Our Resort Story →
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-96 rounded-3xl overflow-hidden border border-stone-200 shadow-md bg-stone-100">
            <Image
              src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=80"
              alt="Gourmet Plating"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Interactive Menu Preview */}
        <div className="mb-20">
          <SectionHeader
            badge="Tasting Menu"
            title="Seasonal Menu Preview"
            subtitle="Explore a preview of our seasonal menus. Vegetarian and custom dietary preferences accommodated."
          />

          {/* Menu Category Tabs */}
          <div className="flex justify-center gap-2 mb-8">
            {service.menuPreview?.map((category, idx) => (
              <button
                key={idx}
                onClick={() => setActiveMenuTab(idx)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeMenuTab === idx
                    ? "bg-stone-900 text-white shadow-xs"
                    : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
                }`}
              >
                {category.category}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.menuPreview?.[activeMenuTab]?.items.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-stone-200 hover:border-stone-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <h4 className="font-serif text-lg font-bold text-stone-900">{item.name}</h4>
                    <span className="font-serif text-base font-bold text-[#8C6D31]">{item.price}</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Table Reservation Interactive Form */}
        <div className="max-w-3xl mx-auto bg-white border border-stone-200 rounded-3xl p-8 md:p-10 shadow-md">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8C6D31]">
              Table Reservation
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 mt-1">
              Reserve A Table at Le Mirador
            </h3>
            <p className="text-xs text-stone-500 mt-2">
              For groups larger than 8 or private dining inquiries, please contact our team directly.
            </p>
          </div>

          <form onSubmit={handleTableReservation} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Date</label>
                <input
                  type="date"
                  value={resDate}
                  onChange={(e) => setResDate(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 focus:border-[#8C6D31] focus:bg-white rounded-xl px-3 py-2.5 text-xs text-stone-900 focus:outline-hidden"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Time</label>
                <select
                  value={resTime}
                  onChange={(e) => setResTime(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 focus:border-[#8C6D31] focus:bg-white rounded-xl px-3 py-2.5 text-xs text-stone-900 focus:outline-hidden"
                >
                  <option value="18:30">6:30 PM (Sunset Seating)</option>
                  <option value="19:30">7:30 PM (Prime Dinner)</option>
                  <option value="20:30">8:30 PM (Evening Dinner)</option>
                  <option value="21:30">9:30 PM (Late Seating)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Guests</label>
                <select
                  value={resGuests}
                  onChange={(e) => setResGuests(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 focus:border-[#8C6D31] focus:bg-white rounded-xl px-3 py-2.5 text-xs text-stone-900 focus:outline-hidden"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="6">6 Guests</option>
                  <option value="8">8 Guests</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Seating Area</label>
                <select
                  value={seating}
                  onChange={(e) => setSeating(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 focus:border-[#8C6D31] focus:bg-white rounded-xl px-3 py-2.5 text-xs text-stone-900 focus:outline-hidden"
                >
                  <option value="Oceanfront Terrace">Oceanfront Sunset Terrace</option>
                  <option value="Main Dining Room">Main Dining Room</option>
                  <option value="Wine Cellar Enclave">Wine Cellar Enclave</option>
                  <option value="Overwater Pavilion">Private Overwater Pavilion</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Full Name</label>
                <input
                  type="text"
                  value={resName}
                  onChange={(e) => setResName(e.target.value)}
                  placeholder="Enter your name..."
                  className="w-full bg-stone-50 border border-stone-300 focus:border-[#8C6D31] focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-hidden"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Phone Number</label>
              <input
                type="tel"
                value={resPhone}
                onChange={(e) => setResPhone(e.target.value)}
                placeholder="+1 (555) 000-0000"
                className="w-full bg-stone-50 border border-stone-300 focus:border-[#8C6D31] focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-hidden"
                required
              />
            </div>

            <button
              type="submit"
              className="gold-button w-full py-3.5 rounded-xl text-xs uppercase tracking-wider font-bold shadow-xs mt-4"
            >
              Confirm Table Reservation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


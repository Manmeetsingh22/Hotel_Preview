"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Waves,
  Sun,
  Thermometer,
  Clock,
  CheckCircle2
} from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import SectionHeader from "@/components/SectionHeader";
import { SERVICES_DATA } from "@/data/hotelData";
import { useToast } from "@/components/Toast";

export default function SwimmingPoolPage() {
  const service = SERVICES_DATA.find((s) => s.id === "swimming-pool") || SERVICES_DATA[1];
  const { addToast } = useToast();

  const [cabanaType, setCabanaType] = useState("Overwater Oceanfront Cabana");
  const [cabanaDate, setCabanaDate] = useState("2026-09-02");
  const [cabanaTime, setCabanaTime] = useState("Afternoon (1:00 PM - 6:00 PM)");
  const [guestName, setGuestName] = useState("");

  const handleCabanaBook = (e) => {
    e.preventDefault();
    if (!guestName) {
      addToast({
        title: "Name Required",
        message: "Please enter your name for cabana reservation.",
        type: "error"
      });
      return;
    }

    addToast({
      title: "Poolside Cabana Reserved",
      message: `${cabanaType} reserved for ${guestName} on ${cabanaDate}. Refreshments ready!`,
      type: "success"
    });
    setGuestName("");
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAF9]">
      <HeroBanner
        badge="Pool & Cabanas"
        title="Saltwater Infinity Pool & Cabanas"
        subtitle="Heated saltwater infinity edge overlooking the Pacific, complemented by submerged loungers, poolside refreshments, and private cabanas."
        breadcrumbs={[
          { label: "Services & Amenities", href: "/services" },
          { label: "Swimming Pool" }
        ]}
        image={service.image}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        {/* Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs text-center">
            <Clock className="w-6 h-6 text-[#8C6D31] mx-auto mb-2" />
            <h4 className="font-serif text-sm font-bold text-stone-900 mb-1">Operating Hours</h4>
            <p className="text-xs text-stone-600">Daily 6:00 AM – 10:00 PM</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs text-center">
            <Thermometer className="w-6 h-6 text-[#8C6D31] mx-auto mb-2" />
            <h4 className="font-serif text-sm font-bold text-stone-900 mb-1">Water Temperature</h4>
            <p className="text-xs text-stone-600">Constant 28°C / 82.4°F</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs text-center">
            <Waves className="w-6 h-6 text-[#8C6D31] mx-auto mb-2" />
            <h4 className="font-serif text-sm font-bold text-stone-900 mb-1">Pool Type</h4>
            <p className="text-xs text-stone-600">Heated Saltwater Infinity</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs text-center">
            <Sun className="w-6 h-6 text-[#8C6D31] mx-auto mb-2" />
            <h4 className="font-serif text-sm font-bold text-stone-900 mb-1">Poolside Service</h4>
            <p className="text-xs text-stone-600">Towels, Mist & Drink Service</p>
          </div>
        </div>

        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 relative h-[420px] rounded-3xl overflow-hidden border border-stone-200 shadow-md bg-stone-100">
            <Image
              src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80"
              alt="Infinity Pool Cabana"
              fill
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
              Where Horizon & Coastline Merge
            </h2>
            <p className="text-sm text-stone-700 leading-relaxed">
              Designed to create an optical illusion of flowing directly into the horizon, the infinity pool is surrounded by fragrant botanical gardens, sunken daybeds, and private curtained pavilions.
            </p>
            <div className="space-y-3">
              {service.highlights?.map((hl, i) => (
                <div key={i} className="flex items-start gap-3 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-[#8C6D31] shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cabana Options & Booking */}
        <div className="mb-16">
          <SectionHeader
            badge="Cabana Service"
            title="Private Daybeds & Cabana Rentals"
            subtitle="Reserve your private shaded pavilion with refreshment service, fresh fruit, and dedicated staff."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {service.cabanaOptions?.map((cab, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-stone-200 hover:border-stone-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <h4 className="font-serif text-xl font-bold text-stone-900">{cab.name}</h4>
                    <span className="font-serif text-lg font-bold text-[#8C6D31]">{cab.price}</span>
                  </div>
                  <span className="text-xs text-stone-500 block mb-4">Capacity: {cab.capacity}</span>
                  <p className="text-xs text-stone-600 leading-relaxed mb-6">
                    <strong className="text-stone-900">Includes: </strong>
                    {cab.includes}
                  </p>
                </div>
                <button
                  onClick={() => setCabanaType(cab.name)}
                  className={`w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    cabanaType === cab.name
                      ? "bg-stone-900 text-white shadow-xs"
                      : "bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200"
                  }`}
                >
                  {cabanaType === cab.name ? "✓ Selected Option" : "Select Cabana"}
                </button>
              </div>
            ))}
          </div>

          {/* Quick Cabana Reservation Form */}
          <div className="max-w-2xl mx-auto bg-white border border-stone-200 rounded-3xl p-8 shadow-md">
            <h4 className="font-serif text-xl font-bold text-stone-900 text-center mb-6">
              Reserve Cabana ({cabanaType})
            </h4>
            <form onSubmit={handleCabanaBook} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Date</label>
                  <input
                    type="date"
                    value={cabanaDate}
                    onChange={(e) => setCabanaDate(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 focus:border-[#8C6D31] focus:bg-white rounded-xl px-3 py-2 text-xs text-stone-900 focus:outline-hidden"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Time Slot</label>
                  <select
                    value={cabanaTime}
                    onChange={(e) => setCabanaTime(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 focus:border-[#8C6D31] focus:bg-white rounded-xl px-3 py-2 text-xs text-stone-900 focus:outline-hidden"
                  >
                    <option value="Morning (9:00 AM - 1:00 PM)">Morning Session (9am - 1pm)</option>
                    <option value="Afternoon (1:00 PM - 6:00 PM)">Afternoon Session (1pm - 6pm)</option>
                    <option value="Full Day (9:00 AM - 8:00 PM)">Full Day (9am - 8pm)</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Full Name</label>
                <input
                  type="text"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder="Enter your name..."
                  className="w-full bg-stone-50 border border-stone-300 focus:border-[#8C6D31] focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-hidden"
                  required
                />
              </div>
              <button
                type="submit"
                className="gold-button w-full py-3.5 rounded-xl text-xs uppercase tracking-wider font-bold shadow-xs cursor-pointer"
              >
                Confirm Cabana Reservation
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}


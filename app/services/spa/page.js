"use client";
import React, { useState } from "react";
import {
  Clock,
  Flower2,
  Flame,
  Droplets
} from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import SectionHeader from "@/components/SectionHeader";
import { SERVICES_DATA } from "@/data/hotelData";
import { useToast } from "@/components/Toast";

export default function SpaPage() {
  const service = SERVICES_DATA.find((s) => s.id === "spa") || SERVICES_DATA[2];
  const { addToast } = useToast();

  const [selectedTreatment, setSelectedTreatment] = useState(service.treatments?.[0]?.name || "");
  const [spaDate, setSpaDate] = useState("2026-09-03");
  const [spaTime, setSpaTime] = useState("11:00 AM");
  const [guestName, setGuestName] = useState("");
  const [guestPhone, setGuestPhone] = useState("");

  const handleSpaBook = (e) => {
    e.preventDefault();
    if (!guestName || !guestPhone) {
      addToast({
        title: "Required Fields",
        message: "Please fill in your name and phone number for spa appointment confirmation.",
        type: "error"
      });
      return;
    }

    addToast({
      title: "Spa Appointment Confirmed",
      message: `${selectedTreatment} on ${spaDate} at ${spaTime} is booked for ${guestName}. Relaxation awaits!`,
      type: "success"
    });
    setGuestName("");
    setGuestPhone("");
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAF9]">
      <HeroBanner
        badge="Wellness & Spa"
        title="Elysium Holistic Spa"
        subtitle="Rejuvenate your senses with botanical therapies, deep-tissue massages, and authentic thermal baths."
        breadcrumbs={[
          { label: "Services & Amenities", href: "/services" },
          { label: "Spa" }
        ]}
        image={service.image}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        {/* Spa Amenities Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs text-center">
            <Flame className="w-6 h-6 text-[#8C6D31] mx-auto mb-2" />
            <h4 className="font-serif text-base font-bold text-stone-900 mb-1">Thermal Hammam</h4>
            <p className="text-xs text-stone-600">Steam & eucalyptus therapy</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs text-center">
            <Flower2 className="w-6 h-6 text-[#8C6D31] mx-auto mb-2" />
            <h4 className="font-serif text-base font-bold text-stone-900 mb-1">Organic Botanicals</h4>
            <p className="text-xs text-stone-600">Pure essential oils & plant extracts</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs text-center">
            <Droplets className="w-6 h-6 text-[#8C6D31] mx-auto mb-2" />
            <h4 className="font-serif text-base font-bold text-stone-900 mb-1">Hydrotherapy Baths</h4>
            <p className="text-xs text-stone-600">Rejuvenating mineral waters</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs text-center">
            <Clock className="w-6 h-6 text-[#8C6D31] mx-auto mb-2" />
            <h4 className="font-serif text-base font-bold text-stone-900 mb-1">Sanctuary Hours</h4>
            <p className="text-xs text-stone-600">Daily 8:00 AM – 9:00 PM</p>
          </div>
        </div>

        {/* Treatment Menu */}
        <div className="mb-20">
          <SectionHeader
            badge="Treatment Rituals"
            title="Signature Spa Treatments"
            subtitle="Curated therapeutic sessions designed to relieve tension, nourish skin, and restore vitality."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.treatments?.map((treatment, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-stone-200 hover:border-stone-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <h4 className="font-serif text-xl font-bold text-stone-900">{treatment.name}</h4>
                    <span className="font-serif text-lg font-bold text-[#8C6D31]">{treatment.price}</span>
                  </div>
                  <span className="text-xs font-semibold text-[#8C6D31] block mb-3">
                    Duration: {treatment.duration}
                  </span>
                  <p className="text-xs text-stone-600 leading-relaxed mb-6">{treatment.desc}</p>
                </div>

                <button
                  onClick={() => setSelectedTreatment(treatment.name)}
                  className={`w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    selectedTreatment === treatment.name
                      ? "bg-stone-900 text-white shadow-xs"
                      : "bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200"
                  }`}
                >
                  {selectedTreatment === treatment.name ? "✓ Selected Treatment" : "Select Treatment"}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Appointment Form */}
        <div className="max-w-3xl mx-auto bg-white border border-stone-200 rounded-3xl p-8 md:p-10 shadow-md">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8C6D31]">
              Spa Appointment
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 mt-1">
              Reserve Your Treatment Session
            </h3>
            <p className="text-xs text-stone-500 mt-2">
              Complimentary access to our relaxation lounge and vitality pools is included with every appointment.
            </p>
          </div>

          <form onSubmit={handleSpaBook} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Selected Treatment</label>
              <select
                value={selectedTreatment}
                onChange={(e) => setSelectedTreatment(e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 focus:border-[#8C6D31] focus:bg-white rounded-xl px-4 py-3 text-xs text-stone-900 focus:outline-hidden"
              >
                {service.treatments?.map((t, i) => (
                  <option key={i} value={t.name}>
                    {t.name} ({t.duration} - {t.price})
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Date</label>
                <input
                  type="date"
                  value={spaDate}
                  onChange={(e) => setSpaDate(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 focus:border-[#8C6D31] focus:bg-white rounded-xl px-3 py-2.5 text-xs text-stone-900 focus:outline-hidden"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Preferred Time</label>
                <select
                  value={spaTime}
                  onChange={(e) => setSpaTime(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 focus:border-[#8C6D31] focus:bg-white rounded-xl px-3 py-2.5 text-xs text-stone-900 focus:outline-hidden"
                >
                  <option value="9:00 AM">9:00 AM (Morning Awakening)</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="2:00 PM">2:00 PM (Afternoon Rebalance)</option>
                  <option value="4:30 PM">4:30 PM</option>
                  <option value="7:00 PM">7:00 PM (Evening Relaxation)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  value={guestPhone}
                  onChange={(e) => setGuestPhone(e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-stone-50 border border-stone-300 focus:border-[#8C6D31] focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-hidden"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="gold-button w-full py-3.5 rounded-xl text-xs uppercase tracking-wider font-bold shadow-xs mt-4 cursor-pointer"
            >
              Confirm Spa Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


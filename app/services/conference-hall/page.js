"use client";
import React, { useState } from "react";
import {
  Users,
  Maximize2,
  Tv,
  Mic
} from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import SectionHeader from "@/components/SectionHeader";
import { SERVICES_DATA } from "@/data/hotelData";
import { useToast } from "@/components/Toast";

export default function ConferenceHallPage() {
  const service = SERVICES_DATA.find((s) => s.id === "conference-hall") || SERVICES_DATA[3];
  const { addToast } = useToast();

  const [eventType, setEventType] = useState("Corporate Conference");
  const [eventDate, setEventDate] = useState("2026-10-15");
  const [attendees, setAttendees] = useState("100 - 250 Guests");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");

  const handleInquiry = (e) => {
    e.preventDefault();
    if (!contactName || !contactEmail) {
      addToast({
        title: "Required Fields",
        message: "Please provide your name and email for the event proposal.",
        type: "error"
      });
      return;
    }

    addToast({
      title: "Proposal Request Submitted",
      message: `Thank you, ${contactName}. Our events coordinator will contact you with a detailed proposal.`,
      type: "success"
    });
    setContactName("");
    setContactEmail("");
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAF9]">
      <HeroBanner
        badge="Events & Meetings"
        title="Grand Monarch Conference Hall"
        subtitle="850 square meters of flexible column-free space, modern LED video walls, breakout suites, and banquet catering."
        breadcrumbs={[
          { label: "Services & Amenities", href: "/services" },
          { label: "Conference Hall" }
        ]}
        image={service.image}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        {/* Key Specs */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs text-center">
            <Users className="w-6 h-6 text-[#8C6D31] mx-auto mb-2" />
            <h4 className="font-serif text-base font-bold text-stone-900 mb-1">Max Capacity</h4>
            <p className="text-xs text-stone-600">Up to 600 Attendees</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs text-center">
            <Maximize2 className="w-6 h-6 text-[#8C6D31] mx-auto mb-2" />
            <h4 className="font-serif text-base font-bold text-stone-900 mb-1">Total Space</h4>
            <p className="text-xs text-stone-600">850 m² / 9,150 sq.ft</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs text-center">
            <Tv className="w-6 h-6 text-[#8C6D31] mx-auto mb-2" />
            <h4 className="font-serif text-base font-bold text-stone-900 mb-1">AV Technology</h4>
            <p className="text-xs text-stone-600">Dual 220" 4K Video Walls</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs text-center">
            <Mic className="w-6 h-6 text-[#8C6D31] mx-auto mb-2" />
            <h4 className="font-serif text-base font-bold text-stone-900 mb-1">Breakout Salons</h4>
            <p className="text-xs text-stone-600">4 Soundproof Partitioned Suites</p>
          </div>
        </div>

        {/* Configurations Grid */}
        <div className="mb-20">
          <SectionHeader
            badge="Room Configurations"
            title="Flexible Layouts & Capacities"
            subtitle="Configure The Grand Monarch Hall to suit your company conference, summit, or banquet dinner."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.configurations?.map((cfg, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-stone-200 hover:border-stone-300 shadow-xs hover:shadow-md transition-all text-center flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-serif text-lg font-bold text-stone-900 mb-1">{cfg.type}</h4>
                  <span className="text-xs font-serif text-[#8C6D31] font-bold block mb-3">
                    {cfg.capacity}
                  </span>
                  <p className="text-xs text-stone-600">{cfg.idealFor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RFP / Event Inquiry Form */}
        <div className="max-w-3xl mx-auto bg-white border border-stone-200 rounded-3xl p-8 md:p-10 shadow-md">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8C6D31]">
              Event Inquiry
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 mt-1">
              Plan Your Conference or Event
            </h3>
            <p className="text-xs text-stone-500 mt-2">
              Our event coordinators will prepare custom catering and layout proposals for your gathering.
            </p>
          </div>

          <form onSubmit={handleInquiry} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Event Type</label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 focus:border-[#8C6D31] focus:bg-white rounded-xl px-3 py-2.5 text-xs text-stone-900 focus:outline-hidden"
                >
                  <option value="Corporate Conference">Corporate Conference / Summit</option>
                  <option value="Awards Banquet">Gala Dinner & Awards Night</option>
                  <option value="Product Launch">Product Launch Event</option>
                  <option value="Wedding Reception">Wedding Reception & Banquet</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Estimated Guests</label>
                <select
                  value={attendees}
                  onChange={(e) => setAttendees(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 focus:border-[#8C6D31] focus:bg-white rounded-xl px-3 py-2.5 text-xs text-stone-900 focus:outline-hidden"
                >
                  <option value="Up to 50 Guests">Board Meeting (Up to 50 Guests)</option>
                  <option value="50 - 150 Guests">50 - 150 Attendees</option>
                  <option value="150 - 300 Guests">150 - 300 Attendees</option>
                  <option value="300 - 600 Guests">300 - 600 Attendees (Full Hall)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Event Date</label>
                <input
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 focus:border-[#8C6D31] focus:bg-white rounded-xl px-3 py-2 text-xs text-stone-900 focus:outline-hidden"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Organizer Name</label>
                <input
                  type="text"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="Your Name..."
                  className="w-full bg-stone-50 border border-stone-300 focus:border-[#8C6D31] focus:bg-white rounded-xl px-3 py-2 text-xs text-stone-900 focus:outline-hidden"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Email Address</label>
                <input
                  type="email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-stone-50 border border-stone-300 focus:border-[#8C6D31] focus:bg-white rounded-xl px-3 py-2 text-xs text-stone-900 focus:outline-hidden"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="gold-button w-full py-3.5 rounded-xl text-xs uppercase tracking-wider font-bold shadow-xs mt-4 cursor-pointer"
            >
              Request Event Proposal
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


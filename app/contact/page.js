"use client";
import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  ChevronDown,
  Car,
  Plane,
  Building2,
  HelpCircle
} from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import SectionHeader from "@/components/SectionHeader";
import { HOTEL_INFO, FAQS } from "@/data/hotelData";
import { useToast } from "@/components/Toast";

function ContactFormSection() {
  const searchParams = useSearchParams();
  const initialSubject = searchParams.get("subject") || "General Concierge Inquiry";

  const { addToast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState(initialSubject);
  const [message, setMessage] = useState("");
  const [activeFaq, setActiveFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      addToast({
        title: "Required Fields",
        message: "Please provide your name, email, and inquiry message.",
        type: "error"
      });
      return;
    }

    addToast({
      title: "Inquiry Received",
      message: `Thank you, ${name}. Our concierge team has received your message regarding '${subject}' and will reply promptly.`,
      type: "success"
    });

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAF9]">
      {/* Hero Banner */}
      <HeroBanner
        badge="Contact & Location"
        title="We Are Here To Assist"
        subtitle="Our concierge team is available 24 hours a day to assist with reservations, dining requests, and travel planning."
        breadcrumbs={[{ label: "Contact Us" }]}
        image="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        {/* Department Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs text-center">
            <Phone className="w-6 h-6 text-[#8C6D31] mx-auto mb-2" />
            <h4 className="font-serif text-sm font-bold text-stone-900 mb-1">Reservations Desk</h4>
            <p className="text-xs text-stone-600">{HOTEL_INFO.phone}</p>
            <p className="text-[11px] text-[#8C6D31] font-medium mt-1">24/7 Guest Assistance</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs text-center">
            <Mail className="w-6 h-6 text-[#8C6D31] mx-auto mb-2" />
            <h4 className="font-serif text-sm font-bold text-stone-900 mb-1">Email Inquiries</h4>
            <p className="text-xs text-stone-600">{HOTEL_INFO.email}</p>
            <p className="text-[11px] text-stone-500 mt-1">Quick response guaranteed</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs text-center">
            <Building2 className="w-6 h-6 text-[#8C6D31] mx-auto mb-2" />
            <h4 className="font-serif text-sm font-bold text-stone-900 mb-1">Events & Banquets</h4>
            <p className="text-xs text-stone-600">events@auragrandresort.com</p>
            <p className="text-[11px] text-stone-500 mt-1">Grand Monarch Hall Office</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs text-center">
            <MapPin className="w-6 h-6 text-[#8C6D31] mx-auto mb-2" />
            <h4 className="font-serif text-sm font-bold text-stone-900 mb-1">Resort Location</h4>
            <p className="text-xs text-stone-600">777 Grand Horizon Blvd</p>
            <p className="text-[11px] text-stone-500 mt-1">Paradise Bay, CA 90210</p>
          </div>
        </div>

        {/* Contact Form & Simulated Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-start">
          {/* Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-stone-200 shadow-md">
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#8C6D31]">
                  Send A Message
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                  Connect With Our Team
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name..."
                      className="w-full bg-stone-50 border border-stone-300 focus:border-[#8C6D31] focus:bg-white rounded-xl px-4 py-3 text-xs text-stone-900 focus:outline-hidden"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full bg-stone-50 border border-stone-300 focus:border-[#8C6D31] focus:bg-white rounded-xl px-4 py-3 text-xs text-stone-900 focus:outline-hidden"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-stone-50 border border-stone-300 focus:border-[#8C6D31] focus:bg-white rounded-xl px-4 py-3 text-xs text-stone-900 focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Subject</label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-300 focus:border-[#8C6D31] focus:bg-white rounded-xl px-4 py-3 text-xs text-stone-900 focus:outline-hidden"
                    >
                      <option value="General Concierge Inquiry">General Concierge Inquiry</option>
                      <option value="Room & Suite Reservation">Room & Suite Reservation</option>
                      <option value="Dining Table Reservation">Dining Table Reservation</option>
                      <option value="Spa & Wellness Rituals">Spa & Wellness Rituals</option>
                      <option value="Conference & Banquet Events">Conference & Banquet Events</option>
                      <option value="Airport Chauffeur Transfer">Airport Chauffeur Transfer</option>
                      <option value="Careers">Careers & Opportunities</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Your Message</label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How may our team assist with your upcoming visit or inquiry?"
                    className="w-full bg-stone-50 border border-stone-300 focus:border-[#8C6D31] focus:bg-white rounded-xl p-3.5 text-xs text-stone-900 focus:outline-hidden resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="gold-button w-full py-3.5 rounded-xl text-xs uppercase tracking-wider font-bold shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

          {/* Interactive Map & Transport Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Map Card */}
            <div className="bg-white rounded-3xl border border-stone-200 p-6 space-y-4 shadow-xs">
              <div className="flex items-center justify-between">
                <h4 className="font-serif text-lg font-bold text-stone-900">Resort Location</h4>
                <span className="text-[11px] text-[#8C6D31] font-semibold">Paradise Bay Coast</span>
              </div>

              {/* Styled Map Graphic Simulation */}
              <div className="relative h-64 rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 flex items-center justify-center">
                <div className="relative z-10 text-center p-6 bg-white border border-stone-200 shadow-md rounded-2xl max-w-xs">
                  <MapPin className="w-8 h-8 text-[#8C6D31] mx-auto mb-2" />
                  <h5 className="font-serif text-sm font-bold text-stone-900">Aura Grand Resort</h5>
                  <p className="text-[11px] text-stone-600 mt-0.5">{HOTEL_INFO.address}</p>
                  <span className="inline-block mt-2 text-[10px] uppercase font-bold text-[#8C6D31] tracking-wider">
                    GPS: 34.0259° N, 118.7798° W
                  </span>
                </div>
              </div>

              <div className="space-y-3 pt-2 text-xs text-stone-700">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200/80">
                  <Plane className="w-4 h-4 text-[#8C6D31] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900">Airport Proximity: </strong>
                    <span>25 minutes from Paradise Bay Airport (PBX).</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200/80">
                  <Car className="w-4 h-4 text-[#8C6D31] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900">Valet & Parking: </strong>
                    <span>Complimentary 24-hour valet parking & EV charging stations.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            badge="FAQ"
            title="Frequently Asked Questions"
            subtitle="Essential information about reservations, check-in, policies, and amenities."
          />

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif text-base font-bold text-stone-900 hover:text-[#8C6D31] transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#8C6D31] shrink-0" />
                    <span>{faq.question}</span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-400 transition-transform duration-200 ${
                      activeFaq === idx ? "rotate-180 text-[#8C6D31]" : ""
                    }`}
                  />
                </button>

                {activeFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 animate-in fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FAFAF9] flex items-center justify-center text-stone-700">Loading Contact Portal...</div>}>
      <ContactFormSection />
    </Suspense>
  );
}


"use client";
import React, { useState } from "react";
import { X, Calendar, Users, BedDouble, CheckCircle2, ShieldCheck } from "lucide-react";
import { ROOMS_DATA } from "@/data/hotelData";
import { useToast } from "@/components/Toast";

export default function BookingModal({ isOpen, onClose, defaultRoom = "standard" }) {
  const { addToast } = useToast();
  const [selectedRoom, setSelectedRoom] = useState(defaultRoom);
  const [checkIn, setCheckIn] = useState("2026-09-01");
  const [checkOut, setCheckOut] = useState("2026-09-05");
  const [guests, setGuests] = useState("2");
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const room = ROOMS_DATA.find((r) => r.slug === selectedRoom) || ROOMS_DATA[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!guestName || !guestEmail) {
      addToast({
        title: "Required Fields",
        message: "Please fill in your name and email to confirm your reservation hold.",
        type: "error"
      });
      return;
    }

    setSubmitted(true);
    addToast({
      title: "Reservation Requested",
      message: `Your reservation request for ${room.name} has been received. Our team will contact you shortly!`,
      type: "success"
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white border border-stone-200 rounded-3xl max-w-xl w-full p-6 md:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-500 hover:text-stone-900 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7F3EB] border border-[#E8DFD1] text-[#8C6D31] text-[11px] font-semibold uppercase tracking-widest mb-2">
              <span>Direct Reservation</span>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 mb-2">
              Reserve Your Stay
            </h3>
            <p className="text-xs text-stone-600 mb-6 leading-relaxed">
              Experience seamless booking with direct resort perks, best rate guarantee, and zero booking fees.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Room Choice */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1.5 flex items-center gap-1.5">
                  <BedDouble className="w-3.5 h-3.5 text-[#8C6D31]" />
                  <span>Selected Room</span>
                </label>
                <select
                  value={selectedRoom}
                  onChange={(e) => setSelectedRoom(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 focus:border-[#8C6D31] focus:bg-white rounded-xl px-4 py-3 text-sm text-stone-900 focus:outline-hidden transition-colors"
                >
                  {ROOMS_DATA.map((r) => (
                    <option key={r.id} value={r.slug}>
                      {r.name} — ${r.price} / night
                    </option>
                  ))}
                </select>
              </div>

              {/* Dates */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#8C6D31]" />
                    <span>Check-in</span>
                  </label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 focus:border-[#8C6D31] focus:bg-white rounded-xl px-3 py-2.5 text-xs text-stone-900 focus:outline-hidden"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#8C6D31]" />
                    <span>Check-out</span>
                  </label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 focus:border-[#8C6D31] focus:bg-white rounded-xl px-3 py-2.5 text-xs text-stone-900 focus:outline-hidden"
                    required
                  />
                </div>
              </div>

              {/* Guests */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1.5 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#8C6D31]" />
                  <span>Number of Guests</span>
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 focus:border-[#8C6D31] focus:bg-white rounded-xl px-4 py-2.5 text-xs text-stone-900 focus:outline-hidden"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4+ Guests</option>
                </select>
              </div>

              {/* Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
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
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full bg-stone-50 border border-stone-300 focus:border-[#8C6D31] focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-hidden"
                    required
                  />
                </div>
              </div>

              {/* Rate guarantee badge */}
              <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-between text-xs text-stone-700">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#8C6D31]" />
                  <span>Free Cancellation up to 48h</span>
                </span>
                <span className="font-serif font-bold text-[#8C6D31] text-sm">
                  ${room.price} / night
                </span>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="gold-button w-full py-3.5 rounded-xl text-xs uppercase tracking-wider font-bold shadow-xs cursor-pointer"
              >
                Confirm Reservation Hold
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4 animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-[#F7F3EB] border-2 border-[#8C6D31] flex items-center justify-center mx-auto text-[#8C6D31]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-stone-900">Reservation Confirmed!</h3>
            <p className="text-xs text-stone-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-stone-900">{guestName}</strong>. We have placed a hold on the <strong className="text-[#8C6D31]">{room.name}</strong> from {checkIn} to {checkOut}.
            </p>
            <p className="text-xs text-stone-500">A detailed itinerary has been dispatched to {guestEmail}.</p>
            <button
              onClick={onClose}
              className="gold-button px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider mt-4 cursor-pointer"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}


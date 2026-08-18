"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Users,
  BedDouble,
  CheckCircle2,
  ShieldCheck,
  Tag,
  ArrowRight,
  ArrowLeft,
  Wine,
  Car,
  HeartHandshake,
  UtensilsCrossed,
  Printer,
  Building2,
  Clock
} from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import { ROOMS_DATA, HOTEL_INFO } from "@/data/hotelData";
import { useToast } from "@/components/Toast";
import confetti from "canvas-confetti";

function BookingEngine() {
  const searchParams = useSearchParams();
  const { addToast } = useToast();

  const initialRoom = searchParams.get("room") || "standard";
  const initialCheckIn = searchParams.get("checkIn") || "2026-09-01";
  const initialCheckOut = searchParams.get("checkOut") || "2026-09-04";
  const initialGuests = searchParams.get("guests") || "2";
  const initialPromo = searchParams.get("promo") || "";

  // Step Tracker
  const [step, setStep] = useState(1);

  // Step 1: Dates & Guests
  const [checkIn, setCheckIn] = useState(initialCheckIn);
  const [checkOut, setCheckOut] = useState(initialCheckOut);
  const [adults, setAdults] = useState(initialGuests);
  const [children, setChildren] = useState("0");
  const [promoCode, setPromoCode] = useState(initialPromo);
  const [discountPercent, setDiscountPercent] = useState(initialPromo.toUpperCase() === "VIP10" ? 10 : 0);

  // Step 2: Room Selection
  const [selectedRoomSlug, setSelectedRoomSlug] = useState(initialRoom);

  // Step 3: Add-ons
  const [addons, setAddons] = useState({
    champagne: false,
    chauffeur: false,
    spa: false,
    dinner: false,
  });

  // Step 4: Guest Info
  const [guestTitle, setGuestTitle] = useState("Mr.");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  // Calculate nights
  const calculateNights = () => {
    const d1 = new Date(checkIn);
    const d2 = new Date(checkOut);
    const diffTime = Math.abs(d2 - d1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return isNaN(diffDays) || diffDays < 1 ? 1 : diffDays;
  };

  const nights = calculateNights();
  const selectedRoom = ROOMS_DATA.find((r) => r.slug === selectedRoomSlug) || ROOMS_DATA[0];

  // Pricing calculations
  const roomTotal = selectedRoom.price * nights;
  const addonPrices = {
    champagne: 85,
    chauffeur: selectedRoom.slug === "suite" ? 0 : 140,
    spa: 380,
    dinner: 220,
  };

  let addonsTotal = 0;
  if (addons.champagne) addonsTotal += addonPrices.champagne;
  if (addons.chauffeur) addonsTotal += addonPrices.chauffeur;
  if (addons.spa) addonsTotal += addonPrices.spa;
  if (addons.dinner) addonsTotal += addonPrices.dinner;

  const subtotal = roomTotal + addonsTotal;
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const taxesAndFees = Math.round((subtotal - discountAmount) * 0.12);
  const grandTotal = subtotal - discountAmount + taxesAndFees;

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === "VIP10" || promoCode.trim().toUpperCase() === "AURA2026") {
      setDiscountPercent(10);
      addToast({
        title: "Promo Code Applied",
        message: "10% discount has been applied to your reservation total!",
        type: "success"
      });
    } else {
      addToast({
        title: "Invalid Promo Code",
        message: "Code not recognized. Try using 'VIP10' for 10% off your booking.",
        type: "error"
      });
    }
  };

  const toggleAddon = (key) => {
    setAddons((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !phone) {
      addToast({
        title: "Missing Required Details",
        message: "Please complete all guest contact fields to finalize reservation.",
        type: "error"
      });
      return;
    }

    const bookingRef = "AGR-" + Math.floor(100000 + Math.random() * 900000);
    const bookingDetails = {
      ref: bookingRef,
      guestName: `${guestTitle} ${firstName} ${lastName}`,
      email,
      phone,
      roomName: selectedRoom.name,
      checkIn,
      checkOut,
      nights,
      adults,
      children,
      grandTotal,
      addons,
      specialRequests
    };

    setConfirmedBooking(bookingDetails);
    setStep(5); // Confirmed screen

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#8C6D31", "#E8DFD1", "#1C1917"]
      });
    } catch (e) {
      console.log(e);
    }

    addToast({
      title: "Reservation Confirmed!",
      message: `Your booking #${bookingRef} is confirmed. A receipt has been dispatched to ${email}.`,
      type: "success"
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAF9]">
      <HeroBanner
        badge="Direct Reservation"
        title="Reserve Your Stay"
        subtitle="Best rate guarantee, flexible cancellation, and seamless booking."
        breadcrumbs={[{ label: "Book Now" }]}
        image="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1800&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        {step < 5 && (
          <div className="mb-12">
            <div className="flex items-center justify-between max-w-3xl mx-auto relative">
              <div className="absolute top-1/2 -translate-y-1/2 inset-x-0 h-0.5 bg-stone-200 -z-0" />
              {[
                { num: 1, label: "Dates & Guests" },
                { num: 2, label: "Select Suite" },
                { num: 3, label: "Add-ons" },
                { num: 4, label: "Guest Info" },
              ].map((s) => (
                <div key={s.num} className="relative z-10 flex flex-col items-center">
                  <button
                    onClick={() => s.num < step && setStep(s.num)}
                    disabled={s.num > step}
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-all cursor-pointer ${
                      step === s.num
                        ? "bg-stone-900 text-white shadow-md ring-4 ring-stone-200"
                        : s.num < step
                        ? "bg-emerald-600 text-white"
                        : "bg-white text-stone-500 border border-stone-300"
                    }`}
                  >
                    {s.num < step ? "✓" : s.num}
                  </button>
                  <span className="text-[11px] font-medium text-stone-700 mt-2 hidden sm:block">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Wizard Area */}
          <div className={`${step === 5 ? "lg:col-span-12" : "lg:col-span-8"}`}>
            {/* STEP 1: Dates & Guests */}
            {step === 1 && (
              <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-md space-y-6 animate-in fade-in">
                <div className="border-b border-stone-200 pb-4">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#8C6D31]">
                    Step 1 of 4
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">
                    Select Your Travel Dates & Party
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#8C6D31]" />
                      <span>Check-in Date</span>
                    </label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-300 focus:border-[#8C6D31] focus:bg-white rounded-xl px-4 py-3 text-sm text-stone-900 focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#8C6D31]" />
                      <span>Check-out Date</span>
                    </label>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-300 focus:border-[#8C6D31] focus:bg-white rounded-xl px-4 py-3 text-sm text-stone-900 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#8C6D31]" />
                      <span>Adults</span>
                    </label>
                    <select
                      value={adults}
                      onChange={(e) => setAdults(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-300 focus:border-[#8C6D31] focus:bg-white rounded-xl px-4 py-3 text-sm text-stone-900 focus:outline-hidden"
                    >
                      <option value="1">1 Adult</option>
                      <option value="2">2 Adults</option>
                      <option value="3">3 Adults</option>
                      <option value="4">4 Adults</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                      Children (0 - 12 yrs)
                    </label>
                    <select
                      value={children}
                      onChange={(e) => setChildren(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-300 focus:border-[#8C6D31] focus:bg-white rounded-xl px-4 py-3 text-sm text-stone-900 focus:outline-hidden"
                    >
                      <option value="0">0 Children</option>
                      <option value="1">1 Child</option>
                      <option value="2">2 Children</option>
                    </select>
                  </div>
                </div>

                {/* Promo Code Input */}
                <div className="pt-4 border-t border-stone-200">
                  <label className="block text-xs font-semibold text-stone-700 mb-1.5 flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-[#8C6D31]" />
                    <span>Have a Promotional Code?</span>
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Try code: VIP10"
                      className="flex-1 bg-stone-50 border border-stone-300 focus:border-[#8C6D31] focus:bg-white rounded-xl px-4 py-2.5 text-xs text-stone-900 uppercase placeholder:normal-case placeholder:text-stone-400 focus:outline-hidden"
                    />
                    <button
                      type="button"
                      onClick={handleApplyPromo}
                      className="px-5 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-xs font-bold uppercase tracking-wider text-stone-800 border border-stone-300 cursor-pointer"
                    >
                      Apply
                    </button>
                  </div>
                  {discountPercent > 0 && (
                    <p className="text-xs text-emerald-600 mt-2 font-medium">
                      ✓ {discountPercent}% discount code active!
                    </p>
                  )}
                </div>

                <div className="pt-6 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="gold-button px-8 py-3.5 rounded-xl text-xs uppercase tracking-wider font-bold flex items-center gap-2 shadow-xs cursor-pointer"
                  >
                    <span>Continue to Room Selection</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Room Selection */}
            {step === 2 && (
              <div className="space-y-6 animate-in fade-in">
                <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-xs flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#8C6D31]">
                      Step 2 of 4
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-stone-900 mt-0.5">
                      Choose Your Suite ({nights} Nights)
                    </h3>
                  </div>
                  <button
                    onClick={() => setStep(1)}
                    className="text-xs text-stone-600 hover:text-stone-900 flex items-center gap-1 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Change Dates</span>
                  </button>
                </div>

                <div className="space-y-4">
                  {ROOMS_DATA.map((room) => (
                    <div
                      key={room.id}
                      onClick={() => setSelectedRoomSlug(room.slug)}
                      className={`bg-white p-6 rounded-3xl border cursor-pointer transition-all duration-300 ${
                        selectedRoomSlug === room.slug
                          ? "border-[#8C6D31] bg-[#F7F3EB]/30 ring-2 ring-[#8C6D31]/30 shadow-md"
                          : "border-stone-200 hover:border-stone-300 shadow-xs"
                      }`}
                    >
                      <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="relative h-48 w-full md:w-64 rounded-2xl overflow-hidden shrink-0 bg-stone-100">
                          <Image src={room.images[0]} alt={room.name} fill className="object-cover" />
                          <div className="absolute top-2 left-2 bg-stone-900 text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded-full">
                            {room.badge}
                          </div>
                        </div>

                        <div className="flex-1 space-y-2 text-center md:text-left">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                            <h4 className="font-serif text-xl font-bold text-stone-900">{room.name}</h4>
                            <div className="text-right">
                              <span className="font-serif text-2xl font-bold text-[#8C6D31]">
                                ${room.price}
                              </span>
                              <span className="text-xs text-stone-500"> / night</span>
                            </div>
                          </div>

                          <p className="text-xs text-stone-600 line-clamp-2">{room.subtitle}</p>

                          <div className="flex flex-wrap items-center gap-4 text-xs text-stone-500 pt-2">
                            <span>• {room.size}</span>
                            <span>• {room.bed}</span>
                            <span>• {room.view}</span>
                          </div>

                          <div className="pt-3 flex items-center justify-between">
                            <span className="text-xs font-semibold text-stone-500">
                              Subtotal: ${room.price * nights} ({nights} nights)
                            </span>
                            <span
                              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider ${
                                selectedRoomSlug === room.slug
                                  ? "bg-stone-900 text-white"
                                  : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                              }`}
                            >
                              {selectedRoomSlug === room.slug ? "✓ Selected" : "Select Room"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-6 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-xs font-semibold text-stone-700 flex items-center gap-2 cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="gold-button px-8 py-3.5 rounded-xl text-xs uppercase tracking-wider font-bold flex items-center gap-2 shadow-xs cursor-pointer"
                  >
                    <span>Proceed to Add-ons</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Add-ons */}
            {step === 3 && (
              <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-md space-y-6 animate-in fade-in">
                <div className="border-b border-stone-200 pb-4">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#8C6D31]">
                    Step 3 of 4
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">
                    Enhance Your Stay
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Select tailored additions to elevate your arrival and stay experience.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Add-on 1 */}
                  <div
                    onClick={() => toggleAddon("champagne")}
                    className={`p-5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between gap-4 ${
                      addons.champagne
                        ? "border-[#8C6D31] bg-[#F7F3EB]"
                        : "border-stone-200 bg-stone-50 hover:bg-stone-100"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#F7F3EB] border border-[#E8DFD1] flex items-center justify-center text-[#8C6D31] shrink-0">
                        <Wine className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-serif text-base font-bold text-stone-900">
                          Chilled Champagne & Artisanal Fruit on Arrival
                        </h4>
                        <p className="text-xs text-stone-600">
                          Chilled vintage champagne with fresh seasonal berries awaiting in your room.
                        </p>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-serif text-lg font-bold text-stone-900">+$85</span>
                      <span className="block text-[10px] uppercase font-bold text-[#8C6D31]">
                        {addons.champagne ? "✓ Added" : "+ Add"}
                      </span>
                    </div>
                  </div>

                  {/* Add-on 2 */}
                  <div
                    onClick={() => toggleAddon("chauffeur")}
                    className={`p-5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between gap-4 ${
                      addons.chauffeur
                        ? "border-[#8C6D31] bg-[#F7F3EB]"
                        : "border-stone-200 bg-stone-50 hover:bg-stone-100"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#F7F3EB] border border-[#E8DFD1] flex items-center justify-center text-[#8C6D31] shrink-0">
                        <Car className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-serif text-base font-bold text-stone-900">
                          Private Airport Chauffeur Transfer (Roundtrip)
                        </h4>
                        <p className="text-xs text-stone-600">
                          Airport curb meet-and-greet with luggage assistance and direct transfer.
                        </p>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-serif text-lg font-bold text-stone-900">
                        {selectedRoom.slug === "suite" ? "Complimentary" : "+$140"}
                      </span>
                      <span className="block text-[10px] uppercase font-bold text-[#8C6D31]">
                        {addons.chauffeur ? "✓ Added" : "+ Add"}
                      </span>
                    </div>
                  </div>

                  {/* Add-on 3 */}
                  <div
                    onClick={() => toggleAddon("spa")}
                    className={`p-5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between gap-4 ${
                      addons.spa
                        ? "border-[#8C6D31] bg-[#F7F3EB]"
                        : "border-stone-200 bg-stone-50 hover:bg-stone-100"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#F7F3EB] border border-[#E8DFD1] flex items-center justify-center text-[#8C6D31] shrink-0">
                        <HeartHandshake className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-serif text-base font-bold text-stone-900">
                          Elysium Harmony Couple's Spa Session (120 Min)
                        </h4>
                        <p className="text-xs text-stone-600">
                          Full body exfoliation, warm stone massage & private hydrotherapy bath.
                        </p>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-serif text-lg font-bold text-stone-900">+$380</span>
                      <span className="block text-[10px] uppercase font-bold text-[#8C6D31]">
                        {addons.spa ? "✓ Added" : "+ Add"}
                      </span>
                    </div>
                  </div>

                  {/* Add-on 4 */}
                  <div
                    onClick={() => toggleAddon("dinner")}
                    className={`p-5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between gap-4 ${
                      addons.dinner
                        ? "border-[#8C6D31] bg-[#F7F3EB]"
                        : "border-stone-200 bg-stone-50 hover:bg-stone-100"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#F7F3EB] border border-[#E8DFD1] flex items-center justify-center text-[#8C6D31] shrink-0">
                        <UtensilsCrossed className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-serif text-base font-bold text-stone-900">
                          Chef's 5-Course Tasting Menu with Wine Pairings
                        </h4>
                        <p className="text-xs text-stone-600">
                          Oceanfront terrace table at Le Mirador with curated pairings for 2 guests.
                        </p>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-serif text-lg font-bold text-stone-900">+$220</span>
                      <span className="block text-[10px] uppercase font-bold text-[#8C6D31]">
                        {addons.dinner ? "✓ Added" : "+ Add"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-stone-200">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-6 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-xs font-semibold text-stone-700 flex items-center gap-2 cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(4)}
                    className="gold-button px-8 py-3.5 rounded-xl text-xs uppercase tracking-wider font-bold flex items-center gap-2 shadow-xs cursor-pointer"
                  >
                    <span>Continue to Guest Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: Guest Details Form */}
            {step === 4 && (
              <form
                onSubmit={handleFinalSubmit}
                className="bg-white p-8 rounded-3xl border border-stone-200 shadow-md space-y-6 animate-in fade-in"
              >
                <div className="border-b border-stone-200 pb-4">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#8C6D31]">
                    Step 4 of 4
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">
                    Primary Guest & Contact Information
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                  <div className="sm:col-span-3">
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Title</label>
                    <select
                      value={guestTitle}
                      onChange={(e) => setGuestTitle(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-300 focus:border-[#8C6D31] focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-hidden"
                    >
                      <option value="Mr.">Mr.</option>
                      <option value="Ms.">Ms.</option>
                      <option value="Mrs.">Mrs.</option>
                      <option value="Dr.">Dr.</option>
                    </select>
                  </div>
                  <div className="sm:col-span-4">
                    <label className="block text-xs font-semibold text-stone-700 mb-1">First Name</label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="First name..."
                      className="w-full bg-stone-50 border border-stone-300 focus:border-[#8C6D31] focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-hidden"
                      required
                    />
                  </div>
                  <div className="sm:col-span-5">
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Last Name</label>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Last name..."
                      className="w-full bg-stone-50 border border-stone-300 focus:border-[#8C6D31] focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-hidden"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full bg-stone-50 border border-stone-300 focus:border-[#8C6D31] focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-hidden"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 789-1234"
                      className="w-full bg-stone-50 border border-stone-300 focus:border-[#8C6D31] focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-hidden"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Special Requests & Arrival Notes
                  </label>
                  <textarea
                    rows={3}
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    placeholder="e.g. Late flight arrival, dietary preferences, celebratory occasion..."
                    className="w-full bg-stone-50 border border-stone-300 focus:border-[#8C6D31] focus:bg-white rounded-xl p-3 text-xs text-stone-900 focus:outline-hidden resize-none"
                  />
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-between text-xs text-stone-700">
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#8C6D31]" />
                    <span>No Prepayment Required. Pay upon check-in at resort.</span>
                  </span>
                  <span className="text-[#8C6D31] font-bold">Secure Reservation</span>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="px-6 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-xs font-semibold text-stone-700 flex items-center gap-2 cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                  <button
                    type="submit"
                    className="gold-button px-8 py-3.5 rounded-xl text-xs uppercase tracking-wider font-bold shadow-md flex items-center gap-2 cursor-pointer"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Complete & Confirm Reservation</span>
                  </button>
                </div>
              </form>
            )}

            {/* STEP 5: Instant Confirmation Voucher */}
            {step === 5 && confirmedBooking && (
              <div className="bg-white border-2 border-[#8C6D31] rounded-3xl p-8 md:p-12 shadow-xl space-y-8 animate-in zoom-in-95 max-w-4xl mx-auto">
                <div className="text-center space-y-3">
                  <div className="w-20 h-20 rounded-full bg-[#F7F3EB] border-2 border-[#8C6D31] flex items-center justify-center mx-auto text-[#8C6D31]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#8C6D31]">
                    Official Confirmation
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
                    Reservation Confirmed
                  </h2>
                  <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                    Thank you for choosing Aura Grand Resort. Your room is reserved and we look forward to welcoming you.
                  </p>
                </div>

                {/* Printable Receipt Card */}
                <div
                  id="printable-slip"
                  className="bg-stone-50 border border-stone-200 rounded-2xl p-6 sm:p-8 space-y-6"
                >
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 pb-6 border-b border-stone-200">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-stone-500 block">
                        Booking Reference
                      </span>
                      <span className="font-serif text-2xl font-bold text-[#8C6D31]">
                        {confirmedBooking.ref}
                      </span>
                    </div>
                    <div className="text-left sm:text-right">
                      <span className="text-[10px] uppercase tracking-wider text-stone-500 block">
                        Status
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Guaranteed Hold
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                    <div>
                      <span className="text-stone-500 block mb-1">Guest Name:</span>
                      <strong className="text-stone-900 text-sm">{confirmedBooking.guestName}</strong>
                    </div>
                    <div>
                      <span className="text-stone-500 block mb-1">Room Reserved:</span>
                      <strong className="text-stone-900 text-sm">{confirmedBooking.roomName}</strong>
                    </div>
                    <div>
                      <span className="text-stone-500 block mb-1">Stay Dates:</span>
                      <strong className="text-stone-900 text-sm">{confirmedBooking.checkIn} → {confirmedBooking.checkOut} ({confirmedBooking.nights} Nts)</strong>
                    </div>
                    <div>
                      <span className="text-stone-500 block mb-1">Total Bill:</span>
                      <strong className="text-[#8C6D31] font-serif text-lg">${confirmedBooking.grandTotal}</strong>
                    </div>
                  </div>

                  {confirmedBooking.specialRequests && (
                    <div className="p-3 bg-white rounded-xl text-xs text-stone-700 border border-stone-200">
                      <strong className="text-stone-900">Special Requests: </strong>
                      {confirmedBooking.specialRequests}
                    </div>
                  )}

                  <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-500">
                    <span className="flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 text-[#8C6D31]" />
                      {HOTEL_INFO.address}
                    </span>
                    <span>Front Desk: {HOTEL_INFO.phone}</span>
                  </div>
                </div>

                {/* Print & Return Action */}
                <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                  <button
                    onClick={() => window.print()}
                    className="px-6 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-xs font-bold uppercase tracking-wider text-stone-800 border border-stone-300 flex items-center gap-2 cursor-pointer"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Print Confirmation</span>
                  </button>

                  <Link
                    href="/"
                    className="gold-button px-8 py-3 rounded-xl text-xs uppercase tracking-wider font-bold flex items-center gap-2 shadow-xs cursor-pointer"
                  >
                    <span>Return To Home</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Right Summary Sidebar (Steps 1 to 4) */}
          {step < 5 && (
            <div className="lg:col-span-4">
              <div className="sticky top-28 bg-white border border-stone-200 rounded-3xl p-6 shadow-md space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <h4 className="font-serif text-lg font-bold text-stone-900">Reservation Summary</h4>
                  <span className="text-[11px] text-stone-500">Aura Grand Resort & Suites</span>
                </div>

                {/* Room Preview */}
                <div className="flex gap-4 items-center">
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-stone-200 bg-stone-100">
                    <Image src={selectedRoom.images[0]} alt={selectedRoom.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h5 className="font-serif text-sm font-bold text-stone-900">{selectedRoom.name}</h5>
                    <span className="text-xs text-[#8C6D31] font-semibold">${selectedRoom.price} / night</span>
                    <span className="block text-[11px] text-stone-500 mt-0.5">{selectedRoom.size}</span>
                  </div>
                </div>

                {/* Dates info */}
                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5 text-xs text-stone-700">
                  <div className="flex justify-between">
                    <span className="text-stone-500">Check-in:</span>
                    <span>{checkIn} (3 PM)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Check-out:</span>
                    <span>{checkOut} (12 PM)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Duration:</span>
                    <span className="font-bold text-stone-900">{nights} Night{nights > 1 ? "s" : ""}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Guests:</span>
                    <span>{adults} Adult(s) {children > 0 ? `, ${children} Child` : ""}</span>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-2 text-xs text-stone-700 border-t border-stone-200 pt-4">
                  <div className="flex justify-between">
                    <span>${selectedRoom.price} x {nights} nights</span>
                    <span>${roomTotal}</span>
                  </div>

                  {addonsTotal > 0 && (
                    <div className="flex justify-between text-stone-700">
                      <span>Add-ons</span>
                      <span>+${addonsTotal}</span>
                    </div>
                  )}

                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-600 font-medium">
                      <span>Promo Discount ({discountPercent}%)</span>
                      <span>-${discountAmount}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-stone-500">
                    <span>Taxes & Service Fee (12%)</span>
                    <span>${taxesAndFees}</span>
                  </div>

                  <div className="flex justify-between font-bold text-stone-900 text-base pt-3 border-t border-stone-200">
                    <span>Total Due at Resort</span>
                    <span className="font-serif text-xl text-[#8C6D31]">${grandTotal}</span>
                  </div>
                </div>

                {/* Perks Checklist */}
                <div className="pt-2 border-t border-stone-200 space-y-1.5 text-[11px] text-stone-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8C6D31]" />
                    <span>Complimentary Welcome Refreshments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8C6D31]" />
                    <span>Free High-Speed Wi-Fi & Valet Parking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8C6D31]" />
                    <span>Free Cancellation up to 48 Hours</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function BookPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FAFAF9] flex items-center justify-center text-stone-700">Loading Reservation Engine...</div>}>
      <BookingEngine />
    </Suspense>
  );
}


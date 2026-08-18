import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Clock,
  ArrowRight,
  CheckCircle2,
  CalendarCheck
} from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import SectionHeader from "@/components/SectionHeader";
import { SERVICES_DATA } from "@/data/hotelData";

export const metadata = {
  title: "Resort Services & World-Class Amenities | Aura Grand Resort",
  description:
    "Explore our Michelin-inspired dining, heated saltwater infinity pool, holistic thermal spa, and state-of-the-art conference hall.",
};

export default function ServicesOverviewPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAF9]">
      {/* Hero Banner */}
      <HeroBanner
        badge="Resort Experiences"
        title="Unrivaled Services & Amenities"
        subtitle="Every moment at Aura Grand is designed to provide relaxation, culinary artistry, and effortless comfort."
        breadcrumbs={[{ label: "Services & Amenities" }]}
        image="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1800&q=80"
      />

      {/* Services Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionHeader
          badge="Curated Offerings"
          title="World-Class Facilities"
          subtitle="Explore our four signature resort amenities crafted for relaxation, celebration, and culinary wonder."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl overflow-hidden border border-stone-200 hover:border-stone-300 shadow-xs hover:shadow-md group flex flex-col transition-all duration-300"
            >
              <div className="relative h-72 w-full overflow-hidden bg-stone-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1 rounded-full bg-white/95 text-[#8C6D31] border border-stone-200 text-xs font-semibold uppercase shadow-xs">
                    {service.slug.replace("-", " ")}
                  </span>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-stone-900 mb-1">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#8C6D31] font-semibold mb-4">{service.subtitle}</p>
                  <p className="text-sm text-stone-600 leading-relaxed mb-6">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    {service.highlights?.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-stone-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8C6D31] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs text-stone-500 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#8C6D31]" />
                    <span className="truncate max-w-[200px]">{service.hours || service.capacity}</span>
                  </span>

                  <Link
                    href={`/services/${service.slug}`}
                    className="gold-button px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-xs"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Private Concierge Inquiry Banner */}
        <div className="bg-[#1C1917] text-white rounded-3xl p-8 md:p-12 text-center shadow-md">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">
            Custom Private Event or Bespoke Experience?
          </h3>
          <p className="text-sm text-stone-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Our concierge and event team is available 24/7 to arrange private dining, celebrations, sunset boat charters, and custom wellness bookings.
          </p>
          <Link
            href="/contact"
            className="gold-button-accent inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-md"
          >
            <span>Inquire With Concierge Desk</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}


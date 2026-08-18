import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, CheckCircle2 } from "lucide-react";

export default function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden group flex flex-col h-full border border-stone-200 shadow-xs hover:shadow-md hover:border-stone-300 transition-all duration-200">
      {/* Image Container */}
      <div className="relative h-60 w-full overflow-hidden bg-stone-100">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 via-transparent to-transparent" />

        {/* Operating Hours or Tag */}
        {(service.hours || service.capacity) && (
          <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 bg-stone-900/85 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-stone-800 text-[11px] text-white">
            <Clock className="w-3.5 h-3.5 text-amber-300 shrink-0" />
            <span className="truncate">{service.hours || service.capacity}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-xl font-bold text-stone-900 mb-2 group-hover:text-[#8C6D31] transition-colors">
            {service.title}
          </h3>
          <p className="text-xs text-stone-600 mb-4 leading-relaxed line-clamp-2">
            {service.subtitle || service.description}
          </p>

          {/* Highlights */}
          {service.highlights && (
            <div className="space-y-2 mb-6">
              {service.highlights.slice(0, 3).map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-stone-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8C6D31] shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
          <Link
            href={`/services/${service.slug}`}
            className="text-xs font-semibold text-[#8C6D31] hover:text-[#5E471C] flex items-center gap-1.5 group/link"
          >
            <span>Discover Experience</span>
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>
          <Link
            href={`/services/${service.slug}`}
            className="px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 border border-stone-200 text-[11px] text-stone-800 font-medium transition-colors"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}


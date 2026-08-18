import React from "react";
import { Camera, ArrowRight } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import GalleryLightbox from "@/components/GalleryLightbox";

export const metadata = {
  title: "Photo & Video Gallery | Aura Grand Resort",
  description: "Browse high-definition photography of our oceanfront suites, fine dining, heated infinity pools, and resort grounds.",
};

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAF9]">
      {/* Hero Banner */}
      <HeroBanner
        badge="Photo Gallery"
        title="Visual Experiences"
        subtitle="Explore the scenic vistas, suite interiors, dining spaces, and wellness sanctuaries across Aura Grand."
        breadcrumbs={[{ label: "Gallery" }]}
        image="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1800&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        {/* Gallery Lightbox Grid */}
        <GalleryLightbox />

        {/* Instagram Visuals Hub */}
        <div className="mt-24 pt-16 border-t border-stone-200 text-center">
          <h3 className="font-serif text-3xl font-bold text-stone-900 mb-3">
            Follow Our Coastal Journal
          </h3>
          <p className="text-sm text-stone-600 max-w-xl mx-auto mb-8">
            Tag your stay memories with @AuraGrandResort on Instagram to be featured on our social pages.
          </p>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="gold-button inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-xs"
          >
            <span>Follow on Instagram</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}


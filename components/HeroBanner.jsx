import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function HeroBanner({
  title,
  subtitle,
  badge,
  breadcrumbs = [],
  image = "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2400&q=90",
}) {
  return (
    <section className="relative min-h-[420px] md:min-h-[480px] flex items-center justify-center overflow-hidden">
      {/* Background Image with subtle blur */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 filter blur-[1.5px]"
        />
        <div className="absolute inset-0 bg-linear-to-b from-stone-950/70 via-stone-950/45 to-stone-950/75 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center py-20 md:py-28">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center justify-center gap-2.5 text-xs text-stone-200 mb-6 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3.5 h-3.5 text-stone-300" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white font-semibold">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* Title */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white tracking-wide leading-[1.2] mb-6 drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-stone-100 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed md:leading-loose font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] mb-2">
            {subtitle}
          </p>
        )}

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <div className="w-12 h-0.5 bg-white/50 rounded-full shadow-xs" />
        </div>
      </div>
    </section>
  );
}



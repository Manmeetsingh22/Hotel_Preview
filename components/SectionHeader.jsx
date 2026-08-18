import React from "react";

export default function SectionHeader({
  title,
  subtitle,
  centered = true,
  className = ""
}) {
  return (
    <div className={`mb-14 ${centered ? "text-center mx-auto" : "text-left"} max-w-3xl ${className}`}>
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-stone-900 tracking-wide leading-[1.2] mb-4">
        {title}
      </h2>

      {subtitle && (
        <p className="text-stone-600 text-sm md:text-base leading-relaxed md:leading-loose max-w-2xl mx-auto font-normal">
          {subtitle}
        </p>
      )}

      {/* Decorative Accent Line */}
      <div className={`flex items-center gap-2 mt-6 ${centered ? "justify-center" : "justify-start"}`}>
        <div className="w-12 h-0.5 bg-[#8C6D31]/80 rounded-full" />
      </div>
    </div>
  );
}


import React from 'react';
import { Quote, Sparkles } from 'lucide-react';
import { personalInfo } from '../config/portfolio-data';

export default function BrandStatement() {
  return (
    <section className="py-20 bg-gradient-to-r from-red-700 via-red-600 to-rose-700 text-white relative overflow-hidden shadow-2xl">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto text-white shadow-xl">
          <Quote className="w-8 h-8 fill-current text-white/90" />
        </div>

        <blockquote className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-snug max-w-4xl mx-auto uppercase">
          "{personalInfo.brandQuote}"
        </blockquote>

        <div className="h-1 w-20 bg-white/40 rounded-full mx-auto" />

        <div className="text-xs sm:text-sm font-bold tracking-widest uppercase text-red-100">
          — HAMZATH SUFIDE P S | PHILOSOPHY & VISION
        </div>
      </div>
    </section>
  );
}

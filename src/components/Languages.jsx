import React from 'react';
import { Languages as LanguagesIcon, CheckCircle2 } from 'lucide-react';
import { languages } from '../config/portfolio-data';

export default function Languages() {
  return (
    <section id="languages" className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider">
            <LanguagesIcon className="w-3.5 h-3.5" />
            <span>Communication Languages</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 uppercase">
            Language <span className="text-red-600">Proficiency</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {languages.map((lang, idx) => (
            <div
              key={idx}
              className="bg-zinc-50 rounded-2xl p-6 border border-zinc-200 shadow-sm hover:border-red-600/40 hover:bg-white transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-red-600 uppercase">
                  {lang.tag}
                </span>
                <CheckCircle2 className="w-4 h-4 text-red-600" />
              </div>

              <h3 className="text-xl font-black text-zinc-950">
                {lang.name}
              </h3>

              <div className="text-xs font-semibold text-zinc-600">
                {lang.level}
              </div>

              <div className="w-full h-2 rounded-full bg-zinc-200 overflow-hidden">
                <div
                  className="h-full bg-red-600 rounded-full"
                  style={{ width: `${lang.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

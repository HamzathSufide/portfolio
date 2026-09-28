import React, { useState } from 'react';
import {
  TrendingUp,
  CheckCircle2,
  PieChart,
  Target,
  ArrowRight,
  Zap,
  DollarSign,
  Building
} from 'lucide-react';
import { businessPipeline } from '../config/portfolio-data';

export default function SalesBusiness() {
  const [activeStep, setActiveStep] = useState(0);

  const businessCompetencies = [
    "Sales Knowledge",
    "Marketing Concepts",
    "Customer Communication",
    "Product Presentation",
    "Business Development Concepts",
    "Lead Generation Concepts",
    "Digital Marketing Strategy",
    "Value Proposition Definition",
    "Customer Needs Mapping",
    "Product Demos & Pitches"
  ];

  return (
    <section id="business" className="py-24 bg-zinc-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Business Orientation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight uppercase">
            Technology <span className="text-red-600">Meets Business</span>
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
            Successful software products require both engineering execution and business thinking. I understand how code translates into customer value, market readiness, and business growth.
          </p>
        </div>

        {/* Competencies Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-16">
          {businessCompetencies.map((comp, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl bg-white border border-zinc-200 shadow-sm hover:border-red-600/40 hover:shadow-md transition-all flex items-center gap-2.5"
            >
              <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" />
              <span className="text-xs font-semibold text-zinc-800 leading-snug">
                {comp}
              </span>
            </div>
          ))}
        </div>

        {/* Visual Pipeline Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-zinc-200 shadow-xl max-w-5xl mx-auto">
          <div className="text-center max-w-md mx-auto mb-10 space-y-1">
            <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
              Strategic Pipeline
            </span>
            <h3 className="text-2xl font-black text-zinc-950">
              The Technology-to-Value Journey
            </h3>
          </div>

          {/* Interactive Horizontal Pipeline Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 mb-8">
            {businessPipeline.map((item, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 rounded-2xl border text-center transition-all duration-200 flex flex-col items-center justify-between ${
                    isActive
                      ? 'bg-zinc-950 text-white border-2 border-red-600 shadow-xl scale-105'
                      : 'bg-zinc-50 text-zinc-700 hover:bg-red-50 border-zinc-200'
                  }`}
                >
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${isActive ? 'bg-red-600 text-white' : 'bg-zinc-200 text-zinc-700'}`}>
                    STEP {item.step}
                  </span>
                  <span className="text-sm font-black mt-2 mb-1">
                    {item.label}
                  </span>
                  <span className="text-[10px] font-medium opacity-80 line-clamp-1">
                    {item.sub}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected Stage Explanation Box */}
          <div className="p-6 rounded-2xl bg-zinc-950 text-white border border-red-600/30 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <span className="text-xs font-mono font-bold text-red-400 uppercase">
                PHASE {businessPipeline[activeStep].step}: {businessPipeline[activeStep].label}
              </span>
              <h4 className="text-xl font-black text-white">
                {businessPipeline[activeStep].sub}
              </h4>
              <p className="text-sm text-zinc-300 max-w-xl">
                {businessPipeline[activeStep].desc}
              </p>
            </div>

            <div className="px-5 py-3 rounded-xl bg-red-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-red-600/30">
              Value Focus ⚡
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

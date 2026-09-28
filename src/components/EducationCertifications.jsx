import React from 'react';
import {
  GraduationCap,
  Award,
  BookOpen,
  CheckCircle2,
  Building,
  Sparkles
} from 'lucide-react';
import { education, certifications } from '../config/portfolio-data';

export default function EducationCertifications() {
  return (
    <section id="education" className="py-24 bg-zinc-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic & Certifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight uppercase">
            Education & <span className="text-red-600">Certifications</span>
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
            Formal computer science degree and specialized technical certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          
          {/* Education Card */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200 shadow-xl space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-zinc-950 text-white flex items-center justify-center font-bold">
                  <GraduationCap className="w-6 h-6 text-red-500" />
                </div>
                <span className="px-3 py-1 rounded-full bg-red-50 text-red-700 border border-red-200 text-xs font-black">
                  CGPA: {education.cgpa}
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-bold text-red-600 uppercase tracking-wider">BACHELOR DEGREE</span>
                <h3 className="text-xl sm:text-2xl font-black text-zinc-950">
                  {education.degree}
                </h3>
                <div className="text-sm font-bold text-zinc-700">
                  {education.institution}
                </div>
                <div className="text-xs text-zinc-500 font-medium">
                  {education.campus}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 pt-3">
                {education.focus}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-700 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" />
              <span>Affiliated with Anna University Engineering Curriculum</span>
            </div>
          </div>

          {/* Certifications List */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-sm font-black uppercase text-zinc-400 tracking-wider flex items-center gap-2 mb-2">
              <Award className="w-4 h-4 text-red-600" />
              <span>Technical Certifications</span>
            </h3>

            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-zinc-200 shadow-md hover:border-red-600/40 hover:shadow-lg transition-all space-y-2 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-red-600 uppercase">
                    CERTIFIED
                  </span>
                  <span className="text-xs text-zinc-400 font-medium">
                    {cert.issuer}
                  </span>
                </div>

                <h4 className="text-lg font-black text-zinc-950 group-hover:text-red-600 transition-colors">
                  {cert.title}
                </h4>

                <p className="text-xs text-zinc-600">
                  {cert.focus}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

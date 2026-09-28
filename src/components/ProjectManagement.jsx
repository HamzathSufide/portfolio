import React, { useState } from 'react';
import {
  Kanban,
  CheckCircle2,
  GitPullRequest,
  Users,
  Clock,
  ArrowRight,
  ShieldCheck,
  Target,
  Sparkles
} from 'lucide-react';
import { projectManagementWorkflow } from '../config/portfolio-data';

export default function ProjectManagement() {
  const [activeStep, setActiveStep] = useState(0);

  const pmHighlights = [
    "Sprint Planning & Backlog Grooming",
    "Daily Stand-ups & Blockers Management",
    "Sprint Reviews & Stakeholder Demos",
    "Sprint Retrospectives & Continuous Improvement",
    "Task Tracking in JIRA & Trello",
    "Agile / Scrum / Kanban Frameworks",
    "Cross-Functional Team Collaboration",
    "QA Coordination & Bug Triage",
    "Software Staging & Production Delivery",
    "Requirement Analysis & Technical Specs"
  ];

  return (
    <section id="pm-delivery" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider">
            <Kanban className="w-3.5 h-3.5" />
            <span>Delivery Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight uppercase">
            Project Management & <span className="text-red-600">Delivery</span>
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
            My engineering work includes deep hands-on exposure to Agile software delivery, cross-functional collaboration, requirement synthesis, and sprint coordination.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="mb-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {pmHighlights.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-red-600/40 hover:bg-red-50/50 transition-all flex items-center gap-2.5 shadow-sm"
            >
              <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" />
              <span className="text-xs font-semibold text-zinc-800 leading-snug">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Interactive Visual 8-Step Delivery Workflow */}
        <div className="bg-zinc-950 rounded-3xl p-6 sm:p-10 text-white border border-zinc-800 shadow-2xl">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <span className="px-3 py-1 rounded-full bg-red-600/20 text-red-400 text-xs font-bold uppercase">
              End-to-End Lifecycle
            </span>
            <h3 className="text-2xl font-black text-white">
              Software Delivery Workflow
            </h3>
            <p className="text-xs text-zinc-400">
              Click on any step below to explore how engineering aligns with project execution.
            </p>
          </div>

          {/* Stepper Buttons Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-8">
            {projectManagementWorkflow.map((item, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-3 rounded-xl border text-center transition-all duration-200 flex flex-col items-center justify-center ${
                    isActive
                      ? 'bg-red-600 border-red-500 text-white shadow-lg shadow-red-600/40 scale-105'
                      : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                  }`}
                >
                  <span className="text-[10px] font-mono font-bold opacity-80 mb-0.5">
                    STEP {item.step}
                  </span>
                  <span className="text-xs font-bold truncate max-w-full">
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected Workflow Stage Details */}
          <div className="bg-zinc-900 rounded-2xl p-6 sm:p-8 border border-red-600/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-600/20 text-red-400 text-xs font-bold font-mono">
                STAGE {projectManagementWorkflow[activeStep].step} OF 08
              </div>
              <h4 className="text-2xl font-black text-white">
                {projectManagementWorkflow[activeStep].title}
              </h4>
              <p className="text-sm font-semibold text-rose-400">
                {projectManagementWorkflow[activeStep].subtitle}
              </p>
              <p className="text-sm text-zinc-300 max-w-2xl leading-relaxed">
                {projectManagementWorkflow[activeStep].desc}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-center min-w-[200px]">
              <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">
                DELIVERY VALUE
              </div>
              <div className="text-sm font-black text-red-500">
                On-Time & Defect-Free
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

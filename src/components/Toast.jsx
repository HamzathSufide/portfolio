import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function Toast({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-zinc-950 border-2 border-red-600 text-white shadow-2xl animate-in slide-in-from-bottom duration-300">
      <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
      <span className="text-xs font-bold">{message}</span>
      <button
        onClick={onClose}
        className="ml-2 text-zinc-400 hover:text-white font-bold text-xs"
      >
        ✕
      </button>
    </div>
  );
}

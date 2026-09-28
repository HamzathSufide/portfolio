import React, { useState } from 'react';
import {
  Mail,
  Linkedin,
  MessageSquare,
  Github,
  Instagram,
  Youtube,
  Send,
  Copy,
  Check,
  MapPin,
  Phone,
  Sparkles
} from 'lucide-react';
import { personalInfo, socialLinks } from '../config/portfolio-data';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    onShowToast && onShowToast("Email copied to clipboard!");
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast && onShowToast("Please complete required form fields.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onShowToast && onShowToast("Message sent successfully! Hamzath will get back to you soon.");
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-600/40 text-red-400 text-xs font-bold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase">
            Let's Build Something <span className="text-red-600">Meaningful</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Open for software engineering opportunities, enterprise Java backend roles, technology presentations, and professional networking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-red-600/40 transition-all space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors flex items-center gap-1.5 text-xs font-semibold"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div>
                <span className="text-xs font-bold text-red-400 uppercase">Direct Email</span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-lg sm:text-xl font-black text-white hover:text-red-400 transition-colors block break-all"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500/40 transition-all space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
                  Quick Chat
                </span>
              </div>

              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase">WhatsApp / Direct Call</span>
                <a
                  href={personalInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-black text-white hover:text-emerald-400 transition-colors block"
                >
                  +91 {personalInfo.phone}
                </a>
              </div>
            </div>

            {/* Social Channels */}
            <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-4 shadow-xl">
              <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                Professional Networks
              </h4>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-red-600/40 hover:text-red-400 flex items-center gap-2.5 text-xs font-bold transition-all"
                >
                  <Linkedin className="w-4 h-4 text-rose-400" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-red-600/40 hover:text-red-400 flex items-center gap-2.5 text-xs font-bold transition-all"
                >
                  <Github className="w-4 h-4 text-zinc-300" />
                  <span>GitHub</span>
                </a>

                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-red-600/40 hover:text-red-400 flex items-center gap-2.5 text-xs font-bold transition-all"
                >
                  <Instagram className="w-4 h-4 text-rose-400" />
                  <span>Instagram</span>
                </a>

                <a
                  href={socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-red-600/40 hover:text-red-400 flex items-center gap-2.5 text-xs font-bold transition-all"
                >
                  <Youtube className="w-4 h-4 text-red-500" />
                  <span>YouTube</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-zinc-900 rounded-3xl p-6 sm:p-10 border border-zinc-800 shadow-2xl space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold text-red-500 uppercase">Interactive Form</span>
              <h3 className="text-2xl font-black text-white">Start a Conversation</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-300">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-red-600 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-300">Your Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-red-600 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-300">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Software Engineering Opportunity / Project Discussion"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-red-600 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-300">Message *</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-red-600 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl text-sm font-bold bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

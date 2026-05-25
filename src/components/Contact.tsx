import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Mail, Linkedin, Globe, Phone, Send, Check } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');
    
    // Simulate luxury API form trigger
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 md:px-12 bg-black overflow-hidden bg-grid-gold">
      
      {/* Dynamic ambient backdrop light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-[#E5C158]/5 filter blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-[#4A154B]/5 filter blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 select-none animate-[fadeIn_0.5s_ease-out]">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="w-8 h-[1px] bg-[#E5C158]" />
              <span className="font-serif text-[#E5C158] uppercase text-xs tracking-[0.3em] font-medium">
                The Connection
              </span>
            </div>
            
            <h2 className="font-serif text-3xl md:text-5xl text-[#F9F6EE] font-bold leading-tight uppercase">
              LET’S <span className="text-[#E5C158]">TALK</span>
            </h2>
          </div>
          <p className="max-w-md text-stone-400 text-sm font-light leading-relaxed md:text-right">
            Have a project concept, brand puzzle, or scaling goal? Let's cooperate to create something remarkable.
          </p>
        </div>

        {/* Contact Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Direct channels list */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between gap-10 bg-[#121212]/90 border border-white/5 rounded-[32px] p-8"
          >
            <div className="flex flex-col gap-6">
              <span className="font-serif text-[#E5C158] uppercase text-xs tracking-[0.25em] font-bold">
                Direct Channels
              </span>
              
              <h3 className="font-serif text-white text-xl font-bold tracking-wide">
                Reach out on preferred secure digital outlets.
              </h3>
              
              <p className="text-stone-400 text-xs font-light leading-relaxed">
                Connect directly for rapid consultations, custom pricing sheets, or brief project scoping calls. Response window is typically under 12 hours.
              </p>
            </div>

            {/* Practical Contact links */}
            <div className="flex flex-col gap-4 py-6">
              
              {/* WhatsApp direct btn */}
              <a
                href="https://wa.me/212706166410"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-[#E5C158]/35 hover:bg-[#E5C158]/5 transition-all duration-300 group"
              >
                <div className="p-3.5 rounded-xl bg-[#E5C158]/10 text-[#E5C158] group-hover:bg-[#E5C158] group-hover:text-[#121212] transition-colors duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#E5C158] block mb-0.5">WhatsApp Chat</span>
                  <span className="text-xs text-stone-300 font-medium">+212 706166410</span>
                </div>
              </a>

              {/* Email direct channel */}
              <a
                href="mailto:lamrabtkawtar0@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-[#E5C158]/35 hover:bg-[#E5C158]/5 transition-all duration-300 group"
              >
                <div className="p-3.5 rounded-xl bg-[#4A154B]/30 text-[#E5C158] group-hover:bg-[#E5C158] group-hover:text-[#121212] transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-pink-400 block mb-0.5">Direct Mailbox</span>
                  <span className="text-xs text-stone-300 font-medium">lamrabtkawtar0@gmail.com</span>
                </div>
              </a>

              {/* LinkedIn Placeholder */}
              <div
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.01] border border-white/5 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <div className="p-3.5 rounded-xl bg-white/5 text-stone-300">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-stone-500 block mb-0.5">Professional Network</span>
                  <span className="text-xs text-stone-400 font-medium">Kawtar Lamrabt (Placeholder)</span>
                </div>
              </div>

            </div>

            {/* Footer stamp */}
            <div className="flex items-center gap-2 select-none">
              <Globe className="w-4 h-4 text-[#E5C158] animate-spin-[20s_linear_infinite]" />
              <span className="text-[9px] uppercase tracking-wider text-stone-500">Based in Casablanca, MA — Serving globally</span>
            </div>

          </motion.div>

          {/* Right Column: Contact form with floating tags */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-[#121212]/90 border border-white/5 rounded-[32px] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden"
          >
            
            <div className="flex flex-col gap-6 mb-8">
              <span className="font-serif text-[#E5C158] uppercase text-xs tracking-[0.25em] font-bold">
                Project Inquiry
              </span>
              <p className="text-stone-400 text-xs font-light leading-relaxed">
                Fill the fields below to start a formal consultation. Our dynamic layout system features intelligent input validations.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative">
              
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    id="form-name"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="pt-6 pb-2.5 px-4 w-full bg-white/[0.01] border border-white/5 rounded-2xl text-stone-200 text-sm outline-none focus:border-[#E5C158] transition-all duration-300 placeholder-transparent peer"
                  />
                  <label
                    htmlFor="form-name"
                    className="absolute left-4 top-4.5 text-stone-500 text-xs tracking-wider uppercase pointer-events-none transition-all duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:top-4.5 peer-placeholder-shown:normal-case peer-focus:top-2 peer-focus:text-[9px] peer-focus:text-[#E5C158] peer-focus:uppercase peer-focus:font-bold peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[9px] peer-[:not(:placeholder-shown)]:text-[#E5C158]"
                  >
                    Your Name *
                  </label>
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    id="form-email"
                    required
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="pt-6 pb-2.5 px-4 w-full bg-white/[0.01] border border-white/5 rounded-2xl text-stone-200 text-sm outline-none focus:border-[#E5C158] transition-all duration-300 placeholder-transparent peer"
                  />
                  <label
                    htmlFor="form-email"
                    className="absolute left-4 top-4.5 text-stone-500 text-xs tracking-wider uppercase pointer-events-none transition-all duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:top-4.5 peer-placeholder-shown:normal-case peer-focus:top-2 peer-focus:text-[9px] peer-focus:text-[#E5C158] peer-focus:uppercase peer-focus:font-bold peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[9px] peer-[:not(:placeholder-shown)]:text-[#E5C158]"
                  >
                    Email Address *
                  </label>
                </div>

              </div>

              {/* Row 2: Subject */}
              <div className="relative">
                <input
                  type="text"
                  id="form-subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="pt-6 pb-2.5 px-4 w-full bg-white/[0.01] border border-white/5 rounded-2xl text-stone-200 text-sm outline-none focus:border-[#E5C158] transition-all duration-300 placeholder-transparent peer"
                />
                <label
                  htmlFor="form-subject"
                  className="absolute left-4 top-4.5 text-stone-500 text-xs tracking-wider uppercase pointer-events-none transition-all duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:top-4.5 peer-placeholder-shown:normal-case peer-focus:top-2 peer-focus:text-[9px] peer-focus:text-[#E5C158] peer-focus:uppercase peer-focus:font-bold peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[9px] peer-[:not(:placeholder-shown)]:text-[#E5C158]"
                >
                  Project Subject
                </label>
              </div>

              {/* Row 3: Message */}
              <div className="relative">
                <textarea
                  id="form-message"
                  required
                  rows={4}
                  placeholder="Message details"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="pt-7 pb-3.5 px-4 w-full bg-white/[0.01] border border-white/5 rounded-2xl text-stone-200 text-sm outline-none focus:border-[#E5C158] transition-all duration-300 placeholder-transparent peer resize-none"
                />
                <label
                  htmlFor="form-message"
                  className="absolute left-4 top-5 text-stone-500 text-xs tracking-wider uppercase pointer-events-none transition-all duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:normal-case peer-focus:top-2 peer-focus:text-[9px] peer-focus:text-[#E5C158] peer-focus:uppercase peer-focus:font-bold peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[9px] peer-[:not(:placeholder-shown)]:text-[#E5C158]"
                >
                  Compose Message *
                </label>
              </div>

              {/* Toast response message inside */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-3 text-xs"
                  >
                    <Check className="w-4.5 h-4.5 text-emerald-400 shrink-0" />
                    <span>Inquiry logged successfully! Kawtar will respond shortly. Thank you.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit CTA button */}
              <button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                className="w-full bg-gradient-to-r from-[#cbb159] to-[#E5C158] hover:from-[#d6bd6d] hover:to-[#ebcc6b] text-[#121212] py-4 rounded-2xl font-bold uppercase text-xs tracking-widest transition-all duration-300 select-none cursor-pointer flex items-center justify-center gap-2 shadow-[0_5px_15px_rgba(229,193,88,0.2)] hover:shadow-[0_10px_25px_rgba(229,193,88,0.35)] disabled:opacity-50"
              >
                {status === 'sending' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-[#121212] border-t-transparent rounded-full animate-spin" />
                    <span>Dispatching Letter...</span>
                  </>
                ) : status === 'success' ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Dispatched!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Dispatch Letter</span>
                  </>
                )}
              </button>

            </form>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

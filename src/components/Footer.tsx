import { Sparkles, Phone, Mail, Instagram, ArrowUp } from 'lucide-react';

export default function Footer() {
  
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#121212] border-t border-white/5 py-12 px-6 md:px-12 overflow-hidden select-none">
      
      {/* Decorative vertical lines */}
      <div className="absolute top-0 left-10 w-[1px] h-full bg-white/[0.02]" />
      <div className="absolute top-0 right-10 w-[1px] h-full bg-white/[0.02]" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        
        {/* Logo/Brand side */}
        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
          <button
            onClick={handleScrollTop}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-[#E5C158] transition-transform duration-500 group-hover:rotate-90" />
            <span className="font-serif text-[#F9F6EE] hover:text-[#E5C158] text-base font-bold tracking-[0.25em] transition-colors duration-300">
              KAWTAR LAMRABT
            </span>
          </button>
          
          <p className="text-stone-500 text-[10px] uppercase tracking-wider font-light">
            Graphic Designer & Digital Marketer — Casablanca
          </p>
        </div>

        {/* Middle quick indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          <a
            href="https://wa.me/212706166410"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 hover:text-[#E5C158] transition-colors duration-300 flex items-center gap-1.5 text-xs"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Chat</span>
          </a>

          <a
            href="mailto:lamrabtkawtar0@gmail.com"
            className="text-stone-400 hover:text-[#E5C158] transition-colors duration-300 flex items-center gap-1.5 text-xs"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Mail</span>
          </a>

          <a
            href="https://wa.me/212706166410"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E5C158] hover:text-white transition-colors duration-300 flex items-center gap-1.5 text-xs"
            title="Instagram"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>Social</span>
          </a>
        </div>

        {/* Right side: Copyright stamp */}
        <div className="flex flex-col items-center md:items-end gap-1.5 text-[10px] text-stone-500 tracking-wider">
          <p>
            &copy; {new Date().getFullYear()} KAWTAR LAMRABT. ALL RIGHTS RESERVED.
          </p>
          <p className="font-mono text-[9px] text-[#E5C158]/55">
            Meticulously Crafted Studio Signature
          </p>
        </div>

      </div>
    </footer>
  );
}

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Services', id: 'services' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isExpanded, setIsExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Active section tracking on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Background blur trigger depth
      setIsScrolled(window.scrollY > 20);

      // Section check
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsExpanded(false);
  };

  return (
    <>
      {/* Dynamic Island Floating Space */}
      <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.div
          id="navbar-dynamic-island"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between rounded-full border border-white/10 backdrop-blur-xl bg-gradient-to-r from-black/80 via-[#121212]/90 to-black/80 shadow-2xl transition-all duration-500 overflow-hidden ${
            isExpanded 
              ? 'w-full max-w-sm rounded-[24px]'
              : isScrolled
              ? 'px-1 md:px-2 py-1.5 w-auto max-w-2xl gap-3 md:gap-5'
              : 'px-2 md:px-4 py-2.5 w-auto max-w-3xl gap-6 md:gap-10'
          }`}
        >
          {/* Logo Brand / Icon */}
          {!isExpanded && (
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-1.5 md:gap-2 px-3 py-1 cursor-pointer select-none group"
            >
              <Sparkles className="w-4 h-4 text-[#E5C158] transition-transform duration-300 group-hover:scale-125" />
              <span className="font-serif text-[10px] md:text-sm font-bold tracking-[0.2em] text-[#F9F6EE] hover:text-[#E5C158] transition-colors duration-300">
                KL
              </span>
            </button>
          )}

          {/* Desktop Navigation Links (Hidden on small screens) */}
          {!isExpanded && (
            <div className="hidden md:flex items-center gap-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="relative px-3.5 py-1.5 text-xs tracking-wider uppercase font-medium cursor-pointer transition-colors duration-500 overflow-hidden"
                  >
                    {/* Active highlight pill */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.span
                          layoutId="active-nav-pill"
                          className="absolute inset-0 bg-[#E5C158]/10 border border-[#E5C158]/20 rounded-full"
                          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                        />
                      )}
                    </AnimatePresence>
                    
                    <span className={`relative z-10 transition-colors duration-300 ${
                      isActive ? 'text-[#E5C158]' : 'text-stone-300 hover:text-white'
                    }`}>
                      {link.label}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Small Device Compact Expand Button */}
          {!isExpanded && (
            <div className="md:hidden flex items-center pr-1.5">
              {/* On mobile, show current active link + hamburger */}
              <span className="text-[10px] uppercase tracking-widest text-[#E5C158] bg-[#E5C158]/10 border border-[#E5C158]/20 rounded-full px-2.5 py-1 mr-2">
                {activeSection}
              </span>
              <button
                onClick={() => setIsExpanded(true)}
                className="p-1.5 text-stone-300 hover:text-[#E5C158] transition-colors duration-300 cursor-pointer"
                aria-label="Open menu"
              >
                <Menu className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Expanded Dynamic Island Layout on mobile menu */}
          {isExpanded && (
            <div className="flex flex-col w-full p-4 pointer-events-auto">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                <span className="font-serif text-[11px] tracking-[0.2em] uppercase font-semibold text-[#E5C158]">
                  Kawtar Portfolio
                </span>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="p-1 text-stone-400 hover:text-white cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Stacked Vertical Menu Links */}
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className={`w-full py-2.5 px-4 rounded-xl text-xs uppercase tracking-widest font-semibold text-left transition-colors duration-300 flex items-center justify-between ${
                        isActive 
                          ? 'bg-gradient-to-r from-[#4A154B]/30 to-[#E5C158]/10 text-[#E5C158] border border-[#E5C158]/20' 
                          : 'hover:bg-white/5 text-stone-300'
                      }`}
                    >
                      {link.label}
                      {isActive && <div className="w-1.5 h-1.5 bg-[#E5C158] rounded-full" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Screen Backdrop for Mobile expanded island */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsExpanded(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

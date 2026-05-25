import { motion } from 'motion/react';
import { ArrowDown, Mail, MessageSquare, ChevronDown } from 'lucide-react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import LanyardBadge from './components/LanyardBadge';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  
  // Custom scroll target triggers
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Entrance typography staggered options
  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.8
      }
    }
  };

  const textRevealVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div id="portfolio-app-root" className="relative text-stone-200 overflow-x-hidden min-h-screen bg-[#121212]">
      
      {/* 1. Preloader Overlay */}
      <LoadingScreen />

      {/* 2. Dynamic Island Inspired Pill Navbar */}
      <Navbar />

      {/* 4. Main Viewport & Hero Section */}
      <section 
        id="home" 
        className="relative min-h-screen flex flex-col items-center justify-between pt-16 md:pt-12 pb-12 px-6 overflow-hidden bg-grid-gold"
      >
        {/* Abstract Backdrop Ambient Highlights */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[15%] w-[450px] h-[450px] bg-[#4A154B]/20 rounded-full filter blur-[150px] opacity-60" />
          <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-[#E5C158]/5 rounded-full filter blur-[140px] opacity-40" />
        </div>

        {/* Physical Hanging Badge Container - Center/Upper layout */}
        <div className="w-full max-w-lg mt-4 z-10 flex justify-center">
          <LanyardBadge />
        </div>

        {/* Hero Narrative Intro - Lower details structured */}
        <motion.div
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
          className="relative max-w-3xl text-center flex flex-col items-center gap-6 mt-6 md:mt-10 z-10 select-none pb-8"
        >
          {/* Subtle gold badge signature */}
          <motion.div 
            variants={textRevealVariants}
            className="flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-[#E5C158]/25 rounded-full text-[10px] tracking-[0.25em] text-[#E5C158] uppercase font-bold"
          >
            <span>✦</span> Casablanca MA <span>✦</span>
          </motion.div>

          <motion.h1 
            variants={textRevealVariants}
            className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F9F6EE] font-extrabold leading-tight tracking-[0.02em]"
          >
            KAWTAR <span className="text-[#E5C158] text-glow-gold">LAMRABT</span>
          </motion.h1>

          <motion.p
            variants={textRevealVariants}
            className="text-stone-300 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-light"
          >
            Hello, I’m Kawtar Lamrabt, a passionate graphic designer and digital marketer specialized in creating impactful <strong className="text-[#E5C158] font-medium">visual identities</strong> and <strong className="text-[#E5C158] font-medium">creative digital content</strong>.
          </motion.p>

          {/* Hero CTAs */}
          <motion.div 
            variants={textRevealVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mt-4"
          >
            <button
              onClick={() => scrollTo('contact')}
              className="w-full sm:w-auto bg-gradient-to-r from-[#cbad4f] to-[#E5C158] hover:from-[#d5b95b] hover:to-[#eccb67] text-[#121212] font-bold uppercase text-[11px] tracking-widest py-3.5 px-8 rounded-full shadow-[0_5px_15px_rgba(229,193,88,0.25)] hover:shadow-[0_8px_25px_rgba(229,193,88,0.4)] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Let’s Collaborate</span>
            </button>
            
            <button
              onClick={() => scrollTo('projects')}
              className="w-full sm:w-auto border border-white/10 hover:border-[#E5C158]/50 text-stone-300 hover:text-white font-semibold uppercase text-[11px] tracking-widest py-3.5 px-8 rounded-full bg-white/[0.01] hover:bg-white/[0.04] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Explore My Work</span>
            </button>
          </motion.div>

          {/* Scroll Down mouse design indicator */}
          <motion.div 
            variants={textRevealVariants}
            onClick={() => scrollTo('about')}
            className="mt-8 flex flex-col items-center gap-2 cursor-pointer opacity-50 hover:opacity-100 transition-opacity duration-300 group"
          >
            <span className="text-[9px] uppercase tracking-[0.25em] text-stone-400 font-light group-hover:text-[#E5C158] transition-colors duration-300">
              Scroll Down
            </span>
            <div className="w-5 h-8 rounded-full border border-stone-500 flex items-start justify-center p-1 relative">
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                className="w-1 h-2.5 bg-[#E5C158] rounded-full" 
              />
            </div>
          </motion.div>

        </motion.div>

      </section>

      {/* 5. Elegant About Section */}
      <About />

      {/* 6. Dynamic Skills Showcase */}
      <Skills />

      {/* 7. Premium Gilt Projects Gallery */}
      <Projects />

      {/* 8. Glowing Custom Services Panel */}
      <Services />

      {/* 10. Floating Label Contact Hub & Form */}
      <Contact />

      {/* 11. Minimal Luxury Footer Signatures */}
      <Footer />

      {/* 12. Floating Scroll-Back Widget */}
      <ScrollToTop />

    </div>
  );
}

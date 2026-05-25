import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="loading-screen"
          className="fixed inset-0 bg-[#121212] z-[9999] flex flex-col items-center justify-center font-sans select-none overflow-hidden"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Subtle gold circles in background */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-[#E5C158] opacity-[0.02] filter blur-[100px] pointer-events-none" />
          
          <div className="text-center flex flex-col items-center gap-1">
            <motion.div
              initial={{ letterSpacing: '0.15em', y: 30, opacity: 0 }}
              animate={{ letterSpacing: '0.3em', y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[#E5C158] text-2xl md:text-4xl font-semibold uppercase tracking-[0.3em]"
            >
              KAWTAR LAMRABT
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-[1px] w-24 bg-[#E5C158]/40 my-4"
            />

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 0.7 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-[#F9F6EE] uppercase text-xs tracking-[0.2em] font-light"
            >
              Graphic Designer & Digital Marketer
            </motion.p>
          </div>

          {/* Loading Progress Bar element */}
          <div className="absolute bottom-16 left-0 right-0 max-w-[200px] mx-auto h-[2px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
              className="h-full bg-gradient-to-r from-[#E5C158] to-[#4A154B]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

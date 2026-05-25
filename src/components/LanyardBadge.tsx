import { useState, useRef, useEffect, MouseEvent } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { MapPin, Globe, Sparkles } from 'lucide-react';

export default function LanyardBadge() {
  const badgeRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(500);

  // Motion physics variables using framer-motion springs
  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);

  // Transform coordinates into a springy effect for responsive feedback
  const springConfig = { damping: 25, stiffness: 180, mass: 0.8 };
  const badgeSpringX = useSpring(dragX, springConfig);
  const badgeSpringY = useSpring(dragY, springConfig);

  // States to keep track of coordinates in normal react state purely for drawing the rope line
  const [ropeCoords, setRopeCoords] = useState({ x: 0, y: 0 });
  const [tiltRotation, setTiltRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Measure container width responsively
  useEffect(() => {
    if (!containerRef.current) return;
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });
    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  // Update SVG rope coordinates smoothly
  useEffect(() => {
    const rx = badgeSpringX.onChange((v) => setRopeCoords((prev) => ({ ...prev, x: v })));
    const ry = badgeSpringY.onChange((v) => setRopeCoords((prev) => ({ ...prev, y: v })));
    return () => {
      rx();
      ry();
    };
  }, [badgeSpringX, badgeSpringY]);

  // Handle 3D tilt rotating on hover
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!badgeRef.current) return;
    const rect = badgeRef.current.getBoundingClientRect();
    
    // Relative coordinates inside the badge
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Normalize rotation angle
    const rotX = -(y / (rect.height / 2)) * 12; // Max 12 deg
    const rotY = (x / (rect.width / 2)) * 12;  // Max 12 deg

    setTiltRotation({ x: rotX, y: rotY });
  };

  const handleMouseLeave = () => {
    setTiltRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const centerX = containerWidth / 2;

  return (
    <div ref={containerRef} className="relative flex flex-col items-center justify-center w-full min-h-[460px] pb-4 select-none">
      
      {/* 1. Lanyard Rope SVG drawing from top center down to where the badge card floats */}
      <svg
        className="absolute top-0 left-0 w-full h-[380px] pointer-events-none z-10"
        style={{ overflow: 'visible' }}
      >
        <path
          d={`M ${centerX},0 C ${centerX},${(185 + ropeCoords.y) * 0.4} ${centerX + ropeCoords.x * 0.4},${(185 + ropeCoords.y) * 0.7} ${centerX + ropeCoords.x},${185 + ropeCoords.y}`}
          fill="none"
          stroke="url(#rope-gradient)"
          strokeWidth="3.5"
          strokeLinecap="round"
          className="transition-all duration-75"
        />
        <circle cx={centerX + ropeCoords.x} cy={185 + ropeCoords.y} r="5" fill="#E5C158" className="glow-gold" />
        
        <defs>
          <linearGradient id="rope-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4A154B" />
            <stop offset="50%" stopColor="#121212" />
            <stop offset="100%" stopColor="#E5C158" />
          </linearGradient>
        </defs>
      </svg>

      {/* 2. Badge physical metal buckle clip */}
      <div className="absolute top-[175px] left-0 w-full flex justify-center pointer-events-none z-20">
        <motion.div
          style={{
            x: badgeSpringX,
            y: badgeSpringY,
          }}
          className="flex flex-col items-center"
        >
          <div className="w-6 h-5 bg-gradient-to-b from-stone-600 to-stone-400 rounded-t-sm border border-stone-500 shadow-lg flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-stone-800" />
          </div>
          <div className="w-1.5 h-6 bg-gradient-to-b from-[#E5C158] to-[#c1a045] shadow-md rounded-b" />
        </motion.div>
      </div>

      {/* 3. Drag container and actual ID Badge Card with perspective */}
      <div className="relative pt-[200px]" style={{ perspective: '1000px' }}>
        <motion.div
          ref={badgeRef}
          drag
          dragConstraints={{ left: -160, right: 160, top: -110, bottom: 120 }}
          dragElastic={0.4}
          dragTransition={{ bounceStiffness: 420, bounceDamping: 24 }}
          style={{
            x: dragX,
            y: dragY,
            rotateX: tiltRotation.x,
            rotateY: tiltRotation.y,
            transformStyle: 'preserve-3d',
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={() => setIsHovered(true)}
          className="relative w-[280px] h-[395px] rounded-[24px] bg-[#121212] border-[1.5px] border-[#E5C158] shadow-[0_30px_70px_rgba(0,0,0,0.8)] overflow-hidden cursor-grab active:cursor-grabbing preserve-3d"
        >
          {/* Internal premium luxury textures */}
          <div className="absolute inset-0 bg-grid-gold opacity-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-[180px] h-[180px] rounded-full bg-radial from-[#4A154B]/30 to-transparent pointer-events-none filter blur-[40px]" />
          <div className="absolute -bottom-10 -left-10 w-[180px] h-[180px] rounded-full bg-radial from-[#E5C158]/10 to-transparent pointer-events-none filter blur-[30px]" />

          {/* Rainbow gloss reflect overlay on hover */}
          <div 
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none transition-transform duration-500" 
            style={{ 
              transform: isHovered 
                ? `translateX(${tiltRotation.y * 10}px) translateY(${tiltRotation.x * 10}px) rotate(45deg)` 
                : 'translateX(-100%) rotate(45deg)' 
            }}
          />

          {/* Golden metallic tag header */}
          <div className="relative py-3.5 px-4 bg-gradient-to-r from-[#1a1a1a] to-[#121212] border-b border-[#E5C158]/20 flex items-center justify-between">
            <span className="font-serif text-[9px] tracking-[0.25em] text-[#E5C158] font-bold">
              K_L STUDIO CREATIVE
            </span>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158] animate-ping" />
              <span className="font-mono text-[8px] text-[#F9F6EE]/60 tracking-wider">
                MA-2026
              </span>
            </div>
          </div>

          {/* Badge body */}
          <div className="p-6 flex flex-col items-center text-center">
            
            {/* Portrait inside premium gold outline */}
            <div className="relative w-28 h-28 rounded-full border-[2.5px] border-[#E5C158] shadow-[0_0_20px_rgba(229,193,88,0.2)] p-1.5 mb-4 group overflow-hidden bg-[#161616]">
              {/* Spinning loading frame inside ring */}
              <div className="absolute inset-1 rounded-full border border-dashed border-[#E5C158]/40 animate-[spin_20s_linear_infinite]" />
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300&h=300"
                alt="Kawtar Lamrabt Avatar"
                referrerPolicy="no-referrer"
                className="w-full h-full rounded-full object-cover grayscale brightness-110 contrast-105"
              />
            </div>

            {/* General Info */}
            <h3 className="font-serif text-[#E5C158] text-xl font-extrabold tracking-wide mb-1 select-none">
              KAWTAR LAMRABT
            </h3>
            
            <p className="text-[#F9F6EE] uppercase text-[10px] tracking-[0.2em] font-semibold mb-4 select-none opacity-90 flex items-center gap-1 bg-[#4A154B]/30 border border-[#E5C158]/10 px-3 py-1 rounded-full">
              <Sparkles className="w-3 h-3 text-[#E5C158]" />
              Designer & Marketer
            </p>

            {/* Geographical details */}
            <div className="w-full flex items-center justify-around text-[10px] text-stone-300/80 tracking-wider">
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#E5C158]" />
                Casablanca, MA
              </div>
              <div className="flex items-center gap-1">
                <Globe className="w-3 h-3 text-[#E5C158]" />
                Remote Enabled
              </div>
            </div>

            {/* Barcode details representing designer credentials */}
            <div className="mt-6 w-full flex flex-col items-center">
              <div className="w-44 h-7 flex items-end justify-between opacity-50 overflow-hidden">
                <div className="w-[2px] h-6 bg-[#E5C158]" />
                <div className="w-[4px] h-7 bg-[#E5C158]" />
                <div className="w-[1px] h-5 bg-[#E5C158]" />
                <div className="w-[3px] h-6 bg-[#E5C158]" />
                <div className="w-[1px] h-7 bg-[#E5C158]" />
                <div className="w-[5px] h-7 bg-[#E5C158]" />
                <div className="w-[2px] h-4 bg-[#E5C158]" />
                <div className="w-[3px] h-6 bg-[#E5C158]" />
                <div className="w-[1px] h-7 bg-[#E5C158]" />
                <div className="w-[4px] h-5 bg-[#E5C158]" />
                <div className="w-[2px] h-7 bg-[#E5C158]" />
                <div className="w-[1px] h-6 bg-[#E5C158]" />
                <div className="w-[3px] h-7 bg-[#E5C158]" />
                <div className="w-[1px] h-5 bg-[#E5C158]" />
                <div className="w-[4px] h-6 bg-[#E5C158]" />
                <div className="w-[2px] h-7 bg-[#E5C158]" />
              </div>
              <span className="font-mono text-[7px] text-stone-300/40 tracking-[0.5em] mt-1 select-none">
                0706166410 2026
              </span>
            </div>

          </div>
        </motion.div>
      </div>

      {/* Guide note to interact */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2, duration: 1 }}
        className="text-[9px] text-stone-300 tracking-[0.2em] uppercase mt-2 select-none flex items-center gap-1.5"
      >
        <span>✦</span> Hold & drag the badge, feel the physics <span>✦</span>
      </motion.p>
    </div>
  );
}

import { motion } from 'motion/react';
import { servicesData } from '../data';
import { Sparkles, Instagram, Target, Layers, Check } from 'lucide-react';

export default function Services() {
  
  // Dynamic icon helper matching lucide-react instances
  const renderIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-[#E5C158] transition-all duration-500 group-hover:scale-110", strokeWidth: 1.5 };
    
    switch (iconName) {
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Instagram': return <Instagram {...props} />;
      case 'Target': return <Target {...props} />;
      case 'Layers': return <Layers {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <section id="services" className="relative py-24 md:py-32 px-6 md:px-12 bg-black overflow-hidden select-none">
      
      {/* Decorative gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#4A154B]/5 filter blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-72 h-72 rounded-full bg-[#E5C158]/5 filter blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="w-8 h-[1px] bg-[#E5C158]" />
              <span className="font-serif text-[#E5C158] uppercase text-xs tracking-[0.3em] font-medium">
                The Solutions
              </span>
            </div>
            
            <h2 className="font-serif text-3xl md:text-5xl text-[#F9F6EE] font-bold leading-tight uppercase">
              EXPERIENCE & <span className="text-[#E5C158]">SERVICES</span>
            </h2>
          </div>
          <p className="max-w-md text-stone-400 text-sm font-light leading-relaxed md:text-right">
            Tailoring comprehensive digital ecosystem designs to increase audience affinity, conversion rates, and luxury market value.
          </p>
        </div>

        {/* Services Cards Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col justify-between bg-[#121212]/90 border border-white/5 rounded-[28px] p-6 sm:p-8 hover:border-[#E5C158]/25 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] overflow-hidden"
            >
              {/* Subtle background card hover glowing spot */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-tr from-[#4A154B]/10 to-[#E5C158]/5 rounded-bl-[120px] pointer-events-none opacity-50 group-hover:scale-125 transition-transform duration-700" />

              <div>
                {/* Icon box */}
                <div className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center shadow-inner group-hover:border-[#E5C158]/30 transition-colors duration-500 mb-6">
                  {renderIcon(service.iconName)}
                </div>

                <h3 className="font-serif text-[#F9F6EE] text-xl font-bold tracking-wide mb-3 group-hover:text-[#E5C158] transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Action feature elements */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-6 border-t border-white/5">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-xs text-stone-300">
                    <div className="p-0.5 rounded bg-[#E5C158]/10 border border-[#E5C158]/20 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-[#E5C158]" />
                    </div>
                    <span className="font-light">{feature}</span>
                  </li>
                ))}
              </ul>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

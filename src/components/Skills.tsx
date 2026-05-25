import { motion } from 'motion/react';
import { skillsData } from '../data';
import { Sparkles, Palette, Award, Terminal } from 'lucide-react';

export default function Skills() {
  // Define categories to map over
  const categories = [
    {
      id: 'Creative Design',
      label: 'Creative & Visual Arts',
      description: 'Translating elegant narratives into stunning visual architectures',
      icon: <Palette className="w-5 h-5 text-[#E5C158]" />
    },
    {
      id: 'Digital Marketing',
      label: 'Strategic Marketing',
      description: 'Engineering visibility, social reach, and narrative optimization',
      icon: <Sparkles className="w-5 h-5 text-[#E5C158]" />
    },
    {
      id: 'Tools & Platforms',
      label: 'Tech Stack & Production',
      description: 'Deploying high-speed designs with Adobe & cloud authoring tools',
      icon: <Terminal className="w-5 h-5 text-[#E5C158]" />
    }
  ];

  return (
    <section id="skills" className="relative py-24 md:py-32 px-6 md:px-12 bg-black overflow-hidden bg-grid-gold">
      
      {/* Background decorations */}
      <div className="absolute top-0 right-10 w-96 h-96 rounded-full bg-[#E5C158]/5 filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-20 w-80 h-80 rounded-full bg-[#4A154B]/5 filter blur-[90px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="w-8 h-[1px] bg-[#E5C158]" />
              <span className="font-serif text-[#E5C158] uppercase text-xs tracking-[0.3em] font-medium">
                The Expertise
              </span>
            </div>
            
            <h2 className="font-serif text-3xl md:text-5xl text-[#F9F6EE] font-bold leading-tight uppercase">
              PROFESSIONAL <span className="text-[#E5C158]">SKILLS</span>
            </h2>
          </div>
          <p className="max-w-md text-stone-400 text-sm font-light leading-relaxed md:text-right">
            Blending strict design principles, Adobe Photoshop/Illustrator dexterity, Canva agility, and analytical marketing strategy.
          </p>
        </div>

        {/* Categories Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
          
          {categories.map((cat, idx) => {
            const catSkills = skillsData.filter(s => s.category === cat.id);
            
            return (
              <motion.div
                key={cat.id}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col bg-[#121212]/90 border border-white/5 rounded-3xl p-6 md:p-8 hover:border-[#E5C158]/20 hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)] transition-all duration-500 relative overflow-hidden group"
              >
                {/* Visual subtle glow node on hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#E5C158]/5 to-[#4A154B]/5 rounded-bl-[100px] pointer-events-none transition-all duration-500 group-hover:scale-125" />

                <div className="flex items-center gap-3.5 mb-2">
                  <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 shadow-inner">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-white text-base font-bold tracking-wide">
                      {cat.label}
                    </h3>
                    <p className="text-[10px] text-stone-500 font-light max-w-[200px]">
                      {cat.id}
                    </p>
                  </div>
                </div>

                <p className="text-stone-400 text-xs font-light leading-relaxed mb-8">
                  {cat.description}
                </p>

                {/* Progress stack */}
                <div className="flex flex-col gap-6 mt-auto">
                  {catSkills.map((skill) => (
                    <div key={skill.name} className="flex flex-col gap-2">
                      <div className="flex items-center justify-between text-xs tracking-wider">
                        <span className="font-medium text-stone-200 hover:text-[#E5C158] transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span className="font-mono text-[#E5C158] font-semibold">
                          {skill.percentage}%
                        </span>
                      </div>

                      {/* Bar Track */}
                      <div className="h-[4px] w-full bg-white/5 rounded-full overflow-hidden relative border border-white/[0.02]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                          className="h-full rounded-full bg-gradient-to-r from-[#4A154B] via-[#E5C158] to-[#E5C158]"
                        />
                      </div>
                    </div>
                  ))}
                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

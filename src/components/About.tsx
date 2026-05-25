import { motion } from 'motion/react';
import { BookOpen, Award, CheckCircle } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="about" className="relative py-24 md:py-32 px-6 md:px-12 bg-[#121212] overflow-hidden">
      
      {/* Background Decorative Gold Grid Element */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent pointer-events-none opacity-40" />
      <div className="absolute left-10 top-1/3 w-72 h-72 rounded-full bg-[#4A154B]/10 filter blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Section Header Grid Left Column */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="w-10 h-[1px] bg-[#E5C158]" />
              <span className="font-serif text-[#E5C158] uppercase text-xs tracking-[0.3em] font-medium">
                The Silhouette
              </span>
            </div>
            
            <h2 className="font-serif text-3xl md:text-5xl text-[#F9F6EE] font-bold leading-tight uppercase">
              ABOUT <br />
              <span className="text-[#E5C158]">ME</span>
            </h2>

            <div className="h-[2px] w-20 bg-gradient-to-r from-[#E5C158] to-[#4A154B] rounded-full" />
            
            <p className="text-stone-400 text-sm md:text-base leading-relaxed font-light">
              Designing impactful identities and engineering digital growth from Casablanca. I fuse meticulous conceptual thinking with high-end creative Execution.
            </p>

            {/* Custom stylized credentials badges */}
            <div className="mt-4 flex flex-col gap-3.5">
              <div className="flex items-center gap-3 bg-white/[0.02] border border-white/5 rounded-2xl p-4 hover:border-[#E5C158]/30 transition-all duration-300">
                <div className="p-3.5 rounded-xl bg-[#4A154B]/20 border border-[#4A154B]/40 text-[#E5C158]">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#E5C158] font-bold">Public Law Background</h4>
                  <p className="text-[11px] text-stone-400 font-light mt-0.5">Dual analytical & legislative-level problem solving edge</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/[0.02] border border-white/5 rounded-2xl p-4 hover:border-[#E5C158]/30 transition-all duration-300">
                <div className="p-3.5 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/20 text-[#E5C158]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#E5C158] font-bold">Certified Specialist</h4>
                  <p className="text-[11px] text-stone-400 font-light mt-0.5">Ngz Tech & Centre Nouaceur digital certification</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section Main Narrative Content Right Column */}
          <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col gap-8 lg:pl-4">
            
            {/* Primary Biography block */}
            <div className="space-y-6">
              <p className="font-sans text-[#F9F6EE] text-base md:text-lg leading-relaxed font-light first-letter:text-4xl first-letter:font-serif first-letter:text-[#E5C158] first-letter:mr-2 first-letter:float-left">
                I am <strong className="text-white font-semibold">Kawtar Lamrabt</strong>, passionate about digital marketing and content creation. I combine strategic creativity with strong communication and customer service skills. I specialize in branding, social media design, digital communication, and creative content production. My goal is to build impactful visual identities and engaging digital experiences.
              </p>

              <blockquote className="border-l-2 border-[#E5C158] pl-5 py-2 my-6">
                <p className="text-[#E5C158] italic font-light text-sm md:text-base tracking-wide leading-relaxed">
                  "Every design must command a presence; every marketing touchpoint must establish a relationship. Craft is the union of design precision and client communication."
                </p>
              </blockquote>

              <p className="text-stone-300 text-sm md:text-base leading-relaxed font-light">
                I am currently studying first-year public law (2025) while also specializing in digital marketing and creative communication at Centre Nouaceur and Ngz Tech (2025–2026). This combination strengthens both my analytical understanding and creative action. My unique academic trajectory enables me to analyze markets, frame core strategies with absolute clarity, and execute visual elements that captivate.
              </p>
            </div>

            {/* Quick stats/features bullet points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/5">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#E5C158] mt-0.5 shrink-0" />
                <div>
                  <h5 className="text-xs uppercase tracking-wider text-white font-bold">Branding Mastery</h5>
                  <p className="text-[11px] text-stone-400 font-light mt-0.5">Cohesive design rules for digital/print assets.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#E5C158] mt-0.5 shrink-0" />
                <div>
                  <h5 className="text-xs uppercase tracking-wider text-white font-bold">Customer Loyalty</h5>
                  <p className="text-[11px] text-stone-400 font-light mt-0.5">Strong empathy, client orientation, support.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#E5C158] mt-0.5 shrink-0" />
                <div>
                  <h5 className="text-xs uppercase tracking-wider text-white font-bold">Social Media Design</h5>
                  <p className="text-[11px] text-stone-400 font-light mt-0.5">Engaging Instagram layout design.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#E5C158] mt-0.5 shrink-0" />
                <div>
                  <h5 className="text-xs uppercase tracking-wider text-white font-bold">Growth Strategy</h5>
                  <p className="text-[11px] text-stone-400 font-light mt-0.5">Direct focus on data and conversion metrics.</p>
                </div>
              </div>
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

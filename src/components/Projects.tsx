import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { projectsData } from '../data';
import { Project } from '../types';
import { ExternalLink, X, Compass, Palette, Sparkles, FolderKanban } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<'All' | 'Branding' | 'Marketing' | 'Social Media'>('All');

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  // Helper icons for categories
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Branding': return <Palette className="w-3 h-3" />;
      case 'Marketing': return <Compass className="w-3 h-3" />;
      case 'Social Media': return <Sparkles className="w-3 h-3" />;
      default: return <FolderKanban className="w-3 h-3" />;
    }
  };

  return (
    <section id="projects" className="relative py-24 md:py-32 px-6 md:px-12 bg-[#121212] overflow-hidden">
      
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-[#4A154B]/10 filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-[#E5C158]/5 filter blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#E5C158]" />
              <span className="font-serif text-[#E5C158] uppercase text-xs tracking-[0.3em] font-medium">
                The Masterpieces
              </span>
            </div>
            
            <h2 className="font-serif text-3xl md:text-5xl text-[#F9F6EE] font-bold leading-tight uppercase">
              FEATURED <span className="text-[#E5C158]">PROJECTS</span>
            </h2>
          </div>

          {/* Filter Pill Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {(['All', 'Branding', 'Marketing', 'Social Media'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold cursor-pointer transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-[#E5C158] text-[#121212] font-semibold border border-[#E5C158] shadow-[0_5px_15px_rgba(229,193,88,0.25)]'
                    : 'bg-white/5 text-stone-400 border border-white/5 hover:text-white hover:bg-white/10'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Project Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col justify-start rounded-3xl bg-[#1a1a1a]/40 border border-white/5 overflow-hidden hover:border-[#E5C158]/35 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] select-none"
              >
                {/* Embedded Badge Header */}
                <div className="relative h-[220px] overflow-hidden bg-black flex items-center justify-center">
                  
                  {/* Subtle decorative cover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-90" />
                  
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[1200ms] ease-[0.16,1,0.3,1]"
                  />

                  {/* Category Pill Overlays */}
                  <span className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 bg-black/75 border border-white/10 rounded-full text-[10px] uppercase font-bold tracking-widest text-[#E5C158]">
                    {getCategoryIcon(project.category)}
                    {project.category}
                  </span>
                </div>

                {/* Body details */}
                <div className="p-6 md:p-7 flex flex-col flex-grow">
                  <span className="text-[10px] tracking-[0.2em] font-semibold text-stone-500 uppercase mb-1">
                    {project.client}
                  </span>
                  
                  <h3 className="font-serif text-[#F9F6EE] group-hover:text-[#E5C158] text-lg font-bold tracking-wide transition-colors duration-300 mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-stone-400 text-xs font-light leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Footer block - tags & interactions */}
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5">
                    <span 
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold text-[#E5C158] uppercase cursor-pointer hover:text-white transition-colors duration-300 flex items-center gap-1 group/btn"
                    >
                      View Details
                      <span className="transform group-hover/btn:translate-x-1 transition-transform duration-300 text-base">→</span>
                    </span>
                    
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 opacity-60 hover:opacity-100 text-[#F9F6EE] hover:text-[#E5C158] transition-all duration-300"
                      title="Direct Canva Link"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Modern Zooming Modal Popup System */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop fog */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal Body Card */}
            <motion.div
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl bg-[#161616] border border-[#E5C158]/30 rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.9)] z-10 flex flex-col justify-start"
            >
              
              {/* Cover Art Box */}
              <div className="relative h-[240px] sm:h-[280px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent z-10" />
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover scale-100"
                />

                {/* Close Button element */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-5 right-5 z-20 p-2 rounded-full bg-black/60 border border-white/10 hover:border-[#E5C158] text-white hover:text-[#E5C158] backdrop-blur-md cursor-pointer transition-all duration-300"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Category tag */}
                <span className="absolute bottom-5 left-6 z-20 flex items-center gap-1.5 px-3 py-1.5 bg-[#4A154B] border border-[#E5C158]/20 rounded-full text-xs uppercase font-extrabold tracking-widest text-[#E5C158]">
                  {getCategoryIcon(selectedProject.category)}
                  {selectedProject.category}
                </span>
              </div>

              {/* Text content details */}
              <div className="p-6 sm:p-8 flex flex-col">
                <span className="text-[10px] tracking-[0.2em] font-extrabold text-[#E5C158] uppercase mb-1">
                  {selectedProject.client}
                </span>
                
                <h3 className="font-serif text-white text-2xl sm:text-3xl font-bold tracking-wide mb-4">
                  {selectedProject.title}
                </h3>

                <p className="text-stone-300 text-sm font-light leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                {/* Tags cluster */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/[0.03] border border-white/5 rounded-lg text-xs font-medium text-stone-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Direct Canva Link Action Button */}
                <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-white/5">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-[#c5a140] to-[#E5C158] text-[#121212] py-3.5 px-6 rounded-full font-semibold uppercase text-xs tracking-widest text-center shadow-[0_5px_20px_rgba(229,193,88,0.25)] hover:shadow-[0_8px_25px_rgba(229,193,88,0.4)] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 group"
                  >
                    <span>Open Live Workspace (Canva)</span>
                    <ExternalLink className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </a>
                  
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="sm:px-6 py-3.5 border border-white/10 hover:border-white/20 text-[#stone-300] hover:text-white uppercase text-xs tracking-widest rounded-full transition-colors duration-300 cursor-pointer text-center"
                  >
                    Close
                  </button>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Github, ChevronDown } from "lucide-react";
import { projects } from "../lib/data";
import ProjectModal from "../components/ProjectModal"; 
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (index: number) => ({ 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { 
        duration: 0.5, 
        ease: "easeOut",
        delay: index * 0.1 
      } 
    }),
    exit: { 
      opacity: 0, 
      scale: 0.95, 
      transition: { duration: 0.3, ease: "easeIn" } 
    }
  };

  // LOGIC: Load 4 items initially to satisfy Mobile view. 
  // We will hide the 4th one on Desktop using CSS below.
  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section
      id="projects"
      className="w-full py-20 px-4 md:px-6 transition-colors duration-300 ease-in-out"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div 
          className="flex flex-col items-center text-center mb-12 space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Projects
          </h2>
          <p className="max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
            Here are a few projects I&apos;ve worked on recently.
          </p>
        </motion.div>

        {/* Grid Container */}
        <motion.div 
          // Mobile: grid-cols-2 (2 columns)
          // Desktop: lg:grid-cols-3 (3 columns)
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8"
          layout 
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <motion.div
                // FIX: Unique key using title + index to prevent crash on duplicate titles
                key={`${project.title}-${index}`} 
                layout 
                custom={index} 
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }} 
                exit="exit"
                // LOGIC: If we are NOT showing all, hide the 4th item (index 3) on Desktop (lg:hidden)
                // This keeps Mobile at 4 items, and Desktop at 3 items.
                className={`group relative flex flex-col bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-zinc-900/50 transition-all duration-300 hover:-translate-y-1 
                  ${!showAll && index === 3 ? "lg:hidden" : "flex"}
                `}
              >
                {/* Image Area - Reduced height on mobile (h-32) */}
                <div 
                  className="relative h-32 sm:h-48 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 cursor-pointer"
                  onClick={() => handleOpenModal(project)}
                  // 1. Prevent Right-Click / Long-Press menu on the container
                  onContextMenu={(e) => e.preventDefault()}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
                    // 2. pointer-events-none: Ensures the image doesn't "catch" the touch, letting it hit the parent div instead
                    // 3. select-none: Prevents blue highlighting
                    className="transition-transform duration-500 group-hover:scale-105 pointer-events-none select-none"
                    // 4. Prevent dragging on desktop
                    draggable={false}
                  />
                </div>

                {/* Content Area - Compact padding on mobile */}
                <div className="flex flex-col flex-1 p-3 md:p-6">
                  <div className="flex justify-between items-start mb-2 md:mb-4">
                    <h3 className="text-sm md:text-xl font-bold tracking-tight line-clamp-1">
                      {project.title}
                    </h3>
                    <div className="flex gap-2 md:gap-3 text-zinc-500 dark:text-zinc-400">
                      {project.github && (
                      <a
                        href={project.github}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-black dark:hover:text-white transition-colors"
                        title="View Code"
                      >
                        <Github className="w-4 h-4 md:w-5 md:h-5" />
                      </a>
                      )}
                      
                      <button
                        onClick={() => handleOpenModal(project)}
                        className="hover:text-black dark:hover:text-white transition-colors focus:outline-none"
                        title="View Details"
                      >
                        <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="relative mb-4 flex-1">
                    <p className="text-zinc-500 dark:text-zinc-400 text-xs md:text-sm line-clamp-3">
                      {project.description}
                    </p>
                    <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-white/90 via-white/50 to-transparent dark:from-zinc-900/90 dark:via-zinc-900/50 dark:to-transparent pointer-events-none" />
                  </div>

                  <div className="flex flex-wrap gap-1 md:gap-2 mt-auto">
                    {project.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 md:px-3 md:py-1 text-[10px] md:text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all duration-300 text-sm font-medium"
          >
            {showAll ? "Show Less" : "View More Projects"}
            <motion.span
              animate={{ rotate: showAll ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
               <ChevronDown size={16} />
            </motion.span>
          </button>
        </motion.div>
      </div>

      <ProjectModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        project={selectedProject} 
      />
    </section>
  );
}
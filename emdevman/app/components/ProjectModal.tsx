"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, Github, ExternalLink } from "lucide-react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  project: any;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* FIXES FOR PIXEL 7 / ANDROID:
        1. transform-gpu: Forces hardware acceleration to prevent rendering glitches.
        2. h-auto max-h-[90vh]: Removed fixed height on mobile so flexbox doesn't squash the image.
        3. flex-col: Standard stacking for mobile.
      */}
      <div className="relative w-full max-w-5xl bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-auto max-h-[90vh] md:h-auto animate-in fade-in zoom-in-95 duration-200 transform-gpu">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/50 dark:bg-black/50 hover:bg-white dark:hover:bg-black text-zinc-800 dark:text-zinc-200 transition-colors md:hidden"
        >
          <X size={20} />
        </button>

        {/* IMAGE CONTAINER:
          - h-64 shrink-0: Enforces height on mobile.
          - relative z-0: Ensures it sits in the correct stacking context.
        */}
        <div 
          className="relative w-full h-64 md:h-auto md:w-1/2 shrink-0 bg-zinc-200 dark:bg-zinc-800 z-0"
          // 1. Block the Right-Click / Long-Press menu on the container
          onContextMenu={(e) => e.preventDefault()}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            // 2. pointer-events-none: The browser ignores touches on the image
            // 3. select-none: Prevents highlighting
            className="object-contain pointer-events-none select-none"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            // 4. Prevent dragging on desktop
            draggable={false}
          />
        </div>

        {/* CONTENT CONTAINER:
          - overflow-y-auto: Allows text to scroll if it gets too long, while image stays put at top.
        */}
        <div className="flex flex-col w-full md:w-1/2 flex-1 min-h-0 bg-white dark:bg-zinc-900 z-10 relative">
          
          <div className="shrink-0 p-6 md:p-8 lg:p-10 pb-0 md:pb-0 lg:pb-0">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                  {project.title}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <button 
                onClick={onClose}
                className="hidden md:flex p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                <X size={24} className="text-zinc-500" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto min-h-0 px-6 md:px-8 lg:px-10 py-4">
            <div className="prose dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400">
              <p className="text-lg leading-relaxed">{project.description}</p>
            </div>
          </div>

          <div className="shrink-0 p-6 md:p-8 lg:p-10 pt-6 border-t border-zinc-100 dark:border-zinc-800 flex gap-4 bg-white dark:bg-zinc-900 z-10">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 font-semibold hover:opacity-90 transition-opacity"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
            
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors font-semibold"
              >
                <Github size={18} />
                SRC Code
              </a>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
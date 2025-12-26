"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import { projects } from "../lib/data";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  
  // CHANGE 1: Slice 4 items initially (instead of 3)
  // This ensures Mobile gets 4 items (2x2 grid)
  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section
      id="projects"
      className="w-full py-20 px-4 md:px-6 transition-colors duration-300 ease-in-out"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center mb-12 space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Projects
          </h2>
          <p className="max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
            Here are a few projects I&apos;ve worked on recently.
          </p>
        </div>

        {/* CHANGE 2: Added a special CSS selector condition:
            `!showAll && "[&>div:nth-child(4)]:lg:hidden"`
            
            Logic:
            - We render 4 cards.
            - On Mobile/Tablet (grid-cols-2), all 4 show.
            - On Desktop (grid-cols-3), the 4th card would look weird hanging alone.
            - This class forces the 4th card to be HIDDEN on Large screens (lg)
              unless 'Show All' is clicked.
        */}
        <div className={`
            grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8
            ${!showAll ? "[&>div:nth-child(4)]:lg:hidden" : ""}
        `}>
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="group relative flex flex-col bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-zinc-900/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-32 md:h-48 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
                  className="transition-all duration-300"
                />
              </div>

              <div className="flex flex-col flex-1 p-4 md:p-6">
                <div className="flex justify-between items-start mb-2 md:mb-4">
                  <h3 className="text-base md:text-xl font-bold tracking-tight line-clamp-1">
                    {project.title}
                  </h3>
                  <div className="flex gap-2 md:gap-3 text-zinc-500 dark:text-zinc-400">
                    <a
                      href={project.github}
                      className="hover:text-black dark:hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4 md:w-5 md:h-5" />
                    </a>
                    <a
                      href={project.demo}
                      className="hover:text-black dark:hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                    </a>
                  </div>
                </div>

                <p className="text-zinc-500 dark:text-zinc-400 text-xs md:text-sm mb-4 flex-1 line-clamp-3 md:line-clamp-none">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 md:gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 md:px-3 md:py-1 text-[10px] md:text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all duration-300 text-sm font-medium"
          >
            {showAll ? (
              <>
                Show Less <ChevronUp size={16} />
              </>
            ) : (
              <>
                View More Projects <ChevronDown size={16} />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
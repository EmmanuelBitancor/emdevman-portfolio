"use client";

import { 
  Layout, 
  Server, 
  Wrench,
} from "lucide-react";
import React from "react";

// --- UPDATED: High-Visibility Border Beam Card ---
const BorderBeamCard = ({ children }: { children: React.ReactNode }) => {
  return (
    // 1. p-[2px]: Creates a 2px gap for the border to show through
    // 2. overflow-hidden: Clips the spinning gradient so it doesn't spill out
    <div className="group relative h-full w-full overflow-hidden rounded-2xl bg-neutral-100 dark:bg-zinc-900 p-[2px]">
      
      {/* ANIMATED BEAM 
         - animate-spin: Rotates the entire large container.
         - inset-[-100%]: Makes this container huge (3x parent size) so the rotation covers the corners smoothly.
         - bg-[conic-gradient(...)]: Creates a sharp tail of light (transparent -> cyan).
      */}
      <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite]">
        <div className="absolute inset-0 h-full w-full bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#06b6d4_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#fff_100%)]" />
      </div>

      {/* CONTENT MASK 
         - This sits ON TOP of the spinning layer.
         - It matches the background color to hide the center of the spinning gradient.
      */}
      <div className="relative h-full w-full rounded-[14px] bg-white dark:bg-zinc-950 px-4 py-5 sm:p-6 backdrop-blur-3xl">
        {children}
      </div>
    </div>
  );
};

// --- Data ---
const techCategories = [
  {
    name: "Frontend",
    icon: <Layout className="w-5 h-5" />,
    skills: [
      { name: "Next.js", level: "Expert" },
      { name: "React", level: "Expert" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Tailwind CSS", level: "Expert" },
    ],
  },
  {
    name: "Backend",
    icon: <Server className="w-5 h-5" />,
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "MySQL", level: "Advanced" },
      { name: "Supabase", level: "Intermediate" },
      { name: "Firebase", level: "Intermediate" },
    ],
  },
  {
    name: "DevOps & Tools",
    icon: <Wrench className="w-5 h-5" />,
    skills: [
      { name: "Git / GitHub", level: "Expert" },
      { name: "Postman", level: "Intermediate" },
      { name: "Vercel", level: "Expert" },
      { name: "Figma", level: "Advanced" },
      { name: "VS Code", level: "Expert" },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="w-full py-20 px-4 md:px-6 transition-colors duration-300 ease-in-out">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Tech Stack
          </h2>
          <p className="max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
            The tools and technologies I use to build robust applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <BorderBeamCard key={index}>
              {/* Note: Removed padding here because it's now handled inside the BorderBeamCard for better alignment */}
              <div className="h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                    {category.name}
                  </h3>
                </div>

                <div className="flex flex-col gap-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="group/item flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 group-hover/item:bg-cyan-500 dark:group-hover/item:bg-white transition-colors" />
                        <span className="font-medium text-zinc-600 dark:text-zinc-400 group-hover/item:text-zinc-900 dark:group-hover/item:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Subtle bottom line inside the card */}
                <div className="mt-auto pt-6">
                   <div className="h-px w-full bg-zinc-100 dark:bg-zinc-800" />
                </div>
              </div>
            </BorderBeamCard>
          ))}
        </div>
      </div>
    </section>
  );
}
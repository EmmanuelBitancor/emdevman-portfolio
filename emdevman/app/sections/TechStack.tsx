"use client";

import {  
  Layout, 
  Server, 
  Wrench,
} from "lucide-react";

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
            <div 
              key={index}
              className="flex flex-col h-full p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold tracking-tight">{category.name}</h3>
              </div>
              <div className="flex flex-col gap-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="group flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 group-hover:bg-black dark:group-hover:bg-white transition-colors" />
                      <span className="font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-black dark:group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-auto pt-6">
                <div className="h-1 w-full rounded-full bg-gradient-to-r from-zinc-200 to-transparent dark:from-zinc-800" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
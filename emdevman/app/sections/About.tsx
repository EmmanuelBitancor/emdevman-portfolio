"use client";

import Image from "next/image";
import { Code2, Globe, Cpu, Zap } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-20 px-4 md:px-6 bg-zinc-50/50 dark:bg-zinc-900/20 transition-colors duration-300 ease-in-out"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Text Content (Unchanged) */}
          <div className="flex flex-col space-y-6 py-4 z-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Me
            </h2>

            <p className="text-zinc-500 md:text-lg dark:text-zinc-400 leading-relaxed">
              I am a passionate Full Stack Developer with a keen eye for design
              and a drive for creating seamless digital experiences. With over 5
              years of experience, I bridge the gap between functional code and
              beautiful interfaces.
            </p>

            <p className="text-zinc-500 md:text-lg dark:text-zinc-400 leading-relaxed">
              My journey began with a simple HTML page, and today I build
              complex SaaS applications using the modern React ecosystem. When
              I&apos;m not coding, you can find me exploring new coffee shops or
              contributing to open-source projects.
            </p>

            {/* Feature/Skills Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4 mt-auto">
              <div className="flex flex-col gap-2 p-4 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                <Code2 className="text-zinc-900 dark:text-zinc-100" size={24} />
                <span className="font-semibold">Clean Code</span>
                <span className="text-xs text-zinc-500">
                  Maintainable & Scalable
                </span>
              </div>
              <div className="flex flex-col gap-2 p-4 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                <Zap className="text-zinc-900 dark:text-zinc-100" size={24} />
                <span className="font-semibold">Performance</span>
                <span className="text-xs text-zinc-500">Fast Load Times</span>
              </div>
              <div className="flex flex-col gap-2 p-4 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                <Globe className="text-zinc-900 dark:text-zinc-100" size={24} />
                <span className="font-semibold">Responsive</span>
                <span className="text-xs text-zinc-500">
                  Mobile-First Design
                </span>
              </div>
              <div className="flex flex-col gap-2 p-4 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                <Cpu className="text-zinc-900 dark:text-zinc-100" size={24} />
                <span className="font-semibold">Modern Tech</span>
                <span className="text-xs text-zinc-500">
                  Next.js & TypeScript
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: 3-Image "Random" Layout */}
          {/* Defined height is crucial for absolute positioning to work correctly */}
          <div className="relative w-full h-[500px] md:h-[600px]">
            {/* Background Decorative Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-zinc-200 dark:bg-zinc-800 rounded-full blur-[100px] opacity-50 z-0" />

            {/* Image 1: Back layer, Landscape, slightly rotated left */}
            <div className="absolute top-0 left-0 w-4/5 h-3/5 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-lg overflow-hidden z-10 -rotate-2 transition-all duration-500 hover:z-40 hover:scale-105 hover:rotate-0 group">
              <Image
                src="/assets/images/coding2.png" // Replace with landscape image (e.g., desk setup)
                alt="Setup"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>

            {/* Image 2: Middle layer, Square, rotated right, positioned right */}
            <div className="absolute top-1/4 right-0 w-1/2 aspect-square rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xl overflow-hidden z-20 rotate-3 transition-all duration-500 hover:z-40 hover:scale-105 hover:rotate-0">
               <Image
                src="/assets/images/coding3.png" // Replace with square image (e.g., coffee/detail)
                alt="Detail"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>

            {/* Image 3: Front layer, Portrait, slightly rotated left, positioned bottom left */}
            <div className="absolute bottom-0 left-8 w-2/5 h-1/2 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden z-30 -rotate-1 transition-all duration-500 hover:z-40 hover:scale-105 hover:rotate-0">
               <Image
                src="/assets/images/coding1.png" // Replace with portrait image (e.g., coding on laptop)
                alt="Coding"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 20vw"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
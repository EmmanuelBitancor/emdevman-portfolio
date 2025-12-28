"use client";

import Image from "next/image";
import { Code2, Globe, Cpu, Zap } from "lucide-react";
import { motion } from "framer-motion";
import coding1 from "../assets/images/coding1.png";
import coding2 from "../assets/images/coding2.png";
import coding3 from "../assets/images/coding3.png";

export default function About() {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger effect for children
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="about"
      className="w-full py-20 px-4 md:px-6 bg-zinc-50/50 dark:bg-zinc-900/20 transition-colors duration-300 ease-in-out"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Text Content */}
          <motion.div
            className="flex flex-col space-y-6 py-4 z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              variants={itemVariants} 
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            >
              About Me
            </motion.h2>

            <motion.p variants={itemVariants} className="text-zinc-500 md:text-lg dark:text-zinc-400 leading-relaxed">
              I am a passionate Web Development Enthusiast with a keen eye for design
              and a drive for creating seamless digital experiences.
            </motion.p>

            <motion.p variants={itemVariants} className="text-zinc-500 md:text-lg dark:text-zinc-400 leading-relaxed">
              My journey began with a simple HTML page, and today I build
              complex applications using the modern React ecosystem. When
              I&apos;m not coding, you can find me exploring new coffee shops or
              contributing to open-source projects.
            </motion.p>

            {/* Feature Grid */}
            <motion.div variants={containerVariants} className="grid grid-cols-2 gap-4 pt-4 mt-auto">
              <motion.div variants={itemVariants} className="flex flex-col gap-2 p-4 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                <Code2 className="text-zinc-900 dark:text-zinc-100" size={24} />
                <span className="font-semibold">Clean Code</span>
                <span className="text-xs text-zinc-500">Maintainable & Scalable</span>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex flex-col gap-2 p-4 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                <Zap className="text-zinc-900 dark:text-zinc-100" size={24} />
                <span className="font-semibold">Performance</span>
                <span className="text-xs text-zinc-500">Fast Load Times</span>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex flex-col gap-2 p-4 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                <Globe className="text-zinc-900 dark:text-zinc-100" size={24} />
                <span className="font-semibold">Responsive</span>
                <span className="text-xs text-zinc-500">Mobile-First Design</span>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex flex-col gap-2 p-4 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                <Cpu className="text-zinc-900 dark:text-zinc-100" size={24} />
                <span className="font-semibold">Modern Tech</span>
                <span className="text-xs text-zinc-500">Next.js & TypeScript</span>
              </motion.div>
            </motion.div>
          </motion.div>

{/* Right Side: Images */}
          <motion.div 
            className="relative w-full h-[500px] md:h-[600px]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Background Blob - No interaction needed */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-zinc-200 dark:bg-zinc-800 rounded-full blur-[100px] opacity-50 z-0" />
            
            {/* Image 1 (Top Left) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              // 1. Block right-click on the wrapper
              onContextMenu={(e) => e.preventDefault()}
              className="absolute top-0 left-0 w-4/5 h-3/5 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-lg overflow-hidden z-10 transition-all duration-500 hover:z-40 hover:scale-105 hover:rotate-0 group"
            >
              <Image
                src={coding2} 
                alt="Setup"
                fill
                // 2. Disable pointer events & selection on the image
                className="object-cover pointer-events-none select-none"
                sizes="(max-width: 768px) 100vw, 40vw"
                loading="lazy"
                quality={85}
                // 3. Disable dragging
                draggable={false}
              />
            </motion.div>

            {/* Image 2 (Top Right - Small) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              // 1. Block right-click on the wrapper
              onContextMenu={(e) => e.preventDefault()}
              className="absolute top-1/4 right-0 w-1/2 aspect-square rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xl overflow-hidden z-20 rotate-3 transition-all duration-500 hover:z-40 hover:scale-105 hover:rotate-0"
            >
              <Image
                src={coding3}
                alt="Detail"
                fill
                // 2. Disable pointer events & selection on the image
                className="object-cover pointer-events-none select-none"
                sizes="(max-width: 768px) 50vw, 25vw"
                loading="lazy"
                quality={85}
                // 3. Disable dragging
                draggable={false}
              />
            </motion.div>

            {/* Image 3 (Bottom Left - Main) */}
            <motion.div 
              initial={{ opacity: 0, y: 50, rotate: 5 }}
              whileInView={{ opacity: 1, y: 0, rotate: -1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              // 1. Block right-click on the wrapper
              onContextMenu={(e) => e.preventDefault()}
              className="absolute bottom-0 left-8 w-2/5 h-1/2 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden z-30 transition-all duration-500 hover:z-40 hover:scale-105 hover:rotate-0"
            >
              <Image
                src={coding1}
                alt="Coding"
                fill
                // 2. Disable pointer events & selection on the image
                className="object-cover pointer-events-none select-none"
                sizes="(max-width: 768px) 50vw, 20vw"
                loading="lazy"
                quality={85}
                // 3. Disable dragging
                draggable={false}
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
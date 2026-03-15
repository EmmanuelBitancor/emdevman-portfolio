"use client";

import Image from "next/image";
import {
  Code2,
  Globe,
  Cpu,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import coding1 from "../assets/images/coding1.png";
import coding2 from "../assets/images/coding2.png";
import coding3 from "../assets/images/coding3.png";

const images = [
  { src: coding1, alt: "Coding" },
  { src: coding2, alt: "Setup" },
  { src: coding3, alt: "Detail" },
];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

            <motion.p
              variants={itemVariants}
              className="text-zinc-500 md:text-lg dark:text-zinc-400 leading-relaxed"
            >
              I am a passionate Web Development Enthusiast with a keen eye for
              design and a drive for creating seamless digital experiences.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-zinc-500 md:text-lg dark:text-zinc-400 leading-relaxed"
            >
              My journey began with a simple HTML page, and today I build
              complex applications using the modern React ecosystem. When
              I&apos;m not coding, you can find me exploring new coffee shops or
              contributing to open-source projects.
            </motion.p>

            {/* Feature Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-4 pt-4 mt-auto"
            >
              <motion.div
                variants={itemVariants}
                className="flex flex-col gap-2 p-4 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800"
              >
                <Code2 className="text-zinc-900 dark:text-zinc-100" size={24} />
                <span className="font-semibold">Clean Code</span>
                <span className="text-xs text-zinc-500">
                  Maintainable & Scalable
                </span>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col gap-2 p-4 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800"
              >
                <Zap className="text-zinc-900 dark:text-zinc-100" size={24} />
                <span className="font-semibold">Performance</span>
                <span className="text-xs text-zinc-500">Fast Load Times</span>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col gap-2 p-4 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800"
              >
                <Globe className="text-zinc-900 dark:text-zinc-100" size={24} />
                <span className="font-semibold">Responsive</span>
                <span className="text-xs text-zinc-500">
                  Mobile-First Design
                </span>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col gap-2 p-4 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800"
              >
                <Cpu className="text-zinc-900 dark:text-zinc-100" size={24} />
                <span className="font-semibold">Modern Tech</span>
                <span className="text-xs text-zinc-500">
                  Next.js & TypeScript
                </span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side: Manual Carousel */}
          <motion.div
            className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-zinc-200 dark:bg-zinc-800 rounded-full blur-[100px] opacity-50 z-0" />

            {/* Carousel Container */}
            <div className="relative w-full max-w-md h-full z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 w-full h-full rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden"
                  onContextMenu={(e) => e.preventDefault()}
                >
                  <Image
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    fill
                    className="object-cover pointer-events-none select-none"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={currentIndex === 0}
                    draggable={false}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 dark:bg-zinc-900/80 shadow-lg hover:bg-white dark:hover:bg-zinc-900 transition-colors duration-300 group"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 text-zinc-900 dark:text-zinc-100 group-hover:scale-110 transition-transform" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 dark:bg-zinc-900/80 shadow-lg hover:bg-white dark:hover:bg-zinc-900 transition-colors duration-300 group"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 text-zinc-900 dark:text-zinc-100 group-hover:scale-110 transition-transform" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-zinc-900 dark:bg-zinc-100 w-6"
                        : "bg-zinc-400 dark:bg-zinc-600 hover:bg-zinc-500"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

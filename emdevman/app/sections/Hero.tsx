"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import profile from "../assets/images/profile.png";
import profile2 from "../assets/images/profile2.png";
import profile3 from "../assets/images/profile3.png";

export default function Hero() {
  const images = [profile3, profile, profile2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const cycleImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault(); 
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative z-10 w-full pt-32 pb-12 md:py-24 lg:py-32 xl:py-48 text-foreground transition-colors duration-300 ease-in-out">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-12 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
          <motion.div
            className="flex flex-col justify-center space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi, I&apos;m{" "}
                <span className="text-zinc-500 dark:text-zinc-400">
                  Emmanuel
                </span>
              </h1>
              <p className="max-w-[600px] text-zinc-500 md:text-xl dark:text-zinc-400">
                A Web Enthusiast & Developer crafting beautiful, accessible, and
                performant web experiences.
              </p>
            </div>

            <motion.div
              className="flex flex-col gap-3 min-[400px]:flex-row"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <a
                className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium text-background shadow transition-all duration-300 hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer"
                href="#projects"
                onClick={(e) => handleScroll(e, "projects")}
              >
                View My Work
              </a>

              <a
                className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-200 bg-background px-8 text-sm font-medium shadow-sm transition-all duration-300 hover:bg-zinc-100/50 hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring dark:border-zinc-800 dark:hover:bg-zinc-800 cursor-pointer"
                href="#contact"
                onClick={(e) => handleScroll(e, "contact")}
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* CONTAINER CHANGES: Added explicit widths for mobile (w-[280px] sm:w-[350px]) */}
            <div
              onClick={cycleImage}
              className="relative aspect-square overflow-hidden rounded-full border-2 border-zinc-100 dark:border-zinc-800 w-[280px] sm:w-[350px] md:w-[400px] mx-auto transition-colors duration-300 cursor-pointer active:scale-95 transition-transform"
            >
              {/* IMAGE CHANGES: Removed width/height, added fill and sizes */}
              <Image
                alt="Portrait of the developer"
                src={images[currentImageIndex]}
                fill
                sizes="(max-width: 768px) 350px, 400px"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
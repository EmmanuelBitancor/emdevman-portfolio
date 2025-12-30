"use client";

import { motion } from "framer-motion";
import ProfileCard from "../components/ui/ProfileCard"; 
// Make sure this path matches where you saved your image
import ProfileImage from "../assets/images/profile3.png"; 

export default function Hero() {
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
    <section className="relative z-10 w-full pt-20 pb-12 md:pt-32 md:pb-24 lg:pb-32 xl:pb-48 text-foreground transition-colors duration-300 ease-in-out overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-12 lg:grid-cols-[1fr_450px] lg:gap-12 xl:grid-cols-[1fr_500px] items-center">
          
          {/* LEFT COLUMN: Text Content */}
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

          {/* RIGHT COLUMN: The Profile Card */}
          {/* Added overflow-visible to ensure 3D perspective doesn't clip */}
          <motion.div
            className="flex items-center justify-center relative overflow-visible"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="w-full max-w-md perspective-1000">
              <ProfileCard 
                name="Emmanuel"
                title="Web Enthusiast"
                avatarUrl={ProfileImage.src}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
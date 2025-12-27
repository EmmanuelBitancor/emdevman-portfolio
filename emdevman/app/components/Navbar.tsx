"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const hiddenRoutes = ["/error/private", "/404"];

  if (hiddenRoutes.includes(pathname)) return null;

  const navLinks = [
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);

    // Scenario 1: Back to Top (Clicking Home or Logo)
    if (href === "/") {
      if (pathname === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    // Scenario 2: Hash Links (#projects)
    if (href.startsWith("#")) {
      // If we are on the homepage, the CSS 'scroll-behavior: smooth' 
      // in globals.css will handle the scroll automatically.
      // We DO NOT preventDefault here, so the URL updates to include the hash.
      
      // However, if we are on a different page (e.g., /blog),
      // Next.js Link will handle the route change to /#projects
    }
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl border border-black/10 bg-white dark:border-white/10 dark:bg-zinc-950 shadow-lg transition-colors duration-300 ease-in-out rounded-3xl md:rounded-full"
    >
      <div className="flex items-center justify-between px-6 py-3">
        {/* LOGO */}
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white"
          onClick={(e) => handleLinkClick(e, "/")}
        >
          ESB
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => {
            if (link.name === "Home") return null;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-zinc-600 dark:text-zinc-400 transition-colors hover:text-black dark:hover:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-t border-black/5 dark:border-white/5"
          >
            <div className="flex flex-col items-start gap-6 pb-8 pt-4 px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="w-full text-left text-lg font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
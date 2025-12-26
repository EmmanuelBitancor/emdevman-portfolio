"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    setIsOpen(false);
    if (href === "/") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      // CHANGED: 
      // 1. Removed 'bg-white/70' -> 'bg-white'
      // 2. Removed 'dark:bg-black/70' -> 'dark:bg-zinc-950' (Solid dark color)
      // 3. Removed 'backdrop-blur-md' (Not needed for solid backgrounds)
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl border border-black/10 bg-white dark:border-white/10 dark:bg-zinc-950 shadow-lg transition-all duration-300 ease-in-out rounded-3xl md:rounded-full"
    >
      <div className="flex items-center justify-between px-6 py-3">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight"
          onClick={(e) => handleScroll(e, "/")}
        >
          ESB
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-zinc-600 dark:text-zinc-400 transition-colors hover:text-black dark:hover:text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-start gap-6 pb-8 pt-4 px-6 border-t border-black/5 dark:border-white/5 animate-in slide-in-from-top-2 fade-in duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="w-full text-left text-lg font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
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

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl border border-black/10 bg-white/70 backdrop-blur-md dark:border-white/10 dark:bg-black/70 shadow-lg transition-all duration-300 ease-in-out ${
        isOpen ? "rounded-3xl" : "rounded-full"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-3">
        <Link 
          href="/" 
          className="text-lg font-bold tracking-tight"
          onClick={() => setIsOpen(false)}
        >
          ESB
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
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
            className="md:hidden p-2 text-zinc-600 dark:text-zinc-400 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-6 pt-2 px-6 border-t border-black/5 dark:border-white/5 animate-in slide-in-from-top-2 fade-in duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-2 text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
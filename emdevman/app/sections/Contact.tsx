/* eslint-disable react/no-unescaped-entities */
"use client";

import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full py-20 px-4 md:px-6 bg-zinc-50/50 dark:bg-zinc-900/20 transition-colors duration-300 ease-in-out"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get in Touch
          </h2>
          <p className="max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
            Have a project in mind or just want to say hi? I'm always open to
            discussing new projects, creative ideas, or opportunities.
          </p>
        </div>

        <div className="flex flex-col space-y-8 max-w-xl mx-auto">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              Let's build something awesome.
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a
              question or just want to say hi, I'll try my best to get back to
              you!
            </p>
          </div>
          <div className="space-y-4">
            <a
              href="mailto:emmanuel.bitancor0024@gmail.com"
              className="group flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 transition-colors duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-zinc-800 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-5 h-5 text-zinc-900 dark:text-zinc-100" />
              </div>
              <div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                  Email Me
                </p>
                <p className="text-zinc-900 dark:text-zinc-100 font-semibold">
                  emmanuel.bitancor0024@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://github.com/EmmanuelBitancor"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 transition-colors duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-zinc-800 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <Github className="w-5 h-5 text-zinc-900 dark:text-zinc-100" />
              </div>
              <div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                  GitHub
                </p>
                <p className="text-zinc-900 dark:text-zinc-100 font-semibold">
                  EmmanuelBitancor
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-zinc-800 shadow-sm">
                <MapPin className="w-5 h-5 text-zinc-900 dark:text-zinc-100" />
              </div>
              <div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                  Location
                </p>
                <p className="text-zinc-900 dark:text-zinc-100 font-semibold">
                  Somewhere Bohol, Philippines
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle, X } from "lucide-react";

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Stop page reload
    
    // Here you would typically send the data to an API/Email service
    
    // Show the success modal
    setIsModalOpen(true);
    
    // Reset the form fields
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative w-full py-20 px-4 md:px-6 bg-zinc-50/50 dark:bg-zinc-900/20 transition-colors duration-300 ease-in-out">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get in Touch
          </h2>
          <p className="max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
            Have a project in mind or just want to say hi? I&apos;m always open to discussing new projects, creative ideas, or opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Side: Contact Info */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Let&apos;s build something awesome.</h3>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                I&lsquo;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
              </p>
            </div>
            <div className="space-y-4">
              <a href="mailto:emmanuel.bitancor0024@gmail.com" className="group flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 transition-colors duration-300">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-zinc-800 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-5 h-5 text-zinc-900 dark:text-zinc-100" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">Email Me</p>
                  <p className="text-zinc-900 dark:text-zinc-100 font-semibold">emmanuel.bitancor0024@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-zinc-800 shadow-sm">
                  <MapPin className="w-5 h-5 text-zinc-900 dark:text-zinc-100" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">Location</p>
                  <p className="text-zinc-900 dark:text-zinc-100 font-semibold">Somewhere in Mars</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="p-6 md:p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
            <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required // Required
                    autoComplete="off"
                    placeholder="your name"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required // Required
                    autoComplete="off"
                    placeholder="youremail@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required // Required
                  autoComplete="off"
                  placeholder="Purpose of your message.."
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required // Required
                  autoComplete="off"
                  placeholder="Tell me more..."
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all resize-none"
                ></textarea>
              </div>

              <button type="submit" className="w-full inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-zinc-900 dark:bg-zinc-100 px-8 text-sm font-medium text-white dark:text-zinc-900 shadow transition-all duration-300 hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer">
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* --- SUCCESS MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="relative w-full max-w-md p-8 bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-100 dark:border-zinc-800 animate-in zoom-in-95 duration-300">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                <CheckCircle size={32} />
              </div>
              
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                Message Sent!
              </h3>
              
              <p className="text-zinc-500 dark:text-zinc-400">
                Thank you for reaching out. I&apos;ve received your message and will get back to you as soon as possible!
              </p>

              <button 
                onClick={() => setIsModalOpen(false)}
                className="w-full mt-4 inline-flex h-11 items-center justify-center rounded-xl bg-zinc-900 dark:bg-zinc-100 px-8 text-sm font-medium text-white dark:text-zinc-900 shadow transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
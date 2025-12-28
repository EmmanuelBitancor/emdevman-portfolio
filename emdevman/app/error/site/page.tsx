"use client"; 

import { Lock, ArrowLeft, Mail, ShieldAlert } from "lucide-react";

interface PrivateAccessProps {
  title?: string;
  projectName?: string;
  type?: "private" | "missing";
}

export default function PrivateAccess({ 
  title,
  projectName = "Project",
  type = "private" 
}: PrivateAccessProps) {
  
  const isPrivate = type === "private";

  const headingText = title ?? (isPrivate ? "Site is Temporarily Closed" : "Link Unavailable");

  const handleClose = () => {
    window.close();
    if (!window.closed) {
      window.location.href = "/#projects";
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center space-y-8 animate-in fade-in zoom-in-95 duration-300">
      <div className="relative group">
        <div className={`absolute -inset-4 rounded-full opacity-20 blur-xl transition-all duration-500 group-hover:opacity-40 ${isPrivate ? 'bg-amber-500' : 'bg-red-500'}`} />
        <div className={`relative flex items-center justify-center w-24 h-24 rounded-full border-4 shadow-xl ${isPrivate ? 'bg-amber-50/50 border-amber-100 dark:bg-amber-900/20 dark:border-amber-900/50' : 'bg-red-50/50 border-red-100 dark:bg-red-900/20 dark:border-red-900/50'}`}>
          {isPrivate ? (
            <Lock className="w-10 h-10 text-amber-600 dark:text-amber-500" />
          ) : (
            <ShieldAlert className="w-10 h-10 text-red-600 dark:text-red-500" />
          )}
        </div>
      </div>
      <div className="space-y-3 max-w-md">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          {headingText}
        </h1>
        
        <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
          {isPrivate 
            ? `The Site is Temoporarily Down for Server Maintenance. We will resume our services once school activities resume.`
            : `The link you are looking for is no longer available.`
          }
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <button 
          onClick={handleClose}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black hover:bg-zinc-50 dark:hover:bg-zinc-900 text-sm font-medium transition-colors cursor-pointer"
        >
          <ArrowLeft size={16} />
          Go back
        </button>
      </div>
    </div>
  );
}
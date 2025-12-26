"use client";

import { useTheme } from "next-themes";
import Snowfall from "react-snowfall";

export default function BackgroundEffects() {
  const { resolvedTheme } = useTheme();

  // Determine dot color based on theme
  // Light mode: Slate-400 (#94a3b8)
  // Dark mode: Slate-600 (#475569)
  const dotColor = resolvedTheme === "dark" ? "#475569" : "#94a3b8";

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      
      {/* 1. Snowfall Animation */}
      <Snowfall
        color={resolvedTheme === "dark" ? "#ffffff" : "#94a3b8"}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 0, 
        }}
        snowflakeCount={80}
        radius={[0.5, 2.0]}
        speed={[0.5, 2.5]}
        wind={[-0.5, 1.0]}
      />

      {/* 2. Background Pattern Layer */}
      <div 
        className="absolute inset-0 z-[-1]"
        style={{
          // === OPTION A: DOT GRID (Modern Tech Look) ===
          // Creates a grid of small dots spaced 24px apart
          backgroundImage: `radial-gradient(${dotColor} 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
          opacity: resolvedTheme === "dark" ? 0.3 : 0.4, // Adjust visibility here

          // === OPTION B: DIAGONAL STRIPES (Uncomment below to use) ===
          // backgroundImage: `repeating-linear-gradient(45deg, ${dotColor} 0, ${dotColor} 1px, transparent 0, transparent 50%)`,
          // backgroundSize: '10px 10px',
          // opacity: 0.1,
          
          maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)', // Fades out at the bottom
          WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
        }}
      />
      
    </div>
  );
}
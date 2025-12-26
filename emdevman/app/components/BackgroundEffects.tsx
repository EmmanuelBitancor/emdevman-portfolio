"use client";

import { useTheme } from "next-themes";
import Snowfall from "react-snowfall";

export default function BackgroundEffects() {
  const { resolvedTheme } = useTheme();
  const dotColor = resolvedTheme === "dark" ? "#4f4c4cff" : "#000000ff";

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
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
      <div 
        className="absolute inset-0 z-[-1]"
        style={{
          backgroundImage: `radial-gradient(${dotColor} 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
          opacity: resolvedTheme === "dark" ? 0.3 : 0.4, // Adjust visibility here
          maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)', // Fades out at the bottom
          WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
        }}
      />
      
    </div>
  );
}
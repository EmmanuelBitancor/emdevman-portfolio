"use client";

import dynamic from "next/dynamic";

// We move the dynamic import here, inside a Client Component.
const BackgroundEffects = dynamic(() => import("./BackgroundEffects"), { 
  ssr: false 
});

export default function ClientBackground() {
  return <BackgroundEffects />;
}
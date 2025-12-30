/* eslint-disable react-hooks/immutability */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useRef, useCallback, useMemo, useState } from "react";
import { useTheme } from "next-themes";

// --- CONFIGURATION ---
const GRADIENT_DARK = "linear-gradient(145deg, rgba(96, 73, 110, 0.2) 0%, rgba(113, 196, 255, 0.1) 100%)";
const GRADIENT_LIGHT = "linear-gradient(145deg, rgba(255, 255, 255, 0.4) 0%, rgba(200, 230, 255, 0.3) 100%)";

const ANIMATION_CONFIG = {
  DEVICE_BETA_OFFSET: 20,
  ENTER_TRANSITION_MS: 180,
};

// Math Utilities
const clamp = (v: number, min = 0, max = 100): number => Math.min(Math.max(v, min), max);
const round = (v: number, precision = 3): number => parseFloat(v.toFixed(precision));
const adjust = (v: number, fMin: number, fMax: number, tMin: number, tMax: number): number =>
  round(tMin + ((tMax - tMin) * (v - fMin)) / (fMax - fMin));

interface ProfileCardProps {
  avatarUrl?: string;
  miniAvatarUrl?: string;
  name?: string;
  title?: string;
  handle?: string;
  status?: string;
  contactText?: string;
  onContactClick?: () => void;
  innerGradient?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  avatarUrl = "/assets/images/profile3.png",
  name = "Emmanuel",
  title = "Web Developer",
  innerGradient,
}) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const enterTimerRef = useRef<number | null>(null);
  const leaveRafRef = useRef<number | null>(null);

  // Theme Handling
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? (theme || resolvedTheme) : 'dark';
  const isDark = currentTheme === 'dark';

  const tiltEngine = useMemo(() => {
    let rafId: number | null = null;
    let running = false;
    let lastTs = 0;
    let currentX = 0, currentY = 0, targetX = 0, targetY = 0;
    const DEFAULT_TAU = 0.14;

    const setVarsFromXY = (x: number, y: number) => {
      const shell = shellRef.current;
      const wrap = wrapRef.current;
      if (!shell || !wrap) return;

      const width = shell.clientWidth || 1;
      const height = shell.clientHeight || 1;
      const percentX = clamp((100 / width) * x);
      const percentY = clamp((100 / height) * y);

      const properties: Record<string, string> = {
        "--pointer-x": `${percentX}%`,
        "--pointer-y": `${percentY}%`,
        "--background-x": `${adjust(percentX, 0, 100, 35, 65)}%`,
        "--background-y": `${adjust(percentY, 0, 100, 35, 65)}%`,
        "--pointer-from-center": `${clamp(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)}`,
        "--pointer-from-top": `${percentY / 100}`,
        "--pointer-from-left": `${percentX / 100}`,
        "--rotate-x": `${round(-(percentX - 50) / 5)}deg`,
        "--rotate-y": `${round((percentY - 50) / 4)}deg`,
      };

      for (const [k, v] of Object.entries(properties)) {
        wrap.style.setProperty(k, v);
      }
    };

    const step = (ts: number) => {
      if (!running) return;
      if (lastTs === 0) lastTs = ts;
      const dt = (ts - lastTs) / 1000;
      lastTs = ts;

      const tau = DEFAULT_TAU;
      const k = 1 - Math.exp(-dt / tau);

      currentX += (targetX - currentX) * k;
      currentY += (targetY - currentY) * k;

      setVarsFromXY(currentX, currentY);

      const stillFar = Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05;

      if (stillFar || document.hasFocus()) {
        rafId = requestAnimationFrame(step);
      } else {
        running = false;
        lastTs = 0;
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      }
    };

    const start = () => {
      if (running) return;
      running = true;
      lastTs = 0;
      rafId = requestAnimationFrame(step);
    };

    return {
      setTarget(x: number, y: number) {
        targetX = x;
        targetY = y;
        start();
      },
      toCenter() {
        if (!shellRef.current) return;
        targetX = shellRef.current.clientWidth / 2;
        targetY = shellRef.current.clientHeight / 2;
        currentX = targetX;
        currentY = targetY;
        setVarsFromXY(currentX, currentY);
      },
      getCurrent() {
        return { x: currentX, y: currentY, tx: targetX, ty: targetY };
      },
      cancel() {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = null;
        running = false;
        lastTs = 0;
      }
    };
  }, []);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!shellRef.current || !tiltEngine) return;
      const rect = shellRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      tiltEngine.setTarget(x, y);
    },
    [tiltEngine]
  );

  const handlePointerEnter = useCallback(() => {
    if (!shellRef.current || !tiltEngine) return;
    shellRef.current.classList.add("active", "entering");
    if (enterTimerRef.current) clearTimeout(enterTimerRef.current);
    enterTimerRef.current = window.setTimeout(() => {
      shellRef.current?.classList.remove("entering");
    }, ANIMATION_CONFIG.ENTER_TRANSITION_MS);
  }, [tiltEngine]);

  const handlePointerLeave = useCallback(() => {
    if (!shellRef.current || !tiltEngine) return;
    tiltEngine.toCenter();
    
    const checkSettle = () => {
      const { x, y, tx, ty } = tiltEngine.getCurrent();
      const settled = Math.hypot(tx - x, ty - y) < 0.6;
      if (settled) {
        shellRef.current?.classList.remove("active");
        leaveRafRef.current = null;
      } else {
        leaveRafRef.current = requestAnimationFrame(checkSettle);
      }
    };
    if (leaveRafRef.current) cancelAnimationFrame(leaveRafRef.current);
    leaveRafRef.current = requestAnimationFrame(checkSettle);
  }, [tiltEngine]);

  useEffect(() => {
    if (!tiltEngine || !shellRef.current) return;
    tiltEngine.toCenter();
    return () => {
      tiltEngine.cancel();
      if (enterTimerRef.current) clearTimeout(enterTimerRef.current);
      if (leaveRafRef.current) cancelAnimationFrame(leaveRafRef.current);
    };
  }, [tiltEngine]);

  const cardStyle = useMemo(
    () =>
      ({
        "--inner-gradient": innerGradient ?? (isDark ? GRADIENT_DARK : GRADIENT_LIGHT),
      } as React.CSSProperties),
    [innerGradient, isDark]
  );

  const isMountedForAnimation = mounted;

  return (
    <div
      ref={wrapRef}
      style={cardStyle}
      // Added transform-gpu to force hardware acceleration on the container
      className="pc-card-wrapper relative z-10 w-full max-w-[350px] mx-auto h-[480px] perspective-500 transform-gpu"
    >
      <div 
        className="absolute inset-0 blur-[80px] transition-opacity bg-transparent duration-500 pointer-events-none"
        style={{
          background: isDark 
            ? `radial-gradient(circle at var(--pointer-x) var(--pointer-y), rgba(65, 144, 254, 0.64) 0%, transparent 70%)`
            : `radial-gradient(circle at var(--pointer-x) var(--pointer-y), rgba(50, 150, 255, 0.3) 0%, transparent 70%)`,
          opacity: isDark ? 0.4 : 0.2,
          // Optimization: Hide massive blur on very small screens if needed, or keep low opacity
          willChange: 'opacity',
        }}
      />

      <div
        ref={shellRef}
        onPointerMove={handlePointerMove}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        className="relative w-full h-full z-20 touch-none group"
      >
        <div className="pc-card relative w-full h-full rounded-[30px] overflow-hidden 
                        bg-transparent dark:bg-transparent 
                        border border-white/40 dark:border-none 
                        shadow-2xl transition-colors duration-300">
          
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: innerGradient ?? (isDark ? GRADIENT_DARK : GRADIENT_LIGHT) }}
          />

          <div className="pc-shine absolute inset-0 z-30 opacity-50 pointer-events-none" />
          <div className="pc-glare absolute inset-0 z-40 pointer-events-none" />

          {/* --- IMAGE CONTAINER --- */}
          <div 
            className={`absolute bottom-0 left-1/2 w-full max-w-[120%] z-30 origin-bottom pointer-events-none 
                       transition-all duration-700 ease-out ${isMountedForAnimation ? 'opacity-100' : 'opacity-0'}`}
            style={{
              transform: `
                translateX(calc(-50% + (var(--pointer-from-left) - 0.5) * 10px)) 
                translateZ(20px) 
                scale(1.0)
              `,
              // FIX: Force browser to keep texture sharp
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              willChange: 'transform',
            }}
          >
            <img
              src={avatarUrl}
              alt="Profile"
              // FIX: added 'image-rendering-pixel' class equivalent or style for mobile sharpness
              className="w-full h-auto object-cover select-none"
              style={{
                // FIX: Specific hint for WebKit (iOS/Safari) to avoid blur on scale
                imageRendering: '-webkit-optimize-contrast',
              }}
            />
          </div>

          <div className="absolute top-6 left-0 right-0 z-50 px-6 text-center pointer-events-none">
            <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white drop-shadow-lg mb-1">
              {name}
            </h3>
            <p className="text-base font-semibold text-slate-700 dark:text-purple-200/80">
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
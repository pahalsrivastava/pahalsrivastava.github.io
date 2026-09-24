"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Exact raw coordinates (0-lag precision dot)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // High-performance, low-latency spring physics (crisp follow, no mushy drag)
  const springConfig = { damping: 24, stiffness: 500, mass: 0.15 };
  const trailX = useSpring(cursorX, springConfig);
  const trailY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only run on mouse/fine pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      if (!isVisible) setIsVisible(true);

      // Throttled target check using requestAnimationFrame to prevent event pipeline freezing
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const target = e.target as HTMLElement | null;
        if (!target) return;
        const interactive = Boolean(
          target.closest("a, button, input, textarea, [data-cursor='hover'], [role='button']")
        );
        setIsHovered(interactive);
      });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* 1. Trailing Crosshair Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-[#8B7CF6]/60 dark:border-[#5FE3C0]/50"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovered ? 1.6 : 1,
          borderColor: isHovered ? "rgba(95, 227, 192, 0.9)" : "rgba(139, 124, 246, 0.45)",
          backgroundColor: isHovered ? "rgba(95, 227, 192, 0.08)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 450, damping: 25 }}
      >
        {/* Subtle Tech Corner Indicators (Appear on Hover) */}
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="h-1.5 w-1.5 rounded-full bg-[#5FE3C0] animate-ping opacity-60" />
          </div>
        )}
      </motion.div>

      {/* 2. Zero-Latency Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 1.5 : isHovered ? 0.6 : 1,
          backgroundColor: isHovered ? "#5FE3C0" : "#8B7CF6",
        }}
        transition={{ duration: 0.12 }}
      >
        <div className="h-2 w-2 rounded-full bg-current shadow-[0_0_8px_currentColor]" />
      </motion.div>
    </div>
  );
}
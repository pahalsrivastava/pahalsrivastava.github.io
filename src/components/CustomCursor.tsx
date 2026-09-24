"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Raw cursor position values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth trailing spring physics for the outer ring
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable on touch / non-pointer devices to avoid stuck visuals on mobile
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleHoverCheck = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      
      const isInteractive = Boolean(
        target.closest("a, button, input, textarea, [data-cursor='hover'], [role='button']")
      );
      setIsHovered(isInteractive);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousemove", handleHoverCheck);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousemove", handleHoverCheck);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* 1. Outer Smooth Trailing Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border transition-colors duration-200"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 48 : 26,
          height: isHovered ? 48 : 26,
          borderColor: isHovered ? "rgba(95, 227, 192, 0.8)" : "rgba(139, 124, 246, 0.4)",
          backgroundColor: isHovered ? "rgba(95, 227, 192, 0.08)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      />

      {/* 2. Inner Direct Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-[#5FE3C0]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 6 : 4,
          height: isHovered ? 6 : 4,
          backgroundColor: isHovered ? "#5FE3C0" : "#8B7CF6",
        }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
}
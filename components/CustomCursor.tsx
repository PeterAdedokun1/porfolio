"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const auraX = useMotionValue(-100);
  const auraY = useMotionValue(-100);

  const springConfig = { damping: 24, stiffness: 320, mass: 0.45 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const auraXSpring = useSpring(auraX, { damping: 30, stiffness: 140, mass: 0.9 });
  const auraYSpring = useSpring(auraY, { damping: 30, stiffness: 140, mass: 0.9 });

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updateEnabled = () => setIsEnabled(media.matches);
    updateEnabled();
    media.addEventListener("change", updateEnabled);

    return () => media.removeEventListener("change", updateEnabled);
  }, []);

  useEffect(() => {
    if (!isEnabled) {
      setIsVisible(false);
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      setIsVisible(true);
      cursorX.set(e.clientX - 18);
      cursorY.set(e.clientY - 18);
      auraX.set(e.clientX - 80);
      auraY.set(e.clientY - 80);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handlePointerDown = () => setIsPressed(true);
    const handlePointerUp = () => setIsPressed(false);
    const hideCursor = () => setIsVisible(false);

    const interactiveEls = Array.from(
      document.querySelectorAll(
      "a, button, [data-cursor-hover]"
      )
    );

    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("mouseup", handlePointerUp);
    document.addEventListener("mouseleave", hideCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("mouseup", handlePointerUp);
      document.removeEventListener("mouseleave", hideCursor);
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [auraX, auraY, cursorX, cursorY, isEnabled]);

  if (!isEnabled) {
    return null;
  }

  return (
    <>
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 pointer-events-none z-[99997] h-40 w-40 rounded-full bg-accent/10 blur-3xl mix-blend-screen"
        style={{
          x: auraXSpring,
          y: auraYSpring,
          opacity: isVisible ? (isHovering ? 0.8 : 0.45) : 0,
          scale: isPressed ? 0.85 : isHovering ? 1.15 : 1,
        }}
      />

      <motion.div
        aria-hidden
        className="fixed top-0 left-0 pointer-events-none z-[99998] h-9 w-9 rounded-full border border-accent/80"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isPressed ? 0.82 : isHovering ? 1.9 : 1,
          backgroundColor: isHovering ? "rgba(200,255,0,0.16)" : "rgba(200,255,0,0.02)",
          borderColor: isHovering ? "rgba(200,255,0,1)" : "rgba(200,255,0,0.75)",
        }}
        transition={{ type: "spring", stiffness: 340, damping: 24 }}
      />

      <motion.div
        aria-hidden
        className="fixed top-0 left-0 pointer-events-none z-[99999] h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_20px_rgba(200,255,0,0.85)]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isPressed ? 0.7 : isHovering ? 1.25 : 1,
        }}
        transition={{ type: "spring", stiffness: 420, damping: 22 }}
      />
    </>
  );
}

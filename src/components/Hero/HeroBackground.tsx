"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "../../styles/HeroBackground.module.scss";

interface MousePos {
  x: number;
  y: number;
}

export default function HeroBackground() {
  const [mousePos, setMousePos] = useState<MousePos>({ x: 0.5, y: 0.5 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Track mouse position for subtle parallax (very subtle)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    // Clamp to 0-1 range
    setMousePos({ x: Math.max(0, Math.min(1, x)), y: Math.max(0, Math.min(1, y)) });
  };

  return (
    <div
      ref={containerRef}
      className={styles.container}
      onMouseMove={handleMouseMove}
    >
      {/* Static deep dark gradient base */}
      <div className={styles.gradientBase} />

      {/* Animated Blob 1 - Top Left */}
      <motion.div
        className={styles.blob}
        style={{
          left: "10%",
          top: "20%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.15), transparent 70%)",
        }}
        animate={
          !prefersReducedMotion
            ? {
                x: [0, 40, 0],
                y: [0, 60, 0],
                scale: [1, 1.1, 1],
              }
            : {}
        }
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Animated Blob 2 - Bottom Right */}
      <motion.div
        className={styles.blob}
        style={{
          right: "5%",
          bottom: "10%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.12), transparent 70%)",
        }}
        animate={
          !prefersReducedMotion
            ? {
                x: [0, -50, 0],
                y: [0, -80, 0],
                scale: [1, 1.15, 1],
              }
            : {}
        }
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* Animated Blob 3 - Center Right (accent) */}
      <motion.div
        className={styles.blob}
        style={{
          right: "20%",
          top: "30%",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(34, 211, 238, 0.08), transparent 70%)",
        }}
        animate={
          !prefersReducedMotion
            ? {
                x: [0, 30, 0],
                y: [0, -40, 0],
                scale: [1, 1.05, 1],
              }
            : {}
        }
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Floating Particles */}
      <div className={styles.particlesContainer}>
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className={styles.particle}
            style={{
              left: `${10 + (i % 4) * 22}%`,
              top: `${15 + Math.floor(i / 4) * 30}%`,
            }}
            animate={
              !prefersReducedMotion
                ? {
                    y: [0, -30, 0],
                    opacity: [0.2, 0.6, 0.2],
                  }
                : {}
            }
            transition={{
              duration: 6 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.15,
            }}
          />
        ))}
      </div>

      {/* Subtle Overlay Gradient for depth */}
      <div className={styles.overlayGradient} />
    </div>
  );
}

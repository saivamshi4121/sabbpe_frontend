"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";

interface Dot {
  id: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
}

interface Line {
  id: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

const COLS = 6;
const ROWS = 4;
const GRID_SIZE = COLS * ROWS;
const DOT_SIZE = 8; // pixels
const SPACING = 60; // pixels between dots

export default function LivingNetworkGrid() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeDotId, setActiveDotId] = useState<number>(0);
  const [lines, setLines] = useState<Line[]>([]);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate dots grid
  const dots = useMemo<Dot[]>(() => {
    const dotsArray: Dot[] = [];
    for (let i = 0; i < GRID_SIZE; i++) {
      const col = i % COLS;
      const row = Math.floor(i / COLS);
      dotsArray.push({
        id: i,
        x: col * SPACING + SPACING / 2,
        y: row * SPACING + SPACING / 2,
        delay: Math.random() * 0.5,
        duration: 4 + Math.random() * 2, // 4-6 seconds
      });
    }
    return dotsArray;
  }, []);

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

  // Cycle through active dots every 2 seconds
  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setActiveDotId(Math.floor(Math.random() * GRID_SIZE));
    }, 2000);

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  // Generate connection lines every 3-4 seconds
  useEffect(() => {
    if (prefersReducedMotion) return;

    const generateLines = () => {
      const newLines: Line[] = [];
      const lineCount = isHovered ? 4 : 2;

      for (let i = 0; i < lineCount; i++) {
        const fromIdx = Math.floor(Math.random() * GRID_SIZE);
        const toIdx = Math.floor(Math.random() * GRID_SIZE);

        if (fromIdx !== toIdx) {
          const fromDot = dots[fromIdx];
          const toDot = dots[toIdx];

          newLines.push({
            id: `line-${Date.now()}-${i}`,
            x1: fromDot.x,
            y1: fromDot.y,
            x2: toDot.x,
            y2: toDot.y,
          });
        }
      }

      setLines(newLines);

      // Clear lines after 2.6 seconds (0.8s fade in + 1s visible + 0.8s fade out)
      const timeout = setTimeout(() => {
        setLines([]);
      }, 2600);

      return timeout;
    };

    const timeout = generateLines();
    const interval = setInterval(generateLines, isHovered ? 3000 : 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [dots, isHovered, prefersReducedMotion]);

  const gridWidth = (COLS - 1) * SPACING + SPACING;
  const gridHeight = (ROWS - 1) * SPACING + SPACING;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[400px] rounded-[24px] overflow-hidden transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glass background */}
      <div className="absolute inset-0 rounded-[24px] z-10 border border-[rgba(255,255,255,0.08)]"
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(18px)"
        }}
      />

      {/* SVG layer for connection lines */}
      {!prefersReducedMotion && (
        <svg
          className="absolute inset-0 z-20 w-full h-full pointer-events-none"
          width={gridWidth}
          height={gridHeight}
          viewBox={`0 0 ${gridWidth} ${gridHeight}`}
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)"
          }}
        >
          {lines.map((line) => (
            <motion.line
              key={line.id}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="rgba(34, 211, 238, 0.4)"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.6, 0] }}
              transition={{ duration: 2.6, times: [0, 0.3, 1] }}
            />
          ))}
        </svg>
      )}

      {/* Dots grid */}
      <div className="absolute inset-0 z-30 flex items-center justify-center w-full h-full">
        {dots.map((dot) => (
          <motion.div
            key={dot.id}
            className="absolute w-2 h-2"
            style={{
              left: dot.x,
              top: dot.y,
              transform: "translate(-50%, -50%)"
            }}
          >
            {/* Active glow ring */}
            {activeDotId === dot.id && !prefersReducedMotion && (
              <motion.div
                className="absolute inset-[-6px] rounded-full pointer-events-none will-change-transform"
                style={{
                  border: "1px solid rgba(34, 211, 238, 0.4)"
                }}
                initial={{ scale: 0.8, opacity: 0.8 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            )}

            {/* Main dot */}
            <motion.div
              className="absolute inset-0 rounded-full will-change-opacity will-change-transform"
              animate={
                !prefersReducedMotion
                  ? {
                      opacity: [0.35, 0.65, 0.35],
                      scale: [1, 1.12, 1],
                    }
                  : {}
              }
              transition={{
                duration: dot.duration,
                delay: dot.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                background: "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8), rgba(96, 165, 250, 0.6))",
                boxShadow: activeDotId === dot.id
                  ? "0 0 12px rgba(34, 211, 238, 0.6), inset 0 0 6px rgba(96, 165, 250, 0.4)"
                  : "0 0 6px rgba(96, 165, 250, 0.3)",
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Overlay gradient for premium feel */}
      <div className="absolute inset-0 z-40 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 20%, rgba(14, 26, 43, 0.1) 100%)"
        }}
      />
    </div>
  );
}

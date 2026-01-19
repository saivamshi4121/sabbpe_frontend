"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import styles from "./UpiPaymentFlowAnimation.module.scss";

interface Node {
  id: number;
  title: string;
  subtitle: string;
  topPercent: number; // percentage
  leftPercent: number; // percentage
}

const nodes: Node[] = [
  { id: 1, title: "QR Scan", subtitle: "Scan & Pay", topPercent: 18, leftPercent: 12 },
  { id: 2, title: "UPI", subtitle: "Instant transfer", topPercent: 30, leftPercent: 40 },
  { id: 3, title: "Bank", subtitle: "Secure routing", topPercent: 34, leftPercent: 72 },
  { id: 4, title: "Settlement", subtitle: "Auto reconciliation", topPercent: 56, leftPercent: 62 },
  { id: 5, title: "Success", subtitle: "Payment complete", topPercent: 72, leftPercent: 82 },
];

const TOKEN_CYCLE_DURATION = 12; // seconds for smooth traversal
const PAUSE_DURATION = 2.5; // pause at end before repeating

export function UpiPaymentFlowAnimation() {
  const [mounted, setMounted] = useState(false);
  const [pathProgress, setPathProgress] = useState(0);
  const [tokenPosition, setTokenPosition] = useState({ x: 0, y: 0 });
  const [trailPositions, setTrailPositions] = useState<Array<{ x: number; y: number; opacity: number }>>([]);
  const [activeNodeIndex, setActiveNodeIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Easing function: easeInOut cubic
  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  useEffect(() => {
    if (!mounted || !containerRef.current) return;

    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    // Convert percentage positions to pixel coordinates for path drawing
    const nodePixels = nodes.map((node) => ({
      x: (node.leftPercent / 100) * containerWidth,
      y: (node.topPercent / 100) * containerHeight,
    }));

    const totalDuration = TOKEN_CYCLE_DURATION + PAUSE_DURATION;
    let lastTime = Date.now();

    const updateAnimation = () => {
      const now = Date.now();
      lastTime = now;

      const cycleStart = Math.floor(now / (totalDuration * 1000)) * (totalDuration * 1000);
      const elapsed = now - cycleStart;
      const rawProgress = Math.min(elapsed / (TOKEN_CYCLE_DURATION * 1000), 1);

      // Apply easeInOut for smooth motion
      const easedProgress = easeInOutCubic(rawProgress);
      setPathProgress(easedProgress);

      // Update activeNodeIndex based on progress
      const newActiveNodeIndex = Math.floor(easedProgress * nodes.length);
      setActiveNodeIndex(Math.min(newActiveNodeIndex, nodes.length - 1));

      // Calculate token position on path
      if (pathRef.current) {
        const pathLength = pathRef.current.getTotalLength();
        const point = pathRef.current.getPointAtLength(easedProgress * pathLength);
        setTokenPosition({ x: point.x, y: point.y });

        // Update trail (history of recent positions)
        setTrailPositions((prevTrail) => {
          const newTrail = [
            { x: point.x, y: point.y, opacity: 1 },
            ...prevTrail.map((pos) => ({
              ...pos,
              opacity: pos.opacity * 0.82,
            })),
          ].filter((pos) => pos.opacity > 0.05);

          return newTrail.slice(0, 10);
        });
      }

      requestAnimationFrame(updateAnimation);
    };

    const animationFrame = requestAnimationFrame(updateAnimation);
    return () => cancelAnimationFrame(animationFrame);
  }, [mounted]);

  if (!mounted) {
    return <div className={styles.container} ref={containerRef} />;
  }

  // Get closest node based on token position (within 60px radius)
  const getClosestNodeIndex = () => {
    if (!containerRef.current) return -1;

    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    let closest = -1;
    let closestDist = Infinity;

    nodes.forEach((node, idx) => {
      const nodeX = (node.leftPercent / 100) * containerWidth;
      const nodeY = (node.topPercent / 100) * containerHeight;
      const dist = Math.sqrt(
        Math.pow(tokenPosition.x - nodeX, 2) + Math.pow(tokenPosition.y - nodeY, 2)
      );
      if (dist < closestDist) {
        closestDist = dist;
        closest = idx;
      }
    });

    return closestDist < 60 ? closest : -1;
  };

  const closestNodeIndex = getClosestNodeIndex();

  // Generate SVG path connecting all nodes with smooth curves
  const generateSVGPath = () => {
    if (!containerRef.current) return "";

    const container = containerRef.current;
    const w = container.offsetWidth;
    const h = container.offsetHeight;

    const nodePixels = nodes.map((node) => ({
      x: (node.leftPercent / 100) * w,
      y: (node.topPercent / 100) * h,
    }));

    // Create smooth cubic bezier path through all nodes
    let pathStr = `M ${nodePixels[0].x} ${nodePixels[0].y}`;

    for (let i = 1; i < nodePixels.length; i++) {
      const curr = nodePixels[i];
      const prev = nodePixels[i - 1];
      const controlX1 = prev.x + (curr.x - prev.x) * 0.3;
      const controlY1 = prev.y + (curr.y - prev.y) * 0.2;
      const controlX2 = curr.x - (curr.x - prev.x) * 0.3;
      const controlY2 = curr.y - (curr.y - prev.y) * 0.2;

      pathStr += ` C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${curr.x} ${curr.y}`;
    }

    return pathStr;
  };

  const pathData = generateSVGPath();

  return (
    <div className={styles.container} ref={containerRef}>
      {/* Background effects layer */}
      <div className={styles.backgroundEffects}>
        <div className={styles.gridTexture}></div>
        <div className={styles.radialGlowTL}></div>
        <div className={styles.radialGlowBR}></div>
        <div className={styles.particlesContainer}>
          {[...Array(10)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className={styles.particle}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.3}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* SVG Canvas */}
      <svg
        ref={svgRef}
        className={styles.canvas}
        viewBox={`0 0 ${containerRef.current?.offsetWidth || 800} ${containerRef.current?.offsetHeight || 580}`}
        preserveAspectRatio="none"
        width="100%"
        height="100%"
      >
        <defs>
          <filter id="pathGlow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="tokenGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(34, 211, 238, 0.3)" />
            <stop offset="50%" stopColor="rgba(34, 211, 238, 0.6)" />
            <stop offset="100%" stopColor="rgba(34, 211, 238, 0.3)" />
          </linearGradient>
        </defs>

        {/* Background path (faint) */}
        <path
          d={pathData}
          stroke="rgba(34, 211, 238, 0.15)"
          strokeWidth="3.5"
          fill="none"
        />

        {/* Main visible path */}
        <path
          ref={pathRef}
          d={pathData}
          stroke="url(#pathGradient)"
          strokeWidth="2.2"
          fill="none"
          filter="url(#pathGlow)"
        />

        {/* Trail circles */}
        {trailPositions.map((trail, idx) => (
          <circle
            key={`trail-${idx}`}
            cx={trail.x}
            cy={trail.y}
            r={3.5 + idx * 0.3}
            fill="none"
            stroke="rgba(34, 211, 238, 0.25)"
            opacity={trail.opacity * 0.5}
            filter="url(#tokenGlow)"
          />
        ))}

        {/* Token with premium glow */}
        <g>
          {/* Outer soft glow ring */}
          <circle
            cx={tokenPosition.x}
            cy={tokenPosition.y}
            r="12"
            fill="none"
            stroke="rgba(34, 211, 238, 0.15)"
            opacity={0.6}
          />

          {/* Middle glow ring */}
          <circle
            cx={tokenPosition.x}
            cy={tokenPosition.y}
            r="8"
            fill="none"
            stroke="rgba(34, 211, 238, 0.35)"
            opacity={0.8}
            filter="url(#tokenGlow)"
          />

          {/* Main token dot */}
          <circle
            cx={tokenPosition.x}
            cy={tokenPosition.y}
            r="5"
            fill="rgba(34, 211, 238, 0.95)"
            filter="url(#tokenGlow)"
          />
        </g>
      </svg>

      {/* Nodes overlay */}
      <div className={styles.nodesOverlay}>
        {nodes.map((node, idx) => {
          const isActive = closestNodeIndex === idx;
          const isCompleted = activeNodeIndex > idx;

          return (
            <motion.div
              key={node.id}
              className={styles.nodeWrapper}
              style={{
                left: `${node.leftPercent}%`,
                top: `${node.topPercent}%`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: idx * 0.12,
                ease: "easeOut",
              }}
            >
              {/* Active pulse halo */}
              {isActive && (
                <motion.div
                  className={styles.activePulse}
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.8, 0.1, 0.8],
                  }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}

              {/* Card */}
              <motion.div
                className={`${styles.nodeCard} ${isActive ? styles.active : ""} ${isCompleted ? styles.completed : ""}`}
                animate={{
                  scale: isActive ? 1.02 : 1,
                  boxShadow: isActive
                    ? "0 0 28px rgba(34, 211, 238, 0.6), inset 0 0 12px rgba(34, 211, 238, 0.2)"
                    : isCompleted
                      ? "0 0 12px rgba(34, 211, 238, 0.3)"
                      : "0 0 8px rgba(96, 165, 250, 0.15)",
                }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                }}
              >
                <h3 className={styles.nodeTitle}>{node.title}</h3>
                <p className={styles.nodeSubtitle}>{node.subtitle}</p>

                {/* Checkmark */}
                {isCompleted && (
                  <motion.div
                    className={styles.checkmark}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                  >
                    ✓
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

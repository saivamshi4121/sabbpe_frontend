"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

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
    <div className="relative w-full h-full bg-gradient-to-br from-[rgba(15,23,42,0.5)] to-[rgba(20,35,60,0.4)] border border-[rgba(34,211,238,0.2)] rounded-[28px] overflow-hidden flex items-center justify-center max-md:rounded-[20px] max-sm:rounded-[16px]" ref={containerRef}>
      {/* Background effects layer */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute inset-0 w-full h-full" style={{
          backgroundImage: `linear-gradient(0deg, rgba(34, 211, 238, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          opacity: 0.5,
          pointerEvents: 'none',
        }}></div>
        <div className="absolute -top-[20%] -left-[10%] w-[40%] h-[40%] bg-radial-gradient-[circle,rgba(34,211,238,0.08)_0%,transparent_70%] blur-[40px] pointer-events-none"></div>
        <div className="absolute -bottom-[15%] -right-[5%] w-[35%] h-[35%] bg-radial-gradient-[circle,rgba(37,99,235,0.06)_0%,transparent_70%] blur-[35px] pointer-events-none"></div>
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-0.5 h-0.5 bg-[rgba(34,211,238,0.3)] rounded-full animate-float"
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
        className="absolute inset-0 w-full h-full z-1 pointer-events-none bg-transparent"
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
      <div className="absolute inset-0 w-full h-full z-3 pointer-events-none p-0">
        {nodes.map((node, idx) => {
          const isActive = closestNodeIndex === idx;
          const isCompleted = activeNodeIndex > idx;

          return (
            <motion.div
              key={node.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 will-change-transform pointer-events-auto max-md:scale-90 max-sm:scale-80"
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
                  className="absolute -inset-[18px] rounded-full bg-radial-gradient-[circle,rgba(34,211,238,0.5),transparent_70%] blur-[12px] will-change-transform pointer-events-none"
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
                className={`relative w-[180px] py-4 px-4.5 bg-gradient-to-br from-[rgba(34,211,238,0.08)] to-[rgba(37,99,235,0.05)] border-[1.5px] border-[rgba(34,211,238,0.2)] rounded-[14px] backdrop-blur-[20px] transition-all duration-300 ${
                  isActive ? "shadow-[0_0_28px_rgba(34,211,238,0.6),inset_0_0_12px_rgba(34,211,238,0.2)]" : isCompleted ? "shadow-[0_0_12px_rgba(34,211,238,0.3)]" : "shadow-[0_0_8px_rgba(96,165,250,0.15)]"
                }`}
                animate={{
                  scale: isActive ? 1.02 : 1,
                }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                }}
              >
                <h3 className="text-sm font-bold text-white m-0 leading-none">{node.title}</h3>
                <p className="text-xs text-text-secondary m-0 mt-1 leading-tight">{node.subtitle}</p>

                {/* Checkmark */}
                {isCompleted && (
                  <motion.div
                    className="absolute top-1 right-1 text-xs font-bold text-turquoise"
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

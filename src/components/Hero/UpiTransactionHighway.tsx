"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import styles from "../../styles/UpiTransactionHighway.module.scss";

interface Token {
  id: number;
  laneIndex: number;
  speed: number;
  delay: number;
  size: number;
}

// Milestone node positions along the highway (0-100%)
const milestoneNodes = [
  { label: "QR", position: 15 },
  { label: "UPI", position: 40 },
  { label: "Bank", position: 65 },
  { label: "Settlement", position: 90 },
];

// Lane definitions with SVG path curves
const lanes = [
  {
    id: "lane1",
    d: "M 0,80 Q 400,50 800,90",
    color: "rgba(96, 165, 250, 0.5)",
  },
  {
    id: "lane2",
    d: "M 0,140 Q 400,100 800,150",
    color: "rgba(59, 130, 246, 0.4)",
  },
  {
    id: "lane3",
    d: "M 0,200 Q 400,150 800,210",
    color: "rgba(99, 102, 241, 0.35)",
  },
];

// Generate tokens for animation
function generateTokens(): Token[] {
  const tokens: Token[] = [];
  let id = 0;

  // 2-3 tokens per lane with staggered delays
  lanes.forEach((_, laneIndex) => {
    const tokensPerLane = laneIndex === 0 ? 3 : 2;
    for (let i = 0; i < tokensPerLane; i++) {
      tokens.push({
        id: id++,
        laneIndex,
        speed: 15 + Math.random() * 8, // 15-23 seconds for full animation
        delay: i * 5, // stagger tokens
        size: 10 + Math.random() * 6, // 10-16px
      });
    }
  });

  return tokens;
}

export default function UpiTransactionHighway() {
  const tokens = useMemo(() => generateTokens(), []);

  // Check for reduced motion preference
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div className={styles.container}>
      <div className={styles.glassBg} />

      <svg
        viewBox="0 0 800 280"
        preserveAspectRatio="none"
        className={styles.svg}
        width="100%"
        height="100%"
      >
        <defs>
          {/* Glow filter for lanes */}
          <filter id="laneGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Glow filter for tokens */}
          <filter id="tokenGlow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Gradient for lanes */}
          <linearGradient id="laneGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(96, 165, 250, 0)" />
            <stop offset="50%" stopColor="rgba(96, 165, 250, 0.6)" />
            <stop offset="100%" stopColor="rgba(96, 165, 250, 0)" />
          </linearGradient>
        </defs>

        {/* Draw lanes */}
        {lanes.map((lane) => (
          <path
            key={lane.id}
            d={lane.d}
            stroke={lane.color}
            strokeWidth="1.5"
            fill="none"
            filter="url(#laneGlow)"
            vectorEffect="non-scaling-stroke"
          />
        ))}

        {/* Milestone nodes */}
        {milestoneNodes.map((node, idx) => (
          <g key={`milestone-${idx}`}>
            {/* Calculate approximate position on lane (lane 2 - middle one) */}
            <motion.circle
              cx={node.position * 8}
              cy={140}
              r="6"
              fill="rgba(96, 165, 250, 0.2)"
              stroke="rgba(96, 165, 250, 0.6)"
              strokeWidth="1"
              filter="url(#tokenGlow)"
              animate={
                !prefersReducedMotion
                  ? {
                      r: [6, 8, 6],
                      fill: [
                        "rgba(96, 165, 250, 0.2)",
                        "rgba(96, 165, 250, 0.4)",
                        "rgba(96, 165, 250, 0.2)",
                      ],
                    }
                  : {}
              }
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Label */}
            <text
              x={node.position * 8}
              y={160}
              textAnchor="middle"
              fontSize="10"
              fill="rgba(96, 165, 250, 0.5)"
              fontFamily="Inter, sans-serif"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>

      {/* Tokens positioned absolutely for animation */}
      {tokens.map((token) => (
        <Token
          key={token.id}
          token={token}
          lane={lanes[token.laneIndex]}
          prefersReducedMotion={prefersReducedMotion}
        />
      ))}

      {/* Fade overlays at edges for premium look */}
      <div className={styles.fadeLeft} />
      <div className={styles.fadeRight} />

      {/* Subtle floating particles (optional ambient detail) */}
      <div className={styles.ambientParticles}>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className={styles.particle}
            animate={
              !prefersReducedMotion
                ? {
                    y: [0, -20, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }
                : {}
            }
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
            style={{
              left: `${10 + i * 10}%`,
              top: `${20 + Math.random() * 40}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

// Token component for each moving dot
function Token({
  token,
  lane,
  prefersReducedMotion,
}: {
  token: Token;
  lane: (typeof lanes)[0];
  prefersReducedMotion: boolean;
}) {
  // Parse lane path to get Y position for animation
  const getLaneYPosition = (laneIndex: number) => {
    const positions = [80, 140, 200];
    return positions[laneIndex];
  };

  const yPos = getLaneYPosition(token.laneIndex);

  return (
    <motion.div
      className={styles.token}
      style={{
        position: "absolute",
        width: token.size,
        height: token.size,
        borderRadius: "50%",
        background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), ${lane.color})`,
        boxShadow: `0 0 ${token.size * 1.5}px ${lane.color}, inset 0 0 ${token.size * 0.5}px rgba(255,255,255,0.5)`,
        filter: "drop-shadow(0 0 4px rgba(96, 165, 250, 0.6))",
      }}
      animate={
        !prefersReducedMotion
          ? {
              left: ["0%", "100%"],
              top: `${(yPos / 280) * 100}%`,
            }
          : {
              left: "0%",
              top: `${(yPos / 280) * 100}%`,
            }
      }
      transition={
        !prefersReducedMotion
          ? {
              duration: token.speed,
              repeat: Infinity,
              ease: "linear",
              delay: token.delay,
            }
          : {}
      }
    />
  );
}

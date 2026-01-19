"use client";

import { motion } from "framer-motion";
import styles from "./FinTechNetwork.module.scss";

const networkNodes = [
  { id: 1, label: "UPI", x: "20%", y: "30%" },
  { id: 2, label: "Gateway", x: "50%", y: "15%" },
  { id: 3, label: "Payouts", x: "80%", y: "35%" },
  { id: 4, label: "Settlement", x: "65%", y: "70%" },
  { id: 5, label: "Analytics", x: "25%", y: "75%" },
];

const floatingDots = Array.from({ length: 40 }).map((_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 4 + 6,
  delay: Math.random() * 2,
}));

export function FinTechNetwork() {
  return (
    <div className={styles.container}>
      {/* Background floating dots */}
      {floatingDots.map((dot) => (
        <motion.div
          key={`dot-${dot.id}`}
          className={styles.floatingDot}
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            delay: dot.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* SVG Network Lines */}
      <svg className={styles.networkLines} viewBox="0 0 500 500">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(37, 99, 235, 0.4)" />
            <stop offset="100%" stopColor="rgba(46, 230, 214, 0.4)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Central core node */}
        <circle cx="250" cy="250" r="8" fill="url(#lineGradient)" filter="url(#glow)" />

        {/* Lines to nodes */}
        {networkNodes.map((node, index) => {
          const x = parseInt(node.x) * 5;
          const y = parseInt(node.y) * 5;
          return (
            <motion.line
              key={`line-${index}`}
              x1="250"
              y1="250"
              x2={x}
              y2={y}
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
              opacity="0.3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{
                duration: 1.2,
                delay: 0.5 + index * 0.15,
                ease: "easeOut",
              }}
            />
          );
        })}

        {/* Animated connecting lines */}
        {networkNodes.map((node, index) => {
          const nextNode = networkNodes[(index + 1) % networkNodes.length];
          const x1 = parseInt(node.x) * 5;
          const y1 = parseInt(node.y) * 5;
          const x2 = parseInt(nextNode.x) * 5;
          const y2 = parseInt(nextNode.y) * 5;
          return (
            <motion.line
              key={`connect-${index}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="url(#lineGradient)"
              strokeWidth="1"
              opacity="0.15"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.15, 0.3, 0.15] }}
              transition={{
                duration: 3,
                delay: 1 + index * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </svg>

      {/* Network Nodes */}
      {networkNodes.map((node, index) => (
        <motion.div
          key={`node-${node.id}`}
          className={styles.node}
          style={{
            left: node.x,
            top: node.y,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.6 + index * 0.1,
            ease: [0.34, 1.56, 0.64, 1],
          }}
          whileHover={{ scale: 1.15 }}
        >
          {/* Glow ring */}
          <motion.div
            className={styles.nodeGlow}
            animate={{
              boxShadow: [
                "0 0 20px rgba(37, 99, 235, 0.4)",
                "0 0 40px rgba(37, 99, 235, 0.6)",
                "0 0 20px rgba(37, 99, 235, 0.4)",
              ],
            }}
            transition={{
              duration: 2 + index * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Node Content */}
          <div className={styles.nodeContent}>
            <div className={styles.nodeDot} />
            <span className={styles.nodeLabel}>{node.label}</span>
          </div>
        </motion.div>
      ))}

      {/* Central pulsing node */}
      <motion.div
        className={styles.centralNode}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className={styles.centralGlow} />
        <div className={styles.centralDot} />
      </motion.div>
    </div>
  );
}

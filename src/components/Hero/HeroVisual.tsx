"use client";

import { motion } from "framer-motion";
import styles from "./HeroVisual.module.css";

const paymentNodes = [
  { label: "UPI", delay: 0 },
  { label: "Gateway", delay: 0.1 },
  { label: "Payouts", delay: 0.2 },
];

export function HeroVisual() {
  return (
    <div className={styles.container}>
      {/* Central node */}
      <div className={styles.centerNode}>
        <div className={styles.centerGlow} />
        <div className={styles.centerDot} />
      </div>

      {/* Floating payment cards */}
      {(paymentNodes ?? []).map((node, index) => (
        <motion.div
          key={node.label}
          className={styles.node}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 + node.delay }}
          style={{
            animationDelay: `${index * 0.2}s`,
          }}
        >
          <div className={styles.nodeGlow} />
          <div className={styles.nodeCard}>
            <span className={styles.nodeLabel}>{node.label}</span>
          </div>
        </motion.div>
      ))}

      {/* Connecting lines */}
      <svg className={styles.lines} viewBox="0 0 400 400">
        {(paymentNodes ?? []).map((_, index) => {
          const angle = (index / paymentNodes.length) * Math.PI * 2;
          const x1 = 200;
          const y1 = 200;
          const x2 = 200 + Math.cos(angle) * 120;
          const y2 = 200 + Math.sin(angle) * 120;
          return (
            <motion.line
              key={index}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="url(#gradient)"
              strokeWidth="2"
              opacity={0.3}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
            />
          );
        })}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#2EE6D6" stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating dots */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className={styles.floatingDot}
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./Metrics.module.css";

const metrics = [
  {
    number: 10,
    suffix: "+",
    label: "Aggregator & Banking Alliances",
    delay: 0.1,
  },
  {
    number: 5,
    suffix: "+",
    label: "Coverage – Cities",
    delay: 0.2,
  },
  {
    number: 1000,
    suffix: "+",
    label: "Happy Merchants",
    delay: 0.3,
  },
  {
    number: "0",
    suffix: "/7",
    label: "Service Support",
    delay: 0.4,
    isStatic: true,
  },
];

// Counter Component
function Counter({ 
  target, 
  suffix, 
  isStatic 
}: { 
  target: number | string; 
  suffix: string; 
  isStatic?: boolean;
}) {
  const [count, setCount] = useState(0);
  const numTarget = typeof target === "string" ? parseInt(target) : target;

  useEffect(() => {
    if (isStatic) return;

    let startTime: number;
    const duration = 2000; // 2 second animation

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuad = 1 - Math.pow(1 - progress, 2);
      setCount(Math.floor(numTarget * easeOutQuad));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(numTarget);
      }
    };

    requestAnimationFrame(animate);
  }, [numTarget, isStatic]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export function Metrics() {
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleInView = (inView: boolean) => {
    if (inView && !hasAnimated) {
      setIsInView(true);
      setHasAnimated(true);
    }
  };

  return (
    <motion.section
      className={styles.metrics}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      onViewportEnter={() => handleInView(true)}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.container}>
        {(metrics ?? []).map((metric, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 20, rotateX: 90 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              delay: metric.delay,
              ease: "easeOut",
            }}
            whileHover={{
              y: -8,
              scale: 1.05,
              rotateX: 5,
              rotateY: Math.random() > 0.5 ? 8 : -8,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
            }}
            style={{
              perspective: "1000px",
            }}
          >
            <motion.div
              className={styles.number}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.5,
                delay: metric.delay + 0.2,
              }}
            >
              {hasAnimated && isInView ? (
                <Counter
                  target={metric.number}
                  suffix={metric.suffix}
                  isStatic={metric.isStatic}
                />
              ) : (
                <>
                  {metric.number}
                  {metric.suffix}
                </>
              )}
            </motion.div>
            <div className={styles.label}>{metric.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
      className="py-20 lg:py-20 bg-primary relative max-md:py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      onViewportEnter={() => handleInView(true)}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-20 grid grid-cols-4 gap-6 perspective max-lg:grid-cols-2 max-lg:px-10 max-md:grid-cols-1 max-md:px-6 max-md:gap-4">
        {(metrics ?? []).map((metric, index) => (
          <motion.div
            key={index}
            className="bg-[rgba(20,35,60,0.6)] backdrop-blur-glass border border-[rgba(255,255,255,0.06)] rounded-3xl px-6 py-8 text-center transition-all duration-300 cursor-default transform-gpu max-md:px-5 max-md:py-6 hover:border-[rgba(96,165,250,0.3)] hover:bg-[rgba(20,35,60,0.8)] hover:shadow-[0_8px_24px_rgba(37,99,235,0.15)]"
            initial={{ opacity: 0, y: 5, rotateX: 90 }}
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
              className="text-5xl font-bold text-white leading-tight mb-2 max-md:text-4xl bg-gradient-to-r from-[#60A5FA] to-[#2ee6d6] bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: metric.delay + 0.2,
                ease: "easeOut",
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
            <div className="text-sm font-medium text-text-secondary leading-relaxed max-md:text-xs">{metric.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

"use client";

import { motion } from "framer-motion";

const paymentNodes = [
  { label: "UPI", delay: 0 },
  { label: "Gateway", delay: 0.1 },
  { label: "Payouts", delay: 0.2 },
];

export function HeroVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Central node */}
      <div className="absolute w-[120px] h-[120px] flex items-center justify-center z-[2] max-md:w-[80px] max-md:h-[80px]">
        <div className="absolute w-full h-full rounded-full bg-gradient-radial from-[rgba(37,99,235,0.4)] to-transparent animate-pulse" />
        <div className="relative w-4 h-4 rounded-full bg-gradient-to-br from-primary-blue to-turquoise shadow-[0_0_20px_rgba(37,99,235,0.6)] z-[3] max-md:w-3 max-md:h-3" />
      </div>

      {/* Floating payment cards */}
      {(paymentNodes ?? []).map((node, index) => (
        <motion.div
          key={node.label}
          className="absolute w-[140px] h-20 animate-float max-md:w-[100px] max-md:h-[60px]"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 + node.delay }}
          style={{
            animationDelay: `${index * 0.2}s`,
          }}
        >
          <div className="absolute w-full h-full rounded-2xl bg-[rgba(37,99,235,0.1)] backdrop-blur-glass border border-[rgba(96,165,250,0.2)] animate-glow" />
          <div className="relative w-full h-full flex items-center justify-center rounded-2xl bg-[rgba(20,35,60,0.6)] backdrop-blur-glass border border-[rgba(255,255,255,0.08)] z-[1] transition-all duration-300 hover:translate-y-[-4px] hover:border-[rgba(96,165,250,0.4)] hover:shadow-[0_8px_24px_rgba(37,99,235,0.2)]">
            <span className="text-sm font-semibold text-white tracking-wider max-md:text-xs">{node.label}</span>
          </div>
        </motion.div>
      ))}

      {/* Connecting lines */}
      <svg className="absolute w-full h-full top-0 left-0 pointer-events-none z-[1]" viewBox="0 0 400 400">
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
          className="absolute w-1 h-1 rounded-full bg-turquoise opacity-30 pointer-events-none z-0"
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

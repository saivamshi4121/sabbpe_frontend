"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  radius: number;
  duration: number;
}

interface Label {
  id: number;
  text: string;
  position: "top-left" | "top-right" | "right" | "bottom-right" | "bottom-left";
}

// Generate particles for the orb
const generateParticles = (): Particle[] => {
  const particles: Particle[] = [];
  const count = 14;

  for (let i = 0; i < count; i++) {
    particles.push({
      id: i,
      radius: 30 + Math.random() * 50, // 30-80px from center
      duration: 12 + Math.random() * 8, // 12-20s rotation
    });
  }

  return particles;
};

// Labels around the orb
const labels: Label[] = [
  { id: 0, text: "UPI", position: "top-left" },
  { id: 1, text: "Gateway", position: "top-right" },
  { id: 2, text: "Payouts", position: "right" },
  { id: 3, text: "Settlement", position: "bottom-right" },
  { id: 4, text: "Analytics", position: "bottom-left" },
];

// Individual particle component
function Particle({ particle }: { particle: Particle }) {
  const angle = Math.random() * 360;

  return (
    <motion.div
      className="absolute flex items-center justify-center rounded-full"
      animate={{ rotate: 360 }}
      transition={{
        duration: particle.duration,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        width: particle.radius * 2,
        height: particle.radius * 2,
      }}
    >
      <motion.div
        className="w-1.5 h-1.5 bg-gradient-to-br from-[rgba(46,230,214,0.8)] to-[rgba(37,99,235,0.4)] rounded-full"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          boxShadow: "0 0 8px rgba(46, 230, 214, 0.6), 0 0 16px rgba(37, 99, 235, 0.3)"
        }}
      />
    </motion.div>
  );
}

// Individual label component
function PaymentLabel({
  label,
  index,
}: {
  label: Label;
  index: number;
}) {
  const labelVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      className="absolute flex items-center justify-center cursor-pointer z-20"
      variants={labelVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      style={{
        ...(label.position === "top-left" && { top: "-30px", left: "-60px" }),
        ...(label.position === "top-right" && { top: "-30px", right: "-60px" }),
        ...(label.position === "right" && { right: "-80px", top: "50%", transform: "translateY(-50%)" }),
        ...(label.position === "bottom-right" && { bottom: "-30px", right: "-60px" }),
        ...(label.position === "bottom-left" && { bottom: "-30px", left: "-60px" }),
      }}
    >
      <div className="flex items-center justify-center px-4 py-2 rounded-lg font-semibold text-xs text-white letter-spacing-0.5 whitespace-nowrap transition-all duration-300"
        style={{
          background: "rgba(255, 255, 255, 0.04)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          boxShadow: "0 4px 16px rgba(37, 99, 235, 0.15)"
        }}
      >{label.text}</div>
    </motion.div>
  );
}

export function GlassPaymentOrb() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setParticles(generateParticles());

    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const orbVariants = {
    animate: prefersReducedMotion
      ? {}
      : {
          y: [0, -20, 0],
          rotate: 360,
        },
  };

  const orbTransition = prefersReducedMotion
    ? {}
    : {
        y: {
          duration: 6,
          repeat: Infinity,
          ease: [0.43, 0.13, 0.23, 0.96] as any,
        },
        rotate: {
          duration: 40,
          repeat: Infinity,
          ease: [0, 0, 1, 1] as any,
        },
      };

  return (
    <div className="relative w-full h-full flex items-center justify-center min-h-[400px] max-md:min-h-[350px]">
      {/* Background glow effect */}
      <div className="absolute w-[500px] h-[500px] max-lg:w-[350px] max-lg:h-[350px] max-md:w-[280px] max-md:h-[280px] rounded-full blur-[40px] pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
        style={{
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, rgba(46, 230, 214, 0.08) 40%, transparent 70%)"
        }}
      />

      {/* Main orb */}
      <motion.div
        className="relative w-[360px] h-[360px] max-lg:w-[300px] max-lg:h-[300px] max-md:w-[260px] max-md:h-[260px] max-sm:w-[220px] max-sm:h-[220px] rounded-full flex items-center justify-center overflow-hidden z-10 flex-shrink-0"
        variants={{
          animate: !false // Default not reduced motion
            ? {
                y: [0, -20, 0],
                rotate: 360,
              }
            : {},
        }}
        animate="animate"
        transition={{
          y: {
            duration: 6,
            repeat: Infinity,
            ease: [0.43, 0.13, 0.23, 0.96] as any,
          },
          rotate: {
            duration: 40,
            repeat: Infinity,
            ease: [0, 0, 1, 1] as any,
          },
        }}
        style={{
          background: "rgba(255, 255, 255, 0.04)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          boxShadow: "0 0 60px rgba(37, 99, 235, 0.2), 0 0 120px rgba(46, 230, 214, 0.1), inset 0 0 30px rgba(46, 230, 214, 0.05)"
        }}
      >
        {/* Orb inner glow effect */}
        <div className="absolute inset-0 rounded-full pointer-events-none opacity-25 transition-opacity duration-300 hover:opacity-40 z-10"
          style={{
            background: "radial-gradient(circle, rgba(46, 230, 214, 0.1) 0%, transparent 70%)"
          }}
        />

        {/* Particles inside orb */}
        <div className="absolute w-full h-full flex items-center justify-center z-20">
          {particles.map((particle) => (
            <Particle key={particle.id} particle={particle} />
          ))}
        </div>

        {/* Orb overlay gradient */}
        <div className="absolute inset-0 rounded-full pointer-events-none z-30"
          style={{
            background: "linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, transparent 50%, rgba(46, 230, 214, 0.03) 100%)"
          }}
        />
      </motion.div>

      {/* Labels around orb */}
      <div className="absolute w-full h-full flex items-center justify-center z-20">
        {labels.map((label, index) => (
          <PaymentLabel key={label.id} label={label} index={index} />
        ))}
      </div>
    </div>
  );
}

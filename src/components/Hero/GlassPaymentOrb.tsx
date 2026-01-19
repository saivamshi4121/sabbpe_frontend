"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./GlassPaymentOrb.module.scss";

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
      className={styles.particleOrbit}
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
        className={styles.particle}
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
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
      className={`${styles.label} ${styles[`label-${label.position}`]}`}
      variants={labelVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <div className={styles.labelContent}>{label.text}</div>
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
    <div className={styles.container}>
      {/* Background glow */}
      <div className={styles.backgroundGlow} />

      {/* Main orb */}
      <motion.div
        className={styles.orb}
        variants={orbVariants}
        animate="animate"
        transition={orbTransition}
      >
        {/* Orb inner glow effect */}
        <div className={styles.orbInnerGlow} />

        {/* Particles inside orb */}
        <div className={styles.particlesContainer}>
          {particles.map((particle) => (
            <Particle key={particle.id} particle={particle} />
          ))}
        </div>

        {/* Orb overlay gradient */}
        <div className={styles.orbOverlay} />
      </motion.div>

      {/* Labels around orb */}
      <div className={styles.labelsContainer}>
        {labels.map((label, index) => (
          <PaymentLabel key={label.id} label={label} index={index} />
        ))}
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import { HeroVisual } from "./HeroVisual";

const paymentChips = [
  { id: 1, label: "UPI", icon: "₹", top: "15%", left: "5%", delay: 0 },
  { id: 2, label: "QR Code", icon: "◻", top: "40%", left: "8%", delay: 0.3 },
  { id: 3, label: "Shield", icon: "🛡", top: "65%", left: "10%", delay: 0.6 },
  { id: 4, label: "Soundbox", icon: "♪", top: "80%", left: "15%", delay: 0.9 },
];

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.span
              className={styles.textReveal}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Payments Simplified.
            </motion.span>
            <br />
            <motion.span
              className={styles.highlight}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.34, 1.56, 0.64, 1] }}
            >
              Business Amplified.
            </motion.span>
          </motion.h1>
          
          <motion.p
            className={styles.subheadline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            SabbPe. India's Digital Payments Partner
          </motion.p>
          
          <motion.div
            className={styles.ctaGroup}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <motion.button
              className={styles.primaryCta}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95, y: 2 }}
              transition={{ duration: 0.2 }}
            >
              Get Started Today
            </motion.button>
            <motion.button
              className={styles.secondaryCta}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95, y: 2 }}
              transition={{ duration: 0.2 }}
            >
              Explore Solutions
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <HeroVisual />
        </motion.div>
      </div>

      {/* Floating Payment Chips */}
      {paymentChips.map((chip) => (
        <motion.div
          key={chip.id}
          className={styles.floatingChip}
          style={{
            top: chip.top,
            left: chip.left,
          }}
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 + chip.delay }}
          whileHover={{ scale: 1.15, y: -5 }}
        >
          <div className={styles.chipGlow} />
          <div className={styles.chipContent}>
            <div className={styles.chipIcon}>{chip.icon}</div>
            <div className={styles.chipLabel}>{chip.label}</div>
          </div>
        </motion.div>
      ))}
      
      {/* Background glows */}
      <div className={styles.backgroundGlow} />
      <div className={styles.backgroundGlowAnimated} />
      <div className={styles.backgroundNoise} />
    </section>
  );
}

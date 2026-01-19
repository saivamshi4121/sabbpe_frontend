"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "../../styles/HeroSection.module.scss";
import HeroBackground from "./HeroBackground";
import TypewriterText from "./TypewriterText";

const typewriterLines = [
  "Payments Simplified.",
  "Business Amplified.",
];

const badgeVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, delay: 0.3 },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.8 },
  },
  hover: {
    scale: 1.02,
    boxShadow: "0 24px 48px rgba(37, 99, 235, 0.4)",
    transition: { duration: 0.3 },
  },
  tap: {
    scale: 0.98,
  },
};

const subheadingVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, delay: 1.2 },
  },
};

export function HeroSection() {
  const [typewriterComplete, setTypewriterComplete] = useState(false);

  return (
    <section className={styles.hero}>
      {/* Animated Background */}
      <HeroBackground />

      {/* Content Container */}
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          {/* Trust Badge */}
          <motion.div
            className={styles.badge}
            variants={badgeVariants}
            initial="hidden"
            animate="visible"
          >
            <span className={styles.badgeIcon}>✅</span>
            <span className={styles.badgeText}>
              Trusted by merchants across India
            </span>
          </motion.div>

          {/* Typewriter Heading */}
          <motion.div
            className={styles.headingContainer}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <TypewriterText
              lines={typewriterLines}
              onComplete={() => setTypewriterComplete(true)}
              showCursor={true}
              cursorBlinkSpeed={500}
              typingSpeed={60}
              lineDelay={200}
              className={styles.heading}
            />
          </motion.div>

          {/* Subheading */}
          <motion.p
            className={styles.subheading}
            variants={subheadingVariants}
            initial="hidden"
            animate="visible"
          >
            SabbPe. India's Digital Payments Partner
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className={styles.buttonGroup}
            variants={subheadingVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.button
              className={`${styles.button} ${styles.buttonPrimary}`}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Get Started
              <span className={styles.buttonArrow}>→</span>
            </motion.button>

            <motion.button
              className={`${styles.button} ${styles.buttonSecondary}`}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Explore Solutions
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

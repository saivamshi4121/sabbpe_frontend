 "use client";

import { motion } from "framer-motion";
import styles from "./HeroSection.module.scss";
import { UpiPaymentFlowAnimation } from "./UpiPaymentFlowAnimation";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" } as any,
  },
};

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Left Column: Content */}
        <motion.div
          className={styles.leftColumn}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Headline */}
          <motion.div className={styles.headlineWrapper} variants={itemVariants}>
            <h1 className={styles.headline}>
              <span className={styles.headlineLine1}>Payments Simplified.</span>
              <span className={styles.headlineLine2}>
                Business <span className={styles.gradient}>Amplified.</span>
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p className={styles.subheadline} variants={itemVariants}>
            SabbPe. India's Digital Payments Partner
          </motion.p>

          {/* CTA Group */}
          <motion.div className={styles.ctaGroup} variants={itemVariants}>
            <motion.button
              className={`${styles.cta} ${styles.ctaPrimary}`}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Get Started
              <span className={styles.ctaGlow} />
            </motion.button>
            <motion.button
              className={`${styles.cta} ${styles.ctaSecondary}`}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Explore Solutions
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Column: UPI Payment Flow Animation */}
        <motion.div
          className={styles.rightColumn}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <UpiPaymentFlowAnimation />
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className={styles.backgroundGlow} />
      <div className={styles.backgroundGlowAccent} />
    </section>
  );
}

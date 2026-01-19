"use client";

import { motion } from "framer-motion";
import styles from "./FinalCTA.module.css";

export function FinalCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.content}>
            <h2 className={styles.title}>Ready to Transform Your Business?</h2>
            <p className={styles.subtitle}>
              Join thousands of businesses already using Sabbpe's payment solutions.
            </p>
            <div className={styles.buttonGroup}>
              <motion.button
                className={styles.primaryButton}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Your Journey
              </motion.button>
              <motion.button
                className={styles.secondaryButton}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Sales
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

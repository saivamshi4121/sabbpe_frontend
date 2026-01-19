"use client";

import { motion } from "framer-motion";
import styles from "./Mission.module.css";
import LivingNetworkGrid from "../mission/LivingNetworkGrid";

export function Mission() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div
            className={styles.text}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.title}>Driving Financial Inclusion Across India</h2>
            <p className={styles.description}>
              Our mission is to simplify and unify the payment ecosystem, making digital transactions accessible, secure, and seamless for every Indian business and consumer. We're committed to building technology that drives financial inclusion and empowers businesses to grow.
            </p>
            <motion.button
              className={styles.cta}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More About Us
            </motion.button>
          </motion.div>

          <motion.div
            className={styles.visual}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <LivingNetworkGrid />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

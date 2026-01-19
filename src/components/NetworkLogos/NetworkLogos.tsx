"use client";

import { motion } from "framer-motion";
import styles from "./NetworkLogos.module.css";

const logos = [
  "Yes Bank",
  "NSDL Payments Bank",
  "NTT Data",
  "Worldline",
  "Mswipe",
  "Vi",
  "Innoviti",
  "Valuedesign",
  "Unlimit",
  "FidyPay",
];

export function NetworkLogos() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Our Network: Powering Financial Ecosystems</h2>
          <p className={styles.subtitle}>
            We collaborate with a diverse and powerful network of banking, fintech, and telecommunications leaders…
          </p>
        </motion.div>

        <div className={styles.marqueeWrapper}>
          <div className={styles.marquee}>
            {[...(logos ?? []), ...(logos ?? [])].map((logo, index) => (
              <div key={index} className={styles.logoItem}>
                <span className={styles.logoText}>{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import styles from "./Incubators.module.css";

const incubators = [
  {
    name: "IIM Lucknow Incubator",
    description: "Leading incubator supporting fintech innovation",
    size: "large",
  },
  {
    name: "Nasscom Startups",
    description: "India's premier startup ecosystem enabler",
    size: "medium",
  },
  {
    name: "Wadhwani Foundation",
    description: "Driving entrepreneurship and innovation",
    size: "medium",
  },
  {
    name: "Aisino",
    description: "Payment Hardware Solutions",
    size: "small",
  },
  {
    name: "Pax",
    description: "Point of Sale Technology",
    size: "small",
  },
];

export function Incubators() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Our Foundation: Leading Incubators</h2>
          <p className={styles.subtitle}>
            Our journey to drive financial inclusion is backed by…
          </p>
        </motion.div>

        <div className={styles.networkContainer}>
          {/* SVG Connecting Lines */}
          <svg className={styles.connectionLines} viewBox="0 0 1200 600">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(96, 165, 250, 0.3)" />
                <stop offset="100%" stopColor="rgba(34, 211, 238, 0.1)" />
              </linearGradient>
            </defs>
            
            {/* Connection lines between nodes */}
            <motion.line
              x1="300" y1="150"
              x2="600" y2="300"
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
            />
            <motion.line
              x1="600" y1="150"
              x2="600" y2="300"
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
            />
            <motion.line
              x1="900" y1="150"
              x2="600" y2="300"
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4 }}
            />
            <motion.line
              x1="450" y1="450"
              x2="600" y2="300"
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5 }}
            />
            <motion.line
              x1="750" y1="450"
              x2="600" y2="300"
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.6 }}
            />
          </svg>

          <div className={styles.grid}>
            {(incubators ?? []).map((incubator, index) => (
              <motion.div
                key={index}
                className={`${styles.card} ${styles[incubator.size]}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 24px 48px rgba(37, 99, 235, 0.25)",
                }}
              >
                {/* Glowing badge */}
                <motion.div
                  className={styles.badge}
                  animate={{
                    boxShadow: [
                      "0 0 8px rgba(96, 165, 250, 0.2)",
                      "0 0 16px rgba(96, 165, 250, 0.4)",
                      "0 0 8px rgba(96, 165, 250, 0.2)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                <h3 className={styles.cardTitle}>{incubator.name}</h3>
                <p className={styles.cardDescription}>{incubator.description}</p>

                {/* Corner accent */}
                <div className={styles.accent} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

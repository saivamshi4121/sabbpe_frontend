"use client";

import { motion } from "framer-motion";
import styles from "./OEMPartners.module.css";

const partners = [
  {
    name: "Aisino",
    label: "Payment Hardware Solutions",
  },
  {
    name: "Pax",
    label: "Point of Sale Technology",
  },
];

export function OEMPartners() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Technology: World-Class Hardware
        </motion.h2>

        <div className={styles.grid}>
          {(partners ?? []).map((partner, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <h3 className={styles.partnerName}>{partner.name}</h3>
              <p className={styles.partnerLabel}>{partner.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

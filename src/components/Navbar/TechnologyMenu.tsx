"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./TechnologyMenu.module.scss";

const categories = [
  { id: "capabilities", label: "Technology Capabilities" },
  { id: "advanced", label: "Advanced Technologies" },
];

const techContent = {
  capabilities: {
    columns: [
      {
        title: "Development",
        items: [
          { name: "Custom App Development" },
          { name: "Digital Transformation" },
          { name: "Enterprise Mobility" },
        ],
      },
      {
        title: "Design & Strategy",
        items: [
          { name: "UI/UX Design Thinking" },
          { name: "Technology Consulting" },
          { name: "IT Staff Augmentation" },
        ],
      },
      {
        title: "Recruitment",
        items: [
          { name: "Managed Recruitment" },
          { name: "Talent Solutions" },
          { name: "Strategic Staffing" },
        ],
      },
    ],
  },
  advanced: {
    columns: [
      {
        title: "AI & Data",
        items: [
          { name: "Artificial Intelligence" },
          { name: "Machine Learning" },
          { name: "Big Data & Analytics" },
        ],
      },
      {
        title: "Infrastructure",
        items: [
          { name: "Cloud Computing" },
          { name: "Blockchain Development" },
          { name: "Internet of Things" },
        ],
      },
      {
        title: "Next-Gen Tech",
        items: [
          { name: "Chatbot Development" },
          { name: "Progressive Web Apps" },
          { name: "Metaverse & AR/VR" },
        ],
      },
    ],
  },
};

export function TechnologyMenu() {
  const [activeCategory, setActiveCategory] = useState("capabilities");

  return (
    <div className={styles.technologyMenu}>
      {/* Sidebar */}
      <div className={styles.sidebar}>
        {categories.map((category) => (
          <motion.button
            key={category.id}
            className={`${styles.categoryButton} ${activeCategory === category.id ? styles.active : ""}`}
            onClick={() => setActiveCategory(category.id)}
            onMouseEnter={() => setActiveCategory(category.id)}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <span className={styles.label}>{category.label}</span>
            {activeCategory === category.id && (
              <motion.div
                className={styles.activeBar}
                layoutId="techBar"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
        ))}

        {/* Tech Animation Placeholder */}
        <div className={styles.animationBox}>
          <div className={styles.animationPlaceholder}>
            <div className={styles.animationContent}>
              <span className={styles.animationTitle}>SabbPe Tech Graph</span>
              <span className={styles.animationSubtitle}>Connected innovation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className={styles.contentArea}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.2 }}
            className={styles.columnGrid}
          >
            {techContent[activeCategory as keyof typeof techContent]?.columns.map((column, idx) => (
              <div key={idx} className={styles.column}>
                <h4 className={styles.columnTitle}>{column.title}</h4>
                <ul className={styles.itemList}>
                  {column.items.map((item, itemIdx) => (
                    <motion.li
                      key={itemIdx}
                      className={styles.item}
                      whileHover={{ x: 4, backgroundColor: "rgba(37, 99, 235, 0.05)" }}
                      transition={{ duration: 0.15 }}
                    >
                      <a href="#" className={styles.itemLink}>
                        {item.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

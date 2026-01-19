"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./TechnologyMegaMenu.module.scss";

/**
 * Data types for the Technology Mega Menu
 */
interface Category {
  id: string;
  label: string;
}

interface MenuItem {
  name: string;
}

interface ContentColumn {
  title: string;
  items: MenuItem[];
}

/**
 * Technology categories displayed in the left sidebar
 */
const categories: Category[] = [
  { id: "capabilities", label: "Technology Capabilities" },
  { id: "advanced", label: "Advanced Technologies" },
];

/**
 * Mega menu content organized by category
 * Each category contains 3 columns of menu items
 */
const megaMenuContent: Record<string, ContentColumn[]> = {
  capabilities: [
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
  advanced: [
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
};

/**
 * MenuItemComponent - Reusable menu item with hover animation
 */
interface MenuItemComponentProps {
  item: MenuItem;
}

function MenuItemComponent({ item }: MenuItemComponentProps) {
  return (
    <motion.li
      className={styles.item}
      whileHover={{ x: 4 }}
      transition={{ duration: 0.15 }}
    >
      <a href="#">
        <span>{item.name}</span>
      </a>
    </motion.li>
  );
}

/**
 * CategoryButtonComponent - Reusable sidebar category button
 */
interface CategoryButtonComponentProps {
  category: Category;
  isActive: boolean;
  onHover: (categoryId: string) => void;
}

function CategoryButtonComponent({
  category,
  isActive,
  onHover,
}: CategoryButtonComponentProps) {
  return (
    <motion.button
      className={`${styles.categoryButton} ${isActive ? styles.active : ""}`}
      onClick={() => onHover(category.id)}
      onMouseEnter={() => onHover(category.id)}
      whileHover={{ x: 4 }}
      transition={{ duration: 0.15 }}
    >
      {isActive && (
        <motion.div
          className={styles.activeIndicator}
          layoutId="techActiveBar"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
      {category.label}
    </motion.button>
  );
}

/**
 * TechnologyMegaMenu - Premium mega menu for Technology dropdown
 * Features:
 * - 2 categories in sidebar
 * - 3-column layout for menu items
 * - Smooth category switching animation
 * - Hover-safe implemented at parent level
 */
export function TechnologyMegaMenu() {
  const [activeCategory, setActiveCategory] = useState<string>("capabilities");

  const content = megaMenuContent[activeCategory] || megaMenuContent.capabilities;

  return (
    <div className={styles.container}>
      {/* Left Sidebar - Categories */}
      <div className={styles.sidebar}>
        {categories.map((category) => (
          <CategoryButtonComponent
            key={category.id}
            category={category}
            isActive={activeCategory === category.id}
            onHover={setActiveCategory}
          />
        ))}

        {/* Animation Placeholder */}
        <div className={styles.animationPlaceholder}>
          <div>SabbPe Tech Graph</div>
        </div>
      </div>

      {/* Right Content Area - 3 Columns */}
      <div className={styles.content}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={styles.columnGrid}
          >
            {content.map((column, idx) => (
              <div key={idx} className={styles.column}>
                <h4 className={styles.columnTitle}>{column.title}</h4>
                <ul className={styles.itemsList}>
                  {column.items.map((item, itemIdx) => (
                    <MenuItemComponent key={itemIdx} item={item} />
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

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ProductsMegaMenu.module.scss";

/**
 * Data types for the Products Mega Menu
 */
interface Category {
  id: string;
  label: string;
}

interface MenuItem {
  name: string;
  tag?: string;
}

interface ContentColumn {
  title: string;
  items: MenuItem[];
}

/**
 * Product categories displayed in the left sidebar
 */
const categories: Category[] = [
  { id: "offline", label: "Offline Payments" },
  { id: "online", label: "Online Payments" },
  { id: "banking", label: "Banking Suite" },
  { id: "payroll", label: "Payroll & HR" },
];

/**
 * Mega menu content organized by category
 * Each category contains 3 columns of menu items
 */
const megaMenuContent: Record<string, ContentColumn[]> = {
  offline: [
    {
      title: "UPI & Assisted",
      items: [
        { name: "UPI Payments" },
        { name: "SabbPe Minis", tag: "Popular" },
        { name: "VAS" },
      ],
    },
    {
      title: "Collections & Recurring",
      items: [
        { name: "UPI Collections" },
        { name: "UPI AutoPay" },
        { name: "BBPS Services" },
      ],
    },
    {
      title: "Assisted Solutions",
      items: [
        { name: "Payment Gateway" },
        { name: "Payment Links" },
        { name: "Payment Forms" },
        { name: "Subscriptions" },
        { name: "Payouts" },
        { name: "SabbPe Integration" },
      ],
    },
  ],
  online: [
    {
      title: "Payment Processing",
      items: [
        { name: "Credit/Debit Cards" },
        { name: "Digital Wallets" },
        { name: "Net Banking" },
      ],
    },
    {
      title: "Settlement & Reporting",
      items: [
        { name: "Instant Settlement" },
        { name: "Real-time Reports" },
        { name: "Reconciliation" },
      ],
    },
    {
      title: "Integration",
      items: [
        { name: "API Integration" },
        { name: "Plugins" },
        { name: "Custom Solutions" },
      ],
    },
  ],
  banking: [
    {
      title: "Account Services",
      items: [
        { name: "Business Accounts" },
        { name: "Savings Accounts" },
        { name: "Compliance Suite" },
      ],
    },
    {
      title: "Lending Solutions",
      items: [
        { name: "Quick Loans" },
        { name: "Credit Lines" },
        { name: "Invoice Financing" },
      ],
    },
    {
      title: "Treasury Management",
      items: [
        { name: "Cash Management" },
        { name: "FX Services" },
        { name: "Hedging Tools" },
      ],
    },
  ],
  payroll: [
    {
      title: "Payroll Processing",
      items: [
        { name: "Automated Payroll" },
        { name: "Compliance Filing" },
        { name: "Tax Calculations" },
      ],
    },
    {
      title: "HR Management",
      items: [
        { name: "Leave Management" },
        { name: "Attendance Tracking" },
        { name: "Performance Reviews" },
      ],
    },
    {
      title: "Employee Benefits",
      items: [
        { name: "Insurance Plans" },
        { name: "Retirement Plans" },
        { name: "Wellness Programs" },
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
        {item.tag && <span className={styles.tag}>{item.tag}</span>}
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
          layoutId="productActiveBar"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
      {category.label}
    </motion.button>
  );
}

/**
 * ProductsMegaMenu - Premium mega menu for Products dropdown
 * Features:
 * - 4 categories in sidebar
 * - 3-column layout for menu items
 * - Smooth category switching animation
 * - Hover-safe implemented at parent level
 */
export function ProductsMegaMenu() {
  const [activeCategory, setActiveCategory] = useState<string>("offline");

  const content = megaMenuContent[activeCategory] || megaMenuContent.offline;

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
          <div>Scan & Pay</div>
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

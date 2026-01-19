"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ProductsMenu.module.scss";

const categories = [
  { id: "offline", label: "Offline Payments", icon: "💳" },
  { id: "online", label: "Online Payments", icon: "🌐" },
  { id: "banking", label: "Banking Suite", icon: "🏦" },
  { id: "payroll", label: "Payroll & HR", icon: "👥" },
];

interface MenuItem {
  name: string;
  tag?: string;
}

interface Column {
  title: string;
  items: MenuItem[];
}

const productContent: Record<string, { columns: Column[] }> = {
  offline: {
    columns: [
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
  },
  online: {
    columns: [
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
  },
  banking: {
    columns: [
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
  },
  payroll: {
    columns: [
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
  },
};

export function ProductsMenu() {
  const [activeCategory, setActiveCategory] = useState("offline");

  return (
    <div className={styles.productsMenu}>
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
            <span className={styles.icon}>{category.icon}</span>
            <span className={styles.label}>{category.label}</span>
            {activeCategory === category.id && (
              <motion.div
                className={styles.activeBar}
                layoutId="activeBar"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
        ))}

        {/* Animation Placeholder */}
        <div className={styles.animationBox}>
          <div className={styles.animationPlaceholder}>
            <div className={styles.animationContent}>
              <span className={styles.animationTitle}>Scan & Pay</span>
              <span className={styles.animationSubtitle}>UPI in seconds</span>
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
            {productContent[activeCategory as keyof typeof productContent]?.columns.map((column, idx) => (
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
                        <span>{item.name}</span>
                        {item.tag && <span className={styles.tag}>{item.tag}</span>}
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

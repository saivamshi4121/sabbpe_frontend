"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <div className="grid grid-cols-[240px_1fr] gap-12 items-start max-lg:grid-cols-[200px_1fr] max-lg:gap-8 max-md:grid-cols-1 max-md:gap-6">
      {/* Sidebar */}
      <div className="flex flex-col gap-3 pb-6">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            className={`relative px-4 py-3.5 bg-transparent text-secondary text-sm font-medium text-left cursor-pointer rounded-xl transition-all duration-200 overflow-hidden flex items-center gap-2.5 hover:text-primary hover:bg-blue hover:bg-opacity-8 ${activeCategory === category.id ? "text-primary bg-blue bg-opacity-12 border border-blue border-opacity-30" : ""}`}
            onClick={() => setActiveCategory(category.id)}
            onMouseEnter={() => setActiveCategory(category.id)}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-xl opacity-70 transition-opacity duration-200">{category.icon}</span>
            <span className="flex-1 whitespace-nowrap overflow-hidden text-ellipsis">{category.label}</span>
            {activeCategory === category.id && (
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-blue to-turquoise"
                layoutId="activeBar"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
        ))}

        {/* Animation Placeholder */}
        <div className="mt-6 pt-6 border-t border-blue border-opacity-10">
          <div className="h-30 rounded-2xl bg-gradient-to-br from-blue from-opacity-10 to-turquoise to-opacity-5 border border-blue border-opacity-20 flex items-center justify-center">
            <div className="flex flex-col items-center gap-1.5">
              <span className="text-sm font-semibold text-primary tracking-widest">Scan & Pay</span>
              <span className="text-xs text-tertiary">UPI in seconds</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="min-h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 4 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -4 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-3 gap-10 max-lg:gap-8 max-md:grid-cols-1 max-md:gap-6"
          >
            {productContent[activeCategory as keyof typeof productContent]?.columns.map((column, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <h4 className="text-sm font-semibold text-primary uppercase tracking-widest opacity-80 m-0 p-0">{column.title}</h4>
                <ul className="list-none m-0 p-0 flex flex-col gap-2">
                  {column.items.map((item, itemIdx) => (
                    <motion.li
                      key={itemIdx}
                      className="relative rounded-lg transition-all duration-200"
                      whileHover={{ x: 1, backgroundColor: "rgba(37, 99, 235, 0.05)" }}
                      transition={{ duration: 0.15 }}
                    >
                      <a href="#" className="flex items-center justify-between gap-3 px-3 py-2.5 text-secondary no-underline text-sm font-medium transition-colors duration-200 rounded-md hover:text-primary">
                        <span>{item.name}</span>
                        {item.tag && <span className="inline-flex items-center px-2 py-1 bg-blue bg-opacity-15 border border-blue border-opacity-20 rounded text-xs font-bold text-blue uppercase whitespace-nowrap flex-shrink-0 tracking-widest">{item.tag}</span>}
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

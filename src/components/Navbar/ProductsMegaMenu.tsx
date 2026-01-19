"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
      className="relative px-3 py-2.5 text-white no-underline rounded-md text-sm font-normal leading-[1.4] transition-all duration-200 flex items-center gap-2 cursor-pointer hover:bg-[rgba(37,99,235,0.15)] hover:text-turquoise hover:pl-4"
      whileHover={{ x: 4 }}
      transition={{ duration: 0.15 }}
    >
      <a href="#" className="text-inherit no-underline flex items-center gap-2 w-full">
        <span>{item.name}</span>
        {item.tag && (
          <span className="inline-flex items-center px-2 py-0.5 bg-gradient-to-br from-[rgba(37,99,235,0.3)] to-[rgba(46,230,214,0.2)] border border-[rgba(46,230,214,0.4)] rounded text-xs font-semibold text-turquoise capitalize ml-auto flex-shrink-0 tracking-wide">
            {item.tag}
          </span>
        )}
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
      className={`relative px-4 py-3 bg-transparent text-text-secondary border-none rounded-lg text-sm font-medium text-left cursor-pointer transition-all duration-200 overflow-hidden hover:text-white hover:bg-[rgba(37,99,235,0.1)] ${
        isActive ? "text-primary-blue bg-[rgba(37,99,235,0.15)]" : ""
      }`}
      onClick={() => onHover(category.id)}
      onMouseEnter={() => onHover(category.id)}
      whileHover={{ x: 4 }}
      transition={{ duration: 0.15 }}
    >
      {isActive && (
        <motion.div
          className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary-blue to-turquoise rounded-r"
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
    <div className="grid grid-cols-[200px_1fr] gap-8 max-lg:grid-cols-[160px_1fr] max-lg:gap-6 max-md:grid-cols-1 max-md:gap-4">
      {/* Left Sidebar - Categories */}
      <div className="flex flex-col gap-1 max-md:flex-row max-md:gap-2 max-md:overflow-x-auto max-md:pb-2">
        {categories.map((category) => (
          <CategoryButtonComponent
            key={category.id}
            category={category}
            isActive={activeCategory === category.id}
            onHover={setActiveCategory}
          />
        ))}

        {/* Animation Placeholder */}
        <div className="h-[120px] bg-gradient-to-br from-[rgba(37,99,235,0.1)] to-[rgba(46,230,214,0.05)] border border-[rgba(96,165,250,0.15)] rounded-lg flex items-center justify-center text-text-secondary text-xs mt-4 max-md:hidden">
          <div>Scan & Pay</div>
        </div>
      </div>

      {/* Right Content Area - 3 Columns */}
      <div className="flex flex-col gap-6 max-lg:gap-4 max-md:gap-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 4 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -4 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="grid grid-cols-3 gap-6 overflow-hidden max-lg:grid-cols-2 max-lg:gap-4 max-md:grid-cols-1 max-md:gap-3"
          >
            {content.map((column, idx) => (
              <div key={idx} className="flex flex-col gap-3">
                <h4 className="text-xs font-semibold text-text-secondary uppercase tracking-wider pb-2 border-b border-[rgba(255,255,255,0.05)]">
                  {column.title}
                </h4>
                <ul className="flex flex-col gap-2 list-none m-0 p-0">
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

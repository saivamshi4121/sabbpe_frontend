"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
      className="relative px-3 py-2.5 text-white no-underline rounded-md text-sm font-normal leading-[1.4] transition-all duration-200 flex items-center gap-2 cursor-pointer hover:bg-[rgba(37,99,235,0.15)] hover:text-turquoise hover:pl-4"
      whileHover={{ x: 4 }}
      transition={{ duration: 0.15 }}
    >
      <a href="#" className="text-inherit no-underline flex items-center gap-2 w-full">
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
        <div className="h-[140px] bg-gradient-to-br from-[rgba(37,99,235,0.1)] to-[rgba(46,230,214,0.05)] border border-[rgba(96,165,250,0.15)] rounded-lg flex items-center justify-center text-text-secondary text-xs mt-4 max-md:hidden">
          <div>SabbPe Tech Graph</div>
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

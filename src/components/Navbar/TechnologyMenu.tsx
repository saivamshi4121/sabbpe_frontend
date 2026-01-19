"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

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
    <div className="grid grid-cols-[240px_1fr] gap-12 items-start max-xl:grid-cols-[200px_1fr] max-xl:gap-8 max-md:grid-cols-1 max-md:gap-6">
      {/* Sidebar */}
      <div className="flex flex-col gap-3 pb-6">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            className={clsx(
              "relative px-4 py-3.5 bg-transparent border border-transparent rounded-xl text-text-secondary text-sm font-medium text-left cursor-pointer transition-all duration-200 overflow-hidden",
              activeCategory === category.id && "text-primary-blue bg-[rgba(37,99,235,0.12)] border-[rgba(96,165,250,0.3)]",
              activeCategory !== category.id && "hover:text-white hover:bg-[rgba(37,99,235,0.08)] hover:border-[rgba(96,165,250,0.2)]"
            )}
            onClick={() => setActiveCategory(category.id)}
            onMouseEnter={() => setActiveCategory(category.id)}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <span className="whitespace-nowrap overflow-hidden text-ellipsis">{category.label}</span>
            {activeCategory === category.id && (
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-blue to-turquoise"
                layoutId="techBar"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
        ))}

        {/* Tech Animation Placeholder */}
        <div className="mt-6 pt-6 border-t border-[rgba(96,165,250,0.1)]">
          <div className="h-[140px] rounded-xl bg-gradient-to-br from-[rgba(37,99,235,0.1)] to-[rgba(46,230,214,0.05)] border border-[rgba(96,165,250,0.2)] flex items-center justify-center">
            <div className="flex flex-col items-center gap-1.5">
              <span className="text-sm font-semibold text-white tracking-wide">SabbPe Tech Graph</span>
              <span className="text-xs text-text-secondary">Connected innovation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="min-h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-3 gap-10 max-lg:gap-8 max-md:grid-cols-1 max-md:gap-6"
          >
            {techContent[activeCategory as keyof typeof techContent]?.columns.map((column, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <h4 className="text-sm font-semibold text-white tracking-wider uppercase opacity-80 m-0 p-0">{column.title}</h4>
                <ul className="list-none m-0 p-0 space-y-0.5">
                  {column.items.map((item, itemIdx) => (
                    <motion.li
                      key={itemIdx}
                      className="p-2"
                      whileHover={{ x: 4, backgroundColor: "rgba(37, 99, 235, 0.05)" }}
                      transition={{ duration: 0.15 }}
                    >
                      <a href="#" className="text-sm text-text-secondary no-underline transition-colors duration-200 hover:text-white">
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

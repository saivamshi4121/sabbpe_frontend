"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/**
 * Icon Components - Minimal SVG icons for SaaS items
 */
const PaymentIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="2" y1="10" x2="22" y2="10" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="18" cy="16" r="1.5" fill="currentColor"/>
  </svg>
);

const GiftIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M2 8H22V21C22 22.1046 21.1046 23 20 23H4C2.89543 23 2 22.1046 2 21V8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 8V6C8 4.89543 8.89543 4 10 4H14C15.1046 4 16 4.89543 16 6V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const HeartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12V21M3 3V5M9 6V21M9 3V6M15 12V21M15 3V12M21 9V21M21 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

interface SaaSCard {
  title: string;
  subtitle: string;
  href: string;
  icon: React.ReactNode;
}

const saasCards: SaaSCard[] = [
  {
    title: "SaaS Payment Platforms",
    subtitle: "Integrated billing and invoicing",
    href: "/saas/payment-platforms",
    icon: <PaymentIcon />,
  },
  {
    title: "Gift Card Systems",
    subtitle: "Issuance and redemption management",
    href: "/saas/gift-cards",
    icon: <GiftIcon />,
  },
  {
    title: "Loyalty Platforms",
    subtitle: "Reward engines for retention",
    href: "/saas/loyalty",
    icon: <HeartIcon />,
  },
  {
    title: "Analytics Dashboards",
    subtitle: "Real-time insights and reporting",
    href: "/saas/analytics",
    icon: <ChartIcon />,
  },
];

/**
 * SaaSCard Component
 */
function SaaSCardItem({ card }: { card: SaaSCard }) {
  return (
    <Link href={card.href}>
      <motion.div
        className="group relative p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-blue-400/40 cursor-pointer transition-all duration-300"
        whileHover={{ y: -2 }}
      >
        {/* Glow background on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/5 transition-all duration-300" />

        <div className="relative z-10 flex items-start gap-3">
          {/* Icon */}
          <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 flex-shrink-0 mt-1">
            {card.icon}
          </div>

          {/* Text */}
          <div className="flex-1">
            <div className="font-semibold text-white text-sm leading-tight group-hover:text-cyan-100 transition-colors duration-300">
              {card.title}
            </div>
            <div className="text-xs text-gray-400 mt-1 group-hover:text-gray-300 transition-colors duration-300">
              {card.subtitle}
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

/**
 * SaaSMegaMenu - Premium mega menu matching reference design
 * Features:
 * - Left intro panel with CTA
 * - Right 2x2 grid of SaaS cards
 * - Glassmorphism styling
 * - Smooth Framer Motion animations
 */
export function SaaSMegaMenu() {
  return (
    <motion.div
      className="w-[920px] max-w-[920px] max-lg:w-[92vw] max-lg:max-w-[92vw] rounded-2xl backdrop-blur-2xl p-6 md:p-8"
      style={{
        background: "rgba(15, 23, 42, 0.88)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        boxShadow: "0 20px 60px rgba(0, 0, 0, 0.4)",
      }}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 md:gap-10">
        {/* Left Column - Intro Panel */}
        <motion.div
          className="flex flex-col justify-between"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
        >
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 mb-4">
              <span className="text-xs font-semibold text-blue-300 uppercase tracking-wide">
                SabbPe Enterprise
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
              SaaS Platforms
            </h3>

            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Enterprise-grade digital infrastructure built for scale and reliability. Empower your institution with our trusted fintech solutions.
            </p>
          </div>

          <Link href="/saas/payment-platforms">
            <motion.button
              className="group inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.95 }}
            >
              View SaaS Platforms
              <motion.svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial={{ x: 0 }}
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </motion.button>
          </Link>
        </motion.div>

        {/* Right Column - 2x2 Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {saasCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.15 + idx * 0.05 }}
            >
              <SaaSCardItem card={card} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

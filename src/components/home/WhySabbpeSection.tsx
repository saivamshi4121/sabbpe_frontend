"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Network, BadgeCheck, Globe } from "lucide-react";

interface WhySabbpeCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const cards: WhySabbpeCard[] = [
  {
    title: "Secure Infrastructure",
    description: "PCI-DSS Level 1 certified security protocol at every transactional layer.",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: "Scalable Architecture",
    description: "Cloud-native infrastructure that handles millions of requests with zero latency.",
    icon: <Network className="w-6 h-6" />,
  },
  {
    title: "Enterprise Compliance",
    description: "Full regulatory compliance with real-time auditing and reporting tools.",
    icon: <BadgeCheck className="w-6 h-6" />,
  },
  {
    title: "Nationwide Reach",
    description: "Direct integrations with top-tier banks serviceable across every pincode.",
    icon: <Globe className="w-6 h-6" />,
  },
];

/**
 * WhySabbpeSection - "Why SabbPe" section with clean card grid
 * Features:
 * - 4 value proposition cards
 * - Responsive grid (1 → 2 → 4 columns)
 * - Minimal icons and clean styling
 * - Staggered entry animations
 */
export function WhySabbpeSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative py-20 bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading - No animation, always visible */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why SabbPe
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
            Built for scale, engineered for reliability, and trusted by India's leading
            enterprises to handle mission-critical transactions.
          </p>
        </div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(46, 230, 214, 0.15)" }}
              transition={{ duration: 0.3 }}
              className="group relative p-6 bg-white/[0.05] border border-white/[0.1] hover:border-cyan-400/40 rounded-2xl shadow-sm backdrop-blur-sm hover:shadow-md transition-all duration-300"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-300" />

              {/* Icon */}
              <div className="relative z-10 text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-lg font-semibold text-white mb-3 leading-tight group-hover:text-cyan-100 transition-colors duration-300">
                {card.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-sm text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

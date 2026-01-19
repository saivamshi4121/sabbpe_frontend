"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Enhanced Security",
    description: "AI-powered fraud detection and real-time security monitoring",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Instant Payments",
    description: "Seamless UPI transactions with instant audio confirmations",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 16V8C20.9996 7.64928 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64928 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Unified Solutions",
    description: "All-in-one platform for merchants and consumers alike",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 16L12 11L16 15L21 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 10H18V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Business Growth",
    description: "Loyalty programs and analytics to drive customer retention",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function ValueProposition() {
  return (
    <section className="py-30 bg-primary relative overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(37,99,235,0.05)] via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-20 max-lg:px-10 max-md:px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated background glow behind heading */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[300px] blur-[100px] opacity-0 animate-pulse pointer-events-none">
            <div className="w-full h-full bg-gradient-to-r from-[#2563EB]/20 via-[#2ee6d6]/20 to-[#2563EB]/20"></div>
          </div>

          <motion.h2 
            className="text-5xl font-bold text-primary mb-4 leading-tight tracking-tight relative"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Unified Payment Solutions for Digital India
          </motion.h2>

          <motion.p 
            className="text-lg text-secondary leading-relaxed max-w-2xl mx-auto relative"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            We're building the future of financial inclusion with seamless, secure, and integrated payment technologies.
          </motion.p>
        </motion.div>

        {/* Features Grid with staggered animations */}
        <motion.div 
          className="grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {(features ?? []).map((feature, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={itemVariants}
            >
              {/* Animated glow background on hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#2563EB]/20 to-[#2ee6d6]/10 blur-xl"></div>

              {/* Main card */}
              <motion.div
                className="relative bg-glass backdrop-blur-md border border-glass rounded-3xl p-8 transition-all duration-300 cursor-default overflow-hidden h-full flex flex-col"
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Icon container with animation */}
                <motion.div
                  className="mb-5 inline-flex"
                  initial={{ opacity: 0, scale: 0.8, rotateZ: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  whileHover={{ scale: 1.15, rotateZ: 5 }}
                >
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue bg-opacity-10 text-turquoise transition-all duration-300 group-hover:bg-opacity-20 group-hover:shadow-lg shadow-[0_0_20px_rgba(46,230,214,0.1)] group-hover:shadow-[0_0_30px_rgba(46,230,214,0.2)]">
                    {feature.icon}
                  </div>
                </motion.div>

                {/* Title with staggered animation */}
                <motion.h3 
                  className="text-xl font-semibold text-primary mb-2 leading-snug"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                >
                  {feature.title}
                </motion.h3>

                {/* Description with staggered animation */}
                <motion.p 
                  className="text-sm text-secondary leading-relaxed flex-grow"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                >
                  {feature.description}
                </motion.p>

                {/* Animated bottom border on hover */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#2563EB] to-[#2ee6d6] w-0 group-hover:w-full transition-all duration-300"></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

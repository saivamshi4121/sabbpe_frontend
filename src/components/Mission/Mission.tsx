"use client";

import { motion } from "framer-motion";
import LivingNetworkGrid from "../mission/LivingNetworkGrid";

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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function Mission() {
  return (
    <section className="py-30 bg-primary relative overflow-hidden max-md:py-20">
      {/* Background gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(37,99,235,0.05)] via-transparent to-[rgba(46,230,214,0.05)] pointer-events-none"></div>

      {/* Animated glow blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#2563EB] rounded-full blur-[120px] opacity-10 pointer-events-none animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#2ee6d6] rounded-full blur-[120px] opacity-10 pointer-events-none animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-20 max-lg:px-10 max-md:px-6 relative z-10">
        <div className="grid grid-cols-2 gap-20 items-center max-lg:gap-15 max-md:grid-cols-1 max-md:gap-10">
          {/* Left Content */}
          <motion.div
            className="flex flex-col gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Title with staggered animation */}
            <motion.h2
              className="text-5xl font-bold text-white leading-tight tracking-tight m-0 max-md:text-4xl"
              variants={itemVariants}
            >
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                Driving Financial
              </motion.span>
              {" "}
              <motion.span
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] to-[#2ee6d6]"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true }}
              >
                Inclusion
              </motion.span>
              {" "}
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                Across India
              </motion.span>
            </motion.h2>

            {/* Subtitle with fade-in */}
            <motion.p
              className="text-lg text-text-secondary leading-relaxed m-0 max-md:text-base"
              variants={itemVariants}
            >
              Our mission is to simplify and unify the payment ecosystem, making digital transactions accessible, secure, and seamless for every Indian business and consumer. We're committed to building technology that drives financial inclusion and empowers businesses to grow.
            </motion.p>

            {/* CTA Button with advanced animations */}
            <motion.div
              variants={itemVariants}
              className="mt-2"
            >
              <motion.button
                className="group relative bg-transparent text-white border border-[rgba(255,255,255,0.06)] px-8 py-4 rounded-xl font-medium text-base cursor-pointer transition-all duration-300 self-start overflow-hidden"
                whileHover={{
                  scale: 1.02,
                  y: -2,
                  borderColor: "rgba(96, 165, 250, 0.4)",
                  backgroundColor: "rgba(37, 99, 235, 0.08)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Animated background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#2563EB]/20 to-[#2ee6d6]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                  aria-hidden="true"
                />

                {/* Button text with shine effect */}
                <span className="relative flex items-center gap-2">
                  Learn More About Us
                  <motion.span
                    initial={{ x: 0, opacity: 0.7 }}
                    whileHover={{ x: 4, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    →
                  </motion.span>
                </span>

                {/* Bottom border animation */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#2563EB] to-[#2ee6d6]"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Network Grid */}
          <motion.div
            className="relative w-full h-[400px] flex items-center justify-center max-md:h-[300px]"
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            {/* Glow effect behind grid */}
            <motion.div
              className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#2563EB]/10 to-[#2ee6d6]/10 blur-2xl opacity-0"
              animate={{
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Grid container */}
            <motion.div
              className="relative w-full h-full"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <LivingNetworkGrid />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

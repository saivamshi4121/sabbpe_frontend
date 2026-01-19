 "use client";

import { motion } from "framer-motion";
import { UpiPaymentFlowAnimation } from "./UpiPaymentFlowAnimation";

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
    transition: { duration: 0.6, ease: "easeOut" } as any,
  },
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center py-[120px] overflow-hidden bg-gradient-to-br from-[#0f1628] to-[#1a2a47] before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_20%_50%,rgba(37,99,235,0.05)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(46,230,214,0.03)_0%,transparent_50%)] before:pointer-events-none before:z-0 max-xl:py-[100px] max-md:py-16">
      <div className="max-w-[1440px] mx-auto px-16 grid grid-cols-2 gap-14 items-center relative z-1 max-xl:max-w-[1280px] max-xl:px-12 max-xl:gap-12 max-lg:grid-cols-1 max-lg:px-10 max-lg:gap-10 max-md:px-6 max-md:gap-8">
        {/* Left Column: Content */}
        <motion.div
          className="flex flex-col gap-8 max-w-[600px] z-2 max-md:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Headline */}
          <motion.div className="flex flex-col" variants={itemVariants}>
            <h1 className="text-6xl font-bold leading-[1.2] -tracking-[1.2px] text-white m-0 flex flex-col gap-3 max-xl:text-[56px] max-md:text-[42px] max-sm:text-8xl max-sm:gap-2">
              <span className="block">Payments Simplified.</span>
              <span className="block">
                Business <span className="bg-gradient-to-r from-primary-blue to-turquoise bg-clip-text text-transparent inline">Amplified.</span>
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p className="text-xl font-normal leading-[1.6] text-text-secondary m-0 max-w-[500px] -tracking-wide max-xl:text-lg max-md:text-base" variants={itemVariants}>
            SabbPe. India's Digital Payments Partner
          </motion.p>

          {/* CTA Group */}
          <motion.div className="flex gap-4 items-center mt-4 max-md:flex-col" variants={itemVariants}>
            <motion.button
              className="relative px-8 py-4 border-none rounded-xl text-base font-semibold cursor-pointer transition-all duration-300 overflow-hidden flex items-center justify-center min-h-[52px] bg-gradient-to-br from-primary-blue to-hover-blue text-white shadow-[0_8px_24px_rgba(37,99,235,0.25),0_0_0_0_rgba(37,99,235,0.5)] hover:shadow-[0_12px_32px_rgba(37,99,235,0.4),0_0_24px_rgba(37,99,235,0.3)] active:animate-buttonBounce max-md:w-full max-md:px-7 max-md:py-3.5 max-md:text-sm"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Get Started
              <span className="opacity-100 relative ml-1" />
            </motion.button>
            <motion.button
              className="relative px-8 py-4 bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.3)] rounded-xl text-base font-semibold cursor-pointer transition-all duration-300 flex items-center justify-center min-h-[52px] text-white hover:bg-[rgba(37,99,235,0.15)] hover:border-[rgba(37,99,235,0.5)] hover:shadow-[0_8px_24px_rgba(37,99,235,0.15)] max-md:w-full max-md:px-7 max-md:py-3.5 max-md:text-sm"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Explore Solutions
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Column: UPI Payment Flow Animation */}
        <motion.div
          className="z-2 max-lg:w-full"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <UpiPaymentFlowAnimation />
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0" />
      <div className="absolute inset-0 pointer-events-none z-0" />
    </section>
  );
}

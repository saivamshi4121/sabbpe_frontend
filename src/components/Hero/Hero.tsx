"use client";

import { motion } from "framer-motion";
import { HeroVisual } from "./HeroVisual";

const paymentChips = [
  { id: 1, label: "UPI", icon: "₹", top: "15%", left: "5%", delay: 0 },
  { id: 2, label: "QR Code", icon: "◻", top: "40%", left: "8%", delay: 0.3 },
  { id: 3, label: "Shield", icon: "🛡", top: "65%", left: "10%", delay: 0.6 },
  { id: 4, label: "Soundbox", icon: "♪", top: "80%", left: "15%", delay: 0.9 },
];

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center py-[120px] pb-20 overflow-hidden bg-primary">
      <div className="max-w-7xl mx-auto px-20 grid grid-cols-[1.2fr_1fr] gap-20 items-center relative z-10 max-lg:grid-cols-1 max-lg:gap-15 max-lg:px-10 max-md:px-6 max-md:gap-10 max-md:py-[100px] max-md:pb-15">
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h1
            className="text-7xl font-bold leading-tight tracking-tight text-white max-lg:text-5xl max-md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Payments Simplified.
            </motion.span>
            <br />
            <motion.span
              className="inline-block bg-gradient-to-r from-primary-blue to-turquoise bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.34, 1.56, 0.64, 1] }}
            >
              Business Amplified.
            </motion.span>
          </motion.h1>
          
          <motion.p
            className="text-xl font-normal leading-relaxed text-text-secondary max-w-[500px] max-md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            SabbPe. India's Digital Payments Partner
          </motion.p>
          
          <motion.div
            className="flex gap-4 mt-2 max-md:flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <motion.button
              className="bg-gradient-to-br from-primary-blue to-hover-blue text-white px-8 py-4 rounded-xl font-semibold text-base cursor-pointer transition-all duration-300 relative overflow-hidden hover:shadow-[0_0_40px_rgba(37,99,235,0.3)] hover:shadow-[0_8px_32px_rgba(37,99,235,0.6)] hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] max-md:w-full"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95, y: 2 }}
              transition={{ duration: 0.2 }}
            >
              Get Started Today
            </motion.button>
            <motion.button
              className="bg-transparent text-white border border-[rgba(255,255,255,0.06)] px-8 py-4 rounded-xl font-medium text-base cursor-pointer transition-all duration-300 relative overflow-hidden hover:border-primary-blue hover:bg-[rgba(37,99,235,0.08)] hover:shadow-md max-md:w-full"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95, y: 2 }}
              transition={{ duration: 0.2 }}
            >
              Explore Solutions
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative w-full h-[500px] flex items-center justify-center max-lg:h-[400px] max-md:h-[300px]"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <HeroVisual />
        </motion.div>
      </div>

      {/* Floating Payment Chips */}
      {paymentChips.map((chip) => (
        <motion.div
          key={chip.id}
          className="fixed w-20 h-20 rounded-[20px] flex items-center justify-center z-10 pointer-events-auto cursor-pointer max-md:w-16 max-md:h-16"
          style={{
            top: chip.top,
            left: chip.left,
          }}
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 + chip.delay }}
          whileHover={{ scale: 1.15, y: -5 }}
        >
          <div className="absolute inset-0 rounded-[20px] bg-[rgba(37,99,235,0.2)] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative w-full h-full rounded-[20px] bg-[rgba(20,35,60,0.7)] backdrop-blur-md border border-[rgba(96,165,250,0.2)] flex flex-col items-center justify-center gap-1 transition-all duration-300 shadow-md hover:border-[rgba(96,165,250,0.5)] hover:bg-[rgba(20,35,60,0.85)] hover:shadow-[0_12px_32px_rgba(37,99,235,0.3)_inset_0_0_24px_rgba(37,99,235,0.1)]">
            <div className="text-4xl font-bold text-white leading-tight">{chip.icon}</div>
            <div className="text-[10px] font-bold text-white text-center tracking-wide opacity-70 transition-opacity duration-300 group-hover:opacity-100 max-md:text-[8px]">{chip.label}</div>
          </div>
        </motion.div>
      ))}
      
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_600px_500px_at_20%_10%,rgba(37,99,235,0.2)_0%,transparent_50%),radial-gradient(ellipse_600px_500px_at_80%_90%,rgba(46,230,214,0.2)_0%,transparent_50%)]" style={{ animation: 'gradientShift 8s ease-in-out infinite' }} />
      <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_400px_300px_at_30%_50%,rgba(46,230,214,0.1)_0%,transparent_60%)]" style={{ animation: 'gradientShiftAlt 12s ease-in-out infinite 1s' }} />
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.03] bg-noise" />
    </section>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeroBackground from "./HeroBackground";
import TypewriterText from "./TypewriterText";
import Lottie from "lottie-react";
import qrAnimation from "@/assests/Scan QR Mobile Phone.json";

const typewriterLines = [
  "Payments Simplified.",
  "Business Amplified.",
];

const badgeVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, delay: 0.3 },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.8 },
  },
  hover: {
    scale: 1.02,
    boxShadow: "0 24px 48px rgba(37, 99, 235, 0.4)",
    transition: { duration: 0.3 },
  },
  tap: {
    scale: 0.98,
  },
};

const subheadingVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, delay: 1.2 },
  },
};

const floatingPillVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 1.4 + i * 0.1 },
  }),
  float: (i: number) => ({
    y: [0, -6, 0],
    transition: { 
      duration: 4.5 + i * 0.5, 
      repeat: Infinity, 
      ease: "easeInOut",
      repeatType: "loop" as const,
    },
  }),
};

export function HeroSection() {
  const [typewriterComplete, setTypewriterComplete] = useState(false);

  return (
    <section className="relative w-full py-[120px] px-16 bg-gradient-to-b from-[rgba(14,26,43,0.8)] to-[rgba(20,35,60,0.4)] overflow-hidden max-xl:py-[100px] max-xl:px-12 max-md:py-20 max-md:px-6 max-sm:py-16 max-sm:px-5">
      {/* ✅ UPGRADE 1: Background glow grid + blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0E1A2B] via-[#14233C] to-[#0E1A2B]"></div>

        {/* Glow blob 1 - top-left blue */}
        <div className="absolute -top-1/3 -left-1/4 w-[600px] h-[600px] bg-[#2563EB] rounded-full blur-[120px] opacity-25"></div>

        {/* Glow blob 2 - bottom-right cyan */}
        <div className="absolute -bottom-1/4 -right-1/3 w-[700px] h-[700px] bg-[#2ee6d6] rounded-full blur-[140px] opacity-20"></div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(96,165,250,0.05)_25%,rgba(96,165,250,0.05)_26%,transparent_27%,transparent_74%,rgba(96,165,250,0.05)_75%,rgba(96,165,250,0.05)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(96,165,250,0.05)_25%,rgba(96,165,250,0.05)_26%,transparent_27%,transparent_74%,rgba(96,165,250,0.05)_75%,rgba(96,165,250,0.05)_76%,transparent_77%,transparent)] bg-[length:50px_50px]"></div>

        {/* Noise overlay (optional - very subtle) */}
        <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><filter id=%22noise%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 result=%22noise%22/></filter><rect width=%22100%22 height=%22100%22 fill=%22white%22 filter=%22url(%23noise)%22/></svg>')]"></div>
      </div>

      {/* Animated Background */}
      <HeroBackground />

      {/* Content Container */}
      <div className="relative w-full z-10">
        <div className="grid grid-cols-2 gap-12 items-center max-lg:grid-cols-1 max-lg:gap-8">
          {/* Left Column - Text Content */}
          <div className="flex flex-col gap-8 max-md:gap-6">
            {/* Trust Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-3 bg-[rgba(46,230,214,0.08)] border border-[rgba(46,230,214,0.2)] rounded-full w-fit transition-all duration-300 hover:bg-[rgba(46,230,214,0.12)] hover:border-[rgba(46,230,214,0.3)]"
              variants={badgeVariants}
              initial="hidden"
              animate="visible"
            >
              <span className="text-base">✅</span>
              <span className="text-sm font-medium text-text-secondary tracking-wide">
                Trusted by merchants across India
              </span>
            </motion.div>

            {/* Typewriter Heading */}
            <motion.div
              className="flex flex-col"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
            >
              <TypewriterText
                lines={typewriterLines}
                onComplete={() => setTypewriterComplete(true)}
                showCursor={true}
                cursorBlinkSpeed={500}
                typingSpeed={60}
                lineDelay={200}
                className="text-[56px] leading-[1.15] font-bold -tracking-[0.5px] text-white max-xl:text-5xl max-md:text-4xl max-sm:text-3xl"
              />
            </motion.div>

            {/* Subheading */}
            <motion.p
              className="text-lg leading-[1.6] text-text-secondary m-0 max-w-[500px] max-md:text-base max-sm:text-sm"
              variants={subheadingVariants}
              initial="hidden"
              animate="visible"
            >
              SabbPe. India's Digital Payments Partner
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex gap-4 items-center flex-wrap max-sm:flex-col max-sm:gap-3 max-sm:w-full"
              variants={subheadingVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.button
                className="relative px-8 py-3.5 border-none rounded-[10px] text-base font-semibold -tracking-wide cursor-pointer flex items-center gap-2 transition-all duration-300 overflow-hidden bg-gradient-to-br from-primary-blue to-[#1d4ed8] text-white shadow-[0_8px_24px_rgba(37,99,235,0.3),0_0_0_0_rgba(37,99,235,0.5)] hover:shadow-[0_12px_32px_rgba(37,99,235,0.5),0_0_24px_rgba(37,99,235,0.3)] active:shadow-[0_4px_12px_rgba(37,99,235,0.3)] max-md:px-7 max-md:py-3 max-md:text-sm max-sm:w-full"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Get Started
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </motion.button>

              <motion.button
                className="relative px-8 py-3.5 bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.3)] rounded-[10px] text-base font-semibold -tracking-wide cursor-pointer text-white transition-all duration-300 hover:bg-[rgba(37,99,235,0.15)] hover:border-[rgba(37,99,235,0.5)] hover:shadow-[0_8px_24px_rgba(37,99,235,0.15)] active:bg-[rgba(37,99,235,0.2)] max-md:px-7 max-md:py-3 max-md:text-sm max-sm:w-full"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Explore Solutions
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column - Lottie Animation with Ring Glow + Floating Pills */}
          <div className="relative overflow-visible flex items-center justify-center max-lg:mt-8">
            {/* ✅ UPGRADE 2A: Ring glow behind illustration */}
            <motion.div
              className="absolute inset-0 max-w-[500px] mx-auto flex items-center justify-center z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {/* Glow blur circle */}
              <div className="absolute w-[450px] h-[450px] bg-[#2563EB] rounded-full blur-[70px] opacity-20"></div>

              {/* Ring border */}
              <div className="absolute w-[480px] h-[480px] rounded-full border border-white/10 opacity-30"></div>
            </motion.div>

            {/* Animation container */}
            <motion.div
              className="relative w-full max-w-[500px] z-10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Lottie
                animationData={qrAnimation}
                loop={true}
                autoplay={true}
                className="w-full h-auto"
              />
            </motion.div>

            {/* ✅ UPGRADE 2B: Floating pill tags - Fixed for no clipping */}
            <div className="absolute inset-0 max-w-[500px] mx-auto pointer-events-none overflow-visible">
              {/* Pill 1 - UPI Enabled (top-right) */}
              <motion.div
                className="absolute top-16 -right-8 max-lg:top-12 max-lg:-right-4 max-md:hidden z-20"
                variants={floatingPillVariants}
                initial="initial"
                animate="animate"
                custom={0}
                whileHover={() => ({ y: [0, -6, 0] })}
              >
                <div className="flex items-center gap-2 px-4 py-2 rounded-full min-w-max whitespace-nowrap leading-none text-sm font-medium bg-white/5 border border-white/10 backdrop-blur-md shadow-lg">
                  <div className="w-2 h-2 rounded-full bg-[#2ee6d6] flex-shrink-0"></div>
                  <span className="text-white/80">UPI Enabled</span>
                </div>
              </motion.div>

              {/* Pill 2 - Instant Settlement (middle-right) */}
              <motion.div
                className="absolute top-1/2 -right-20 -translate-y-1/2 max-lg:-right-12 max-md:hidden z-20"
                variants={floatingPillVariants}
                initial="initial"
                animate="animate"
                custom={1}
                whileHover={() => ({ y: [0, -6, 0] })}
              >
                <div className="flex items-center gap-2 px-4 py-2 rounded-full min-w-max whitespace-nowrap leading-none text-sm font-medium bg-white/5 border border-white/10 backdrop-blur-md shadow-lg">
                  <div className="w-2 h-2 rounded-full bg-[#60A5FA] flex-shrink-0"></div>
                  <span className="text-white/80">Instant Settlement</span>
                </div>
              </motion.div>

              {/* Pill 3 - Audio Confirmation (bottom-right) */}
              <motion.div
                className="absolute bottom-20 -right-12 max-lg:bottom-16 max-lg:-right-6 max-md:hidden z-20"
                variants={floatingPillVariants}
                initial="initial"
                animate="animate"
                custom={2}
                whileHover={() => ({ y: [0, -6, 0] })}
              >
                <div className="flex items-center gap-2 px-4 py-2 rounded-full min-w-max whitespace-nowrap leading-none text-sm font-medium bg-white/5 border border-white/10 backdrop-blur-md shadow-lg">
                  <div className="w-2 h-2 rounded-full bg-[#2ee6d6] flex-shrink-0"></div>
                  <span className="text-white/80">Audio Confirmation</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

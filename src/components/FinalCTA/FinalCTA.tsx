"use client";

import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section className="py-32 bg-primary relative max-lg:py-12 max-md:py-20">
      <div className="max-w-6xl mx-auto px-20 max-lg:px-10 max-md:px-6">
        <motion.div
          className="relative bg-gradient-to-br from-[rgba(37,99,235,0.1)] to-[rgba(46,230,214,0.1)] backdrop-blur-glass border border-[rgba(96,165,250,0.2)] rounded-3xl px-12 py-16 text-center overflow-hidden max-lg:px-10 max-lg:py-12 max-md:px-8 max-md:py-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative z-[1]">
            <h2 className="text-5xl font-bold text-white leading-tight mb-4 tracking-tighter max-lg:text-4xl max-md:text-3xl">Ready to Transform Your Business?</h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-8 max-md:text-base">
              Join thousands of businesses already using Sabbpe's payment solutions.
            </p>
            <div className="flex gap-4 justify-center max-md:flex-col">
              <motion.button
                className="bg-gradient-to-r from-primary-blue to-hover-blue text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-glow-blue hover:shadow-[0_8px_24px_rgba(37,99,235,0.4)]"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Your Journey
              </motion.button>
              <motion.button
                className="bg-transparent text-white border border-[rgba(255,255,255,0.2)] px-8 py-4 rounded-2xl font-medium transition-all duration-300 hover:border-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.05)]"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Sales
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

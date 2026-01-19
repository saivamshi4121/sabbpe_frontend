"use client";

import { motion } from "framer-motion";

const incubators = [
  {
    name: "IIM Lucknow Incubator",
    description: "Leading incubator supporting fintech innovation",
    size: "large",
  },
  {
    name: "Nasscom Startups",
    description: "India's premier startup ecosystem enabler",
    size: "medium",
  },
  {
    name: "Wadhwani Foundation",
    description: "Driving entrepreneurship and innovation",
    size: "medium",
  },
  {
    name: "Aisino",
    description: "Payment Hardware Solutions",
    size: "small",
  },
  {
    name: "Pax",
    description: "Point of Sale Technology",
    size: "small",
  },
];

export function Incubators() {
  return (
    <section className="py-30 bg-primary">
      <div className="max-w-7xl mx-auto px-20 max-lg:px-10 max-md:px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-primary mb-4 leading-tight tracking-tight">Our Foundation: Leading Incubators</h2>
          <p className="text-lg text-secondary leading-relaxed">
            Our journey to drive financial inclusion is backed by…
          </p>
        </motion.div>

        <div className="relative w-full h-96 flex items-center justify-center max-md:h-auto">
          {/* SVG Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none max-md:hidden" viewBox="0 0 1200 600">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(96, 165, 250, 0.3)" />
                <stop offset="100%" stopColor="rgba(34, 211, 238, 0.1)" />
              </linearGradient>
            </defs>
            
            {/* Connection lines between nodes */}
            <motion.line
              x1="300" y1="150"
              x2="600" y2="300"
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
            />
            <motion.line
              x1="600" y1="150"
              x2="600" y2="300"
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
            />
            <motion.line
              x1="900" y1="150"
              x2="600" y2="300"
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4 }}
            />
            <motion.line
              x1="450" y1="450"
              x2="600" y2="300"
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5 }}
            />
            <motion.line
              x1="750" y1="450"
              x2="600" y2="300"
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.6 }}
            />
          </svg>

          <div className="grid grid-cols-5 gap-6 w-full h-full relative z-10 items-center max-lg:gap-4 max-md:grid-cols-2 max-md:h-auto">
            {(incubators ?? []).map((incubator, index) => (
              <motion.div
                key={index}
                className="relative bg-glass backdrop-blur-md border border-glass rounded-2xl px-6 py-8 text-center transition-all duration-300 cursor-default overflow-hidden group hover:border-blue hover:bg-glass-hover hover:shadow-lg hover:-translate-y-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 24px 48px rgba(37, 99, 235, 0.25)",
                }}
              >
                {/* Glowing badge */}
                <motion.div
                  className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-blue bg-opacity-10 border border-blue border-opacity-20"
                  animate={{
                    boxShadow: [
                      "0 0 8px rgba(96, 165, 250, 0.2)",
                      "0 0 16px rgba(96, 165, 250, 0.4)",
                      "0 0 8px rgba(96, 165, 250, 0.2)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                <h3 className="text-lg font-semibold text-primary mb-2 relative z-20 leading-snug">{incubator.name}</h3>
                <p className="text-sm text-secondary relative z-20">{incubator.description}</p>

                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 w-15 h-15 border-t-2 border-l-2 border-turquoise border-opacity-30 rounded-tl-3xl z-10" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

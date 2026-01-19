"use client";

import { motion } from "framer-motion";

const partners = [
  {
    name: "Aisino",
    label: "Payment Hardware Solutions",
  },
  {
    name: "Pax",
    label: "Point of Sale Technology",
  },
];

export function OEMPartners() {
  return (
    <section className="py-30 bg-primary">
      <div className="max-w-7xl mx-auto px-20 max-lg:px-10 max-md:px-6">
        <motion.h2
          className="text-5xl font-bold text-primary mb-15 text-center leading-tight tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Technology: World-Class Hardware
        </motion.h2>

        <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto max-md:grid-cols-1 max-md:gap-5">
          {(partners ?? []).map((partner, index) => (
            <motion.div
              key={index}
              className="relative bg-glass backdrop-blur-md border border-glass rounded-3xl px-10 py-12 text-center transition-all duration-300 cursor-default overflow-hidden group hover:scale-102 hover:-translate-y-1 hover:border-blue hover:bg-glass-hover hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <h3 className="text-3xl font-bold text-primary mb-3 leading-tight">{partner.name}</h3>
              <p className="text-base text-secondary leading-relaxed">{partner.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

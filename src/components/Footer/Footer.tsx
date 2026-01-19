"use client";

import { motion } from "framer-motion";

const quickLinks = [
  { name: "Home", href: "#" },
  { name: "Solutions", href: "#solutions" },
  { name: "About Us", href: "#about" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "Contact", href: "#contact" },
];

const footerVariants = {
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
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Footer() {
  return (
    <footer className="bg-[#0F1B2E] border-t border-[rgba(96,165,250,0.1)] py-20 pb-8 relative w-full mt-auto max-md:py-15 max-md:pb-6 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(37,99,235,0.05)] via-transparent to-[rgba(46,230,214,0.05)] pointer-events-none"></div>

      <motion.div
        className="max-w-7xl mx-auto px-20 max-lg:px-10 max-md:px-6 relative z-10"
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div className="grid grid-cols-[2fr_1fr_1fr] gap-15 mb-15 max-lg:grid-cols-2 max-lg:gap-10 max-md:grid-cols-1 max-md:gap-8" variants={itemVariants}>
          {/* Brand Section */}
          <motion.div className="flex flex-col gap-3 max-lg:col-span-2" variants={itemVariants}>
            <motion.h3 
              className="text-2xl font-bold text-white m-0 tracking-tight"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              SabbPe
            </motion.h3>
            <motion.p 
              className="text-sm text-text-secondary m-0 leading-relaxed"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              India's Digital Payments Partner
            </motion.p>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="flex flex-col gap-5" variants={itemVariants}>
            <h4 className="text-base font-semibold text-white m-0">Quick Links</h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              {(quickLinks ?? []).map((link, index) => (
                <motion.li 
                  key={index} 
                  className="m-0"
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <motion.a 
                    href={link.href}
                    className="text-sm text-text-secondary no-underline transition-colors duration-200 hover:text-hover-blue inline-block"
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div className="flex flex-col gap-4" variants={itemVariants}>
            <h4 className="text-base font-semibold text-white m-0">Contact</h4>
            <motion.p 
              className="text-sm text-text-secondary m-0 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <motion.a 
                href="mailto:contact@sabbpe.com"
                className="text-text-secondary no-underline transition-colors duration-200 hover:text-hover-blue inline-block"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.95 }}
              >
                contact@sabbpe.com
              </motion.a>
            </motion.p>
            <motion.p 
              className="text-sm text-text-secondary m-0 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <motion.a 
                href="tel:+918247017667"
                className="text-text-secondary no-underline transition-colors duration-200 hover:text-hover-blue inline-block"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.95 }}
              >
                +91 8247017667
              </motion.a>
            </motion.p>
            <p className="text-sm text-text-tertiary m-0">Bengaluru, India</p>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="flex justify-between items-center pt-8 border-t border-[rgba(96,165,250,0.1)] max-md:flex-col max-md:gap-4 max-md:items-start max-md:pt-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-sm text-text-tertiary m-0"
            whileHover={{ color: "rgba(255,255,255,0.6)" }}
          >
            © {new Date().getFullYear()} SabbPe. All rights reserved.
          </motion.p>
          <motion.div 
            className="flex items-center gap-3 max-md:flex-wrap"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            viewport={{ once: true }}
          >
            <motion.a 
              href="#privacy"
              className="text-sm text-text-tertiary no-underline transition-colors duration-200 hover:text-hover-blue inline-block"
              whileHover={{ x: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              Privacy Policy
            </motion.a>
            <span className="text-text-tertiary text-sm">•</span>
            <motion.a 
              href="#terms"
              className="text-sm text-text-tertiary no-underline transition-colors duration-200 hover:text-hover-blue inline-block"
              whileHover={{ x: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              Terms and Conditions
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
}

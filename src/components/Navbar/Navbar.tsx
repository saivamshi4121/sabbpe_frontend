"use client";

import { useState, useEffect } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { ProductsMegaMenu } from "./ProductsMegaMenu";
import { TechnologyMegaMenu } from "./TechnologyMegaMenu";
import { SaaSMegaMenu } from "./SaaSMegaMenu";

/**
 * Premium Navbar with Radix UI NavigationMenu
 * Features:
 * - Hover-safe dropdown bridge prevents menu closing on cursor movement
 * - Smooth fade + slide animation (200ms)
 * - Proper z-index layering and overflow handling
 * - Escape key and click-outside close
 */
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle escape key to close dropdown
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setValue("");
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Keep menu open if clicking on trigger or menu content
      if (
        target.closest("[data-navigation-menu-trigger]") ||
        target.closest("[data-navigation-menu-content]")
      ) {
        return;
      }
      setValue("");
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className={clsx(
      "sticky top-0 z-[1000] w-full overflow-visible transition-all duration-300",
      "bg-[rgba(14,26,43,0.85)] backdrop-blur-glass backdrop-saturate-180",
      "border-b border-[rgba(96,165,250,0.15)]",
      isScrolled && "bg-[rgba(14,26,43,0.95)] backdrop-blur-[24px] backdrop-saturate-200 shadow-[0_4px_24px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.08)] border-[rgba(255,255,255,0.1)]"
    )}>
      <div className="max-w-[1600px] mx-auto px-16 grid grid-cols-[auto_1fr_auto] gap-12 h-[72px] items-center overflow-visible relative max-xl:px-12 max-xl:gap-10 max-md:px-6 max-md:gap-6 max-md:grid-cols-2">
        {/* Logo */}
        <motion.div
          className="flex items-center flex-shrink-0 cursor-pointer"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-2xl font-bold text-white tracking-tight">SabbPe</span>
        </motion.div>

        {/* Navigation Menu */}
        <NavigationMenu.Root
          value={value}
          onValueChange={setValue}
          delayDuration={150}
          skipDelayDuration={500}
          className="flex-1"
          suppressHydrationWarning
        >
          <NavigationMenu.List className="flex items-center justify-center list-none m-0 p-0 gap-3 relative max-md:hidden">
            {/* Products Mega Menu - Capsule Style */}
            <NavigationMenu.Item value="products" className="relative overflow-visible">
              <motion.div
                className={clsx(
                  "relative",
                  value === "products" && "text-white bg-[rgba(37,99,235,0.2)] border-[rgba(37,99,235,0.6)] shadow-[0_0_24px_rgba(37,99,235,0.25),inset_0_0_20px_rgba(37,99,235,0.1)]"
                )}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <NavigationMenu.Trigger
                  className={clsx(
                    "flex items-center justify-center relative px-5 py-2.5 text-text-secondary text-sm font-medium tracking-wide",
                    "bg-transparent border border-[rgba(160,174,192,0.3)] rounded-full cursor-pointer",
                    "transition-all duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] whitespace-nowrap overflow-visible",
                    "hover:text-white hover:bg-[rgba(37,99,235,0.1)] hover:border-[rgba(37,99,235,0.4)]",
                    "hover:shadow-[0_0_20px_rgba(37,99,235,0.2),inset_0_0_20px_rgba(37,99,235,0.1)]",
                    value === "products" && "text-white bg-[rgba(37,99,235,0.2)] border-[rgba(37,99,235,0.6)] shadow-[0_0_24px_rgba(37,99,235,0.25),inset_0_0_20px_rgba(37,99,235,0.1)]"
                  )}
                  data-navigation-menu-trigger="products"
                >
                  Products
                </NavigationMenu.Trigger>
              </motion.div>
              <NavigationMenu.Content
                className={clsx(
                  "fixed top-[72px] left-1/2 -translate-x-1/2",
                  "w-[1200px] max-w-[calc(100vw-32px)]",
                  "bg-[rgba(20,35,60,0.95)] backdrop-blur-xl backdrop-saturate-180",
                  "border border-[rgba(96,165,250,0.15)] rounded-3xl p-0 mt-3",
                  "shadow-[0_30px_80px_rgba(0,0,0,0.35)] z-[1001] overflow-visible pointer-events-auto",
                  "before:content-[''] before:absolute before:bottom-full before:left-1/2 before:-translate-x-1/2 before:h-3 before:pointer-events-auto"
                )}
                data-navigation-menu-content="products"
              >
                <AnimatePresence>
                  {value === "products" && (
                    <motion.div
                      initial={{ opacity: 0, y: -3 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -3 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="p-8 w-full max-lg:p-6 max-md:p-5"
                    >
                      <ProductsMegaMenu />
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            {/* SaaS Mega Menu - Capsule Style */}
            <NavigationMenu.Item value="saas" className="relative overflow-visible">
              <motion.div
                className={clsx(
                  "relative",
                  value === "saas" && "text-white bg-[rgba(37,99,235,0.2)] border-[rgba(37,99,235,0.6)] shadow-[0_0_24px_rgba(37,99,235,0.25),inset_0_0_20px_rgba(37,99,235,0.1)]"
                )}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <NavigationMenu.Trigger
                  className={clsx(
                    "flex items-center justify-center relative px-5 py-2.5 text-text-secondary text-sm font-medium tracking-wide",
                    "bg-transparent border border-[rgba(160,174,192,0.3)] rounded-full cursor-pointer",
                    "transition-all duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] whitespace-nowrap overflow-visible",
                    "hover:text-white hover:bg-[rgba(37,99,235,0.1)] hover:border-[rgba(37,99,235,0.4)]",
                    "hover:shadow-[0_0_20px_rgba(37,99,235,0.2),inset_0_0_20px_rgba(37,99,235,0.1)]",
                    value === "saas" && "text-white bg-[rgba(37,99,235,0.2)] border-[rgba(37,99,235,0.6)] shadow-[0_0_24px_rgba(37,99,235,0.25),inset_0_0_20px_rgba(37,99,235,0.1)]"
                  )}
                  data-navigation-menu-trigger="saas"
                >
                  SaaS
                </NavigationMenu.Trigger>
              </motion.div>
              <NavigationMenu.Content
                className={clsx(
                  "absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-max min-w-[800px]",
                  "bg-[rgba(20,35,60,0.9)] backdrop-blur-glass backdrop-saturate-180",
                  "border border-[rgba(96,165,250,0.15)] rounded-xl p-0 mt-[-8px]",
                  "shadow-[0_20px_64px_rgba(0,0,0,0.3)] z-[1001] overflow-visible pointer-events-auto",
                  "before:content-[''] before:absolute before:bottom-full before:left-0 before:right-0 before:h-4 before:pointer-events-auto",
                  "max-lg:min-w-[700px] max-md:min-w-[calc(100vw-48px)]"
                )}
                data-navigation-menu-content="saas"
              >
                <AnimatePresence>
                  {value === "saas" && (
                    <motion.div
                      initial={{ opacity: 0, y: -3 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -3 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="p-0 w-full max-lg:p-0 max-md:p-0"
                    >
                      <SaaSMegaMenu />
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            {/* Technology Mega Menu - Capsule Style */}
            <NavigationMenu.Item value="technology" className="relative overflow-visible">
              <motion.div
                className={clsx(
                  "relative",
                  value === "technology" && "text-white bg-[rgba(37,99,235,0.2)] border-[rgba(37,99,235,0.6)] shadow-[0_0_24px_rgba(37,99,235,0.25),inset_0_0_20px_rgba(37,99,235,0.1)]"
                )}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <NavigationMenu.Trigger
                  className={clsx(
                    "flex items-center justify-center relative px-5 py-2.5 text-text-secondary text-sm font-medium tracking-wide",
                    "bg-transparent border border-[rgba(160,174,192,0.3)] rounded-full cursor-pointer",
                    "transition-all duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] whitespace-nowrap overflow-visible",
                    "hover:text-white hover:bg-[rgba(37,99,235,0.1)] hover:border-[rgba(37,99,235,0.4)]",
                    "hover:shadow-[0_0_20px_rgba(37,99,235,0.2),inset_0_0_20px_rgba(37,99,235,0.1)]",
                    value === "technology" && "text-white bg-[rgba(37,99,235,0.2)] border-[rgba(37,99,235,0.6)] shadow-[0_0_24px_rgba(37,99,235,0.25),inset_0_0_20px_rgba(37,99,235,0.1)]"
                  )}
                  data-navigation-menu-trigger="technology"
                >
                  Technology
                </NavigationMenu.Trigger>
              </motion.div>
              <NavigationMenu.Content
                className={clsx(
                  "absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-max min-w-[1000px]",
                  "bg-[rgba(20,35,60,0.9)] backdrop-blur-glass backdrop-saturate-180",
                  "border border-[rgba(96,165,250,0.15)] rounded-xl p-0 mt-[-8px]",
                  "shadow-[0_20px_64px_rgba(0,0,0,0.3)] z-[1001] overflow-visible pointer-events-auto",
                  "before:content-[''] before:absolute before:bottom-full before:left-0 before:right-0 before:h-4 before:pointer-events-auto",
                  "max-lg:min-w-[900px] max-md:min-w-[calc(100vw-48px)]"
                )}
                data-navigation-menu-content="technology"
              >
                <AnimatePresence>
                  {value === "technology" && (
                    <motion.div
                      initial={{ opacity: 0, y: -3 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -3 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="p-8 w-full max-lg:p-6 max-md:p-5"
                    >
                      <TechnologyMegaMenu />
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            {/* Simple Navigation Links - Capsule Style */}
            {[
              { label: "Services", value: "services" },
              { label: "About Us", value: "about" },
              { label: "Contact Us", value: "contact" },
            ].map((item) => (
              <NavigationMenu.Item
                key={item.value}
                value={item.value}
                className="relative overflow-visible"
              >
                <motion.div
                  className={clsx(
                    "relative flex items-center",
                    value === item.value && "text-white bg-[rgba(37,99,235,0.2)] border-[rgba(37,99,235,0.6)] shadow-[0_0_24px_rgba(37,99,235,0.25),inset_0_0_20px_rgba(37,99,235,0.1)]"
                  )}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <NavigationMenu.Trigger
                    className={clsx(
                      "flex items-center justify-center relative px-5 py-2.5 text-text-secondary text-sm font-medium tracking-wide",
                      "bg-transparent border border-[rgba(160,174,192,0.3)] rounded-full cursor-pointer",
                      "transition-all duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] whitespace-nowrap overflow-visible",
                      "hover:text-white hover:bg-[rgba(37,99,235,0.1)] hover:border-[rgba(37,99,235,0.4)]",
                      "hover:shadow-[0_0_20px_rgba(37,99,235,0.2),inset_0_0_20px_rgba(37,99,235,0.1)]",
                      value === item.value && "text-white bg-[rgba(37,99,235,0.2)] border-[rgba(37,99,235,0.6)] shadow-[0_0_24px_rgba(37,99,235,0.25),inset_0_0_20px_rgba(37,99,235,0.1)]"
                    )}
                    data-navigation-menu-trigger={item.value}
                  >
                    {item.label}
                  </NavigationMenu.Trigger>
                </motion.div>
              </NavigationMenu.Item>
            ))}          </NavigationMenu.List>
        </NavigationMenu.Root>
      </div>
    </nav>
  );
}
"use client";

import { useState, useEffect } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import styles from "./Navbar.module.scss";
import { ProductsMegaMenu } from "./ProductsMegaMenu";
import { TechnologyMegaMenu } from "./TechnologyMegaMenu";

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
    <nav className={clsx(styles.navbar, isScrolled && styles.scrolled)}>
      <div className={styles.container}>
        {/* Logo */}
        <motion.div
          className={styles.logo}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <span className={styles.logoText}>SabbPe</span>
        </motion.div>

        {/* Navigation Menu */}
        <NavigationMenu.Root
          value={value}
          onValueChange={setValue}
          delayDuration={150}
          skipDelayDuration={500}
          className={styles.navigationMenu}
          suppressHydrationWarning
        >
          <NavigationMenu.List className={styles.menuList}>
            {/* Products Mega Menu - Capsule Style */}
            <NavigationMenu.Item value="products" className={styles.menuItem}>
              <motion.div
                className={clsx(styles.capsuleButton, value === "products" && styles.active)}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <NavigationMenu.Trigger
                  className={styles.capsuleButtonInner}
                  data-navigation-menu-trigger="products"
                >
                  Products
                </NavigationMenu.Trigger>
              </motion.div>
              <NavigationMenu.Content
                className={styles.content}
                data-navigation-menu-content="products"
              >
                <AnimatePresence>
                  {value === "products" && (
                    <motion.div
                      initial={{ opacity: 0, y: -12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className={styles.contentInner}
                    >
                      <ProductsMegaMenu />
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            {/* Technology Mega Menu - Capsule Style */}
            <NavigationMenu.Item value="technology" className={styles.menuItem}>
              <motion.div
                className={clsx(styles.capsuleButton, value === "technology" && styles.active)}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <NavigationMenu.Trigger
                  className={styles.capsuleButtonInner}
                  data-navigation-menu-trigger="technology"
                >
                  Technology
                </NavigationMenu.Trigger>
              </motion.div>
              <NavigationMenu.Content
                className={styles.content}
                data-navigation-menu-content="technology"
              >
                <AnimatePresence>
                  {value === "technology" && (
                    <motion.div
                      initial={{ opacity: 0, y: -12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className={styles.contentInner}
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
              { label: "SaaS", value: "saas" },
              { label: "About Us", value: "about" },
              { label: "Contact Us", value: "contact" },
            ].map((item) => (
              <NavigationMenu.Item
                key={item.value}
                value={item.value}
                className={styles.menuItem}
              >
                <motion.div
                  className={clsx(styles.capsuleLink, value === item.value && styles.active)}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <NavigationMenu.Link
                    className={styles.capsuleLinkInner}
                    href={`#${item.value}`}
                    onClick={() => setValue("")}
                  >
                    {item.label}
                  </NavigationMenu.Link>
                </motion.div>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>

          {/* Viewport - Positioned absolutely for proper dropdown layering */}
          <div className={styles.viewportWrapper}>
            <NavigationMenu.Viewport className={styles.viewport} />
          </div>
        </NavigationMenu.Root>


      </div>
    </nav>
  );
}

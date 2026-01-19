"use client";

import { motion } from "framer-motion";
import styles from "./Footer.module.css";

const quickLinks = [
  { name: "Home", href: "#" },
  { name: "Solutions", href: "#solutions" },
  { name: "About Us", href: "#about" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logoSection}>
            <h3 className={styles.logo}>SabbPe</h3>
            <p className={styles.tagline}>
              India's Digital Payments Partner
            </p>
          </div>

          <div className={styles.linksSection}>
            <h4 className={styles.linksTitle}>Quick Links</h4>
            <ul className={styles.linksList}>
              {(quickLinks ?? []).map((link, index) => (
                <li key={index}>
                  <a href={link.href} className={styles.link}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.contactSection}>
            <h4 className={styles.contactTitle}>Contact</h4>
            <p className={styles.contactItem}>
              <a href="mailto:contact@sabbpe.com" className={styles.link}>
                contact@sabbpe.com
              </a>
            </p>
            <p className={styles.contactItem}>
              <a href="tel:+918247017667" className={styles.link}>
                +91 8247017667
              </a>
            </p>
            <p className={styles.location}>Bengaluru, India</p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} SabbPe. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <a href="#privacy" className={styles.legalLink}>
              Privacy Policy
            </a>
            <span className={styles.separator}>•</span>
            <a href="#terms" className={styles.legalLink}>
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

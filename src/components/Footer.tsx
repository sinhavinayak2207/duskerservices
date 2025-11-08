"use client";
import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerMain}>
        <div className={styles.logoCol}>
          <div className={styles.logoWrapper}>
            <Image 
              src="https://raw.githubusercontent.com/sinhabinayak2207/duskerservices/main/public/duskerlogonew.jpg"
              alt="Dusker Logo"
              width={48}
              height={48}
              className={styles.footerLogo}
            />
            <span style={{ fontSize: '24px' }}>Dusker AI</span>
          </div>
          <div className={styles.tagline}>Next-level AI Training & Evaluation</div>
          <div className={styles.socialLinks}>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
           
          </div>
        </div>
        <div className={styles.linksCol}>
          <div className={styles.linksTitle}>Products</div>
          <Link href="/products/for-enterprise" className={styles.link}>Enterprise</Link>
          
         
         
          <Link href="/products/for-government" className={styles.link}>Government</Link>
          
          
          <Link href="/products/for-generative-ai" className={styles.link}>Generative AI</Link>
          <Link href="/products/for-automotive" className={styles.link}>Automotive</Link>
          <Link href="/products/scale-data-engine" className={styles.link}>Data Engine</Link>
        </div>
        <div className={styles.linksCol}>
          <div className={styles.linksTitle}>Solutions</div>
          <Link href="/solutions/training-pipelines" className={styles.link}>AI Pipeline</Link>
          <Link href="/solutions/data-annotation" className={styles.link}>Data Labeling</Link>
          <Link href="/solutions/model-evaluation" className={styles.link}>Model Evaluation</Link>
          <Link href="/solutions/deployment" className={styles.link}>Deployment</Link>
        </div>
        <div className={styles.linksCol}>
          <div className={styles.linksTitle}>Resources</div>
          <Link href="/contact" className={styles.link}>Contact</Link>
        </div>
        <div className={styles.newsletterCol}>
          <div className={styles.newsletterTitle}>Subscribe to our Newsletter</div>
          <div className={styles.newsletterDescription}>Get the latest updates on AI training and evaluation technologies</div>
          <Image 
            src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=1974&auto=format&fit=crop"
            alt="Newsletter illustration"
            width={200}
            height={120}
            className={styles.newsletterImage}
          />
          <form className={styles.newsletterForm} onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Your email" className={styles.emailInput} required />
            <button type="submit" className={styles.subscribeBtn}>
              Subscribe
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </form>
        </div>
      </div>
      <motion.div 
        className={styles.footerBottom}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className={styles.footerBottomLeft}>
          <span>&copy; 2025 Dusker Education Services. All rights reserved.</span>
        </div>
        <div className={styles.footerBottomRight}>
          <Link href="/contact" className={styles.footerLink}>Contact</Link>
          <Link href="/privacy" className={styles.footerLink}>Privacy Policy</Link>
          <Link href="/terms" className={styles.footerLink}>Terms of Service</Link>
          <Link href="/cookies" className={styles.footerLink}>Cookie Policy</Link>
        </div>
      </motion.div>
    </footer>
  );
}

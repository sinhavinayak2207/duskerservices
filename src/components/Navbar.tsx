"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';

const products = [
  { 
    name: 'Scale Data Engine', 
    path: '/products/scale-data-engine',
    icon: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=1932&auto=format&fit=crop',
    description: 'Data labeling and annotation platform'
  },
  { 
    name: 'For Generative AI', 
    path: '/products/for-generative-ai',
    icon: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop',
    description: 'Solutions for generative AI models'
  },
  { 
    name: 'For Government', 
    path: '/products/for-government',
    icon: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=2069&auto=format&fit=crop',
    description: 'AI solutions for government agencies'
  },
  { 
    name: 'For Automotive', 
    path: '/products/for-automotive',
    icon: 'https://images.unsplash.com/photo-1553260168-69b041873e65?q=80&w=1974&auto=format&fit=crop',
    description: 'AI training for autonomous vehicles'
  },
 
  
  
 
  { 
    name: 'For Enterprise', 
    path: '/products/for-enterprise',
    icon: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop',
    description: 'Enterprise-grade AI training solutions'
  },
];

const solutions = [
  { 
    name: 'AI Training Pipelines', 
    path: '/solutions/training-pipelines',
    icon: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2068&auto=format&fit=crop',
    description: 'End-to-end AI training workflows'
  },
  { 
    name: 'Data Annotation', 
    path: '/solutions/data-annotation',
    icon: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    description: 'High-quality data labeling services'
  },
  { 
    name: 'Model Evaluation', 
    path: '/solutions/model-evaluation',
    icon: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop',
    description: 'Comprehensive model testing suite'
  },
  { 
    name: 'Deployment', 
    path: '/solutions/deployment',
    icon: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    description: 'Seamless AI model deployment'
  },
];

const resources = [
  { 
    name: 'Docs', 
    path: '/resources/docs',
    icon: 'https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?q=80&w=2068&auto=format&fit=crop',
    description: 'Product documentation'
  },
  { 
    name: 'API Reference', 
    path: '/resources/api',
    icon: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=2066&auto=format&fit=crop',
    description: 'API documentation and examples'
  },
  { 
    name: 'Guides', 
    path: '/resources/guides',
    icon: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
    description: 'Step-by-step implementation guides'
  },
  { 
    name: 'Community', 
    path: '/resources/community',
    icon: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop',
    description: 'Join our developer community'
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    function handleClick(e: MouseEvent) {
      const nav = document.querySelector(`.${styles.navbar}`);
      if (nav && !nav.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleDropdown = (name: string) => {
    setOpenDropdown(prevState => prevState === name ? null : name);
  };
  
  // Prevent closing dropdown when clicking inside it
  const handleDropdownContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  
  // Effect to close dropdown when clicking outside
  useEffect(() => {
    const closeDropdown = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(`.${styles.dropdown}`)) {
        setOpenDropdown(null);
      }
    };
    
    document.addEventListener('click', closeDropdown);
    return () => document.removeEventListener('click', closeDropdown);
  }, [styles.dropdown]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoNav}>
      <Link href="/" className={styles.logoLink} style={{ marginRight: '10rem' }}>
  <motion.div 
    className={styles.logo}
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    style={{ display: 'flex', alignItems: 'center', gap: '8px' }} // <-- add this
  >
    <Image 
      src="https://raw.githubusercontent.com/sinhabinayak2207/duskerservices/main/public/duskerlogonew.jpg"
      alt="Dusker Logo"
      width={50}
      height={40}
      className={styles.logoImage}
      priority
    />
    <span style={{ fontSize: '24px', whiteSpace: 'nowrap' }}>Dusker AI</span> 
  </motion.div>
</Link>

        <div className={styles.desktopMenu}>
          <div
            className={styles.dropdown}
          >
            <span
              className={styles.productsLabel}
              onClick={() => handleDropdown('products')}
              tabIndex={0}
              aria-haspopup="true"
              aria-expanded={openDropdown === 'products'}
              onKeyDown={e => { if (e.key === 'Enter') handleDropdown('products'); }}
            >Products</span>
            <div
              className={`${styles.dropdownContent} ${openDropdown === 'products' ? styles.active : ''}`}
              onClick={handleDropdownContentClick}
            >
              {products.map((p) => (
                <Link key={p.path} href={p.path} className={styles.dropdownItem}>
                  <div className={styles.dropdownItemIcon}>
                    <Image 
                      src={p.icon} 
                      alt={p.name} 
                      width={40} 
                      height={40} 
                      className={styles.menuIcon}
                    />
                  </div>
                  <div className={styles.dropdownItemContent}>
                    <span className={styles.dropdownItemTitle}>{p.name}</span>
                    <span className={styles.dropdownItemDescription}>{p.description}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div
            className={styles.dropdown}
          >
            <span
              className={styles.productsLabel}
              onClick={() => handleDropdown('solutions')}
              tabIndex={0}
              aria-haspopup="true"
              aria-expanded={openDropdown === 'solutions'}
              onKeyDown={e => { if (e.key === 'Enter') handleDropdown('solutions'); }}
            >Solutions</span>
            <div
              className={`${styles.dropdownContent} ${openDropdown === 'solutions' ? styles.active : ''}`}
              onClick={handleDropdownContentClick}
            >
              {solutions.map((s) => (
                <Link key={s.path} href={s.path} className={styles.dropdownItem}>
                  <div className={styles.dropdownItemIcon}>
                    <Image 
                      src={s.icon} 
                      alt={s.name} 
                      width={40} 
                      height={40} 
                      className={styles.menuIcon}
                    />
                  </div>
                  <div className={styles.dropdownItemContent}>
                    <span className={styles.dropdownItemTitle}>{s.name}</span>
                    <span className={styles.dropdownItemDescription}>{s.description}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div
            className={styles.dropdown}
          >
            <span
              className={styles.productsLabel}
              onClick={() => handleDropdown('resources')}
              tabIndex={0}
              aria-haspopup="true"
              aria-expanded={openDropdown === 'resources'}
              onKeyDown={e => { if (e.key === 'Enter') handleDropdown('resources'); }}
            >Resources</span>
            <div
              className={`${styles.dropdownContent} ${openDropdown === 'resources' ? styles.active : ''}`}
              onClick={handleDropdownContentClick}
            >
              {resources.map((r) => (
                <Link key={r.path} href={r.path} className={styles.dropdownItem}>
                  <div className={styles.dropdownItemIcon}>
                    <Image 
                      src={r.icon} 
                      alt={r.name} 
                      width={40} 
                      height={40} 
                      className={styles.menuIcon}
                    />
                  </div>
                  <div className={styles.dropdownItemContent}>
                    <span className={styles.dropdownItemTitle}>{r.name}</span>
                    <span className={styles.dropdownItemDescription}>{r.description}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/careers" className={styles.navLink}>Careers</Link>
          <Link href="/blog" className={styles.navLink}>Blog</Link>
          <button className={styles.searchBtn} aria-label="Search">
            <span className={styles.searchIcon}></span>
          </button>
          <button className={styles.themeToggle} aria-label="Toggle theme">
            <span className={styles.themeIcon}></span>
          </button>
          <Link href="/contact" className={styles.contactBtn}>Contact</Link>
        </div>
        <button
          className={styles.hamburger}
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className={menuOpen ? styles.hamburgerActive : styles.hamburgerBox}>
            <span></span><span></span><span></span>
          </div>
        </button>
      </div>
      {menuOpen && (
        <motion.div 
          className={styles.mobileMenu}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className={styles.mobileMenuHeader}>
            <Link href="/" className={styles.logoLink} onClick={() => setMenuOpen(false)}>
              <div className={styles.logo}>
                <Image 
                  src="https://raw.githubusercontent.com/sinhabinayak2207/duskerservices/main/public/duskerlogonew.jpg"
                  alt="Dusker Logo"
                  width={40}
                  height={40}
                  className={styles.logoImage}
                />
                <span style={{ fontSize: '24px' }}>Dusker AI</span>
              </div>
            </Link>
            <button
              className={styles.closeButton}
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <span></span>
              <span></span>
            </button>
          </div>
          
          <div className={styles.mobileMenuContent}>
            <div className={styles.mobileSection}>
              <h3 className={styles.mobileSectionTitle}>Products</h3>
              <div className={styles.mobileDropdownContent}>
                {products.map((p) => (
                  <Link key={p.path} href={p.path} className={styles.mobileDropdownItem} onClick={() => setMenuOpen(false)}>
                    <div className={styles.mobileItemIcon}>
                      <Image 
                        src={p.icon} 
                        alt={p.name} 
                        width={32} 
                        height={32} 
                        className={styles.mobileMenuIcon}
                      />
                    </div>
                    <div className={styles.mobileItemContent}>
                      <span className={styles.mobileItemTitle}>{p.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            <div className={styles.mobileSection}>
              <h3 className={styles.mobileSectionTitle}>Solutions</h3>
              <div className={styles.mobileDropdownContent}>
                {solutions.map((s) => (
                  <Link key={s.path} href={s.path} className={styles.mobileDropdownItem} onClick={() => setMenuOpen(false)}>
                    <div className={styles.mobileItemIcon}>
                      <Image 
                        src={s.icon} 
                        alt={s.name} 
                        width={32} 
                        height={32} 
                        className={styles.mobileMenuIcon}
                      />
                    </div>
                    <div className={styles.mobileItemContent}>
                      <span className={styles.mobileItemTitle}>{s.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            <div className={styles.mobileSection}>
              <h3 className={styles.mobileSectionTitle}>Resources</h3>
              <div className={styles.mobileDropdownContent}>
                {resources.map((r) => (
                  <Link key={r.path} href={r.path} className={styles.mobileDropdownItem} onClick={() => setMenuOpen(false)}>
                    <div className={styles.mobileItemIcon}>
                      <Image 
                        src={r.icon} 
                        alt={r.name} 
                        width={32} 
                        height={32} 
                        className={styles.mobileMenuIcon}
                      />
                    </div>
                    <div className={styles.mobileItemContent}>
                      <span className={styles.mobileItemTitle}>{r.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            <div className={styles.mobileNavLinks}>
              <Link href="/about" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>About</Link>
              <Link href="/careers" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>Careers</Link>
              <Link href="/blog" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>Blog</Link>
              <Link href="/contact" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>Contact</Link>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

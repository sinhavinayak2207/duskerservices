"use client";
import React from "react";
import styles from "./About.module.css";
import { motion, Variants } from "framer-motion";

export default function AboutPage() {
  // Animation variants
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <main className={styles.aboutContainer}>
      {/* Hero Section */}
      <motion.section 
        className={styles.heroSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className={styles.heroTitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          About Dusker
        </motion.h1>
        <motion.p 
          className={styles.heroSubtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          We're building the next generation of AI training, evaluation, and deployment tools 
          for enterprises, governments, and developers worldwide. Our mission is to make AI safe, 
          robust, and accessible for all.
        </motion.p>
      </motion.section>

      {/* Our Story Section */}
      <motion.section 
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeIn} className={styles.sectionTitle} style={{ color: '#a8c7fa' }}>Our Story</motion.h2>
        <motion.p variants={fadeIn} className={styles.paragraph}>
          Founded in 2024 by a team of passionate AI researchers and engineers from leading tech companies and research institutions, 
          Dusker was born out of the need for better data, faster iteration, and more transparent evaluation in real-world AI applications.
        </motion.p>
        <motion.p variants={fadeIn} className={styles.paragraph}>
          What began as a small team working on improving data quality for machine learning has evolved into 
          a comprehensive platform serving enterprises, government agencies, and AI developers across the globe. 
          Our solutions have helped organizations reduce model development time by up to 60% while significantly 
          improving performance and reliability.
        </motion.p>
        <motion.p variants={fadeIn} className={styles.paragraph}>
          Today, Dusker is at the forefront of the AI revolution, providing the tools and expertise needed to 
          build and deploy AI systems that are not only powerful but also safe, ethical, and aligned with human values.
        </motion.p>

        <motion.div variants={fadeIn} className={styles.statGrid}>
          <div className={styles.statCard}>
            <span className={styles.statValue}>2024</span>
            <span className={styles.statLabel}>Founded</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue}>200+</span>
            <span className={styles.statLabel}>Team Members</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue}>6+</span>
            <span className={styles.statLabel}>Enterprise Clients</span>
          </div>
        </motion.div>
      </motion.section>

      {/* What We Do Section */}
      <motion.section 
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeIn} className={styles.sectionTitle} style={{ color: '#a8c7fa' }}>What We Do</motion.h2>
        <motion.p variants={fadeIn} className={styles.paragraph}>
          At Dusker, we provide end-to-end solutions for the entire AI lifecycle, from data preparation to 
          model deployment and monitoring. Our platform is designed to address the most challenging aspects 
          of building production-ready AI systems.
        </motion.p>
        
        <motion.div variants={fadeIn} className={styles.valuesList}>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>🔄</div>
            <h3 className={styles.valueTitle}>AI Data Pipelines</h3>
            <p className={styles.valueDescription}>End-to-end data preparation, labeling, and augmentation solutions for training high-performance models.</p>
          </div>
          
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>📊</div>
            <h3 className={styles.valueTitle}>Model Evaluation</h3>
            <p className={styles.valueDescription}>Comprehensive testing frameworks to ensure models are accurate, robust, and fair before deployment.</p>
          </div>
          
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>💬</div>
            <h3 className={styles.valueTitle}>GenAI Platform</h3>
            <p className={styles.valueDescription}>Specialized tools for training, fine-tuning, and evaluating generative AI models.</p>
          </div>
          
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>🚗</div>
            <h3 className={styles.valueTitle}>Automotive AI</h3>
            <p className={styles.valueDescription}>Custom solutions for autonomous driving, driver assistance, and vehicle intelligence systems.</p>
          </div>
          
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>🏛️</div>
            <h3 className={styles.valueTitle}>Public Sector</h3>
            <p className={styles.valueDescription}>Secure, compliant AI solutions for government agencies and public services.</p>
          </div>
          
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>🔒</div>
            <h3 className={styles.valueTitle}>Enterprise Security</h3>
            <p className={styles.valueDescription}>Enterprise-grade security and compliance features for sensitive AI applications.</p>
          </div>
        </motion.div>
      </motion.section>

      {/* Our Values Section */}
      <motion.section 
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeIn} className={styles.sectionTitle} style={{ color: '#a8c7fa' }}>Our Values</motion.h2>
        <motion.p variants={fadeIn} className={styles.paragraph}>
          Our values guide everything we do at Dusker, from how we build our products to how we interact with our clients and each other.
        </motion.p>
        
        <motion.div variants={fadeIn} className={styles.valuesList}>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>💡</div>
            <h3 className={styles.valueTitle}>Innovation with Integrity</h3>
            <p className={styles.valueDescription}>We push the boundaries of what's possible while maintaining the highest ethical standards.</p>
          </div>
          
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>🔍</div>
            <h3 className={styles.valueTitle}>Transparency & Trust</h3>
            <p className={styles.valueDescription}>We believe in open communication and building trust through transparency in our products and processes.</p>
          </div>
          
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>🤝</div>
            <h3 className={styles.valueTitle}>Collaboration & Diversity</h3>
            <p className={styles.valueDescription}>We embrace diverse perspectives and believe the best solutions come from collaborative efforts.</p>
          </div>
          
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>👥</div>
            <h3 className={styles.valueTitle}>Customer-First Mindset</h3>
            <p className={styles.valueDescription}>Our customers' success is our success. We're committed to delivering exceptional value and support.</p>
          </div>
          
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>📚</div>
            <h3 className={styles.valueTitle}>Continuous Learning</h3>
            <p className={styles.valueDescription}>We're dedicated to constant improvement, both as individuals and as an organization.</p>
          </div>
        </motion.div>
      </motion.section>

      {/* Our Team Section */}
      <motion.section 
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeIn} className={styles.sectionTitle} style={{ color: '#a8c7fa' }}>Our Leadership Team</motion.h2>
        <motion.p variants={fadeIn} className={styles.paragraph}>
          Dusker is led by a diverse team of experts with deep experience in AI, machine learning, software engineering, and business leadership.
        </motion.p>
        
        <motion.div variants={fadeIn} className={styles.teamGrid}>
          
          <div className={styles.teamMember}>
            <img 
              src="https://res.cloudinary.com/doa53gfwf/image/upload/v1762670235/u9fmyagiitewevebrppa.jpg"
              alt="Raj Shrivastava" 
              className={styles.teamAvatar} 
            />
            <h3 className={styles.teamName} style={{ color: '#a8c7fa' }}>Raj Shrivastava</h3>
            <p className={styles.teamRole}>Chief Executive Officer</p>
            <p className={styles.teamBio}>Strategic business development professional with a talent for building partnerships and expanding market reach for AI solutions.</p>
          </div>
          
          <div className={styles.teamMember}>
            <img 
              src="/images/ashish_kar.jpg" 
              alt="Ashish Kar" 
              className={styles.teamAvatar} 
            />
            <h3 className={styles.teamName} style={{ color: '#a8c7fa' }}>Ashish Kar</h3>
            <p className={styles.teamRole}>Chief Technology Officer</p>
            <p className={styles.teamBio}>Visionary AI entrepreneur with expertise in machine learning systems and business strategy. Leading Dusker's mission to revolutionize AI training and deployment.</p>
          </div>
          
        </motion.div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        className={styles.contactSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeIn} className={styles.contactTitle}>Get in Touch</motion.h2>
        <motion.p variants={fadeIn} className={styles.contactInfo} style={{ color: '#333333' }}>
          Ready to transform your AI capabilities? We'd love to hear from you.
        </motion.p>
        <motion.div variants={fadeIn} style={{ color: '#333333' }}>
          <p>Email: <a href="mailto:info@duskerservices.in" className={styles.contactLink}>info@duskerservices.in</a></p>
    
          <p>Phone: <a href="tel:+916201647596" className={styles.contactLink}>+91 62016 47596</a></p>
          <p>Headquarters: Jaipur, India</p>
        </motion.div>
        
        <motion.div variants={fadeIn} className={styles.socialLinks}>
          <a href="https://www.linkedin.com/company/dusker-services?trk=profile-position" className={styles.socialIcon} aria-label="LinkedIn">in</a>
       
        </motion.div>
      </motion.section>
    </main>
  );
}

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useForm } from "@formspree/react";
import {
  Zap,
  Palette,
  Smartphone,
  Globe,
  ShoppingCart,
  Briefcase,
  Star,
} from "lucide-react";
import "./App.css";

// Inline social icons (avoids lucide-react export issues)
const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.28-1.38a9.9 9.9 0 0 0 4.71 1.2h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.1h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.2 8.2 0 0 1-1.26-4.4c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.41 5.83c0 4.55-3.7 8.26-8.25 8.26zm4.52-6.19c-.25-.12-1.47-.72-1.69-.81-.23-.08-.4-.12-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.22.89 2.4 1.02 2.57.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
  </svg>
);

function App() {
  const [state, handleSubmit] = useForm("mwlejzdz");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>

        <a href="#home" className="logo" onClick={closeMenu}>
          RedZone Web
        </a>

        {/* Desktop Navigation */}
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#testimonials">Reviews</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="mobile-nav">
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#testimonials" onClick={closeMenu}>Reviews</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </div>
        )}

      </nav>


      {/* ================= HERO ================= */}
      <motion.section
        className="hero"
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >

        <motion.p
          className="small-title"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          WELCOME TO REDZONE WEB
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Build Your{" "}
          <span>Digital Future.</span>
        </motion.h1>

        <motion.p
          className="hero-text"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          RedZone Web creates modern, fast and responsive websites
          for businesses and creators.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >

          <motion.a
            href="#contact"
            className="primary-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Get Started →
          </motion.a>

          <motion.a
            href="#services"
            className="secondary-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Explore Services
          </motion.a>

        </motion.div>

        {/* Trust stats */}
        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="hero-stat">
            <h4>10+</h4>
            <p>Projects Delivered</p>
          </div>
          <div className="hero-stat">
            <h4>100%</h4>
            <p>Responsive Builds</p>
          </div>
          <div className="hero-stat">
            <h4>24/7</h4>
            <p>Support</p>
          </div>
        </motion.div>

      </motion.section>


      {/* ================= SERVICES ================= */}
      <section className="features" id="services">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="small-title">OUR SERVICES</p>
          <h2>What We Offer</h2>
        </motion.div>

        <div className="feature-grid">

          <motion.div
            className="feature-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <div className="feature-icon">
              <Zap size={26} strokeWidth={2} />
            </div>

            <h3>Fast</h3>

            <p>
              Lightning-fast websites that load quickly and smoothly.
            </p>
          </motion.div>


          <motion.div
            className="feature-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <div className="feature-icon">
              <Palette size={26} strokeWidth={2} />
            </div>

            <h3>Modern Design</h3>

            <p>
              Clean and beautiful designs made for modern businesses.
            </p>
          </motion.div>


          <motion.div
            className="feature-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <div className="feature-icon">
              <Smartphone size={26} strokeWidth={2} />
            </div>

            <h3>Responsive</h3>

            <p>
              Your website looks great on mobile, tablet and desktop.
            </p>
          </motion.div>

        </div>
      </section>


      {/* ================= PROJECTS ================= */}
      <section className="projects" id="projects">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="small-title">OUR PROJECTS</p>
          <h2>What We Have Built</h2>
        </motion.div>

        <div className="project-grid">

          <motion.div
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="project-icon">
              <Globe size={30} strokeWidth={2} />
            </div>

            <h3>Business Website</h3>

            <p>
              Modern and professional websites designed to help
              businesses build a strong online presence.
            </p>

            <a href="#contact" className="project-button">
              Start Project →
            </a>
          </motion.div>


          <motion.div
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            whileHover={{ y: -10 }}
          >
            <div className="project-icon">
              <ShoppingCart size={30} strokeWidth={2} />
            </div>

            <h3>E-Commerce Website</h3>

            <p>
              Responsive online stores with clean designs and a
              smooth shopping experience.
            </p>

            <a href="#contact" className="project-button">
              Start Project →
            </a>
          </motion.div>


          <motion.div
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -10 }}
          >
            <div className="project-icon">
              <Briefcase size={30} strokeWidth={2} />
            </div>

            <h3>Portfolio Website</h3>

            <p>
              Professional portfolio websites for creators,
              freelancers and professionals.
            </p>

            <a href="#contact" className="project-button">
              Start Project →
            </a>
          </motion.div>

        </div>
      </section>


      {/* ================= ABOUT ================= */}
      <section className="about" id="about">

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <p className="small-title">ABOUT US</p>

          <h2>
            We build websites that help businesses grow.
          </h2>

          <p>
            We focus on creating fast, modern and easy-to-use websites.
            Our goal is to give every business a professional online
            presence.
          </p>

          <motion.a
            href="#contact"
            className="primary-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Let's Work Together →
          </motion.a>

        </motion.div>

      </section>


      {/* ================= TESTIMONIALS ================= */}
      <section className="testimonials" id="testimonials">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="small-title">CLIENT REVIEWS</p>
          <h2>What People Say</h2>
        </motion.div>

        <div className="testimonial-grid">

          <motion.div
            className="testimonial-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="testimonial-stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="#facc15" stroke="#facc15" />
              ))}
            </div>
            <p className="testimonial-text">
              "RedZone Web delivered our site faster than we expected,
              and it looks a lot more professional than what we had before."
            </p>
            <p className="testimonial-author">— Local Business Owner</p>
          </motion.div>

          <motion.div
            className="testimonial-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <div className="testimonial-stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="#facc15" stroke="#facc15" />
              ))}
            </div>
            <p className="testimonial-text">
              "Communication was smooth throughout and the final design
              matched exactly what we had in mind."
            </p>
            <p className="testimonial-author">— Freelance Creator</p>
          </motion.div>

          <motion.div
            className="testimonial-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="testimonial-stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="#facc15" stroke="#facc15" />
              ))}
            </div>
            <p className="testimonial-text">
              "Our new site loads fast and works great on mobile.
              Exactly what our business needed."
            </p>
            <p className="testimonial-author">— Small Business Client</p>
          </motion.div>

        </div>
      </section>


      {/* ================= CONTACT ================= */}
      <section className="contact" id="contact">

        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <p className="small-title">CONTACT US</p>

          <h2>Let's build something together.</h2>

          <p className="contact-description">
            Have a project in mind? Tell us about it and let's create
            something amazing together.
          </p>


          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <textarea
              name="message"
              placeholder="Tell us about your project..."
              rows="6"
              required
            />

            <input
              type="hidden"
              name="_subject"
              value="New Project Inquiry - RedZone Web"
            />


            <motion.button
              type="submit"
              className="primary-button"
              disabled={state.submitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {state.submitting
                ? "Sending..."
                : "Send Message →"}
            </motion.button>


            {state.succeeded && (
              <motion.p
                className="form-success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✅ Message sent successfully!
              </motion.p>
            )}


            {state.errors && (
              <motion.p
                className="form-error"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ❌ Something went wrong. Please try again.
              </motion.p>
            )}

          </form>

        </motion.div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="footer-content">

          <a href="#home" className="footer-logo">RedZone Web</a>

          <div className="footer-socials">
            <a
              href="https://wa.me/910000000000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>
          </div>

        </div>

        <p className="footer-copy">
          © 2026 RedZone Web. All rights reserved.
        </p>
      </footer>

    </div>
  );
}

export default App;
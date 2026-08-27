import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useForm } from "@formspree/react";
import "./App.css";

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
            <div className="feature-icon">⚡</div>

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
            <div className="feature-icon">🎨</div>

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
            <div className="feature-icon">📱</div>

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
            <div className="project-icon">🌐</div>

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
            <div className="project-icon">🛒</div>

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
            <div className="project-icon">💼</div>

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
        <p>
          © 2026 RedZone Web. All rights reserved.
        </p>
      </footer>

    </div>
  );
}

export default App;
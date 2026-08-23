import { motion } from "motion/react";
import "./App.css";

function App() {
  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">RedZone Web</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <motion.section
        className="hero"
        id="home"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >  <p className="small-title">WELCOME TO REDZONE WEB</p>

        <h1>
      Build Your
      <span> Digital Future.</span>
       </h1>

      <p className="hero-text">
      RedZone Web creates modern, fast and responsive websites for businesses and creators.
       </p>

        <p className="hero-text">
          We create modern, fast and beautiful websites for businesses
          and creators.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="primary-button">
            Get Started →
          </a>

          <a href="#services" className="secondary-button">
            Explore Services
          </a>
        </div>
      </motion.section>

      {/* Features */}
      <section className="features" id="services">
        <p className="small-title">OUR SERVICES</p>
        <h2>What We Offer</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Fast</h3>
            <p>
              Lightning-fast websites that load quickly and smoothly.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Modern Design</h3>
            <p>
              Clean and beautiful designs made for modern businesses.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Responsive</h3>
            <p>
              Your website looks great on mobile, tablet and desktop.
            </p>
          </div>

        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <div className="about-content">
          <p className="small-title">ABOUT US</p>

          <h2>
            We build websites that help businesses grow.
          </h2>

          <p>
            We focus on creating fast, modern and easy-to-use websites.
            Our goal is to give every business a professional online presence.
          </p>

          <a href="#contact" className="primary-button">
            Learn More →
          </a>
        </div>
      </section>

      {/* Contact */}
      <section className="contact" id="contact">
        <p className="small-title">CONTACT US</p>

        <h2>Let's build something together.</h2>

        <p>
          Have a project in mind? Get in touch with us and let's talk.
        </p>

        <a href="mailto:hello@mysite.com" className="primary-button">
          Contact Us →
        </a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 RedZone Web. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;
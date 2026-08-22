import { motion } from "motion/react";
import "./App.css";
function App() {
  return (
    <div className="app">
      
      <nav className="navbar">
        <div className="logo">MySite</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <motion.div
        className="hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="small-title">WELCOME TO MYSITE</p>

        <h1>
          Build Something
          <span> Amazing.</span>
        </h1>

        <p>
          We create modern, fast and beautiful websites for businesses
          and creators.
        </p>

        <button>Get Started →</button>
      </motion.div>
<section className="features" id="services">
  <h2>What We Offer</h2>

  <div className="feature-grid">
    <div className="feature-card">
      <h3>⚡ Fast</h3>
      <p>Lightning-fast websites that load quickly.</p>
    </div>

    <div className="feature-card">
      <h3>🎨 Modern Design</h3>
      <p>Clean and beautiful designs for your business.</p>
    </div>

    <div className="feature-card">
      <h3>📱 Responsive</h3>
      <p>Your website looks great on mobile and desktop.</p>
    </div>
  </div>
</section>
<section className="about" id="about">
  <div className="about-content">
    <p className="small-title">ABOUT US</p>

    <h2>We build websites that help businesses grow.</h2>

    <p>
      We focus on creating fast, modern and easy-to-use websites.
      Our goal is to give every business a professional online presence.
    </p>

    <button>Learn More →</button>
  </div>
</section>
<section className="contact" id="contact">
  <p className="small-title">CONTACT US</p>

  <h2>Let's build something together.</h2>

  <p>
    Have a project in mind? Get in touch with us and let's talk.
  </p>

  <button>Contact Us →</button>
</section><footer className="footer">
  <p>© 2026 MySite. All rights reserved.</p>
</footer>
    </div>

  );
}

export default App;
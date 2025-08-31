import React, { useState, useEffect } from 'react';
import './styles.css';

const LandingPage = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  
  const taglines = [
    "Reclaim your night.",
    "Sleep is optional. Greatness is not.",
    "Powered by the ancients. Built for tomorrow.",
    "Where pharaohs found power, you find freedom.",
    "The sun never sets on human potential.",
    "Ancient wisdom. Infinite energy."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [taglines.length]);

  const handleButtonClick = (e) => {
    e.target.style.transform = 'scale(0.95)';
    setTimeout(() => {
      e.target.style.transform = '';
    }, 150);
  };

  return (
    <div className="landing-container">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          {/* Logo */}
          <div className="logo">
            <div className="logo-symbol">☥</div>
            <span className="logo-text">BrightMind</span>
          </div>

          {/* Main Headlines */}
          <div className="headlines">
            <h1 className="main-headline">
              <span className="sparkle">✨</span>
              Redefining Humanity. Shaping the Future
              <span className="sparkle">✨</span>
            </h1>
            <h2 className="subheadline">
              Introducing SolTech, the next step in human evolution. 
              Powered by ancient solar wisdom, refined by modern science.
            </h2>
          </div>

          {/* CTA Button */}
          <button className="cta-button primary" onClick={handleButtonClick}>
            <span className="button-text">Get Your Implant</span>
            <div className="button-glow"></div>
          </button>
        </div>

        {/* Hero Image Background */}
        <div className="hero-image">
          <div className="pyramid-silhouette"></div>
          <div className="solar-rays"></div>
        </div>
      </header>

              {/* Product Section */}
        <section className="product-section">
          <div className="product-overlay"></div>
          <div className="product-box">
            <h2 className="product-title">About SolTech</h2>
            <p className="product-description">
              SolTech is more than technology — it's evolution.
              Inspired by ancient Egyptian solar practices and
              engineered with cutting-edge biotechnology, our implant
              empowers you to transcend fatigue, eliminate the limits of sleep,
              and embrace a brighter, boundless future.
            </p>
          </div>
        </section>


      {/* Middle Section - Rotating Taglines */}
      <section className="taglines-section">
        <div className="tagline-container">
          <h3 className="rotating-tagline">
            {taglines[currentTagline]}
          </h3>
          <div className="tagline-dots">
            {taglines.map((_, index) => (
              <div 
                key={index} 
                className={`dot ${index === currentTagline ? 'active' : ''}`}
              ></div>
            ))}
          </div>
        </div>
        
        {/* White Particles for Middle Section */}
        <div className="teal-particles">
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`teal-particle teal-particle-${i}`}></div>
          ))}
        </div>
      </section>

      {/* End Section */}
      <section className="end-section">
        <div className="end-content">
          <h2 className="end-headline">Power Up Your Productivity Today</h2>
          <p className="end-subtext">
            Join thousands of visionaries shaping tomorrow's world
          </p>
          <button className="cta-button secondary" onClick={handleButtonClick}>
            <span className="button-text">Learn More</span>
          </button>
        </div>
        
        {/* Decorative Elements */}
        <div className="scarab-decoration"></div>
        <div className="ankh-decoration">☥</div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 BrightMind. Harnessing the sun for a brighter tomorrow.</p>
      </footer>

      {/* Floating Solar Particles */}
      <div className="solar-particles">
        {[...Array(15)].map((_, i) => (
          <div key={i} className={`particle particle-${i}`}></div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './impact.css';

const ImpactPage = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const navigate = useNavigate();

  const impactData = [
    {
      title: "Productivity Without Limits",
      icon: "⌛",
      description: "Time was always the ceiling. Now it's the floor. What would you do with an extra third of your life? Paint, build, love, work, explore — the night is no longer an ending, it's a beginning. The Implant doesn't just give you more hours; it gives you more life.",
      color: "#D4AF37"
    },
    {
      title: "Sustainable Living",
      icon: "☀️",
      description: "Civilizations once worshipped the sun. Now, we wear it. Draw directly from the same radiant force that raised crops, carved empires, and crowned the pyramids. Your body becomes its own solar engine — no fuel, no waste, no compromise. Just the endless generosity of light.",
      color: "#00A6A6"
    },
    {
      title: "Enhanced Lifestyle",
      icon: "⚡",
      description: "Exhaustion is over. Forget the weight of heavy eyelids, the fog of fatigue. You rise with the dawn and remain sharp through the dark. Store sunlight in your cells by day, and let it flow through you at night — a rhythm beyond sleep, tuned to brilliance.",
      color: "#BBDEF0"
    },
    {
      title: "Join the Elite",
      icon: "👑",
      description: "Not everyone will step forward. But you can. The Implant is more than technology. It is a threshold. Those who wear it will shape the cities, write the codes, make the laws. It is not just energy — it is power, influence, and the quiet mark of those who refuse to be ordinary.",
      color: "#D4AF37"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const progress = scrolled / maxScroll;
      setScrollProgress(progress);

      // Calculate which section is currently in view
      // We have 5 total sections: 1 header + 4 impact sections
      const sectionHeight = window.innerHeight;
      const currentSectionIndex = Math.floor(scrolled / sectionHeight);
      
      // For the header section (index 0), don't highlight any nav item
      // For impact sections (index 1-4), highlight the corresponding nav item (0-3)
      if (currentSectionIndex === 0) {
        setActiveSection(-1); // No nav item active for header
      } else {
        const impactSectionIndex = currentSectionIndex - 1; // Subtract 1 because header is section 0
        setActiveSection(Math.min(impactSectionIndex, impactData.length - 1));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [impactData.length]);

  const scrollToSection = (sectionIndex) => {
    // Add 1 because we have a header section before the impact sections
    const targetSection = sectionIndex + 1;
    const sectionHeight = window.innerHeight;
    const targetPosition = targetSection * sectionHeight;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleCTAClick = () => {
    // You can add your CTA logic here
    // For now, it could navigate to a contact form or checkout page
    navigate('/product');
  };

  return (
    <div className="impact-page-wrapper">
      <div className="impact-container">
      {/* Fixed Navigation Sidebar */}
      <div className="sidebar">
        <div className="logo" onClick={handleLogoClick}>
          <span className="logo-symbol">☥</span>
          <span className="logo-text">Impact</span>
        </div>
        
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ height: `${scrollProgress * 100}%` }}
          ></div>
        </div>

        <nav className="nav">
          {impactData.map((item, index) => (
            <div 
              key={index}
              className={`nav-item ${index === activeSection ? 'nav-item-active' : ''}`}
              onClick={() => scrollToSection(index)}
              title={item.title}
            >
              <span className="nav-icon">{item.icon}</span>
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content - Full Screen Sections */}
      <div className="main-content">
        {/* Header Section */}
        <section className="header-section">
          <div className="header-content">
            <h1 className="main-title">
              How the Solar Implant
              <br />
              <span className="title-accent">Changes Everything</span>
            </h1>
            <div className="title-underline"></div>
          </div>
          <div className="header-decoration">
            <div className="sun-burst"></div>
          </div>
        </section>

        {/* Impact Sections */}
        {impactData.map((section, index) => (
          <section 
            key={index}
            className={`impact-section ${index % 2 === 0 ? 'dark-section' : 'light-section'}`}
          >
            <div className="section-container">
              <div className="section-number">
                {String(index + 1).padStart(2, '0')}
              </div>
              
              <div className="content-grid">
                <div className="left-column">
                  <div 
                    className="icon-circle"
                    style={{
                      borderColor: section.color,
                      boxShadow: `0 0 30px ${section.color}40`
                    }}
                  >
                    <span className="section-icon">{section.icon}</span>
                  </div>
                </div>
                
                <div className="right-column">
                  <h2 
                    className="section-title"
                    style={{ color: section.color }}
                  >
                    {section.title}
                  </h2>
                  <div className="text-container">
                    <p className="section-description">
                      {section.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Animated Background Elements */}
              <div className="background-elements">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i}
                    className="floating-element"
                    style={{
                      left: `${20 + i * 30}%`,
                      top: `${30 + i * 20}%`,
                      backgroundColor: `${section.color}20`,
                      animationDelay: `${i * 2}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Call to Action Section */}
        <section className="cta-section">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform?</h2>
            <p className="cta-subtext">
              The future belongs to those who embrace evolution
            </p>
            <button className="cta-button" onClick={handleCTAClick}>
              <span className="button-text">Begin Your Journey</span>
              <div className="button-ripple"></div>
            </button>
          </div>
          
          {/* Ancient Pattern Background */}
          <div className="ancient-pattern">
            {[...Array(12)].map((_, i) => (
              <div 
                key={i}
                className="pattern-element"
                style={{
                  transform: `rotate(${i * 30}deg)`,
                  animationDelay: `${i * 0.5}s`
                }}
              >
                ☥
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Ambient Particles */}
      <div className="ambient-particles">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="ambient-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 6}s`
            }}
          ></div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default ImpactPage;
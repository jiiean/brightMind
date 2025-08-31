import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';
import pyramidImage from './pyramid-discovery.png';
import solarRevolutionImage from './solar-revolution.png';

const AboutPage = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const navigate = useNavigate();

  const timelineData = [
    {
      year: "1821",
      title: "Discovery Beneath the Pyramids",
      body: "Explorers uncovered a secret chamber beneath the Great Pyramid of Giza. Within it lay an ancient material of extraordinary photovoltaic properties, a solar coating that once powered the Egyptian empire. This discovery ignited the world’s first solar revolution.",
      image: pyramidImage,
      icon: "🏺",
      color: "#D4AF37"
    },
    {
      year: "1870s",
      title: "The First Solar Revolution",
      body: "By the 1870s, solar energy replaced coal and oil as humanity’s primary fuel, ushering in an age of limitless clean power.",
      image: solarRevolutionImage,
      icon: "⚙️",
      color: "#00A6A6"
    },
    {
      year: "Today",
      title: "BrightMind’s Solar Implant",
      body: "BrightMind continues this legacy with the Solar Implant, SolTech, a revolutionary device that allows your body to store and circulate solar energy. By day, you charge. By night, you thrive. Sleep is no longer a necessity. The sun has always sustained life. Now, it sustains you.",
      image: "/images/brightmind-today.jpg",
      icon: "☀️",
      color: "#BBDEF0"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      setScrollProgress(scrolled / maxScroll);

      const sectionHeight = window.innerHeight;
      const currentSection = Math.floor(scrolled / sectionHeight);
      setActiveSection(Math.min(currentSection, timelineData.length));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [timelineData.length]);

  const scrollToSection = (index) => {
    const sectionHeight = window.innerHeight;
    window.scrollTo({
      top: (index + 1) * sectionHeight,
      behavior: 'smooth'
    });
  };

  const handleCTAClick = () => navigate('/product');

  return (
    <div className="legacy-page-wrapper">
      <div className="impact-container">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="logo">
            <span className="logo-symbol">☥</span>
            <span className="logo-text2">ABOUT</span>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ height: `${scrollProgress * 100}%` }}
            ></div>
          </div>

          <nav className="nav">
            {timelineData.map((item, index) => (
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

        {/* Main Content */}
        <div className="main-content">
          {/* Header */}
          <section className="header-section">
            <div className="legacy-header">
              <h1 className="legacy-title">
                 A Legacy Thousands of Years in the Making 
              </h1>
              <div className="legacy-underline"></div>
            </div>
          </section>

          {/* Timeline as full-page sections */}
          {timelineData.map((item, index) => (
            <section key={index} className="impact-section">
              <div className="timeline-card">
                <div className="timeline-year">{item.year}</div>
                <img src={item.image} alt={item.title} className="timeline-image" />
                <h2 className="timeline-title" style={{ color: item.color }}>
                  {item.title}
                </h2>
                <p className="timeline-body">{item.body}</p>
              </div>
            </section>
          ))}

          {/* CTA */}
          <section className="legacy-cta">
            <h2 className="cta-title">Ready to Transform?</h2>
            <p className="cta-subtext">The future belongs to those who embrace evolution</p>
            <button className="cta-button" onClick={handleCTAClick}>
              <span className="button-text">Begin Your Journey</span>
              <div className="button-ripple"></div>
            </button>
          </section>
        </div>

        {/* Ambient Particles */}
        <div className="ambient-particles">
          {[...Array(25)].map((_, i) => (
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

export default AboutPage;

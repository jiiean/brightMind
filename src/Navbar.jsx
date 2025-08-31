import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './navbar.css';
import brainImage from './brain.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  const secondaryNavigationItems = [
    { id: 'about', label: 'About', href: '/about' },
    { id: 'product', label: 'Product', href: '/product' },
    { id: 'impact', label: 'Impact', href: '/impact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update active item based on current route
  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      setActiveItem('home');
    } else if (path === '/impact') {
      setActiveItem('impact');
    } else if (path === '/about') {
      setActiveItem('about');
    } else if (path === '/product') {
      setActiveItem('product');
    }
  }, [location.pathname]);

  const handleNavClick = (id, href) => {
    setActiveItem(id);
    setIsMobileMenuOpen(false);
    navigate(href);
  };

  const handleLogoClick = () => {
    setActiveItem('home');
    setIsMobileMenuOpen(false);
    navigate('/');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleButtonClick = (e, action = 'cta') => {
    e.target.style.transform = 'scale(0.95)';
    setTimeout(() => {
      e.target.style.transform = '';
    }, 150);
    
    // Handle different button actions
    if (action === 'learn-more') {
      navigate('/impact');
    }
    // For 'Get Your Implant' button, you can add your CTA logic here
    // For now, it just provides the visual feedback
    if (action === 'cta') {
      navigate('/product');
    }
  };

  return (
    <div className="brightmind-navbar-wrapper">
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo Section with Secondary Nav */}
          <div className="navbar-left">
            <div 
              className="navbar-logo" 
              onClick={handleLogoClick}
              style={{ cursor: 'pointer' }}
            >
              <img src={brainImage} alt="BrightMind Brain" className="logo-icon-image" />
              <div className="logo-content">
                <span className="logo-title">BrightMind</span>
                <span className="logo-subtitle">Solar Evolution</span>
              </div>
            </div>
            
            {/* Secondary Navigation (About & Impact) */}
            <div className="secondary-nav">
              {secondaryNavigationItems.map((item) => (
                <button
                  key={item.id}
                  className={`secondary-nav-item ${activeItem === item.id ? 'secondary-nav-item-active' : ''}`}
                  onClick={() => handleNavClick(item.id, item.href)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="navbar-cta">
            <button className="cta-button" onClick={(e) => handleButtonClick(e, 'cta')}>
              <span className="cta-text">Get Implant</span>
              <div className="cta-shine"></div>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`mobile-toggle ${isMobileMenuOpen ? 'mobile-toggle-open' : ''}`}
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <div className="mobile-menu-content">
            {secondaryNavigationItems.map((item) => (
              <button
                key={item.id}
                className={`mobile-nav-item ${activeItem === item.id ? 'mobile-nav-item-active' : ''}`}
                onClick={() => handleNavClick(item.id, item.href)}
              >
                <span className="mobile-nav-label">{item.label}</span>
              </button>
            ))}
            
            <div className="mobile-cta">
              <button className="mobile-cta-button">
                <span>Get Your Implant</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Background Pattern */}
          <div className="mobile-pattern">
            {[...Array(6)].map((_, i) => (
              <img 
                key={i}
                src={brainImage}
                alt="Brain pattern"
                className="mobile-pattern-brain"
                style={{
                  transform: `rotate(${i * 60}deg)`,
                  animationDelay: `${i * 0.3}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Floating Particles */}
        <div className="navbar-particles">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className="navbar-particle"
              style={{
                left: `${10 + i * 12}%`,
                animationDelay: `${i * 1.2}s`,
                animationDuration: `${6 + i * 0.5}s`
              }}
            ></div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
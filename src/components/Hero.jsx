import React, { useState, useEffect } from 'react';
import servicesVideo from '../assets/14999678_1920_1080_25fps.mp4';
import authorizedDealerImg from '../assets/Authorized dealer.webp';
import './Hero.css';

export default function Hero({ setActiveSection }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Background Video */}
      <video className="hero-bg-video" autoPlay loop muted playsInline>
        <source src={servicesVideo} type="video/mp4" />
      </video>

      {/* Aurora Background */}
      <div className="aurora-bg">
        <div className="aurora-blob aurora-blob-1"></div>
        <div className="aurora-blob aurora-blob-2"></div>
        <div className="aurora-blob aurora-blob-3"></div>
      </div>

      <div className="tech-bg tech-bg-animated"></div>

      {/* Advanced Animated Squares at Left Corner */}
      <div className="animated-squares-left">
        <div className="square square-1"></div>
        <div className="square square-2"></div>
        <div className="square square-3"></div>
        <div className="square square-4"></div>
      </div>

      {/* Advanced Animated Squares at Right Corner */}
      <div className="animated-squares-right">
        <div className="square square-1"></div>
        <div className="square square-2"></div>
        <div className="square square-3"></div>
        <div className="square square-4"></div>
      </div>


      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-tag animate-fade-in">
            <span className="tag-pulse"></span>
            Enterprise IT Infrastructure Experts
          </div>

          <h1 className="hero-title animate-slide-up">
            Next-Gen <span className="gradient-text">IT Infrastructure</span> For Modern Enterprises.
          </h1>

          <p className="hero-subtitle animate-fade-in-delayed">
            Empowering businesses across India since 2002.
          </p>

          <div className="hero-actions animate-fade-in-delayed">
            <button onClick={() => handleNavClick('contact')} className="btn btn-secondary">
              Request a Consultation
            </button>
          </div>
        </div>

        <div className="hero-visual animate-fade-in-delayed"></div>
      </div>

      {/* Metrics Banner */}
      <div className="container hero-metrics-container">
        <div className="hero-metrics">
          <div className="metric-item">
            <h3 className="metric-value">24+</h3>
            <p className="metric-label">Years of IT Excellence</p>
          </div>
          <div className="metric-divider"></div>
          <div className="metric-item">
            <h3 className="metric-value">500+</h3>
            <p className="metric-label">Enterprise Clients</p>
          </div>
          <div className="metric-divider"></div>
          <div className="metric-item">
            <h3 className="metric-value">3</h3>
            <p className="metric-label">Key Locations (KL & TN)</p>
          </div>
          <div className="metric-divider"></div>
          <div className="metric-item">
            <h3 className="metric-value">24/7</h3>
            <p className="metric-label">Support & Maintenance</p>
          </div>
        </div>
      </div>

      {/* Authorized Dealer Panel */}
      <div className="authorized-dealer-panel">
        <img src={authorizedDealerImg} alt="Authorized Dealer Logos" className="authorized-dealer-img" />
      </div>
    </section>
  );
}

import React from 'react';
import { ArrowRight, Server, Shield, Cloud, Network } from 'lucide-react';
import './Hero.css';

export default function Hero({ setActiveSection }) {
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
      <div className="tech-bg tech-bg-animated"></div>
      <div className="background-lines-wrapper">
        <svg className="background-lines" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="line-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(14, 165, 233, 0)" />
              <stop offset="50%" stopColor="rgba(14, 165, 233, 0.4)" />
              <stop offset="100%" stopColor="rgba(14, 165, 233, 0)" />
            </linearGradient>
            <linearGradient id="line-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(6, 182, 212, 0)" />
              <stop offset="30%" stopColor="rgba(6, 182, 212, 0.5)" />
              <stop offset="100%" stopColor="rgba(6, 182, 212, 0)" />
            </linearGradient>
            <linearGradient id="line-grad-3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(139, 92, 246, 0)" />
              <stop offset="70%" stopColor="rgba(139, 92, 246, 0.4)" />
              <stop offset="100%" stopColor="rgba(139, 92, 246, 0)" />
            </linearGradient>
          </defs>
          <path d="M-10,30 Q40,60 110,30" className="bg-line bg-line-1" />
          <path d="M-10,50 Q60,20 110,80" className="bg-line bg-line-2" />
          <path d="M-10,70 Q20,90 110,40" className="bg-line bg-line-3" />
        </svg>
      </div>
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>
      
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
            <button onClick={() => handleNavClick('services')} className="btn btn-primary">
              Explore Our Services
              <ArrowRight size={18} />
            </button>
            <button onClick={() => handleNavClick('contact')} className="btn btn-secondary">
              Request a Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Metrics Banner */}
      <div className="container hero-metrics-container">
        <div className="hero-metrics glass-panel">
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
    </section>
  );
}

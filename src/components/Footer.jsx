import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Facebook, Twitter, ShieldAlert } from 'lucide-react';
import businessLogo from '../assets/BusinessLogo.webp';
import './Footer.css';

export default function Footer({ setActiveSection }) {
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
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="brand-logo">
            <img src={businessLogo} alt="Comtech Systems Logo" className="footer-logo-img" />
          </div>
          <p className="brand-tagline">
            Providing high-performance Enterprise IT infrastructure, Cybersecurity, and Structured Cabling solutions since 2002.
          </p>
          <div className="social-links">
            <a href="https://www.linkedin.com/company/comtech-systems-kochi/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href="#" className="social-link" aria-label="Facebook"><Facebook size={18} /></a>
            <a href="#" className="social-link" aria-label="Twitter"><Twitter size={18} /></a>
          </div>
        </div>

        <div className="footer-links">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="links-list">
            <li><button onClick={() => handleNavClick('home')}>Home</button></li>
            <li><button onClick={() => handleNavClick('about')}>About Us</button></li>
            <li><button onClick={() => handleNavClick('services')}>Services</button></li>
            <li><button onClick={() => handleNavClick('products')}>Products</button></li>
            <li><button onClick={() => handleNavClick('contact')}>Contact Us</button></li>
          </ul>
        </div>

        <div className="footer-services">
          <h4 className="footer-title">Key Offerings</h4>
          <ul className="links-list">
            <li><button onClick={() => handleNavClick('services')}>Managed IT Services & AMC</button></li>
            <li><button onClick={() => handleNavClick('services')}>Cybersecurity & UTM</button></li>
            <li><button onClick={() => handleNavClick('services')}>Cloud & Data Center</button></li>
            <li><button onClick={() => handleNavClick('services')}>Structured Cabling</button></li>
            <li><button onClick={() => handleNavClick('services')}>Disaster Recovery & Backup</button></li>
          </ul>
        </div>

        <div className="footer-locations">
          <h4 className="footer-title">Head Office</h4>
          <div className="location-info">
            <MapPin size={18} className="loc-icon" />
            <span>
              Katti One, 31/352 D Paradise Road,<br />
              Vytilla P.O, Kochi - 682019<br />
              Kerala, India
            </span>
          </div>
          <div className="contact-info">
            <div className="contact-item">
              <Phone size={16} />
              <span>+91 484 353 0200</span>
            </div>
            <div className="contact-item">
              <Mail size={16} />
              <span>bde@comtechsystems.in</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-container">
          <p className="copyright">&copy; {new Date().getFullYear()} Comtech Systems. All rights reserved.</p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <span className="dot">•</span>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

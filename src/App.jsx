import React, { useState, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showContactModal, setShowContactModal] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  // Hash-based routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/about') {
        setCurrentPage('about');
      } else {
        setCurrentPage('home');
      }
    };
    handleHashChange(); // run on mount
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Force dark theme on load
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  // Scroll Spy and Reveal Animation Effect (homepage only)
  useEffect(() => {
    if (currentPage !== 'home') return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      const sections = ['home', 'about', 'services', 'products', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }

      // Scroll Reveal Animation trigger
      const reveals = document.querySelectorAll('.reveal, [class*="reveal-"]');
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 80;
        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  // Render About page
  if (currentPage === 'about') {
    return <AboutPage />;
  }

  // Render Homepage
  return (
    <>
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <Hero setActiveSection={setActiveSection} />
      <About setCurrentPage={setCurrentPage} />
      <Services />
      <Products />
      <Contact />
      <Footer setActiveSection={setActiveSection} />

      {/* Floating Contact Icon */}
      <button
        className="floating-contact-btn"
        onClick={() => setShowContactModal(true)}
        aria-label="Quick Contact"
      >
        <MessageSquare size={24} />
        <span className="btn-ping"></span>
      </button>

      {/* Quick Contact Modal */}
      {showContactModal && (
        <div className="contact-modal-overlay" onClick={() => setShowContactModal(false)}>
          <div className="contact-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="contact-modal-close-btn" onClick={() => setShowContactModal(false)}>
              <X size={20} />
            </button>
            <div className="contact-modal-header">
              <h3>Quick Contact</h3>
              <p>Leave your details and we will reach out shortly.</p>
            </div>
            <form className="contact-modal-form" onSubmit={(e) => { e.preventDefault(); alert('Thank you! Your details have been submitted.'); setShowContactModal(false); }}>
              <div className="contact-form-group">
                <input type="text" placeholder="Full Name" required />
              </div>
              <div className="contact-form-group">
                <input type="email" placeholder="Email Address" required />
              </div>
              <div className="contact-form-group">
                <input type="tel" placeholder="Phone Number" required />
              </div>
              <div className="contact-form-group">
                <textarea placeholder="Message / Requirements" rows="3" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

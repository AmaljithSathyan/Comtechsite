import React from 'react';
import './Products.css';

export default function Products() {
  const handleExploreClick = () => {
    window.location.hash = '#/products';
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <section id="products" className="section products-section">
      {/* Background illustrations */}
      <div className="products-bg-illustrations">
        <div className="bg-illus-item bg-illus-laptop">
          <svg viewBox="0 0 100 80" className="illus-svg laptop-svg">
            <rect x="15" y="10" width="70" height="46" rx="4" fill="none" stroke="var(--accent-primary)" strokeWidth="2" />
            <rect x="18" y="13" width="64" height="40" rx="2" fill="rgba(14, 165, 233, 0.05)" />
            <path d="M5,62 L95,62 L85,72 L15,72 Z" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinejoin="round" />
            <rect x="42" y="65" width="16" height="5" rx="1" fill="none" stroke="var(--accent-secondary)" strokeWidth="1.5" />
            <line x1="24" y1="20" x2="44" y2="20" stroke="var(--accent-secondary)" strokeWidth="2.5" strokeLinecap="round" className="anim-line-1" />
            <line x1="24" y1="28" x2="60" y2="28" stroke="var(--accent-primary)" strokeWidth="2.5" strokeLinecap="round" className="anim-line-2" />
            <line x1="24" y1="36" x2="36" y2="36" stroke="var(--accent-secondary)" strokeWidth="2.5" strokeLinecap="round" className="anim-line-3" />
            <line x1="24" y1="44" x2="52" y2="44" stroke="var(--accent-primary)" strokeWidth="2.5" strokeLinecap="round" className="anim-line-4" />
          </svg>
        </div>

        <div className="bg-illus-item bg-illus-desktop">
          <svg viewBox="0 0 100 80" className="illus-svg desktop-svg">
            <rect x="12" y="8" width="60" height="40" rx="3" fill="none" stroke="var(--accent-primary)" strokeWidth="2" />
            <rect x="15" y="11" width="54" height="34" rx="1" fill="rgba(14, 165, 233, 0.05)" />
            <path d="M36,48 L32,62 L52,62 L48,48 Z" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinejoin="round" />
            <rect x="78" y="12" width="14" height="50" rx="2" fill="none" stroke="var(--accent-secondary)" strokeWidth="2" />
            <circle cx="85" cy="20" r="1.5" fill="var(--accent-secondary)" className="anim-led" />
            <line x1="82" y1="56" x2="88" y2="56" stroke="var(--accent-primary)" strokeWidth="1.5" />
            <path d="M20,36 L30,26 L40,32 L50,20 L60,28" fill="none" stroke="var(--accent-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="anim-path" />
          </svg>
        </div>

        <div className="bg-illus-item bg-illus-printer">
          <svg viewBox="0 0 100 80" className="illus-svg printer-svg">
            <path d="M20,30 L80,30 L85,45 L85,65 L15,65 L15,45 Z" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinejoin="round" />
            <path d="M30,30 L30,15 L70,15 L70,30" fill="none" stroke="var(--accent-primary)" strokeWidth="2" />
            <rect x="25" y="52" width="50" height="15" fill="none" stroke="var(--accent-secondary)" strokeWidth="1.5" />
            <rect x="28" y="44" width="44" height="18" fill="rgba(6, 182, 212, 0.08)" stroke="var(--accent-secondary)" strokeWidth="1.5" className="anim-paper" />
            <circle cx="78" cy="40" r="1.2" fill="var(--accent-primary)" />
            <circle cx="78" cy="45" r="1.2" fill="var(--accent-secondary)" className="anim-led" />
          </svg>
        </div>

        <div className="bg-illus-item bg-illus-firewall">
          <svg viewBox="0 0 100 80" className="illus-svg firewall-svg">
            <path d="M50,12 C62,12 74,18 78,28 C78,48 50,68 50,68 C50,68 22,48 22,28 C26,18 38,12 50,12 Z" fill="rgba(14, 165, 233, 0.05)" stroke="var(--accent-primary)" strokeWidth="2" strokeLinejoin="round" className="anim-shield" />
            <rect x="42" y="38" width="16" height="12" rx="2" fill="none" stroke="var(--accent-secondary)" strokeWidth="2" />
            <path d="M46,38 L46,30 C46,26 54,26 54,30 L54,38" fill="none" stroke="var(--accent-secondary)" strokeWidth="2" />
            <line x1="20" y1="28" x2="80" y2="28" stroke="var(--accent-secondary)" strokeWidth="1.5" strokeDasharray="4 4" className="anim-scanner" />
          </svg>
        </div>

        <div className="bg-illus-item bg-illus-tablet">
          <svg viewBox="0 0 100 80" className="illus-svg tablet-svg">
            <rect x="20" y="8" width="60" height="64" rx="6" fill="none" stroke="var(--accent-primary)" strokeWidth="2" />
            <rect x="24" y="12" width="52" height="56" rx="2" fill="rgba(14, 165, 233, 0.05)" />
            <circle cx="50" cy="71" r="1.5" fill="none" stroke="var(--accent-secondary)" strokeWidth="1" />
            <circle cx="40" cy="24" r="3" fill="var(--accent-secondary)" />
            <circle cx="60" cy="24" r="3" fill="var(--accent-primary)" />
            <circle cx="40" cy="44" r="3" fill="var(--accent-primary)" />
            <circle cx="60" cy="44" r="3" fill="var(--accent-secondary)" />
            <circle cx="50" cy="34" r="2" fill="none" stroke="var(--accent-secondary)" strokeWidth="1.5" className="anim-touch-pulse" />
          </svg>
        </div>
      </div>

      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 3 }}>
        <h2 className="section-title reveal-slide-up">
          Enterprise <span className="gradient-text">IT Products</span>
        </h2>
        <p className="section-subtitle reveal-fade delay-100">
          Select from our range of tier-1 server hardware, firewalls, network switches, and security cameras.
        </p>

        <div style={{ marginTop: '40px' }} className="reveal-fade delay-200">
          <button className="btn btn-primary btn-explore-main" onClick={handleExploreClick}>
            Explore Our Products
          </button>
        </div>
      </div>
    </section>
  );
}

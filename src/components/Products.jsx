import React from 'react';
import './Products.css';

export default function Products() {
  const handleExploreClick = () => {
    window.location.hash = '#/products';
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <section id="products" className="section products-section">
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="section-title reveal-slide-up">
          Enterprise <span className="gradient-text">IT Products</span>
        </h2>
        <p className="section-subtitle reveal-fade delay-100">
          Select from our range of tier-1 server hardware, firewalls, network switches, and security cameras.
        </p>
        <div style={{ marginTop: '40px' }} className="reveal-fade delay-200">
          <button className="btn btn-primary" onClick={handleExploreClick}>
            Explore Our Products
          </button>
        </div>
      </div>
    </section>
  );
}

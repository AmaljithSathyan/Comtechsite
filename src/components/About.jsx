import React from 'react';
import { Award, ShieldCheck, HeartHandshake, MapPin, Phone, Mail, Clock } from 'lucide-react';
import './About.css';

export default function About() {

  const coreValues = [
    {
      icon: <Award size={32} className="val-icon" />,
      title: '24+ Years of Quality',
      desc: 'Delivering robust IT hardware, certified system integration, and proactive AMC services since 2002.'
    },
    {
      icon: <ShieldCheck size={32} className="val-icon" />,
      title: 'Cybersecurity First',
      desc: 'Strategic collaborations with global security leaders like Sophos to protect endpoint, cloud, and network environments.'
    },
    {
      icon: <HeartHandshake size={32} className="val-icon" />,
      title: 'Client Commitment',
      desc: 'Round-the-clock service SLAs, preventative hardware maintenance, and tailored IT architecture Consulting.'
    }
  ];

  const locations = [
    {
      city: 'Ernakulam (Kochi)',
      role: 'Headquarters',
      address: 'Katti One, 31/352 D Paradise Road, Vytilla P.O, Kochi - 682019',
      phone: '+91 484 353 0200 / +91 974 669 0000',
      email: 'bde@comtechsystems.in'
    },
    {
      city: 'Alappuzha',
      role: 'Regional Branch',
      address: 'Comtech Buildings, Kaichoondy Junction, Alappuzha, Kerala - 688006',
      phone: '+91 974 669 0000',
      email: 'alpy@comtechsystems.in'
    },
    {
      city: 'Chennai',
      role: 'Enterprise Solutions',
      address: '1st Floor, Mount Road, Chennai, Tamil Nadu - 600015',
      phone: '+91 974 669 0000',
      email: 'chennai@comtechsystems.in'
    }
  ];

  const timelineEvents = [
    { year: '2002', title: 'The Inception', desc: 'Comtech Systems founded in Kerala, providing essential computing hardware and system setup services.' },
    { year: '2008', title: 'Network Expansion', desc: 'Diversified into enterprise network routing, structured cabling, and Unified Threat Management (UTM).' },
    { year: '2014', title: 'Regional Footprint', desc: 'Established branch offices in Alappuzha and Chennai to serve growing enterprise clusters.' },
    { year: '2019', title: 'Cloud & Hybrid Solutions', desc: 'Launched virtualization, hyper-converged hardware, and public/private cloud migrations.' },
    { year: '2024+', title: 'Next-Gen Cybersecurity', desc: 'Partnered with Sophos and advanced AI-driven endpoint detection and SD-WAN architectures.' }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title reveal-slide-up">Our Story & <span className="gradient-text">Values</span></h2>
        <p className="section-subtitle reveal-fade delay-100">
          Empowering enterprises with cutting-edge IT infrastructure and services since 2002.
        </p>

        {/* Brand Overview */}
        <div className="grid-2 brand-overview">
          <div className="overview-text reveal-slide-left delay-200">
            <h3>Who We Are</h3>
            <p>
              Comtech Systems is a pioneering IT services company established in 2002, recognized for our unwavering commitment to delivering top-tier solutions. With a proven track record of implementing cutting-edge technologies and fostering innovation, we are dedicated to propelling businesses forward in the ever-evolving landscape of technology and infrastructure.
            </p>
            <button 
              className="btn btn-primary explore-about-btn"
              onClick={() => { window.location.hash = '#/about'; window.scrollTo({ top: 0, behavior: 'instant' }); }}
            >
              Explore More About Us
            </button>
          </div>
          <div className="overview-values">
            {coreValues.map((val, index) => (
              <div key={index} className={`value-card glass-panel reveal-scale-up delay-${(index + 1) * 100}`}>
                <div className="value-icon-wrapper">{val.icon}</div>
                <div className="value-info">
                  <h4>{val.title}</h4>
                  <p>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Growth Timeline */}
        <div className="timeline-section-wrapper">
          <h3 className="timeline-title reveal-slide-up">Our Growth Journey</h3>

          <div className="timeline-layout-grid">
            {/* Left Column: Engineer Photo */}
            <div className="timeline-photo-box glass-panel reveal-slide-left delay-200">
              <img src="/service-engineer.png" alt="Comtech IT Service Engineer" className="engineer-photo" />
              <div className="photo-overlay-tag">Certified Support Team</div>
            </div>

            {/* Right Column: Single-Sided Timeline */}
            <div className="timeline-container-right">
              <div className="timeline-line-right"></div>
              {timelineEvents.map((event, index) => (
                <div key={index} className={`timeline-item-right reveal-slide-right delay-${(index + 1) * 100}`}>
                  <div className="timeline-badge-right">{event.year}</div>
                  <div className="timeline-panel-right glass-panel">
                    <h4>{event.title}</h4>
                    <p>{event.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="locations-container">
          <h3 className="locations-title reveal-slide-up">Our Presence</h3>
          <p className="locations-subtitle reveal-fade delay-100">Reach out to our teams across our strategic regional branch offices.</p>

          <div className="grid-3">
            {locations.map((loc, index) => (
              <div key={index} className={`location-card glass-panel reveal-scale-up delay-${(index + 1) * 100}`}>
                <div className="loc-card-header">
                  <MapPin size={24} className="pin-icon" />
                  <div>
                    <h4>{loc.city}</h4>
                    <span className="loc-role">{loc.role}</span>
                  </div>
                </div>
                <div className="loc-card-body">
                  <p className="loc-address">{loc.address}</p>
                  <div className="loc-contact-details">
                    <div className="loc-detail">
                      <Phone size={16} />
                      <span>{loc.phone}</span>
                    </div>
                    <div className="loc-detail">
                      <Mail size={16} />
                      <span>{loc.email}</span>
                    </div>
                    <div className="loc-detail">
                      <Clock size={16} />
                      <span>9:30 AM - 6:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

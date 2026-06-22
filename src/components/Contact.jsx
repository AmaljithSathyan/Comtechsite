import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'managed-it',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API Submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'managed-it',
        message: ''
      });
      // Clear success notification after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };



  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title reveal-slide-up">Connect <span className="gradient-text">With Us</span></h2>
        <p className="section-subtitle reveal-fade delay-100">
          Discuss your server deployment, network cabling, or firewall project with our IT consultants today.
        </p>

        <div className="grid-2 contact-layout">
          {/* Info Side */}
          <div className="contact-info-side reveal-slide-left delay-200">
            <h3>Contact Information</h3>
            <p className="info-desc">
              Have questions or need immediate IT support? Call our hotline or send us an email. Our technical teams are ready to configure your infrastructure.
            </p>

            <div className="info-cards">
              <div className="info-card-item glass-panel">
                <Phone className="info-icon" />
                <div className="info-text">
                  <h4>Call Us</h4>
                  <p>+91 484 353 0200</p>
                  <p>+91 974 669 0000</p>
                </div>
              </div>
              <div className="info-card-item glass-panel">
                <Mail className="info-icon" />
                <div className="info-text">
                  <h4>Email Us</h4>
                  <p>bde@comtechsystems.in</p>
                  <p>support@comtechsystems.in</p>
                </div>
              </div>
              <div className="info-card-item glass-panel">
                <MapPin className="info-icon" />
                <div className="info-text">
                  <h4>Head Office</h4>
                  <p>Katti One, 31/352 D Paradise Road,</p>
                  <p>Vytilla P.O, Kochi - 682019, Kerala</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="contact-form-side glass-panel reveal-slide-right delay-200">
            <h3>Request a Free Quotation</h3>
            
            {submitSuccess && (
              <div className="submit-success-banner">
                <CheckCircle className="success-icon" />
                <div>
                  <h4>Quotation Request Received!</h4>
                  <p>Our business development executives will review your query and contact you within 24 hours.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Full Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-phone">Phone Number</label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter phone number"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">Email Address</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter work email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-service">Required Solution</label>
                <select
                  id="contact-service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                >
                  <option value="managed-it">Managed IT Services & AMC</option>
                  <option value="cybersecurity">Cybersecurity & UTM (Sophos)</option>
                  <option value="cloud-data">Cloud & Virtualization Servers</option>
                  <option value="networking">Structured Cabling & LAN/WAN</option>
                  <option value="backup-recovery">Data Backup & Recovery</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Project Description / Requirements</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="How can we help? (e.g. number of users, server nodes, or specific products required)"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary submit-btn"
              >
                {isSubmitting ? (
                  <span>Submitting request...</span>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>


      </div>
    </section>
  );
}

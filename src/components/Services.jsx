import React, { useState } from 'react';
import { Shield, Settings, Cloud, Network, Database, X, CheckCircle2 } from 'lucide-react';
import servicesBgVideo from '../assets/IT services.mp4';
import './Services.css';

export default function Services() {
  const [activeModal, setActiveModal] = useState(null);

  const servicesData = [
    {
      id: 'cybersecurity',
      icon: <Shield size={36} />,
      title: 'Cybersecurity & UTM',
      shortDesc: 'Complete threat protection, endpoint management, and firewall deployments partnering with Sophos and Fortinet.',
      fullDesc: 'We safeguard your digital assets from core to edge. As authorized security integrators, we deploy advanced Unified Threat Management (UTM) systems, next-gen firewalls (NGFW), secure remote access VPN tunnels, and Endpoint Detection and Response (EDR) agents to secure cloud and physical server environments.',
      features: [
        'Sophos Next-Gen Firewall Installation & Support',
        'Endpoint Protection (EDR & XDR) & Antivirus Systems',
        'Email Encryption & Spam Filters',
        'Vulnerability Assessment & Penetration Testing (VAPT)',
        'Secure remote access (SSL-VPN / IPsec-VPN)'
      ],
      techStack: ['Sophos', 'Fortinet', 'SonicWall', 'Kaspersky', 'Bitdefender']
    },
    {
      id: 'managed-it',
      icon: <Settings size={36} />,
      title: 'Managed IT Services & AMC',
      shortDesc: 'Comprehensive Annual Maintenance Contracts (AMC) for servers, desktops, networks, and complete IT operations.',
      fullDesc: 'Our Annual Maintenance Contracts (AMC) provide businesses with predictable IT support and preventative maintenance. We assign certified IT engineers to manage local infrastructure, run regular diagnostics, execute OS security patching, and resolve hardware breakdowns with minimal downtime.',
      features: [
        'Dedicated SLA-backed 24/7 technical support hotline',
        'Preventative hardware health audits and cleanups',
        'Server administration (Active Directory, Domain Setup)',
        'On-site breakdown repair & backup equipment sourcing',
        'Asset management and software compliance reporting'
      ],
      techStack: ['Microsoft Server', 'Linux', 'Veeam', 'PRTG Network Monitor']
    },
    {
      id: 'cloud-data',
      icon: <Cloud size={36} />,
      title: 'Cloud & Data Center Solutions',
      shortDesc: 'Scalable virtualization, server hosting, hybrid cloud setups, and high-performance server migrations.',
      fullDesc: 'Modernize operations by moving computing capacity to the cloud or deploying highly efficient virtual machines. We design and build private virtualization clouds (VMware/Hyper-V), migrate database schemas to AWS/Azure environments, and configure reliable off-site backup structures.',
      features: [
        'VMware ESXi & Microsoft Hyper-V Cluster Virtualization',
        'AWS, Microsoft Azure, & Hybrid Cloud Integrations',
        'NAS, SAN, and unified storage configurations',
        'Database hosting, backup, and cluster tuning',
        'High-density server cabinet designs & structured cooling advice'
      ],
      techStack: ['VMware', 'Hyper-V', 'AWS', 'Azure', 'Synology', 'Dell EMC']
    },
    {
      id: 'networking',
      icon: <Network size={36} />,
      title: 'Structured Cabling & LAN/WAN',
      shortDesc: 'High-availability Cat6/Fiber optics cable routing, enterprise WiFi setups, and managed switch networks.',
      fullDesc: 'The physical cable network is the backbone of all computing. We perform high-standard structural cabling audits and installations utilizing Cat6 copper and multi-mode optical fiber lines. We also optimize LAN routing and deploy enterprise-grade mesh WiFi networks for heavy client loads.',
      features: [
        'Cat6, Cat6A, & Fiber Optic Cable Termination & Audit',
        'Enterprise Wireless (WiFi 6/6E) Controllers & Access Points',
        'L2/L3 Managed Switch configuration (VLANs, QoS)',
        'Point-to-Point (P2P) wireless bridges for campuses',
        'Server rack arrangement and structured cable labeling'
      ],
      techStack: ['Cisco', 'D-Link', 'Ubiquiti UniFi', 'Aruba', 'CommScope']
    },
    {
      id: 'backup-recovery',
      icon: <Database size={36} />,
      title: 'Data Backup & Disaster Recovery',
      shortDesc: 'Military-grade off-site data retention systems, cloud storage vaults, and quick bare-metal restores.',
      fullDesc: 'Ensure operational resilience with modern business continuity setups. We implement strict automated backup protocols that sync server states to physical NAS devices locally and mirror them to encrypted cloud storage vaults. This guarantees fast recoveries from hardware crashes or cyber incidents.',
      features: [
        'Automated incremental daily/hourly backup routines',
        'Bare-metal system image recovery setups',
        'Synology & QNAP network storage deployment',
        'Ransomware-protected immutable backups',
        'Disaster recovery planning, testing, and drills'
      ],
      techStack: ['Veeam Backup', 'Acronis', 'Synology', 'QNAP', 'AWS S3 Glaciers']
    }
  ];

  return (
    <section id="services" className="section services-section">
      {/* Background Video */}
      <video className="services-bg-video" autoPlay loop muted playsInline>
        <source src={servicesBgVideo} type="video/mp4" />
      </video>

      <div className="aurora-bg">
        <div className="aurora-blob aurora-blob-1"></div>
        <div className="aurora-blob aurora-blob-2"></div>
        <div className="aurora-blob aurora-blob-3"></div>
      </div>
      <div className="container">
        <h2 className="section-title reveal-slide-up">Enterprise <span className="gradient-text">IT Services</span></h2>
        <p className="section-subtitle reveal-fade delay-100">
          Tailored tech solutions designed to guarantee network uptime, absolute cybersecurity, and smooth system administration.
        </p>

        <div className="grid-3 services-grid">
          {servicesData.map((svc, index) => (
            <div key={svc.id} className={`service-card glass-panel reveal-scale-up delay-${(index + 1) * 100}`}>
              <div className="service-icon-box">{svc.icon}</div>
              <h3 className="service-card-title">{svc.title}</h3>
              <p className="service-card-desc">{svc.shortDesc}</p>
              <button 
                className="btn btn-secondary service-learn-more"
                onClick={() => setActiveModal(svc)}
              >
                Learn Detailed Specs
              </button>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '55px', textAlign: 'center' }} className="reveal-fade delay-400">
          <button 
            className="btn btn-primary" 
            onClick={() => {
              window.location.hash = '#/services';
              window.scrollTo({ top: 0, behavior: 'instant' });
            }}
          >
            Explore More Services
          </button>
        </div>
      </div>

      {/* Details Modal */}
      {activeModal && (
        <div className="service-modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="service-modal glass-panel" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveModal(null)}>
              <X size={24} />
            </button>
            <div className="modal-header">
              <div className="modal-icon-box">{activeModal.icon}</div>
              <h2>{activeModal.title}</h2>
            </div>
            <div className="modal-body">
              <p className="modal-description">{activeModal.fullDesc}</p>
              
              <div className="modal-features-section">
                <h3>Core Capabilities & Inclusions</h3>
                <ul className="modal-features-list">
                  {activeModal.features.map((feat, index) => (
                    <li key={index}>
                      <CheckCircle2 size={18} className="feat-check" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-tech-section">
                <h3>Preferred Technology Partners</h3>
                <div className="tech-badges">
                  {activeModal.techStack.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button 
                className="btn btn-primary" 
                onClick={() => {
                  setActiveModal(null);
                  // Scroll to contact form
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get Services Quotation
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowLeft, Search, Monitor, ShieldAlert, Wrench, Cloud, Smartphone, 
  Network, Briefcase, Camera, HardDrive, RefreshCw, PhoneCall, Layers, X, ArrowRight, CheckCircle2
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ServicesPage.css';

/* ─────────────── Data ─────────────── */
const servicesData = [
  {
    id: 'it-infrastructure',
    title: 'IT Infrastructure Products',
    icon: <Monitor size={36} />,
    desc: 'Supply, assembly, and commissioning of Tier-1 server hardware, storage setups, and network infrastructure products.',
    fullDesc: 'We specialize in providing robust IT infrastructure components tailored for enterprise needs. From assembling advanced server racks and data backup stations to component upgrades, database storage drives, and custom workstations, we ensure your company\'s physical systems are fast, secure, and resilient.',
    capabilities: [
      'High-performance HP, Dell, and Lenovo server hardware deployment',
      'Data backup vaults and network storage setup (NAS & SAN)',
      'Enterprise-grade component upgrades (RAM, SSDs, Processors)',
      'Custom workspace architecture and high-end graphic workstations'
    ],
    techStack: ['HP Enterprise', 'Dell PowerEdge', 'Lenovo ThinkSystem', 'Synology']
  },
  {
    id: 'cybersecurity',
    title: 'Cyber Security Solutions',
    icon: <ShieldAlert size={36} />,
    desc: 'Absolute network protection, next-gen UTM firewalls, endpoints, and anti-ransomware policies.',
    fullDesc: 'We safeguard your enterprise network perimeter against modern cyber threats. Partnering with Sophos, Fortinet, and other industry leaders, we deploy Unified Threat Management (UTM) boxes, Next-Gen Firewalls (NGFW), secure VPN gateways, and advanced endpoint detection and response (EDR/XDR) systems.',
    capabilities: [
      'Sophos & Fortinet firewall deployments and UTM configuration',
      'Advanced anti-ransomware and endpoint security agents',
      'Intrusion Detection/Prevention Systems (IDS/IPS)',
      'Security policy auditing, monitoring, and compliance reporting'
    ],
    techStack: ['Sophos XGS', 'Fortinet FortiGate', 'Kaspersky', 'Bitdefender']
  },
  {
    id: 'it-services-amc',
    title: 'IT Services & AMC',
    icon: <Wrench size={36} />,
    desc: 'Comprehensive Annual Maintenance Contracts (AMC) for servers, systems, and network equipment.',
    fullDesc: 'Ensure absolute business continuity with our proactive IT Maintenance. Our Annual Maintenance Contracts (AMC) provide round-the-clock remote troubleshooting, periodic hardware audits, emergency server restores, and system administration services to guarantee zero network downtime.',
    capabilities: [
      '24/7 technical support and proactive system health checkups',
      'Annual Maintenance Contracts (AMC) for servers and workstations',
      'OS installations, virtualization support, and patch management',
      'Hardware replacement management and server health monitoring'
    ],
    techStack: ['Microsoft Server', 'Linux System Admin', 'CentOS / Ubuntu', 'Remote Desk']
  },
  {
    id: 'cloud-datacenter',
    title: 'Data Centre & Cloud Solutions',
    icon: <Cloud size={36} />,
    desc: 'Secure virtualization, private and public cloud migrations, hosting, and data center structures.',
    fullDesc: 'We design and implement secure cloud environments using public (AWS, Azure) and private data center architectures. Whether you need physical container storage, high-speed virtualization hosts, or a hybrid cloud failover workspace, we facilitate smooth migrations and optimized setups.',
    capabilities: [
      'AWS & Microsoft Azure tenant migration and cloud setups',
      'Private cloud deployments and high-availability container hosting',
      'Virtualization infrastructure building (VMware ESXi, Hyper-V)',
      'Hybrid cloud storage syncing and high-bandwidth replication'
    ],
    techStack: ['AWS', 'Microsoft Azure', 'VMware vSphere', 'Proxmox VE']
  },
  {
    id: 'mobility-solutions',
    title: 'Mobility Solutions',
    icon: <Smartphone size={36} />,
    desc: 'Optimized mobile computing infrastructures, secure endpoint access, and device deployment.',
    fullDesc: 'Empower your modern workforce on the go. Our mobility solutions enable employees to securely access company networks and databases from laptops and tablets while maintaining absolute network integrity. We manage endpoints, configure remote permissions, and implement secure data transfer tunnels.',
    capabilities: [
      'Unified Endpoint Management (UEM) for remote company devices',
      'Secure data transfer protocols and virtual private access policies',
      'HP mobile workstation setups and secure configuration',
      'Remote wiping and security posture audits for lost devices'
    ],
    techStack: ['Microsoft Intune', 'VMware Workspace ONE', 'HP EliteBooks', 'iPad OS']
  },
  {
    id: 'networking-monitoring',
    title: 'Networking & Monitoring',
    icon: <Network size={36} />,
    desc: 'Structured cabling, intelligent routing, switching, and real-time bandwidth performance management.',
    fullDesc: 'Communication is key for business operations. We lay the groundwork for high-speed local networks using structured copper and fiber cabling, configure core routing and switching topologies, deploy secure SD-WAN nodes, and implement continuous bandwidth monitoring tools.',
    capabilities: [
      'Structured networking (Cat6, Cat6A, Fiber Optic) layout cabling',
      'Core router configuration, VLAN segmentations, and smart switches',
      'Real-time traffic analysis, bandwidth audits, and performance alerts',
      'Intelligent network load balancing and redundant backup links'
    ],
    techStack: ['Cisco Systems', 'Aruba Networks', 'Ubiquiti UniFi', 'Zabbix']
  },
  {
    id: 'it-consulting',
    title: 'IT Consulting & Support',
    icon: <Briefcase size={36} />,
    desc: 'Strategic technology consulting, system audits, and dedicated enterprise helpline services.',
    fullDesc: 'Unlock your business growth potential through modern technology. Our team of certified IT consultants evaluates your current system constraints, maps out a secure scaling roadmap, recommends modern software integrations, and provides technical customer support desks.',
    capabilities: [
      'IT infrastructure auditing and tech constraint analysis',
      'Long-term digital transformation roadmap planning',
      'Software integration consulting and vendor management',
      'Helpdesk customer support setups and escalation workflows'
    ],
    techStack: ['Strategic Auditing', 'ITIL Best Practices', 'SLA Helplines', 'Support Desks']
  },
  {
    id: 'surveillance',
    title: 'Surveillance Solutions',
    icon: <Camera size={36} />,
    desc: 'High-resolution IP surveillance cameras, network video recorders, and biometric access control systems.',
    fullDesc: 'Maintain absolute physical security across your office buildings, data facilities, and logistics centers. We implement intelligent IP camera setups, high-yield network video recorders (NVR), door access control systems, and biometric attendance logs that link directly with database registers.',
    capabilities: [
      'IP CCTV camera layout design, installation, and software setups',
      'Biometric access controls and door security hardware logs',
      'Intelligent motion detection, analytics, and instant alert system',
      'Centralized surveillance dashboards with remote access capabilities'
    ],
    techStack: ['Hikvision', 'Dahua Technology', 'Honeywell Security', 'Matrix Biometrics']
  },
  {
    id: 'storage-solutions',
    title: 'Storage Solutions',
    icon: <HardDrive size={36} />,
    desc: 'Architected SAN/NAS storage arrays, high-yield file servers, and virtualized volumes.',
    fullDesc: 'Settle all enterprise storage needs with custom storage environments. We build high-speed storage area networks (SAN) and network-attached storage (NAS) solutions for rapid local access, configure automated volume tiering, and setup enterprise file sharing permissions.',
    capabilities: [
      'High-yield QNAP and Synology NAS server arrays setup',
      'SAN design for high-performance virtual machine storage hosts',
      'Shared data servers with strict access control configurations',
      'Storage volume expansions and automated tiering optimizations'
    ],
    techStack: ['Synology RackStation', 'QNAP Enterprise', 'Seagate IronWolf', 'SAN Fibers']
  },
  {
    id: 'data-backup-dr',
    title: 'Data Management & DR',
    icon: <RefreshCw size={36} />,
    desc: 'Real-time database replication, immutable off-site backups, and automatic failover planning.',
    fullDesc: 'Protect your enterprise database registers from catastrophic data losses. We deploy Veeam and Acronis backup engines to perform daily incremental backups, copy backups to immutable off-site repositories, and map out automated disaster recovery (DR) failovers.',
    capabilities: [
      'Veeam and Acronis server backups scheduling configurations',
      'Air-gapped, immutable off-site database target repositories',
      'Failover server templates and live standby replicas setup',
      'Disaster recovery drills, validation logs, and quick restores'
    ],
    techStack: ['Veeam Backup', 'Acronis Cyber Protect', 'Immutable Glaciers', 'Standby Reps']
  },
  {
    id: 'communication-collaboration',
    title: 'Communication & Collaboration',
    icon: <PhoneCall size={36} />,
    desc: 'Enterprise IP PBX systems, shared collaboration workspace portals, and messaging hubs.',
    fullDesc: 'Unify communication across departments. We install modern IP PBX and VoIP telephone configurations, deploy hybrid meeting room equipment, set up collaboration platforms (Teams, Google Workspace), and establish secure internal messaging networks.',
    capabilities: [
      'VoIP PBX telephone systems supply, cabling, and software setups',
      'Collaboration platform configurations and domain setups',
      'Unified messaging hubs and secure email integrations',
      'Interactive hybrid meeting room audio/video layouts'
    ],
    techStack: ['Grandstream PBX', 'Matrix VoIP', 'Google Workspace', 'Microsoft Teams']
  },
  {
    id: 'virtual-desktop',
    title: 'Virtual Desktop Infrastructure',
    icon: <Layers size={36} />,
    desc: 'Secure virtual desktop hosting, thin clients deployment, and remote desktop services.',
    fullDesc: 'Provide secure work environments for remote teams. By deploying Virtual Desktop Infrastructure (VDI), we host employee operating systems on centralized server clusters. Employees log in using lightweight thin clients or personal devices, keeping data secure inside the servers.',
    capabilities: [
      'VMware Horizon and Microsoft Remote Desktop Services configuration',
      'Centrally managed desktop images with strict data loss rules',
      'High-yield thin client hardware supply and installations',
      'Remote work setups with secure token authentications'
    ],
    techStack: ['VMware Horizon', 'Microsoft RDS', 'NVIDIA vGPU', 'Citrix VDI']
  }
];

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModal, setActiveModal] = useState(null);
  const containerRef = useRef(null);

  // Trigger page entry animations using IntersectionObserver
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.documentElement.setAttribute('data-theme', 'dark');

    const observeCards = () => {
      const cards = containerRef.current?.querySelectorAll('.sp-service-card');
      if (!cards) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
      );

      cards.forEach((card) => observer.observe(card));
      return observer;
    };

    const timer = setTimeout(() => {
      const obs = observeCards();
      return () => obs?.disconnect();
    }, 80);

    return () => clearTimeout(timer);
  }, []);

  // Re-observe cards when filter query changes
  useEffect(() => {
    const timer = setTimeout(() => {
      const cards = containerRef.current?.querySelectorAll('.sp-service-card');
      if (!cards) return;
      cards.forEach((card) => card.classList.remove('is-visible'));

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
      );
      cards.forEach((card) => observer.observe(card));
      return () => observer.disconnect();
    }, 50);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const goBack = () => {
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleQuoteClick = (serviceTitle) => {
    window.location.hash = '';
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        const textarea = document.getElementById('contact-message');
        if (textarea) {
          textarea.value = `Hello, I would like to request information & consultation for your service: ${serviceTitle}. Please reach back to discuss enterprise requirements.`;
        }
      }
    }, 150);
  };

  const filteredServices = servicesData.filter((svc) => {
    const query = searchQuery.toLowerCase();
    return svc.title.toLowerCase().includes(query) || 
           svc.desc.toLowerCase().includes(query) ||
           svc.fullDesc.toLowerCase().includes(query);
  });

  return (
    <div className="services-page" ref={containerRef}>
      {/* ── Shared Navbar ── */}
      <Navbar activeSection="services" setActiveSection={() => {}} isAboutPage goBack={goBack} />

      {/* ════════════════════════════════════
          HERO BANNER
          ════════════════════════════════════ */}
      <section className="sp-hero">
        <div className="sp-hero-bg">
          <div className="sp-hero-blob sp-hero-blob-1" />
          <div className="sp-hero-blob sp-hero-blob-2" />
          <div className="sp-hero-grid" />
        </div>

        <div className="sp-hero-content">
          <div className="sp-hero-badge">
            <span className="sp-hero-badge-dot" />
            Turnkey IT Infrastructure Solutions
          </div>

          <h1 className="sp-hero-title">
            Enterprise <span className="gradient-text">IT Services & Solutions</span>
          </h1>

          <p className="sp-hero-subtitle">
            Proactive administration, structured networking, robust database replication, and iron-clad cybersecurity systems built to fuel corporate stability and scalability.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════
          SEARCH/CONTROLS SECTION
          ════════════════════════════════════ */}
      <section className="sp-controls-section">
        <div className="sp-container">
          <div className="sp-search-wrapper">
            <Search className="sp-search-icon" size={20} />
            <input 
              type="text" 
              placeholder="Search services, technologies, or capabilities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="sp-search-input"
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          SERVICES LISTING GRID
          ════════════════════════════════════ */}
      <section className="sp-listings-section">
        <div className="sp-container">
          {filteredServices.length === 0 ? (
            <div className="sp-no-results">
              <h3>No matching services found</h3>
              <p>Try searching for terms like "firewall", "cabling", "cloud", or "server".</p>
              <button className="btn btn-secondary" onClick={() => setSearchQuery('')}>Clear Search</button>
            </div>
          ) : (
            <div className="sp-services-grid">
              {filteredServices.map((svc, index) => (
                <div 
                  key={svc.id} 
                  className="sp-service-card" 
                  style={{ '--card-delay': `${(index % 3) * 0.08}s` }}
                >
                  <div className="sp-card-icon-box">
                    {svc.icon}
                  </div>
                  <h3 className="sp-card-title">{svc.title}</h3>
                  <p className="sp-card-desc">{svc.desc}</p>
                  
                  <div className="sp-card-footer">
                    <button 
                      className="btn btn-secondary btn-sm"
                      onClick={() => setActiveModal(svc)}
                    >
                      Learn Detailed Specs
                    </button>
                    <button 
                      className="sp-card-quote-btn"
                      onClick={() => handleQuoteClick(svc.title)}
                    >
                      Get Quote <ArrowRight size={14} style={{ marginLeft: '4px' }} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Footer ── */}
      <Footer setActiveSection={() => {}} isAboutPage />

      {/* ════════════════════════════════════
          DETAILS MODAL
          ════════════════════════════════════ */}
      {activeModal && (
        <div className="sp-modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="sp-modal glass-panel" onClick={(e) => e.stopPropagation()}>
            <button className="sp-modal-close" onClick={() => setActiveModal(null)}>
              <X size={24} />
            </button>
            
            <div className="sp-modal-header">
              <div className="sp-modal-icon-box">{activeModal.icon}</div>
              <h2>{activeModal.title}</h2>
            </div>
            
            <div className="sp-modal-body">
              <p className="sp-modal-description">{activeModal.fullDesc}</p>
              
              <div className="sp-modal-features-section">
                <h3>Core Capabilities & Scope</h3>
                <ul className="sp-modal-features-list">
                  {activeModal.capabilities.map((feat, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={18} className="sp-feat-check" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sp-modal-tech-section">
                <h3>Preferred Deployment Partners</h3>
                <div className="sp-tech-badges">
                  {activeModal.techStack.map((tech, idx) => (
                    <span key={idx} className="sp-tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="sp-modal-footer">
              <button 
                className="btn btn-primary" 
                onClick={() => {
                  setActiveModal(null);
                  handleQuoteClick(activeModal.title);
                }}
              >
                Inquire About Service
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

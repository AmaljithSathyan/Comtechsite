import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowLeft, Search, ShieldAlert, Network, Monitor, Laptop, Cpu, Tablet, Printer, X, ArrowRight
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ProductsPage.css';
import itServicesVideo from '../assets/IT services.mp4';
import Particles from '../components/Particles';

/* ─────────────── Data ─────────────── */
const categoryDivisions = [
  {
    id: 'laptops',
    tag: 'LAPTOPS',
    title: 'Move around while being connected',
    desc: 'Take your work/study online from anywhere by picking up Laptops from our all-purpose Laptops Online Store of the new generation.',
    image: '/laptops-banner.png'
  },
  {
    id: 'mobile_workstations',
    tag: 'MOBILE WORKSTATIONS',
    title: 'Take productivity with you on the go',
    desc: 'Work everywhere and anywhere! The connections to your work will go as smooth as the high-speed processors added in the HP mobile workstations.',
    image: '/mobile-workstations-banner.png'
  },
  {
    id: 'workstations',
    tag: 'WORKSTATIONS',
    title: 'Productivity at your place of work!',
    desc: 'Do more work in no time with all-in-one productivity work solutions brought to you by HP. Experience faster and efficient work management!',
    image: '/workstations-banner.png'
  },
  {
    id: 'tablets',
    tag: 'TABLETS',
    title: 'Condensed Computers to carry along!',
    desc: 'Big things are in small packages. The power of desktops merges with the mobility of laptops in size-friendly to your palms.',
    image: '/tablets-banner.png'
  },
  {
    id: 'desktops',
    tag: 'DESKTOPS',
    title: 'Settle all work on a desk',
    desc: 'Upgrade your daily work in the latest desktops. Shop in Comtech System\'s Computers & Laptops Online Store for the desktop that suits the work.',
    image: '/desktops-banner.png'
  },
  {
    id: 'firewalls',
    tag: 'FIREWALLS',
    title: 'Secure your enterprise perimeter',
    desc: 'Protect your network with industry-leading Next-Gen Firewalls. Inspect traffic, secure SD-WAN, and block incoming cyber threats instantly.',
    image: '/firewalls-banner.png'
  },
  {
    id: 'printers',
    tag: 'PRINTERS',
    title: 'High-yield, reliable office printing',
    desc: 'Streamline paperwork with high-volume, multi-function laser and ink tank printers built for double-sided printing and scanning.',
    image: '/printers-banner.png'
  }
];

const productsData = [
  {
    id: 'sophos-xgs',
    name: 'Sophos XGS 136 Next-Gen Firewall',
    category: 'firewalls',
    brand: 'Sophos',
    image: '/sophos-xgs.png',
    desc: 'Next-Gen Firewall with dual-processor architecture and integrated hardware acceleration for deep packet inspection and SD-WAN security.',
    specs: ['10 Gbps Firewall Throughput', '1.5 Gbps Threat Protection', 'Integrated SD-WAN Controller', 'SFP Fiber Port Support']
  },
  {
    id: 'dell-optiplex',
    name: 'Dell OptiPlex 7010 Tower Desktop',
    category: 'desktops',
    brand: 'Dell',
    image: '/dell-optiplex.png',
    desc: 'High-performance business desktop computer configured for general business tasks, office applications, and multi-display setups.',
    specs: ['Intel Core i5 13th Gen', '16GB DDR4 RAM', '512GB NVMe SSD', 'Windows 11 Pro Pre-installed']
  },
  {
    id: 'hp-prodesk',
    name: 'HP ProDesk 400 G9 SFF Desktop',
    category: 'desktops',
    brand: 'HP',
    image: '/dell-optiplex.png',
    desc: 'Space-saving small form factor business desktop, configured for everyday productivity, robust security features, and high energy efficiency.',
    specs: ['Intel Core i5 12th Gen', '8GB DDR4 RAM', '512GB PCIe NVMe SSD', 'HP Wolf Security for Business']
  },
  {
    id: 'hp-elitebook',
    name: 'HP EliteBook 840 G10 Business Laptop',
    category: 'laptops',
    brand: 'HP',
    image: '/hp-elitebook.png',
    desc: 'Premium enterprise laptop engineered with multi-layered hardware security, high-yield computational power, and a sleek lightweight body.',
    specs: ['Intel Core i7 13th Gen', '16GB DDR5 RAM / 512GB SSD', 'HP Sure Start Self-Healing BIOS', '14" WUXGA Anti-Glare Screen']
  },
  {
    id: 'lenovo-thinkpad',
    name: 'Lenovo ThinkPad L14 Gen 4 Business Laptop',
    category: 'laptops',
    brand: 'Lenovo',
    image: '/hp-elitebook.png',
    desc: 'Durability-focused business laptop known for its robust construction, comfortable keyboard, and integrated hardware security.',
    specs: ['AMD Ryzen 5 PRO Processor', '16GB DDR4 RAM', '512GB SSD Storage', 'MIL-STD-810H Military Grade Durability']
  },
  {
    id: 'hp-z2-workstation',
    name: 'HP Z2 G9 Tower Desktop Workstation',
    category: 'workstations',
    brand: 'HP',
    image: '/dell-optiplex.png',
    desc: 'Extreme-grade tower workstation designed to run 3D modeling, heavy engineering rendering, and local dataset analytics.',
    specs: ['Intel Xeon W-1300 Processor', '32GB ECC DDR5 RAM', 'NVIDIA RTX A2000 12GB GPU', '700W 90% Efficient PSU']
  },
  {
    id: 'dell-precision-tower',
    name: 'Dell Precision 3660 Tower Workstation',
    category: 'workstations',
    brand: 'Dell',
    image: '/dell-optiplex.png',
    desc: 'Entry-level tower workstation offering high scalability, ISV-certification for engineering/CAD software, and virtual reality creation.',
    specs: ['Intel Core i7 13700K', '32GB DDR5 ECC RAM', 'NVIDIA T1000 8GB GPU', '512GB SSD + 2TB SATA HDD']
  },
  {
    id: 'dell-precision-mw',
    name: 'Dell Precision 5570 Mobile Workstation',
    category: 'mobile_workstations',
    brand: 'Dell',
    image: '/hp-elitebook.png',
    desc: 'Ultra-thin, light laptop workstation combining visual color accuracy and extreme processing capacity for designers on-the-go.',
    specs: ['Intel Core i9 12th Gen (14-Core)', '32GB DDR5 RAM / 1TB SSD', 'NVIDIA RTX A1000 Professional GPU', '15.6" UHD+ HDR Touch Display']
  },
  {
    id: 'lenovo-thinkpad-p16',
    name: 'Lenovo ThinkPad P16 Gen 1 Mobile Workstation',
    category: 'mobile_workstations',
    brand: 'Lenovo',
    image: '/hp-elitebook.png',
    desc: 'Ultra-performance portable workstation engineered to tackle high-end data modeling, CAD rendering, and simulation tasks.',
    specs: ['Intel Core i7 HX-series', '32GB DDR5 RAM', 'NVIDIA RTX A2000 Laptop GPU', '16" WQXGA 100% sRGB Screen']
  },
  {
    id: 'samsung-tab-active',
    name: 'Samsung Galaxy Tab Active4 Pro',
    category: 'tablets',
    brand: 'Samsung',
    image: '/hp-elitebook.png',
    desc: 'Military-grade rugged tablet engineered for field service engineers, healthcare workers, and tough outdoor environments.',
    specs: ['10.1" WUXGA Gorilla Glass 5', 'MIL-STD-810H & IP68 Rated', 'Support for glove touch & S-Pen', 'Replaceable 7600 mAh battery']
  },
  {
    id: 'ipad-pro-rugged',
    name: 'Apple iPad Pro 12.9" with Rugged Case',
    category: 'tablets',
    brand: 'Apple',
    image: '/hp-elitebook.png',
    desc: 'High-performance iPad Pro paired with a military-grade OtterBox Defender protective case for heavy on-site reports and field inspection work.',
    specs: ['Apple M2 Silicon Chip', '256GB High-Speed Storage', '12.9" Liquid Retina XDR display', 'OtterBox Defender Case Bundled']
  },
  {
    id: 'hp-laserjet-printer',
    name: 'HP LaserJet Pro MFP M428fdw',
    category: 'printers',
    brand: 'HP',
    image: '/epson-ecotank.png',
    desc: 'Wireless, multi-function black-and-white laser printer configured for fast double-sided printing, scanning, and copying.',
    specs: ['Up to 40 ppm Print Speeds', 'Automatic 2-Sided Printing', '50-sheet Auto Document Feeder', 'HP Wolf Pro Security Built-in']
  },
  {
    id: 'epson-ecotank',
    name: 'Epson EcoTank L3250 Color Printer',
    category: 'printers',
    brand: 'Epson',
    image: '/epson-ecotank.png',
    desc: 'Ink Tank multi-function color printer delivering high print yields, low operating costs, and integrated Wi-Fi Direct connection.',
    specs: ['Ultra-low cost printing system', 'Up to 4500 Black / 7500 Color pages', 'Wi-Fi & App Direct Printing', '10 x 15 cm borderless photo support']
  },
  {
    id: 'fortigate-60f',
    name: 'Fortinet FortiGate 60F UTM Firewall',
    category: 'firewalls',
    brand: 'Fortinet',
    image: '/sophos-xgs.png',
    desc: 'Compact, all-in-one network security appliance optimized for distributed enterprise offices and secure SD-WAN setups.',
    specs: ['10 Gbps Firewall Throughput', '700 Mbps Threat Protection', 'Integrated secure SD-WAN controller', 'Fanless design for silent desktop use']
  }
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [animate, setAnimate] = useState(false);
  const containerRef = useRef(null);

  // Trigger page entry animations using IntersectionObserver per row
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.documentElement.setAttribute('data-theme', 'dark');

    const observeRows = () => {
      const rows = containerRef.current?.querySelectorAll('.pp-anim-row');
      if (!rows) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
      );

      rows.forEach((row) => observer.observe(row));
      return observer;
    };

    // Slight delay so DOM is ready
    const timer = setTimeout(() => {
      const obs = observeRows();
      return () => obs?.disconnect();
    }, 80);

    return () => clearTimeout(timer);
  }, []);

  // Re-observe rows when category/search changes
  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => {
      setAnimate(true);
      const rows = containerRef.current?.querySelectorAll('.pp-anim-row');
      if (!rows) return;
      // Reset visibility so animation replays
      rows.forEach((row) => row.classList.remove('is-visible'));

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
      );
      rows.forEach((row) => observer.observe(row));
      return () => observer.disconnect();
    }, 80);
    return () => clearTimeout(timer);
  }, [activeCategory, searchQuery]);

  const goBack = () => {
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleQuoteClick = (productName) => {
    window.location.hash = '';
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        const textarea = document.getElementById('contact-message');
        if (textarea) {
          textarea.value = `Hello, I would like to request a quotation for: ${productName}. Please provide availability and pricing details.`;
        }
      }
    }, 150);
  };

  const filteredProducts = productsData.filter((prod) => {
    const matchesCategory = activeCategory === null || searchQuery !== '' || prod.category === activeCategory;
    const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="products-page" ref={containerRef}>
      {/* ── Shared Navbar ── */}
      <Navbar activeSection="products" setActiveSection={() => { }} isAboutPage goBack={goBack} />

      {/* ════════════════════════════════════
          HERO HEADER
          ════════════════════════════════════ */}
      <section className="pp-hero">
        <div className="pp-hero-bg">
          <video
            src={itServicesVideo}
            autoPlay
            loop
            muted
            playsInline
            className="pp-hero-video"
          />
          <div className="pp-hero-particles-bg">
            <Particles
              particleColors={["#0ea5e9", "#00d8ff", "#3b82f6", "#ffffff"]}
              particleCount={170}
              particleSpread={8.5}
              speed={0.13}
              particleBaseSize={85}
              moveParticlesOnHover={true}
              particleHoverFactor={0.8}
              alphaParticles={true}
              disableRotation={false}
            />
          </div>
          <div className="pp-hero-blob pp-hero-blob-1" />
          <div className="pp-hero-blob pp-hero-blob-2" />
          <div className="pp-hero-grid" />
        </div>

        <div className="pp-hero-content">
          <div className="pp-hero-badge pp-reveal active">
            <span className="pp-hero-badge-dot" />
            Tier-1 Enterprise Solutions
          </div>

          <h1 className="pp-hero-title pp-reveal active">
            Enterprise <span className="gradient-text">IT Products</span>
          </h1>

          <p className="pp-hero-subtitle pp-reveal active">
            High-performance hardware, next-generation network perimeters, and robust device environments built to support your organization's digital transformation.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════
          CONTROLS: SEARCH
          ════════════════════════════════════ */}
      <section className="pp-controls-section">
        <div className="pp-container">
          <div className="pp-search-wrapper pp-reveal active" style={{ marginBottom: 0 }}>
            <Search className="pp-search-icon" size={20} />
            <input
              type="text"
              placeholder="Search by product name, brand, or features..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pp-search-input"
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          PRODUCTS LISTING (Saihasoft-style Layout)
          ════════════════════════════════════ */}
      <section className="pp-listings-section">
        <div className="pp-container">

          {/* If Category Overview Mode (activeCategory is null and searchQuery is empty) */}
          {activeCategory === null && searchQuery === '' ? (
            <div className={`pp-categories-list`}>
              {categoryDivisions.map((cat, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={cat.id}
                    className={`pp-anim-row pp-category-row ${isEven ? 'row-normal' : 'row-reversed'}`}
                    style={{ cursor: 'pointer', '--row-delay': `${index * 0.08}s` }}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      window.scrollTo({ top: 380, behavior: 'smooth' });
                    }}
                  >
                    {/* Column 1: Info */}
                    <div
                      className="pp-category-info-col"
                      onClick={() => {
                        setActiveCategory(cat.id);
                        window.scrollTo({ top: 380, behavior: 'smooth' });
                      }}
                    >
                      <span className="pp-category-tag">{cat.tag}</span>
                      <h2 className="pp-category-title">{cat.title}</h2>
                      <p className="pp-category-desc">{cat.desc}</p>
                      <button
                        className="btn btn-secondary pp-explore-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveCategory(cat.id);
                          window.scrollTo({ top: 380, behavior: 'smooth' });
                        }}
                      >
                        Shop Now <ArrowRight size={16} />
                      </button>
                    </div>

                    {/* Column 2: Visual Card */}
                    <div
                      className="pp-category-visual-col"
                      onClick={() => {
                        setActiveCategory(cat.id);
                        window.scrollTo({ top: 380, behavior: 'smooth' });
                      }}
                    >
                      <div className="pp-category-visual-card glass-panel">
                        <div className="pp-category-visual-glow" />
                        <div className="pp-category-image-wrapper">
                          <img
                            src={cat.image}
                            alt={cat.title}
                            className="pp-category-image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* Individual Products Mode */
            <div className="pp-products-view-container">

              {/* Back to Categories header (only when searching or a category is selected) */}
              <div className="pp-view-header pp-reveal active">
                <button
                  className="btn btn-secondary pp-back-btn"
                  onClick={() => {
                    setActiveCategory(null);
                    setSearchQuery('');
                  }}
                >
                  <ArrowLeft size={16} /> Back to Product Types
                </button>
                <h3 className="pp-results-heading">
                  {searchQuery !== ''
                    ? `Search Results for "${searchQuery}"`
                    : `${categoryDivisions.find(c => c.id === activeCategory)?.tag} Listings`
                  }
                </h3>
              </div>

              {filteredProducts.length > 0 ? (
                <div className={`pp-products-list`}>
                  {filteredProducts.map((prod, index) => {
                    const isEven = index % 2 === 0;
                    return (
                      <div
                        key={prod.id}
                        className={`pp-anim-row pp-product-row ${isEven ? 'row-normal' : 'row-reversed'}`}
                        style={{ '--row-delay': `${index * 0.1}s` }}
                      >
                        {/* Column 1: Info */}
                        <div className="pp-product-info-col">
                          <span className="pp-product-brand">{prod.brand}</span>
                          <h2 className="pp-product-name">{prod.name}</h2>
                          <p className="pp-product-desc">{prod.desc}</p>

                          <div className="pp-product-specs">
                            <h4>Specifications Checklist</h4>
                            <ul className="pp-specs-list">
                              {prod.specs.map((spec, sIdx) => (
                                <li key={sIdx}>
                                  <span className="pp-spec-bullet">✓</span>
                                  <span>{spec}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <button
                            className="btn btn-primary pp-quote-btn"
                            onClick={() => handleQuoteClick(prod.name)}
                          >
                            Request Quote & Details <ArrowRight size={16} />
                          </button>
                        </div>

                        {/* Column 2: Visual Card */}
                        <div className="pp-product-visual-col">
                          <div className="pp-visual-card glass-panel">
                            <div className="pp-visual-glow" />
                            <div className="pp-visual-image-wrapper">
                              <img
                                src={prod.image}
                                alt={prod.name}
                                className="pp-visual-image"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="pp-no-results glass-panel pp-reveal active">
                  <ShieldAlert size={48} className="pp-no-results-icon" />
                  <h3>No products found</h3>
                  <p>We couldn't find any products matching "{searchQuery}".</p>
                  <button className="btn btn-secondary" onClick={() => setSearchQuery('')}>
                    Clear Search
                  </button>
                </div>
              )}
            </div>
          )}

        </div>
      </section>

      {/* ── Shared Footer ── */}
      <Footer setActiveSection={() => { }} isAboutPage goBack={goBack} />
    </div>
  );
}

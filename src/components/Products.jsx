import React, { useState } from 'react';
import { Search, ShieldAlert, Laptop, Network, HardDrive, Printer, Tablet, Monitor, Cpu } from 'lucide-react';
import './Products.css';

const categoryDivisions = [
  {
    id: 'desktops',
    tag: 'DESKTOPS',
    title: 'Settle all work on a desk',
    desc: "Upgrade your daily work in the latest desktops. Shop in Comtech System's Computers & Laptops Online Store for the desktop that suits the work.",
    image: '/desktops-banner.png'
  },
  {
    id: 'laptops',
    tag: 'LAPTOPS',
    title: 'Empower your mobility',
    desc: 'Experience lightweight portability without sacrificing performance. Shop our top-tier business laptops and ultrabooks for work on the move.',
    image: '/laptops-banner.png'
  },
  {
    id: 'workstations',
    tag: 'WORKSTATIONS',
    title: 'Unleash professional performance',
    desc: 'Run high-end 3D rendering, engineering modeling, and heavy computational workflows with our powerful, highly reliable tower workstations.',
    image: '/workstations-banner.png'
  },
  {
    id: 'mobile_workstations',
    tag: 'MOBILE WORKSTATIONS',
    title: 'Desktop power, laptop body',
    desc: 'Get workstation-grade GPU acceleration and multi-core processing wherever your work takes you. Ideal for developers and designers.',
    image: '/mobile-workstations-banner.png'
  },
  {
    id: 'tablets',
    tag: 'TABLETS',
    title: 'Tough and versatile field devices',
    desc: 'Equip your team with rugged, military-grade tablets designed for outdoor environments, healthcare settings, and on-site engineering tasks.',
    image: '/tablets-banner.png'
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
    desc: 'Streamline paperwork with high-volume, multi-function laser and ink tank printers built for fast double-sided printing and scanning.',
    image: '/printers-banner.png'
  }
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showCategoryGrid, setShowCategoryGrid] = useState(false);

  const categories = [
    { id: 'all', label: 'All products' },
    { id: 'desktops', label: 'Desktops' },
    { id: 'laptops', label: 'Laptops' },
    { id: 'workstations', label: 'Workstations' },
    { id: 'mobile_workstations', label: 'Mobile Workstations' },
    { id: 'tablets', label: 'Tablets' },
    { id: 'firewalls', label: 'Firewalls' },
    { id: 'printers', label: 'Printers' }
  ];

  const productsData = [
    {
      id: 'sophos-xgs',
      name: 'Sophos XGS 136 Next-Gen Firewall',
      category: 'firewalls',
      brand: 'Sophos',
      icon: <Network size={32} className="prod-icon" />,
      desc: 'Next-Gen Firewall with dual-processor architecture and integrated hardware acceleration for deep packet inspection and SD-WAN.',
      specs: ['10 Gbps Firewall Throughput', '1.5 Gbps Threat Protection', 'Integrated SD-WAN', 'SFP Fiber Port Support']
    },
    {
      id: 'dell-optiplex',
      name: 'Dell OptiPlex 7010 Tower Desktop',
      category: 'desktops',
      brand: 'Dell',
      icon: <Monitor size={32} className="prod-icon" />,
      desc: 'High-performance business desktop computer configured for general business tasks, office apps, and multi-display output.',
      specs: ['Intel Core i5 13th Gen', '16GB DDR4 RAM', '512GB NVMe SSD', 'Windows 11 Pro Pre-installed']
    },
    {
      id: 'hp-elitebook',
      name: 'HP EliteBook 840 G10 Business Laptop',
      category: 'laptops',
      brand: 'HP',
      icon: <Laptop size={32} className="prod-icon" />,
      desc: 'Premium enterprise laptop engineered with multi-layered hardware security and heavy workload computational performance.',
      specs: ['Intel Core i7 13th Gen', '16GB DDR5 RAM / 512GB SSD', 'HP Sure Start Self-Healing BIOS', '14" WUXGA Anti-Glare Screen']
    },
    {
      id: 'hp-z2-workstation',
      name: 'HP Z2 G9 Tower Desktop Workstation',
      category: 'workstations',
      brand: 'HP',
      icon: <Cpu size={32} className="prod-icon" />,
      desc: 'Extreme-grade tower workstation designed to run 3D modeling, heavy engineering rendering, and local dataset analytics.',
      specs: ['Intel Xeon W-1300 Processor', '32GB ECC DDR5 RAM', 'NVIDIA RTX A2000 12GB GPU', '700W 90% Efficient PSU']
    },
    {
      id: 'dell-precision-mw',
      name: 'Dell Precision 5570 Mobile Workstation',
      category: 'mobile_workstations',
      brand: 'Dell',
      icon: <Laptop size={32} className="prod-icon" />,
      desc: 'Ultra-thin, light laptop workstation combining visual color accuracy and extreme processing capacity for designers on-the-go.',
      specs: ['Intel Core i9 12th Gen (14-Core)', '32GB DDR5 RAM / 1TB SSD', 'NVIDIA RTX A1000 Professional GPU', '15.6" UHD+ HDR Touch Display']
    },
    {
      id: 'samsung-tab-active',
      name: 'Samsung Galaxy Tab Active4 Pro',
      category: 'tablets',
      brand: 'Samsung',
      icon: <Tablet size={32} className="prod-icon" />,
      desc: 'Military-grade rugged tablet engineered for field service engineers, healthcare workers, and tough outdoor environments.',
      specs: ['10.1" WUXGA Gorilla Glass 5', 'MIL-STD-810H & IP68 Rated', 'Support for glove touch & S-Pen', 'Replaceable 7600 mAh battery']
    },
    {
      id: 'hp-laserjet-printer',
      name: 'HP LaserJet Pro MFP M428fdw',
      category: 'printers',
      brand: 'HP',
      icon: <Printer size={32} className="prod-icon" />,
      desc: 'Wireless, multi-function black-and-white laser printer configured for fast double-sided printing, scanning, and copying.',
      specs: ['Up to 40 ppm Print Speeds', 'Automatic 2-Sided Printing', '50-sheet Auto Document Feeder', 'HP Wolf Pro Security Built-in']
    },
    {
      id: 'epson-ecotank',
      name: 'Epson EcoTank L3250 Color Printer',
      category: 'printers',
      brand: 'Epson',
      icon: <Printer size={32} className="prod-icon" />,
      desc: 'Ink Tank multi-function color printer delivering high print yields, low operating costs, and integrated Wi-Fi Direct connection.',
      specs: ['Ultra-low cost printing system', 'Up to 4500 Black / 7500 Color pages', 'Wi-Fi & App Direct Printing', '10 x 15 cm borderless photo support']
    },
    {
      id: 'fortigate-60f',
      name: 'Fortinet FortiGate 60F UTM Firewall',
      category: 'firewalls',
      brand: 'Fortinet',
      icon: <Network size={32} className="prod-icon" />,
      desc: 'Compact, all-in-one network security appliance optimized for distributed enterprise offices and secure SD-WAN setups.',
      specs: ['10 Gbps Firewall Throughput', '700 Mbps Threat Protection', 'Integrated secure SD-WAN controller', 'Fanless design for silent desktop use']
    }
  ];

  // Filtering products based on category and search query
  const filteredProducts = productsData.filter((prod) => {
    const matchesCategory = selectedCategory === 'all' || prod.category === selectedCategory;
    const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          prod.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prod.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleQuoteClick = (productName) => {
    // Scroll to contact form and set custom subject
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // We can also focus on the message textarea and populate it
      const textarea = document.getElementById('contact-message');
      if (textarea) {
        textarea.value = `Hello, I would like to request a quotation for: ${productName}. Please provide availability and pricing details.`;
      }
    }
  };

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    setShowCategoryGrid(false);
  };

  const handleDivisionClick = (categoryId) => {
    setSelectedCategory(categoryId);
    setShowCategoryGrid(true);
    const sectionTitle = document.querySelector('.products-section');
    if (sectionTitle) {
      sectionTitle.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="products" className="section products-section">
      <div className="container">
        <h2 className="section-title reveal active">Enterprise <span className="gradient-text">IT Products</span></h2>
        <p className="section-subtitle reveal active">
          Select from our range of tier-1 server hardware, firewalls, network switches, and security cameras.
        </p>

        {/* Search & Category Filter Controls */}
        <div className="products-controls reveal active">
          <div className="search-wrapper glass-panel">
            <Search className="search-icon" size={20} />
            <input 
              type="text" 
              placeholder="Search by product name, brand, or features..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="category-filters">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => handleCategoryChange(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid or Category Divisions */}
        {selectedCategory === 'all' && searchQuery === '' ? (
          <div className="category-divisions-container">
            {categoryDivisions.map((div) => (
              <div 
                key={div.id} 
                className="category-division reveal active" 
                onClick={() => handleDivisionClick(div.id)}
                style={{ cursor: 'pointer' }}
              >
                <div className="category-division-content">
                  <span className="category-division-tag">{div.tag}</span>
                  <h3 className="category-division-title">{div.title}</h3>
                  <p className="category-division-desc">{div.desc}</p>
                  <button className="category-division-link">
                    Explore Products <span className="arrow">→</span>
                  </button>
                </div>
                <div className="category-division-image-wrapper">
                  <img src={div.image} alt={div.title} className="category-division-image" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="category-filtered-container">
            {/* If a category is selected, search query is empty, and we aren't showing the grid, show the banner */}
            {selectedCategory !== 'all' && searchQuery === '' && !showCategoryGrid ? (
              (() => {
                const activeDiv = categoryDivisions.find(div => div.id === selectedCategory);
                if (!activeDiv) return null;
                return (
                  <div 
                    className="category-division filtered-banner reveal active" 
                    onClick={() => handleDivisionClick(activeDiv.id)}
                    style={{ cursor: 'pointer', marginBottom: '50px' }}
                  >
                    <div className="category-division-content">
                      <span className="category-division-tag">{activeDiv.tag}</span>
                      <h3 className="category-division-title">{activeDiv.title}</h3>
                      <p className="category-division-desc">{activeDiv.desc}</p>
                      <button className="category-division-link">
                        Explore Products <span className="arrow">↓</span>
                      </button>
                    </div>
                    <div className="category-division-image-wrapper">
                      <img src={activeDiv.image} alt={activeDiv.title} className="category-division-image" />
                    </div>
                  </div>
                );
              })()
            ) : filteredProducts.length > 0 ? (
              <div className="products-grid-wrapper">
                {selectedCategory !== 'all' && searchQuery === '' && (
                  <div className="grid-header-container">
                    <button 
                      className="btn-back"
                      onClick={() => setShowCategoryGrid(false)}
                    >
                      ← Back to Overview
                    </button>
                    <h3 className="category-grid-title reveal active">
                      Available {categories.find(c => c.id === selectedCategory)?.label}
                    </h3>
                  </div>
                )}
                <div className="grid-3 products-grid">
                  {filteredProducts.map((prod) => (
                    <div key={prod.id} className="product-card glass-panel reveal active">
                      <div className="prod-badge-brand">{prod.brand}</div>
                      <div className="prod-icon-box">{prod.icon}</div>
                      <h3 className="product-card-title">{prod.name}</h3>
                      <p className="product-card-desc">{prod.desc}</p>
                      
                      <div className="prod-specs-box">
                        <h4>Key Specs:</h4>
                        <ul>
                          {prod.specs.map((spec, index) => (
                            <li key={index}>{spec}</li>
                          ))}
                        </ul>
                      </div>

                      <button 
                        className="btn btn-primary product-quote-btn"
                        onClick={() => handleQuoteClick(prod.name)}
                      >
                        Request Quotation
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="no-products glass-panel reveal active">
                <ShieldAlert size={48} className="no-prod-icon" />
                <h3>No products found</h3>
                <p>We couldn't find any products matching "{searchQuery}". Try adjusting your filters or search terms.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

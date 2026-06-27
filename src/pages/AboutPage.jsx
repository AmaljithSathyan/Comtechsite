import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowLeft, ChevronDown, ArrowRight, ExternalLink, Facebook, Linkedin, Twitter
} from 'lucide-react';
import './AboutPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import abcdVideo from '../assets/abcd.mp4';
import itServicesVideo from '../assets/IT services.mp4';
import motionGraphicsVideo from '../assets/motion graphics.mp4';
import handshakeBg from '../assets/handshake.png';
import thumbsupBg from '../assets/thumbsup.png';
import Particles from '../components/Particles';

/* ─────────────── Data ─────────────── */
const stats = [
  { number: '24+', label: 'Years of Excellence' },
  { number: '500+', label: 'Enterprise Clients' },
  { number: '3', label: 'Key Locations' },
  { number: '24/7', label: 'Support & AMC' },
];

const partners = ['HP', 'SOPHOS', 'SAMSUNG', 'LENOVO'];

const testimonials = [
  {
    quote: "Comtech Systems has been instrumental in modernizing our enterprise network. Their Tier-1 server setup and continuous SLA-backed maintenance have kept our operations running 24/7 with zero downtime.",
    author: "Rajesh Nair",
    role: "Director of IT Operations",
    company: "Kerala State Financial Enterprise",
    rating: 5,
    avatar: "RN",
    video: itServicesVideo
  },
  {
    quote: "The cybersecurity protocols deployed by Comtech revolutionized our digital safety. From threat detection to network perimeter optimization, we feel completely secure under their vigilance.",
    author: "Meera Krishnan",
    role: "Chief Information Security Officer",
    company: "Cochin Shipyard Limited",
    rating: 5,
    avatar: "MK",
    video: abcdVideo
  },
  {
    quote: "Their round-the-clock AMC support is stellar. Every time we face hardware or configuration queries, their certified engineer team is on-site within hours. A truly reliable partner.",
    author: "Vikram R. Shah",
    role: "General Manager - Infrastructure",
    company: "Muthoot Finance Group",
    rating: 5,
    avatar: "VS",
    video: motionGraphicsVideo
  }
];

const propositions = [
  {
    title: 'Market-Aligned Solutions',
    desc: 'We assess the evolving IT landscape and deploy real-time measures to ensure your infrastructure always stays competitive.'
  },
  {
    title: 'Consistent Service Delivery',
    desc: 'Our teams execute consistent, SLA-backed service to enrich operational efficiency and deliver measurable ROI.'
  },
  {
    title: 'Long-term Partnership',
    desc: 'We build your IT identity from the ground up and remain committed through every phase of your business growth.'
  },
];

/* ─────────────── Illustrations ─────────────── */
const VisionIllustration = () => (
  <svg viewBox="0 0 600 400" className="ap-vm-illustration-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Waves */}
    <path d="M50 320 Q120 300 190 320 T330 320 T470 320 T550 320" stroke="var(--accent-primary)" strokeWidth="3" strokeLinecap="round" opacity="0.3" />
    <path d="M80 340 Q160 320 240 340 T400 340 T520 340" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" opacity="0.15" />

    {/* Clouds in the sky */}
    <path d="M480 120 C 475 90, 525 90, 530 110 C 545 100, 570 120, 560 135 C 570 150, 545 170, 520 160 C 510 170, 480 165, 475 150 C 460 145, 465 125, 480 120 Z" fill="var(--glass-bg)" stroke="var(--glass-border)" strokeWidth="2" />
    <path d="M120 100 C 115 80, 150 80, 155 95 C 165 90, 185 105, 178 115 C 185 125, 165 140, 148 132 C 140 140, 120 135, 118 125 C 108 120, 110 105, 120 100 Z" fill="var(--glass-bg)" stroke="var(--glass-border)" strokeWidth="1.5" opacity="0.5" />

    {/* Lifebuoy with waving person */}
    <g transform="translate(100, 260)">
      {/* Outer Ring */}
      <circle cx="40" cy="40" r="28" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="3" />
      {/* Red/Teal stripes on lifebuoy */}
      <path d="M40 12 A 28 28 0 0 1 68 40" fill="none" stroke="var(--accent-primary)" strokeWidth="6" />
      <path d="M12 40 A 28 28 0 0 1 40 68" fill="none" stroke="var(--accent-primary)" strokeWidth="6" />
      {/* Inner Ring */}
      <circle cx="40" cy="40" r="16" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="3" />
      
      {/* Person waving */}
      <circle cx="40" cy="10" r="7" fill="var(--text-primary)" />
      <path d="M40 17 V32" stroke="var(--text-primary)" strokeWidth="3.5" strokeLinecap="round" />
      {/* Waving arm */}
      <path d="M40 20 C28 15 22 5 20 0" fill="none" stroke="var(--accent-primary)" strokeWidth="3" strokeLinecap="round" />
      <path d="M40 20 C48 23 52 28 55 35" fill="none" stroke="var(--text-primary)" strokeWidth="3" strokeLinecap="round" />
    </g>

    {/* Paper Boat */}
    <g transform="translate(240, 180)">
      {/* Wave ripples under boat */}
      <ellipse cx="140" cy="135" rx="70" ry="6" fill="none" stroke="var(--accent-primary)" strokeWidth="2" opacity="0.3" />
      
      {/* Boat structure */}
      <path d="M30 110 L100 135 H200 L250 110 Z" fill="var(--bg-secondary)" stroke="var(--text-primary)" strokeWidth="3" strokeLinejoin="round" />
      <path d="M30 110 L140 80 L140 135 Z" fill="var(--card-bg)" stroke="var(--text-primary)" strokeWidth="3" strokeLinejoin="round" />
      <path d="M250 110 L140 80 L140 135 Z" fill="var(--glass-bg)" stroke="var(--text-primary)" strokeWidth="3" strokeLinejoin="round" />
      <path d="M140 80 L140 20 L180 80 Z" fill="var(--accent-glow)" stroke="var(--accent-primary)" strokeWidth="3" strokeLinejoin="round" />

      {/* Person looking through spyglass */}
      <g transform="translate(145, 10)">
        {/* Head */}
        <circle cx="15" cy="20" r="7" fill="var(--text-primary)" />
        {/* Body */}
        <path d="M15 27 V55" stroke="var(--text-primary)" strokeWidth="4" strokeLinecap="round" />
        {/* Legs */}
        <path d="M15 55 L8 75" stroke="var(--text-primary)" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M15 55 L22 75" stroke="var(--text-primary)" strokeWidth="3.5" strokeLinecap="round" />
        {/* Arms */}
        <path d="M15 32 L35 27" stroke="var(--text-primary)" strokeWidth="3.5" strokeLinecap="round" />
        {/* Telescope */}
        <line x1="32" y1="28" x2="65" y2="18" stroke="var(--accent-primary)" strokeWidth="5" strokeLinecap="round" />
        <line x1="63" y1="19" x2="66" y2="17" stroke="var(--text-primary)" strokeWidth="6.5" strokeLinecap="round" />
      </g>

      {/* Person sitting and rowing */}
      <g transform="translate(75, 45)">
        <circle cx="15" cy="25" r="7" fill="var(--text-primary)" />
        <path d="M15 32 C15 40 8 48 8 58" stroke="var(--text-primary)" strokeWidth="4" strokeLinecap="round" />
        <path d="M8 58 H25" stroke="var(--text-primary)" strokeWidth="3.5" strokeLinecap="round" />
        {/* Oar */}
        <line x1="-15" y1="72" x2="25" y2="42" stroke="var(--text-secondary)" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M-15 72 L-22 79" stroke="var(--accent-primary)" strokeWidth="5" strokeLinecap="round" />
      </g>
    </g>
  </svg>
);

const MissionIllustration = () => (
  <svg viewBox="0 0 600 400" className="ap-vm-illustration-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Clouds at launch base */}
    <circle cx="300" cy="350" r="45" fill="var(--glass-bg)" opacity="0.3" />
    <circle cx="250" cy="350" r="35" fill="var(--glass-bg)" opacity="0.2" />
    <circle cx="350" cy="350" r="35" fill="var(--glass-bg)" opacity="0.2" />
    
    {/* Launch Platform */}
    <rect x="200" y="335" width="200" height="15" rx="4" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="3" />
    
    {/* Rocket */}
    <g transform="translate(270, 40)">
      {/* Thrust flame */}
      <path d="M20 230 L30 290 L40 230 Z" fill="var(--accent-glow)" stroke="var(--accent-primary)" strokeWidth="2.5" />
      <path d="M10 230 L30 310 L50 230 Z" fill="var(--accent-glow)" stroke="var(--accent-primary)" strokeWidth="3" opacity="0.6" />
      
      {/* Fins */}
      <path d="M10 185 L-12 230 L10 220 Z" fill="var(--accent-primary)" stroke="var(--text-primary)" strokeWidth="3" strokeLinejoin="round" />
      <path d="M50 185 L72 230 L50 220 Z" fill="var(--accent-primary)" stroke="var(--text-primary)" strokeWidth="3" strokeLinejoin="round" />
      
      {/* Body */}
      <path d="M10 90 V220 H50 V90 Z" fill="var(--bg-primary)" stroke="var(--text-primary)" strokeWidth="3.5" strokeLinejoin="round" />
      {/* Nose cone */}
      <path d="M10 90 C10 50 30 10 30 10 C30 10 50 50 50 90 Z" fill="var(--accent-primary)" stroke="var(--text-primary)" strokeWidth="3.5" strokeLinejoin="round" />
      
      {/* Window */}
      <circle cx="30" cy="130" r="11" fill="var(--bg-secondary)" stroke="var(--text-primary)" strokeWidth="3" />
      <circle cx="30" cy="130" r="6" fill="var(--accent-glow)" />
    </g>

    {/* Left side: Desk & Person */}
    <g transform="translate(40, 230)">
      <rect x="20" y="60" width="70" height="40" rx="3" fill="var(--bg-secondary)" stroke="var(--text-primary)" strokeWidth="3" />
      <line x1="35" y1="100" x2="35" y2="130" stroke="var(--text-primary)" strokeWidth="3" />
      <line x1="75" y1="100" x2="75" y2="130" stroke="var(--text-primary)" strokeWidth="3" />
      
      {/* Chair */}
      <path d="M-10 100 H5 V75 H-10 Z" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="2.5" />
      <line x1="-2" y1="100" x2="-2" y2="130" stroke="var(--text-secondary)" strokeWidth="2.5" />
      <line x1="-10" y1="130" x2="6" y2="130" stroke="var(--text-secondary)" strokeWidth="3" strokeLinecap="round" />

      {/* Person operating */}
      <g transform="translate(-5, 40)">
        <circle cx="10" cy="10" r="7" fill="var(--text-primary)" />
        <path d="M10 17 L10 35 C10 35 18 38 23 45" stroke="var(--text-primary)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 21 C15 21 20 23 25 18" fill="none" stroke="var(--accent-primary)" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* Laptop */}
      <path d="M60 60 L75 45 H90" stroke="var(--accent-primary)" strokeWidth="3" strokeLinecap="round" />
      <line x1="62" y1="60" x2="80" y2="60" stroke="var(--text-primary)" strokeWidth="3.5" />
    </g>

    {/* Right side: Ladder & Climbing Person */}
    <g transform="translate(390, 140)">
      {/* Ladder */}
      <line x1="10" y1="0" x2="25" y2="220" stroke="var(--text-secondary)" strokeWidth="4.5" strokeLinecap="round" />
      <line x1="35" y1="0" x2="50" y2="220" stroke="var(--text-secondary)" strokeWidth="4.5" strokeLinecap="round" />
      {[30, 60, 90, 120, 150, 180, 210].map((y, i) => (
        <line key={i} x1={10 + y*0.068} y1={y} x2={35 + y*0.068} y2={y} stroke="var(--text-secondary)" strokeWidth="3" />
      ))}

      {/* Climber */}
      <g transform="translate(10, 50)">
        <circle cx="18" cy="10" r="7" fill="var(--text-primary)" />
        <path d="M18 17 V45 L12 65" stroke="var(--text-primary)" strokeWidth="4" strokeLinecap="round" />
        <path d="M18 22 L5 15 L0 5" fill="none" stroke="var(--accent-primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 24 L28 29 L32 20" fill="none" stroke="var(--text-primary)" strokeWidth="3" strokeLinecap="round" />
      </g>
    </g>

    {/* Wrench Engineer on Far Right */}
    <g transform="translate(480, 230)">
      <circle cx="20" cy="40" r="7" fill="var(--text-primary)" />
      <path d="M20 47 V80 M20 80 L12 110 M20 80 L28 110" stroke="var(--text-primary)" strokeWidth="4" strokeLinecap="round" />
      <path d="M20 53 L5 60 L-5 50" fill="none" stroke="var(--text-primary)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Wrench tool */}
      <g transform="translate(-15, 32) rotate(-30)">
        <rect x="0" y="5" width="5" height="22" rx="2" fill="var(--accent-primary)" stroke="var(--text-primary)" strokeWidth="1.5" />
        <circle cx="2.5" cy="5" r="5" fill="var(--bg-primary)" stroke="var(--text-primary)" strokeWidth="2" />
        <path d="M0 3 L2.5 5.5 L5 3" stroke="var(--bg-primary)" strokeWidth="2" />
      </g>
    </g>
  </svg>
);

/* ─────────────── Component ─────────────── */
export default function AboutPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState('next'); // 'next' or 'prev'
  const autoPlayRef = useRef();
  const swipeStartX = useRef(0);
  const swipeEndX = useRef(0);
  const isSwiping = useRef(false);

  useEffect(() => {
    setProgress(0);
    const duration = 6000; // 6 seconds
    const intervalTime = 50; // Update progress every 50ms
    const step = (intervalTime / duration) * 100;

    autoPlayRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setDirection('next');
          setActiveTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(autoPlayRef.current);
  }, [activeTestimonial]);

  const nextTestimonial = () => {
    setDirection('next');
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection('prev');
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const resetAutoPlay = () => {
    setProgress(0);
  };

  const handleTouchStart = (e) => {
    swipeStartX.current = e.touches[0].clientX;
    isSwiping.current = true;
  };

  const handleTouchMove = (e) => {
    if (!isSwiping.current) return;
    swipeEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isSwiping.current) return;
    isSwiping.current = false;
    handleSwipeGesture();
  };

  const handleMouseDown = (e) => {
    swipeStartX.current = e.clientX;
    isSwiping.current = true;
  };

  const handleMouseMove = (e) => {
    if (!isSwiping.current) return;
    swipeEndX.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (!isSwiping.current) return;
    isSwiping.current = false;
    handleSwipeGesture();
  };

  const handleMouseLeave = () => {
    if (isSwiping.current) {
      isSwiping.current = false;
    }
  };

  const handleSwipeGesture = () => {
    const diffX = swipeStartX.current - swipeEndX.current;
    const threshold = 50; // min 50px swipe
    if (Math.abs(diffX) > threshold) {
      if (diffX > 0) {
        nextTestimonial();
      } else {
        prevTestimonial();
      }
    }
    swipeStartX.current = 0;
    swipeEndX.current = 0;
  };

  // Scroll reveal logic (mirrors App.jsx)
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Dark theme
    document.documentElement.setAttribute('data-theme', 'dark');

    const handleScroll = () => {
      const reveals = document.querySelectorAll('[class*="ap-reveal"]');
      reveals.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 60) {
          el.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 120);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animated counter logic
  const countersStarted = useRef(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !countersStarted.current) {
          countersStarted.current = true;
          document.querySelectorAll('.ap-stat-number').forEach((el) => {
            const target = el.getAttribute('data-target');
            if (!target) return;
            const isPlus = target.includes('+');
            const isSlash = target.includes('/');
            if (isSlash) { el.textContent = target; return; }
            const num = parseInt(target.replace(/\D/g, ''), 10);
            const suffix = isPlus ? '+' : '';
            let start = 0;
            const duration = 1800;
            const step = Math.ceil(num / (duration / 16));
            const timer = setInterval(() => {
              start = Math.min(start + step, num);
              el.textContent = start + suffix;
              if (start >= num) clearInterval(timer);
            }, 16);
          });
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const goBack = () => {
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const goContact = () => {
    window.location.hash = '';
    setTimeout(() => {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="about-page">
      {/* ── Shared Navbar ── */}
      <Navbar activeSection="about" setActiveSection={() => {}} isAboutPage goBack={goBack} />

      {/* ════════════════════════════════════
          HERO BANNER
          ════════════════════════════════════ */}
      <section className="ap-hero">
        <div className="ap-hero-bg">
          <video 
            src={abcdVideo} 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="ap-hero-video"
          />
          <div className="ap-hero-particles-bg">
            <Particles
              particleColors={["#0ea5e9", "#c084fc", "#3b82f6", "#ffffff"]}
              particleCount={150}
              particleSpread={8}
              speed={0.1}
              particleBaseSize={80}
              moveParticlesOnHover={true}
              particleHoverFactor={0.7}
              alphaParticles={true}
              disableRotation={false}
            />
          </div>
          <div className="ap-hero-blob ap-hero-blob-1" />
          <div className="ap-hero-blob ap-hero-blob-2" />
          <div className="ap-hero-blob ap-hero-blob-3" />
          <div className="ap-hero-grid" />
        </div>

        <div className="ap-hero-content">
          <div className="ap-hero-badge ap-reveal">
            <span className="ap-hero-badge-dot" />
            Est. 2002 · Kerala & Tamil Nadu
          </div>

          <h1 className="ap-hero-title ap-reveal ap-delay-100">
            The IT Company<br />
            That <span className="gradient-text">Delivers.</span>
          </h1>

          <p className="ap-hero-subtitle ap-reveal ap-delay-200">
            Comtech Systems has been powering enterprises with cutting-edge IT infrastructure, 
            robust cybersecurity, and round-the-clock maintenance since 2002.
          </p>

          <div className="ap-hero-actions ap-reveal ap-delay-300">
            <button className="btn btn-secondary" onClick={goBack}>
              <ArrowLeft size={18} /> Back to Home
            </button>
            <button className="btn btn-primary" onClick={goContact}>
              Get in Touch <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="ap-hero-scroll-indicator">
          <ChevronDown className="ap-hero-scroll-arrow" />
          Scroll to explore
        </div>
      </section>

      {/* ════════════════════════════════════
          STATS COUNTER STRIP
          ════════════════════════════════════ */}
      <div className="ap-stats" ref={statsRef}>
        <div className="ap-stats-grid">
          {stats.map((s, i) => (
            <div key={i} className={`ap-stat-item ap-reveal ap-delay-${(i + 1) * 100}`}>
              <div className="ap-stat-number" data-target={s.number}>{s.number}</div>
              <div className="ap-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════
          VISION & MISSION — ALTERNATING
          ════════════════════════════════════ */}
      <div className="ap-vm-section">
        <div className="ap-vm-inner">
          {/* Vision */}
          <div className="ap-vm-row">
            <div className="ap-vm-visual ap-vm-visual-vision ap-reveal-left">
              <div className="ap-vm-visual-inner">
                <VisionIllustration />
              </div>
            </div>
            <div className="ap-vm-content ap-reveal-right">
              <div className="ap-label">Our Vision</div>
              <h2 className="ap-section-heading">
                To Be <span className="gradient-text">India's Most Trusted</span> IT Infrastructure Partner
              </h2>
              <p>
                We envisage a digital landscape where every enterprise has access to world-class IT infrastructure, robust security, and dependable technical support, powered by Comtech.
              </p>
              <ul className="ap-vm-list">
                {['Deliver reliable infrastructure at every scale', 'Lead with innovation in cybersecurity and cloud', 'Create lasting partnerships grounded in trust'].map((v, i) => (
                  <li key={i}>
                    <span className="ap-vm-check">
                      <svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mission */}
          <div className="ap-vm-row reverse">
            <div className="ap-vm-visual ap-vm-visual-mission ap-reveal-right">
              <div className="ap-vm-visual-inner">
                <MissionIllustration />
              </div>
            </div>
            <div className="ap-vm-content ap-reveal-left">
              <div className="ap-label">Our Mission</div>
              <h2 className="ap-section-heading">
                Delivering <span className="gradient-text">Innovative, Reliable</span> IT Solutions
              </h2>
              <p>
                To perceive, plan, prepare, and perform comprehensive IT infrastructure solutions 
                that meet our customers' evolving business needs — building professional, 
                tactful systems that cement digital foundations and garner optimum results.
              </p>
              <ul className="ap-vm-list">
                {['Engineer solutions that match real business challenges', 'Maintain SLA-backed uptime and response commitments', 'Continuously evolve with emerging technologies'].map((v, i) => (
                  <li key={i}>
                    <span className="ap-vm-check">
                      <svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════
          OUR PROPOSITION
          ════════════════════════════════════ */}
      <div className="ap-prop-section">
        <div className="ap-prop-bg-illustration" />
        <div className="ap-prop-inner">
          <div className="ap-prop-grid">
            <div>
              <div className="ap-label ap-reveal">Our Proposition</div>
              <h2 className="ap-section-heading ap-reveal ap-delay-100">
                How We <span className="gradient-text">Create Value</span><br />
                For You
              </h2>
              <p className="ap-section-body ap-reveal ap-delay-200">
                Using strategically developed methods and definite ideas, our team with 
                proven calibre and mettle nourishes the growth of your business through 
                technology-first thinking.
              </p>
            </div>
            <ul className="ap-prop-list">
              {propositions.map((p, i) => (
                <li key={i} className={`ap-prop-item ap-reveal ap-delay-${(i + 1) * 100}`}>
                  <div className="ap-prop-num">{i + 1}</div>
                  <div className="ap-prop-text">
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>


      {/* ════════════════════════════════════
          BEHIND THE WALL
          ════════════════════════════════════ */}
      <div className="ap-btw-section">
        <div className="ap-btw-inner">
          <div className="ap-btw-grid">
            {/* Left: Heading and Image */}
            <div className="ap-btw-left ap-reveal-left">
              <div className="ap-label">Our Leadership</div>
              <h2 className="ap-btw-heading">
                Behind <span className="gradient-text">The Wall</span>
              </h2>
              <div className="ap-btw-image-box">
                <img src="/shiju-balan.png" alt="Shiju K. Balan - Founder & CEO" className="ap-btw-image" />
              </div>
            </div>

            {/* Right: Bio & Socials */}
            <div className="ap-btw-right ap-reveal-right ap-delay-100">
              <div className="ap-btw-bio-header">
                <h3>Shiju K. Balan</h3>
                <a href="https://groupmgc.com" target="_blank" rel="noopener noreferrer" className="ap-btw-link-icon">
                  <ExternalLink size={20} />
                </a>
              </div>
              <p className="ap-btw-bio-text">
                Our founder Shiju K. Balan established Comtech Systems in 2002 in Kochi, Kerala, with a vision to provide enterprise-grade IT infrastructure and systems integration services. Over the past two decades, he has steered the company from a hardware support provider into a multi-domain enterprise tech provider, leading to the formation of the MGC Group of Companies. With his extensive technology expertise, he has spearheaded large-scale datacenter deployments, enterprise cybersecurity projects, and round-the-clock SLA services for government and corporate clients across South India.
              </p>
              <div className="ap-btw-socials">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook size={18} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* ════════════════════════════════════
          AUTHORIZED PARTNERS
          ════════════════════════════════════ */}
      <div className="ap-partners">
        <div className="ap-partners-header">
          <div className="ap-label ap-reveal" style={{ justifyContent: 'center' }}>Authorized Dealer</div>
          <h2 className="ap-reveal ap-delay-100">Our Trusted Brand Partners</h2>
        </div>
        <div className="ap-partners-strip">
          {partners.map((p, i) => (
            <div key={i} className={`ap-partner-item ap-reveal-scale ap-delay-${(i + 1) * 100}`}>
              <span className="ap-partner-text">{p}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════
          TESTIMONIALS SECTION
          ════════════════════════════════════ */}
      <div className="ap-testimonials-section">
        <div className="ap-testimonials-inner">
          <div className="ap-testimonials-header">
            <div className="ap-label ap-reveal" style={{ justifyContent: 'center' }}>Testimonials</div>
            <h2 className="ap-reveal ap-delay-100">What Our Clients Say</h2>
            <p className="ap-reveal ap-delay-200">Hear from the technology leaders and enterprise partners who trust Comtech to power their daily infrastructure.</p>
          </div>

          <div className="ap-testimonial-carousel ap-reveal ap-delay-300">
            <div 
              className="ap-testimonial-card-wrapper"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
            >
              <div className="ap-testimonial-quote-mark">“</div>
              <div key={activeTestimonial} className={`ap-testimonial-card slide-${direction}`}>
                {/* Video Column */}
                <div className="ap-testimonial-video-container">
                  <video
                    key={activeTestimonial}
                    src={testimonials[activeTestimonial].video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="ap-testimonial-video"
                  />
                  <div className="ap-testimonial-video-badge">
                    <span className="live-dot" /> VIDEO TESTIMONIAL
                  </div>
                </div>

                {/* Text Content Column */}
                <div className="ap-testimonial-body-container">
                  <div className="ap-testimonial-stars">
                    {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, i) => (
                      <span key={i} className="star-icon">★</span>
                    ))}
                  </div>
                  
                  <p className="ap-testimonial-text">
                    "{testimonials[activeTestimonial].quote}"
                  </p>
                  
                  <div className="ap-testimonial-footer">
                    <div className="ap-testimonial-avatar">
                      {testimonials[activeTestimonial].avatar}
                    </div>
                    <div className="ap-testimonial-meta">
                      <div className="ap-testimonial-author">{testimonials[activeTestimonial].author}</div>
                      <div className="ap-testimonial-role-company">
                        {testimonials[activeTestimonial].role} · <span className="gradient-text">{testimonials[activeTestimonial].company}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slider Controls */}
            <div className="ap-testimonial-controls">
              <button className="carousel-btn prev" onClick={prevTestimonial} aria-label="Previous testimonial">
                <ArrowLeft size={20} />
              </button>
              <div className="ap-testimonial-dots">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`carousel-dot ${index === activeTestimonial ? 'active' : ''}`}
                    onClick={() => {
                      setDirection(index > activeTestimonial ? 'next' : 'prev');
                      setActiveTestimonial(index);
                      resetAutoPlay();
                    }}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button className="carousel-btn next" onClick={nextTestimonial} aria-label="Next testimonial">
                <ArrowRight size={20} />
              </button>
            </div>
            
            {/* Auto-play progress bar */}
            <div className="ap-testimonial-progress-bar">
              <div 
                className="ap-testimonial-progress-fill" 
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════
          CTA BANNER
          ════════════════════════════════════ */}
      <div className="ap-cta">
        <div className="ap-cta-bg-illustration" />
        <div className="ap-cta-blob" />
        <div className="ap-cta-inner">
          <h2 className="ap-cta-inner-heading ap-reveal">
            Ready to Transform<br />
            <span className="gradient-text">Your IT Infrastructure?</span>
          </h2>
          <p className="ap-reveal ap-delay-100">
            Let Comtech Systems design, deploy, and maintain the perfect IT ecosystem 
            for your enterprise — from day one and beyond.
          </p>
          <div className="ap-hero-actions ap-reveal ap-delay-200">
            <button className="btn btn-primary" onClick={goContact}>
              Talk to Our Team <ArrowRight size={18} />
            </button>
            <button className="btn btn-secondary" onClick={goBack}>
              <ArrowLeft size={18} /> Back to Home
            </button>
          </div>
        </div>
      </div>

      {/* ── Shared Footer ── */}
      <Footer setActiveSection={() => {}} isAboutPage goBack={goBack} />
    </div>
  );
}

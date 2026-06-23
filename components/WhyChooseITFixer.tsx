"use client";

import React from "react";
import { 
  Cpu, 
  Gamepad2, 
  Tv, 
  Monitor, 
  Layers, 
  Wrench, 
  ShieldCheck, 
  MapPin, 
  Zap, 
  Thermometer, 
  TrendingUp, 
  Sparkles,
  ChevronDown
} from "lucide-react";

export default function WhyChooseITFixer() {
  const features = [
    { text: "Custom Gaming PC Builds", icon: <Gamepad2 size={24} /> },
    { text: "Streaming PCs for YouTube & Twitch", icon: <Tv size={24} /> },
    { text: "Video Editing Workstations", icon: <Monitor size={24} /> },
    { text: "Gaming Laptops & Creator Laptops", icon: <Cpu size={24} /> },
    { text: "NVIDIA RTX & AMD Radeon Graphics", icon: <Layers size={24} /> },
    { text: "Upgrade & Repair Support", icon: <Wrench size={24} /> },
    { text: "Genuine Components with Warranty", icon: <ShieldCheck size={24} /> },
    { text: "Chennai-Based Technical Support", icon: <MapPin size={24} /> },
  ];

  const benefits = [
    "Higher FPS Performance",
    "Better Cooling Efficiency",
    "Future Upgrade Options",
    "RGB Gaming Builds",
    "RTX Ray Tracing Support",
    "AI Powered Graphics",
    "Fast SSD Storage",
    "Low Latency Gaming",
  ];

  const trustPoints = [
    "Customized Gaming Builds",
    "Streaming Optimized PCs",
    "Editing Workstation Experts",
    "Genuine Hardware Components",
    "Competitive Pricing",
    "Professional Consultation",
    "Reliable After-Sales Support",
    "Fast Build & Delivery",
    "Performance Testing & Optimization",
  ];

  return (
    <section className="itfixer-section py-5">
      <div className="container">
        
        {/* Hero Header */}
        <div className="text-center mb-5 max-w-xl mx-auto">
          <h2 className="display-4 fw-bold main-title mb-3">
            Why Choose <span className="brand-highlight">IT Fixer</span>?
          </h2>
          <p className="subtitle-text">
            Chennai's trusted destination for Gaming PCs, Streaming Systems, 
            Video Editing Workstations, and High-End Gaming Laptops.
          </p>
        </div>

        {/* Feature Grid with Icons */}
        <div className="row g-4 mb-5">
          {features.map((item, index) => (
            <div key={index} className="col-xl-3 col-md-6">
              <div className="feature-card">
                <div className="icon-wrapper mb-3">{item.icon}</div>
                <h5 className="feature-text mb-0">{item.text}</h5>
              </div>
            </div>
          ))}
        </div>

        {/* Split Section: Core Offerings vs Benefits */}
        <div className="row g-4 mb-5">
          <div className="col-lg-6">
            <div className="highlight-panel h-100 p-4 p-md-5 rounded-4">
              <span className="badge-tech mb-3">PERFORMANCE DRIVEN</span>
              <h3 className="section-subtitle mb-4">
                Custom Gaming PCs Built for Competitive Esports
              </h3>
              <p className="panel-desc mb-4">
                At IT Fixer, we design Gaming PCs that deliver ultra-smooth gameplay, 
                high frame rates, low latency, and immersive graphics for modern gaming titles.
              </p>
              <div className="tag-cloud">
                {["Esports Gaming", "AAA Titles", "VR Gaming", "AI Assisted Gaming"].map((tag, idx) => (
                  <span key={idx} className="tag-item">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="benefits-panel h-100 p-4 p-md-5 rounded-4">
              <h3 className="section-subtitle mb-4">
                Benefits of Custom Builds
              </h3>
              <div className="row g-3">
                {benefits.map((item, i) => (
                  <div className="col-sm-6" key={i}>
                    <div className="benefit-badge">
                      <Zap size={14} className="me-2 text-brand" />
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Trust Grid */}
        <div className="trust-wrapper p-4 p-md-5 rounded-4 mb-5">
          <h3 className="section-subtitle text-center mb-5">
            Why Gamers & Creators Trust Us
          </h3>
          <div className="row g-3">
            {trustPoints.map((item, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="trust-item">
                  <Sparkles size={16} className="me-2 text-brand" />
                  <span>{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modern Accordion FAQ Section */}
        <div className="faq-wrapper mx-auto max-w-lg">
          <h3 className="section-subtitle text-center mb-4">
            Frequently Asked Questions
          </h3>
          <div className="faq-container">
            <details className="faq-item" open>
              <summary className="faq-trigger">
                <span>Why is IT Fixer one of the best gaming shops in Chennai?</span>
                <ChevronDown size={18} className="arrow-icon" />
              </summary>
              <div className="faq-content">
                <p className="mb-0">
                  IT Fixer offers premium Custom Gaming PCs, Gaming Laptops, Streaming PCs, 
                  and Video Editing Workstations with 100% genuine components and expert on-site technical support.
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-trigger">
                <span>Can I build a custom gaming PC within my budget?</span>
                <ChevronDown size={18} className="arrow-icon" />
              </summary>
              <div className="faq-content">
                <p className="mb-0">
                  Absolutely. We tailor every single build based on your target budget, 
                  preferred game titles, and rendering workload requirements.
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-trigger">
                <span>Do you provide post-build warranty and support?</span>
                <ChevronDown size={18} className="arrow-icon" />
              </summary>
              <div className="faq-content">
                <p className="mb-0">
                  Yes, all hardware parts come with official manufacturer warranty. 
                  Plus, you get direct Chennai-based technical assistance for testing and upgrades.
                </p>
              </div>
            </details>
          </div>
        </div>

      </div>

      <style jsx>{`
        .itfixer-section {
          background-color: #080808;
          color: #f5f5f5;
          font-family: system-ui, -apple-system, sans-serif;
        }
        .max-w-xl { max-width: 768px; }
        .max-w-lg { max-width: 850px; }
        .text-brand { color: #C6FF00; }
        
        .main-title {
          letter-spacing: -1px;
        }
        .brand-highlight {
          color: #C6FF00;
          text-shadow: 0 0 20px rgba(198, 255, 0, 0.2);
        }
        .subtitle-text {
          color: #a0a0a0;
          font-size: 1.125rem;
          line-height: 1.7;
        }
        .section-subtitle {
          color: #ffffff;
          font-weight: 700;
          letter-spacing: -0.5px;
        }

        /* Feature Cards */
        .feature-card {
          background: #121212;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 24px;
          height: 100%;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .feature-card:hover {
          border-color: rgba(198, 255, 0, 0.4);
          background: #161616;
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
        }
        .icon-wrapper {
          color: #C6FF00;
          background: rgba(198, 255, 0, 0.06);
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          border: 1px solid rgba(198, 255, 0, 0.15);
        }
        .feature-text {
          font-size: 1.05rem;
          font-weight: 600;
          color: #e5e5e5;
        }

        /* Panels layout */
        .highlight-panel {
          background: linear-gradient(145deg, #121212 0%, #0d0d0d 100%);
          border: 1px solid rgba(198, 255, 0, 0.15);
        }
        .badge-tech {
          background: rgba(198, 255, 0, 0.1);
          color: #C6FF00;
          padding: 6px 12px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1px;
          border-radius: 20px;
          display: inline-block;
        }
        .panel-desc {
          color: #b0b0b0;
          line-height: 1.6;
        }
        .tag-cloud {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .tag-item {
          background: #181818;
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 6px 14px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 500;
          color: #d0d0d0;
        }

        .benefits-panel {
          background: #121212;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .benefit-badge {
          background: #161616;
          border: 1px solid rgba(255, 255, 255, 0.03);
          padding: 12px 16px;
          border-radius: 10px;
          font-size: 0.9rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          color: #e0e0e0;
        }

        /* Trust Box */
        .trust-wrapper {
          background: #0d0d0d;
          border: 1px solid rgba(255, 255, 255, 0.03);
        }
        .trust-item {
          display: flex;
          align-items: center;
          background: #121212;
          padding: 14px 20px;
          border-radius: 10px;
          font-size: 0.95rem;
          color: #d5d5d5;
          border: 1px solid rgba(255, 255, 255, 0.02);
        }

        /* FAQ Layout Accordin Type */
        .faq-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .faq-item {
          background: #121212;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          overflow: hidden;
        }
        .faq-trigger {
          padding: 18px 24px;
          font-weight: 600;
          color: #ffffff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          user-select: none;
        }
        .faq-trigger::-webkit-details-marker { display: none; }
        .faq-trigger::marker { display: none; }
        .faq-trigger:hover { color: #C6FF00; }
        
        .arrow-icon {
          transition: transform 0.2s ease;
          color: #666;
        }
        .faq-item[open] .arrow-icon {
          transform: rotate(180deg);
          color: #C6FF00;
        }
        .faq-content {
          padding: 0 24px 20px;
          color: #b0b0b0;
          font-size: 0.95rem;
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
}
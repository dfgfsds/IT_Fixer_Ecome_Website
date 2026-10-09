"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Sparkles,
  Sliders,
  ShieldCheck,
  Gamepad2,
  Layers,
  Tv,
  Monitor,
  HelpCircle,
  Wrench,
  Cpu,
  CheckCircle2,
  Activity,
  MapPin,
  Zap,
  Headphones,
  Keyboard,
  Award,
  Rocket,
  Check,
} from "lucide-react";

export default function WhyChooseITFixer() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="itfixer-seo-section py-5 position-relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="ambient-glow glow-top"></div>
      <div className="ambient-glow glow-bottom"></div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* H1 SEO Hero Card */}
        <div className="seo-master-hero p-4 p-md-5 rounded-4 position-relative text-center">
          <div className="hero-accent-line"></div>

          <div className="d-inline-flex align-items-center gap-2 hero-badge mb-3">
            <span className="badge-pulse-dot"></span>
            <Sparkles size={15} className="text-brand" />
            <span className="badge-text">BALANCED CONFIGURATION</span>
          </div>

          <h1 className="seo-h1 fw-bold tracking-tight mb-3">
            How Gaming PC Builder in Chennai Plans a Balanced Configuration
          </h1>

          <p className="seo-p subtitle-lead mx-auto mb-3" style={{ maxWidth: "860px" }}>
            A gaming PC should suit your favourite games, monitor resolution, software needs and budget. As a Gaming PC Builder in Chennai, IT Fixer helps customers choose compatible components for their intended use.
          </p>

          <div className="lead-divider mx-auto my-3"></div>

          <p className="seo-p subtitle-lead mx-auto mb-0" style={{ maxWidth: "860px" }}>
            We focus on balanced configurations that deliver practical performance without unnecessary spending.
          </p>
        </div>

        {/* Expandable In-Depth SEO Section */}
        {isExpanded && (
          <div className="seo-expanded-container mt-4 animate-fade-in">
            {/* Section Chapter: 01 // Configuration Strategy */}
            <div className="chapter-label mb-3">
              {/* <span className="chapter-num">// 01</span> */}
              <span className="chapter-title">CONFIGURATION &amp; SELECTION GUIDANCE</span>
            </div>

            <div className="row g-4 mb-4">
              {/* Card 1: H2 What to Discuss */}
              <div className="col-12 col-lg-6">
                <div className="elite-card h-100">
                  <div className="card-top-bar d-flex align-items-center justify-content-between mb-3">
                    <div className="card-icon-box">
                      <Sliders size={20} />
                    </div>
                    <span className="card-tag">CONSULTATION</span>
                  </div>
                  <h2 className="seo-h2">
                    What to Discuss with Custom Gaming PC Builder in Chennai
                  </h2>
                  <p className="seo-p mb-0">
                    Consider your gaming needs, budget and future plans before choosing a PC. A Gaming PC Build in Chennai can help you select a suitable configuration and spend wisely on the components that matter most.
                  </p>
                </div>
              </div>

              {/* Card 2: H2 How to Choose Gaming PC Store */}
              <div className="col-12 col-lg-6">
                <div className="elite-card h-100">
                  <div className="card-top-bar d-flex align-items-center justify-content-between mb-3">
                    <div className="card-icon-box">
                      <ShieldCheck size={20} />
                    </div>
                    <span className="card-tag">STORE GUIDANCE</span>
                  </div>
                  <h2 className="seo-h2">
                    How to Choose Gaming PC Store in Chennai
                  </h2>
                  <p className="seo-p mb-0">
                    When choosing a Gaming PC Store in Chennai, look for clear guidance, warranty support and reliable technical assistance. IT Fixer helps you find a gaming desktop, creator PC or laptop that suits your needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Section Chapter: 02 // Play Styles & Budgets */}
            <div className="chapter-label mb-3">
              {/* <span className="chapter-num">// 02</span> */}
              <span className="chapter-title">PLAY STYLES &amp; BUDGET PLANNING</span>
            </div>

            <div className="row g-4 mb-4">
              {/* Card 3: H2 Play Styles */}
              <div className="col-12 col-lg-6">
                <div className="elite-card h-100">
                  <div className="card-top-bar d-flex align-items-center justify-content-between mb-3">
                    <div className="card-icon-box">
                      <Gamepad2 size={20} />
                    </div>
                    <span className="card-tag">PLAY STYLES</span>
                  </div>
                  <h2 className="seo-h2">
                    Custom Gaming PC Builds for Different Play Styles
                  </h2>
                  <p className="seo-p mb-3">
                    Our configurations can support a range of requirements:
                  </p>
                  <ul className="seo-spec-list mb-0">
                    <li>
                      <span className="spec-check"><Check size={14} /></span>
                      <span>Competitive esports and high-refresh-rate gaming</span>
                    </li>
                    <li>
                      <span className="spec-check"><Check size={14} /></span>
                      <span>AAA titles with detailed graphics</span>
                    </li>
                    <li>
                      <span className="spec-check"><Check size={14} /></span>
                      <span>1080p, 1440p and 4K gaming, depending on the hardware</span>
                    </li>
                    <li>
                      <span className="spec-check"><Check size={14} /></span>
                      <span>VR-compatible setups where the selected components support them.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 4: H2 Budget */}
              <div className="col-12 col-lg-6">
                <div className="elite-card h-100">
                  <div className="card-top-bar d-flex align-items-center justify-content-between mb-3">
                    <div className="card-icon-box">
                      <Layers size={20} />
                    </div>
                    <span className="card-tag">BUDGET PLANNING</span>
                  </div>
                  <h2 className="seo-h2">
                    Choosing Gaming PC Builder in Chennai for Your Budget
                  </h2>
                  <p className="seo-p mb-0">
                    A Gaming PC Builder in Chennai can help you choose a PC that fits your budget and performance needs. IT Fixer offers gaming desktops, streaming PCs and editing systems for different uses.
                  </p>
                </div>
              </div>
            </div>

            {/* Section Chapter: 03 // Streaming & Creative Workstations */}
            <div className="chapter-label mb-3">
              {/* <span className="chapter-num">// 03</span> */}
              <span className="chapter-title">STREAMING &amp; CREATIVE WORKSTATIONS</span>
            </div>

            <div className="row g-4 mb-4">
              {/* Card 5: H3 Streaming PCs */}
              <div className="col-12 col-lg-6">
                <div className="elite-card h-100">
                  <div className="card-top-bar d-flex align-items-center justify-content-between mb-3">
                    <div className="card-icon-box">
                      <Tv size={20} />
                    </div>
                    <span className="card-tag">BROADCAST RIGS</span>
                  </div>
                  <h3 className="seo-h3">
                    Streaming PCs for YouTubers &amp; Live Creators From PC Build Near me
                  </h3>
                  <p className="seo-p mb-3">
                    Streaming PCs need to handle broadcasting software, audio and video inputs, and gameplay when required. The ideal setup depends on your content and streaming quality.
                  </p>
                  <p className="seo-p mb-0">
                    IT Fixer helps creators choose PCs for YouTube, Twitch, podcasts and online classes. If you&apos;re looking for a PC Builder Near me, we can recommend a suitable setup for your needs and budget without unnecessary extras.
                  </p>
                </div>
              </div>

              {/* Card 6: H3 Editing PCs */}
              <div className="col-12 col-lg-6">
                <div className="elite-card h-100">
                  <div className="card-top-bar d-flex align-items-center justify-content-between mb-3">
                    <div className="card-icon-box">
                      <Monitor size={20} />
                    </div>
                    <span className="card-tag">CREATIVE SUITE</span>
                  </div>
                  <h3 className="seo-h3">
                    Editing PCs &amp; Creative Workstations from a Gaming PC Builder in Chennai
                  </h3>
                  <p className="seo-p mb-3">
                    Video editors, designers and animators need PCs that run their creative software smoothly. IT Fixer builds editing systems for Adobe Premiere Pro, After Effects, Photoshop, DaVinci Resolve and Blender.
                  </p>
                  <p className="seo-p mb-0">
                    As a computer store Chennai customers can approach for PC solutions, IT Fixer helps you choose a workstation for projects such as reels, wedding films, product videos and corporate content. Our team considers your project needs and budget to recommend a suitable setup.
                  </p>
                </div>
              </div>
            </div>

            {/* Section Chapter: 04 // Buyer Checklist & Store Services */}
            <div className="chapter-label mb-3">
              {/* <span className="chapter-num">// 04</span> */}
              <span className="chapter-title">BUYER CHECKLIST &amp; SERVICES</span>
            </div>

            <div className="row g-4 mb-4">
              {/* Card 7: H3 Questions to Ask */}
              <div className="col-12 col-lg-6">
                <div className="elite-card h-100">
                  <div className="card-top-bar d-flex align-items-center justify-content-between mb-3">
                    <div className="card-icon-box">
                      <HelpCircle size={20} />
                    </div>
                    <span className="card-tag">BUYER CHECKLIST</span>
                  </div>
                  <h3 className="seo-h3">
                    Questions to Ask at Prebuild PC Store in Chennai
                  </h3>
                  <p className="seo-p mb-3">
                    A good Gaming PC Store in Chennai should answer your questions clearly. Before buying, ask about:
                  </p>
                  <ul className="seo-spec-list mb-3">
                    <li>
                      <span className="spec-check"><Check size={14} /></span>
                      <span>Component compatibility and specifications</span>
                    </li>
                    <li>
                      <span className="spec-check"><Check size={14} /></span>
                      <span>Warranty coverage and technical support</span>
                    </li>
                    <li>
                      <span className="spec-check"><Check size={14} /></span>
                      <span>Performance for your intended use</span>
                    </li>
                    <li>
                      <span className="spec-check"><Check size={14} /></span>
                      <span>Options for future upgrades</span>
                    </li>
                  </ul>
                  <p className="seo-p mb-0">
                    At our Gaming PC Shop Chennai, customers can discuss these points before choosing a PC. We help both first-time buyers and experienced gamers make informed decisions.
                  </p>
                </div>
              </div>

              {/* Card 8: H3 Services Offered */}
              <div className="col-12 col-lg-6">
                <div className="elite-card h-100">
                  <div className="card-top-bar d-flex align-items-center justify-content-between mb-3">
                    <div className="card-icon-box">
                      <Wrench size={20} />
                    </div>
                    <span className="card-tag">STORE SERVICES</span>
                  </div>
                  <h3 className="seo-h3">
                    Services Offered by Gaming PC Store in Chennai
                  </h3>
                  <p className="seo-p mb-3">
                    A Gaming PC Store Chennai can help you find systems for gaming, content creation and everyday tasks. IT Fixer also offers gaming laptops and component upgrades.
                  </p>
                  <p className="seo-p mb-0">
                    When choosing a Gaming PC Shop in Chennai for a custom build, discuss your budget and requirements with our team to find a suitable configuration.
                  </p>
                </div>
              </div>
            </div>

            {/* Section Chapter: 05 // Upgrades & Hardware Compatibility */}
            <div className="chapter-label mb-3">
              {/* <span className="chapter-num">// 05</span> */}
              <span className="chapter-title">UPGRADES &amp; HARDWARE COMPATIBILITY</span>
            </div>

            <div className="row g-4 mb-4">
              {/* Card 9: H3 Upgrades & Technical Support */}
              <div className="col-12 col-lg-6">
                <div className="elite-card h-100">
                  <div className="card-top-bar d-flex align-items-center justify-content-between mb-3">
                    <div className="card-icon-box">
                      <Cpu size={20} />
                    </div>
                    <span className="card-tag">UPGRADES &amp; SUPPORT</span>
                  </div>
                  <h3 className="seo-h3">
                    Computer Store in Chennai for Upgrades &amp; Technical Support
                  </h3>
                  <p className="seo-p mb-3">
                    If your computer runs slowly or struggles with newer software, upgrading existing hardware may be a practical alternative to buying a new system.
                  </p>
                  <p className="seo-p mb-0">
                    As a computer store in Chennai, IT Fixer provides SSD and RAM upgrades, graphics card replacements, cooling improvements and hardware troubleshooting.
                  </p>
                </div>
              </div>

              {/* Card 10: H3 Compatible Components */}
              <div className="col-12 col-lg-6">
                <div className="elite-card h-100">
                  <div className="card-top-bar d-flex align-items-center justify-content-between mb-3">
                    <div className="card-icon-box">
                      <CheckCircle2 size={20} />
                    </div>
                    <span className="card-tag">COMPATIBILITY CHECK</span>
                  </div>
                  <h3 className="seo-h3">
                    Choosing computer shop in Chennai for Compatible Components
                  </h3>
                  <p className="seo-p mb-0">
                    A computer store Chennai can help you check dimensions, connections, power requirements and component compatibility before purchasing replacement parts. Our team explains the available options to help you choose the right components for your system.
                  </p>
                </div>
              </div>
            </div>

            {/* Section Chapter: 06 // Diagnostics & Local Advice */}
            <div className="chapter-label mb-3">
              {/* <span className="chapter-num">// 06</span> */}
              <span className="chapter-title">SYSTEM DIAGNOSTICS &amp; LOCAL GUIDANCE</span>
            </div>

            <div className="row g-4 mb-4">
              {/* Card 11: H4 When to Visit Computer Shop */}
              <div className="col-12 col-lg-6">
                <div className="elite-card h-100">
                  <div className="card-top-bar d-flex align-items-center justify-content-between mb-3">
                    <div className="card-icon-box">
                      <Activity size={20} />
                    </div>
                    <span className="card-tag">DIAGNOSTICS</span>
                  </div>
                  <h4 className="seo-h4">
                    When to Visiting Computer Shop Chennai
                  </h4>
                  <p className="seo-p mb-3">
                    Visit a computer shop Chennai if your PC overheats, restarts frequently or struggles to run applications. Diagnosing the problem first can help you avoid replacing parts unnecessarily.
                  </p>
                  <p className="seo-p mb-0">
                    At IT Fixer, customers looking for a computer shop in Chennai can discuss their PC&apos;s current condition and possible upgrades with our team.
                  </p>
                </div>
              </div>

              {/* Card 12: H4 Find PC Builder Near Me */}
              <div className="col-12 col-lg-6">
                <div className="elite-card h-100">
                  <div className="card-top-bar d-flex align-items-center justify-content-between mb-3">
                    <div className="card-icon-box">
                      <MapPin size={20} />
                    </div>
                    <span className="card-tag">LOCAL ADVICE</span>
                  </div>
                  <h4 className="seo-h4">
                    Find PC Builder Near me for Local Configuration Advice
                  </h4>
                  <p className="seo-p mb-0">
                    Searching for a PC Builder Near me can be useful when you want to discuss a custom desktop, compare component options or receive in-person guidance. IT Fixer serves customers in Ashok Nagar, Jafferkhanpet and across Chennai.
                  </p>
                </div>
              </div>
            </div>

            {/* Section Chapter: 07 // Hardware Upgrade Showcase */}
            <div className="chapter-label mb-3">
              {/* <span className="chapter-num">// 07</span> */}
              <span className="chapter-title">HARDWARE UPGRADE ADVISORY</span>
            </div>

            {/* Card 13: H4 When PC Build Near Me Can Help with Upgrades */}
            <div className="elite-showcase-box p-4 p-md-5 rounded-4 mb-4 position-relative">
              <div className="card-top-bar d-flex align-items-center justify-content-between mb-3">
                <div className="card-icon-box highlight-icon">
                  <Zap size={22} />
                </div>
                <span className="card-tag tag-brand">UPGRADE STRATEGY</span>
              </div>

              <h4 className="seo-h4 text-brand fs-4 mb-3">
                When PC Build Near me Can Help with Upgrades
              </h4>

              <p className="seo-p mb-3">
                A PC Builder Near me can assess your current system and recommend suitable upgrades for your needs. Whether you want better gaming performance, smoother editing or more storage, checking compatibility helps you choose the right parts.
              </p>

              <p className="seo-p mb-3">
                Our team can also help you plan a new PC configuration that fits your budget and requirements.
              </p>

              <div className="pro-tip-box p-3 p-md-4 rounded-3 d-flex align-items-center gap-3">
                <div className="tip-bullet"></div>
                <p className="seo-p mb-0 text-white-50">
                  Before contacting us, note your current PC specifications and the improvements you want to make. This helps us suggest suitable options.
                </p>
              </div>
            </div>

            {/* Section Chapter: 08 // Peripherals & Accessories */}
            <div className="chapter-label mb-3">
              {/* <span className="chapter-num">// 08</span> */}
              <span className="chapter-title">COMPLETE PERIPHERALS &amp; ACCESSORIES</span>
            </div>

            <div className="row g-4 mb-4">
              {/* Card 14: H4 Complete Your Setup */}
              <div className="col-12 col-lg-6">
                <div className="elite-card h-100">
                  <div className="card-top-bar d-flex align-items-center justify-content-between mb-3">
                    <div className="card-icon-box">
                      <Headphones size={20} />
                    </div>
                    <span className="card-tag">ACCESSORIES</span>
                  </div>
                  <h4 className="seo-h4">
                    Complete Your Setup with Accessories from a PC accessories shop Chennai
                  </h4>
                  <p className="seo-p mb-3">
                    A computer setup may need a monitor, keyboard, mouse, headset or microphone, depending on how you use it. The right accessories can make gaming, streaming, studying and office work more convenient.
                  </p>
                  <p className="seo-p mb-0">
                    A PC accessories store in Chennai customers visit should help them choose suitable accessories for their setup and intended use.
                  </p>
                </div>
              </div>

              {/* Card 15: H4 Choosing Peripherals */}
              <div className="col-12 col-lg-6">
                <div className="elite-card h-100">
                  <div className="card-top-bar d-flex align-items-center justify-content-between mb-3">
                    <div className="card-icon-box">
                      <Keyboard size={20} />
                    </div>
                    <span className="card-tag">PERIPHERALS CATALOG</span>
                  </div>
                  <h4 className="seo-h4">
                    Choosing Peripherals at PC accessories store Chennai
                  </h4>
                  <p className="seo-p mb-3">
                    At a PC accessories shop Chennai, you can find:
                  </p>
                  <ul className="seo-spec-list mb-3">
                    <li>
                      <span className="spec-check"><Check size={14} /></span>
                      <span>Gaming keyboards and mice</span>
                    </li>
                    <li>
                      <span className="spec-check"><Check size={14} /></span>
                      <span>Monitors for your preferred resolution and refresh rate</span>
                    </li>
                    <li>
                      <span className="spec-check"><Check size={14} /></span>
                      <span>Headsets and microphones</span>
                    </li>
                    <li>
                      <span className="spec-check"><Check size={14} /></span>
                      <span>Webcams and streaming equipment</span>
                    </li>
                    <li>
                      <span className="spec-check"><Check size={14} /></span>
                      <span>Cables, adapters and other connectivity accessories</span>
                    </li>
                  </ul>
                  <p className="seo-p mb-3">
                    A PC accessories shop in Chennai can help you check whether these peripherals are compatible with your current computer.
                  </p>
                  <p className="seo-p mb-0">
                    If you&apos;re building a gaming or streaming setup, a PC accessories shop Chennai can help you choose the accessories you need. When comparing a PC accessories store in Chennai, consider product compatibility and your intended use before making a purchase.
                  </p>
                </div>
              </div>
            </div>

            {/* Section Chapter: 09 // Why Us & Call to Action */}
            <div className="chapter-label mb-3">
              {/* <span className="chapter-num">// 09</span> */}
              <span className="chapter-title">WHY IT FIXER &amp; NEXT STEPS</span>
            </div>

            <div className="row g-4 mb-2">
              {/* Card 16: H4 Why Choose */}
              <div className="col-12 col-lg-6">
                <div className="elite-card h-100">
                  <div className="card-top-bar d-flex align-items-center justify-content-between mb-3">
                    <div className="card-icon-box">
                      <Award size={20} />
                    </div>
                    <span className="card-tag">VERIFIED QUALITY</span>
                  </div>
                  <h4 className="seo-h4">
                    Why Choose a Gaming PC Builder In Chennai?
                  </h4>
                  <p className="seo-p mb-3">
                    IT Fixer, powered by Sigmah Enterprises, helps customers with custom PC builds, gaming laptops, editing systems and hardware upgrades. Our team provides clear, practical advice to help you choose the right setup.
                  </p>
                  <p className="seo-p mb-0">
                    When comparing a Gaming PC Store in Chennai, you can discuss your gaming, streaming or editing needs with our team. We can also help you explore upgrade options and choose suitable accessories.
                  </p>
                </div>
              </div>

              {/* Card 17: H4 Plan Your Next PC Build (Glowing Action Card) */}
              <div className="col-12 col-lg-6">
                <div className="elite-card action-vip-card h-100">
                  <div className="card-top-bar d-flex align-items-center justify-content-between mb-3">
                    <div className="card-icon-box action-icon">
                      <Rocket size={20} />
                    </div>
                    <span className="card-tag tag-brand">START YOUR BUILD</span>
                  </div>
                  <h4 className="seo-h4 text-brand">
                    Plan Your Next PC Build with IT Fixer
                  </h4>
                  <p className="seo-p mb-3">
                    Looking for a gaming PC, streaming setup, editing system or hardware upgrade? IT Fixer can help you find the right option for your needs and budget.
                  </p>
                  <div className="action-highlight-box p-3 rounded-3 border-brand">
                    <p className="seo-p mb-0 text-white fw-semibold">
                      Speak with Gaming PC Builder in Chennai to discuss your requirements and plan a PC that suits your work, creativity and gaming needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Dynamic See More / See Less Button */}
        <div className="text-center mt-4 pt-2">
          <button
            className="master-see-more-btn d-inline-flex align-items-center gap-2"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
          >
            <span className="btn-text">{isExpanded ? "See Less" : "See More"}</span>
            <span className="btn-icon-wrapper">
              {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .itfixer-seo-section {
          background-color: #07090c;
          color: #f0f3f6;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          background-image: 
            radial-gradient(rgba(198, 255, 0, 0.05) 1px, transparent 1px),
            linear-gradient(180deg, #07090c 0%, #0a0d12 50%, #07090c 100%);
          background-size: 28px 28px, 100% 100%;
        }

        .text-brand { color: #C6FF00; }

        /* Ambient Glow Effects */
        .ambient-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(120px);
          z-index: 1;
        }
        .glow-top {
          top: -100px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(198, 255, 0, 0.06);
        }
        .glow-bottom {
          bottom: -150px;
          right: 10%;
          background: rgba(198, 255, 0, 0.04);
        }

        /* Master Hero Card */
        .seo-master-hero {
          background: linear-gradient(145deg, rgba(19, 23, 30, 0.95) 0%, rgba(11, 14, 18, 0.98) 100%);
          border: 1px solid rgba(198, 255, 0, 0.22);
          box-shadow: 
            0 25px 60px rgba(0, 0, 0, 0.6), 
            0 0 40px rgba(198, 255, 0, 0.04),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          overflow: hidden;
        }
        .hero-accent-line {
          position: absolute;
          top: 0;
          left: 15%;
          right: 15%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #C6FF00, transparent);
        }

        /* Hero Badge */
        .hero-badge {
          background: rgba(198, 255, 0, 0.08);
          border: 1px solid rgba(198, 255, 0, 0.25);
          padding: 6px 16px;
          border-radius: 30px;
          box-shadow: 0 0 15px rgba(198, 255, 0, 0.1);
        }
        .badge-pulse-dot {
          width: 8px;
          height: 8px;
          background: #C6FF00;
          border-radius: 50%;
          display: inline-block;
          box-shadow: 0 0 8px #C6FF00;
          animation: badgePulse 2s infinite ease-in-out;
        }
        @keyframes badgePulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.6; }
        }
        .badge-text {
          color: #C6FF00;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 1.5px;
        }

        .seo-h1 {
          font-size: 2.1rem;
          color: #ffffff;
          line-height: 1.3;
          letter-spacing: -0.6px;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }
        @media (max-width: 768px) {
          .seo-h1 { font-size: 1.6rem; }
        }

        .subtitle-lead {
          font-size: 1.08rem;
          color: #c4ccd6;
          line-height: 1.75;
        }

        .lead-divider {
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(198, 255, 0, 0.5), transparent);
        }

        /* Chapter Labels */
        .chapter-label {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          margin-top: 1.75rem;
        }
        .chapter-num {
          color: #C6FF00;
          font-family: monospace;
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 1px;
        }
        .chapter-title {
          color: #8b95a5;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        /* Elite Cards */
        .elite-card {
          background: linear-gradient(150deg, #12161e 0%, #0c0f14 100%);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 18px;
          padding: 24px;
          transition: all 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
          position: relative;
        }
        .elite-card:hover {
          border-color: rgba(198, 255, 0, 0.35);
          transform: translateY(-5px);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5), 0 0 20px rgba(198, 255, 0, 0.08);
        }

        .card-top-bar {
          width: 100%;
        }
        .card-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(198, 255, 0, 0.06);
          border: 1px solid rgba(198, 255, 0, 0.18);
          color: #C6FF00;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .elite-card:hover .card-icon-box {
          background: rgba(198, 255, 0, 0.12);
          transform: scale(1.05);
          box-shadow: 0 0 15px rgba(198, 255, 0, 0.2);
        }

        .card-tag {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 1.2px;
          color: #8994a3;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 4px 10px;
          border-radius: 12px;
        }
        .tag-brand {
          color: #C6FF00 !important;
          background: rgba(198, 255, 0, 0.08) !important;
          border-color: rgba(198, 255, 0, 0.2) !important;
        }

        .seo-h2 {
          font-size: 1.35rem;
          color: #ffffff;
          line-height: 1.4;
          font-weight: 700;
          margin-bottom: 0.85rem;
          transition: color 0.3s ease;
        }
        .elite-card:hover .seo-h2 {
          color: #C6FF00;
        }

        .seo-h3 {
          font-size: 1.22rem;
          color: #ffffff;
          line-height: 1.45;
          font-weight: 600;
          margin-bottom: 0.8rem;
          transition: color 0.3s ease;
        }
        .elite-card:hover .seo-h3 {
          color: #C6FF00;
        }

        .seo-h4 {
          font-size: 1.14rem;
          color: #ffffff;
          line-height: 1.45;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .seo-p {
          color: #b0bac7;
          font-size: 0.98rem;
          line-height: 1.75;
          margin-bottom: 0;
        }

        /* Spec List with Checkmarks */
        .seo-spec-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .seo-spec-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #b0bac7;
          font-size: 0.94rem;
          line-height: 1.5;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 8px 12px;
          border-radius: 8px;
          transition: all 0.25s ease;
        }
        .seo-spec-list li:hover {
          background: rgba(198, 255, 0, 0.03);
          border-color: rgba(198, 255, 0, 0.15);
          color: #ffffff;
        }
        .spec-check {
          color: #C6FF00;
          background: rgba(198, 255, 0, 0.1);
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* Showcase Box (Full-Width Upgrade Highlight) */
        .elite-showcase-box {
          background: linear-gradient(145deg, #131720 0%, #0d1016 100%);
          border: 1px solid rgba(198, 255, 0, 0.2);
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.45);
        }
        .highlight-icon {
          background: rgba(198, 255, 0, 0.12) !important;
          border-color: rgba(198, 255, 0, 0.3) !important;
        }
        .pro-tip-box {
          background: rgba(0, 0, 0, 0.35);
          border-left: 3px solid #C6FF00;
          border-top: 1px solid rgba(255, 255, 255, 0.03);
          border-right: 1px solid rgba(255, 255, 255, 0.03);
          border-bottom: 1px solid rgba(255, 255, 255, 0.03);
        }
        .tip-bullet {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #C6FF00;
          flex-shrink: 0;
          box-shadow: 0 0 8px #C6FF00;
        }

        /* VIP Action Card */
        .action-vip-card {
          background: linear-gradient(145deg, rgba(198, 255, 0, 0.06) 0%, #0f131a 100%) !important;
          border: 1px solid rgba(198, 255, 0, 0.35) !important;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(198, 255, 0, 0.06) !important;
        }
        .action-icon {
          background: #C6FF00 !important;
          color: #000000 !important;
          box-shadow: 0 0 15px rgba(198, 255, 0, 0.4);
        }
        .action-highlight-box {
          background: rgba(198, 255, 0, 0.04);
          border: 1px solid rgba(198, 255, 0, 0.2);
        }

        /* Master See More Button */
        .master-see-more-btn {
          background: linear-gradient(135deg, #d2ff1e 0%, #a6d719 100%);
          color: #080a0e;
          border: none;
          padding: 13px 36px;
          font-size: 1.02rem;
          font-weight: 750;
          border-radius: 40px;
          cursor: pointer;
          transition: all 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
          box-shadow: 0 6px 25px rgba(198, 255, 0, 0.28);
          letter-spacing: 0.3px;
        }
        .master-see-more-btn:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 10px 32px rgba(198, 255, 0, 0.45);
          background: linear-gradient(135deg, #dcff33 0%, #b2e600 100%);
        }
        .master-see-more-btn:active {
          transform: translateY(0);
        }
        .btn-icon-wrapper {
          display: flex;
          align-items: center;
          transition: transform 0.3s ease;
        }
        .master-see-more-btn:hover .btn-icon-wrapper {
          transform: translateY(2px);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.45s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
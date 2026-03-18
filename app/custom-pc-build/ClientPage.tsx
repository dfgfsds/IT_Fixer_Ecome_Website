
"use client";
import Image from "next/image";
import Link from "next/link";
import {
    MonitorPlay,
    MonitorSmartphone,
    PenTool,
    LayoutTemplate,
    Cpu,
    Presentation,
    Settings,
    Zap,
    HardDrive,
    Fan,
    Plug,
    Server,
} from "lucide-react";
import WhoNeedsPC from "@/components/WhoNeedsPC";
import BuildsBasedOnNeeds from "@/components/BuildsBasedOnNeeds";
import PerformanceBenefitsPC from "@/components/PerformanceBenefitsPC";
import CustomPcDetails from "@/components/CustomPcDetails";
import TriggerSection from "@/components/TriggerSection";
export default function CustomPcBuild() {
    return (
        <>
            <div>
                <div id="smooth-content">
                    <div className="gt-breadcrumb-wrapper bg-cover" style={{ backgroundImage: "url('/assets/img/breadcrumb.png')" }}>
                        <div className="gt-left-shape">
                            <img src="/assets/img/shape-1.png" alt="img" />
                        </div>
                        <div className="gt-right-shape">
                            <img src="/assets/img/shape-2.png" alt="img" />
                        </div>
                        <div className="gt-blur-shape">
                            <img src="/assets/img/breadcrumb-shape.png" alt="img" />
                        </div>
                        <div className="container">
                            <div className="gt-page-heading">
                                <div className="gt-breadcrumb-sub-title">
                                    <h1 className="wow fadeInUp text-uppercase" data-wow-delay=".3s">Custom PC Build</h1>
                                </div>
                                <ul className="gt-breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                                    <li>
                                        <i className="fa-solid fa-house"></i>
                                    </li>
                                    <li>
                                        <Link className='text-uppercase' href="/">
                                            home :
                                        </Link>
                                    </li>
                                    <li className="color text-uppercase">
                                        Custom PC Build
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <section className="about-section-2 about1-padding fix">
                        <div className="about-shape-1">
                            <img src="assets/img/home-2/about/about-shape-1.png" alt="img" />
                        </div>
                        <div className="container">
                            <div className="about-wrapper-2">
                                <div className="row g-lg-4 align-items-center">
                                    <div className="col-lg-5 col-xl-6">
                                        <div className="about-iamge wow fadeInUp" data-wow-delay=".3s">
                                            <img src="/assets/img/pc-build.webp" alt="img" />
                                            <div className="line-shape">
                                                <img src="/assets/img/pc-build.webp" alt="img" />
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-xl-6">
                                        <div className="about-content">
                                            <div className="section-title mb-0">
                                                <h6 className="subtitle tz-sub-tilte tz-sub-anim  text-uppercase tx-subTitle">Custom PC Build in Chennai – IT Fixer</h6>
                                                <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">
                                                    Build Your Dream PC in Chennai
                                                </h2>
                                            </div>
                                            <p className="about-text wow fadeInUp" data-wow-delay=".5s">
                                                Looking for a reliable Custom PC Build in Chennai that perfectly matches your performance needs and budget? IT Fixer is your trusted destination for building high-performance, future-ready custom desktop computers.

                                            </p>
                                            <p className=" mt-2 wow fadeInUp" data-wow-delay=".5s">
                                                Whether you need a gaming PC, professional workstation, or a budget home/office system, we design and assemble PCs tailored to your exact requirements using genuine branded components with full warranty support.
                                            </p>
                                            <p className=" mt-2 wow fadeInUp" data-wow-delay=".5s">
                                                IT Fixer offers the best custom PC build in Chennai with options for gaming PCs, workstation computers, video editing systems, and budget desktop builds. Whether you need an Intel or AMD processor-based system with NVIDIA graphics, we provide fully customized PC solutions with high performance, reliability, and warranty support across Chennai and Tamil Nadu.

                                            </p>
                                            {/* <div className="counter-wrap-2">
                                                <div className="counter-item-2 wow fadeInUp" data-wow-delay=".2s">
                                                    <h2>
                                                        <span className="gt-count">500</span> +
                                                    </h2>
                                                    <p> Builds</p>
                                                </div>
                                                <div className="counter-item-2 wow fadeInUp" data-wow-delay=".4s">
                                                    <h2>
                                                        <span className="gt-count">320</span> +
                                                    </h2>
                                                    <p>Systems</p>
                                                </div>
                                                <div className="counter-item-2 wow fadeInUp" data-wow-delay=".6s">
                                                    <h2>
                                                        <span className="gt-count">150</span> +
                                                    </h2>
                                                    <p>Gamers </p>
                                                </div>
                                                <div className="counter-item-2 style-2 wow fadeInUp" data-wow-delay=".8s">
                                                    <h2>
                                                        <span className="gt-count">99</span> %
                                                    </h2>
                                                    <p> Satisfaction</p>
                                                </div>
                                            </div> */}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>



                    {/* Why Choose Us */}


                    <div className="why-section">
                        <div className="grid-bg"></div>

                        <div className="text-center" style={{ position: 'relative', zIndex: 1 }}>
                            <div className="why-section-tag">Why Choose Us</div>
                            <div className="accent-bar" style={{ display: 'block', margin: '0 auto 20px' }}></div>
                            <h2 className="why-section-heading">Why Choose <span>IT Fixer</span> for Custom PC Build in Chennai?</h2>
                            <p className="why-section-sub">We combine technical expertise with premium hardware to deliver performance-driven custom PCs — built right, the first time.</p>
                        </div>

                        <div className="why-features-grid">

                            <div className="why-feature-card">
                                <div className="why-feature-icon">
                                    <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
                                </div>
                                <div>
                                    <div className="why-feature-num">01</div>
                                    <h4 className="why-feature-title">Expert Configuration Guidance</h4>
                                    <p className="why-feature-desc">Our technicians help you pick the right specs tailored to your exact workflow and budget.</p>
                                </div>
                            </div>

                            <div className="why-feature-card">
                                <div className="why-feature-icon">
                                    <svg viewBox="0 0 24 24"><path d="M9 12l2 2 4-4" /><rect x="3" y="3" width="18" height="18" rx="2" /></svg>
                                </div>
                                <div>
                                    <div className="why-feature-num">02</div>
                                    <h4 className="why-feature-title">Genuine Branded Components Only</h4>
                                    <p className="why-feature-desc">We source 100% authentic parts from certified distributors — no grey-market hardware.</p>
                                </div>
                            </div>

                            <div className="why-feature-card">
                                <div className="why-feature-icon">
                                    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                                </div>
                                <div>
                                    <div className="why-feature-num">03</div>
                                    <h4 className="why-feature-title">Budget-Friendly & High-Performance Builds</h4>
                                    <p className="why-feature-desc">From entry-level office rigs to top-tier workstations — value at every price point.</p>
                                </div>
                            </div>

                            <div className="why-feature-card">
                                <div className="why-feature-icon">
                                    <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
                                </div>
                                <div>
                                    <div className="why-feature-num">04</div>
                                    <h4 className="why-feature-title">Gaming, Editing, Streaming & Office Solutions</h4>
                                    <p className="why-feature-desc">Purpose-built systems optimized for your specific use case — not generic one-size-fits-all builds.</p>
                                </div>
                            </div>

                            <div className="why-feature-card">
                                <div className="why-feature-icon">
                                    <svg viewBox="0 0 24 24"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>
                                </div>
                                <div>
                                    <div className="why-feature-num">05</div>
                                    <h4 className="why-feature-title">Professional Cable Management & Airflow Optimization</h4>
                                    <p className="why-feature-desc">Clean internals, optimal thermals — your build looks and runs like a professional system.</p>
                                </div>
                            </div>

                            <div className="why-feature-card">
                                <div className="why-feature-icon">
                                    <svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                                </div>
                                <div>
                                    <div className="why-feature-num">06</div>
                                    <h4 className="why-feature-title">Complete Stress Testing Before Delivery</h4>
                                    <p className="why-feature-desc">Every PC undergoes rigorous benchmarking and stability testing before it reaches you.</p>
                                </div>
                            </div>

                            <div className="why-feature-card" style={{ gridColumn: '1 / -1', maxWidth: '440px', margin: '0 auto', width: '100%' }}>
                                <div className="why-feature-icon">
                                    <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                </div>
                                <div>
                                    <div className="why-feature-num">07</div>
                                    <h4 className="why-feature-title">Chennai-Based Support & After-Sales Service</h4>
                                    <p className="why-feature-desc">Local experts you can walk in to — real support, not just a support ticket number.</p>
                                </div>
                            </div>

                        </div>


                    </div>

                    <WhoNeedsPC />




                    {/* Builds Based on Needs */}
                    <BuildsBasedOnNeeds />

                    {/* Customize Every Component */}
                    <section style={{ backgroundColor: '#0a0c10', padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
                        {/* Grid Background identical to Why Choose Us */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.04) 1px, transparent 1px)',
                            backgroundSize: '40px 40px',
                            pointerEvents: 'none'
                        }}></div>
                        <div className="grid-bg"></div>
                        <div className="container">
                            <div className="gt-top-feature-wrapper">
                                <div className="row g-4 align-items-center flex-column-reverse flex-lg-row">
                                    <div className="col-lg-6">
                                        <div className="gt-top-feature-content">
                                            <div className="section-title mb-0">
                                                <h2 className="wow fadeInUp text-uppercase" data-wow-delay=".3s">
                                                    Customize Every Component
                                                </h2>
                                                <p className="wow fadeInUp" data-wow-delay=".4s" style={{ background: 'linear-gradient(90deg, #36fe1cff, #cbfe1c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                                    Build your PC your way with complete flexibility:
                                                </p>
                                            </div>
                                            <div className="row mt-4">
                                                {[
                                                    { icon: <Cpu />, title: "Processor", desc: "Latest Intel / AMD CPUs" },
                                                    { icon: <Settings />, title: "Motherboard", desc: "Gaming & professional chipsets" },
                                                    { icon: <Zap />, title: "RAM", desc: "DDR4 / DDR5 high-speed memory" },
                                                    { icon: <HardDrive />, title: "Storage", desc: "NVMe SSD / SATA SSD / HDD" },
                                                    { icon: <MonitorPlay />, title: "Graphics Card", desc: "NVIDIA / AMD GPUs" },
                                                    { icon: <Plug />, title: "Power Supply", desc: "High-efficiency SMPS" },
                                                    { icon: <Server />, title: "Cabinet", desc: "Premium design with airflow" },
                                                    { icon: <Fan />, title: "Cooling", desc: "Air cooling / Liquid cooling" },
                                                ].map((item, idx) => (
                                                    <div className="col-md-6 mb-4 wow fadeInUp" data-wow-delay={`${0.2 + idx * 0.1}s`} key={idx}>
                                                        <div className="d-flex align-items-start gap-3">
                                                            <div className="p-2 rounded" style={{ background: '#1c1f26' }}>
                                                                {item.icon}
                                                            </div>
                                                            <div>
                                                                <h3 className="text-white mb-1" style={{ fontSize: '1.25rem' }}>{item.title}</h3>
                                                                <p className="text-gray mb-0" style={{ fontSize: '0.9rem' }}>{item.desc}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="gt-top-feature-image wow fadeInRight">
                                            <img src="/assets/img/home-3/top-feature.png" alt="Custom PC Components" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Performance Benefits */}
                    <PerformanceBenefitsPC />

                    {/* All Custom Details (Pricing, Brands, Process, CTA) */}
                    <CustomPcDetails />
                    <TriggerSection />

                </div>

            </div>

        </>

    );
} 
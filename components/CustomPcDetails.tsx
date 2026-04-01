"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
    CheckCircle2,
    ShieldCheck,
    Cpu,
    MonitorPlay,
    HardDrive,
    XCircle,
    HeadphonesIcon,
    ArrowUpCircle,
    Wrench,
    CalendarCheck,
    MapPin,
    Globe,
    Zap,
    Users,
    Banknote,
    BadgeCheck,
    MemoryStick
} from "lucide-react";

export default function CustomPcDetails() {
    const [activeTab, setActiveTab] = useState('gaming');

    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
                .cpc-sec { padding: 80px 0 0px; position: relative; overflow: hidden; background: transparent; font-family: inherit; }
                .cpc-sec-alt { background: transparent; }
                .cpc-sec-alt2 { background: transparent; }

                .cpc-divider-line { width: 48px; height: 3px; background: linear-gradient(90deg, #36fe1cff, #cbfe1c); border-radius: 2px; margin-bottom: 24px; }

                .cpc-dot-bg::before { content: ''; position: absolute; inset: 0; background-image: radial-gradient(rgba(54, 254, 28, 0.05) 1px, transparent 1px); background-size: 32px 32px; pointer-events: none; z-index: 0; }

                /* Brands */
                .cpc-brand-pill { display: flex; align-items: center; gap: 14px; background: transparent; border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 0px; padding: 16px 20px; transition: border-color 0.3s, transform 0.2s; cursor: default; }
                .cpc-brand-pill:hover { border-color: #cbfe1c; transform: translateX(6px); }
                .cpc-brand-pill .bp-dot { width: 10px; height: 10px; border-radius: 50%; background: #cbfe1c; flex-shrink: 0; }
                .cpc-brand-pill h6 { font-weight: 600; color: #fff; margin: 0; }
                .cpc-brand-pill span { margin-left: auto; }

                /* Why IT Fixer */
                .cpc-wif-item { display: flex; gap: 16px; align-items: flex-start; padding: 24px; background: transparent; border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 0px; transition: border-color 0.3s; height: 100%; cursor: default; }
                .cpc-wif-item:hover { border-color: #cbfe1c; }
                .cpc-wif-num { font-size: 28px; font-weight: 700; color: #cbfe1c; min-width: 36px; line-height: 1; margin-top: 2px; }
                .cpc-wif-body h6 { font-size: 16px; text-transform: uppercase; font-weight: 600; color: #fff; margin-bottom: 8px; }
                .cpc-wif-body p { margin: 0; font-size:14px; line-height:1.7; }

                /* Use Case Tabs */
                .cpc-use-tab-wrap { background: transparent; border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 0px; overflow: hidden; position: relative; z-index: 1; }
                .cpc-use-tabs { display: flex; border-bottom: 1px solid rgba(255, 255, 255, 0.2); }
                .cpc-use-tab-btn { flex: 1; padding: 18px; font-size: 16px; font-weight: 600; color: #fff; background: transparent; border: none; cursor: pointer; transition: color 0.2s, background 0.2s; letter-spacing: 0.5px; text-transform: uppercase; border-bottom: 2px solid transparent; }
                .cpc-use-tab-btn.active { color: #cbfe1c; background: #0b0e13; border-bottom: 2px solid #cbfe1c; }
                .cpc-use-tab-content { display: none; padding: 32px; }
                .cpc-use-tab-content.active { display: block; animation: cpcFadeIn 0.3s ease; }
                @keyframes cpcFadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
                .cpc-use-tag { display: inline-flex; align-items: center; gap: 6px; background: transparent; border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 100px; padding: 6px 14px; font-size: 13px; color: #cbfe1c; margin: 4px; font-weight: 500; }

                /* Compare Table */
                .cpc-compare-table { width: 100%; border-collapse: collapse; }
                .cpc-compare-table th { font-size: 16px; font-weight: 600; padding: 16px 20px; text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.2); }
                .cpc-compare-table th.custom-col { color: #cbfe1c; background: #050709; }
                .cpc-compare-table th.brand-col { color: #fff; background: transparent; }
                .cpc-compare-table th.label-col { color: #fff; background: transparent; }
                .cpc-compare-table td { padding: 16px 20px; border-bottom: 1px solid rgba(255, 255, 255, 0.2); vertical-align: middle; }
                .cpc-compare-table td.custom-col { color: #fff; background: #050709; }
                .cpc-compare-table td.brand-col { background: transparent; }
                .cpc-compare-table td.label-col { color: #fff; font-weight: 500; background: transparent; }
                .cpc-compare-table tr:last-child td { border-bottom: none; }
                .cpc-tick { color: #cbfe1c; }
                .cpc-cross { color: #ff4d4d; }

                /* Build Process */
                .cpc-process-step { display: flex; gap: 20px; align-items: flex-start; position: relative; padding-bottom: 36px; }
                .cpc-process-step:last-child { padding-bottom: 0; }
                .cpc-process-step::after { content: ''; position: absolute; left: 24px; top: 52px; bottom: 0; width: 2px; background: linear-gradient(180deg, rgba(255, 255, 255, 0.5), transparent); }
                .cpc-process-step:last-child::after { display: none; }
                .cpc-ps-circle { width: 50px; height: 50px; min-width: 50px; border-radius: 50%; background: #1C1D20; border: 2px solid rgba(255, 255, 255, 0.02); display: flex; align-items: center; justify-content: center; font-size: 18px; font-weight: 700; color: #cbfe1c; z-index: 1; }
                .cpc-ps-body h5 { font-size: 16px; text-transform:uppercase; font-weight: 600; color: #fff; margin-bottom: 7px; }
                .cpc-ps-body p { margin: 0; font-size:14px; line-height: 1.7; }

                /* Pricing */
                .cpc-price-card { background: transparent; border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 0px; padding: 32px 24px; height: 100%; position: relative; transition: border-color 0.3s, transform 0.25s; overflow: hidden; cursor: default; }
                .cpc-price-card.featured { border-color: #cbfe1c; background: linear-gradient(145deg, #111520 0%, #0c1412 100%); }
                .cpc-price-card.featured::before { content: 'POPULAR'; position: absolute; top: 0; right: 0; background: #cbfe1c; color: #000; font-size: 12px; font-weight: 700; letter-spacing: 1.5px; padding: 6px 16px; border-bottom-left-radius: 12px; }
                .cpc-price-card:hover { transform: translateY(-5px); border-color: #cbfe1c; }
                .cpc-price-card h5 { font-size: 17px; font-weight: 600; color: #fff; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px; }
                .cpc-price-card .price-val { font-size: 42px; font-weight: 700; color: #cbfe1c; line-height: 1; margin-bottom: 8px; }
                .cpc-price-card .price-sub { margin-bottom: 24px; }
                .cpc-price-card hr { border-color: #1d2535; margin: 16px 0; }
                .cpc-price-card ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; }
                .cpc-price-card ul li { display: flex; align-items: center; gap: 10px; }
                .cpc-price-card ul li svg { color: #cbfe1c; }

                /* Support Row */
                .cpc-support-row { display: flex; align-items: center; gap: 16px; padding: 18px; background: transparent; border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 0px; margin-bottom: 12px; transition: border-color 0.3s; cursor: default; }
                .cpc-support-row:hover { border-color: #cbfe1c; transform: translateX(4px); }
                .cpc-support-row .sr-icon { width: 48px; height: 48px; min-width: 48px; border-radius: 6px; background: #1C1D20; display: flex; align-items: center; justify-content: center; }
                .cpc-support-row .sr-icon svg { color: #cbfe1c; }
                .cpc-support-row h6 { font-size: 16px; text-transform: uppercase; font-weight: 600; color: #fff; margin: 0 0 4px; }
                .cpc-support-row p { margin: 0; font-size: 14px; line-height: 1.7;}

                /* Area Chip */
                .cpc-area-chip { display: inline-flex; align-items: center; gap: 5px; background: transparent; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:0px; padding: 12px 20px; font-weight: 600; color: #fff; margin:8px; transition: border-color 0.25s, color 0.25s; cursor: default; }
                .cpc-area-chip:hover { border-color: #cbfe1c; color: #cbfe1c; }
                
                /* FAQ Section */
                .cpc-faq-item { background: transparent; border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 0px; padding: 24px; height: 100%; transition: border-color 0.3s; cursor: default; }
                .cpc-faq-item:hover { border-color: #cbfe1c; }
                .cpc-faq-q { font-size: 16px; text-transform: uppercase; font-weight: 600; color: #fff; margin-bottom: 7px; display: flex; align-items: flex-start; gap: 12px; }
                .cpc-faq-q .q-icon { color: #cbfe1c; flex-shrink: 0; margin-top: 0px; }
                .cpc-faq-a { padding-left: 32px; font-size: 14px; line-height:1.7; }

                /* CTA Section */
                .cpc-cta-section { background: transparent; padding: 80px 0 20px; position: relative; overflow: hidden; }
                .cpc-cta-section::before { content: ''; position: absolute; width: 500px; height: 500px; border-radius: 50%; background: radial-gradient(circle, rgba(54, 254, 28, 0.08), transparent 70%); top: -100px; right: -100px; pointer-events: none; }
                .cpc-cta-badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(54, 254, 28, 0.1); border: 1px solid rgba(54, 254, 28, 0.25); border-radius: 100px; padding: 8px 18px; font-size: 12px; font-weight: 600; color: #cbfe1c; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 24px; }
                .cpc-cta-badge .live-dot { width: 8px; height: 8px; border-radius: 50%; background: #cbfe1c; animation: cpcPulse 1.6s infinite; }
                @keyframes cpcPulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.3; transform: scale(0.8); } }
                .cpc-cta-feature { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 12px; }
                .cpc-cta-feature svg { color: #cbfe1c; flex-shrink: 0; margin-top: 4px; }

                .cpc-btn-primary { background: #cbfe1c; color: #000; border: none; border-radius: 8px; padding: 14px 32px; font-size: 16px; font-weight: 700; letter-spacing: 0.5px; cursor: pointer; transition: opacity 0.2s, transform 0.15s; text-decoration: none; display: inline-flex; align-items: center; justify-content: center; }
                .cpc-btn-primary:hover { opacity: 0.85; transform: translateY(-2px); color: #000; }
                .cpc-btn-outline { background: transparent; color: #cbfe1c; border: 1px solid rgba(54, 254, 28, 0.4); border-radius: 8px; padding: 14px 32px; font-size: 15px; font-weight: 700; cursor: pointer; transition: background 0.2s; text-decoration: none; display: inline-flex; align-items: center; justify-content: center; }
                .cpc-btn-outline:hover { background: rgba(54, 254, 28, 0.08); color: #cbfe1c; }

                /* Center Utility */
                .cpc-sec-center { text-align: center; }
                .cpc-sec-center .cpc-divider-line { margin: 0 auto 24px; }
                .cpc-sec-center .cpc-lead-p { margin: 0 auto; }

                /* Mobile Responsiveness */
                @media (max-width: 768px) {
                    .cpc-sec { padding: 50px 0; }
                    .cpc-cta-section { padding: 50px 0; }
                    .cpc-cta-section::before { display: none; } /* Hide large decorative circle on small screens */
                    .cpc-use-tabs { flex-wrap: wrap; }
                    .cpc-use-tab-btn { padding: 14px 10px; font-size: 14px; flex: 1 1 100%; text-align: center; }
                    .cpc-wif-item { flex-direction: column; align-items: flex-start; gap: 12px; padding: 20px; }
                    .cpc-price-card { padding: 24px 20px; }
                    .cpc-faq-item { padding: 20px 16px; }
                    .cpc-faq-q { font-size: 16px; }
                    .cpc-brand-pill { flex-direction: row; flex-wrap: wrap; }
                    .cpc-compare-table { min-width: 700px; }
                }
            `}} />

            {/* 2. TOP BRANDS */}
            <section className="cpc-sec cpc-sec-alt">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-5">
                            <div className="section-title mb-0">
                                <h6 className="subtitle tz-sub-tilte tz-sub-anim  text-uppercase tx-subTitle">Trusted Hardware</h6>
                                <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">Top Brands We Use in <span>Custom PC Builds</span></h2>
                                <p className="about-text wow fadeInUp mt-3" data-wow-delay=".5s">At IT Fixer, we source only trusted global brands — ensuring high performance, durability, and full warranty support on every component.</p>
                            </div>
                            <div className="mt-4 p-3" style={{ background: 'rgba(54, 254, 28, 0.05)', border: '1px solid #cbfe1c', borderRadius: '0px' }}>
                                <p style={{ fontSize: '14px', color: '#fff', margin: 0, display: 'flex', gap: '8px' }}>
                                    <ShieldCheck color="#cbfe1c" size={20} className="flex-shrink-0 mt-1" />
                                    <span>All components are 100% genuine, sourced from certified distributors with full manufacturer warranty.</span>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="d-flex flex-column gap-3">
                                <div className="cpc-brand-pill"><div className="bp-dot"></div><h6>Intel & AMD Processors</h6><span>CPU</span></div>
                                <div className="cpc-brand-pill"><div className="bp-dot"></div><h6>ASUS, MSI, Gigabyte Motherboards</h6><span>Motherboard</span></div>
                                <div className="cpc-brand-pill"><div className="bp-dot"></div><h6>Corsair, G.Skill RAM</h6><span>Memory</span></div>
                                <div className="cpc-brand-pill"><div className="bp-dot"></div><h6>Samsung, WD, Crucial SSDs</h6><span>Storage</span></div>
                                <div className="cpc-brand-pill"><div className="bp-dot"></div><h6>NVIDIA GeForce & AMD Radeon GPUs</h6><span>Graphics</span></div>
                                <div className="cpc-brand-pill"><div className="bp-dot"></div><h6>Cooler Master, NZXT Cabinets & Cooling</h6><span>Cooling</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. WHY IT FIXER IS THE BEST */}
            <section className="cpc-sec cpc-dot-bg">
                <div className="container position-relative" style={{ zIndex: 1 }}>
                    <div className="section-title text-center mb-50" style={{ position: 'relative', zIndex: 1 }}>
                        <h6 className="subtitle tz-sub-tilte tz-sub-anim  text-uppercase tx-subTitle justify-content-center">Our Edge</h6>
                        <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">Why IT Fixer is the <span>Best Custom PC Builder</span> in Chennai</h2>
                        <p className="about-text wow fadeInUp mt-3" data-wow-delay=".5s">One of the top-rated custom PC builders in Chennai - trusted by gamers, creators, and professionals across Tamil Nadu.</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-6"><div className="cpc-wif-item"><div className="cpc-wif-num">01</div><div className="cpc-wif-body"><h6>Chennai-Based Expert Team</h6><p>Local specialists with deep hands-on experience in component selection, assembly, and optimization.</p></div></div></div>
                        <div className="col-lg-6"><div className="cpc-wif-item"><div className="cpc-wif-num">02</div><div className="cpc-wif-body"><h6>Fast Delivery Across Tamil Nadu</h6><p>Secure packaging and reliable delivery to Chennai and all major cities across Tamil Nadu.</p></div></div></div>
                        <div className="col-lg-6"><div className="cpc-wif-item"><div className="cpc-wif-num">03</div><div className="cpc-wif-body"><h6>Transparent Pricing - No Hidden Costs</h6><p>Every rupee is accounted for. We provide detailed quotations with zero surprise charges.</p></div></div></div>
                        <div className="col-lg-6"><div className="cpc-wif-item"><div className="cpc-wif-num">04</div><div className="cpc-wif-body"><h6>Personalized Consultation</h6><p>We analyze your exact use case and budget before recommending any configuration.</p></div></div></div>
                        <div className="col-lg-6"><div className="cpc-wif-item"><div className="cpc-wif-num">05</div><div className="cpc-wif-body"><h6>On-Site & Remote Support</h6><p>Need help after delivery? We offer both walk-in and remote troubleshooting assistance.</p></div></div></div>
                        <div className="col-lg-6"><div className="cpc-wif-item"><div className="cpc-wif-num">06</div><div className="cpc-wif-body"><h6>Trusted by Gamers & Professionals</h6><p>500+ successful builds. Rated highly by gamers, video editors, developers, and businesses alike.</p></div></div></div>
                    </div>
                </div>
            </section>

            {/* 4. GAMING & WORKSTATION TABS */}
            <section className="cpc-sec cpc-sec-alt2">
                <div className="container">
                    <div className="section-title text-center mb-50" style={{ position: 'relative', zIndex: 1 }}>
                        <h6 className="subtitle tz-sub-tilte tz-sub-anim  text-uppercase tx-subTitle justify-content-center">Use Case Builds</h6>
                        <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">Gaming PC & <span>Workstation Builds</span> in Chennai</h2>
                    </div>
                    <div className="cpc-use-tab-wrap">
                        <div className="cpc-use-tabs">
                            <button className={`cpc-use-tab-btn ${activeTab === 'gaming' ? 'active' : ''}`} onClick={() => setActiveTab('gaming')}>
                                <MonitorPlay size={20} className="me-2 d-inline" style={{ verticalAlign: 'middle' }} /> Gaming PC
                            </button>
                            <button className={`cpc-use-tab-btn ${activeTab === 'workstation' ? 'active' : ''}`} onClick={() => setActiveTab('workstation')}>
                                <Cpu size={20} className="me-2 d-inline" style={{ verticalAlign: 'middle' }} /> Workstation PC
                            </button>
                        </div>
                        {activeTab === 'gaming' && (
                            <div className="cpc-use-tab-content active">
                                <div className="row align-items-center g-4">
                                    <div className="col-lg-6">
                                        <h3 style={{ fontSize: '32px', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>
                                            Gaming PC Build <span style={{ color: '#cbfe1c' }}>Chennai</span>
                                        </h3>
                                        <p className='mb-2'>
                                            Looking for a powerful Custom Gaming PC in Chennai? We build systems optimized for every gaming scenario - from budget esports rigs to ultra 4K setups.
                                        </p>
                                        <div className="flex-wrap d-flex">
                                            <span className="cpc-use-tag"><CheckCircle2 size={16} /> High FPS Gaming</span>
                                            <span className="cpc-use-tag"><CheckCircle2 size={16} /> Streaming Setups</span>
                                            <span className="cpc-use-tag"><CheckCircle2 size={16} /> 1080p / 1440p / 4K</span>
                                            <span className="cpc-use-tag"><CheckCircle2 size={16} /> eSports Performance</span>
                                            <span className="cpc-use-tag"><CheckCircle2 size={16} /> RGB Gaming Builds</span>
                                            <span className="cpc-use-tag"><CheckCircle2 size={16} /> Budget to High-End</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div style={{ background: '#0b0e13', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '0px', padding: '24px' }}>
                                            <p style={{ fontSize: '14px', color: '#fff', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>Build Tiers</p>
                                            <div className="d-flex flex-column gap-3">
                                                <div className="d-flex justify-content-between align-items-center p-3" style={{ background: '#0a0c10', borderRadius: '0px', border: '1px solid rgba(255, 255, 255, 0.2)' }}><span style={{ fontSize: '15px', color: '#fff', fontWeight: 600 }}>Budget Gaming</span><span style={{ color: '#cbfe1c', fontSize: '20px', fontWeight: 700 }}>₹40,000+</span></div>
                                                <div className="d-flex justify-content-between align-items-center p-3" style={{ background: '#0a0c10', borderRadius: '0px', border: '1px solid rgba(255, 255, 255, 0.2)' }}><span style={{ fontSize: '15px', color: '#fff', fontWeight: 600 }}>Mid-Range Gaming</span><span style={{ color: '#cbfe1c', fontSize: '20px', fontWeight: 700 }}>₹60K–90K</span></div>
                                                <div className="d-flex justify-content-between align-items-center p-3" style={{ background: '#0a0c10', borderRadius: '0px', border: '1px solid rgba(255, 255, 255, 0.2)' }}><span style={{ fontSize: '15px', color: '#fff', fontWeight: 600 }}>High-End Gaming</span><span style={{ color: '#cbfe1c', fontSize: '20px', fontWeight: 700 }}>₹1,00,000+</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'workstation' && (
                            <div className="cpc-use-tab-content active">
                                <div className="row align-items-center g-4">
                                    <div className="col-lg-6">
                                        <h3 style={{ fontSize: '32px', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>
                                            Workstation PC Build <span style={{ color: '#cbfe1c' }}>Chennai</span>
                                        </h3>
                                        <p className='mb-2'>
                                            Need a professional Workstation PC Build in Chennai? Our workstation PCs are built with powerful processors, high RAM capacity, and advanced GPUs for smooth multitasking and rendering.
                                        </p>
                                        <div className="flex-wrap d-flex">
                                            <span className="cpc-use-tag"><CheckCircle2 size={16} /> Video Editing</span>
                                            <span className="cpc-use-tag"><CheckCircle2 size={16} /> 3D Rendering</span>
                                            <span className="cpc-use-tag"><CheckCircle2 size={16} /> Architecture & Design</span>
                                            <span className="cpc-use-tag"><CheckCircle2 size={16} /> Software Development</span>
                                            <span className="cpc-use-tag"><CheckCircle2 size={16} /> Business Productivity</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div style={{ background: '#0b0e13', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '0px', padding: '24px' }}>
                                            <p style={{ fontSize: '13px', color: '#fff', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>Recommended Specs</p>
                                            <div className="d-flex flex-column gap-2">
                                                <div className="d-flex align-items-center gap-3 p-3" style={{ background: '#0a0c10', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.2)' }}><Cpu color="#cbfe1c" size={20} /><span style={{ fontSize: '14px', color: '#fff' }}>Intel Core i9 / AMD Ryzen 9</span></div>
                                                <div className="d-flex align-items-center gap-3 p-3" style={{ background: '#0a0c10', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.2)' }}><MemoryStick color="#cbfe1c" size={20} /><span style={{ fontSize: '14px', color: '#fff' }}>64GB – 128GB DDR5 RAM</span></div>
                                                <div className="d-flex align-items-center gap-3 p-3" style={{ background: '#0a0c10', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.2)' }}><MonitorPlay color="#cbfe1c" size={20} /><span style={{ fontSize: '14px', color: '#fff' }}>NVIDIA RTX 4070 / 4080 / 4090</span></div>
                                                <div className="d-flex align-items-center gap-3 p-3" style={{ background: '#0a0c10', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.2)' }}><HardDrive color="#cbfe1c" size={20} /><span style={{ fontSize: '14px', color: '#fff' }}>2TB NVMe SSD + HDD Storage</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* 5. CUSTOM vs BRANDED */}
            <section className="cpc-sec cpc-dot-bg">
                <div className="container position-relative" style={{ zIndex: 1 }}>
                    <div className="section-title text-center mb-50" style={{ position: 'relative', zIndex: 1 }}>
                        <h6 className="subtitle tz-sub-tilte tz-sub-anim  text-uppercase tx-subTitle justify-content-center">Comparison</h6>
                        <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">Custom PC vs <span>Branded Desktop</span> - Which is Better?</h2>
                        <p className="about-text wow fadeInUp mt-3" data-wow-delay=".5s">A custom desktop computer in Chennai offers better flexibility, performance, and long-term value compared to any off-the-shelf branded desktop.</p>
                    </div>
                    <div style={{ background: 'transparent', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '0px', overflowX: 'auto' }} className="table-responsive">
                        <table className="cpc-compare-table">
                            <thead>
                                <tr>
                                    <th className="label-col">Feature</th>
                                    <th className="custom-col text-nowrap"><span className="d-inline-flex align-items-center gap-2"><Cpu size={18} /> Custom PC Build</span></th>
                                    <th className="brand-col text-nowrap"><span className="d-inline-flex align-items-center gap-2"><MonitorPlay size={18} /> Branded Desktop</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td className="label-col">Price-Performance</td><td className="custom-col"><CheckCircle2 className="cpc-tick me-2 d-inline" size={18} /> Best value for budget</td><td className="brand-col"><XCircle className="cpc-cross me-2 d-inline" size={18} /> Limited configurations</td></tr>
                                <tr><td className="label-col">Upgradability</td><td className="custom-col"><CheckCircle2 className="cpc-tick me-2 d-inline" size={18} /> Fully upgradeable</td><td className="brand-col"><XCircle className="cpc-cross me-2 d-inline" size={18} /> Restricted upgrades</td></tr>
                                <tr><td className="label-col">Component Choice</td><td className="custom-col"><CheckCircle2 className="cpc-tick me-2 d-inline" size={18} /> Intel / AMD / NVIDIA</td><td className="brand-col"><XCircle className="cpc-cross me-2 d-inline" size={18} /> Fixed specs only</td></tr>
                                <tr><td className="label-col">Software</td><td className="custom-col"><CheckCircle2 className="cpc-tick me-2 d-inline" size={18} /> No bloatware</td><td className="brand-col"><XCircle className="cpc-cross me-2 d-inline" size={18} /> Pre-installed bloatware</td></tr>
                                <tr><td className="label-col">Cooling</td><td className="custom-col"><CheckCircle2 className="cpc-tick me-2 d-inline" size={18} /> Optimized airflow</td><td className="brand-col"><XCircle className="cpc-cross me-2 d-inline" size={18} /> Standard stock cooling</td></tr>
                                <tr><td className="label-col">Warranty</td><td className="custom-col"><CheckCircle2 className="cpc-tick me-2 d-inline" size={18} /> Component-level warranty</td><td className="brand-col"><XCircle className="cpc-cross me-2 d-inline" size={18} /> Limited service warranty</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 6. BUILD PROCESS */}
            <section className="cpc-sec cpc-sec-alt2" style={{ padding: '150px 0 0px' }}>
                <div className="container">
                    <div className="row align-items-start g-5">
                        <div className="col-lg-5">
                            <div className="section-title mb-0">
                                <h6 className="subtitle tz-sub-tilte tz-sub-anim  text-uppercase tx-subTitle">How It Works</h6>
                                <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">Our Custom PC <span>Build Process</span></h2>
                                <p className="about-text wow fadeInUp mt-3" data-wow-delay=".5s">From your first consultation to final delivery - a streamlined, transparent process designed to deliver the perfect PC every time.</p>
                            </div>
                            <div className="mt-4 d-flex gap-4">
                                <div><div style={{ fontSize: '38px', fontWeight: 700, color: '#cbfe1c', lineHeight: 1 }}>500+</div><div style={{ fontSize: '11px', letterSpacing: '1.5px', textTransform: 'uppercase', marginTop: '6px' }}>Builds Completed</div></div>
                                <div><div style={{ fontSize: '38px', fontWeight: 700, color: '#cbfe1c', lineHeight: 1 }}>99%</div><div style={{ fontSize: '11px', letterSpacing: '1.5px', textTransform: 'uppercase', marginTop: '6px' }}>Satisfaction Rate</div></div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="cpc-process-step"><div className="cpc-ps-circle">01</div><div className="cpc-ps-body"><h5>Requirement Discussion & Budget Planning</h5><p>We start with a detailed conversation about your goals, usage, and budget - so we build what you actually need.</p></div></div>
                            <div className="cpc-process-step"><div className="cpc-ps-circle">02</div><div className="cpc-ps-body"><h5>Component Selection & Transparent Quotation</h5><p>We handpick the best components for your use case and provide a complete, itemized quote - no hidden charges.</p></div></div>
                            <div className="cpc-process-step"><div className="cpc-ps-circle">03</div><div className="cpc-ps-body"><h5>Professional Assembly & Cable Management</h5><p>Expert assembly with clean cable routing, proper thermal paste application, and airflow optimization.</p></div></div>
                            <div className="cpc-process-step"><div className="cpc-ps-circle">04</div><div className="cpc-ps-body"><h5>Performance & Stress Testing</h5><p>CPU, GPU, and RAM are fully stress-tested for stability before your system leaves our hands.</p></div></div>
                            <div className="cpc-process-step"><div className="cpc-ps-circle">05</div><div className="cpc-ps-body"><h5>Delivery or Store Pickup</h5><p>Choose secure doorstep delivery or collect from our Chennai store - your call.</p></div></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. PRICING */}
            <section className="cpc-sec cpc-dot-bg">
                <div className="container position-relative" style={{ zIndex: 1 }}>
                    <div className="section-title text-center mb-50" style={{ position: 'relative', zIndex: 1 }}>
                        <h6 className="subtitle tz-sub-tilte tz-sub-anim  text-uppercase tx-subTitle justify-content-center">Transparent Pricing</h6>
                        <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">Custom PC Build in <span>Chennai Price</span></h2>
                        <p className="about-text wow fadeInUp mt-3" data-wow-delay=".5s">Pricing depends on configuration and performance needs. We provide transparent pricing with zero hidden charges.</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6">
                            <div className="cpc-price-card">
                                <h5>Budget Office PC</h5>
                                <div className="price-val">₹25K+</div>
                                <div className="price-sub">Starting from ₹25,000</div>
                                <hr />
                                <ul>
                                    <li><CheckCircle2 size={16} /> Daily productivity</li>
                                    <li><CheckCircle2 size={16} /> Office applications</li>
                                    <li><CheckCircle2 size={16} /> Web browsing</li>
                                    <li><CheckCircle2 size={16} /> Light multitasking</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="cpc-price-card">
                                <h5>Budget Gaming PC</h5>
                                <div className="price-val">₹40K+</div>
                                <div className="price-sub">Starting from ₹40,000</div>
                                <hr />
                                <ul>
                                    <li><CheckCircle2 size={16} /> 1080p gaming</li>
                                    <li><CheckCircle2 size={16} /> 60+ FPS performance</li>
                                    <li><CheckCircle2 size={16} /> Dedicated GPU</li>
                                    <li><CheckCircle2 size={16} /> SSD storage</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="cpc-price-card ">
                                <h5>Mid-Range Gaming PC</h5>
                                <div className="price-val">₹75K</div>
                                <div className="price-sub">₹60,000 – ₹90,000</div>
                                <hr />
                                <ul>
                                    <li><CheckCircle2 size={16} /> 1440p gaming</li>
                                    <li><CheckCircle2 size={16} /> 144+ FPS</li>
                                    <li><CheckCircle2 size={16} /> RTX GPU</li>
                                    <li><CheckCircle2 size={16} /> High-speed RAM</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="cpc-price-card">
                                <h5>High-End / Workstation</h5>
                                <div className="price-val">₹1L+</div>
                                <div className="price-sub">₹1,00,000 and above</div>
                                <hr />
                                <ul>
                                    <li><CheckCircle2 size={16} /> 4K gaming</li>
                                    <li><CheckCircle2 size={16} /> Pro-grade GPU</li>
                                    <li><CheckCircle2 size={16} /> 64GB+ RAM</li>
                                    <li><CheckCircle2 size={16} /> NVMe RAID storage</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. AFTER-SALES & WARRANTY */}
            <section className="cpc-sec cpc-sec-alt" style={{ padding: '150px 0 0px' }}>
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-5">
                            <div className="section-title mb-0">
                                <h6 className="subtitle tz-sub-tilte tz-sub-anim  text-uppercase tx-subTitle">Post-Build Support</h6>
                                <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">After-Sales Support <span>& Warranty</span></h2>
                                <p className="about-text wow fadeInUp mt-3" data-wow-delay=".5s">At IT Fixer, we don't just build PCs — we support you long after delivery. Our after-sales team ensures your system runs smoothly for years.</p>
                            </div>
                            <div className="mt-4 p-3" style={{ background: 'rgba(54, 254, 28, 0.05)', border: '1px solid #cbfe1c', borderRadius: '0px' }}>
                                <p style={{ fontSize: '14px', color: '#fff', margin: 0, display: 'flex', gap: '8px' }}>
                                    <ShieldCheck color="#cbfe1c" size={20} className="flex-shrink-0 mt-1" />
                                    <span>Every build comes with component-level warranty and dedicated after-sales support from our Chennai team.</span>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="cpc-support-row"><div className="sr-icon"><BadgeCheck /></div><div><h6>Component-Level Warranty</h6><p>Each component carries its own manufacturer warranty — full coverage, no exceptions.</p></div></div>
                            <div className="cpc-support-row"><div className="sr-icon"><HeadphonesIcon /></div><div><h6>Technical Support Assistance</h6><p>Our team is available for troubleshooting and guidance on issues post-delivery.</p></div></div>
                            <div className="cpc-support-row"><div className="sr-icon"><ArrowUpCircle /></div><div><h6>Upgrade Guidance</h6><p>When you're ready to level up, we advise on the best compatible upgrades for your existing build.</p></div></div>
                            <div className="cpc-support-row"><div className="sr-icon"><Wrench /></div><div><h6>Troubleshooting Support</h6><p>Remote and on-site support available for software, hardware, and performance issues.</p></div></div>
                            <div className="cpc-support-row"><div className="sr-icon"><CalendarCheck /></div><div><h6>Maintenance Recommendations</h6><p>Scheduled cleaning, driver updates, and thermal paste replacement guidance to extend system life.</p></div></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. SERVICE AREAS */}
            <section className="cpc-sec cpc-dot-bg">
                <div className="container position-relative" style={{ zIndex: 1 }}>
                    <div className="section-title text-center mb-50" style={{ position: 'relative', zIndex: 1 }}>
                        <h6 className="subtitle tz-sub-tilte tz-sub-anim  text-uppercase tx-subTitle justify-content-center">Coverage</h6>
                        <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">Custom PC Build <span>Service Areas</span></h2>
                        <p className="about-text wow fadeInUp mt-3" data-wow-delay=".5s">We provide custom PC build services across Chennai and all of Tamil Nadu. Looking for a custom PC build near you? IT Fixer has you covered.</p>
                    </div>
                    <div className="text-center">
                        <span className="cpc-area-chip"><MapPin size={16} className="me-1" /> Chennai</span>
                        <span className="cpc-area-chip"><MapPin size={16} className="me-1" /> Tambaram</span>
                        <span className="cpc-area-chip"><MapPin size={16} className="me-1" /> Velachery</span>
                        <span className="cpc-area-chip"><MapPin size={16} className="me-1" /> OMR – IT Corridor</span>
                        <span className="cpc-area-chip"><MapPin size={16} className="me-1" /> T Nagar</span>
                        <span className="cpc-area-chip"><MapPin size={16} className="me-1" /> Anna Nagar</span>
                        <span className="cpc-area-chip"><MapPin size={16} className="me-1" /> Porur</span>
                        <span className="cpc-area-chip"><MapPin size={16} className="me-1" /> Avadi</span>
                        <span className="cpc-area-chip" style={{ borderColor: 'rgba(54, 254, 28, 0.4)', color: '#cbfe1c' }}><Globe size={16} className="me-1" /> All over Tamil Nadu</span>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="cpc-sec cpc-sec-alt2">
                <div className="container">
                    <div className="section-title text-center mb-5" style={{ position: 'relative', zIndex: 1 }}>
                        <h6 className="subtitle tz-sub-tilte tz-sub-anim  text-uppercase tx-subTitle justify-content-center">Queries Answered</h6>
                        <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">Frequently Asked Questions - <span>Custom PC Build in Chennai</span></h2>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className="cpc-faq-item">
                                <div className="cpc-faq-q">
                                    <span className="q-icon">Q.</span>
                                    Why choose IT Fixer for custom PC build in Chennai?
                                </div>
                                <p className="cpc-faq-a">We provide expert guidance, genuine components, professional assembly, and local support.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="cpc-faq-item">
                                <div className="cpc-faq-q">
                                    <span className="q-icon">Q.</span>
                                    Can I choose my own components?
                                </div>
                                <p className="cpc-faq-a">Yes, you can fully customize every part based on your needs and budget.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="cpc-faq-item">
                                <div className="cpc-faq-q">
                                    <span className="q-icon">Q.</span>
                                    How long does it take to build a PC?
                                </div>
                                <p className="cpc-faq-a">Most builds are completed within 1-3 days.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="cpc-faq-item">
                                <div className="cpc-faq-q">
                                    <span className="q-icon">Q.</span>
                                    Are custom PCs upgradeable?
                                </div>
                                <p className="cpc-faq-a">Yes, all systems are fully upgradeable.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="cpc-faq-item">
                                <div className="cpc-faq-q">
                                    <span className="q-icon">Q.</span>
                                    Do you provide warranty?
                                </div>
                                <p className="cpc-faq-a">Yes, all components come with manufacturer warranty.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="cpc-faq-item">
                                <div className="cpc-faq-q">
                                    <span className="q-icon">Q.</span>
                                    Can you build budget gaming PCs?
                                </div>
                                <p className="cpc-faq-a">Yes, we offer performance-optimized budget gaming PCs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 10. FINAL CTA */}
            <section className="cpc-cta-section" style={{ background: "transparent" }}>
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-7">
                            <div className="section-title mb-0">
                                <h6 className="subtitle tz-sub-tilte tz-sub-anim  text-uppercase tx-subTitle justify-content-start" style={{ letterSpacing: '2px' }}><span className="live-dot me-2"></span>Now Accepting Builds</h6>
                                <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim" style={{ fontSize: 'clamp(30px, 5vw, 56px)' }}>Get Your Custom PC Build in <span>Chennai Today</span></h2>
                            </div>
                            <p className="about-text wow fadeInUp mt-3 mb-4" data-wow-delay=".5s">Ready to build your dream PC? Contact IT Fixer for a free consultation, transparent pricing, and a system built exactly to your needs.</p>
                            <div className="row g-2 mb-4">
                                <div className="col-sm-6"><div className="cpc-cta-feature"><CheckCircle2 size={18} /> Free consultation included</div></div>
                                <div className="col-sm-6"><div className="cpc-cta-feature"><CheckCircle2 size={18} /> Genuine branded components</div></div>
                                <div className="col-sm-6"><div className="cpc-cta-feature"><CheckCircle2 size={18} /> Tamil Nadu-wide delivery</div></div>
                                <div className="col-sm-6"><div className="cpc-cta-feature"><CheckCircle2 size={18} /> EMI options available</div></div>
                                <div className="col-sm-6"><div className="cpc-cta-feature"><CheckCircle2 size={18} /> Performance-based recommendations</div></div>
                                <div className="col-sm-6"><div className="cpc-cta-feature"><CheckCircle2 size={18} /> Transparent pricing, no surprises</div></div>
                            </div>
                            <div className="d-flex gap-3 flex-wrap">
                                <Link href="/contact" className="vs-btn cart-animation-item">Build My PC Now</Link>
                                <Link href="/shop" className="vs-btn vs-btn--style3 cart-animation-item">View Pricing</Link>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div style={{ background: 'transparent', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '0px', padding: '32px' }}>
                                <p style={{ fontSize: '17px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0px', color: '#fff', marginBottom: '20px' }}>Why Choose IT Fixer</p>
                                <div className="d-flex flex-column gap-3">
                                    <div className="d-flex align-items-center gap-3"><div style={{ width: '48px', height: '48px', borderRadius: '6px', background: '#1C1D20', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Zap color="#cbfe1c" size={24} /></div><span>Same-day quotation turnaround</span></div>
                                    <div className="d-flex align-items-center gap-3"><div style={{ width: '48px', height: '48px', borderRadius: '6px', background: '#1C1D20', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Users color="#cbfe1c" size={24} /></div><span>500+ satisfied customers</span></div>
                                    <div className="d-flex align-items-center gap-3"><div style={{ width: '48px', height: '48px', borderRadius: '6px', background: '#1C1D20', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><ShieldCheck color="#cbfe1c" size={24} /></div><span>Component-level warranty</span></div>
                                    <div className="d-flex align-items-center gap-3"><div style={{ width: '48px', height: '48px', borderRadius: '6px', background: '#1C1D20', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><MapPin color="#cbfe1c" size={24} /></div><span>Chennai-based with TN delivery</span></div>
                                    <div className="d-flex align-items-center gap-3"><div style={{ width: '48px', height: '48px', borderRadius: '6px', background: '#1C1D20', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Banknote color="#cbfe1c" size={24} /></div><span>EMI & flexible payment options</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

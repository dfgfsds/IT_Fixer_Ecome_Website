"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    MonitorPlay,
    Video,
    Tv,
    Briefcase,
    Box,
    Cpu,
    HardDrive,
    Settings,
    Zap,
    Plug,
    Server,
    Fan,
    CheckCircle2,
    ShieldCheck,
    MemoryStick,
    XCircle,
    HeadphonesIcon,
    ArrowUpCircle,
    Wrench,
    CalendarCheck,
    MapPin,
    Globe,
    Users,
    Banknote,
    BadgeCheck,
    Star,
    Check,
    HelpCircle,
    ChevronDown,
    Home,
    Sparkles,
    Flame
} from "lucide-react";
import {
    FaGamepad,
    FaVideo,
    FaPaintBrush,
    FaBroadcastTower,
    FaCode,
    FaBuilding
} from "react-icons/fa";
import TriggerSection from "@/components/TriggerSection";

export default function CustomPcBuild() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
                .cpc-page-wrapper {
                    background: transparent;
                    color: #e2e8f0;
                }
                .cpc-sec {
                    padding: 80px 0;
                    position: relative;
                    overflow: hidden;
                }
                .cpc-sec-border {
                    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                }
                .cpc-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(203, 254, 28, 0.1);
                    border: 1px solid rgba(203, 254, 28, 0.3);
                    border-radius: 100px;
                    padding: 6px 16px;
                    font-size: 13px;
                    font-weight: 600;
                    color: #cbfe1c;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    margin-bottom: 16px;
                }
                .cpc-card {
                    background: rgba(18, 22, 31, 0.6);
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    border-radius: 12px;
                    padding: 24px;
                    transition: all 0.3s ease;
                    height: 100%;
                }
                .cpc-card:hover {
                    border-color: #cbfe1c;
                    transform: translateY(-4px);
                    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
                }
                .cpc-icon-box {
                    width: 52px;
                    height: 52px;
                    min-width: 52px;
                    border-radius: 10px;
                    background: #1C1D20;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #cbfe1c;
                    font-size: 22px;
                    margin-bottom: 16px;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                }
                .cpc-table-wrap {
                    background: rgba(18, 22, 31, 0.6);
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    border-radius: 12px;
                    overflow-x: auto;
                }
                .cpc-table {
                    width: 100%;
                    border-collapse: collapse;
                }
                .cpc-table th {
                    font-size: 16px;
                    font-weight: 700;
                    padding: 20px 24px;
                    text-align: left;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
                }
                .cpc-table th.custom-head {
                    color: #cbfe1c;
                    background: rgba(203, 254, 28, 0.06);
                }
                .cpc-table th.brand-head {
                    color: #fff;
                    background: rgba(255, 255, 255, 0.02);
                }
                .cpc-table td {
                    padding: 18px 24px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                    vertical-align: middle;
                    font-size: 15px;
                }
                .cpc-table td.custom-col {
                    color: #fff;
                    background: rgba(203, 254, 28, 0.03);
                    font-weight: 500;
                }
                .cpc-table td.brand-col {
                    color: #94a3b8;
                }
                .cpc-table tr:last-child td {
                    border-bottom: none;
                }
                .cpc-chip {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(255, 255, 255, 0.04);
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    border-radius: 8px;
                    padding: 10px 18px;
                    font-weight: 600;
                    color: #fff;
                    margin: 6px;
                    transition: all 0.25s ease;
                }
                .cpc-chip:hover {
                    border-color: #cbfe1c;
                    color: #cbfe1c;
                    transform: translateY(-2px);
                }
                .cpc-step-item {
                    display: flex;
                    gap: 20px;
                    align-items: flex-start;
                    padding: 20px;
                    background: rgba(18, 22, 31, 0.6);
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    border-radius: 12px;
                    margin-bottom: 16px;
                    transition: all 0.3s ease;
                }
                .cpc-step-item:hover {
                    border-color: #cbfe1c;
                    transform: translateX(6px);
                }
                .cpc-step-num {
                    font-size: 20px;
                    font-weight: 800;
                    color: #cbfe1c;
                    min-width: 44px;
                    height: 44px;
                    border-radius: 10px;
                    background: #1C1D20;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid rgba(203, 254, 28, 0.3);
                }
                .cpc-faq-card {
                    background: rgba(18, 22, 31, 0.6);
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    border-radius: 12px;
                    padding: 22px 24px;
                    transition: all 0.25s ease;
                    cursor: pointer;
                    margin-bottom: 16px;
                }
                .cpc-faq-card:hover {
                    border-color: #cbfe1c;
                }
                .cpc-faq-q {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    font-size: 17px;
                    font-weight: 600;
                    color: #fff;
                    margin: 0;
                }
                .cpc-faq-a {
                    margin-top: 14px;
                    padding-top: 14px;
                    border-top: 1px solid rgba(255, 255, 255, 0.08);
                    color: #cbd5e1;
                    font-size: 15px;
                    line-height: 1.7;
                }
                .cpc-testimonial-card {
                    background: rgba(18, 22, 31, 0.6);
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    border-radius: 12px;
                    padding: 28px;
                    height: 100%;
                    transition: all 0.3s ease;
                }
                .cpc-testimonial-card:hover {
                    border-color: #cbfe1c;
                    transform: translateY(-4px);
                }
                `
            }} />

            <div className="cpc-page-wrapper">
                <div id="smooth-content">

                    {/* ================= BREADCRUMB ================= */}
                    <div className="gt-breadcrumb-wrapper bg-cover" style={{ backgroundImage: "url('/assets/img/breadcrumb.png')" }}>
                        <div className="gt-left-shape">
                            <img src="/assets/img/shape-1.png" alt="shape" />
                        </div>
                        <div className="gt-right-shape">
                            <img src="/assets/img/shape-2.png" alt="shape" />
                        </div>
                        <div className="gt-blur-shape">
                            <img src="/assets/img/breadcrumb-shape.png" alt="shape" />
                        </div>
                        <div className="container">
                            <div className="gt-page-heading">
                                <div className="gt-breadcrumb-sub-title">
                                    <span className="subtitle text-uppercase" style={{ color: '#cbfe1c', letterSpacing: '1.5px', fontWeight: 600 }}>
                                        IT Fixer Custom PC
                                    </span>
                                </div>
                                <ul className="gt-breadcrumb-items wow fadeInUp" data-wow-delay=".3s">
                                    <li>
                                        <Home size={16} />
                                    </li>
                                    <li>
                                        <Link className="text-uppercase" href="/">
                                            HOME :
                                        </Link>
                                    </li>
                                    <li className="color text-uppercase">
                                        CUSTOM PC BUILD
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* ================= 1. HERO SECTION (H1 & H2) ================= */}
                    <section className="about-section-2 about1-padding fix cpc-sec-border">
                        <div className="about-shape-1">
                            <img src="/assets/img/home-2/about/about-shape-1.png" alt="shape" />
                        </div>
                        <div className="container">
                            <div className="about-wrapper-2">
                                <div className="row g-lg-5 align-items-center">
                                    <div className="col-lg-5 col-xl-6">
                                        <div className="about-iamge wow fadeInUp" data-wow-delay=".3s">
                                            <img
                                                src="/assets/img/pc-build.webp"
                                                alt="Custom PC Build in Chennai – IT Fixer"
                                                className="img-fluid rounded-3"
                                                style={{ border: '1px solid rgba(255, 255, 255, 0.15)', boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-xl-6">
                                        <div className="about-content">
                                            <div className="section-title mb-3">
                                                {/* H1 Tag */}
                                                <h1 className="subtitle tz-sub-tilte tz-sub-anim text-uppercase tx-subTitle" style={{ fontSize: '18px', letterSpacing: '1.5px', color: '#cbfe1c' }}>
                                                    Custom PC Build in Chennai – IT Fixer
                                                </h1>
                                                {/* H2 Tag */}
                                                <h2 className="tx-title sec_title tz-itm-title tz-itm-anim mt-2">
                                                    Build Your Dream PC in Chennai
                                                </h2>
                                            </div>
                                            <p className="about-text wow fadeInUp mb-3" data-wow-delay=".4s" style={{ fontSize: '16px', lineHeight: '1.8' }}>
                                                Looking for a reliable Custom PC Build in Chennai that matches your performance needs and budget? IT Fixer helps you build a custom desktop using genuine branded components with warranty support.
                                            </p>
                                            <p className="about-text wow fadeInUp mb-4" data-wow-delay=".5s" style={{ fontSize: '16px', lineHeight: '1.8' }}>
                                                From a gaming PC and professional workstation to a budget home/office system, we offer fully customized PC solutions for your needs. Choose Intel or AMD processor-based systems with NVIDIA graphics for gaming, video editing, and everyday work. IT Fixer offers the best custom PC build in Chennai, focusing on high performance, reliability, and warranty support across Chennai and Tamil Nadu.
                                            </p>
                                            <div className="d-flex gap-3 flex-wrap">
                                                <Link href="/contact" className="vs-btn cart-animation-item">
                                                    BUILD MY PC
                                                </Link>
                                                <a href="tel:+918585858768" className="vs-btn vs-btn--style3 cart-animation-item">
                                                    CALL: +91 8585858768
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ================= 2. WHY CHOOSE IT FIXER (H2) ================= */}
                    <section className="cpc-sec cpc-sec-border">
                        <div className="container">
                            <div className="section-title text-center mb-5 mx-auto" style={{ maxWidth: '850px' }}>
                                <div className="cpc-badge">
                                    <Sparkles size={14} /> EXCELLENCE GUARANTEED
                                </div>
                                <h2 className="tx-title sec_title tz-itm-title tz-itm-anim">
                                    Why Choose IT Fixer for Custom PC Build in Chennai?
                                </h2>
                                <p className="about-text wow fadeInUp mt-3" data-wow-delay=".3s" style={{ fontSize: '16px' }}>
                                    At IT Fixer, we combine technical expertise with quality hardware to build custom PCs that suit your needs, budget, and performance expectations.
                                </p>
                            </div>

                            <div className="row justify-content-center g-4">
                                {[
                                    { num: "01", text: "Expert configuration guidance for your requirements", icon: <Cpu /> },
                                    { num: "02", text: "Genuine branded components only", icon: <ShieldCheck /> },
                                    { num: "03", text: "Budget-friendly and high-performance builds", icon: <Zap /> },
                                    { num: "04", text: "Solutions for gaming, editing, streaming, and office use", icon: <MonitorPlay /> },
                                    { num: "05", text: "Professional cable management and airflow optimization", icon: <Fan /> },
                                    { num: "06", text: "Complete stress testing before delivery", icon: <BadgeCheck /> },
                                    { num: "07", text: "Chennai-based support and after-sales service", icon: <MapPin /> },
                                ].map((item, idx) => (
                                    <div className="col-xxl-4 col-lg-4 col-md-6" key={idx}>
                                        <div className="cpc-card d-flex align-items-start gap-3">
                                            <div className="cpc-step-num">
                                                {item.num}
                                            </div>
                                            <div>
                                                <h4 className="text-white mb-0" style={{ fontSize: '16px', fontWeight: 600, lineHeight: '1.6' }}>
                                                    {item.text}
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ================= 3. WHO NEEDS A CUSTOM PC BUILD IN CHENNAI? (H2) ================= */}
                    <section className="cpc-sec cpc-sec-border">
                        <div className="container">
                            <div className="section-title text-center mb-5 mx-auto" style={{ maxWidth: '850px' }}>
                                <div className="cpc-badge">
                                    <Users size={14} /> TARGET AUDIENCE
                                </div>
                                <h2 className="tx-title sec_title tz-itm-title tz-itm-anim">
                                    Who Needs a Custom PC Build in Chennai?
                                </h2>
                                <p className="about-text wow fadeInUp mt-3" data-wow-delay=".3s" style={{ fontSize: '16px' }}>
                                    A custom PC build in Chennai is suitable for users who need a computer tailored to their specific work, gaming, or professional requirements.
                                </p>
                            </div>

                            <div className="row g-4 mb-4">
                                {[
                                    { icon: <FaGamepad />, text: "Gamers seeking high FPS and smooth gameplay." },
                                    { icon: <FaVideo />, text: "Video editors using Premiere Pro, After Effects, or DaVinci Resolve." },
                                    { icon: <FaPaintBrush />, text: "Graphic designers working with Photoshop, Illustrator, or Blender." },
                                    { icon: <FaBroadcastTower />, text: "Streamers who need stable performance for live streaming." },
                                    { icon: <FaCode />, text: "Software developers running multiple development environments." },
                                    { icon: <FaBuilding />, text: "Businesses requiring powerful office workstations." },
                                ].map((item, idx) => (
                                    <div className="col-lg-4 col-md-6" key={idx}>
                                        <div className="cpc-card d-flex align-items-center gap-3">
                                            <div className="cpc-icon-box mb-0">
                                                {item.icon}
                                            </div>
                                            <p className="mb-0 text-white" style={{ fontSize: '15px', fontWeight: 500, lineHeight: '1.6' }}>
                                                {item.text}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="p-4 rounded-3 text-center" style={{ background: 'rgba(203, 254, 28, 0.05)', border: '1px solid rgba(203, 254, 28, 0.25)' }}>
                                <p className="mb-0 text-white" style={{ fontSize: '16px', fontWeight: 500 }}>
                                    IT Fixer helps each user choose and build a perfectly optimized PC for their workflow, based on their needs and budget.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* ================= 4. CUSTOM PC BUILDS BASED ON YOUR NEEDS (H2 & H3s) ================= */}
                    <section className="cpc-sec cpc-sec-border">
                        <div className="container">
                            <div className="section-title text-center mb-5 mx-auto" style={{ maxWidth: '850px' }}>
                                <div className="cpc-badge">
                                    <Flame size={14} /> PURPOSE BUILT
                                </div>
                                <h2 className="tx-title sec_title tz-itm-title tz-itm-anim">
                                    Custom PC Builds Based on Your Needs
                                </h2>
                                <p className="about-text wow fadeInUp mt-3" data-wow-delay=".3s" style={{ fontSize: '16px' }}>
                                    IT Fixer offers custom PC configurations for different workloads, helping you choose the right system for your needs and budget.
                                </p>
                            </div>

                            <div className="row g-4">
                                {[
                                    {
                                        title: "Gaming PC Build",
                                        desc: "Enjoy smooth gameplay with powerful GPUs, fast RAM, and optimized cooling.",
                                        icon: <MonitorPlay size={24} />
                                    },
                                    {
                                        title: "Video Editing PC",
                                        desc: "Edit videos efficiently with powerful CPUs, high RAM capacity, and SSD storage for faster rendering.",
                                        icon: <Video size={24} />
                                    },
                                    {
                                        title: "Streaming PC",
                                        desc: "Stream and game smoothly with multi-core processors and stable system performance.",
                                        icon: <Tv size={24} />
                                    },
                                    {
                                        title: "Office PC",
                                        desc: "Choose budget-friendly systems for daily productivity and business tasks.",
                                        icon: <Briefcase size={24} />
                                    },
                                    {
                                        title: "3D Rendering PC",
                                        desc: "Handle demanding modeling and rendering workloads with high-end GPUs and processors.",
                                        icon: <Box size={24} />
                                    },
                                ].map((item, idx) => (
                                    <div className="col-lg-4 col-md-6" key={idx}>
                                        <div className="cpc-card">
                                            <div className="cpc-icon-box">
                                                {item.icon}
                                            </div>
                                            <h3 className="text-white mb-2" style={{ fontSize: '18px', fontWeight: 700, textTransform: 'uppercase' }}>
                                                {item.title}
                                            </h3>
                                            <p className="mb-0 text-secondary" style={{ fontSize: '14px', lineHeight: '1.7' }}>
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ================= 5. CUSTOMIZE EVERY COMPONENT (H2 & H3s) ================= */}
                    <section className="cpc-sec cpc-sec-border">
                        <div className="container">
                            <div className="section-title text-center mb-5 mx-auto" style={{ maxWidth: '850px' }}>
                                <div className="cpc-badge">
                                    <Settings size={14} /> COMPLETE CONTROL
                                </div>
                                <h2 className="tx-title sec_title tz-itm-title tz-itm-anim">
                                    Customize Every Component
                                </h2>
                                <p className="about-text wow fadeInUp mt-3" data-wow-delay=".3s" style={{ fontSize: '16px' }}>
                                    Choose the components that suit your performance needs, budget, and preferred to Build your PC.
                                </p>
                            </div>

                            <div className="row g-4 align-items-center">
                                <div className="col-lg-7">
                                    <div className="row g-3">
                                        {[
                                            { title: "Processor", desc: "Select the latest Intel or AMD CPUs for your workload.", icon: <Cpu /> },
                                            { title: "Motherboard", desc: "Choose gaming or professional chipsets to match your build.", icon: <Settings /> },
                                            { title: "RAM", desc: "Configure DDR4 or DDR5 high-speed memory for smooth multitasking.", icon: <Zap /> },
                                            { title: "Storage", desc: "Pick NVMe SSD, SATA SSD, or HDD options based on your storage needs.", icon: <HardDrive /> },
                                            { title: "Graphics Card", desc: "Choose NVIDIA or AMD GPUs for gaming and creative applications.", icon: <MonitorPlay /> },
                                            { title: "Power Supply", desc: "Select a high-efficiency SMPS suited to your components.", icon: <Plug /> },
                                            { title: "Cabinet", desc: "Explore premium designs with proper airflow.", icon: <Server /> },
                                            { title: "Cooling", desc: "Choose air cooling or liquid cooling to manage system temperatures.", icon: <Fan /> },
                                        ].map((item, idx) => (
                                            <div className="col-md-6" key={idx}>
                                                <div className="cpc-card p-3">
                                                    <div className="d-flex align-items-center gap-3 mb-2">
                                                        <div className="cpc-icon-box mb-0" style={{ width: '42px', height: '42px', minWidth: '42px', fontSize: '18px' }}>
                                                            {item.icon}
                                                        </div>
                                                        <h3 className="text-white mb-0" style={{ fontSize: '16px', fontWeight: 600, textTransform: 'uppercase' }}>
                                                            {item.title}
                                                        </h3>
                                                    </div>
                                                    <p className="mb-0 text-secondary" style={{ fontSize: '13px', lineHeight: '1.6' }}>
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-lg-5 text-center">
                                    <img
                                        src="/assets/img/home-3/top-feature.png"
                                        alt="Customize Every Component - IT Fixer"
                                        className="img-fluid rounded-3"
                                        style={{ maxHeight: '480px' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ================= 6. PERFORMANCE BENEFITS OF CUSTOM PC BUILD (H2) ================= */}
                    <section className="cpc-sec cpc-sec-border">
                        <div className="container">
                            <div className="row g-lg-5 align-items-center">
                                <div className="col-lg-6">
                                    <img
                                        src="https://cdn-ilamaab.nitrocdn.com/JfKDzZijMpKPPZzjAOsbKYBsoZJCYiHm/assets/images/optimized/rev-50fa8f8/www.pczone.co.uk/wp-content/uploads/2024/03/patrick-pahlke-VmyBUO2Q0r0-unsplash-696x464.jpg"
                                        alt="Performance Benefits of Custom PC Build"
                                        className="img-fluid rounded-3"
                                        style={{ border: '1px solid rgba(255, 255, 255, 0.15)', boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }}
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <div className="section-title mb-4">
                                        <div className="cpc-badge">
                                            <Zap size={14} /> PEAK PERFORMANCE
                                        </div>
                                        <h2 className="tx-title sec_title tz-itm-title tz-itm-anim">
                                            Performance Benefits of Custom PC Build
                                        </h2>
                                        <p className="about-text wow fadeInUp mt-2" data-wow-delay=".3s" style={{ fontSize: '15px' }}>
                                            Choosing a custom PC build in Chennai helps you get a system tailored to your performance needs, with benefits such as:
                                        </p>
                                    </div>

                                    <div className="d-flex flex-column gap-3 mb-4">
                                        {[
                                            "Faster boot times with SSD and NVMe drives.",
                                            "Higher FPS in games with dedicated GPUs.",
                                            "Smoother multitasking with high RAM capacity.",
                                            "Better thermal performance through optimized airflow.",
                                            "Long-term reliability with branded components.",
                                        ].map((benefit, idx) => (
                                            <div key={idx} className="d-flex align-items-center gap-3 p-3 rounded-2" style={{ background: 'rgba(18, 22, 31, 0.6)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                                <CheckCircle2 color="#cbfe1c" size={20} className="flex-shrink-0" />
                                                <span className="text-white" style={{ fontSize: '15px', fontWeight: 500 }}>
                                                    {benefit}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="p-3 rounded-2" style={{ background: 'rgba(203, 254, 28, 0.05)', borderLeft: '4px solid #cbfe1c' }}>
                                        <p className="mb-0 text-white" style={{ fontSize: '14px', lineHeight: '1.7' }}>
                                            Every custom-built system is configured for real-world performance, not just specifications, helping you get the most from your investment.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ================= 7. TOP BRANDS WE USE IN CUSTOM PC BUILDS (H2) ================= */}
                    <section className="cpc-sec cpc-sec-border">
                        <div className="container">
                            <div className="section-title text-center mb-5 mx-auto" style={{ maxWidth: '850px' }}>
                                <div className="cpc-badge">
                                    <ShieldCheck size={14} /> GENUINE HARDWARE
                                </div>
                                <h2 className="tx-title sec_title tz-itm-title tz-itm-anim">
                                    Top Brands We Use in Custom PC Builds
                                </h2>
                                <p className="about-text wow fadeInUp mt-3" data-wow-delay=".3s" style={{ fontSize: '16px' }}>
                                    At IT Fixer, we offer components from trusted global brands to suit different performance needs and budgets.
                                </p>
                            </div>

                            <div className="row g-4 mb-4">
                                {[
                                    { title: "Processors: Intel and AMD", tag: "CPU" },
                                    { title: "Motherboards: ASUS, MSI, and Gigabyte", tag: "Motherboard" },
                                    { title: "RAM: Corsair and G.Skill", tag: "Memory" },
                                    { title: "SSDs: Samsung, WD, and Crucial", tag: "Storage" },
                                    { title: "Graphics Cards: NVIDIA GeForce and AMD Radeon", tag: "Graphics" },
                                    { title: "Cabinets and Cooling: Cooler Master and NZXT", tag: "Cooling & Case" },
                                ].map((item, idx) => (
                                    <div className="col-lg-6" key={idx}>
                                        <div className="cpc-card d-flex align-items-center justify-content-between p-3">
                                            <div className="d-flex align-items-center gap-3">
                                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#cbfe1c' }} />
                                                <h6 className="text-white mb-0" style={{ fontSize: '16px', fontWeight: 600 }}>
                                                    {item.title}
                                                </h6>
                                            </div>
                                            <span style={{ fontSize: '12px', background: 'rgba(255,255,255,0.06)', padding: '4px 10px', borderRadius: '4px', color: '#cbfe1c', fontWeight: 600 }}>
                                                {item.tag}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <p className="text-center text-secondary mb-0" style={{ fontSize: '15px' }}>
                                These component options help us build PCs focused on high performance, durability, and warranty support.
                            </p>
                        </div>
                    </section>

                    {/* ================= 8. WHY IT FIXER IS THE BEST CUSTOM PC BUILDER IN CHENNAI (H2) ================= */}
                    <section className="cpc-sec cpc-sec-border">
                        <div className="container">
                            <div className="section-title text-center mb-5 mx-auto" style={{ maxWidth: '850px' }}>
                                <div className="cpc-badge">
                                    <Star size={14} /> LOCAL LEADERS
                                </div>
                                <h2 className="tx-title sec_title tz-itm-title tz-itm-anim">
                                    Why IT Fixer is the Best Custom PC Builder in Chennai
                                </h2>
                                <p className="about-text wow fadeInUp mt-3" data-wow-delay=".3s" style={{ fontSize: '16px' }}>
                                    IT Fixer makes custom PC building easier with personalized guidance and support tailored to your requirements.
                                </p>
                            </div>

                            <div className="row g-4 mb-4">
                                {[
                                    { title: "Chennai-based expert team", icon: <MapPin /> },
                                    { title: "Fast delivery across Tamil Nadu", icon: <Globe /> },
                                    { title: "Transparent pricing with no hidden costs", icon: <Banknote /> },
                                    { title: "Personalized consultation for your needs", icon: <Users /> },
                                    { title: "On-site and remote support", icon: <HeadphonesIcon /> },
                                    { title: "Trusted by gamers and professionals", icon: <ShieldCheck /> },
                                ].map((item, idx) => (
                                    <div className="col-lg-4 col-md-6" key={idx}>
                                        <div className="cpc-card text-center p-4">
                                            <div className="cpc-icon-box mx-auto">
                                                {item.icon}
                                            </div>
                                            <h4 className="text-white mb-0" style={{ fontSize: '16px', fontWeight: 600 }}>
                                                {item.title}
                                            </h4>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="p-3 rounded-3 text-center" style={{ background: 'rgba(203, 254, 28, 0.05)', border: '1px solid rgba(203, 254, 28, 0.2)' }}>
                                <p className="text-white mb-0" style={{ fontSize: '15px' }}>
                                    We aim to be among the top-rated custom PC builders in Chennai by focusing on quality, performance, and customer satisfaction.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* ================= 9. GAMING PC BUILD IN CHENNAI (H2) ================= */}
                    <section className="cpc-sec cpc-sec-border">
                        <div className="container">
                            <div className="row g-5 align-items-center">
                                <div className="col-lg-6">
                                    <div className="section-title mb-4">
                                        <div className="cpc-badge">
                                            <MonitorPlay size={14} /> GAMING RIGS
                                        </div>
                                        <h2 className="tx-title sec_title tz-itm-title tz-itm-anim">
                                            Gaming PC Build in Chennai
                                        </h2>
                                        <p className="about-text wow fadeInUp mt-3" data-wow-delay=".3s" style={{ fontSize: '16px', lineHeight: '1.8' }}>
                                            Looking for a powerful Custom Gaming PC in Chennai? IT Fixer builds gaming systems tailored to your budget, preferred games, and performance goals.
                                        </p>
                                    </div>

                                    <h4 className="text-white mb-3" style={{ fontSize: '16px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                        Our gaming PC builds support:
                                    </h4>
                                    <div className="d-flex flex-wrap gap-2 mb-4">
                                        {[
                                            "High FPS gaming",
                                            "Streaming setups",
                                            "1080p, 1440p, and 4K gaming",
                                            "eSports performance",
                                            "RGB gaming builds",
                                        ].map((tag, idx) => (
                                            <span key={idx} className="cpc-chip">
                                                <CheckCircle2 size={16} color="#cbfe1c" /> {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <p className="about-text mb-0" style={{ fontSize: '15px', lineHeight: '1.7' }}>
                                        From budget gaming PCs to high-end rigs, we help you choose a setup that delivers the performance you need.
                                    </p>
                                </div>
                                <div className="col-lg-6">
                                    <div className="cpc-card p-4 text-center">
                                        <img
                                            src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&q=80"
                                            alt="Gaming PC Build in Chennai"
                                            className="img-fluid rounded-3 mb-3"
                                            style={{ maxHeight: '340px', objectFit: 'cover', width: '100%' }}
                                        />
                                        <h5 className="text-white mb-2" style={{ fontWeight: 700 }}>HIGH FPS • SMOOTH GAMEPLAY • ULTRA SETTINGS</h5>
                                        <p className="text-secondary small mb-0">Custom RGB, liquid cooling, and top NVIDIA / AMD graphics configured by specialists.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ================= 10. WORKSTATION PC BUILD IN CHENNAI (H2) ================= */}
                    <section className="cpc-sec cpc-sec-border">
                        <div className="container">
                            <div className="row g-5 align-items-center">
                                <div className="col-lg-6 order-lg-2">
                                    <div className="section-title mb-4">
                                        <div className="cpc-badge">
                                            <Cpu size={14} /> PRO WORKSTATIONS
                                        </div>
                                        <h2 className="tx-title sec_title tz-itm-title tz-itm-anim">
                                            Workstation PC Build in Chennai
                                        </h2>
                                        <p className="about-text wow fadeInUp mt-3" data-wow-delay=".3s" style={{ fontSize: '16px', lineHeight: '1.8' }}>
                                            Looking for a reliable Workstation PC Build in Chennai for professional tasks? IT Fixer configures workstations to support demanding workloads, including:
                                        </p>
                                    </div>

                                    <div className="d-flex flex-wrap gap-2 mb-4">
                                        {[
                                            "Video editing",
                                            "3D rendering",
                                            "Architecture and design",
                                            "Software development",
                                            "Business productivity",
                                        ].map((tag, idx) => (
                                            <span key={idx} className="cpc-chip">
                                                <CheckCircle2 size={16} color="#cbfe1c" /> {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <p className="about-text mb-0" style={{ fontSize: '15px', lineHeight: '1.7' }}>
                                        Our workstation PCs combine powerful processors, high RAM capacity, and advanced GPUs to support smooth multitasking and efficient rendering.
                                    </p>
                                </div>
                                <div className="col-lg-6 order-lg-1">
                                    <div className="cpc-card p-4 text-center">
                                        <img
                                            src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&q=80"
                                            alt="Workstation PC Build in Chennai"
                                            className="img-fluid rounded-3 mb-3"
                                            style={{ maxHeight: '340px', objectFit: 'cover', width: '100%' }}
                                        />
                                        <h5 className="text-white mb-2" style={{ fontWeight: 700 }}>MULTITASKING • STABILITY • RAPID RENDERING</h5>
                                        <p className="text-secondary small mb-0">Intel Core i9 / AMD Ryzen 9 / Threadripper paired with high-speed DDR5 RAM.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ================= 11. WHY CHOOSE A CUSTOM PC INSTEAD OF A BRANDED DESKTOP? (H2) ================= */}
                    <section className="cpc-sec cpc-sec-border">
                        <div className="container">
                            <div className="section-title text-center mb-5 mx-auto" style={{ maxWidth: '850px' }}>
                                <div className="cpc-badge">
                                    <BadgeCheck size={14} /> SMARTER CHOICE
                                </div>
                                <h2 className="tx-title sec_title tz-itm-title tz-itm-anim">
                                    Why Choose a Custom PC Instead of a Branded Desktop?
                                </h2>
                                <p className="about-text wow fadeInUp mt-3" data-wow-delay=".3s" style={{ fontSize: '16px' }}>
                                    A custom PC gives you more control over your computer’s performance, components, and future upgrades.
                                </p>
                            </div>

                            <div className="row g-4 mb-4">
                                {[
                                    "Better performance for your budget",
                                    "Fully upgradeable and future-ready",
                                    "No unwanted pre-installed software",
                                    "Component-level warranty",
                                    "Optimized cooling and airflow",
                                    "Full control over configuration",
                                ].map((item, idx) => (
                                    <div className="col-lg-4 col-md-6" key={idx}>
                                        <div className="cpc-card d-flex align-items-center gap-3">
                                            <div className="cpc-step-num">
                                                <Check color="#cbfe1c" size={20} />
                                            </div>
                                            <h4 className="text-white mb-0" style={{ fontSize: '15px', fontWeight: 600 }}>
                                                {item}
                                            </h4>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="p-4 rounded-3 text-center" style={{ background: 'rgba(203, 254, 28, 0.05)', border: '1px solid rgba(203, 254, 28, 0.2)' }}>
                                <p className="text-white mb-0" style={{ fontSize: '15px' }}>
                                    A custom desktop computer in Chennai offers flexibility to choose the right components, meet your needs, and get long-term value from your investment.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* ================= 12. OUR CUSTOM PC BUILD PROCESS (H2) ================= */}
                    <section className="cpc-sec cpc-sec-border">
                        <div className="container">
                            <div className="section-title text-center mb-5 mx-auto" style={{ maxWidth: '850px' }}>
                                <div className="cpc-badge">
                                    <Wrench size={14} /> STEP-BY-STEP
                                </div>
                                <h2 className="tx-title sec_title tz-itm-title tz-itm-anim">
                                    Our Custom PC Build Process
                                </h2>
                            </div>

                            <div className="mx-auto" style={{ maxWidth: '750px' }}>
                                {[
                                    { num: "01", text: "Discuss your requirements and plan your budget." },
                                    { num: "02", text: "Select suitable components and receive a transparent quotation." },
                                    { num: "03", text: "Get professional assembly with proper cable management." },
                                    { num: "04", text: "Complete performance checks and stress testing." },
                                    { num: "05", text: "Choose convenient delivery or store pickup." },
                                ].map((step, idx) => (
                                    <div className="cpc-step-item" key={idx}>
                                        <div className="cpc-step-num">
                                            {step.num}
                                        </div>
                                        <div className="d-flex align-items-center" style={{ minHeight: '44px' }}>
                                            <h4 className="text-white mb-0" style={{ fontSize: '16px', fontWeight: 600 }}>
                                                {step.num} – {step.text}
                                            </h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ================= 13. BEST PLACE FOR CUSTOM PC BUILD IN CHENNAI (H2) ================= */}
                    <section className="cpc-sec cpc-sec-border">
                        <div className="container">
                            <div className="cpc-card p-5 text-center mx-auto" style={{ maxWidth: '900px', background: 'radial-gradient(circle, rgba(203,254,28,0.06) 0%, rgba(18,22,31,0.8) 100%)' }}>
                                <div className="cpc-badge mx-auto">
                                    <Star size={14} /> #1 CHOICE IN CHENNAI
                                </div>
                                <h2 className="tx-title sec_title tz-itm-title tz-itm-anim mb-4">
                                    Best Place for Custom PC Build in Chennai
                                </h2>
                                <p className="about-text mb-3" style={{ fontSize: '16px', lineHeight: '1.8' }}>
                                    IT Fixer provides reliable Custom PC Build in Chennai services, helping you choose a system that fits your needs, preferences, and budget.
                                </p>
                                <p className="about-text mb-4" style={{ fontSize: '16px', lineHeight: '1.8' }}>
                                    Whether you're a gamer, content creator, streamer, or business user, we help you find the right PC setup for your everyday tasks and performance goals.
                                </p>
                                <Link href="/contact" className="vs-btn cart-animation-item">
                                    GET IN TOUCH WITH IT FIXER
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* ================= 14. CUSTOM PC VS BRANDED DESKTOP – WHICH IS BETTER? (H2) ================= */}
                    <section className="cpc-sec cpc-sec-border">
                        <div className="container">
                            <div className="section-title text-center mb-5 mx-auto" style={{ maxWidth: '850px' }}>
                                <div className="cpc-badge">
                                    <HelpCircle size={14} /> COMPARISON TABLE
                                </div>
                                <h2 className="tx-title sec_title tz-itm-title tz-itm-anim">
                                    Custom PC vs Branded Desktop – Which Is Better?
                                </h2>
                            </div>

                            <div className="cpc-table-wrap mb-4">
                                <table className="cpc-table">
                                    <thead>
                                        <tr>
                                            <th className="custom-head">Custom PC Build</th>
                                            <th className="brand-head">Branded Desktop</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { custom: "Better price-to-performance", brand: "Limited configurations" },
                                            { custom: "Fully upgradeable", brand: "Restricted upgrades" },
                                            { custom: "Choose Intel, AMD, or NVIDIA components", brand: "Fixed specifications" },
                                            { custom: "No unwanted pre-installed software", brand: "May include pre-installed software" },
                                            { custom: "Cooling tailored to your setup", brand: "Standard cooling" },
                                            { custom: "Component-level warranty", brand: "Service warranty varies by brand" },
                                        ].map((row, idx) => (
                                            <tr key={idx}>
                                                <td className="custom-col">
                                                    <CheckCircle2 color="#cbfe1c" size={18} className="d-inline me-2" />
                                                    {row.custom}
                                                </td>
                                                <td className="brand-col">
                                                    <XCircle color="#ef4444" size={18} className="d-inline me-2" />
                                                    {row.brand}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="p-4 rounded-3 text-center" style={{ background: 'rgba(203, 254, 28, 0.05)', border: '1px solid rgba(203, 254, 28, 0.2)' }}>
                                <p className="text-white mb-0" style={{ fontSize: '15px' }}>
                                    A custom PC build in Chennai lets you choose your components, balance performance with your budget, and enjoy greater flexibility for future upgrades.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* ================= 15. CUSTOM PC BUILD IN CHENNAI PRICE (H2) ================= */}
                    <section className="cpc-sec cpc-sec-border">
                        <div className="container">
                            <div className="section-title text-center mb-5 mx-auto" style={{ maxWidth: '850px' }}>
                                <div className="cpc-badge">
                                    <Banknote size={14} /> TRANSPARENT RATES
                                </div>
                                <h2 className="tx-title sec_title tz-itm-title tz-itm-anim">
                                    Custom PC Build in Chennai Price
                                </h2>
                                <p className="about-text wow fadeInUp mt-3" data-wow-delay=".3s" style={{ fontSize: '16px' }}>
                                    The custom PC build Chennai price depends on your chosen components, configuration, and performance requirements.
                                </p>
                            </div>

                            <div className="row g-4 justify-content-center mb-4">
                                {[
                                    { title: "Budget Office PC", price: "Starting from ₹25,000" },
                                    { title: "Budget Gaming PC", price: "Starting from ₹40,000" },
                                    { title: "Mid-Range Gaming PC", price: "₹60,000–₹90,000" },
                                    { title: "High-End Gaming PC", price: "₹1,00,000+" },
                                    { title: "Workstation PC", price: "Priced based on requirements" },
                                ].map((item, idx) => (
                                    <div className="col-lg-4 col-md-6" key={idx}>
                                        <div className="cpc-card text-center p-4">
                                            <h4 className="text-white mb-2" style={{ fontSize: '17px', fontWeight: 600, textTransform: 'uppercase' }}>
                                                {item.title}
                                            </h4>
                                            <div style={{ fontSize: '22px', fontWeight: 700, color: '#cbfe1c', margin: '12px 0' }}>
                                                {item.price}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <p className="text-center text-secondary mb-0" style={{ fontSize: '15px' }}>
                                IT Fixer offers transparent pricing with no hidden charges, helping you choose a PC that fits your needs and budget.
                            </p>
                        </div>
                    </section>

                    {/* ================= 16. TRUSTED CUSTOM PC BUILDER IN CHENNAI (H2) ================= */}
                    <section className="cpc-sec cpc-sec-border">
                        <div className="container">
                            <div className="section-title text-center mb-5 mx-auto" style={{ maxWidth: '850px' }}>
                                <div className="cpc-badge">
                                    <ShieldCheck size={14} /> RELIABILITY FIRST
                                </div>
                                <h2 className="tx-title sec_title tz-itm-title tz-itm-anim">
                                    Trusted Custom PC Builder in Chennai
                                </h2>
                                <p className="about-text wow fadeInUp mt-3" data-wow-delay=".3s" style={{ fontSize: '16px' }}>
                                    IT Fixer builds reliable, performance-optimized custom PCs with attention to quality and long-term usability.
                                </p>
                            </div>

                            <div className="row g-4 justify-content-center">
                                {[
                                    "Genuine components with warranty",
                                    "Proper BIOS configuration",
                                    "Stability testing before delivery",
                                    "Secure packaging and delivery",
                                    "Long-term upgrade support",
                                ].map((point, idx) => (
                                    <div className="col-lg-4 col-md-6" key={idx}>
                                        <div className="cpc-card d-flex align-items-center gap-3">
                                            <CheckCircle2 color="#cbfe1c" size={24} className="flex-shrink-0" />
                                            <h4 className="text-white mb-0" style={{ fontSize: '15px', fontWeight: 600 }}>
                                                {point}
                                            </h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ================= 17. GET YOUR CUSTOM PC BUILD IN CHENNAI TODAY (H2) ================= */}
                    <section className="cpc-sec cpc-sec-border">
                        <div className="container">
                            <div className="cpc-card p-5" style={{ background: 'linear-gradient(145deg, rgba(18,22,31,0.9) 0%, rgba(12,18,25,0.95) 100%)' }}>
                                <div className="row g-5 align-items-center">
                                    <div className="col-lg-7">
                                        <div className="cpc-badge">
                                            <Sparkles size={14} /> START BUILDING
                                        </div>
                                        <h2 className="tx-title sec_title tz-itm-title tz-itm-anim mb-3">
                                            Get Your Custom PC Build in Chennai Today
                                        </h2>
                                        <p className="about-text mb-4" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                                            Ready to build your dream PC? IT Fixer helps you choose the right setup for your needs and budget.
                                        </p>

                                        <div className="row g-3 mb-4">
                                            {[
                                                "Free consultation",
                                                "Performance-based recommendations",
                                                "Transparent pricing",
                                                "Genuine branded components",
                                                "Warranty support",
                                                "Tamil Nadu delivery available",
                                                "EMI options available",
                                            ].map((feat, idx) => (
                                                <div className="col-md-6" key={idx}>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <Check color="#cbfe1c" size={18} className="flex-shrink-0" />
                                                        <span className="text-white" style={{ fontSize: '14px', fontWeight: 500 }}>
                                                            {feat}
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <p className="text-white fw-bold mb-4" style={{ fontSize: '15px' }}>
                                            Contact IT Fixer to get started with your Custom PC Build in Chennai.
                                        </p>

                                        <div className="d-flex gap-3 flex-wrap">
                                            <Link href="/contact" className="vs-btn cart-animation-item">
                                                CONTACT IT FIXER
                                            </Link>
                                            <a href="tel:+918585858768" className="vs-btn vs-btn--style3 cart-animation-item">
                                                +91 8585858768
                                            </a>
                                        </div>
                                    </div>

                                    <div className="col-lg-5 text-center">
                                        <img
                                            src="/assets/img/pc-build.webp"
                                            alt="Get Your Custom PC Build in Chennai Today"
                                            className="img-fluid rounded-3"
                                            style={{ maxHeight: '350px' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ================= 18. AFTER-SALES SUPPORT & WARRANTY (H2) ================= */}
                    <section className="cpc-sec cpc-sec-border">
                        <div className="container">
                            <div className="section-title text-center mb-5 mx-auto" style={{ maxWidth: '850px' }}>
                                <div className="cpc-badge">
                                    <HeadphonesIcon size={14} /> DEDICATED CARE
                                </div>
                                <h2 className="tx-title sec_title tz-itm-title tz-itm-anim">
                                    After-Sales Support & Warranty
                                </h2>
                                <p className="about-text wow fadeInUp mt-3" data-wow-delay=".3s" style={{ fontSize: '16px' }}>
                                    At IT Fixer, our support continues beyond delivery to help you keep your PC running reliably.
                                </p>
                            </div>

                            <div className="row g-4 justify-content-center mb-4">
                                {[
                                    { title: "Component-level warranty", icon: <BadgeCheck /> },
                                    { title: "Technical support assistance", icon: <HeadphonesIcon /> },
                                    { title: "Upgrade guidance", icon: <ArrowUpCircle /> },
                                    { title: "Troubleshooting support", icon: <Wrench /> },
                                    { title: "Maintenance recommendations", icon: <CalendarCheck /> },
                                ].map((item, idx) => (
                                    <div className="col-lg-4 col-md-6" key={idx}>
                                        <div className="cpc-card d-flex align-items-center gap-3">
                                            <div className="cpc-icon-box mb-0">
                                                {item.icon}
                                            </div>
                                            <h4 className="text-white mb-0" style={{ fontSize: '15px', fontWeight: 600 }}>
                                                {item.title}
                                            </h4>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <p className="text-center text-secondary mb-0" style={{ fontSize: '15px' }}>
                                We help you maintain your system for smooth, reliable performance for years.
                            </p>
                        </div>
                    </section>

                    {/* ================= 19. CUSTOM PC BUILD SERVICE AREAS (H2) ================= */}
                    <section className="cpc-sec cpc-sec-border">
                        <div className="container text-center">
                            <div className="section-title mb-4 mx-auto" style={{ maxWidth: '850px' }}>
                                <div className="cpc-badge">
                                    <MapPin size={14} /> LOCAL COVERAGE
                                </div>
                                <h2 className="tx-title sec_title tz-itm-title tz-itm-anim">
                                    Custom PC Build Service Areas
                                </h2>
                                <p className="about-text wow fadeInUp mt-3" data-wow-delay=".3s" style={{ fontSize: '16px' }}>
                                    IT Fixer provides custom PC build services across Chennai and other parts of Tamil Nadu, including:
                                </p>
                            </div>

                            <div className="d-flex flex-wrap justify-content-center mb-4">
                                {[
                                    "Chennai",
                                    "Tambaram",
                                    "Velachery",
                                    "OMR (IT Corridor)",
                                    "T Nagar",
                                    "Anna Nagar",
                                    "Porur",
                                    "Avadi",
                                    "All over Tamil Nadu",
                                ].map((area, idx) => (
                                    <span key={idx} className="cpc-chip" style={{ fontSize: '15px' }}>
                                        <MapPin size={16} color="#cbfe1c" /> {area}
                                    </span>
                                ))}
                            </div>

                            <p className="text-white fw-medium mb-0" style={{ fontSize: '15px' }}>
                                Looking for a custom PC build near you in Chennai? Contact IT Fixer to discuss your requirements.
                            </p>
                        </div>
                    </section>

                    {/* ================= 20. WHAT OUR CUSTOMERS SAY (H2) ================= */}
                    <section className="cpc-sec cpc-sec-border">
                        <div className="container">
                            <div className="section-title text-center mb-5 mx-auto" style={{ maxWidth: '850px' }}>
                                <div className="cpc-badge">
                                    <Star size={14} /> REVIEWS & FEEDBACK
                                </div>
                                <h2 className="tx-title sec_title tz-itm-title tz-itm-anim">
                                    What Our Customers Say
                                </h2>
                            </div>

                            <div className="row g-4 justify-content-center">
                                {[
                                    "⭐⭐⭐⭐⭐ “Best custom gaming PC build in Chennai, with neat cable management and great performance.”",
                                    "⭐⭐⭐⭐⭐ “IT Fixer built a powerful video editing workstation that runs smoothly.”",
                                    "⭐⭐⭐⭐⭐ “Affordable pricing, knowledgeable support, and genuine components.”",
                                ].map((review, idx) => (
                                    <div className="col-lg-4 col-md-6" key={idx}>
                                        <div className="cpc-testimonial-card text-center d-flex flex-column justify-content-center">
                                            <p className="text-white mb-0" style={{ fontSize: '16px', lineHeight: '1.8', fontStyle: 'italic' }}>
                                                {review}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ================= 21. FREQUENTLY ASKED QUESTIONS (H2) ================= */}
                    <section className="cpc-sec cpc-sec-border">
                        <div className="container">
                            <div className="section-title text-center mb-5 mx-auto" style={{ maxWidth: '850px' }}>
                                <div className="cpc-badge">
                                    <HelpCircle size={14} /> CLEAR ANSWERS
                                </div>
                                <h2 className="tx-title sec_title tz-itm-title tz-itm-anim">
                                    Frequently Asked Questions – Custom PC Build in Chennai
                                </h2>
                            </div>

                            <div className="mx-auto" style={{ maxWidth: '850px' }}>
                                {[
                                    {
                                        q: "Why choose IT Fixer for custom PC build in Chennai?",
                                        a: "IT Fixer offers expert guidance, genuine components, professional assembly, and local support."
                                    },
                                    {
                                        q: "Can I choose my own components?",
                                        a: "Yes, you can customize every component to suit your needs and budget."
                                    },
                                    {
                                        q: "How long does it take to build a PC?",
                                        a: "Most builds are completed within 1–3 days, depending on component availability and configuration."
                                    },
                                    {
                                        q: "Are custom PCs upgradeable?",
                                        a: "Yes, upgrades are possible depending on component compatibility."
                                    },
                                    {
                                        q: "Do you provide warranty?",
                                        a: "Yes, components are covered by their respective manufacturer warranties."
                                    },
                                    {
                                        q: "Can you build budget gaming PCs?",
                                        a: "Yes, we offer budget gaming PCs configured for your performance needs."
                                    },
                                ].map((faq, idx) => {
                                    const isOpen = openFaq === idx;
                                    return (
                                        <div
                                            className="cpc-faq-card"
                                            key={idx}
                                            onClick={() => toggleFaq(idx)}
                                        >
                                            <div className="cpc-faq-q">
                                                <span>{faq.q}</span>
                                                <ChevronDown
                                                    size={18}
                                                    color="#cbfe1c"
                                                    style={{
                                                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                                        transition: 'transform 0.25s ease',
                                                        flexShrink: 0,
                                                        marginLeft: '12px'
                                                    }}
                                                />
                                            </div>
                                            {isOpen && (
                                                <div className="cpc-faq-a">
                                                    {faq.a}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>

                    {/* ================= TRIGGER / CTA ================= */}
                    <TriggerSection />

                </div>
            </div>
        </>
    );
}
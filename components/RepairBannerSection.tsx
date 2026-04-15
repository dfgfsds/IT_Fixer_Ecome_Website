'use client';

import Link from 'next/link';

export default function RepairBannerSection() {
    return (
        <>
            <style>{`
                .repair-banner-section {
                    position: relative;
                    background: linear-gradient(135deg, #0B0E13 0%, #131720 50%, #0f1219 100%);
                    padding: 80px 0;
                    overflow: hidden;
                }

                /* Animated grid background */
                .repair-banner-section::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background-image:
                        linear-gradient(rgba(166, 215, 25, 0.04) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(166, 215, 25, 0.04) 1px, transparent 1px);
                    background-size: 48px 48px;
                    pointer-events: none;
                }

                /* Glowing radial accent */
                .repair-banner-section::after {
                    content: '';
                    position: absolute;
                    top: -100px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 700px;
                    height: 400px;
                    background: radial-gradient(ellipse at center, rgba(166, 215, 25, 0.08) 0%, transparent 70%);
                    pointer-events: none;
                }

                .repair-banner-inner {
                    position: relative;
                    z-index: 2;
                    border: 1px solid rgba(166, 215, 25, 0.15);
                    border-radius: 20px;
                    background: rgba(255, 255, 255, 0.02);
                    backdrop-filter: blur(8px);
                    padding: 60px 48px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 32px;
                    flex-wrap: wrap;
                    overflow: hidden;
                }

                /* Corner accent lines */
                .repair-banner-inner::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background: linear-gradient(90deg, transparent, #a6d719, #cbfe1c, transparent);
                }

                .repair-banner-inner::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(166, 215, 25, 0.3), transparent);
                }

                /* Floating circuit dots */
                .repair-circuit-dot {
                    position: absolute;
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: rgba(166, 215, 25, 0.5);
                    animation: dotPulse 3s ease-in-out infinite;
                }

                .repair-circuit-dot:nth-child(1) { top: 20%; left: 5%; animation-delay: 0s; }
                .repair-circuit-dot:nth-child(2) { top: 70%; left: 12%; animation-delay: 0.8s; }
                .repair-circuit-dot:nth-child(3) { top: 30%; right: 8%; animation-delay: 1.6s; }
                .repair-circuit-dot:nth-child(4) { top: 80%; right: 15%; animation-delay: 0.4s; }

                @keyframes dotPulse {
                    0%, 100% { opacity: 0.3; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.5); }
                }

                /* Icon wrench */
                .repair-icon-wrap {
                    width: 80px;
                    height: 80px;
                    min-width: 80px;
                    border-radius: 50%;
                    background: rgba(166, 215, 25, 0.08);
                    border: 2px solid rgba(166, 215, 25, 0.3);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    animation: iconFloat 4s ease-in-out infinite;
                    flex-shrink: 0;
                }

                @keyframes iconFloat {
                    0%, 100% { transform: translateY(0px); box-shadow: 0 0 0 0 rgba(166, 215, 25, 0.15); }
                    50% { transform: translateY(-8px); box-shadow: 0 12px 30px rgba(166, 215, 25, 0.2); }
                }

                .repair-icon-wrap i {
                    font-size: 34px;
                    color: #a6d719;
                }

                /* Text block */
                .repair-text-block {
                    flex: 1;
                    min-width: 260px;
                }

                .repair-tag {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 12px;
                    font-weight: 700;
                    letter-spacing: 3px;
                    color: #a6d719;
                    text-transform: uppercase;
                    margin-bottom: 14px;
                }

                .repair-tag::before {
                    content: '';
                    display: inline-block;
                    width: 28px;
                    height: 2px;
                    background: #a6d719;
                    border-radius: 2px;
                }

                .repair-heading {
                    font-size: clamp(24px, 3.5vw, 40px);
                    font-weight: 800;
                    color: #ffffff;
                    line-height: 1.2;
                    margin: 0 0 14px;
                    text-transform: uppercase;
                    letter-spacing: -0.5px;
                }

                .repair-heading span {
                    background: linear-gradient(90deg, #a6d719, #cbfe1c);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .repair-subtext {
                    font-size: 16px;
                    color: #8899b4;
                    margin: 0;
                    line-height: 1.7;
                    max-width: 520px;
                }

                /* CTA buttons */
                .repair-cta-group {
                    display: flex;
                    gap: 16px;
                    flex-wrap: wrap;
                    align-items: center;
                    flex-shrink: 0;
                }

                .repair-btn-primary {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    background: #a6d719;
                    color: #0B0E13;
                    font-size: 14px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    padding: 16px 32px;
                    border-radius: 4px;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    white-space: nowrap;
                    position: relative;
                    overflow: hidden;
                }

                .repair-btn-primary::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
                    transition: left 0.5s ease;
                }

                .repair-btn-primary:hover::before {
                    left: 100%;
                }

                .repair-btn-primary:hover {
                    background: #cbfe1c;
                    color: #0B0E13;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 24px rgba(166, 215, 25, 0.35);
                    text-decoration: none;
                }

                .repair-btn-secondary {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    background: transparent;
                    color: #ffffff;
                    font-size: 14px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    padding: 15px 30px;
                    border-radius: 4px;
                    text-decoration: none;
                    border: 1px solid rgba(255,255,255,0.2);
                    transition: all 0.3s ease;
                    white-space: nowrap;
                }

                .repair-btn-secondary:hover {
                    border-color: #a6d719;
                    color: #a6d719;
                    text-decoration: none;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 24px rgba(166, 215, 25, 0.1);
                }

                /* Stats row */
                .repair-stats {
                    display: flex;
                    gap: 36px;
                    margin-top: 28px;
                    flex-wrap: wrap;
                }

                .repair-stat-item {
                    text-align: left;
                }

                .repair-stat-num {
                    font-size: 26px;
                    font-weight: 800;
                    color: #a6d719;
                    line-height: 1;
                    margin-bottom: 4px;
                }

                .repair-stat-label {
                    font-size: 12px;
                    color: #556278;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    font-weight: 500;
                }

                /* Mobile */
                @media (max-width: 768px) {
                    .repair-banner-section {
                        padding: 50px 0;
                    }

                    .repair-banner-inner {
                        padding: 36px 24px;
                        flex-direction: column;
                        text-align: center;
                    }

                    .repair-icon-wrap {
                        margin: 0 auto;
                    }

                    .repair-tag {
                        justify-content: center;
                    }

                    .repair-tag::before {
                        display: none;
                    }

                    .repair-subtext {
                        max-width: 100%;
                    }

                    .repair-cta-group {
                        justify-content: center;
                    }

                    .repair-stats {
                        justify-content: center;
                    }

                    .repair-stat-item {
                        text-align: center;
                    }
                }

                @media (max-width: 480px) {
                    .repair-btn-primary,
                    .repair-btn-secondary {
                        width: 100%;
                        justify-content: center;
                    }

                    .repair-cta-group {
                        width: 100%;
                        flex-direction: column;
                    }

                    .repair-stats {
                        gap: 20px;
                    }
                }
            `}</style>

            <section className="repair-banner-section">
                {/* Floating circuit dots */}
                <div className="repair-circuit-dot"></div>
                <div className="repair-circuit-dot"></div>
                <div className="repair-circuit-dot"></div>
                <div className="repair-circuit-dot"></div>

                <div className="container">
                    <div className="repair-banner-inner wow fadeInUp" data-wow-delay=".3s">

                        {/* Icon */}
                        <div className="repair-icon-wrap">
                            <i className="fa-solid fa-screwdriver-wrench"></i>
                        </div>

                        {/* Text Content */}
                        <div className="repair-text-block">
                            <div className="repair-tag">Expert Repair Service</div>
                            <h2 className="repair-heading">
                                Having trouble with <span>this product?</span>
                            </h2>
                            <p className="repair-subtext">
                                Our experts can fix it for you — fast, reliable, and at the best price. Get your device back to peak performance today.
                            </p>

                            {/* Stats */}
                            <div className="repair-stats">
                                <div className="repair-stat-item">
                                    <div className="repair-stat-num">500+</div>
                                    <div className="repair-stat-label">Devices Fixed</div>
                                </div>
                                <div className="repair-stat-item">
                                    <div className="repair-stat-num">24hr</div>
                                    <div className="repair-stat-label">Turnaround</div>
                                </div>
                                <div className="repair-stat-item">
                                    <div className="repair-stat-num">100%</div>
                                    <div className="repair-stat-label">Satisfaction</div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="repair-cta-group">
                            <a
                                href="tel:+918585858768"
                                className="repair-btn-primary"
                                aria-label="Call IT Fixer for repair service"
                            >
                                <i className="fa-solid fa-phone"></i>
                                Call Us Now
                            </a>
                            <a
                                href="https://wa.me/918585858768?text=Hi%2C+I%27m+having+trouble+with+a+product+and+need+expert+repair+help."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="repair-btn-secondary"
                                aria-label="WhatsApp IT Fixer for repair service"
                            >
                                <i className="fa-brands fa-whatsapp" style={{ fontSize: '18px', color: '#25D366' }}></i>
                                WhatsApp Us
                            </a>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

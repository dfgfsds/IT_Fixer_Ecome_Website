'use client';

import React from 'react';

const StickyRepairBar: React.FC = () => {
    return (
        <>
            <style>{`
                /* ===== VENOM-THEMED STICKY REPAIR BAR ===== */
                .sticky-repair-bar {
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    background: linear-gradient(180deg, rgba(8, 10, 15, 0.98) 0%, rgba(5, 7, 12, 0.99) 100%);
                    backdrop-filter: blur(24px) saturate(1.6);
                    -webkit-backdrop-filter: blur(24px) saturate(1.6);
                    border-top: 1.5px solid rgba(166, 215, 25, 0.2);
                    z-index: 9998;
                    padding: 0;
                    box-shadow:
                        0 -8px 40px rgba(0, 0, 0, 0.7),
                        0 -2px 20px rgba(166, 215, 25, 0.05),
                        inset 0 1px 0 rgba(166, 215, 25, 0.08);
                }

                /* Top glow line - animated neon venom streak */
                .sticky-repair-bar::before {
                    content: '';
                    position: absolute;
                    top: -1px;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background: linear-gradient(90deg,
                        transparent 0%,
                        rgba(166, 215, 25, 0.3) 15%,
                        #a6d719 35%,
                        #cbfe1c 50%,
                        #a6d719 65%,
                        rgba(166, 215, 25, 0.3) 85%,
                        transparent 100%
                    );
                    animation: srbGlowSlide 3s ease-in-out infinite;
                }

                /* Subtle ambient glow behind the bar */
                .sticky-repair-bar::after {
                    content: '';
                    position: absolute;
                    top: -30px;
                    left: 10%;
                    width: 80%;
                    height: 30px;
                    background: radial-gradient(ellipse at center, rgba(166, 215, 25, 0.06) 0%, transparent 70%);
                    pointer-events: none;
                }

                @keyframes srbGlowSlide {
                    0% { opacity: 0.4; filter: brightness(0.8); }
                    50% { opacity: 1; filter: brightness(1.2); }
                    100% { opacity: 0.4; filter: brightness(0.8); }
                }

                @keyframes srbIconPulse {
                    0%, 100% {
                        box-shadow: 0 0 0 0 rgba(166, 215, 25, 0.15);
                        border-color: rgba(166, 215, 25, 0.25);
                    }
                    50% {
                        box-shadow: 0 0 16px 5px rgba(166, 215, 25, 0.18);
                        border-color: rgba(166, 215, 25, 0.5);
                    }
                }

                @keyframes srbBtnShimmer {
                    0% { left: -100%; }
                    100% { left: 100%; }
                }

                /* ===== DESKTOP / DEFAULT LAYOUT ===== */
                .srb-inner {
                    max-width: 1320px;
                    margin: 0 auto;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 20px;
                    padding: 14px 28px;
                }

                .srb-left {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    flex: 1;
                    min-width: 0;
                }

                /* Wrench icon container - venom glow */
                .srb-icon {
                    width: 44px;
                    height: 44px;
                    min-width: 44px;
                    border-radius: 12px;
                 
                    border: 1px solid rgba(166, 215, 25, 0.25);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    animation: srbIconPulse 2.5s ease-in-out infinite;
                    transition: all 0.3s ease;
                }

                //    background: linear-gradient(135deg, rgba(166, 215, 25, 0.12) 0%, rgba(166, 215, 25, 0.05) 100%);

                .srb-icon i {
                    font-size: 18px;
                    color: #a6d719;
                    filter: drop-shadow(0 0 4px rgba(166, 215, 25, 0.3));
                }

                .srb-text {
                    color: #b0b8c7;
                    font-size: 15px;
                    font-weight: 400;
                    margin: 0;
                    line-height: 1.45;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .srb-text strong {
                    color: #eaf0f8;
                    font-weight: 600;
                }

                .srb-text .srb-highlight {
                    color: #a6d719;
                    font-weight: 700;
                    text-shadow: 0 0 8px rgba(166, 215, 25, 0.25);
                }

                .srb-right {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    flex-shrink: 0;
                }

                /* CTA button - venom neon */
                .srb-book-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    background: linear-gradient(135deg, #a6d719 0%, #8fbf10 100%);
                    color: #080a0f;
                    font-size: 13px;
                    font-weight: 800;
                    padding: 11px 28px;
                    border-radius: 8px;
                    text-decoration: none;
                    text-transform: uppercase;
                    letter-spacing: 1.2px;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                    overflow: hidden;
                    white-space: nowrap;
                    box-shadow:
                        0 2px 8px rgba(166, 215, 25, 0.25),
                        inset 0 1px 0 rgba(255, 255, 255, 0.15);
                }

                .srb-book-btn::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 60%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent);
                    animation: srbBtnShimmer 3s ease-in-out infinite;
                }

                .srb-book-btn:hover {
                    background: linear-gradient(135deg, #cbfe1c 0%, #a6d719 100%);
                    color: #080a0f;
                    text-decoration: none;
                    transform: translateY(-2px) scale(1.02);
                    box-shadow:
                        0 6px 24px rgba(166, 215, 25, 0.45),
                        0 2px 8px rgba(166, 215, 25, 0.3);
                }

                .srb-book-btn:active {
                    transform: translateY(0) scale(0.98);
                }

                /* WhatsApp icon in button */
                .srb-book-btn .srb-btn-icon {
                    font-size: 14px;
                    filter: none;
                }

                /* =========================================
                   MOBILE RESPONSIVE — VENOM TREATMENT
                   ========================================= */

                /* Tablets & small laptops */
                @media (max-width: 900px) {
                    .srb-inner {
                        padding: 12px 20px;
                        gap: 16px;
                    }

                    .srb-text {
                        font-size: 14px;
                    }

                    .srb-book-btn {
                        padding: 10px 22px;
                        font-size: 12px;
                        letter-spacing: 1px;
                    }
                }

                /* Mobile landscape / small tablets */
                @media (max-width: 768px) {
                    .srb-inner {
                        flex-direction: column;
                        align-items: stretch;
                        padding: 14px 16px 16px;
                        gap: 10px;
                    }

                    .srb-left {
                        gap: 10px;
                        justify-content: center;
                    }

                    .srb-icon {
                        display: none;
                    }

                    .srb-text {
                        font-size: 13px;
                        white-space: normal;
                        text-align: center;
                        line-height: 1.4;
                        overflow: visible;
                        text-overflow: unset;
                    }

                    .srb-right {
                        width: 100%;
                        justify-content: center;
                    }

                    .srb-book-btn {
                        width: auto;
                        background: none !important;
                        box-shadow: none !important;
                        padding: 4px 0;
                        padding-bottom:0px
                        font-size: 14px;
                        font-weight: 700;
                        color: #a6d719 !important;
                        letter-spacing: 1.2px;
                        text-decoration: none;
                        border-radius: 0;
                        position: relative;
                        overflow: visible;
                        display: inline-flex;
                        justify-content: center;
                    }

                    /* Animated underline */
                    .srb-book-btn::after {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 2px;
                        background: linear-gradient(90deg, #a6d719, #cbfe1c, #a6d719);
                        background-size: 200% 100%;
                        animation: srbUnderlineGlow 2s ease-in-out infinite;
                        border-radius: 2px;
                        box-shadow: 0 0 8px rgba(166, 215, 25, 0.4);
                    }

                    @keyframes srbUnderlineGlow {
                        0% { background-position: 0% 50%; opacity: 0.7; }
                        50% { background-position: 100% 50%; opacity: 1; }
                        100% { background-position: 0% 50%; opacity: 0.7; }
                    }

                    .srb-book-btn:hover {
                        background: none !important;
                        box-shadow: none !important;
                        transform: none;
                        color: #cbfe1c !important;
                    }
                }

                /* Mobile portrait */
                @media (max-width: 576px) {
                    .sticky-repair-bar {
                        border-top-width: 1px;
                    }

                    .srb-inner {
                        padding: 12px 14px 14px;
                        gap: 8px;
                    }

                    .srb-left {
                        flex-direction: column;
                        gap: 6px;
                    }

                    .srb-icon {
                        width: 32px;
                        height: 32px;
                        min-width: 32px;
                        border-radius: 8px;
                    }

                    .srb-icon i {
                        font-size: 13px;
                    }

                    .srb-text {
                        font-size: 12px;
                        line-height: 1.35;
                    }

                    .srb-text strong {
                        display: block;
                        margin-bottom: 1px;
                    }

                    .srb-book-btn {
                        padding: 11px 16px;
                        font-size: 12px;
                        letter-spacing: 1.2px;
                        border-radius: 7px;
                    }
                }

                /* Extra small phones */
                @media (max-width: 380px) {
                    .srb-inner {
                        padding: 10px 10px 12px;
                        gap: 6px;
                    }

                    .srb-icon {
                        display: none;
                    }

                    .srb-text {
                        font-size: 11.5px;
                    }

                    .srb-book-btn {
                        padding: 10px 12px;
                        padding-bottom: 0px !important;
                        font-size: 11px;
                        letter-spacing: 1px;
                    }
                }
            `}</style>

            <div className="sticky-repair-bar">
                <div className="srb-inner">
                    <div className="srb-left">
                        <div className="srb-icon">
                            <i className="fa-solid fa-screwdriver-wrench"></i>
                        </div>
                        <p className="srb-text">
                            <strong>Having trouble with your PC or laptop?</strong>{' '}
                            <span className="srb-highlight">Our experts</span> will fix it quickly.
                        </p>
                    </div>

                    <div className="srb-right">
                        <a
                            href="https://www.itfixer199.com/"
                            className="srb-book-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            Book Repair Now
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StickyRepairBar;


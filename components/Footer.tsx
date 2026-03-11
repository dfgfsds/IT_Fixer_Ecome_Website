"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname();
    return (
        <footer className="gt-footer-section bg-cover" style={{ backgroundImage: "url('/assets/img/home-2/footer/footer-bg.jpg')" }}>
            <div className="footer-main-bg">
                <div className="left-shape float-bob-y">
                    <img src="/assets/img/home-2/footer/left-shape.png" alt="img" />
                </div>
                <div className="right-shape float-bob-y">
                    <img src="/assets/img/home-2/footer/right-shape.png" alt="img" />
                </div>
                <div className="container">
                    <div className="gt-footer-widget-wrapper">
                        <div className="row justify-content-between">
                            <div className="col-xl-4 col-lg-6 col-md-12 wow fadeInUp" data-wow-delay=".2s">
                                <div className="gt-footer-widget-items">
                                    <div className="gt-widget-head">
                                        <div className="logo">
                                            <Link href="/" className="header-logo">
                                                <img src="/assets/img/logo.png" alt="logo-img" style={{ width: "170px", height: "50px" }} />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="gt-footer-content">
                                        <p>
                                            ITFixer offers premium Gaming and Editing PCs & Laptops, engineered for extreme performance, seamless multitasking, and professional-grade results — available at competitive prices.
                                        </p>
                                        <div className="gt-social-icon d-flex align-items-center">
                                            {/* <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a> */}
                                            <a href="https://www.instagram.com/it__fixer/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                                            <a href="https://www.youtube.com/channel/UC5nBPrnHiRY8WOxsErazkdw" target="_blank"><i className="fa-brands fa-youtube"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".4s">
                                <div className="gt-footer-widget-items">
                                    <div className="gt-widget-head">
                                        <h5>Quick Links</h5>
                                    </div>
                                    <ul className="gt-list-area">
                                        <li>
                                            <Link href="/about" style={pathname === "/about" ? { color: "#CBFE1C" } : {}}>
                                                About Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/categories" style={pathname === "/categories" ? { color: "#CBFE1C" } : {}}>
                                                Categories
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/shop" style={pathname === "/shop" ? { color: "#CBFE1C" } : {}}>
                                                Shop
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/blog" style={pathname === "/blog" ? { color: "#CBFE1C" } : {}}>
                                                Blog
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact" style={pathname === "/contact" ? { color: "#CBFE1C" } : {}}>
                                                Contact Us
                                            </Link>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 ps-lg-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".6s">
                                <div className="gt-footer-widget-items">
                                    <div className="gt-widget-head">
                                        <h5>Information</h5>
                                    </div>
                                    <ul className="gt-list-area">
                                        <li>
                                            <Link href="/terms-and-conditions" style={pathname === "/terms-and-conditions" ? { color: "#CBFE1C" } : {}}>
                                                Terms & Conditions
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/privacy-policy" style={pathname === "/privacy-policy" ? { color: "#CBFE1C" } : {}}>
                                                Privacy Policy
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/refund-policy" style={pathname === "/refund-policy" ? { color: "#CBFE1C" } : {}}>
                                                Refund Policy
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/shipping-policy" style={pathname === "/shipping-policy" ? { color: "#CBFE1C" } : {}}>
                                                Shipping Policy
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".8s">
                                <div className="gt-footer-widget-items">
                                    <div className="gt-widget-head">
                                        <h5>Contact Details</h5>
                                    </div>
                                    <ul className="gt-list-area" style={{ marginTop: "20px" }}>
                                        <li style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px" }}>
                                            <div style={{
                                                width: "38px", height: "38px", minWidth: "38px", borderRadius: "50%", backgroundColor: "#2a2d3a", display: "flex", alignItems: "center", justifyContent: "center", color: "#a6d719", fontSize: "14px"
                                            }}>
                                                <i className="fa-solid fa-phone"></i>
                                            </div>
                                            <a href="tel:+918585858768" style={{ fontSize: "15px", fontWeight: 500, textTransform: "capitalize" }}>+91 8585858768</a>
                                        </li>
                                        <li style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px" }}>
                                            <div style={{
                                                width: "38px", height: "38px", minWidth: "38px", borderRadius: "50%", backgroundColor: "#2a2d3a", display: "flex", alignItems: "center", justifyContent: "center", color: "#a6d719", fontSize: "14px"
                                            }}>
                                                <i className="fa-solid fa-envelope"></i>
                                            </div>
                                            <a href="mailto:info@itfixer.in" style={{ fontSize: "15px", fontWeight: 500, textTransform: "lowercase" }}>info@itfixer.in</a>
                                        </li>
                                        <li style={{ display: "flex", alignItems: "start", gap: "15px" }}>
                                            <div style={{
                                                width: "38px", height: "38px", minWidth: "38px", borderRadius: "50%", backgroundColor: "#2a2d3a", display: "flex", alignItems: "center", justifyContent: "center", color: "#a6d719", fontSize: "14px", marginTop: "3px"
                                            }}>
                                                <i className="fa-solid fa-location-dot"></i>
                                            </div>
                                            <a
                                                href="https://www.google.com/maps/search/?api=1&query=Chennai,+Tamil+Nadu,+India"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ fontSize: "15px", fontWeight: 500, lineHeight: "1.6" }}
                                            >
                                                New No 29, Old No 31 & 32, Anjugam Nagar, 1st Street, Jafferkhanpet (Opp to Kasi Theatre), Ashok Nagar, Chennai 600083
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* 
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".8s">
                                <div className="gt-footer-widget-items">
                                    <div className="gt-widget-head">
                                        <h5>download our games</h5>
                                    </div>
                                    <div className="gt-footer-app">
                                        <div className="app-image">
                                            <img src="/assets/img/home-2/footer/app-1.jpg" alt="img" />
                                        </div>
                                        <div className="app-image">
                                            <img src="/assets/img/home-2/footer/app-2.jpg" alt="img" />
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            */}
                        </div>
                    </div >
                    <div className="footer-bottom wow fadeInUp" data-wow-delay=".3s">
                        <div className="footer-wrapper">
                            <p> © 2026 FTDS. All rights reserved.</p>
                            {/* <ul className="gt-footer-list wow fadeInUp" data-wow-delay=".3s">
                                <li>
                                    <a href="contact.html">Cookies</a>
                                </li>
                                <li>
                                    <a href="contact.html">Privacy</a>
                                </li>
                                <li>
                                    <a href="contact.html">Terms</a>
                                </li>
                            </ul> */}
                        </div>
                    </div>
                </div >
            </div >
        </footer >
    )
}

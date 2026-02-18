export default function Footer() {
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
                                            <a href="/" className="header-logo">
                                                <img src="/assets/img/logo.png" alt="logo-img" style={{ width: "170px", height: "50px" }} />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="gt-footer-content">
                                        <p>
                                            A game studio crafting exciting, high-quality video games, prioritizing immersive gameplay and mechanics. Hac habitasse platea
                                        </p>
                                        <div className="gt-social-icon d-flex align-items-center">
                                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
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
                                            <a href="/about">
                                                About Us
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/shop">
                                                Shop
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/blog">
                                                Blog
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/contact">
                                                Contact Us
                                            </a>
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
                                            <a href="/policy/terms-and-conditions">
                                                Terms & Conditions
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/policy/privacy-policy">
                                                Privacy Policy
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/policy/refund-policy">
                                                Refund Policy
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/policy/shipping-policy">
                                                Shipping Policy
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
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
                        </div>
                    </div>
                    <div className="footer-bottom wow fadeInUp" data-wow-delay=".3s">
                        <div className="footer-wrapper">
                            <p>© 2025 Pubzi . All Rights Reserved.</p>
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
                </div>
            </div>
        </footer>
    )
}
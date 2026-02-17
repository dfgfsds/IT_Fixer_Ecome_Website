export default function FooterPage() {
    return (
        <footer className="gt-footer-section bg-cover" style={{ backgroundImage: "url('assets/img/home-2/footer/footer-bg.jpg')" }}>
            <div className="footer-main-bg">
                <div className="left-shape float-bob-y">
                    <img src="assets/img/home-2/footer/left-shape.png" alt="img" />
                </div>
                <div className="right-shape float-bob-y">
                    <img src="assets/img/home-2/footer/right-shape.png" alt="img" />
                </div>
                <div className="container">
                    <div className="gt-footer-widget-wrapper">
                        <div className="row justify-content-between">
                            <div className="col-xl-4 col-lg-6 col-md-12 wow fadeInUp" data-wow-delay=".2s">
                                <div className="gt-footer-widget-items">
                                    <div className="gt-widget-head">
                                        <a href="index.html" className="gt-footer-logo">
                                            <img src="assets/img/logo/white-logo-2.svg" alt="img" />
                                        </a>
                                    </div>
                                    <div className="gt-footer-content">
                                        <p>
                                            A game studio crafting exciting, high-quality video games, prioritizing immersive gameplay and mechanics. Hac habitasse platea
                                        </p>
                                        <div className="gt-social-icon d-flex align-items-center">
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".4s">
                                <div className="gt-footer-widget-items">
                                    <div className="gt-widget-head">
                                        <h5>Our Studio</h5>
                                    </div>
                                    <ul className="gt-list-area">
                                        <li>
                                            <a href="about.html">
                                                About Us
                                            </a>
                                        </li>
                                        <li>
                                            <a href="team.html">
                                                our team
                                            </a>
                                        </li>
                                        <li>
                                            <a href="service-details.html">
                                                Advertising
                                            </a>
                                        </li>
                                        <li>
                                            <a href="service-details.html">
                                                Legal Notices
                                            </a>
                                        </li>
                                        <li>
                                            <a href="service-details.html">
                                                Partnership
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 ps-lg-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".6s">
                                <div className="gt-footer-widget-items">
                                    <div className="gt-widget-head">
                                        <h5>Utility Pages</h5>
                                    </div>
                                    <ul className="gt-list-area">
                                        <li>
                                            <a href="service-details.html">
                                                Terms of Service
                                            </a>
                                        </li>
                                        <li>
                                            <a href="contact.html">
                                                Privacy/Terms
                                            </a>
                                        </li>
                                        <li>
                                            <a href="service-details.html">
                                                Gift Cards
                                            </a>
                                        </li>
                                        <li>
                                            <a href="game-details.html">
                                                Game Reviews
                                            </a>
                                        </li>
                                        <li>
                                            <a href="contact.html">
                                                Subscriptions
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
                                            <img src="assets/img/home-2/footer/app-1.jpg" alt="img" />
                                        </div>
                                        <div className="app-image">
                                            <img src="assets/img/home-2/footer/app-2.jpg" alt="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom wow fadeInUp" data-wow-delay=".3s">
                        <div className="footer-wrapper">
                            <p>© 2025 Pubzi . All Rights Reserved.</p>
                            <ul className="gt-footer-list wow fadeInUp" data-wow-delay=".3s">
                                <li>
                                    <a href="contact.html">Cookies</a>
                                </li>
                                <li>
                                    <a href="contact.html">Privacy</a>
                                </li>
                                <li>
                                    <a href="contact.html">Terms</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
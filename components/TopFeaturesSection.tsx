export default function TopFeaturesSection() {
    return (
        <section className="gt-top-feature-section fix">
            <div className="container">
                <div className="gt-top-feature-wrapper">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-6">
                            <div className="gt-top-feature-image">
                                <img src="/assets/img/home-3/top-feature.png" alt="img" />
                                <div className="gt-bg-shape">
                                    <img src="/assets/img/home-3/ellipse-bg.png" alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="gt-top-feature-content">
                                <div className="section-title mb-0">
                                    <h6 className="wow fadeInUp">top features</h6>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        Powerful Features, Perfect Gameplay
                                    </h2>
                                </div>
                                <p className="gt-feature-text">
                                    We are specialized in developing out-of-the-box solutions using emerging technologies
                                </p>
                                <ul className="gt-feature-icon">
                                    <li>
                                        <div className="gt-icon">
                                            <img src="/assets/img/home-3/icon/12.svg" alt="img" />
                                        </div>
                                        <div className="gt-content">
                                            <h3>Graphics & Performance</h3>
                                            <p>
                                                We’re passionate about what we do and always seek new opportunities. We are also flexible and proactive in business.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="gt-icon">
                                            <img src="/assets/img/home-3/icon/13.svg" alt="img" />
                                        </div>
                                        <div className="gt-content">
                                            <h3>Audio & Sound Design</h3>
                                            <p>
                                                We’re passionate about what we do and always seek new opportunities. We are also flexible and proactive in business.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="gt-icon">
                                            <img src="/assets/img/home-3/icon/14.svg" alt="img" />
                                        </div>
                                        <div className="gt-content">
                                            <h3>Story & World-Building</h3>
                                            <p>
                                                We’re passionate about what we do and always seek new opportunities. We are also flexible and proactive in business.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

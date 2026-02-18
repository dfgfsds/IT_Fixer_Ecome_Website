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
                                        Powerful Performance. Perfect Gameplay.
                                    </h2>
                                </div>
                                <p className="gt-feature-text">
                                    At IT Fixer, we build high-performance Gaming PCs and Laptops designed for speed, power, and ultimate reliability.
                                </p>
                                <ul className="gt-feature-icon">
                                    <li>
                                        <div className="gt-icon">
                                            <img src="/assets/img/home-3/icon/12.svg" alt="img" />
                                        </div>
                                        <div className="gt-content">
                                            <h3>Graphics & Performance</h3>
                                            <p>
                                                Dominate every match with next-gen RTX graphics, powerful Intel/Ryzen processors, and advanced cooling for smooth, high-FPS, lag-free gaming.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="gt-icon">
                                            <img src="/assets/img/home-3/icon/13.svg" alt="img" />
                                        </div>
                                        <div className="gt-content">
                                            <h3>Speed & Storage</h3>
                                            <p>
                                                Ultra-fast NVMe SSD storage and expandable high-speed RAM ensure faster boot times, quick game loading, seamless multitasking, and smooth streaming performance.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="gt-icon">
                                            <img src="/assets/img/home-3/icon/14.svg" alt="img" />
                                        </div>
                                        <div className="gt-content">
                                            <h3> Custom Build & Reliability</h3>
                                            <p>
                                                Custom-built systems with top-tier components ensure maximum performance and durability, delivering unmatched gaming experience.
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

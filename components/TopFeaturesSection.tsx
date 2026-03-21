import { Monitor, Video, Activity, Scale } from "lucide-react";

export default function TopFeaturesSection() {
    return (
        <section className="gt-top-feature-section fix mb-4">
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
                                    <h6 className="wow fadeInUp text-uppercase">Experience Zone</h6>
                                    <h2 className="wow fadeInUp text-uppercase" data-wow-delay=".3s">
                                        Experience the Future of Gaming & Editing
                                    </h2>
                                </div>
                                <p className="gt-feature-text">
                                    The IT Fixer showroom is more than just a retail space — it is a fully interactive experience zone where customers can explore and test high-performance systems in a real-world environment.
                                </p>
                                <p className="gt-feature-text mt-3 mb-4">
                                    At IT Fixer, customers can experience:
                                </p>
                                <div className="gt-features-grid mt-4">
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="feature-card" style={{ padding: '24px', background: 'transparent', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '0px', height: '100%', display: 'flex', flexDirection: 'column', gap: '15px', transition: 'all 0.3s ease' }}>
                                                <div className="icon-box" style={{ width: '48px', height: '48px', background: '#1C1D20', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Monitor size={24} color="#cbfe1c" />
                                                </div>
                                                <h3 className="text-uppercase" style={{ fontSize: '16px', margin: 0, fontWeight: '700', letterSpacing: '0.5px', lineHeight: '1.4', color: '#fff' }}>Live high-end gaming PC setups</h3>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="feature-card" style={{ padding: '24px', background: 'transparent', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '0px', height: '100%', display: 'flex', flexDirection: 'column', gap: '15px', transition: 'all 0.3s ease' }}>
                                                <div className="icon-box" style={{ width: '48px', height: '48px', background: '#1C1D20', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Video size={24} color="#cbfe1c" />
                                                </div>
                                                <h3 className="text-uppercase" style={{ fontSize: '16px', margin: 0, fontWeight: '700', letterSpacing: '0.5px', lineHeight: '1.4', color: '#fff' }}>High-performance editing PC demonstrations</h3>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="feature-card" style={{ padding: '24px', background: 'transparent', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '0px', height: '100%', display: 'flex', flexDirection: 'column', gap: '15px', transition: 'all 0.3s ease' }}>
                                                <div className="icon-box" style={{ width: '48px', height: '48px', background: '#1C1D20', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Activity size={24} color="#cbfe1c" />
                                                </div>
                                                <h3 className="text-uppercase" style={{ fontSize: '16px', margin: 0, fontWeight: '700', letterSpacing: '0.5px', lineHeight: '1.4', color: '#fff' }}>Real-time gameplay and performance testing</h3>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="feature-card" style={{ padding: '24px', background: 'transparent', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '0px', height: '100%', display: 'flex', flexDirection: 'column', gap: '15px', transition: 'all 0.3s ease' }}>
                                                <div className="icon-box" style={{ width: '48px', height: '48px', background: '#1C1D20', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Scale size={24} color="#cbfe1c" />
                                                </div>
                                                <h3 className="text-uppercase" style={{ fontSize: '16px', margin: 0, fontWeight: '700', letterSpacing: '0.5px', lineHeight: '1.4', color: '#fff' }}>Hands-on comparison before making a purchase</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

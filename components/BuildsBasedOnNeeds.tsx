"use client";

import { MonitorPlay, Video, Tv, Briefcase, Box } from "lucide-react";

export default function BuildsBasedOnNeeds() {
    const builds = [
        { title: "Gaming PC Build", desc: "High-performance GPUs, fast RAM, and optimized cooling for lag-free gaming.", icon: <MonitorPlay size={32} /> },
        { title: "Video Editing PC", desc: "Powerful CPUs, high RAM capacity, and SSD storage for faster rendering.", icon: <Video size={32} /> },
        { title: "Streaming PC", desc: "Multi-core processors and stable performance for streaming + gaming.", icon: <Tv size={32} /> },
        { title: "Office PC", desc: "Budget-friendly systems for daily productivity and business use.", icon: <Briefcase size={32} /> },
        { title: "3D Rendering PC", desc: "High-end GPUs and processors for rendering and modeling workloads.", icon: <Box size={32} /> }
    ];

    return (
        <section className="fix section-padding position-relative" style={{ backgroundColor: '#050709', zIndex: 1, overflow: 'hidden' }}>
            {/* Background Accent */}
            <div style={{
                position: 'absolute',
                top: '-20%',
                right: '-10%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(54,254,28,0.05) 0%, rgba(5,7,9,0) 70%)',
                zIndex: -1,
                pointerEvents: 'none'
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '-20%',
                left: '-10%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(54,254,28,0.05) 0%, rgba(5,7,9,0) 70%)',
                zIndex: -1,
                pointerEvents: 'none'
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="text-center mb-5 w-100 mx-auto" style={{ maxWidth: '800px' }}>
                    <h6 className="text-uppercase fw-bold" style={{ fontSize: '15px', letterSpacing: '3px', color: '#cbfe1c', marginBottom: '16px' }}>
                        Custom PC Builds Based on Your Needs
                    </h6>
                    <h2 className="fw-bold" style={{ fontSize: 'clamp(28px, 4vw, 46px)', color: '#f0f4ff', margin: 0, lineHeight: 1.2 }}>
                        We Design PCs Specifically for <br /><span style={{ background: 'linear-gradient(90deg, #36fe1cff, #cbfe1c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Different Use Cases</span>
                    </h2>
                </div>

                <div className="row justify-content-center g-4">
                    {builds.map((item, idx) => (
                        <div className="col-lg-4 col-md-6" key={idx}>
                            <div className="h-100 position-relative" style={{
                                background: 'linear-gradient(145deg, #111520 0%, #0a0d14 100%)',
                                border: '1px solid #1d2535',
                                borderRadius: '16px',
                                padding: '32px 28px',
                                transition: 'all 0.3s ease',
                                cursor: 'default',
                                overflow: 'hidden'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                    e.currentTarget.style.borderColor = '#36fe1cff';
                                    e.currentTarget.style.boxShadow = '0 10px 40px -10px rgba(54,254,28,0.15)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.borderColor = '#1d2535';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                {/* Top right gradient glow inside card */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0, right: 0,
                                    width: '120px', height: '120px',
                                    background: 'radial-gradient(circle at top right, rgba(203,254,28,0.1) 0%, transparent 70%)',
                                }}></div>

                                <div className="mb-4 d-inline-flex align-items-center justify-content-center" style={{
                                    width: '64px',
                                    height: '64px',
                                    borderRadius: '14px',
                                    background: 'rgba(203,254,28,0.05)',
                                    color: '#cbfe1c',
                                    border: '1px solid rgba(203,254,28,0.2)'
                                }}>
                                    {item.icon}
                                </div>
                                <h3 className="mb-3 fw-bold" style={{ fontSize: '22px', color: '#dde8ff' }}>{item.title}</h3>
                                <p style={{ fontSize: '16px', color: '#8899b4', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

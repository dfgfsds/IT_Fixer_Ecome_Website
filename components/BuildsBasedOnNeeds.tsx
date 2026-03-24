"use client";

import { MonitorPlay, Video, Tv, Briefcase, Box } from "lucide-react";

export default function BuildsBasedOnNeeds() {
    const builds = [
        { title: "Gaming PC Build", desc: "High-performance GPUs, fast RAM, and optimized cooling for lag-free gaming.", icon: <MonitorPlay size={24} /> },
        { title: "Video Editing PC", desc: "Powerful CPUs, high RAM capacity, and SSD storage for faster rendering.", icon: <Video size={24} /> },
        { title: "Streaming PC", desc: "Multi-core processors and stable performance for streaming + gaming.", icon: <Tv size={24} /> },
        { title: "Office PC", desc: "Budget-friendly systems for daily productivity and business use.", icon: <Briefcase size={24} /> },
        { title: "3D Rendering PC", desc: "High-end GPUs and processors for rendering and modeling workloads.", icon: <Box size={24} /> }
    ];

    return (
        <section className="fix position-relative" style={{ backgroundColor: 'transparent', zIndex: 1, overflow: 'hidden' }}>
            {/* Background Accent */}
            {/* <div style={{
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
            }}></div> */}

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="section-title text-center mb-5 w-100 mx-auto" style={{ maxWidth: '800px' }}>
                    <h6 className="subtitle tz-sub-tilte tz-sub-anim  text-uppercase tx-subTitle">Custom PC Builds Based on Your Needs</h6>
                    <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">
                        We Design PCs Specifically for <br /><span style={{ background: 'linear-gradient(90deg, #36fe1cff, #cbfe1c)', WebkitBackgroundClip: 'text' }}>Different Use Cases</span>
                    </h2>
                </div>

                <div className="row justify-content-center g-4">
                    {builds.map((item, idx) => (
                        <div className="col-lg-4 col-md-6" key={idx}>
                            <div className="h-100 position-relative" style={{
                                background: 'transparent',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                borderRadius: '0px',
                                padding: '24px',
                                transition: 'all 0.3s ease',
                                cursor: 'default',
                                overflow: 'hidden'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-6px)';
                                    e.currentTarget.style.borderColor = '#cbfe1c';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                {/* Top right gradient glow inside card */}
                                {/* 
                                <div style={{
                                    position: 'absolute',
                                    top: 0, right: 0,
                                    width: '120px', height: '120px',
                                    background: 'radial-gradient(circle at top right, rgba(203,254,28,0.1) 0%, transparent 70%)',
                                }}></div> 
                                */}

                                <div className="mb-4 d-inline-flex align-items-center justify-content-center" style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '6px',
                                    background: '#1C1D20',
                                    color: '#cbfe1c',
                                }}>
                                    {item.icon}
                                </div>
                                <h3 className="mb-2" style={{ fontSize: '16px', textTransform: 'uppercase', fontWeight: 600, color: '#fff' }}>{item.title}</h3>
                                <p className="mb-0" style={{ fontSize: "14px", lineHeight: "1.7" }}>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

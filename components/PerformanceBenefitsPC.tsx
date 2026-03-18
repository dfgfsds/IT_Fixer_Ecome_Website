"use client";

import { CheckCircle2 } from "lucide-react";

export default function PerformanceBenefitsPC() {
    const benefits = [
        "Faster boot times with SSD & NVMe drives",
        "Higher FPS in games with dedicated GPUs",
        "Better multitasking with high RAM capacity",
        "Improved thermal performance with optimized airflow",
        "Long-term reliability with branded components",
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

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="row align-items-center g-5">

                    {/* Image Right */}
                    <div className="col-lg-6">
                        <div className="position-relative" style={{ padding: '20px' }}>
                            {/* Decorative background glow behind image */}
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '100%',
                                height: '100%',
                                background: 'radial-gradient(circle, rgba(54,254,28,0.15) 0%, transparent 60%)',
                                zIndex: -1
                            }}></div>

                            <img
                                src="https://cdn-ilamaab.nitrocdn.com/JfKDzZijMpKPPZzjAOsbKYBsoZJCYiHm/assets/images/optimized/rev-50fa8f8/www.pczone.co.uk/wp-content/uploads/2024/03/patrick-pahlke-VmyBUO2Q0r0-unsplash-696x464.jpg"
                                className="img-fluid rounded shadow-lg  w-100 h-100"
                                style={{ border: '1px solid rgba(203, 254, 28, 0.2)', transform: 'perspective(1000px) rotateY(-5deg) scale(1.02)', transition: 'transform 0.5s ease' }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) scale(1.05)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'perspective(1000px) rotateY(-5deg) scale(1.02)'}
                                alt="High Performance Custom PC"
                            />
                        </div>
                    </div>

                    {/* Content Left */}
                    <div className="col-lg-6">
                        <h2 className="fw-bold mb-4" style={{ fontSize: 'clamp(28px, 4vw, 42px)', color: '#f0f4ff', lineHeight: 1.2 }}>
                            Performance Benefits of <br /><span style={{ background: 'linear-gradient(90deg, #36fe1cff, #cbfe1c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Custom PC Build</span>
                        </h2>

                        <p className="mb-4" style={{ fontSize: '18px', color: '#8899b4', lineHeight: 1.7, maxWidth: '600px' }}>
                            Choosing a custom PC build in Chennai gives you:
                        </p>

                        <div className="d-flex flex-column gap-3 mb-5">
                            {benefits.map((benefit, idx) => (
                                <div key={idx} className="d-flex align-items-center gap-3 p-3 rounded" style={{ background: 'rgba(17, 21, 32, 0.6)', border: '1px solid rgba(29, 37, 53, 0.8)' }}>
                                    <CheckCircle2 color="#cbfe1c" size={24} className="flex-shrink-0" />
                                    <span style={{ fontSize: '16px', color: '#dde8ff', fontWeight: 500 }}>
                                        {benefit}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="d-inline-flex align-items-center gap-3 p-4 rounded" style={{ background: 'linear-gradient(145deg, #111520 0%, #0a0d14 100%)', borderLeft: '4px solid #cbfe1c' }}>

                            <p style={{ margin: 0, color: '#8899b4', fontSize: '15px', lineHeight: 1.6 }}>
                                <strong style={{ color: '#dde8ff' }}>Custom-built systems</strong> are optimized for real-world performance, not just specifications.
                            </p>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}

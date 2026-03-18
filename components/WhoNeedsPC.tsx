

import {
    FaGamepad,
    FaVideo,
    FaPaintBrush,
    FaBroadcastTower,
    FaCode,
    FaBuilding
} from "react-icons/fa";

export default function WhoNeedsPC() {
    const users = [
        {
            icon: <FaGamepad />,
            title: "Gamers",
            desc: "Looking for high FPS and smooth gameplay",
        },
        {
            icon: <FaVideo />,
            title: "Video Editors",
            desc: "Using Premiere Pro, After Effects",
        },
        {
            icon: <FaPaintBrush />,
            title: "Graphic Designers",
            desc: "Working on Photoshop, Blender",
        },
        {
            icon: <FaBroadcastTower />,
            title: "Streamers",
            desc: "Stable performance for live streaming",
        },
        {
            icon: <FaCode />,
            title: "Developers",
            desc: "Running multiple environments",
        },
        {
            icon: <FaBuilding />,
            title: "Businesses",
            desc: "Powerful office workstations",
        },
    ];

    return (
        <section style={{ backgroundColor: '#0a0c10', padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
            {/* Grid Background identical to Why Choose Us */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.04) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                pointerEvents: 'none'
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="row align-items-center g-5">

                    {/* Image */}
                    <div className="col-lg-5">
                        <div className="position-relative">
                            <img
                                src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&q=80"
                                className="img-fluid rounded"
                                alt="Custom PC"
                            />

                            <div className="position-absolute bottom-0 start-0 p-3 shadow" style={{ background: '#0f1522', border: '1px solid #1d2c44', borderRadius: '14px', transform: 'translate(20px, -20px)' }}>
                                <h3 className="mb-0" style={{ color: '#cbfe1c', fontWeight: 700 }}>500+</h3>
                                <small style={{ color: '#8899b4', fontSize: '15px' }}>Custom Builds Done</small>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="col-lg-7">
                        <p className="fw-bold text-uppercase" style={{ fontSize: '15px', letterSpacing: '3px', color: '#cbfe1c', marginBottom: '12px' }}>
                            IT Fixer Chennai
                        </p>

                        <h2 className="fw-bold mb-3" style={{ fontSize: 'clamp(26px, 4vw, 42px)', color: '#f0f4ff', lineHeight: 1.15 }}>
                            Who Needs a <span style={{ background: 'linear-gradient(90deg, #36fe1cff, #cbfe1c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Custom PC Build</span>?
                        </h2>

                        <p className="mb-4" style={{ fontSize: '16px', color: '#8899b4', lineHeight: 1.7, maxWidth: '560px' }}>
                            A custom PC build is ideal for users who need performance,
                            flexibility, and reliability based on their specific needs.
                        </p>

                        {/* Cards */}
                        <div className="row g-3 mt-2">
                            {users.map((user, index) => (
                                <div className="col-md-6" key={index}>
                                    <div className="card h-100" style={{ background: '#111520', border: '1px solid #1d2535', borderRadius: '12px', padding: '24px 22px', transition: 'transform 0.2s', cursor: 'default' }}
                                        onMouseEnter={(e) => e.currentTarget.style.borderColor = '#065f46'}
                                        onMouseLeave={(e) => e.currentTarget.style.borderColor = '#1d2535'}
                                    >
                                        <div className="card-body p-0 d-flex align-items-start gap-3">

                                            <div style={{ width: '42px', height: '42px', minWidth: '42px', borderRadius: '10px', background: '#1a2236', border: '1px solid #263148', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#cbfe1c', fontSize: '20px' }}>
                                                {user.icon}
                                            </div>

                                            <div>
                                                <h6 style={{ fontSize: '20px', fontWeight: 600, color: '#dde8ff', margin: '0 0 6px' }}>{user.title}</h6>
                                                <p style={{ fontSize: '16px', color: '#6b7fa3', lineHeight: 1.6, margin: 0 }}>
                                                    {user.desc}
                                                </p>
                                            </div>

                                            {/* <span className="ms-auto" style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '1.5px', color: '#cbfe1c', marginTop: '4px' }}>
                                                {String(index + 1).padStart(2, "0")}
                                            </span> */}

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Bottom Note */}
                        <div className="mt-4 d-flex align-items-center gap-2" style={{ padding: '24px 28px', background: '#0f1522', border: '1px solid #1d2c44', borderRadius: '14px' }}>
                            <span style={{ fontSize: '15px', color: '#8899b4' }}>
                                <strong style={{ color: '#dde8ff', fontWeight: 500 }}>⚡ IT Fixer</strong> helps every user build a perfectly optimized PC.
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
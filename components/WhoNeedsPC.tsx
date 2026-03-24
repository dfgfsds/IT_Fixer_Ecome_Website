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
        <section style={{ backgroundColor: 'transparent', padding: '0px 24px 80px', position: 'relative', overflow: 'hidden' }}>
            {/* Grid Background identical to Why Choose Us */}
            {/* 
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.04) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                pointerEvents: 'none'
            }}></div> 
            */}

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

                            <div className="position-absolute bottom-0 start-0 p-3 shadow" style={{ background: '#0b0e13', border: '1px solid #0b0e13', borderRadius: '10px', transform: 'translate(20px, -20px)' }}>
                                <h3 className="mb-0" style={{ color: '#cbfe1c', fontWeight: 700 }}>500+</h3>
                                <small style={{ fontSize: '15px' }}>Custom Builds Done</small>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="col-lg-7">
                        <div className="section-title mb-0">
                            <h6 className="subtitle tz-sub-tilte tz-sub-anim  text-uppercase tx-subTitle">IT Fixer Chennai</h6>
                            <h2 className="tx-title sec_title tz-itm-title tz-itm-anim">
                                Who Needs a <span style={{ background: 'linear-gradient(90deg, #36fe1cff, #cbfe1c)', WebkitBackgroundClip: 'text' }}>Custom PC Build ?</span>
                            </h2>
                            <p className="about-text wow fadeInUp mt-3" data-wow-delay=".5s">
                                A custom PC build is ideal for users who need performance,
                                flexibility, and reliability based on their specific needs.
                            </p>
                        </div>

                        {/* Cards */}
                        <div className="row g-3 mt-2">
                            {users.map((user, index) => (
                                <div className="col-md-6" key={index}>
                                    <div className="card h-100" style={{ background: 'transparent', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '0px', padding: '24px', transition: 'transform 0.2s', cursor: 'default' }}>
                                        <div className="card-body p-0 d-flex align-items-start gap-3">

                                            <div style={{ width: '48px', height: '48px', minWidth: '48px', borderRadius: '6px', background: '#1C1D20', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#cbfe1c', fontSize: '20px' }}>
                                                {user.icon}
                                            </div>

                                            <div>
                                                <h6 className="mb-2" style={{ fontSize: '16px', textTransform: 'uppercase', fontWeight: 600, color: '#fff', margin: '0 0 6px' }}>{user.title}</h6>
                                                <p className="mb-0" style={{ fontSize: "14px", lineHeight: "1.7" }}>
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
                        <div className="mt-4 d-flex align-items-center gap-2" style={{ padding: '24px', background: 'transparent', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '0px' }}>
                            <span style={{ fontSize: '15px' }}>
                                <strong style={{ fontWeight: 500 }}>⚡ IT Fixer</strong> helps every user build a perfectly optimized PC.
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </section >
    );
}
import { Play } from 'lucide-react';

export default function VideoSection() {
    return (
        <section className="video-section-2 parallaxie fix section-padding bg-cover" style={{ backgroundImage: "url('/assets/img/home-2/video-bg.jpg')" }}>
            <div className="video-info-items">
                <h2 className="title">Born to Game</h2>
                <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" className="video-btn ripple video-popup">
                    <Play size={30} fill="currentColor" />
                </a>
            </div>
        </section>
    )
}
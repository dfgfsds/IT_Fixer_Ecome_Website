"use client";

import { useState } from "react";
import { Play, Star, X } from "lucide-react";

export default function AboutTestimonialSection() {
    const [openVideo, setOpenVideo] = useState(false);

    return (
        <>
            <section className="gt-testimonial-section-3 fix section-padding">
                <div className="container">
                    <div className="gt-testimonial-wrapper-3">
                        <div className="row g-4 align-items-center">

                            {/* Left Content */}
                            <div className="col-lg-6">
                                <div className="testimonial-content">

                                    <div className="section-title-2">
                                        <h6 className="wow fadeInUp">
                                            Our Testimonials
                                        </h6>

                                        <h2
                                            className="wow fadeInUp text-uppercase"
                                            data-wow-delay=".3s"
                                        >
                                            Our Testimonials
                                        </h2>
                                    </div>

                                    <div className="swiper gt-testimonial-slider">
                                        <div className="swiper-wrapper">

                                            {/* Testimonial 1 */}
                                            <div className="swiper-slide">
                                                <div className="gt-testimonial-card-item">

                                                    <div className="gt-client-info">
                                                        <div className="image">
                                                            <img
                                                                src="https://www.google.com/favicon.ico"
                                                                alt="Google Icon"
                                                            />
                                                        </div>

                                                        <div className="text">
                                                            <h6>Arjun K</h6>
                                                            <p>Competitive Gamer</p>
                                                        </div>
                                                    </div>

                                                    <div className="gt-testi-content">
                                                        <div className="icon">
                                                            <img
                                                                src="/assets/img/home-3/icon/quate.svg"
                                                                alt="img"
                                                            />
                                                        </div>

                                                        <p>
                                                            IT Fixer has been a game-changer for my
                                                            competitive gaming setup. Their
                                                            custom-built systems with top-tier
                                                            components have delivered unmatched
                                                            performance and durability.
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>

                                            {/* Testimonial 2 */}
                                            <div className="swiper-slide">
                                                <div className="gt-testimonial-card-item">

                                                    <div className="gt-client-info">
                                                        <div className="image">
                                                            <img
                                                                src="https://www.google.com/favicon.ico"
                                                                alt="Google Icon"
                                                            />
                                                        </div>

                                                        <div className="text">
                                                            <h6>Priya S</h6>
                                                            <p>Competitive Gamer</p>
                                                        </div>
                                                    </div>

                                                    <div className="gt-testi-content">
                                                        <div className="icon">
                                                            <img
                                                                src="/assets/img/home-3/icon/quate.svg"
                                                                alt="img"
                                                            />
                                                        </div>

                                                        <p>
                                                            IT Fixer has been a game-changer for my
                                                            competitive gaming setup. Their
                                                            custom-built systems with top-tier
                                                            components have delivered unmatched
                                                            performance and durability.
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>

                                            {/* Testimonial 3 */}
                                            <div className="swiper-slide">
                                                <div className="gt-testimonial-card-item">

                                                    <div className="gt-client-info">
                                                        <div className="image">
                                                            <img
                                                                src="https://www.google.com/favicon.ico"
                                                                alt="Google Icon"
                                                            />
                                                        </div>

                                                        <div className="text">
                                                            <h6>Rahul M</h6>
                                                            <p>College Gamer</p>
                                                        </div>
                                                    </div>

                                                    <div className="gt-testi-content">
                                                        <div className="icon">
                                                            <img
                                                                src="/assets/img/home-3/icon/quate.svg"
                                                                alt="img"
                                                            />
                                                        </div>

                                                        <p>
                                                            IT Fixer has been a game-changer for my
                                                            competitive gaming setup. Their
                                                            custom-built systems with top-tier
                                                            components have delivered unmatched
                                                            performance and durability.
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="swiper-dot mt-3">
                                        <div className="dot"></div>
                                    </div>

                                </div>
                            </div>

                            {/* Right Image */}
                            <div className="col-lg-6">
                                <div className="gt-testimonial-image position-relative">

                                    <img
                                        src="/assets/img/home-3/testimonial-image.png"
                                        alt="img"
                                        className="img-fluid"
                                    />

                                    {/* Video Button */}
                                    <button
                                        onClick={() => setOpenVideo(true)}
                                        className="video-btn ripple border-0"
                                    >
                                        <Play
                                            size={20}
                                            fill="currentColor"
                                        />
                                    </button>

                                    {/* Rating */}
                                    <div className="gt-ratting-content">
                                        <p>1200+ Clients Rating.</p>

                                        <div className="gt-star d-flex gap-1">
                                            <Star size={16} fill="currentColor" className="text-warning" />
                                            <Star size={16} fill="currentColor" className="text-warning" />
                                            <Star size={16} fill="currentColor" className="text-warning" />
                                            <Star size={16} fill="currentColor" className="text-warning" />
                                            <Star size={16} fill="currentColor" className="text-warning" />
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Video Modal */}
            {openVideo && (
                <div
                    className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                    style={{
                        background: "rgba(0,0,0,0.8)",
                        zIndex: 9999,
                    }}
                >
                    <div
                        className="position-relative"
                        style={{
                            width: "90%",
                            maxWidth: "900px",
                        }}
                    >

                        {/* Close Button */}
                        <button
                            onClick={() => setOpenVideo(false)}
                            className="position-absolute border-0 bg-transparent text-white"
                            style={{
                                right: "0",
                                top: "-40px",
                                fontSize: "30px",
                                zIndex: 10,
                            }}
                        >
                            <X size={30} />
                        </button>

                        {/* YouTube Video */}
                        <div
                            style={{
                                position: "relative",
                                paddingBottom: "56.25%",
                                height: 0,
                                overflow: "hidden",
                                borderRadius: "15px",
                            }}
                        >
                            <iframe
                                src="https://www.youtube.com/embed/ulrbBkhrHIM?autoplay=1"
                                title="YouTube Video"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    border: "0",
                                }}
                            />
                        </div>

                    </div>
                </div>
            )}
        </>
    );
}
import { Play, Star } from "lucide-react";

export default function AboutTestimonialSection() {
    return (
        <section className="gt-testimonial-section-3 fix section-padding pt-0">
            <div className="container">
                <div className="gt-testimonial-wrapper-3">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-6">
                            <div className="testimonial-content">
                                <div className="section-title-2">
                                    <h6 className="wow fadeInUp">Our Testimonials</h6>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        Our Testimonials
                                    </h2>
                                </div>
                                <div className="swiper gt-testimonial-slider">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="gt-testimonial-card-item">
                                                <div className="gt-client-info">
                                                    <div className="image">
                                                        <img src="https://www.google.com/favicon.ico" alt="Google Icon" />
                                                    </div>
                                                    <div className="text">
                                                        <h6>Arjun K</h6>
                                                        <p>Competitive Gamer</p>
                                                    </div>
                                                </div>
                                                <div className="gt-testi-content">
                                                    <div className="icon">
                                                        <img src="/assets/img/home-3/icon/quate.svg" alt="img" />
                                                    </div>
                                                    <p>
                                                        IT Fixer has been a game-changer for my competitive gaming setup. Their custom-built systems with top-tier components have delivered unmatched performance and durability. Highly recommend for anyone looking to dominate their matches!
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="gt-testimonial-card-item">
                                                <div className="gt-client-info">
                                                    <div className="image">
                                                        <img src="https://www.google.com/favicon.ico" alt="Google Icon" />
                                                    </div>
                                                    <div className="text">
                                                        <h6>Priya S</h6>
                                                        <p>Competitive Gamer</p>
                                                    </div>
                                                </div>
                                                <div className="gt-testi-content">
                                                    <div className="icon">
                                                        <img src="/assets/img/home-3/icon/quate.svg" alt="img" />
                                                    </div>
                                                    <p>
                                                        IT Fixer has been a game-changer for my competitive gaming setup. Their custom-built systems with top-tier components have delivered unmatched performance and durability. Highly recommend for anyone looking to dominate their matches!
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="gt-testimonial-card-item">
                                                <div className="gt-client-info">
                                                    <div className="image">
                                                        <img src="https://www.google.com/favicon.ico" alt="Google Icon" />
                                                    </div>
                                                    <div className="text">
                                                        <h6>Rahul M </h6>
                                                        <p>College Gamer</p>
                                                    </div>
                                                </div>
                                                <div className="gt-testi-content">
                                                    <div className="icon">
                                                        <img src="/assets/img/home-3/icon/quate.svg" alt="img" />
                                                    </div>
                                                    <p>
                                                        IT Fixer has been a game-changer for my competitive gaming setup. Their custom-built systems with top-tier components have delivered unmatched performance and durability. Highly recommend for anyone looking to dominate their matches!
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
                        <div className="col-lg-6">
                            <div className="gt-testimonial-image">
                                <img src="/assets/img/home-3/testimonial-image.png" alt="img" />
                                <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" className="video-btn ripple video-popup">
                                    <Play size={20} fill="currentColor" />
                                </a>
                                <div className="gt-ratting-content">
                                    <p>1200+ Clients Rating.</p>
                                    <div className="gt-star">
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
    )
}

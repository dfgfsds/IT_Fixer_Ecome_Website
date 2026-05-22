export default function TestimonialSection() {
    const testimonials = [
        {
            review: "IT Fixer is truly the best gaming PC shop in Chennai. I got a custom gaming PC built with an RTX GPU, liquid cooling, and top-end Ryzen processor. The team explained the gaming PC configuration, pricing, and future upgrades clearly. My new rig delivers high FPS gaming performance in Valorant and GTA V. Highly recommend their professional gaming PC builders!",
            name: "Arun Kumar",
            role: "Competitive Gamer & Streamer",
        },
        {
            review: "If you're searching for a gaming PC shop near me, IT Fixer is the one! Their experts helped me choose the perfect budget gaming PC in Chennai with SSD, 16GB RAM, and a powerful graphics card. The build quality is excellent, and the cable management is super clean. Best place to buy gaming PC in Chennai for any budget.",
            name: "Sneha R",
            role: "Tech Student & Casual Gamer",
        },
        {
            review: "I needed a gaming PC for streaming and video editing, and IT Fixer built a beast! They provided the right GPU upgrade, optimized BIOS setup, and performed complete PC stress testing. The performance is flawless even with heavy editing and 4K rendering. Truly the trusted gaming PC shop in Chennai with genuine components.",
            name: "Rahul Dev",
            role: "Video Editor & Content Creator",
        },
        {
            review: "I was confused between prebuilt vs custom gaming PC, and IT Fixer guided me with complete transparency. They showed me multiple gaming PC configuration options within my budget and helped me build a custom gaming PC under 1 lakh in Chennai. Amazing customer support and the most reliable gaming computer store I’ve dealt with.",
            name: "Meera S",
            role: "IT Professional",
        },
        {
            review: "The best gaming PC showroom in Chennai! I visited from Velachery, and the team provided me with a high-end gaming desktop that fits my esports needs. The pricing is competitive, and they use only genuine PC parts. If you're in T Nagar, Tambaram, or Anna Nagar, IT Fixer is worth the trip!",
            name: "Karthik Raj",
            role: "Esports Player (Valorant)",
        },
        {
            review: "As a beginner gamer, I didn’t know where to start. IT Fixer helped me understand gaming PC prices in Chennai, recommended the right Intel i5 gaming processor, and built an upgrade-ready system with RTX graphics. Smooth gameplay, no bottlenecks, and amazing after-sales gaming PC support in Chennai. Truly the best PC builder in Chennai!",
            name: "Vishal Prakash",
            role: "First-Time Gaming PC Buyer",
        },
    ];

    return (
        <section className="testimonial-section-2 section-padding pt-2">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-xl-6">
                        <div className="testimonial-box-items-2">

                            <div className="border-shape">
                                <img
                                    src="assets/img/home-2/border-shape.png"
                                    alt=""
                                />
                            </div>

                            <div className="swiper tetsimonial-slider-2">
                                <div className="swiper-wrapper">

                                    {testimonials.map((item, index) => (
                                        <div
                                            className="swiper-slide"
                                            key={index}
                                        >
                                            <div className="testimonial-box-slider">

                                                <div className="quote-icon">
                                                    <img
                                                        src="assets/img/home-2/quote.png"
                                                        alt="img"
                                                    />
                                                </div>

                                                <p>
                                                    "{item.review}"
                                                </p>

                                                <div className="client-info-items">

                                                    <div className="client-info">

                                                        <img
                                                            src="https://www.google.com/favicon.ico"
                                                            alt="Google"
                                                        />

                                                        <div className="content">
                                                            <h4>
                                                                {item.name}
                                                            </h4>

                                                            <span>
                                                                {item.role}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="star">
                                                        {[...Array(5)].map(
                                                            (_, i) => (
                                                                <i
                                                                    key={i}
                                                                    className="fa-solid fa-star"
                                                                ></i>
                                                            )
                                                        )}
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>

                            <div className="testi-pagi">
                                <div className="array-button d-flex align-items-center">

                                    <button className="array-prev">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 18 18"
                                            fill="none"
                                        >
                                            <g clipPath="url(#clip0_0_434)">
                                                <path
                                                    d="M1.16006 18L14.762 18C15.4019 18 15.9222 17.4797 15.9222 16.8398C15.9222 16.2 15.4019 15.6797 14.762 15.6797L3.96553 15.6797L17.6589 1.98281C18.1124 1.5293 18.1124 0.794531 17.6589 0.341017C17.2054 -0.112499 16.4706 -0.112499 16.0171 0.341017L2.32373 14.0379L2.32373 3.24141C2.32373 2.60156 1.80342 2.08125 1.16357 2.08125C0.52373 2.08125 0.00341662 2.60156 0.00341668 3.24141L0.00341787 16.8398C-9.73203e-05 17.4797 0.520214 18 1.16006 18Z"
                                                    fill="#0B0E13"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_0_434">
                                                    <rect
                                                        width="18"
                                                        height="18"
                                                        fill="white"
                                                        transform="translate(18 18) rotate(180)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </button>

                                    <button className="array-next">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 18 18"
                                            fill="none"
                                        >
                                            <g clipPath="url(#clip0_0_427)">
                                                <path
                                                    d="M16.8399 0H3.23799C2.59814 0 2.07783 0.520312 2.07783 1.16016C2.07783 1.8 2.59814 2.32031 3.23799 2.32031H14.0345L0.341113 16.0172C-0.112402 16.4707 -0.112402 17.2055 0.341113 17.659C0.794629 18.1125 1.52939 18.1125 1.98291 17.659L15.6763 3.96211V14.7586C15.6763 15.3984 16.1966 15.9187 16.8364 15.9187C17.4763 15.9187 17.9966 15.3984 17.9966 14.7586V1.16016C18.0001 0.520312 17.4798 0 16.8399 0Z"
                                                    fill="#0B0E13"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_0_427">
                                                    <rect
                                                        width="18"
                                                        height="18"
                                                        fill="white"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </button>

                                </div>

                                <div className="testimonial-pagination">
                                    <span className="current">
                                        01
                                    </span>{" "}
                                    /
                                    <span className="total">
                                        {String(
                                            testimonials.length
                                        ).padStart(2, "0")}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="testimonial-right-items">
                            <div className="section-title mb-4">
                                <h6 className="subtitle tz-sub-tilte tz-sub-anim text-uppercase tx-subTitle">
                                    our testimonials
                                </h6>

                                <h2 className="tx-title sec_title text-uppercase tz-itm-title tz-itm-anim">
                                    Gamers Talk About IT Fixer
                                </h2>
                            </div>

                            <div className="row g-4 mt-3">

                                <div
                                    className="col-lg-6 wow fadeInUp"
                                    data-wow-delay=".3s"
                                >
                                    <div className="testimonial-image-1">
                                        <div className="overlay-style"></div>

                                        <img
                                            src="assets/img/home-2/testi-1.jpg"
                                            alt="img"
                                        />

                                        <div className="testimonial-counter">
                                            <img
                                                src="assets/img/home-2/testi-count.png"
                                                alt="img"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="col-lg-6 wow fadeInUp"
                                    data-wow-delay=".5s"
                                >
                                    <div className="testimonial-image-1">
                                        <img
                                            src="assets/img/home-2/testi-2.jpg"
                                            alt="img"
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
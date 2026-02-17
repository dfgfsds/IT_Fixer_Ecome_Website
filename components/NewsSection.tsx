export default function NewsSection() {
    return (
        <>
            <section className="news-section-2 section-padding">
                <div className="game-controll-shape">
                    <img src="assets/img/home-2/news/game-controll-shape.png" alt="" />
                </div>
                <div className="container">
                    <div className="section-title">
                        <h6 className="subtitle tz-sub-tilte tz-sub-anim  text-uppercase tx-subTitle">latest news</h6>
                        <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">
                            our latest news & Blog Archive
                        </h2>
                    </div>
                    <div className="news-wrapper">
                        <div className="row g-4 align-items-center">
                            <div className="col-xl-6">
                                <div className="news-left-items">
                                    <div className="row g-4">
                                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                            <div className="news-box-items mt-0">
                                                <div className="content">
                                                    <h3><a href="news-details.html">The Rise of Online Gaming in the Age of AI</a></h3>
                                                    <span className="gt-date">
                                                        <i className="fa-solid fa-calendar-days"></i> 11 March 2025
                                                    </span>
                                                </div>
                                                <div className="thumb style-2">
                                                    <img src="assets/img/home-2/news/news-01.jpg" alt="img" />
                                                    <img src="assets/img/home-2/news/news-01.jpg" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                            <div className="news-box-items mt-0">
                                                <div className="thumb">
                                                    <img src="assets/img/home-2/news/news-02.jpg" alt="img" />
                                                    <img src="assets/img/home-2/news/news-02.jpg" alt="img" />
                                                </div>
                                                <div className="content">
                                                    <h3><a href="news-details.html">The evolution of online gaming and its rise</a></h3>
                                                    <span className="gt-date">
                                                        <i className="fa-solid fa-calendar-days"></i> 11 March 2025
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                            <div className="news-box-items mt-0">
                                                <div className="content">
                                                    <h3><a href="news-details.html">The Rise of Online Gaming in the Age of AI</a></h3>
                                                    <span className="gt-date">
                                                        <i className="fa-solid fa-calendar-days"></i> 11 March 2025
                                                    </span>
                                                </div>
                                                <div className="thumb style-2">
                                                    <img src="assets/img/home-2/news/news-03.jpg" alt="img" />
                                                    <img src="assets/img/home-2/news/news-03.jpg" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                            <div className="news-box-items mt-0">
                                                <div className="thumb">
                                                    <img src="assets/img/home-2/news/news-04.jpg" alt="img" />
                                                    <img src="assets/img/home-2/news/news-04.jpg" alt="img" />
                                                </div>
                                                <div className="content">
                                                    <h3><a href="news-details.html">The evolution of online gaming and its rise</a></h3>
                                                    <span className="gt-date">
                                                        <i className="fa-solid fa-calendar-days"></i> 11 March 2025
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="news-right-items">
                                    <div className="section-title mb-0">
                                        <h6 className="subtitle tz-sub-tilte tz-sub-anim  text-uppercase tx-subTitle">latest news</h6>
                                        <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">
                                            our latest news & Blog Archive
                                        </h2>
                                    </div>
                                    <p className="news-text wow fadeInUp" data-wow-delay=".5s">
                                        Emerging trends in the esports industry include the growth of mobile esports, the integration of virtual reality in gaming experiences, and the increasing involvement of traditional sports.
                                    </p>
                                    <a href="news.html" className="theme-btn style-2 wow fadeInUp" data-wow-delay=".7s">
                                        <span className="left-line"></span>
                                        view all news
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M9.41099 8.46917L1.88219 16L0 14.1166L7.53013 6.58846L0.941096 0H16V15.0576L9.41099 8.46917Z" fill="#0B0E13"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="gt-newsletter-section fix">
                <div className="container">
                    <div className="gt-newsletter-wrapper bg-cover" style={{ backgroundImage: "url(assets/img/home-2/newsletter-bg.jpg)" }}>
                        <h4 className="wow fadeInUp" data-wow-delay=".3s">
                            Sign Up Today To Get The Latest <br />
                            Inspiration & Insights
                        </h4>
                        <form action="#">
                            <div className="form-clt">
                                <img src="assets/img/home-3/icon/10.svg" alt="img" className="input-icon" />
                                <input type="text" name="email" id="email" placeholder="enter your email" />
                                <button type="submit" className="theme-btn">
                                    subscribe now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
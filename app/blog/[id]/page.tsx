import React from "react";
import Link from "next/link";
import { Home } from "lucide-react";

export default function BlogDetailsPage() {
    return (
        <div>

            <div id="smooth-content">
                <div className="gt-breadcrumb-wrapper bg-cover" style={{ backgroundImage: "url('/assets/img/breadcrumb.png')" }}>
                    <div className="gt-left-shape">
                        <img src="/assets/img/shape-1.png" alt="img" />
                    </div>
                    <div className="gt-right-shape">
                        <img src="/assets/img/shape-2.png" alt="img" />
                    </div>
                    <div className="gt-blur-shape">
                        <img src="/assets/img/breadcrumb-shape.png" alt="img" />
                    </div>
                    <div className="container">
                        <div className="gt-page-heading">
                            <div className="gt-breadcrumb-sub-title">
                                <h1 className="wow fadeInUp" data-wow-delay=".3s">Blog Details</h1>
                            </div>
                            <ul className="gt-breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                                <li>
                                    <Home size={16} />
                                </li>
                                <li>
                                    <Link href="/">
                                        home :
                                    </Link>
                                </li>
                                <li className="color">
                                    Blog Details
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <section className="news-details-section section-padding">
                    <div className="container">
                        <div className="gt-news-details-wrapper">
                            <div className="row g-4">
                                <div className="col-12 col-lg-8">
                                    <div className="gt-details-image">
                                        <img src="/assets/img/inner-page/news-details/details-4.jpg" alt="img" />
                                    </div>
                                    <div className="gt-news-details-content">
                                        <h3>Strategies for Dominating Your Favorite Game</h3>
                                        <p>
                                            Many also focus on physical fitness and mental well-being maintain peak performance. building a high-performance gaming PC involves selecting the right components such as a powerful graphics card, fast processor, ample RAM.
                                        </p>
                                        <h3 className="text">What is an Gaiming Hosting?</h3>
                                        <p>
                                            Every great engineer knows how to toggle between two fundamentally different, yet equally important styles of work: "Let's wing it" hacking and corporate-level "measure twice, cut once" engineering.
                                        </p>
                                        <ul className="gt-list">
                                            <li>
                                                <i className="fa-solid fa-check"></i>
                                                Nunc porttitor arcu in sagittis sagittis.
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-check"></i>
                                                Morbi dictum metus eu aliquet varius.
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-check"></i>
                                                Ut ultricies augue ut orci cursus posuere.
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-check"></i>
                                                Nulla sollicitudin libero a quam
                                            </li>
                                        </ul>
                                        <div className="gt-sideber">
                                            <h6>
                                                Dramatically develop market positioning expertise with long-term high-impact ROI. Authoritatively provide access to adaptive web-readiness.
                                            </h6>
                                            <div className="client-info-item">
                                                <div className="client-info">
                                                    <div className="image">
                                                        <img src="/assets/img/inner-page/news-details/client-1.png" alt="img" />
                                                    </div>
                                                    <h4>Michel Clarck</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="mb-5">
                                            Ultimately, music and sound effects are a crucial aspect of game design that can make or break the player experience. By carefully selecting and creating the right sounds, designers can create immersive, engaging games that players.
                                        </p>
                                        <h3>
                                            Music And Sound Effects:
                                        </h3>
                                        <p>
                                            In order to create effective music and sound effect for a game designer need to consider a few key factors. For example, the tone of the game, the intended emotions.
                                        </p>
                                        <div className="row g-4 mt-4 mb-4">
                                            <div className="col-lg-6">
                                                <div className="gt-details-image">
                                                    <img src="/assets/img/inner-page/news-details/details-5.jpg" alt="img" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="gt-details-image">
                                                    <img src="/assets/img/inner-page/news-details/details-6.jpg" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <p>
                                            The rise of mobile gaming has significantly expanded the gaming audience, reaching a broader demographic. It has also influenced game design trends, with many developers creating titles specifically tailored for mobile platforms.
                                        </p>
                                        <div className="row gt-tag-share-wrap mt-4 mb-5">
                                            <div className="col-lg-8 col-12">
                                                <div className="tagcloud">
                                                    <span>Tags:</span>
                                                    <Link href="/blog">E-Sports</Link>
                                                    <Link href="/blog">Marketing</Link>
                                                    <Link href="/blog">Design</Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end">
                                                <div className="social-share">
                                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                                    <a href="#"><i className="fa-brands fa-youtube"></i></a>
                                                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gt-comments-area">
                                            <div className="gt-comments-heading">
                                                <h3>02 Comments</h3>
                                            </div>
                                            <div className="gt-blog-single-comment d-flex gap-4 pt-4 pb-4">
                                                <div className="image">
                                                    <img src="/assets/img/inner-page/news-details/comment-1.jpg" alt="img" />
                                                </div>
                                                <div className="gt-content">
                                                    <div className="head d-flex flex-wrap gap-2 align-items-center justify-content-between">
                                                        <div className="con">
                                                            <h5>
                                                                <Link href="/blog">
                                                                    Adam Jhon
                                                                </Link>
                                                            </h5>
                                                            <span>February 10, 2024 at 2:37 pm</span>
                                                        </div>
                                                        <Link href="/blog" className="reply">Reply</Link>
                                                    </div>
                                                    <p className="mt-2 mb-4">
                                                        Your health and well-being are our top priorities. We take the time to listen to your concerns, answer your questions.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="gt-blog-single-comment d-flex gap-4 pt-4 pb-4">
                                                <div className="image">
                                                    <img src="/assets/img/inner-page/news-details/comment-2.jpg" alt="img" />
                                                </div>
                                                <div className="gt-content">
                                                    <div className="head d-flex flex-wrap gap-2 align-items-center justify-content-between">
                                                        <div className="con">
                                                            <h5><Link href="/blog">Kristin Watsons</Link></h5>
                                                            <span>February 10, 2024 at 2:37 pm</span>
                                                        </div>
                                                        <Link href="/blog" className="reply">Reply</Link>
                                                    </div>
                                                    <p className="mt-2 mb-4">
                                                        Your health and well-being are our top priorities. We take the time to listen to your concerns, answer your questions.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gt-comment-form-wrap mt-5">
                                            <h4>Leave a comments</h4>
                                            <p>Your email address will not be published. Required fields are marked *</p>
                                            <form action="#" id="contact-form" method="POST">
                                                <div className="row g-4">
                                                    <div className="col-lg-6">
                                                        <div className="form-clt">
                                                            <span>Your Name</span>
                                                            <input type="text" name="name" id="name" placeholder="Your Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-clt">
                                                            <span>Your Email</span>
                                                            <input type="text" name="email" id="email6" placeholder="Your Email" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-clt">
                                                            <span>write message</span>
                                                            <textarea name="message" id="message" placeholder="Type your message"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <button type="submit" className="theme-btn boder-10">
                                                            Send Message
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className="gt-main-sideber sticky-style">
                                        <div className="gt-single-sideber-widget">
                                            <div className="gt-widget-title">
                                                <h3>Search Here</h3>
                                            </div>
                                            <div className="gt-search-widget">
                                                <form action="#">
                                                    <input type="text" placeholder="Search here" />
                                                    <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="gt-single-sideber-widget">
                                            <div className="gt-widget-title">
                                                <h3>Cetegories</h3>
                                            </div>
                                            <ul>
                                                <li><Link href="/blog">LIVE GAME</Link><span>(01)</span></li>
                                                <li><Link href="/blog">FANTASY</Link><span>(02)</span></li>
                                                <li><Link href="/blog">GAMING</Link><span>(03)</span></li>
                                                <li><Link href="/blog">MX-XBOX</Link><span>(04)</span></li>
                                                <li><Link href="/blog">SHOOTING</Link><span>(05)</span></li>
                                            </ul>
                                        </div>
                                        <div className="gt-single-sideber-widget">
                                            <div className="gt-widget-title">
                                                <h3>Recent Post</h3>
                                            </div>
                                            <div className="gt-recent-post-area">
                                                <div className="gt-recent-items">
                                                    <div className="gt-recent-thumb">
                                                        <img src="/assets/img/inner-page/news-details/post-1.jpg" alt="img" />
                                                    </div>
                                                    <div className="gt-recent-content">
                                                        <h6>
                                                            <Link href="/blog/1">
                                                                A Day in the Life of an Esports Event
                                                            </Link>
                                                        </h6>
                                                        <ul>
                                                            <li>
                                                                March 26, 2025
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="gt-recent-items">
                                                    <div className="gt-recent-thumb">
                                                        <img src="/assets/img/inner-page/news-details/post-2.jpg" alt="img" />
                                                    </div>
                                                    <div className="gt-recent-content">
                                                        <h6>
                                                            <Link href="/blog/2">
                                                                Influential Figures in the History
                                                            </Link>
                                                        </h6>
                                                        <ul>
                                                            <li>
                                                                March 26, 2025
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="gt-recent-items">
                                                    <div className="gt-recent-thumb">
                                                        <img src="/assets/img/inner-page/news-details/post-3.jpg" alt="img" />
                                                    </div>
                                                    <div className="gt-recent-content">
                                                        <h6>
                                                            <Link href="/blog/3">
                                                                Behind the Scenes of Your Favorite
                                                            </Link>
                                                        </h6>
                                                        <ul>
                                                            <li>
                                                                March 26, 2025
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gt-contact-bg bg-cover" style={{ backgroundImage: "url('/assets/img/inner-page/match-details/bg.jpg')" }}>
                                            <div className="gt-contact-content">
                                                <h3>Need Any Help</h3>
                                                <p>Nees Any Help, Call Us  24/7 Full Support</p>
                                                <div className="gt-contact-item">
                                                    <div className="gt-icon">
                                                        <i className="fa-solid fa-phone"></i>
                                                    </div>
                                                    <ul className="gt-list">
                                                        <li><span>Call Us:</span></li>
                                                        <li><a href="tel:+0094382229540">+009 438 222 9540</a></li>
                                                    </ul>
                                                </div>
                                                <div className="gt-contact-item">
                                                    <div className="gt-icon">
                                                        <i className="fa-regular fa-envelope"></i>
                                                    </div>
                                                    <ul className="gt-list">
                                                        <li><span>Mail Us</span></li>
                                                        <li><a href="mailto:infor@xridergamil.com">
                                                            infor@xridergamil.com
                                                        </a></li>
                                                    </ul>
                                                </div>
                                                <div className="gt-contact-item mb-0">
                                                    <div className="gt-icon">
                                                        <i className="fa-solid fa-location-dot"></i>
                                                    </div>
                                                    <ul className="gt-list">
                                                        <li><span>Location:</span></li>
                                                        <li>Toronto, Montreal, City</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cta-contact-section">
                    <div className="container">
                        <div className="cta-wrapper">
                            <div className="content wow fadeInUp" data-wow-delay=".3s">
                                <p>Pull the Trigger!</p>
                                <h3>
                                    Let’s Bring Your <br />
                                    Vision To Life
                                </h3>
                            </div>
                            <div className="cta-image wow fadeInUp" data-wow-delay=".5s">
                                <img src="/assets/img/home-1/cta-img.png" alt="img" />
                            </div>
                            <div className="contact-right wow fadeInUp" data-wow-delay=".7s">
                                <div className="contact-info">
                                    <h3>call us</h3>
                                    <p><a href="tel:+91032145609870">+91 0321 4560 9870</a></p>
                                </div>
                                <Link href="/contact" className="theme-btn">
                                    get started
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>

    );
}

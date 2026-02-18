import Link from 'next/link';
import { Home } from "lucide-react";

export default function NotFound() {
    return (
        <div id="smooth-content">
            <div
                className="gt-breadcrumb-wrapper bg-cover"
                style={{ backgroundImage: "url('/assets/img/breadcrumb.png')" }}
            >
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
                            <h1 className="wow fadeInUp" data-wow-delay=".3s">
                                404 error
                            </h1>
                        </div>
                        <ul className="gt-breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                            <li>
                                <Home size={16} />
                            </li>
                            <li>
                                <a href="/">
                                    home :
                                </a>
                            </li>
                            <li className="color">404 error</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* GT Error Section Start */}
            <section className="gt-error-section section-padding fix pb-0">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="gt-error-items">
                                <div className="gt-error-image wow fadeInUp" data-wow-delay=".3s">
                                    <img src="/assets/img/inner-page/404.png" alt="img" />
                                </div>
                                <h2 className="wow fadeInUp" data-wow-delay=".5s">
                                    error - page not found
                                </h2>
                                <Link href="/" className="theme-btn boder-10">
                                    back to home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cta Section Start */}
            <section className="cta-contact-section section-padding">
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
                                <p>
                                    <a href="tel:+91032145609870">+91 0321 4560 9870</a>
                                </p>
                            </div>
                            <Link href="/contact" className="theme-btn">
                                get started
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

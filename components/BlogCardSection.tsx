import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

export default function BlogCardSection() {
    return (
        <section className="gt-news-section section-padding fix">
            <div className="container">
                <div className="row g-4">
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="gt-news-card-item mt-0">
                            <div className="gt-news-image">
                                <img src="/assets/img/home-1/news/news-1.jpg" alt="img" />
                            </div>
                            <div className="gt-news-content">
                                <ul className="gt-list">
                                    <li className="d-flex align-items-center gap-2">
                                        <Calendar size={18} />
                                        30 May, 2025
                                    </li>
                                </ul>
                                <h4>
                                    <Link href="/blog/1">
                                        The evolution of online gaming and its rise
                                    </Link>
                                </h4>
                                <p>
                                    Nunc consectetur ornare varius. Nulla massa velit, ultricies in volutpat a, viverra et nunc. spendisse non velit
                                </p>
                                <Link href="/blog/1" className="icon"><ArrowRight size={18} /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="gt-news-card-item mt-0">
                            <div className="gt-news-image">
                                <img src="/assets/img/home-1/news/news-2.jpg" alt="img" />
                            </div>
                            <div className="gt-news-content">
                                <ul className="gt-list">
                                    <li className="d-flex align-items-center gap-2">
                                        <Calendar size={18} />
                                        30 May, 2025
                                    </li>
                                </ul>
                                <h4>
                                    <Link href="/blog/2">
                                        The evolution of online gaming and its rise
                                    </Link>
                                </h4>
                                <p>
                                    Nunc consectetur ornare varius. Nulla massa velit, ultricies in volutpat a, viverra et nunc. spendisse non velit
                                </p>
                                <Link href="/blog/2" className="icon"><ArrowRight size={18} /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="gt-news-card-item mt-0">
                            <div className="gt-news-image">
                                <img src="/assets/img/home-1/news/news-3.jpg" alt="img" />
                            </div>
                            <div className="gt-news-content">
                                <ul className="gt-list">
                                    <li className="d-flex align-items-center gap-2">
                                        <Calendar size={18} />
                                        30 May, 2025
                                    </li>
                                </ul>
                                <h4>
                                    <Link href="/blog/3">
                                        The evolution of online gaming and its rise
                                    </Link>
                                </h4>
                                <p>
                                    Nunc consectetur ornare varius. Nulla massa velit, ultricies in volutpat a, viverra et nunc. spendisse non velit
                                </p>
                                <Link href="/blog/3" className="icon"><ArrowRight size={18} /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="gt-news-card-item mt-0">
                            <div className="gt-news-image">
                                <img src="/assets/img/home-1/news/news-4.jpg" alt="img" />
                            </div>
                            <div className="gt-news-content">
                                <ul className="gt-list">
                                    <li className="d-flex align-items-center gap-2">
                                        <Calendar size={18} />
                                        30 May, 2025
                                    </li>
                                </ul>
                                <h4>
                                    <Link href="/blog/4">
                                        The evolution of online gaming and its rise
                                    </Link>
                                </h4>
                                <p>
                                    Nunc consectetur ornare varius. Nulla massa velit, ultricies in volutpat a, viverra et nunc. spendisse non velit
                                </p>
                                <Link href="/blog/4" className="icon"><ArrowRight size={18} /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="gt-news-card-item mt-0">
                            <div className="gt-news-image">
                                <img src="/assets/img/home-1/news/news-5.jpg" alt="img" />
                            </div>
                            <div className="gt-news-content">
                                <ul className="gt-list">
                                    <li className="d-flex align-items-center gap-2">
                                        <Calendar size={18} />
                                        30 May, 2025
                                    </li>
                                </ul>
                                <h4>
                                    <Link href="/blog/5">
                                        The evolution of online gaming and its rise
                                    </Link>
                                </h4>
                                <p>
                                    Nunc consectetur ornare varius. Nulla massa velit, ultricies in volutpat a, viverra et nunc. spendisse non velit
                                </p>
                                <Link href="/blog/5" className="icon"><ArrowRight size={18} /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="gt-news-card-item mt-0">
                            <div className="gt-news-image">
                                <img src="/assets/img/home-1/news/news-6.jpg" alt="img" />
                            </div>
                            <div className="gt-news-content">
                                <ul className="gt-list">
                                    <li className="d-flex align-items-center gap-2">
                                        <Calendar size={18} />
                                        30 May, 2025
                                    </li>
                                </ul>
                                <h4>
                                    <Link href="/blog/6">
                                        The evolution of online gaming and its rise
                                    </Link>
                                </h4>
                                <p>
                                    Nunc consectetur ornare varius. Nulla massa velit, ultricies in volutpat a, viverra et nunc. spendisse non velit
                                </p>
                                <Link href="/blog/6" className="icon"><ArrowRight size={18} /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
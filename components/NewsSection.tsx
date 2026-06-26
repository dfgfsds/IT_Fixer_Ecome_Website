'use client';

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getBlogsApi } from "@/api-endpoints/authendication";
import { useVendor } from "@/context/VendorContext";
import { formatDate } from "@/lib/utils";
import { slugify } from "@/lib/slugify";

export default function NewsSection() {
    const { vendorId } = useVendor();

    const { data: blogData, isLoading } = useQuery({
        queryKey: ['blogs', vendorId],
        queryFn: () => getBlogsApi(`?vendor_id=${vendorId}`),
        enabled: !!vendorId,
    });

    const blogs: any[] = blogData?.data?.blogs || [];
    const latestBlogs = blogs.slice(0, 4);

    const renderCard = (post: any, index: number) => {
        const delay = index % 2 === 0 ? ".3s" : ".5s";
        const isStyleTwo = index % 2 === 0;

        return (
            <div key={post.id} className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={delay}>
                <Link href={`/blog/${slugify(post.title || post.subtitle)}`} className="text-decoration-none">
                    <div className="news-box-items mt-0" style={{ cursor: "pointer" }}>
                        {isStyleTwo ? (
                            <>
                                <div className="content">
                                    <h3>
                                        <span>{post.subtitle || post.title}</span>
                                    </h3>
                                    <span className="gt-date">
                                        <i className="fa-solid fa-calendar-days"></i>{" "}
                                        {formatDate(post.created_at)}
                                    </span>
                                </div>
                                <div className="thumb style-2">
                                    <img
                                        src={post.banner_url || "assets/img/home-2/news/news-01.jpg"}
                                        alt={post.title}
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = "assets/img/home-2/news/news-01.jpg";
                                        }}
                                    />
                                    <img
                                        src={post.banner_url || "assets/img/home-2/news/news-01.jpg"}
                                        alt={post.title}
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = "assets/img/home-2/news/news-01.jpg";
                                        }}
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="thumb">
                                    <img
                                        src={post.banner_url || "assets/img/home-2/news/news-02.jpg"}
                                        alt={post.title}
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = "assets/img/home-2/news/news-02.jpg";
                                        }}
                                    />
                                    <img
                                        src={post.banner_url || "assets/img/home-2/news/news-02.jpg"}
                                        alt={post.title}
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = "assets/img/home-2/news/news-02.jpg";
                                        }}
                                    />
                                </div>
                                <div className="content">
                                    <h3>
                                        <span>{post.subtitle || post.title}</span>
                                    </h3>
                                    <span className="gt-date">
                                        <i className="fa-solid fa-calendar-days"></i>{" "}
                                        {formatDate(post.created_at)}
                                    </span>
                                </div>
                            </>
                        )}
                    </div>
                </Link>
            </div>
        );
    };

    const renderSkeleton = (index: number) => {
        const delay = index % 2 === 0 ? ".3s" : ".5s";
        const isStyleTwo = index % 2 === 0;
        return (
            <div key={index} className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={delay}>
                <div className="news-box-items mt-0">
                    {isStyleTwo ? (
                        <>
                            <div className="content">
                                <h3><span style={{ background: "#333", borderRadius: 4, display: "block", height: 20, width: "80%" }}>&nbsp;</span></h3>
                                <span className="gt-date" style={{ background: "#333", borderRadius: 4, display: "inline-block", height: 16, width: 120 }}>&nbsp;</span>
                            </div>
                            <div className="thumb style-2" style={{ background: "#222", minHeight: 160 }}></div>
                        </>
                    ) : (
                        <>
                            <div className="thumb" style={{ background: "#222", minHeight: 160 }}></div>
                            <div className="content">
                                <h3><span style={{ background: "#333", borderRadius: 4, display: "block", height: 20, width: "80%" }}>&nbsp;</span></h3>
                                <span className="gt-date" style={{ background: "#333", borderRadius: 4, display: "inline-block", height: 16, width: 120 }}>&nbsp;</span>
                            </div>
                        </>
                    )}
                </div>
            </div>
        );
    };

    return (
        <>
            <section className="news-section-2 section-padding pt-0">
                <div className="game-controll-shape">
                    <img src="assets/img/home-2/news/game-controll-shape.png" alt="" />
                </div>
                <div className="container">
                    <div className="section-title news-title">
                        <h6 className="subtitle tz-sub-tilte tz-sub-anim  text-uppercase tx-subTitle">Latest Blogs</h6>
                        <h2 className="tx-title sec_title text-uppercase tz-itm-title tz-itm-anim">
                            Our Latest Blogs Archive
                        </h2>
                    </div>
                    <div className="news-wrapper">
                        <div className="row g-4 align-items-center">
                            <div className="col-xl-6">
                                <div className="news-left-items">
                                    <div className="row g-4">
                                        {isLoading
                                            ? [0, 1, 2, 3].map((i) => renderSkeleton(i))
                                            : latestBlogs.length > 0
                                                ? latestBlogs.map((post, index) => renderCard(post, index))
                                                : (
                                                    <>
                                                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                                            <div className="news-box-items mt-0">
                                                                <div className="content">
                                                                    <h3><a href="#">Custom Gaming PC Builds for Ultimate Performance</a></h3>
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
                                                                    <h3><a href="#">High-End Gaming Laptop Sales & Upgrades</a></h3>
                                                                    <span className="gt-date">
                                                                        <i className="fa-solid fa-calendar-days"></i> 11 March 2025
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                                            <div className="news-box-items mt-0">
                                                                <div className="content">
                                                                    <h3><a href="#">Professional Computer Repair & Service</a></h3>
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
                                                                    <h3><a href="#">
                                                                    </a></h3>
                                                                    <span className="gt-date">
                                                                        <i className="fa-solid fa-calendar-days"></i> 11 March 2025
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="news-right-items">
                                    <div className="section-title mb-0">
                                        <h6 className="subtitle tz-sub-tilte tz-sub-anim  text-uppercase tx-subTitle">From Our Blog</h6>
                                        <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">
                                            Expert Tips, Repair Guides & Tech Insights
                                        </h2>
                                    </div>
                                    <p className="news-text wow fadeInUp" data-wow-delay=".5s">
                                        Stay updated with the latest in PC repair, gaming laptop upgrades, SSD & RAM optimization, and pro-level custom build guides — straight from the IT Fixer team.
                                    </p>
                                    <Link href="/blog" className="theme-btn style-2 wow fadeInUp" data-wow-delay=".7s">
                                        <span className="left-line"></span>
                                        view all blogs
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M9.41099 8.46917L1.88219 16L0 14.1166L7.53013 6.58846L0.941096 0H16V15.0576L9.41099 8.46917Z" fill="#0B0E13"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* <section className="gt-newsletter-section fix">
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
            </section> */}
        </>
    )
}
"use client";

import React from "react";
import Link from "next/link";
import { Home, Calendar, Phone, Mail, MapPin } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getBlogsApi } from "@/api-endpoints/authendication";
import { useVendor } from "@/context/VendorContext";
import { formatDate } from "@/lib/utils";

export default function BlogDetailsPage({ params: paramsPromise }: { params: Promise<{ id: string }> }) {
    const params = React.use(paramsPromise);
    const { vendorId } = useVendor();

    const { data: blogDetailData, isLoading: detailLoading } = useQuery({
        queryKey: ["blog", params.id],
        queryFn: () => getBlogsApi(params.id),
    });

    const { data: allBlogsData } = useQuery({
        queryKey: ["blogs", vendorId],
        queryFn: () => getBlogsApi(`?vendor_id=${vendorId}`),
        enabled: !!vendorId
    });

    const post = blogDetailData?.data?.blog;

    const recentPosts = (allBlogsData?.data?.blogs || [])
        .filter((b: any) => b.id !== params.id)
        .slice(0, 3);

    if (detailLoading) {
        return (
            <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
                <div className="spinner-border" role="status" style={{ color: '#a6d719', width: '3rem', height: '3rem', borderWidth: '0.25em' }}>
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (!post) return <div className="container py-20 text-center">Blog not found.</div>;

    return (
        <div>
            <div id="smooth-content">
                {/* Breadcrumb */}
                <div className="gt-breadcrumb-wrapper bg-cover" style={{ backgroundImage: "url('/assets/img/breadcrumb.png')" }}>
                    <div className="container">
                        <div className="gt-page-heading">
                            <div className="gt-breadcrumb-sub-title">
                                <h1 className="wow fadeInUp" data-wow-delay=".3s">{post.title}</h1>
                            </div>
                            <ul className="gt-breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                                <li><Home size={16} /></li>
                                <li><Link href="/">home :</Link></li>
                                <li className="color">Blog Details</li>
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
                                        <img src={post.banner_url || "/assets/img/placeholder.jpg"} alt={post.title} className="w-100 rounded-3" />
                                    </div>
                                    <div className="gt-news-details-content">
                                        <div className="d-flex align-items-center gap-3 mt-4 mb-2 text-muted small">
                                            <span className="d-flex align-items-center gap-1"><Calendar size={14} /> {formatDate(post.created_at)}</span>
                                            <span>| By {post.author}</span>
                                        </div>
                                        <h3>{post.subtitle || post.title}</h3>
                                        <div
                                            dangerouslySetInnerHTML={{ __html: post.content }}
                                            className="prose max-w-none mt-4"
                                        />

                                        {/* Author Bio Box */}
                                        <div className="gt-sideber mt-5">
                                            <h6>{post.subtitle}</h6>
                                            <div className="client-info-item">
                                                <div className="client-info">
                                                    <div className="image" style={{ width: '60px', height: '60px', minWidth: '60px', overflow: 'hidden', borderRadius: '50%', border: '2px solid #a6d719' }}>
                                                        <img
                                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiYI-YYxBo63Rx-zut9g3nRQh6Imiyf_251w&s"
                                                            alt="author"
                                                            className="w-[60px] h-[60px] object-contain"
                                                        />
                                                    </div>
                                                    <h4>{post.author}</h4>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Comment Form */}
                                        <div className="gt-comment-form-wrap mt-5">
                                            <h4>Leave a comments</h4>
                                            <p>Your email address will not be published. Required fields are marked *</p>
                                            <form action="#" id="contact-form" method="POST">
                                                <div className="row g-4">
                                                    <div className="col-lg-6">
                                                        <div className="form-clt">
                                                            <span>Your Name</span>
                                                            <input type="text" name="name" placeholder="Your Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-clt">
                                                            <span>Your Email</span>
                                                            <input type="text" name="email" placeholder="Your Email" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-clt">
                                                            <span>write message</span>
                                                            <textarea name="message" placeholder="Type your message"></textarea>
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

                                {/* Sidebar */}
                                <div className="col-lg-4 col-12">
                                    <div className="gt-main-sideber sticky-style">
                                        <div className="gt-single-sideber-widget">
                                            <div className="gt-widget-title">
                                                <h3>Recent Post</h3>
                                            </div>
                                            <div className="gt-recent-post-area">
                                                {recentPosts.map((rPost: any) => (
                                                    <div className="gt-recent-items d-flex align-items-center gap-3 mb-4" key={rPost.id}>
                                                        {/* Fixed size thumbnail with rounded corners */}
                                                        <div className="gt-recent-thumb" style={{ width: '85px', height: '85px', minWidth: '85px', overflow: 'hidden', borderRadius: '12px' }}>
                                                            <Link href={`/blog/${rPost.id}`}>
                                                                <img
                                                                    src={rPost.banner_url || "/assets/img/placeholder.jpg"}
                                                                    alt="img"
                                                                    className="w-100 h-100 object-cover transition-transform duration-300 hover:scale-110"
                                                                />
                                                            </Link>
                                                        </div>

                                                        <div className="gt-recent-content">
                                                            <h6 style={{ fontSize: '15px', lineHeight: '1.4', marginBottom: '5px' }}>
                                                                <Link href={`/blog/${rPost.id}`} className="text-white hover:text-success line-clamp-2">
                                                                    {rPost.title}
                                                                </Link>
                                                            </h6>
                                                            <ul className="list-unstyled mb-0">
                                                                <li className="text-muted" style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: '500' }}>
                                                                    {formatDate(rPost.created_at).toUpperCase()}
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>


                                        {/* Need Help Box */}
                                        <div className="gt-contact-bg bg-cover" style={{ backgroundImage: "url('/assets/img/inner-page/match-details/bg.jpg')" }}>
                                            <div className="gt-contact-content">
                                                <h3>Need Any Help</h3>
                                                <p>Call Us 24/7 Full Support</p>
                                                <div className="gt-contact-item">
                                                    <div className="gt-icon"><Phone size={18} /></div>
                                                    <ul className="gt-list">
                                                        <li><span>Call Us:</span></li>
                                                        <li><a href="tel:+0094382229540">+009 438 222 9540</a></li>
                                                    </ul>
                                                </div>
                                                <div className="gt-contact-item">
                                                    <div className="gt-icon"><Mail size={18} /></div>
                                                    <ul className="gt-list">
                                                        <li><span>Mail Us</span></li>
                                                        <li><a href="mailto:infor@xridergamil.com">info@syedgifts.com</a></li>
                                                    </ul>
                                                </div>
                                                <div className="gt-contact-item mb-0">
                                                    <div className="gt-icon"><MapPin size={18} /></div>
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
            </div>
        </div>
    );
}

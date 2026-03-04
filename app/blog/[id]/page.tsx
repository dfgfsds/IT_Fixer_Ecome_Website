"use client";

import React from "react";
import Link from "next/link";
import { Home, Calendar, Phone, Mail, MapPin } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getBlogsApi } from "@/api-endpoints/authendication";
import { useVendor } from "@/context/VendorContext";
import { formatDate } from "@/lib/utils";
import { useState } from "react";
import axios from "axios";
import ApiUrls from "@/api-endpoints/ApiUrls";
import { toast } from "sonner";

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

    const [form, setForm] = useState({
        name: "",
        email: "",
        contact_number: "",
        description: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name === "contact_number") {
            const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
            setForm({ ...form, contact_number: digitsOnly });
        } else {
            setForm({ ...form, [name]: value });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.name || !form.email || !form.contact_number || !form.description) {
            toast.error("Please fill in all required fields.");
            return;
        }

        setLoading(true);
        try {
            await axios.post(ApiUrls?.sendQuoteRequest, { ...form, vendor_id: vendorId });
            toast.success("Message sent successfully");
            setForm({ name: "", email: "", contact_number: "", description: "" });
        } catch (err: any) {
            toast.error(err?.response?.data?.message || "Something went wrong, try again later");
        } finally {
            setLoading(false);
        }
    };

    const post = blogDetailData?.data?.blog;

    const recentPosts = (allBlogsData?.data?.blogs || [])
        .filter((b: any) => String(b.id) !== String(params.id))
        .sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
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
                                <li>
                                    <i className="fa-solid fa-house"></i>
                                </li>
                                <li>
                                    <a href="/">
                                        home :
                                    </a>
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
                                            <form id="contact-form" onSubmit={handleSubmit}>
                                                <div className="row g-4">
                                                    <div className="col-lg-12">
                                                        <div className="form-clt">
                                                            <span>Your Name</span>
                                                            <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-clt">
                                                            <span>Your Email</span>
                                                            <input type="text" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-clt">
                                                            <span>Mobile Number</span>
                                                            <input type="tel" name="contact_number" placeholder="Your Mobile Number" value={form.contact_number} onChange={handleChange} maxLength={10} inputMode="numeric" pattern="[0-9]{10}" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-clt">
                                                            <span>write message</span>
                                                            <textarea name="description" placeholder="Type your message" value={form.description} onChange={handleChange}></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <button type="submit" className="vs-btn cart-animation-item" disabled={loading}>
                                                            {loading ? "Sending..." : "Send Message"}
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
                                        <div className="gt-contact-bg" style={{ backgroundColor: "#1C1D20", padding: "0px", borderRadius: "10px" }}>
                                            <div className="gt-contact-content">
                                                <h3>Need Any Help</h3>
                                                <p>Call Us 24/7 Full Support</p>

                                                <div className="gt-contact-item" style={{ display: "flex", gap: "25px", alignItems: "center", marginBottom: "30px" }}>
                                                    <div className="gt-icon" style={{ width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center", minWidth: "50px" }}>
                                                        <i className="fa-solid fa-phone"></i>
                                                    </div>
                                                    <ul className="gt-list" style={{ margin: 0, padding: 0, listStyle: "none" }}>
                                                        <li><a href="tel:+918585858768" style={{ fontSize: "18px", fontWeight: "700" }}>+91 8585858768</a></li>
                                                    </ul>
                                                </div>

                                                <div className="gt-contact-item" style={{ display: "flex", gap: "25px", alignItems: "center", marginBottom: "30px" }}>
                                                    <div className="gt-icon" style={{ width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center", minWidth: "50px" }}>
                                                        <i className="fa-regular fa-envelope"></i>
                                                    </div>
                                                    <ul className="gt-list" style={{ margin: 0, padding: 0, listStyle: "none" }}>
                                                        <li><a href="mailto:info@itfixer.in" style={{ fontSize: "18px", fontWeight: "700", textTransform: "lowercase" }}>info@itfixer.in</a></li>
                                                    </ul>
                                                </div>

                                                <div className="gt-contact-item mb-0" style={{ display: "flex", gap: "25px", alignItems: "start" }}>
                                                    <div className="gt-icon" style={{ width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center", minWidth: "50px" }}>
                                                        <i className="fa-solid fa-location-dot"></i>
                                                    </div>
                                                    <ul className="gt-list" style={{ margin: 0, padding: 0, listStyle: "none" }}>
                                                        <li>
                                                            <a
                                                                href="https://www.google.com/maps/search/?api=1&query=Chennai,+Tamil+Nadu,+India"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                style={{ fontSize: "16px", fontWeight: "700", lineHeight: "1.5", display: "block" }}
                                                            >
                                                                New No 29, Old No 31 & 32, Anjugam Nagar, 1st Street, Jafferkhanpet (Opp to Kasi Theatre), Ashok Nagar, Chennai 600083
                                                            </a>
                                                        </li>
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

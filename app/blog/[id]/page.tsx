import React from "react";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { getBlogsApi } from "@/api-endpoints/authendication";
import { formatDate } from "@/lib/utils";
import BlogQuoteForm from "@/components/BlogQuoteForm";
import { slugify } from "@/lib/slugify";
import { Metadata } from 'next';
import BlogStickySidebar from "@/components/BlogStickySidebar";

type Props = {
    params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id: pathId } = await params;
    const vendorId = "157";
    
    // Fetch all blogs to find the one matching the slug
    const allBlogsResponse = await getBlogsApi(`?vendor_id=${vendorId}`);
    const allBlogs = allBlogsResponse?.data?.blogs || [];
    
    const blogMatch = allBlogs.find((b: any) => 
        slugify(b.title || b.subtitle) === pathId || String(b.id) === pathId
    );
    
    if (!blogMatch) {
        return { title: "Blog Not Found" };
    }

    const response = await getBlogsApi(blogMatch.id);
    const post = response?.data?.blog;

    return {
        title: post?.subtitle || post?.title || "Blog Details",
        description: post?.subtitle || post?.content?.slice(0, 160) || "Read our latest blog post.",
    };
}

export default async function BlogDetailsPage({ params: paramsPromise }: Props) {
    const { id: pathId } = await paramsPromise;
    const vendorId = "157";

    const allBlogsResponse = await getBlogsApi(`?vendor_id=${vendorId}`);
    const allBlogs = allBlogsResponse?.data?.blogs || [];

    const blogMatch = allBlogs.find((b: any) => 
        slugify(b.title || b.subtitle) === pathId || String(b.id) === pathId
    );

    if (!blogMatch) return <div className="container py-20 text-center">Blog not found.</div>;

    const blogDetailResponse = await getBlogsApi(blogMatch.id);
    const post = blogDetailResponse?.data?.blog;

    if (!post) return <div className="container py-20 text-center">Blog detail not found.</div>;

    const recentPosts = allBlogs
        .filter((b: any) => String(b.id) !== String(blogMatch.id))
        .sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
        .slice(0, 3);

    return (
        <div>
            <div id="smooth-content">
                <BlogStickySidebar />
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
                                <h1 className="wow fadeInUp" style={{ lineHeight: "1.1" }} data-wow-delay=".3s">{post.subtitle}</h1>
                            </div>
                            <ul className="gt-breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                                <li>
                                    <i className="fa-solid fa-house"></i>
                                </li>
                                <li>
                                    <Link className="text-uppercase" href="/">
                                        home :
                                    </Link>
                                </li>
                                <li className="color text-uppercase">
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
                                    <div className="blog-left-content">
                                        <div className="gt-details-image">
                                            <img src={post.banner_url || "/assets/img/placeholder.jpg"} alt={post.title} className="w-100 rounded-3" />
                                        </div>
                                        <div className="gt-news-details-content">
                                            <div className="d-flex align-items-center gap-2 mt-4 mb-2 text-muted small">
                                                <span className="d-flex align-items-center gap-1"><Calendar size={14} /> {formatDate(post.created_at)}</span>
                                                <span>| By {post.author}</span>
                                            </div>
                                            <h3 className="mb-4">{post.title || post.subtitle}</h3>
                                            <div dangerouslySetInnerHTML={{ __html: post?.content }} className="quill-content" />

                                            {/* Author Bio Box */}
                                            <div className="gt-sideber mt-5">
                                                <h6>{post.subtitle}</h6>
                                                <div className="client-info-item">
                                                    <div className="client-info">
                                                        <div className="image" style={{ overflow: 'hidden', }}>
                                                            <img
                                                                src="https://i.ibb.co/Ngx7RNQn/images.webp"
                                                                alt="author"
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                        <h4>{post.author}</h4>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Comment Form */}
                                            <BlogQuoteForm vendorId={vendorId} />
                                        </div>
                                    </div>
                                </div>

                                {/* Sidebar */}
                                <div className="col-lg-4 col-12">
                                    <div className="blog-sticky-sidebar">
                                        <div className="gt-main-sideber sticky-style">
                                            <div className="gt-single-sideber-widget">
                                                <div className="gt-widget-title">
                                                    <h3 className="text-uppercase">Recent Post</h3>
                                                </div>
                                                <div className="gt-recent-post-area">
                                                    {recentPosts.map((rPost: any) => (
                                                        <div className="gt-recent-items d-flex align-items-center gap-3 mb-4" key={rPost.id}>
                                                            {/* Fixed size thumbnail with rounded corners */}
                                                            <div className="gt-recent-thumb" style={{ width: '85px', height: '60px', minWidth: '85px', overflow: 'hidden', borderRadius: '0px' }}>
                                                                <Link href={`/blog/${slugify(rPost.title || rPost.subtitle)}`}>
                                                                    <img
                                                                        src={rPost.banner_url || "/assets/img/placeholder.jpg"}
                                                                        alt="img"
                                                                        className="w-100 h-100 object-cover transition-transform duration-300 hover:scale-110"
                                                                    />
                                                                </Link>
                                                            </div>

                                                            <div className="gt-recent-content">
                                                                <h6 style={{ fontSize: '15px', lineHeight: '1.4', marginBottom: '5px' }}>
                                                                    <Link href={`/blog/${slugify(rPost.title || rPost.subtitle)}`} className="text-white hover:text-success line-clamp-2">
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
                    </div>
                </section>
            </div>
        </div>
    );
}
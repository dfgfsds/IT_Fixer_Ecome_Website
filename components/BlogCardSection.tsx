'use client';

import { useState } from "react";
import Link from "next/link";
import { Calendar, ArrowRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { formatDate, generatePagination } from "@/lib/utils";
import { slugify } from "@/lib/slugify";

interface BlogCardSectionProps {
    blogs: any[];
}

export default function BlogCardSection({ blogs = [] }: BlogCardSectionProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const totalPages = Math.ceil(blogs.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentBlogs = blogs.slice(indexOfFirstItem, indexOfLastItem);
    const paginationRange = generatePagination(currentPage, totalPages);

    const handlePageChange = (page: any) => {
        if (page === "...") return;
        setCurrentPage(page);
        window.scrollTo({ top: 300, behavior: "smooth" });
    };

    const stripHtml = (html: string) => {
        return html?.replace(/<[^>]*>?/gm, "") || "";
    };

    console.log(currentBlogs,"currentBlogs");
    

    return (
        <section className="gt-news-section section-padding fix">
            <div className="container">
                <div className="row g-4">
                    {currentBlogs.length === 0 ? (
                        <div className="col-12 text-center py-5">
                            <p className="text-muted">No blogs found for this vendor.</p>
                        </div>
                    ) : (
                        currentBlogs.map((post: any, index: number) => (
                            <div key={post.id} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp d-flex" data-wow-delay={`${0.3 + (index % 3) * 0.2}s`}>
                                <div className="gt-news-card-item mt-0 h-100 d-flex flex-column w-100">
                                    <div className="gt-news-image">
                                        <Link href={`/blog/${slugify(post.title || post.subtitle)}`}>
                                            <img
                                                src={post.banner_url || "/assets/img/placeholder.jpg"}
                                                alt={post.title}
                                                style={{ width: '100%', objectFit: 'cover' }}
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.src = "/assets/img/placeholder.jpg";
                                                }}
                                            />
                                        </Link>
                                    </div>

                                    <div className="gt-news-content flex-grow-1 d-flex flex-column">
                                        <ul className="gt-list">
                                            <li className="d-flex align-items-center gap-2">
                                                <Calendar size={18} />
                                                {formatDate(post.created_at)}
                                            </li>
                                        </ul>
                                        <h4 className="line-clamp-2">
                                            <Link className="text-uppercase" href={`/blog/${slugify(post.title || post.subtitle)}`}>
                                                {post.title}
                                            </Link>
                                        </h4>
                                        <p className="flex-grow-1">
                                            {post.content
                                                ? `${stripHtml(post.content).slice(0, 100)}...`
                                                : "Read more about this story..."}
                                        </p>
                                        <Link href={`/blog/${slugify(post.title || post.subtitle)}`} className="icon">
                                            <ArrowRight size={18} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="d-flex justify-content-center mt-5">
                        <nav>
                            <ul className="pagination d-flex gap-2">
                                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                    <button
                                        className="page-link pagination-box"
                                        onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                        style={{
                                            cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                                            opacity: 1
                                        }}
                                    >
                                        <ChevronsLeft size={16} />
                                    </button>
                                </li>

                                {paginationRange.map((page, index) => {
                                    if (page === '...') {
                                        return (
                                            <li key={`ellipsis-${index}`} className="page-item">
                                                <span className="page-link pagination-box border-0 text-secondary" style={{ cursor: 'default' }}>
                                                    •••
                                                </span>
                                            </li>
                                        );
                                    }

                                    const isActive = currentPage === page;
                                    return (
                                        <li className="page-item" key={page}>
                                            <button
                                                className={`page-link pagination-box ${isActive ? 'active' : ''}`}
                                                onClick={() => handlePageChange(page)}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                {page}
                                            </button>
                                        </li>
                                    );
                                })}

                                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                    <button
                                        className="page-link pagination-box"
                                        onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                        style={{
                                            cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                                            opacity: 1
                                        }}
                                    >
                                        <ChevronsRight size={16} />
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                )}
            </div>
        </section>
    );
}


"use client";
import React from "react";
import Link from "next/link";
import { useCategories } from "@/context/CategoriesContext";
import { Loader2 } from "lucide-react";
import { slugify } from "@/lib/slugify";

export default function Categories() {
    const { categories: catData, isLoading }: any = useCategories();
    const FALLBACK_IMAGE = "/assets/img/placeholder-image.jpg";

    const categories = catData?.data || [];

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
                                <h1 className="wow fadeInUp text-uppercase" data-wow-delay=".3s">Categories</h1>
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
                                    Categories
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <section className="gt-game-section-5 section-padding fix">
                    <div className="container-fluid">
                        {isLoading ? (
                            <div className="col-12 d-flex align-items-center justify-content-center" style={{ minHeight: '40vh' }}>
                                <div className="spinner-border" role="status" style={{ color: '#a6d719', width: '3.5rem', height: '3.5rem' }}>
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        ) : categories.length > 0 ? (
                            <div className="row g-4">
                                {categories.map((cat: any, index: number) => (
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.2 + (index % 4) * 0.2}s`} key={cat.id}>
                                        <Link href={`/categories/${cat.slug || slugify(cat.name)}`} className="text-decoration-none">
                                            <div className="gt-gaming-card-item-5 mt-0">
                                                <div className="gt-gaming-image">
                                                    <img
                                                        src={cat.image || FALLBACK_IMAGE}
                                                        alt={cat.name}
                                                        onError={(e) => {
                                                            (e.target as HTMLImageElement).src = FALLBACK_IMAGE;
                                                        }}
                                                        style={{ height: '300px', width: '100%', objectFit: 'cover' }}
                                                    />
                                                    <div className="icon icon-permanent"><i className="fa-solid fa-arrow-right"></i></div>
                                                    <div className="gt-gaming-content content-visible">
                                                        {/* <h6>IT Fixer</h6> */}
                                                        <h3>
                                                            <span className="category-tag">{cat.name}</span>
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="col-12 text-center py-5">
                                <p className="text-white fs-4">No categories found.</p>
                            </div>
                        )}
                    </div>
                </section>
                {/* <TriggerSection /> */}
            </div>
        </div>
    );
}
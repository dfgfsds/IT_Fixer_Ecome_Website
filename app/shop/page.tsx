'use client';
import { useState } from "react";
import Link from "next/link";
import ShopWithSideCart from "@/components/ShopWithSideCart";

import { Home, Heart, CheckCircle, BadgeCheck, ChevronRight, ChevronsLeft, ChevronsRight, Minus } from "lucide-react";

export default function ShopPage() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    return (
        <>
            <ShopWithSideCart
                isCartOpen={isCartOpen}
                setIsCartOpen={setIsCartOpen}
            />

            <div id="smooth-content">

                {/* Breadcrumb */}
                <div
                    className="gt-breadcrumb-wrapper bg-cover"
                    style={{ backgroundImage: "url('assets/img/breadcrumb.png')" }}
                >
                    <div className="gt-left-shape">
                        <img src="assets/img/shape-1.png" alt="img" />
                    </div>
                    <div className="gt-right-shape">
                        <img src="assets/img/shape-2.png" alt="img" />
                    </div>
                    <div className="gt-blur-shape">
                        <img src="assets/img/breadcrumb-shape.png" alt="img" />
                    </div>

                    <div className="container">
                        <div className="gt-page-heading">
                            <div className="gt-breadcrumb-sub-title">
                                <h1 className="wow fadeInUp" data-wow-delay=".3s">Shop</h1>
                            </div>

                            <ul className="gt-breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                                <li>
                                    <a
                                        href="/"
                                        className="d-inline-flex align-items-center gap-1"
                                    >
                                        <Home size={16} className="mb-[1px]" />
                                        home :
                                    </a>
                                </li>
                                <li className="color">Shop</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="container py-5">
                    <div className="row gx-5">

                        {/* Sidebar */}
                        <div className="col-lg-3">
                            <div className="widget">
                                <h2 className="widget-title">Categories</h2>
                                <ul className="category-list">
                                    <li>Accessories <span>(2)</span></li>
                                    <li>Mouse <span>(3)</span></li>
                                    <li>Ps5 Controller <span>(2)</span></li>
                                    <li>Xbox 360 <span>(1)</span></li>
                                    <li>Headphone <span>(11)</span></li>
                                    <li>Gaming Monitor <span>(2)</span></li>
                                </ul>
                            </div>

                            <div className="widget">
                                <h2 className="widget-title">Filter by price</h2>
                                <div className="price-track"></div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="price-label text-uppercase">
                                        Price: $50 — $800
                                    </span>
                                    <button className="filter-btn text-uppercase">Filter</button>
                                </div>
                            </div>

                            <div className="widget">
                                <h2 className="widget-title">Products</h2>

                                <div className="d-flex align-items-center mb-3">
                                    <img
                                        src="https://via.placeholder.com/60"
                                        className="rounded me-3 bg-dark p-1"
                                        alt=""
                                    />
                                    <div>
                                        <div className="text-warning" style={{ fontSize: "10px" }}>
                                            ★★★★★
                                        </div>
                                        <div className="small fw-bold text-uppercase">
                                            Headphones
                                        </div>
                                        <div className="price-new" style={{ fontSize: "14px" }}>
                                            $35.00
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center mb-3">
                                    <img
                                        src="https://via.placeholder.com/60"
                                        className="rounded me-3 bg-dark p-1"
                                        alt=""
                                    />
                                    <div>
                                        <div className="text-warning" style={{ fontSize: "10px" }}>
                                            ★★★★★
                                        </div>
                                        <div className="small fw-bold text-uppercase">
                                            PS5 Controller
                                        </div>
                                        <div className="price-new" style={{ fontSize: "14px" }}>
                                            $45.00
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Play To Earn */}
                            <div className="play-earn-banner-wrapper mt-4">
                                <div
                                    className="play-earn-banner d-flex flex-column align-items-center justify-content-center text-center p-4"
                                    style={{
                                        minHeight: "260px",
                                        overflow: "visible"
                                    }}
                                >
                                    <div className="mb-3 text-success">
                                        <CheckCircle size={36} />
                                    </div>

                                    <h3 className="mb-2">Play To Earn</h3>

                                    <p className="small text-secondary mb-3 d-flex align-items-center gap-1">
                                        <BadgeCheck size={16} className="text-primary" />
                                        Free Register Now
                                    </p>

                                    <a
                                        href="#"
                                        className="read-more d-inline-flex align-items-center gap-1"
                                    >
                                        Read More
                                        <ChevronRight size={16} />
                                    </a>
                                </div>
                            </div>

                        </div>

                        {/* Products */}
                        <div className="col-lg-9">
                            <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom border-secondary">
                                <div className="col-3">
                                    <select className="form-select bg-transparent text-white border-secondary small text-uppercase">
                                        <option>Default Sorting</option>
                                    </select>
                                </div>

                                <div className="small text-uppercase fw-bold" style={{ color: "white" }}>
                                    Show
                                    <span className="bg-dark px-3 py-1 text-white ms-2 border border-secondary">
                                        09
                                    </span>
                                </div>
                            </div>

                            <div className="row g-4">
                                {[
                                    {
                                        id: 1,
                                        name: "Headphones",
                                        img: "https://i.ibb.co/Lkhm7G0/headphones.png",
                                        price: "$35.00",
                                        old: "$45.00"
                                    },
                                    {
                                        id: 2,
                                        name: "Controller",
                                        img: "https://i.ibb.co/HqL3Pnx/controller-red.png",
                                        price: "$100.00",
                                        old: "$125.00"
                                    },
                                    {
                                        id: 3,
                                        name: "PS5 Controller",
                                        img: "https://i.ibb.co/0fVfF0d/ps5.png",
                                        price: "$75.00",
                                        old: "$85.00"
                                    },
                                    {
                                        id: 4,
                                        name: "PS5 Controller",
                                        img: "https://i.ibb.co/0fVfF0d/ps5.png",
                                        price: "$75.00",
                                        old: "$85.00"
                                    },
                                    {
                                        id: 5,
                                        name: "Controller",
                                        img: "https://i.ibb.co/HqL3Pnx/controller-red.png",
                                        price: "$100.00",
                                        old: "$125.00"
                                    },
                                    {
                                        id: 6,
                                        name: "PS5 Controller",
                                        img: "https://i.ibb.co/0fVfF0d/ps5.png",
                                        price: "$75.00",
                                        old: "$85.00"
                                    }
                                ].map((item, index) => (
                                    <div className="col-md-6 col-xl-4" key={index}>
                                        <Link href={`/shop/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <div className="product-card" style={{ cursor: 'pointer' }}>
                                                <div className="img-wrapper">
                                                    <img src={item.img} alt={item.name} />
                                                    <div
                                                        className="add-to-cart-overlay"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            e.stopPropagation();
                                                            setIsCartOpen(true);
                                                        }}
                                                    >
                                                        Add to Cart
                                                    </div>

                                                </div>

                                                <div className="product-info">
                                                    <h3 className="product-name d-flex align-items-center justify-content-between">
                                                        {item.name}
                                                        <Heart size={18} className="wishlist-btn mt-[1px]" />
                                                    </h3>

                                                    <span className="product-cat">Controller</span>

                                                    <div>
                                                        <span className="price-new">{item.price}</span>
                                                        <span className="price-old">{item.old}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}


                            </div>

                            {/* Pagination */}
                            <div className="d-flex justify-content-center mt-5">
                                <nav>
                                    <ul className="pagination d-flex gap-2">
                                        <li className="page-item">
                                            <a className="page-link pagination-box">
                                                <ChevronsLeft size={16} />
                                            </a>
                                        </li>

                                        <li className="page-item">
                                            <a className="page-link pagination-box active">
                                                1
                                            </a>
                                        </li>

                                        <li className="page-item">
                                            <a className="page-link pagination-box">
                                                2
                                            </a>
                                        </li>

                                        <li className="page-item">
                                            <a className="page-link pagination-box">
                                                <Minus size={16} />
                                            </a>
                                        </li>

                                        <li className="page-item">
                                            <a className="page-link pagination-box">
                                                <ChevronsRight size={16} />
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </>
    );
}

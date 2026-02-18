'use client';

import Link from "next/link";
import { Heart } from "lucide-react";

export default function BestGameSection({ setIsCartOpen }) {

    const products = [
        {
            id: 1,
            name: "Gaming Headphones",
            img: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=600&q=80",
            price: "$35.00",
            old: "$45.00"
        },
        {
            id: 2,
            name: "Game Controller",
            img: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=600&q=80",
            price: "$100.00",
            old: "$125.00"
        },
        {
            id: 3,
            name: "PS5 Controller",
            img: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=600&q=80",
            price: "$75.00",
            old: "$85.00"
        },
        {
            id: 4,
            name: "PS5 Controller – White",
            img: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=600&q=80",
            price: "$75.00",
            old: "$85.00"
        }
    ];


    return (
        <section className="game-section-2 game-section-10 fix section-padding">
            <div className="container">
                <div className="section-title-area">
                    <div className="section-title mb-0">
                        <h6 className="subtitle text-uppercase">our best products</h6>
                        <h2>
                            Our Best <br /> Gaming Products
                        </h2>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="swiper game-slider-2">
                    <div className="swiper-wrapper">

                        {products.map((item) => (
                            <div className="swiper-slide" key={item.id}>
                                {/* ✅ SHOP PAGE CARD */}
                                <Link
                                    href={`/shop/${item.id}`}
                                    style={{ textDecoration: "none", color: "inherit" }}
                                >
                                    <div className="product-card">
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
                                            <h3 className="product-name d-flex justify-content-between">
                                                {item.name}
                                                <Heart size={18} />
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
                </div>
            </div>

            {/* 🔥 EXISTING NAV + PAGINATION (NO CHANGE) */}
            <div className="container">
                <div className="game-slider-pagination">
                    <div className="game-progress p-relative">
                        <div className="game-swiper-pagination"></div>
                    </div>
                    <div className="array-button d-flex align-items-center">
                        <button className="array-prev">←</button>
                        <button className="array-next">→</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

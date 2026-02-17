"use client";
import { Home, Heart, Facebook, Twitter, Instagram, Linkedin, CreditCard, Banknote, Smartphone, Monitor, Star, Check } from "lucide-react";
import { useState } from "react";

export default function ProductDetails() {
    const [activeTab, setActiveTab] = useState<"description" | "additional" | "reviews">("description");
    const [saveInfo, setSaveInfo] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value) && value >= 1) {
            setQuantity(value);
        }
    };

    return (

        <div id="smooth-content">

            {/* Breadcrumb */}
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
                            <h1 className="wow fadeInUp" data-wow-delay=".3s">Shop Details</h1>
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
                            <li className="color">Shop Details</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container product-wrapper">

                {/* PRODUCT TOP */}
                <div className="row gx-5">
                    {/* LEFT */}
                    <div className="col-lg-6">
                        <div className="product-image-box-dark">
                            <img src="/assets/img/offcanvas-image.png" alt="product" />
                        </div>

                        <div className="product-thumbs-dark">
                            <div className="thumb-item active">
                                <img src="/thumb1.png" alt="thumb" />
                            </div>
                            <div className="thumb-item">
                                <img src="/thumb2.png" alt="thumb" />
                            </div>
                            <div className="thumb-item">
                                <img src="/thumb3.png" alt="thumb" />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="col-lg-6 product-info-dark">
                        <span className="product-badge-dark">Particle Pack</span>

                        <h1 className="product-title-dark">Jiang Cheung</h1>

                        <p className="rating-text-dark">
                            Owned by – <span className="reviews-count">3 customer reviews</span>
                        </p>

                        <p className="desc-dark">
                            Hello I Am Sverker Lind They're A Gathering Of Individuals Or Teams That Compete Best That Againt One Other.
                        </p>

                        <div className="price-row-dark">
                            <div>
                                <span className="price-dark">$35.00</span>
                                <del className="price-old-dark">$45.00</del>
                            </div>
                            <button className="wishlist-btn-dark">
                                WISHLIST <Heart size={16} />
                            </button>
                        </div>

                        <div className="cart-row-dark">
                            <div className="quantity-box-dark">
                                <input
                                    type="number"
                                    min="1"
                                    value={quantity}
                                    onChange={handleQuantityChange}
                                    onBlur={() => {
                                        if (quantity < 1) setQuantity(1);
                                    }}
                                />
                            </div>
                            <button className="add-to-cart-btn-dark">ADD TO CART</button>
                        </div>

                        <div className="meta-dark">
                            <p><span>SKU</span> TWS0027</p>
                            <p><span>CATEGORY</span> ACCESSORIES, GAME,</p>
                            <p><span>TAGS</span> ONLINE, PRODUCT,</p>
                        </div>

                        <div className="product-footer-dark">
                            <div className="share-icons">
                                <span>SHARE :</span>
                                <a href="#"><Facebook size={18} /></a>
                                <a href="#"><Twitter size={18} /></a>
                                <a href="#"><Instagram size={18} /></a>
                                <a href="#"><Linkedin size={18} /></a>
                            </div>
                            {/* <div className="payment-icons">
                                    <CreditCard size={24} />
                                    <Smartphone size={24} />
                                    <Banknote size={24} />
                                    <Monitor size={24} />
                                </div> */}
                        </div>
                    </div>
                </div>

                {/* TABS */}
                <div className="product-tabs-dark">
                    <div className="tab-head-dark">
                        <button
                            className={`tab-btn-dark ${activeTab === "description" ? "active" : ""}`}
                            onClick={() => setActiveTab("description")}
                        >
                            DESCRIPTION
                        </button>
                        <button
                            className={`tab-btn-dark ${activeTab === "additional" ? "active" : ""}`}
                            onClick={() => setActiveTab("additional")}
                        >
                            ADDITIONAL INFORMATION
                        </button>
                        <button
                            className={`tab-btn-dark ${activeTab === "reviews" ? "active" : ""}`}
                            onClick={() => setActiveTab("reviews")}
                        >
                            REVIEWS
                        </button>
                    </div>

                    <div className="tab-body-dark">
                        {activeTab === "description" && (
                            <div className="description-content-dark">
                                <h4 className="why-choose-title">Why Choose Product?</h4>
                                <p className="why-choose-desc">
                                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Dolore Magna Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Duis Aute Iruremad Thats Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla Pariatur.
                                </p>
                                <ul className="why-choose-list">
                                    <li>
                                        <span className="list-icon"></span>
                                        Creat by cotton fabric with soft and smooth
                                    </li>
                                </ul>
                            </div>
                        )}

                        {activeTab === "additional" && (
                            <div className="additional-content-dark">
                                <div className="additional-info-item">
                                    <span className="info-label">WEIGHT</span>
                                    <span className="info-value">0.5 KG</span>
                                </div>
                                <div className="additional-info-item">
                                    <span className="info-label">DIMENSIONS</span>
                                    <span className="info-value">24 * 1 * 2 CM</span>
                                </div>
                                <div className="additional-info-item">
                                    <span className="info-label">WEIGHT</span>
                                    <span className="info-value">0.5KG, 1.5KG, 1KG, 2.5KG, 2KG, 3KG</span>
                                </div>
                            </div>
                        )}

                        {activeTab === "reviews" && (
                            <div className="reviews-content-dark">
                                <h4 className="reviews-title">REVIEW FOR DOUND DIAL WATCH</h4>

                                <div className="review-card">
                                    <div className="review-avatar">
                                        <img src="/assets/img/testimonial/author-1.jpg" alt="user" onError={(e) => e.currentTarget.src = "https://placehold.co/100x100"} />
                                    </div>
                                    <div className="review-content">
                                        <div className="review-header">
                                            <div>
                                                <h5 className="review-author">JANELLE SMITH</h5>
                                                <span className="review-date"> - OCTOBER 11, 2024</span>
                                            </div>
                                            <div className="review-stars">
                                                <Star size={14} fill="#a6d719" strokeWidth={0} />
                                                <Star size={14} fill="#a6d719" strokeWidth={0} />
                                                <Star size={14} fill="#a6d719" strokeWidth={0} />
                                                <Star size={14} fill="#a6d719" strokeWidth={0} />
                                                <Star size={14} fill="#a6d719" strokeWidth={0} />
                                            </div>
                                        </div>
                                        <p className="review-text">
                                            Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Yenim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris.
                                        </p>
                                    </div>
                                </div>

                                <div className="add-review-section">
                                    <h4 className="add-review-title">ADD A REVIEW</h4>
                                    <p className="add-review-note">Your Email Address Will Not Be Published. Required Fields Are Marked *</p>

                                    <div className="rating-select mb-4">
                                        <span className="rating-label">Your Rating *</span>
                                        <div className="stars-input">
                                            <Star size={16} className="star-empty" />
                                            <Star size={16} className="star-empty" />
                                            <Star size={16} className="star-empty" />
                                            <Star size={16} className="star-empty" />
                                            <Star size={16} className="star-empty" />
                                        </div>
                                    </div>

                                    <form className="review-form">
                                        <div className="mb-4">
                                            <textarea
                                                className="form-control-dark"
                                                rows={5}
                                                placeholder="Your Review *"
                                            ></textarea>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <input
                                                    type="text"
                                                    className="form-control-dark"
                                                    placeholder="Your Name *"
                                                />
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <input
                                                    type="email"
                                                    className="form-control-dark"
                                                    placeholder="Your Email *"
                                                />
                                            </div>
                                        </div>

                                        <div
                                            className="form-check mb-4 custom-checkbox-wrapper"
                                            onClick={() => setSaveInfo(!saveInfo)}
                                            style={{ cursor: 'pointer', paddingLeft: 0, display: 'flex', alignItems: 'center' }}
                                        >
                                            <div className={`custom-check-box-dark ${saveInfo ? 'active' : ''}`}>
                                                {saveInfo && <Check size={14} color="#FFD700" strokeWidth={4} />}
                                            </div>
                                            <label className="form-check-label-dark" style={{ cursor: 'pointer' }}>
                                                Your Email Address Will Remain Private. Mandatory Fields Are Indicated.*
                                            </label>
                                        </div>

                                        <button type="submit" className="submit-review-btn">
                                            SUBMIT
                                        </button>
                                    </form>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </div>
    )
}
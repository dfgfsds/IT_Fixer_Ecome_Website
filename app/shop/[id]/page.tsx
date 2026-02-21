"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Home, Heart, Facebook, Twitter, Instagram, Linkedin, Star, Check, Loader2, Minus, Plus } from "lucide-react";
import { useProducts } from "@/context/ProductsContext";
import ShopWithSideCart from "@/components/ShopWithSideCart";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { getProductVariantCartItemUpdate } from "@/api-endpoints/products";
import { updateCartitemsApi, deleteCartitemsApi } from "@/api-endpoints/CartsApi";
import { useVendor } from "@/context/VendorContext";
import { useCartItem } from "@/context/CartItemContext";
import { useQueryClient, InvalidateQueryFilters } from "@tanstack/react-query";
import { toast } from "sonner";

export default function ProductDetails() {
    const { isAuthenticated } = useUser();
    const router = useRouter();
    const { id } = useParams();
    const { products: apiData, isLoading }: any = useProducts();
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { vendorId } = useVendor();
    const queryClient = useQueryClient();

    const { cartItem }: any = useCartItem();

    const foundInCart = cartItem?.data?.find((c: any) => Number(c.product) === Number(id));
    const cartQty = foundInCart?.quantity || 0;
    const cartId = foundInCart?.id || null;

    const handleAddToCart = async () => {
        if (!isAuthenticated) return router.push("/login");
        const payload = {
            product: Number(id),
            cart: localStorage.getItem('cartId'),
            user: localStorage.getItem('userId'),
            vendor: vendorId,
            quantity: quantity,
            created_by: 'user'
        };
        try {
            await getProductVariantCartItemUpdate('', payload);
            queryClient.invalidateQueries(["getCartitemsData"] as InvalidateQueryFilters);
            setIsCartOpen(true);
        } catch (e) { toast.error("Error adding to cart"); }
    };

    const handleUpdateQty = async (id: any, type: 'increase' | 'decrease', currentQty: number) => {
        try {
            if (type === 'decrease' && currentQty === 1) {
                await deleteCartitemsApi(`${id}/`);
            } else {
                await updateCartitemsApi(`${id}/${type}/`);
            }
            queryClient.invalidateQueries(["getCartitemsData"] as InvalidateQueryFilters);
        } catch (e) { console.error(e); }
    };

    const [activeTab, setActiveTab] = useState<"description" | "additional" | "reviews">("description");
    const [saveInfo, setSaveInfo] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [activeImgIndex, setActiveImgIndex] = useState(0);

    const product = apiData?.data?.find((p: any) => String(p.id) === String(id));
    const images = product?.image_urls || [];

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value) && value >= 1) setQuantity(value);
    };

    if (isLoading) {
        return (
            <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "100vh", backgroundColor: "#0b0e13" }}>
                <Loader2 className="animate-spin text-success mb-3" size={50} />
                <p className="text-white">Fetching product details...</p>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="text-center py-5 text-white" style={{ backgroundColor: "#0b0e13", minHeight: "50vh" }}>
                <h2>Product Not Found</h2>
                <a href="/shop" className="text-success">Return to Shop</a>
            </div>
        );
    }

    return (
        <>
            <ShopWithSideCart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />

            <div id="smooth-content">
                {/* Breadcrumb */}
                <div className="gt-breadcrumb-wrapper bg-cover" style={{ backgroundImage: "url('/assets/img/breadcrumb.png')" }}>
                    <div className="gt-left-shape"><img src="/assets/img/shape-1.png" alt="img" /></div>
                    <div className="gt-right-shape"><img src="/assets/img/shape-2.png" alt="img" /></div>
                    <div className="gt-blur-shape"><img src="/assets/img/breadcrumb-shape.png" alt="img" /></div>

                    <div className="container">
                        <div className="gt-page-heading">
                            <div className="gt-breadcrumb-sub-title">
                                <h1 className="wow fadeInUp" data-wow-delay=".3s">{product.name}</h1>
                            </div>
                            <ul className="gt-breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                                <li><a href="/" className="d-inline-flex align-items-center gap-1"><Home size={16} /> home :</a></li>
                                <li className="color">Shop Details</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="container product-wrapper">
                    <div className="row gx-5">
                        {/* Images */}
                        <div className="col-lg-6">
                            <div className="product-image-box-dark">
                                <img src={images[activeImgIndex] || '/assets/img/offcanvas-image.png'} alt={product.name} />
                            </div>

                            <div className="product-thumbs-dark">
                                {images.map((img: string, idx: number) => (
                                    <div
                                        key={idx}
                                        className={`thumb-item ${activeImgIndex === idx ? 'active' : ''}`}
                                        onClick={() => setActiveImgIndex(idx)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img src={img} alt={`thumb-${idx}`} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="col-lg-6 product-info-dark">
                            <span className="product-badge-dark">{product.brand_name || 'Premium Gift'}</span>

                            <h1 className="product-title-dark">{product.name}</h1>

                            <p className="rating-text-dark">
                                Category – <span className="reviews-count">{product.category_name}</span>
                            </p>

                            {/* 
                            <div
                                className="desc-dark mb-4"
                                dangerouslySetInnerHTML={{ __html: product.description.substring(0, 150) + "..." }}
                            /> 
                            */}

                            <div className="price-row-dark">
                                <div>
                                    <span className="price-dark">₹{product.price}</span>
                                    {product.discount > 0 && <del className="price-old-dark ms-2">₹{product.discount}</del>}
                                </div>
                                <button className="wishlist-btn-dark">
                                    WISHLIST <Heart size={16} />
                                </button>
                            </div>

                            <div className="cart-row-dark">
                                {!foundInCart ? (
                                    <>
                                        {/* <div className="quantity-box-dark">
                                            <input
                                                type="number"
                                                min="1"
                                                value={quantity}
                                                onChange={handleQuantityChange}
                                                onBlur={() => { if (quantity < 1) setQuantity(1); }}
                                            />
                                        </div> */}
                                        <button
                                            className="add-to-cart-btn-dark"
                                            onClick={handleAddToCart}
                                        >
                                            ADD TO CART
                                        </button>
                                    </>
                                ) : (
                                    <div className="d-flex align-items-center gap-3 bg-dark p-2 rounded border border-secondary" style={{ minWidth: '150px', justifyContent: 'center' }}>
                                        <button
                                            className="btn btn-sm text-white p-0 d-flex align-items-center"
                                            onClick={() => handleUpdateQty(cartId, 'decrease', cartQty)}
                                            style={{ background: 'none', border: 'none' }}
                                        >
                                            <Minus size={18} />
                                        </button>
                                        <span className="fw-bold text-white fs-5 px-3 border-start border-end border-secondary">{cartQty}</span>
                                        <button
                                            className="btn btn-sm text-white p-0 d-flex align-items-center"
                                            onClick={() => handleUpdateQty(cartId, 'increase', cartQty)}
                                            style={{ background: 'none', border: 'none' }}
                                        >
                                            <Plus size={18} />
                                        </button>
                                    </div>
                                )}
                            </div>

                            <div className="meta-dark">
                                <p><span>SKU</span> {product.product_code || `PRD-${product.id}`}</p>
                                <p><span>CATEGORY</span> {product.category_name.toUpperCase()}</p>
                                <p><span>STOCK</span> {product.stock_quantity > 0 ? 'IN STOCK' : 'OUT OF STOCK'}</p>
                            </div>

                            <div className="product-footer-dark">
                                <div className="share-icons">
                                    <span>SHARE :</span>
                                    <a href="#"><Facebook size={18} /></a>
                                    <a href="#"><Twitter size={18} /></a>
                                    <a href="#"><Instagram size={18} /></a>
                                    <a href="#"><Linkedin size={18} /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* TABS */}
                    <div className="product-tabs-dark">
                        <div className="tab-head-dark">
                            <button className={`tab-btn-dark ${activeTab === "description" ? "active" : ""}`} onClick={() => setActiveTab("description")}>DESCRIPTION</button>
                            <button className={`tab-btn-dark ${activeTab === "additional" ? "active" : ""}`} onClick={() => setActiveTab("additional")}>ADDITIONAL INFO</button>
                            <button className={`tab-btn-dark ${activeTab === "reviews" ? "active" : ""}`} onClick={() => setActiveTab("reviews")}>REVIEWS</button>
                        </div>

                        <div className="tab-body-dark">
                            {activeTab === "description" && (
                                <div className="description-content-dark">
                                    <h4 className="why-choose-title">Product Description</h4>
                                    <div
                                        className="why-choose-desc"
                                        dangerouslySetInnerHTML={{ __html: product.description }}
                                    />
                                </div>
                            )}

                            {activeTab === "additional" && (
                                <div className="additional-content-dark">
                                    <div className="additional-info-item">
                                        <span className="info-label">WEIGHT</span>
                                        <span className="info-value">0.5 KG</span>
                                    </div>
                                    <div className="additional-info-item">
                                        <span className="info-label">ID</span>
                                        <span className="info-value">#{product.id}</span>
                                    </div>
                                </div>
                            )}

                            {activeTab === "reviews" && (
                                <div className="reviews-content-dark">
                                    <h4 className="reviews-title">REVIEWS FOR {product.name.toUpperCase()}</h4>
                                    <p className="text-secondary mb-4">No reviews yet. Be the first to review!</p>

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
        </>
    );
}
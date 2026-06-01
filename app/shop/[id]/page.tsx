"use client";
import React, { useState, useEffect } from "react";
import { useParams, useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { Home, Facebook, X, Instagram, Linkedin, Star, Check, Minus, Plus, ShoppingBag } from "lucide-react";
import { FaWhatsapp } from 'react-icons/fa';
import { useProducts } from "@/context/ProductsContext";
import ShopWithSideCart from "@/components/ShopWithSideCart";
import { useUser } from "@/context/UserContext";
import { getProductVariantCartItemUpdate } from "@/api-endpoints/products";
import { updateCartitemsApi, deleteCartitemsApi } from "@/api-endpoints/CartsApi";
import { useVendor } from "@/context/VendorContext";
import { useCartItem } from "@/context/CartItemContext";
import { useQuery, useQueryClient, InvalidateQueryFilters } from "@tanstack/react-query";
import { toast } from "sonner";
import { handleApiError } from "@/lib/error-handler";
import { getProductWithVariantSizeApi } from "@/api-endpoints/products";
import { slugify } from "@/lib/slugify";

export default function ProductDetails() {
    const { isAuthenticated } = useUser();
    const router = useRouter();
    const { id } = useParams();
    const FALLBACK_IMAGE = "/assets/img/placeholder-image.jpg";
    const { products: apiData, isLoading }: any = useProducts();
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { vendorId } = useVendor();
    const { cartItem }: any = useCartItem();
    const queryClient = useQueryClient();

    const [selectedVariant, setSelectedVariant] = useState<any | null>(null);
    const [selectedSize, setSelectedSize] = useState<any | null>(null);
    const [activeImgIndex, setActiveImgIndex] = useState(0);
    const [activeTab, setActiveTab] = useState<"description" | "additional" | "reviews">("description");
    const [saveInfo, setSaveInfo] = useState(false);
    const pathname = usePathname();
    const [shareUrl, setShareUrl] = useState("");


    const product = apiData?.data?.find((p: any) => slugify(p.name) === slugify(id)) || null;
    const images = product?.image_urls || [];

    const hasVariants = product?.variants?.length > 0;
    const hasSizes = selectedVariant?.sizes?.length > 0;

    useEffect(() => {
        if (!pathname) return;
        setShareUrl(`${window.location.origin}${pathname}`);
    }, [pathname]);

    const productShareText = product?.name
        ? `Check out ${product.name} on IT Fixer!`
        : "Check out this product on IT Fixer!";
    const encodedShareUrl = encodeURIComponent(shareUrl);
    const encodedShareText = encodeURIComponent(productShareText);

    // const facebookShareUrl = shareUrl
    //     ? `https://www.facebook.com/sharer/sharer.php?u=${encodedShareUrl}`
    //     : "#";
    // const twitterShareUrl = shareUrl
    //     ? `https://x.com/intent/tweet?url=${encodedShareUrl}&text=${encodedShareText}`
    //     : "#";
    // const whatsappShareUrl = shareUrl
    //     ? `https://wa.me/?text=${encodedShareText}%20${encodedShareUrl}`
    //     : "#";
    // const linkedinShareUrl = shareUrl
    //     ? `https://www.linkedin.com/sharing/share-offsite/?url=${encodedShareUrl}`
    //     : "#";
    // const instagramShareUrl = "https://www.instagram.com/";

    // const handleInstagramShare = async (event: React.MouseEvent<HTMLAnchorElement>) => {
    //     event.preventDefault();
    //     if (!shareUrl) {
    //         toast.error("Unable to copy share link right now.");
    //         return;
    //     }

    //     try {
    //         await navigator.clipboard.writeText(shareUrl);
    //         toast.success("Product link copied! Paste it into Instagram.");
    //     } catch (error) {
    //         toast.error("Copy failed. Please try again.");
    //     }
    // };

    const isSelectionComplete = () => {
        if (hasVariants && !selectedVariant) return false;
        if (hasVariants && hasSizes && !selectedSize) return false;
        return true;
    };

    const getDisplayPricing = () => {
        if (selectedSize) {
            return {
                price: Number(selectedSize.product_size_price),
                discount: Number(selectedSize.product_size_discount),
            };
        }
        if (selectedVariant) {
            return {
                price: Number(selectedVariant.product_variant_price),
                discount: Number(selectedVariant.product_variant_discount),
            };
        }
        return {
            price: Number(product?.price),
            discount: Number(product?.discount),
        };
    };

    const { price, discount } = getDisplayPricing();

    const getMatchingCartItem = () => {
        if (!cartItem?.data) return null;
        if (selectedSize) {
            return cartItem.data.find((item: any) => item.product_size === selectedSize.id);
        }
        if (selectedVariant) {
            return cartItem.data.find((item: any) => item.product_variant === selectedVariant.id);
        }
        return cartItem.data.find((item: any) =>
            !item.product_variant &&
            !item.product_size &&
            Number(item.product) === Number(id)
        );
    };

    const matchedCartItem = getMatchingCartItem();
    const cartQty = matchedCartItem?.quantity || 0;
    const cartId = matchedCartItem?.id || null;

    const handleAddToCart = async () => {
        if (!isAuthenticated) return router.push("/login");

        let productPayload = {};
        if (selectedSize?.id) {
            productPayload = { product_size: selectedSize.id };
        } else if (selectedVariant?.id) {
            productPayload = { product_variant: selectedVariant.id };
        } else {
            productPayload = { product: product?.id };
        }

        const payload = {
            cart: localStorage.getItem('cartId'),
            user: localStorage.getItem('userId'),
            vendor: vendorId,
            quantity: 1,
            created_by: 'user',
            ...productPayload
        };

        try {
            await getProductVariantCartItemUpdate('', payload);
            queryClient.invalidateQueries(["getCartitemsData"] as InvalidateQueryFilters);
            queryClient.invalidateQueries(["getCartItemsDetailed"] as InvalidateQueryFilters);
            setIsCartOpen(true);
            toast.success("Added to cart");
        } catch (e) {
            toast.error(handleApiError(e));
        }
    };

    const handleUpdateQty = async (id: any, type: 'increase' | 'decrease', currentQty: number) => {
        try {
            if (type === 'decrease' && currentQty === 1) {
                await deleteCartitemsApi(`${id}/`);
                toast.success("Item removed from cart");
            } else {
                await updateCartitemsApi(`${id}/${type}/`);
            }
            queryClient.invalidateQueries(["getCartitemsData"] as InvalidateQueryFilters);
            queryClient.invalidateQueries(["getCartItemsDetailed"] as InvalidateQueryFilters);
        } catch (e) {
            toast.error(handleApiError(e));
        }
    };

    const currentUrl =
        typeof window !== "undefined"
            ? window.location.href
            : "";

    const facebookShareUrl =
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;

    const twitterShareUrl =
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}`;

    const whatsappShareUrl =
        `https://wa.me/?text=${encodeURIComponent(currentUrl)}`;

    const linkedinShareUrl =
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;

    const handleInstagramShare = (
        e: React.MouseEvent
    ) => {

        e.preventDefault();

        const currentUrl =
            window.location.href;

        navigator.clipboard.writeText(
            currentUrl
        );

        window.location.href =
            "instagram://app";

        toast.success(
            "Link copied! Paste it in Instagram."
        );
    };

    if (isLoading) {
        return (
            <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#0b0e13' }}>
                <div className="spinner-border" role="status" style={{ color: '#a6d719', width: '3.5rem', height: '3.5rem', borderWidth: '0.3em' }}>
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="d-flex align-items-center justify-content-center flex-column" style={{ minHeight: '100vh', backgroundColor: '#0b0e13', color: '#fff' }}>
                <div className="mb-3">
                    <ShoppingBag size={40} style={{ color: '#a6d719', opacity: 1 }} />
                </div>
                <h2 className="mb-2 text-uppercase" style={{ fontFamily: "'Days One', sans-serif", fontSize: '28px' }}>Product Not Found</h2>
                <p className="text-secondary mb-4" style={{ fontSize: '16px' }}>The product you are looking for might have been removed or is temporarily unavailable.</p>
                <Link href="/shop">
                    <button className="vs-btn">
                        RETURN TO SHOP
                    </button>
                </Link>
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
                                <h1 className="wow fadeInUp" style={{ lineHeight: "1.1" }} data-wow-delay=".3s">{product.name}</h1>
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
                                    Shop Details
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="container product-wrapper">
                    <div className="row gx-5">
                        {/* Image Gallery */}
                        <div className="col-lg-6">
                            <div className="product-image-box-dark">
                                <img
                                    src={images[activeImgIndex] || FALLBACK_IMAGE}
                                    alt={product.name}
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = FALLBACK_IMAGE;
                                    }}
                                />
                            </div>

                            <div className="product-thumbs-dark">
                                {images.map((img: string, idx: number) => (
                                    <div
                                        key={idx}
                                        className={`thumb-item ${activeImgIndex === idx ? 'active' : ''}`}
                                        onClick={() => setActiveImgIndex(idx)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img
                                            src={img || FALLBACK_IMAGE}
                                            alt={`thumb-${idx}`}
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = FALLBACK_IMAGE;
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="col-lg-6 product-info-dark">
                            <span className="product-badge-dark text-white">{product.brand_name || 'Premium Gift'}</span>

                            <h1 className="product-title-dark">{product.name}</h1>

                            <p className="rating-text-dark text-white">
                                Category – <span className="reviews-count">{product.category_name}</span>
                            </p>

                            <div className="price-row-dark mb-4">
                                <div>
                                    <span className="price-dark">₹{price}</span>
                                    {discount > 0 && price !== discount && (
                                        <del className="price-old-dark ms-2">₹{discount}</del>
                                    )}
                                </div>
                            </div>

                            {/* --- VARIANTS SECTION --- */}
                            {hasVariants && (
                                <div className="variant-selection-section mb-4">
                                    <h6 className="text-white mb-3 text-uppercase small fw-bold">Select Variant:</h6>
                                    <div className="d-flex flex-wrap gap-3">
                                        {product.variants
                                            .filter((v: any) => v.product_variant_status === true)
                                            .map((v: any) => (
                                                <div
                                                    key={v.id}
                                                    className={`variant-card ${selectedVariant?.id === v.id ? 'active' : ''}`}
                                                    onClick={() => {
                                                        setSelectedVariant(v);
                                                        setSelectedSize(null);
                                                    }}
                                                >
                                                    <img
                                                        src={v.product_variant_image_urls?.[0] || images[0] || FALLBACK_IMAGE}
                                                        alt={v.product_variant_title}
                                                        onError={(e) => {
                                                            (e.target as HTMLImageElement).src = FALLBACK_IMAGE;
                                                        }}
                                                    />
                                                    <span title={v.product_variant_title}>{v.product_variant_title}</span>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            )}

                            {/* --- SIZES SECTION --- */}
                            {hasSizes && (
                                <div className="size-selection-section mb-4">
                                    <h6 className="text-white mb-3 text-uppercase small fw-bold">Select Size:</h6>
                                    <div className="d-flex flex-wrap gap-2">
                                        {selectedVariant.sizes
                                            .filter((s: any) => s.product_size_status === true)
                                            .map((s: any) => (
                                                <button
                                                    key={s.id}
                                                    className={`size-pill ${selectedSize?.id === s.id ? 'active' : ''}`}
                                                    onClick={() => setSelectedSize(s)}
                                                >
                                                    {s.product_size}
                                                </button>
                                            ))}
                                    </div>
                                </div>
                            )}

                            <div className="cart-row-dark">
                                {cartQty === 0 ? (
                                    <button
                                        className="vs-btn cart-animation-item"
                                        onClick={handleAddToCart}
                                        disabled={!isSelectionComplete()}
                                    >
                                        {isSelectionComplete() ? (
                                            <><ShoppingBag size={14} className="me-1" /> ADD TO CART</>
                                        ) : "SELECT VARIANT"}
                                    </button>
                                ) : (
                                    <div className="d-flex align-items-center gap-3 bg-dark p-2 rounded border border-secondary" style={{ maxWidth: '140px', justifyContent: 'center' }}>
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

                            <div className="meta-dark mt-4 border-top border-secondary pt-4">
                                <p><span>SKU</span> {product.product_code || `PRD-${product.id}`}</p>
                                <p><span>CATEGORY</span> {product.category_name?.toUpperCase()}</p>
                                <p><span>STOCK</span> {product.stock_quantity > 0 ? 'IN STOCK' : 'OUT OF STOCK'}</p>
                            </div>

                            <div className="product-footer-dark">
                                <div className="share-icons">
                                    <span>SHARE :</span>
                                    <a
                                        href={facebookShareUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Share on Facebook"
                                    >
                                        <Facebook size={18} />
                                    </a>
                                    <a
                                        href={twitterShareUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Share on X"
                                    >
                                        <X size={18} />
                                    </a>
                                    <a
                                        href={whatsappShareUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Share on WhatsApp"
                                    >
                                        <FaWhatsapp size={18} />
                                    </a>
                                    <a
                                        href="#"
                                        onClick={handleInstagramShare}
                                        aria-label="Copy product link for Instagram"
                                    >
                                        <Instagram size={18} />
                                    </a>
                                    <a
                                        href={linkedinShareUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Share on LinkedIn"
                                    >
                                        <Linkedin size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="product-tabs-dark mt-5">
                        <div className="tab-head-dark">
                            <button className={`tab-btn-dark ${activeTab === "description" ? "active" : ""}`} onClick={() => setActiveTab("description")}>DESCRIPTION</button>
                            {/* <button className={`tab-btn-dark ${activeTab === "additional" ? "active" : ""}`} onClick={() => setActiveTab("additional")}>ADDITIONAL INFO</button> */}
                            {/* <button className={`tab-btn-dark ${activeTab === "reviews" ? "active" : ""}`} onClick={() => setActiveTab("reviews")}>REVIEWS</button> */}
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
                                <div className="reviews-content-dark text-secondary">
                                    <h4 className="reviews-title text-white">REVIEWS FOR {product.name.toUpperCase()}</h4>
                                    <p className="mb-4">No reviews yet. Be the first to review!</p>
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

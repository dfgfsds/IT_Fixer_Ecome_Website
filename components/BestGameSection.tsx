'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { Heart, Minus, Plus } from "lucide-react";
import { useProducts } from "@/context/ProductsContext";
import ShopWithSideCart from "@/components/ShopWithSideCart";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { useVendor } from "@/context/VendorContext";
import { useCartItem } from "@/context/CartItemContext";
import { useQueryClient, InvalidateQueryFilters } from "@tanstack/react-query";
import { getProductVariantCartItemUpdate } from "@/api-endpoints/products";
import { updateCartitemsApi, deleteCartitemsApi } from "@/api-endpoints/CartsApi";
import { toast } from "sonner";

export default function BestGameSection() {
    const { isAuthenticated } = useUser();
    const router = useRouter();
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { products, isLoading }: any = useProducts();
    const { vendorId } = useVendor();
    const { cartItem }: any = useCartItem();
    const queryClient = useQueryClient();

    const handleAddToCart = async (productId: number) => {
        if (!isAuthenticated) return router.push("/login");
        const payload = {
            product: productId,
            cart: localStorage.getItem('cartId'),
            user: localStorage.getItem('userId'),
            vendor: vendorId,
            quantity: 1,
            created_by: 'user'
        };
        try {
            await getProductVariantCartItemUpdate('', payload);
            queryClient.invalidateQueries(["getCartitemsData"] as InvalidateQueryFilters);
            setIsCartOpen(true);
        } catch (e) { toast.error("Error adding to cart"); }
    };

    const handleUpdateQty = async (cartId: any, type: 'increase' | 'decrease', currentQty: number) => {
        try {
            if (type === 'decrease' && currentQty === 1) {
                await deleteCartitemsApi(`${cartId}/`);
            } else {
                await updateCartitemsApi(`${cartId}/${type}/`);
            }
            queryClient.invalidateQueries(["getCartitemsData"] as InvalidateQueryFilters);
        } catch (e) { console.error(e); }
    };

    useEffect(() => {
        if (!isLoading && products?.data?.length > 0) {
            const timer = setTimeout(() => {
                const swiperEl = document.querySelector('.game-slider-2') as any;
                if (swiperEl) {
                    if (swiperEl.swiper) {
                        swiperEl.swiper.update();
                    } else if (typeof (window as any).Swiper !== 'undefined') {
                        new (window as any).Swiper(".game-slider-2", {
                            spaceBetween: 30,
                            speed: 1300,
                            loop: products.data.length > 1,
                            centeredSlides: true,
                            autoplay: {
                                delay: 2000,
                                disableOnInteraction: false,
                            },
                            pagination: {
                                el: ".game-swiper-pagination",
                                type: "progressbar"
                            },
                            navigation: {
                                nextEl: ".array-prev",
                                prevEl: ".array-next",
                            },
                            breakpoints: {
                                1199: { slidesPerView: 3.9 },
                                991: { slidesPerView: 2.4 },
                                767: { slidesPerView: 2 },
                                575: { slidesPerView: 1.4 },
                                0: { slidesPerView: 1.3 },
                            },
                        });
                    }
                }
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [isLoading, products]);

    return (
        <section className="game-section-2 game-section-10 fix section-padding">
            <ShopWithSideCart
                isCartOpen={isCartOpen}
                setIsCartOpen={setIsCartOpen}
            />
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
                {isLoading ? (
                    <div className="text-center py-5">
                        <div className="spinner-border text-success" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <p className="mt-2 text-white">Loading products...</p>
                    </div>
                ) : products?.data?.length > 0 ? (
                    <div className="swiper game-slider-2">
                        <div className="swiper-wrapper">
                            {products.data.map((item: any) => {
                                const foundInCart = cartItem?.data?.find((c: any) => Number(c.product) === Number(item.id));
                                const cartQty = foundInCart?.quantity || 0;
                                const cartId = foundInCart?.id || null;

                                return (
                                    <div className="swiper-slide" key={item.id}>
                                        {/* ✅ SHOP PAGE CARD */}
                                        <Link
                                            href={`/shop/${item.id}`}
                                            style={{ textDecoration: "none", color: "inherit" }}
                                        >
                                            <div className="product-card">
                                                <div className="img-wrapper">
                                                    <img src={item.image_urls?.[0] || 'https://via.placeholder.com/300'} alt={item.name} />

                                                    {!foundInCart ? (
                                                        <div
                                                            className="add-to-cart-overlay"
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                e.stopPropagation();
                                                                handleAddToCart(item.id);
                                                            }}
                                                        >
                                                            Add to Cart
                                                        </div>
                                                    ) : (
                                                        <div className="add-to-cart-overlay" style={{ opacity: 1, visibility: 'visible', background: 'rgba(0,0,0,0.8)' }} onClick={(e) => e.preventDefault()}>
                                                            <div className="d-flex align-items-center justify-content-center gap-3 w-100 h-100">
                                                                <button className="qty-btn" onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleUpdateQty(cartId, 'decrease', cartQty); }} style={{ background: '#a6d719', border: 'none', borderRadius: '4px', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                                    <Minus size={14} color="#000" />
                                                                </button>
                                                                <span className="fw-bold text-white fs-5">{cartQty}</span>
                                                                <button className="qty-btn" onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleUpdateQty(cartId, 'increase', cartQty); }} style={{ background: '#a6d719', border: 'none', borderRadius: '4px', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                                    <Plus size={14} color="#000" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="product-info">
                                                    <h3 className="product-name d-flex justify-content-between">
                                                        {item.name}
                                                        <Heart size={18} />
                                                    </h3>

                                                    <span className="product-cat">{item.category_name || 'Controller'}</span>

                                                    <div>
                                                        <span className="price-new">₹{item.price}</span>
                                                        {item.discount > 0 && (
                                                            <span className="price-old">₹{item.discount}</span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-5">
                        <p className="text-white">No products found.</p>
                    </div>
                )}
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
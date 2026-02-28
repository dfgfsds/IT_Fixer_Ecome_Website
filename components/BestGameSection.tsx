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
import { formatPrice } from "@/lib/utils";

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
                                nextEl: ".array-next",
                                prevEl: ".array-prev",
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
                                    <div className="swiper-slide d-flex" key={item.id}>
                                        <Link
                                            href={`/shop/${item.id}`}
                                            className="d-flex flex-column h-100 w-100"
                                            style={{ textDecoration: "none", color: "inherit" }}
                                        >
                                            <div className="product-card d-flex flex-column h-100 w-100">
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

                                                <div className="product-info d-flex flex-column flex-grow-1">
                                                    <h3 className="product-name mb-1">
                                                        <span className="line-clamp-2" title={item.name}>{item.name}</span>
                                                    </h3>

                                                    <span className="product-cat mb-2">{item.category_name || 'Controller'}</span>

                                                    <div className="mt-auto">
                                                        <span className="price-new">{formatPrice(item.price)}</span>
                                                        {item.discount > 0 && (
                                                            <span className="price-old">{formatPrice(item.discount)}</span>
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

            <div className="container">
                <div className="game-slider-pagination">
                    <div className="game-progress p-relative">
                        <div className="game-swiper-pagination"></div>
                    </div>
                    <div className="array-button d-flex align-items-center">
                        <button className="array-prev">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <g clipPath="url(#clip0_0_434)">
                                    <path d="M1.16006 18L14.762 18C15.4019 18 15.9222 17.4797 15.9222 16.8398C15.9222 16.2 15.4019 15.6797 14.762 15.6797L3.96553 15.6797L17.6589 1.98281C18.1124 1.5293 18.1124 0.794531 17.6589 0.341017C17.2054 -0.112499 16.4706 -0.112499 16.0171 0.341017L2.32373 14.0379L2.32373 3.24141C2.32373 2.60156 1.80342 2.08125 1.16357 2.08125C0.52373 2.08125 0.00341662 2.60156 0.00341668 3.24141L0.00341787 16.8398C-9.73203e-05 17.4797 0.520214 18 1.16006 18Z" fill="#0B0E13" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_434">
                                        <rect width="18" height="18" fill="white" transform="translate(18 18) rotate(180)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                        <button className="array-next">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <g clipPath="url(#clip0_0_427)">
                                    <path d="M16.8399 0H3.23799C2.59814 0 2.07783 0.520312 2.07783 1.16016C2.07783 1.8 2.59814 2.32031 3.23799 2.32031H14.0345L0.341113 16.0172C-0.112402 16.4707 -0.112402 17.2055 0.341113 17.659C0.794629 18.1125 1.52939 18.1125 1.98291 17.659L15.6763 3.96211V14.7586C15.6763 15.3984 16.1966 15.9187 16.8364 15.9187C17.4763 15.9187 17.9966 15.3984 17.9966 14.7586V1.16016C18.0001 0.520312 17.4798 0 16.8399 0Z" fill="#0B0E13" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_427">
                                        <rect width="18" height="18" fill="black" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
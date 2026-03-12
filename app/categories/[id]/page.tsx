"use client";
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Minus, Plus, Loader2 } from "lucide-react";
import { useProducts } from "@/context/ProductsContext";
import { useCategories } from "@/context/CategoriesContext";
import { useUser } from "@/context/UserContext";
import { useVendor } from "@/context/VendorContext";
import { useCartItem } from "@/context/CartItemContext";
import { InvalidateQueryFilters, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { formatPrice } from "@/lib/utils";
import ShopWithSideCart from "@/components/ShopWithSideCart";
import { getProductVariantCartItemUpdate } from "@/api-endpoints/products";
import { updateCartitemsApi, deleteCartitemsApi } from "@/api-endpoints/CartsApi";

export default function CategoryDetailPage() {
    const { id } = useParams();
    const router = useRouter();
    const { products: apiData, isLoading: productsLoading }: any = useProducts();
    const { categories: catData, isLoading: categoriesLoading }: any = useCategories();
    const { vendorId } = useVendor();
    const { isAuthenticated } = useUser();
    const { cartItem }: any = useCartItem();
    const queryClient = useQueryClient();

    const [isCartOpen, setIsCartOpen] = useState(false);

    const pathId = Array.isArray(id) ? id[0] : id;

    // Find category by slug OR ID
    const currentCategory = catData?.data?.find((cat: any) =>
        (cat.slug && cat.slug === pathId) || cat.id.toString() === pathId
    );

    const actualCategoryId = currentCategory?.id;
    const categoryName = currentCategory?.name || "Category";

    // Use actualCategoryId for filtering, NOT the pathId from URL
    const subCategories = catData?.data?.filter((cat: any) => cat.parent === actualCategoryId) || [];
    const filteredProducts = (apiData?.data || []).filter((p: any) => p.category === actualCategoryId);

    const handleAddToCart = async (productId: number) => {
        if (!isAuthenticated) return router.push("/login");

        const cartId = typeof window !== 'undefined' ? localStorage.getItem('cartId') : null;
        const userId = typeof window !== 'undefined' ? localStorage.getItem('userId') : null;

        const payload = {
            product: productId,
            cart: cartId,
            user: userId,
            vendor: vendorId,
            quantity: 1,
            created_by: 'user'
        };
        try {
            await getProductVariantCartItemUpdate('', payload);
            queryClient.invalidateQueries(["getCartitemsData"] as InvalidateQueryFilters);
            queryClient.invalidateQueries(["getCartItemsDetailed"] as InvalidateQueryFilters);
            setIsCartOpen(true);
        } catch (e) {
            toast.error("Error adding to cart");
        }
    };

    const handleUpdateQty = async (cartId: any, type: 'increase' | 'decrease', currentQty: number) => {
        try {
            if (type === 'decrease' && currentQty === 1) {
                await deleteCartitemsApi(`${cartId}`);
            } else {
                await updateCartitemsApi(`${cartId}/${type}/`);
            }
            queryClient.invalidateQueries(["getCartitemsData"] as InvalidateQueryFilters);
            queryClient.invalidateQueries(["getCartItemsDetailed"] as InvalidateQueryFilters);
        } catch (e) {
            console.error(e);
        }
    };

    const isLoading = productsLoading || categoriesLoading;

    return (
        <>
            <ShopWithSideCart
                isCartOpen={isCartOpen}
                setIsCartOpen={setIsCartOpen}
            />

            <div id="smooth-content">
                {/* Breadcrumb Section */}
                <div className="gt-breadcrumb-wrapper bg-cover" style={{ backgroundImage: "url('/assets/img/breadcrumb.png')" }}>
                    <div className="gt-left-shape"><img src="/assets/img/shape-1.png" alt="img" /></div>
                    <div className="gt-right-shape"><img src="/assets/img/shape-2.png" alt="img" /></div>
                    <div className="gt-blur-shape"><img src="/assets/img/breadcrumb-shape.png" alt="img" /></div>
                    <div className="container">
                        <div className="gt-page-heading">
                            <div className="gt-breadcrumb-sub-title">
                                <h1 className="wow fadeInUp text-uppercase" data-wow-delay=".3s">{categoryName}</h1>
                            </div>
                            <ul className="gt-breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                                <li><i className="fa-solid fa-house"></i></li>
                                <li><Link className="text-uppercase" href="/">home :</Link></li>
                                <li><Link className="text-uppercase" href="/categories">categories :</Link></li>
                                <li className="color text-uppercase">{categoryName}</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Subcategories Section */}
                {subCategories.length > 0 && (
                    <section className="gt-game-section-5 fix pb-0">
                        <div className="container">
                            <div className="section-title text-center mb-50">
                                <h2 className="title wow fadeInUp" data-wow-delay=".3s">Subcategories</h2>
                            </div>
                            <div className="row g-4">
                                {subCategories.map((sub: any, index: number) => (
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.2 + index * 0.1}s`} key={sub.id}>
                                        <Link href={`/categories/${sub.slug || sub.id}`} className="text-decoration-none">
                                            <div className="gt-gaming-card-item-5 mt-0">
                                                <div className="gt-gaming-image">
                                                    <img
                                                        src={sub.image || "https://via.placeholder.com/300"}
                                                        alt={sub.name}
                                                        style={{ height: '300px', width: '100%', objectFit: 'cover' }}
                                                    />
                                                    <div className="icon icon-permanent"><i className="fa-solid fa-arrow-right"></i></div>
                                                    <div className="gt-gaming-content content-visible">
                                                        {/* <h6>IT Fixer</h6> */}
                                                        <h3>
                                                            <span className="category-tag">{sub.name}</span>
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Products Section */}
                <section className="gt-product-section category-padding">
                    <div className="container">
                        <div className="section-title text-center mb-50">
                            <h2 className="title wow fadeInUp" data-wow-delay=".3s">{subCategories.length > 0 ? "Products" : ""}</h2>
                        </div>

                        {isLoading ? (
                            <div className="col-12 d-flex align-items-center justify-content-center" style={{ minHeight: '40vh' }}>
                                <div className="spinner-border" role="status" style={{ color: '#a6d719', width: '3.5rem', height: '3.5rem' }}>
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        ) : filteredProducts.length > 0 ? (
                            <div className="row g-4">
                                {filteredProducts.map((item: any) => {
                                    const foundInCart = cartItem?.data?.find((c: any) => Number(c.product) === Number(item.id));
                                    const cartQty = foundInCart?.quantity || 0;
                                    const cartId = foundInCart?.id || null;

                                    return (
                                        <div className="col-md-6 col-lg-4 col-xl-3 d-flex" key={item.id}>
                                            <div className="product-card d-flex flex-column h-100 w-100">
                                                <div className="img-wrapper">
                                                    <img
                                                        src={item.image_urls?.[0] || 'https://via.placeholder.com/300'}
                                                        alt={item.name}
                                                        onClick={() => router.push(`/shop/${item.id}`)}
                                                        style={{ cursor: 'pointer' }}
                                                    />

                                                    {!foundInCart ? (
                                                        <div className="add-to-cart-overlay"
                                                            onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleAddToCart(item.id); }}
                                                        >
                                                            Add to Cart
                                                        </div>
                                                    ) : (
                                                        <div className="add-to-cart-overlay" style={{ opacity: 1, visibility: 'visible', background: 'rgba(0,0,0,0.8)' }}>
                                                            <div className="d-flex align-items-center justify-content-center gap-3 w-100 h-100">
                                                                <button className="qty-btn" onClick={(e) => { e.preventDefault(); handleUpdateQty(cartId, 'decrease', cartQty); }}>
                                                                    <Minus size={14} />
                                                                </button>
                                                                <span className="fw-bold text-white fs-5">{cartQty}</span>
                                                                <button className="qty-btn" onClick={(e) => { e.preventDefault(); handleUpdateQty(cartId, 'increase', cartQty); }}>
                                                                    <Plus size={14} />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="product-info d-flex flex-column flex-grow-1" onClick={() => router.push(`/shop/${item.id}`)} style={{ cursor: 'pointer' }}>
                                                    <h3 className="product-name d-flex align-items-center justify-content-between mb-1">
                                                        <span className="line-clamp-2" title={item.name}>{item.name}</span>
                                                    </h3>
                                                    <span className="product-cat mb-2">{item.category_name || categoryName}</span>
                                                    <div className="mt-auto">
                                                        <span className="price-new">{formatPrice(item.price)}</span>
                                                        {item.discount > 0 && <span className="price-old">{formatPrice(item.discount)}</span>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            <div className="col-12 text-center py-5">
                                <p className="text-white fs-4">No products found in this category.</p>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </>
    );
}

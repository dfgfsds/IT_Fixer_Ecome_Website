// "use client";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { Minus, Plus } from "lucide-react";
// import { useProducts } from "@/context/ProductsContext";
// import { useCategories } from "@/context/CategoriesContext";
// import { useUser } from "@/context/UserContext";
// import { useVendor } from "@/context/VendorContext";
// import { useCartItem } from "@/context/CartItemContext";
// import { InvalidateQueryFilters, useQueryClient } from "@tanstack/react-query";
// import { toast } from "sonner";
// import { handleApiError } from "@/lib/error-handler";
// import { formatPrice } from "@/lib/utils";
// import ShopWithSideCart from "@/components/ShopWithSideCart";
// import { getProductVariantCartItemUpdate } from "@/api-endpoints/products";
// import { updateCartitemsApi, deleteCartitemsApi } from "@/api-endpoints/CartsApi";
// import { slugify } from "@/lib/slugify";
// import Script from "next/script";

// export default function CategoryDetailClient({ id, seo }: { id: string; seo: any }) {
//     const FALLBACK_IMAGE = "/assets/img/placeholder-image.jpg";
//     const router = useRouter();
//     const { products: apiData, isLoading: productsLoading }: any = useProducts();
//     const { categories: catData, isLoading: categoriesLoading }: any = useCategories();
//     const { vendorId } = useVendor();
//     const { isAuthenticated } = useUser();
//     const { cartItem }: any = useCartItem();
//     const queryClient = useQueryClient();

//     const [isCartOpen, setIsCartOpen] = useState(false);
//     const pathId = Array.isArray(id) ? id[0] : id;

//     // Find category by slug OR Name Slug OR ID
//     const currentCategory = catData?.data?.find((cat: any) =>
//         (cat.slug && cat.slug === pathId) ||
//         slugify(cat.name) === pathId ||
//         cat.id.toString() === pathId
//     );

//     const actualCategoryId = currentCategory?.id;
//     const categoryName = currentCategory?.name || "Category";

//     // Fallback block if seo parameter is missing but provided via dynamic json mapping
//     const activeSeo = seo?.[pathId] || seo || {};
//     const schemas = activeSeo?.schemas ?? [];
//     const pageContent = activeSeo?.pageContent ?? "";

//     // Use actualCategoryId for filtering, NOT the pathId from URL
//     const subCategories = catData?.data?.filter((cat: any) => cat.parent === actualCategoryId) || [];
//     const filteredProducts = (apiData?.data || []).filter((p: any) => p.category === actualCategoryId);

//     const handleAddToCart = async (productId: number) => {
//         if (!isAuthenticated) return router.push("/login");

//         const cartId = typeof window !== 'undefined' ? localStorage.getItem('cartId') : null;
//         const userId = typeof window !== 'undefined' ? localStorage.getItem('userId') : null;

//         const payload = {
//             product: productId,
//             cart: cartId,
//             user: userId,
//             vendor: vendorId,
//             quantity: 1,
//             created_by: 'user'
//         };
//         try {
//             await getProductVariantCartItemUpdate('', payload);
//             queryClient.invalidateQueries(["getCartitemsData"] as InvalidateQueryFilters);
//             queryClient.invalidateQueries(["getCartItemsDetailed"] as InvalidateQueryFilters);
//             setIsCartOpen(true);
//         } catch (e) {
//             toast.error(handleApiError(e));
//         }
//     };

//     const handleUpdateQty = async (cartId: any, type: 'increase' | 'decrease', currentQty: number) => {
//         try {
//             if (type === 'decrease' && currentQty === 1) {
//                 await deleteCartitemsApi(`${cartId}`);
//             } else {
//                 await updateCartitemsApi(`${cartId}/${type}/`);
//             }
//             queryClient.invalidateQueries(["getCartitemsData"] as InvalidateQueryFilters);
//             queryClient.invalidateQueries(["getCartItemsDetailed"] as InvalidateQueryFilters);
//         } catch (e) {
//             toast.error(handleApiError(e));
//         }
//     };

//     const isLoading = productsLoading || categoriesLoading;

//     return (
//         <>
//             <ShopWithSideCart
//                 isCartOpen={isCartOpen}
//                 setIsCartOpen={setIsCartOpen}
//             />

//             <div id="smooth-content">
//                 {/* Breadcrumb Section */}
//                 <div className="gt-breadcrumb-wrapper bg-cover" style={{ backgroundImage: "url('/assets/img/breadcrumb.png')" }}>
//                     <div className="gt-left-shape"><img src="/assets/img/shape-1.png" alt="img" /></div>
//                     <div className="gt-right-shape"><img src="/assets/img/shape-2.png" alt="img" /></div>
//                     <div className="gt-blur-shape"><img src="/assets/img/breadcrumb-shape.png" alt="img" /></div>
//                     <div className="container">
//                         <div className="gt-page-heading">
//                             <div className="gt-breadcrumb-sub-title">
//                                 <h2 className="wow fadeInUp text-uppercase" data-wow-delay=".3s">{categoryName}</h2>
//                             </div>
//                             <ul className="gt-breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
//                                 <li><i className="fa-solid fa-house"></i></li>
//                                 <li><Link className="text-uppercase" href="/">home :</Link></li>
//                                 <li><Link className="text-uppercase" href="/categories">categories :</Link></li>
//                                 <li><span className="color text-uppercase">{categoryName}</span></li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Subcategories Section */}
//                 {subCategories.length > 0 && (
//                     <section className="gt-game-section-5 fix pb-0">
//                         <div className="container">
//                             <div className="section-title text-center mb-50">
//                                 <h2 className="title wow fadeInUp" data-wow-delay=".3s">Subcategories</h2>
//                             </div>
//                             <div className="row g-4">
//                                 {subCategories.map((sub: any, index: number) => (
//                                     <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.2 + index * 0.1}s`} key={sub.id}>
//                                         <Link href={`/categories/${sub.slug || slugify(sub.name)}`} className="text-decoration-none">
//                                             <div className="gt-gaming-card-item-5 mt-0">
//                                                 <div className="gt-gaming-image">
//                                                     <img
//                                                         src={sub.image || FALLBACK_IMAGE}
//                                                         alt={sub.name}
//                                                         onError={(e) => {
//                                                             (e.target as HTMLImageElement).src = FALLBACK_IMAGE;
//                                                         }}
//                                                         style={{ height: '300px', width: '100%', objectFit: 'cover' }}
//                                                     />
//                                                     <div className="icon icon-permanent"><i className="fa-solid fa-arrow-right"></i></div>
//                                                     <div className="gt-gaming-content content-visible">
//                                                         <h3>
//                                                             <span className="category-tag">{sub.name}</span>
//                                                         </h3>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </Link>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </section>
//                 )}

//                 {/* Products Section */}
//                 <section className="gt-product-section category-padding">
//                     <div className="container">
//                         <div className="section-title text-center mb-50">
//                             <h2 className="title wow fadeInUp" data-wow-delay=".3s">{subCategories.length > 0 ? "Products" : ""}</h2>
//                         </div>

//                         {isLoading ? (
//                             <div className="col-12 d-flex align-items-center justify-content-center" style={{ minHeight: '40vh' }}>
//                                 <div className="spinner-border" role="status" style={{ color: '#a6d719', width: '3.5rem', height: '3.5rem' }}>
//                                     <span className="visually-hidden">Loading...</span>
//                                 </div>
//                             </div>
//                         ) : filteredProducts.length > 0 ? (
//                             <div className="row g-4">
//                                 {filteredProducts.map((item: any) => {
//                                     const foundInCart = cartItem?.data?.find((c: any) => Number(c.product) === Number(item.id));
//                                     const cartQty = foundInCart?.quantity || 0;
//                                     const cartId = foundInCart?.id || null;

//                                     return (
//                                         <div className="col-md-6 col-lg-4 col-xl-3 d-flex" key={item.id}>
//                                             <div className="product-card d-flex flex-column h-100 w-100">
//                                                 <div className="img-wrapper">
//                                                     <img
//                                                         src={item.image_urls?.[0] || FALLBACK_IMAGE}
//                                                         alt={item.name}
//                                                         onError={(e) => {
//                                                             (e.target as HTMLImageElement).src = FALLBACK_IMAGE;
//                                                         }}
//                                                         onClick={() => router.push(`/shop/${slugify(item.name)}`)}
//                                                         style={{ cursor: 'pointer' }}
//                                                     />

//                                                     {!foundInCart ? (
//                                                         <div className="add-to-cart-overlay"
//                                                             onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleAddToCart(item.id); }}
//                                                         >
//                                                             Add to Cart
//                                                         </div>
//                                                     ) : (
//                                                         <div className="add-to-cart-overlay" style={{ opacity: 1, visibility: 'visible', background: 'rgba(0,0,0,0.8)' }}>
//                                                             <div className="d-flex align-items-center justify-content-center gap-3 w-100 h-100">
//                                                                 <button className="qty-btn" onClick={(e) => { e.preventDefault(); handleUpdateQty(cartId, 'decrease', cartQty); }}>
//                                                                     <Minus size={14} />
//                                                                 </button>
//                                                                 <span className="fw-bold text-white fs-5">{cartQty}</span>
//                                                                 <button className="qty-btn" onClick={(e) => { e.preventDefault(); handleUpdateQty(cartId, 'increase', cartQty); }}>
//                                                                     <Plus size={14} />
//                                                                 </button>
//                                                             </div>
//                                                         </div>
//                                                     )}
//                                                 </div>

//                                                 <div className="product-info d-flex flex-column flex-grow-1" onClick={() => router.push(`/shop/${slugify(item.name)}`)} style={{ cursor: 'pointer' }}>
//                                                     <h3 className="product-name d-flex align-items-center justify-content-between mb-1">
//                                                         <span className="line-clamp-2" title={item.name}>{item.name}</span>
//                                                     </h3>
//                                                     <span className="product-cat mb-2">{item.category_name || categoryName}</span>
//                                                     <div className="mt-auto">
//                                                         <span className="price-new">{formatPrice(item.price)}</span>
//                                                         {item.discount > 0 && <span className="price-old">{formatPrice(item.discount)}</span>}
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     );
//                                 })}
//                             </div>
//                         ) : (
//                             <div className="col-12 text-center py-5">
//                                 <p className="text-white fs-4">No products found in this category.</p>
//                             </div>
//                         )}
//                     </div>
//                 </section>

//                 {/* Dynamic SEO HTML Description Injection Section */}
//                 {pageContent && (
//                     <section className="gt-seo-content-section py-5 bg-dark-alt text-white-50">
//                         <div className="container">
//                             <div
//                                 className="seo-html-wrapper description-styles"
//                                 dangerouslySetInnerHTML={{ __html: pageContent }}
//                             />
//                         </div>
//                     </section>
//                 )}
//             </div>

//             {/* Dynamic Rendering of Multiple Schemas Array */}
//             {schemas && schemas.length > 0 && schemas.map((schemaObj: any, idx: number) => (
//                 <Script
//                     key={`seo-schema-${idx}`}
//                     id={`collection-schema-${idx}`}
//                     type="application/ld+json"
//                     strategy="afterInteractive"
//                     dangerouslySetInnerHTML={{
//                         __html: JSON.stringify(schemaObj),
//                     }}
//                 />
//             ))}
//         </>
//     );
// }


"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Minus, Plus, ChevronDown } from "lucide-react";
import { useProducts } from "@/context/ProductsContext";
import { useCategories } from "@/context/CategoriesContext";
import { useUser } from "@/context/UserContext";
import { useVendor } from "@/context/VendorContext";
import { useCartItem } from "@/context/CartItemContext";
import { InvalidateQueryFilters, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { handleApiError } from "@/lib/error-handler";
import { formatPrice } from "@/lib/utils";
import ShopWithSideCart from "@/components/ShopWithSideCart";
import { getProductVariantCartItemUpdate } from "@/api-endpoints/products";
import { updateCartitemsApi, deleteCartitemsApi } from "@/api-endpoints/CartsApi";
import { slugify } from "@/lib/slugify";
import Script from "next/script";

export default function CategoryDetailClient({ id, seo }: { id: string; seo: any }) {
    const FALLBACK_IMAGE = "/assets/img/placeholder-image.jpg";
    const router = useRouter();
    const { products: apiData, isLoading: productsLoading }: any = useProducts();
    const { categories: catData, isLoading: categoriesLoading }: any = useCategories();
    const { vendorId } = useVendor();
    const { isAuthenticated } = useUser();
    const { cartItem }: any = useCartItem();
    const queryClient = useQueryClient();

    const [isCartOpen, setIsCartOpen] = useState(false);
    // State to toggle between showing 8 products or all products
    const [showAll, setShowAll] = useState(false);

    const pathId = Array.isArray(id) ? id[0] : id;

    // Find category by slug OR Name Slug OR ID
    const currentCategory = catData?.data?.find((cat: any) =>
        (cat.slug && cat.slug === pathId) ||
        slugify(cat.name) === pathId ||
        cat.id.toString() === pathId
    );

    const actualCategoryId = currentCategory?.id;
    const categoryName = currentCategory?.name || "Category";

    // Fallback block if seo parameter is missing but provided via dynamic json mapping
    const activeSeo = seo?.[pathId] || seo || {};
    const schemas = activeSeo?.schemas ?? [];
    const pageContent = activeSeo?.pageContent ?? "";

    // Use actualCategoryId for filtering, NOT the pathId from URL
    const subCategories = catData?.data?.filter((cat: any) => cat.parent === actualCategoryId) || [];
    const filteredProducts = (apiData?.data || []).filter((p: any) => p.category === actualCategoryId);

    // Slice products based on state
    const displayedProducts = showAll ? filteredProducts : filteredProducts.slice(0, 8);

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
            toast.error(handleApiError(e));
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
            toast.error(handleApiError(e));
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
                                <h2 className="wow fadeInUp text-uppercase" data-wow-delay=".3s">{categoryName}</h2>
                            </div>
                            <ul className="gt-breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                                <li><i className="fa-solid fa-house"></i></li>
                                <li><Link className="text-uppercase" href="/">home :</Link></li>
                                <li><Link className="text-uppercase" href="/categories">categories :</Link></li>
                                <li><span className="color text-uppercase">{categoryName}</span></li>
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
                                        <Link href={`/categories/${sub.slug || slugify(sub.name)}`} className="text-decoration-none">
                                            <div className="gt-gaming-card-item-5 mt-0">
                                                <div className="gt-gaming-image">
                                                    <img
                                                        src={sub.image || FALLBACK_IMAGE}
                                                        alt={sub.name}
                                                        onError={(e) => {
                                                            (e.target as HTMLImageElement).src = FALLBACK_IMAGE;
                                                        }}
                                                        style={{ height: '300px', width: '100%', objectFit: 'cover' }}
                                                    />
                                                    <div className="icon icon-permanent"><i className="fa-solid fa-arrow-right"></i></div>
                                                    <div className="gt-gaming-content content-visible">
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
                            <>
                                <div className="row g-4">
                                    {displayedProducts.map((item: any) => {
                                        const foundInCart = cartItem?.data?.find((c: any) => Number(c.product) === Number(item.id));
                                        const cartQty = foundInCart?.quantity || 0;
                                        const cartId = foundInCart?.id || null;

                                        return (
                                            <div className="col-md-6 col-lg-4 col-xl-3 d-flex wow fadeInUp" data-wow-delay=".2s" key={item.id}>
                                                <div className="product-card d-flex flex-column h-100 w-100">
                                                    <div className="img-wrapper">
                                                        <img
                                                            src={item.image_urls?.[0] || FALLBACK_IMAGE}
                                                            alt={item.name}
                                                            onError={(e) => {
                                                                (e.target as HTMLImageElement).src = FALLBACK_IMAGE;
                                                            }}
                                                            onClick={() => router.push(`/shop/${slugify(item.name)}`)}
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

                                                    <div className="product-info d-flex flex-column flex-grow-1" onClick={() => router.push(`/shop/${slugify(item.name)}`)} style={{ cursor: 'pointer' }}>
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

                                {/* Toggle Button for See More / See Less */}
                                {filteredProducts.length > 8 && (
                                    <div className="col-12 text-center mt-5 wow fadeInUp" data-wow-delay=".3s">
                                        <button
                                            onClick={() => setShowAll(!showAll)}
                                            className="btn btn-primary d-inline-flex align-items-center gap-2 px-4 py-3 text-uppercase fw-bold"
                                            style={{
                                                backgroundColor: '#a6d719',
                                                border: 'none',
                                                color: '#000',
                                                borderRadius: '5px',
                                                transition: 'all 0.3s ease-in-out',
                                                boxShadow: '0px 4px 15px rgba(166, 215, 25, 0.4)',
                                                animation: !showAll ? 'pulse 2s infinite' : 'none'
                                            }}
                                            onMouseOver={(e) => {
                                                e.currentTarget.style.transform = 'scale(1.05)';
                                                e.currentTarget.style.backgroundColor = '#b7eb1c';
                                            }}
                                            onMouseOut={(e) => {
                                                e.currentTarget.style.transform = 'scale(1)';
                                                e.currentTarget.style.backgroundColor = '#a6d719';
                                            }}
                                        >
                                            {showAll ? 'See Less Products' : 'See More Products'}
                                            <ChevronDown
                                                size={18}
                                                style={{
                                                    transform: showAll ? 'rotate(180deg)' : 'rotate(0deg)',
                                                    transition: 'transform 0.3s ease',
                                                    animation: !showAll ? 'bounce 1s infinite' : 'none'
                                                }}
                                            />
                                        </button>

                                        {/* CSS Keyframes for pulse and bounce */}
                                        <style dangerouslySetInnerHTML={{
                                            __html: `
                            @keyframes pulse {
                                0% { box-shadow: 0 0 0 0 rgba(166, 215, 25, 0.7); }
                                70% { box-shadow: 0 0 0 10px rgba(166, 215, 25, 0); }
                                100% { box-shadow: 0 0 0 0 rgba(166, 215, 25, 0); }
                            }
                            @keyframes bounce {
                                0%, 100% { transform: translateY(0); }
                                50% { transform: translateY(4px); }
                            }
                        `}} />
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="col-12 text-center py-5">
                                <p className="text-white fs-4">No products found in this category.</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Dynamic SEO HTML Description Injection Section */}
                {pageContent && (
                    <section className="gt-seo-content-section py-5 bg-dark-alt text-white-50">
                        <div className="container">
                            <div
                                className="seo-html-wrapper description-styles"
                                dangerouslySetInnerHTML={{ __html: pageContent }}
                            />
                        </div>
                    </section>
                )}
            </div>

            {/* Dynamic Rendering of Multiple Schemas Array */}
            {schemas && schemas.length > 0 && schemas.map((schemaObj: any, idx: number) => (
                <Script
                    key={`seo-schema-${idx}`}
                    id={`collection-schema-${idx}`}
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schemaObj),
                    }}
                />
            ))}
        </>
    );
}
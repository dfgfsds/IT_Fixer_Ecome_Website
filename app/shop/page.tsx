"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Home, Heart, CheckCircle, BadgeCheck, ChevronRight, ChevronsLeft, ChevronsRight, Minus, Plus, Loader2 } from "lucide-react";
import { useProducts } from "@/context/ProductsContext";
import ShopWithSideCart from "@/components/ShopWithSideCart";
import { useCategories } from "@/context/CategoriesContext";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { getProductVariantCartItemUpdate } from "@/api-endpoints/products";
import { updateCartitemsApi, deleteCartitemsApi } from "@/api-endpoints/CartsApi";
import { useVendor } from "@/context/VendorContext";
import { useCartItem } from "@/context/CartItemContext";
import { InvalidateQueryFilters, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";


export default function ShopPage() {
    const { isAuthenticated } = useUser();
    const router = useRouter();
    const { products: apiData, isLoading }: any = useProducts();
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { categories: catData }: any = useCategories();
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
    const [sortOrder, setSortOrder] = useState("default");
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(200000);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    const queryClient = useQueryClient();
    const { vendorId } = useVendor();
    const { cartItem }: any = useCartItem();

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
                await deleteCartitemsApi(`${cartId}`);
            } else {
                await updateCartitemsApi(`${cartId}/${type}/`);
            }
            queryClient.invalidateQueries(["getCartitemsData"] as InvalidateQueryFilters);
        } catch (e) { console.error(e); }
    };

    const filtered = (apiData?.data || []).filter((p: any) =>
        (!selectedCategory || p.category === selectedCategory) &&
        (p.price >= minPrice && p.price <= maxPrice)
    );

    const allProducts = [...filtered].sort((a: any, b: any) => {
        if (sortOrder === "price-asc") return a.price - b.price;
        if (sortOrder === "price-desc") return b.price - a.price;
        if (sortOrder === "name-asc") return a.name.localeCompare(b.name);
        if (sortOrder === "newest") return b.id - a.id;
        return 0;
    });

    const totalPages = Math.ceil(allProducts.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = allProducts.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (page: any) => {
        if (page === "...") return;
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

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
                    <div className="gt-left-shape"><img src="assets/img/shape-1.png" alt="img" /></div>
                    <div className="gt-right-shape"><img src="assets/img/shape-2.png" alt="img" /></div>
                    <div className="gt-blur-shape"><img src="assets/img/breadcrumb-shape.png" alt="img" /></div>

                    <div className="container">
                        <div className="gt-page-heading">
                            <div className="gt-breadcrumb-sub-title">
                                <h1 className="wow fadeInUp" data-wow-delay=".3s">Shop</h1>
                            </div>
                            <ul className="gt-breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                                <li><a href="/" className="d-inline-flex align-items-center gap-1"><Home size={16} className="mb-[1px]" />home :</a></li>
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
                                    <li
                                        onClick={() => { setSelectedCategory(null); setCurrentPage(1); }}
                                        style={{ cursor: 'pointer', fontWeight: !selectedCategory ? 'bold' : 'normal' }}
                                    >
                                        All {/*<span>({apiData?.data?.length || 0})</span> */}
                                    </li>
                                    {catData?.data?.map((cat: any) => {
                                        const count = (apiData?.data || []).filter((p: any) => p.category === cat.id).length;
                                        return (
                                            <li
                                                key={cat.id}
                                                onClick={() => { setSelectedCategory(cat.id); setCurrentPage(1); }}
                                                style={{ cursor: 'pointer', fontWeight: selectedCategory === cat.id ? 'bold' : 'normal' }}
                                            >
                                                {cat.name} {/*<span>({count})</span>*/}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>

                            <div className="widget">
                                <h2 className="widget-title">Filter by price</h2>

                                <div className="mb-2">
                                    <input
                                        type="range"
                                        min={0}
                                        max={10000}
                                        value={minPrice}
                                        onChange={(e) => { setMinPrice(Number(e.target.value)); setCurrentPage(1); }}
                                        className="w-100"
                                        style={{ accentColor: '#a6d719', cursor: 'pointer' }}
                                    />
                                    <input
                                        type="range"
                                        min={0}
                                        max={10000}
                                        value={maxPrice}
                                        onChange={(e) => { setMaxPrice(Number(e.target.value)); setCurrentPage(1); }}
                                        className="w-100"
                                        style={{ accentColor: '#a6d719', cursor: 'pointer' }}
                                    />
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="price-label text-uppercase">
                                        Price: ₹{minPrice} — ₹{maxPrice}
                                    </span>
                                    <button
                                        className="filter-btn text-uppercase"
                                        onClick={() => { setMinPrice(0); setMaxPrice(10000); setCurrentPage(1); }}
                                    >
                                        Reset
                                    </button>
                                </div>
                            </div>

                            <div className="widget">
                                <h2 className="widget-title">Top Deals</h2>
                                {(apiData?.data || [])
                                    .filter((p: any) => p.discount > 0)
                                    .sort((a: any, b: any) => (b.price - b.discount) - (a.price - a.discount))
                                    .slice(0, 5)
                                    .map((product: any) => (
                                        <Link href={`/shop/${product.id}`} key={product.id} className="d-flex align-items-center mb-3 text-decoration-none">
                                            <div className="me-3 bg-dark p-1 rounded" style={{ width: "60px", height: "60px", flexShrink: 0 }}>
                                                <img
                                                    src={product.image_urls?.[0] || 'https://via.placeholder.com/60'}
                                                    className="w-100 h-100 object-fit-cover rounded"
                                                    alt={product.name}
                                                />
                                            </div>
                                            <div>
                                                <div className="text-warning" style={{ fontSize: "10px" }}>★★★★★</div>
                                                <div className="small fw-bold text-uppercase text-white text-truncate" style={{ maxWidth: "150px" }}>
                                                    {product.name}
                                                </div>
                                                <div className="d-flex gap-2">
                                                    <span className="price-new text-success" style={{ fontSize: "14px" }}>₹{product.discount}</span>
                                                    <span className="price-old text-secondary text-decoration-line-through" style={{ fontSize: "12px" }}>₹{product.price}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                            </div>

                            {/* 
                            <div className="play-earn-banner-wrapper mt-4">
                                <div className="play-earn-banner d-flex flex-column align-items-center justify-content-center text-center p-4" style={{ minHeight: "260px", overflow: "visible" }}>
                                    <div className="mb-3 text-success"><CheckCircle size={36} /></div>
                                    <h3 className="mb-2">Play To Earn</h3>
                                    <p className="small text-secondary mb-3 d-flex align-items-center gap-1"><BadgeCheck size={16} className="text-primary" />Free Register Now</p>
                                    <a href="#" className="read-more d-inline-flex align-items-center gap-1">Read More <ChevronRight size={16} /></a>
                                </div>
                            </div> 
                            */}
                        </div>

                        {/* Products */}
                        <div className="col-lg-9">
                            <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom border-secondary">
                                <div className="col-3.5">
                                    <select
                                        className="form-select bg-transparent text-white border-secondary small text-uppercase"
                                        value={sortOrder}
                                        onChange={(e) => { setSortOrder(e.target.value); setCurrentPage(1); }}
                                    >
                                        <option value="default">Default Sorting</option>
                                        <option value="price-asc">Price: Low to High</option>
                                        <option value="price-desc">Price: High to Low</option>
                                        <option value="name-asc">Name: A to Z</option>
                                        <option value="newest">Newest First</option>
                                    </select>
                                </div>

                                <div className="small text-uppercase fw-bold" style={{ color: "white" }}>
                                    Showing {indexOfFirstItem + 1}–{Math.min(indexOfLastItem, allProducts.length)} of {allProducts.length} products
                                </div>
                            </div>

                            <div className="row g-4">
                                {isLoading ? (
                                    <div className="col-12 text-center py-5">
                                        <Loader2 className="animate-spin mx-auto text-success" size={40} />
                                        <p className="mt-2 text-white">Loading latest products...</p>
                                    </div>
                                ) : currentProducts.length > 0 ? (
                                    currentProducts.map((item: any) => {
                                        const foundInCart = cartItem?.data?.find((c: any) => Number(c.product) === Number(item.id));
                                        const cartQty = foundInCart?.quantity || 0;
                                        const cartId = foundInCart?.id || null;

                                        return (
                                            <div className="col-md-6 col-xl-4" key={item.id}>
                                                <div className="product-card">
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

                                                    <div className="product-info" onClick={() => router.push(`/shop/${item.id}`)} style={{ cursor: 'pointer' }}>
                                                        <h3 className="product-name d-flex align-items-center justify-content-between">
                                                            {item.name}
                                                            <Heart size={18} className="wishlist-btn mt-[1px]" />
                                                        </h3>
                                                        <span className="product-cat">{item.category_name || 'Electronics'}</span>
                                                        <div>
                                                            <span className="price-new">₹{item.price}</span>
                                                            {item.discount > 0 && <span className="price-old">₹{item.discount}</span>}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                ) : (
                                    <div className="col-12 text-center py-5"><p className="text-white">No products found.</p></div>
                                )}
                            </div>

                            {totalPages > 1 && (
                                <div className="d-flex justify-content-center mt-5">
                                    <nav>
                                        <ul className="pagination d-flex gap-2">
                                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                                <a
                                                    className="page-link pagination-box"
                                                    onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                                                    style={{
                                                        cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                                                        opacity: currentPage === 1 ? 0.5 : 1
                                                    }}
                                                >
                                                    <ChevronsLeft size={16} />
                                                </a>
                                            </li>

                                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                                                if (
                                                    page === 1 ||
                                                    page === totalPages ||
                                                    (page >= currentPage - 1 && page <= currentPage + 1)
                                                ) {
                                                    const isActive = currentPage === page;
                                                    return (
                                                        <li className="page-item" key={page}>
                                                            <a
                                                                className={`page-link pagination-box ${isActive ? 'active' : ''}`}
                                                                onClick={() => handlePageChange(page)}
                                                                style={{ cursor: 'pointer' }}
                                                            >
                                                                {page}
                                                            </a>
                                                        </li>
                                                    );
                                                }

                                                else if (
                                                    (page === currentPage - 2 && page > 2) ||
                                                    (page === currentPage + 2 && page < totalPages - 1)
                                                ) {
                                                    return (
                                                        <li className="page-item" key={page}>
                                                            <span className="page-link pagination-box border-0 text-secondary" style={{ cursor: 'default' }}>
                                                                •••
                                                            </span>
                                                        </li>
                                                    );
                                                }
                                                return null;
                                            })}

                                            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                                <a
                                                    className="page-link pagination-box"
                                                    onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                                                    style={{
                                                        cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                                                        opacity: currentPage === totalPages ? 0.5 : 1
                                                    }}
                                                >
                                                    <ChevronsRight size={16} />
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
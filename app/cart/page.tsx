'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Home, Minus, Plus, Trash2, Loader2, X } from "lucide-react";
import ShopWithSideCart from "@/components/ShopWithSideCart";
import { useCartItem } from "@/context/CartItemContext";
import { useProducts } from "@/context/ProductsContext";
import { useVendor } from "@/context/VendorContext";
import { useUser } from "@/context/UserContext";
import {
    updateCartitemsApi,
    deleteCartitemsApi,
    postApplyCouponApi,
    getAppliedCouponDataApi,
    deleteCouponApi
} from "@/api-endpoints/CartsApi";
import { getDeliveryChargeApi } from "@/api-endpoints/authendication";
import { useQueryClient, InvalidateQueryFilters, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export default function CartPage() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [couponCode, setCouponCode] = useState("");
    const { cartItem, isLoading: isCartLoading }: any = useCartItem();
    const { products: apiProducts, isLoading: isProductsLoading }: any = useProducts();
    const { vendorId }: any = useVendor();
    const { user }: any = useUser();
    const queryClient = useQueryClient();

    const userId = user?.data?.id;
    const cartId = cartItem?.data?.cart_id || cartItem?.cart_id || (typeof window !== 'undefined' ? localStorage.getItem('cartId') : null);

    const { data: breakdownRaw } = useQuery({
        queryKey: ["getAppliedCouponDataData", userId],
        queryFn: () => getAppliedCouponDataApi(`?user_id=${userId}`),
        enabled: !!userId
    });

    const { data: deliveryResponseRaw, isLoading: isBreakdownLoading } = useQuery({
        queryKey: ["getDeliveryCharge", userId, vendorId],
        queryFn: () => getDeliveryChargeApi("", {
            user_id: userId,
            vendor_id: vendorId,
            payment_mode: "",
            customer_phone: user?.data?.contact_number || "",
            total_amount: subtotal,
            cart_id: cartId
        }),
        enabled: !!userId && !!vendorId
    });

    const breakdownData = deliveryResponseRaw?.data?.data || deliveryResponseRaw?.data || {};
    const appliedCoupons = breakdownRaw?.data?.applied_coupons || breakdownRaw?.data?.data || breakdownRaw?.data || deliveryResponseRaw?.data?.data?.applied_coupons || deliveryResponseRaw?.data?.applied_coupons || [];

    // Normalize appliedCoupons if it's an object instead of array
    const normalizedAppliedCoupons = Array.isArray(appliedCoupons) ? appliedCoupons : (appliedCoupons ? [appliedCoupons] : []);

    const cartData = (cartItem?.data || []).map((item: any) => {
        const productDetails = apiProducts?.data?.find((p: any) => Number(p.id) === Number(item.product));
        return {
            ...productDetails,
            cartId: item.id,
            cartQty: item.quantity
        };
    }).filter((item: any) => item.name);

    const subtotal = cartData.reduce((acc: number, item: any) => acc + (Number(item.price) * item.cartQty), 0);

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

    const handleRemoveItem = async (id: any) => {
        try {
            await deleteCartitemsApi(`${id}/`);
            queryClient.invalidateQueries(["getCartitemsData"] as InvalidateQueryFilters);
            queryClient.invalidateQueries(["getAppliedCouponDataData"] as InvalidateQueryFilters);
            queryClient.invalidateQueries(["getDeliveryCharge"] as InvalidateQueryFilters);
            toast.success("Item removed from cart");
        } catch (e) { toast.error("Failed to remove item"); }
    };

    const handleApplyCoupon = async () => {
        const normalizedCode = couponCode.replace(/\s+/g, "").toUpperCase();
        if (!normalizedCode) {
            toast.error("Please enter a coupon code");
            return;
        }
        try {
            const payload = {
                user_id: userId,
                coupon_code: normalizedCode,
                vendor_id: vendorId,
                updated_by: "user"
            };
            await postApplyCouponApi("", payload);
            toast.success("Coupon applied successfully");
            setCouponCode("");
            queryClient.invalidateQueries({ queryKey: ["getAppliedCouponDataData"] });
            queryClient.invalidateQueries({ queryKey: ["getDeliveryCharge"] });
            queryClient.invalidateQueries({ queryKey: ["getCartitemsData"] });
        } catch (e: any) {
            toast.error(e.response?.data?.message || "FAILED TO APPLY COUPON");
        }
    };

    const handleRemoveCoupon = async (couponId: any) => {
        try {
            const payload = {
                user_id: userId,
                vendor_id: vendorId,
                updated_by: "user"
            };
            await deleteCouponApi(`${cartId}/coupon/${couponId}/remove/`, payload);
            toast.success("COUPON REMOVED");
            queryClient.invalidateQueries({ queryKey: ["getAppliedCouponDataData"] });
            queryClient.invalidateQueries({ queryKey: ["getDeliveryCharge"] });
            queryClient.invalidateQueries({ queryKey: ["getCartitemsData"] });
        } catch (e) {
            toast.error("FAILED TO REMOVE COUPON");
        }
    };

    const formatPrice = (price: any) => {
        return `₹${Number(price || 0).toFixed(2)}`;
    };

    if (isCartLoading || isProductsLoading) {
        return (
            <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "60vh" }}>
                <Loader2 className="animate-spin text-success mb-3" size={50} />
                <p className="text-white">LOADING YOUR CART...</p>
            </div>
        );
    }
    return (
        <>
            <ShopWithSideCart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
            <section className="vs-cart-wrapper py-5">

                {/* Breadcrumb (kept as-is) */}
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
                                <h1 className="wow fadeInUp" data-wow-delay=".3s">CART</h1>
                            </div>

                            <ul className="gt-breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                                <li>
                                    <a
                                        href="/"
                                        className="d-inline-flex align-items-center gap-1"
                                    >
                                        <Home size={16} className="mb-[1px]" />
                                        HOME :
                                    </a>
                                </li>
                                <li className="color">CART</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="container mt-5">

                    {/* TABLE RESPONSIVE */}
                    <div className="table-responsive">
                        <table className="table cart_table align-middle bg-dark text-center">
                            <thead>
                                <tr>
                                    <th>IMAGE</th>
                                    <th>PRODUCT NAME</th>
                                    <th>PRICE</th>
                                    <th style={{ minWidth: "140px" }}>QUANTITY</th>
                                    <th>TOTAL</th>
                                    <th>REMOVE</th>
                                </tr>
                            </thead>

                            <tbody>
                                {cartData.length > 0 ? (
                                    cartData.map((item: any) => (
                                        <tr key={item.cartId}>
                                            <td>
                                                <div className="d-flex justify-content-center">
                                                    <Image
                                                        src={item.image_urls?.[0] || "/img/cart1.jpg"}
                                                        alt={item.name}
                                                        width={80}
                                                        height={80}
                                                        className="img-fluid"
                                                    />
                                                </div>
                                            </td>

                                            <td>
                                                <Link href={`/shop/${item.id}`} className="cart-productname text-decoration-none text-uppercase fw-bold">
                                                    {item.name}
                                                </Link>
                                            </td>

                                            <td>₹{item.price}</td>

                                            {/* Quantity */}
                                            <td>
                                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
                                                    <button
                                                        style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '0', display: 'flex', alignItems: 'center' }}
                                                        onClick={() => handleUpdateQty(item.cartId, 'decrease', item.cartQty)}
                                                    >
                                                        <Minus size={16} />
                                                    </button>
                                                    <input
                                                        type="text"
                                                        value={item.cartQty < 10 ? `0${item.cartQty}` : item.cartQty}
                                                        readOnly
                                                        className="form-control text-center"
                                                        style={{ width: '45px', height: '40px', background: '#1e232d', color: '#fff', border: 'none', textAlign: 'center', fontWeight: '700', borderRadius: '2px', padding: '0' }}
                                                    />
                                                    <button
                                                        style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '0', display: 'flex', alignItems: 'center' }}
                                                        onClick={() => handleUpdateQty(item.cartId, 'increase', item.cartQty)}
                                                    >
                                                        <Plus size={16} />
                                                    </button>
                                                </div>
                                            </td>

                                            <td>₹{Number(item.price) * item.cartQty}</td>

                                            <td>
                                                <button
                                                    style={{ background: 'none', border: 'none', color: '#a6d719', cursor: 'pointer', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}
                                                    onClick={() => handleRemoveItem(item.cartId)}
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={6} className="py-5">
                                            <div className="text-center">
                                                <h4 className="text-white mb-4">YOUR CART IS EMPTY</h4>
                                                <Link href="/shop" className="vs-btn cart-animation-item">
                                                    GO TO SHOP
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    <div className="row gy-3 align-items-start mt-4">

                        <div className="col-lg-6 col-md-12 d-flex align-items-start justify-content-start">
                            <div className="d-flex flex-column flex-sm-row gap-2 mt-2 mt-sm-0">
                                <Link href="/shop" className="vs-btn vs-btn--style3 cart-animation-item">
                                    CONTINUE SHOPPING
                                </Link>
                            </div>
                        </div>

                        {/* Coupon */}
                        <div className="col-lg-6 col-md-12">
                            <style>{`
                            .coupon-input::placeholder {
                                color: white !important;
                                opacity: 1;
                            }
                            .coupon-input:focus {
                                border-color: #a6d719 !important;
                                box-shadow: none !important;
                                outline: none !important;
                            }
                        `}</style>
                            <div className="d-flex flex-column flex-sm-row gap-2 justify-content-lg-end">
                                <input
                                    type="text"
                                    className="form-control coupon-input"
                                    placeholder="ENTER YOUR COUPON CODE"
                                    value={couponCode}
                                    onChange={(e) => setCouponCode(e.target.value)}
                                    style={{
                                        background: '#1e232d',
                                        color: '#fff',
                                        border: '1px solid #323441',
                                        borderRadius: '0',
                                        height: '54px'
                                    }}
                                />
                                <button
                                    className="vs-btn cart-animation-item"
                                    style={{ whiteSpace: 'nowrap' }}
                                    onClick={handleApplyCoupon}
                                >
                                    APPLY COUPON
                                </button>
                            </div>

                            {normalizedAppliedCoupons?.length > 0 && (
                                <div className="mt-4 p-3 rounded text-start ms-lg-auto w-100" style={{ backgroundColor: 'rgba(166, 215, 25, 0.05)', border: '1px dashed rgba(166, 215, 25, 0.3)' }}>
                                    <p className="small text-uppercase fw-bold mb-2" style={{ color: '#a6d719', letterSpacing: '1px' }}>Applied Coupons</p>
                                    <div className="d-flex flex-wrap gap-2">
                                        {normalizedAppliedCoupons.map((coupon: any, index: number) => (
                                            <div
                                                key={`applied-pill-${coupon.id || coupon.code || index}`}
                                                className="d-flex align-items-center gap-2 px-3 py-1 rounded"
                                                style={{
                                                    backgroundColor: 'rgba(166, 215, 25, 0.1)',
                                                    color: '#a6d719',
                                                    border: '1px solid rgba(166, 215, 25, 0.3)',
                                                    fontSize: '12px'
                                                }}
                                            >
                                                <span className="fw-bold">
                                                    {typeof coupon === 'string' ? coupon : (coupon.code || coupon.coupon_code || coupon.coupon?.code || coupon.title || coupon.name || 'VALID COUPON')}
                                                </span>
                                                <button
                                                    onClick={() => handleRemoveCoupon(coupon.id || coupon.coupon_id)}
                                                    className="border-0 bg-transparent p-0 d-flex align-items-center text-success hover:text-white transition-all"
                                                >
                                                    <X size={14} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* CART TOTALS */}
                    <div className="row justify-content-end mt-4">
                        <div className="col-lg-6 col-md-12">
                            <div className="checkout-box p-4 rounded" style={{ backgroundColor: '#141622', border: '1px solid #323441' }}>
                                <h4 className="mb-4 text-uppercase fw-bold" style={{ fontSize: '18px', letterSpacing: '1px', borderBottom: '1px solid #323441', paddingBottom: '15px' }}>
                                    Price Details
                                </h4>

                                <div className="space-y-4">
                                    <div className="d-flex justify-content-between align-items-center py-1">
                                        <span className="text-secondary small fw-bold text-uppercase">Subtotal</span>
                                        <span className="fw-bold text-white">{formatPrice(breakdownData.product_total || subtotal)}</span>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center py-1">
                                        <span className="text-secondary small fw-bold text-uppercase">Delivery Charge</span>
                                        {breakdownData.final_delivery_charge > 0 ? (
                                            <div className="text-end fw-bold">
                                                {breakdownData.delivery_charge > breakdownData.final_delivery_charge && (
                                                    <span className="text-muted text-decoration-line-through me-2" style={{ fontSize: '0.85em' }}>
                                                        {formatPrice(breakdownData.delivery_charge)}
                                                    </span>
                                                )}
                                                <span className="text-white">{formatPrice(breakdownData.final_delivery_charge)}</span>
                                            </div>
                                        ) : breakdownData.final_delivery_charge === 0 || breakdownData.final_delivery_charge === "0.00" ? (
                                            <span className="text-success small fw-bold text-uppercase">Free</span>
                                        ) : (
                                            <span className="fw-bold text-white">{formatPrice(0)}</span>
                                        )}
                                    </div>

                                    {breakdownData.total_gift_wrap_price > 0 && (
                                        <div className="d-flex justify-content-between align-items-center py-1 fw-bold">
                                            <span className="text-secondary small fw-bold text-uppercase">Gift Wrap Price</span>
                                            <span className="text-white">{formatPrice(breakdownData.total_gift_wrap_price)}</span>
                                        </div>
                                    )}

                                    {normalizedAppliedCoupons?.map((coupon: any, index: number) => (
                                        <div key={`breakdown-row-${coupon.id || coupon.code || index}`} className="d-flex justify-content-between align-items-center py-1 text-success fw-bold">
                                            <span className="small text-uppercase">Coupon Discount ({coupon.coupon_code || coupon.code || coupon.title || coupon.coupon?.code || 'VALID'})</span>
                                            <span>- {formatPrice(coupon.discount_value || coupon.amount || coupon.discount || 0)}</span>
                                        </div>
                                    ))}

                                    <div className="border-top border-secondary border-dashed my-3" style={{ opacity: 0.3 }}></div>

                                    <div className="d-flex justify-content-between align-items-center pt-2">
                                        <h5 className="mb-0 text-white fw-bold text-uppercase" style={{ fontSize: '18px' }}>Total Payable</h5>
                                        <h5 className="mb-0 fw-bold text-success" style={{ fontSize: '20px' }}>
                                            {formatPrice(breakdownData.final_price_including_delivery || breakdownData.payable_amount || subtotal)}
                                        </h5>
                                    </div>

                                    {normalizedAppliedCoupons?.length > 0 && (
                                        <div className="mt-2 text-end">
                                            <span className="small text-success fw-bold" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>
                                                YAY! YOU SAVED {formatPrice(normalizedAppliedCoupons.reduce((acc: number, c: any) => acc + Number(c.discount_value || c.amount || 0), 0))} ON THIS ORDER
                                            </span>
                                        </div>
                                    )}
                                </div>

                                <Link href="/checkout" className="vs-btn cart-animation-item w-100 mt-4 text-center d-block">
                                    PROCEED TO CHECKOUT
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Home, Minus, Plus, Trash2, Loader2, X, CreditCard, Banknote, MapPin, Check } from "lucide-react";
import ShopWithSideCart from "@/components/ShopWithSideCart";
import { useCartItem } from "@/context/CartItemContext";
import { useProducts } from "@/context/ProductsContext";
import { useVendor } from "@/context/VendorContext";
import { useUser } from "@/context/UserContext";
import { updateCartitemsApi, deleteCartitemsApi, postApplyCouponApi, getAppliedCouponDataApi, deleteCouponApi, getAllCouponsApi, getAddressApi, postPaymentApi, postCODPaymentApi, getCartItemsProductSizesWithVariantsApi } from "@/api-endpoints/CartsApi";
import { getDeliveryChargeApi, patchUserSelectAddressAPi } from "@/api-endpoints/authendication";
import { useQueryClient, InvalidateQueryFilters, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { handleApiError } from "@/lib/error-handler";
import OrderSuccessModal from "@/components/OrderSuccessModal";
import { formatPrice } from "@/lib/utils";
import { slugify } from "@/lib/slugify";

export default function CartPage() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [couponCode, setCouponCode] = useState("");
    const [paymentMethod, setPaymentMethod] = useState('PAY ON');
    const [isProcessing, setIsProcessing] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [orderId, setOrderId] = useState<string | number | undefined>(undefined);

    const { vendorId }: any = useVendor();
    const { user }: any = useUser();
    const queryClient = useQueryClient();
    const userId = user?.data?.id;
    const cartId = typeof window !== 'undefined' ? localStorage.getItem('cartId') : null;

    const { data: detailedCartResponse, isLoading: isCartLoading } = useQuery({
        queryKey: ['getCartItemsDetailed', userId, vendorId],
        queryFn: () => getCartItemsProductSizesWithVariantsApi(`?user_id=${userId}&vendor_id=${vendorId}`),
        enabled: !!userId && !!vendorId,
    });
    const cartData = detailedCartResponse?.data?.cart_items || [];
    console.log("Detailed Cart Data:", cartData);

    const subtotal = cartData.reduce((acc: number, item: any) =>
        acc + (Number(item?.product_details?.price || 0) * item.quantity), 0
    );

    const { data: breakdownRaw } = useQuery({
        queryKey: ["getAppliedCouponDataData", userId],
        queryFn: () => getAppliedCouponDataApi(`?user_id=${userId}`),
        enabled: !!userId
    });

    const { data: addressData } = useQuery({
        queryKey: ["getAddressData", userId],
        queryFn: () => getAddressApi(`user/${userId}`),
        enabled: !!userId,
    });

    const addresses = addressData?.data?.data || addressData?.data || [];
    const selectedAddress = addresses.find((addr: any) => addr.selected_address);
    const selectedAddressId = selectedAddress?.id;

    const handleSelectAddress = async (address: any) => {
        try {
            await patchUserSelectAddressAPi(`user/${userId}/address/${address.id}`, {
                updated_by: user?.data?.name ? user?.data?.name : "user",
                vendor_id: vendorId
            });
            queryClient.invalidateQueries(["getAddressData"] as InvalidateQueryFilters);
            queryClient.invalidateQueries(["getDeliveryCharge"] as InvalidateQueryFilters);
            toast.success("Shipping address updated");
        } catch (e) { toast.error(handleApiError(e)); }
    };

    const { data: deliveryResponseRaw, isLoading: isBreakdownLoading } = useQuery({
        queryKey: ["getDeliveryCharge", userId, vendorId, paymentMethod, selectedAddressId],
        queryFn: () => getDeliveryChargeApi("", {
            user_id: userId,
            vendor_id: vendorId,
            payment_mode: paymentMethod === "PAY ON" ? "Prepaid" : "COD",
            customer_phone: user?.data?.contact_number || "",
            total_amount: subtotal,
            user_address_id: selectedAddressId,
            cart_id: cartId
        }),
        enabled: !!userId && !!vendorId && cartData.length > 0
    });
    const breakdownData = deliveryResponseRaw?.data?.data || deliveryResponseRaw?.data || {};
    const appliedCoupons = breakdownRaw?.data?.applied_coupons || breakdownRaw?.data?.data || [];
    const normalizedAppliedCoupons = Array.isArray(appliedCoupons) ? appliedCoupons : (appliedCoupons ? [appliedCoupons] : []);

    const totalDiscount = normalizedAppliedCoupons.reduce((acc: number, coupon: any) =>
        acc + Number(coupon.discount_value || coupon.amount || coupon.discount || 0), 0
    );

    const { data: allCouponsRaw } = useQuery({
        queryKey: ["getAllCouponsData", vendorId],
        queryFn: () => getAllCouponsApi(`?vendor_id=${vendorId}`),
        enabled: !!vendorId
    });

    const availableCoupons: any[] = allCouponsRaw?.data?.data || allCouponsRaw?.data || [];
    const appliedCouponIds = normalizedAppliedCoupons.map((c: any) => c.coupon_id || c.id);

    const handleApplyCoupon = async (specificCode?: string) => {
        const codeToApply = specificCode || couponCode;
        const normalizedCode = codeToApply.replace(/\s+/g, "").toUpperCase();
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
            queryClient.invalidateQueries({ queryKey: ["getCartItemsDetailed"] });
        } catch (e: any) {
            toast.error(handleApiError(e));
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
            toast.success("Coupon removed from cart");
            queryClient.invalidateQueries({ queryKey: ["getAppliedCouponDataData"] });
            queryClient.invalidateQueries({ queryKey: ["getDeliveryCharge"] });
            queryClient.invalidateQueries({ queryKey: ["getCartitemsData"] });
            queryClient.invalidateQueries({ queryKey: ["getCartItemsDetailed"] });
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

    const handleRemoveItem = async (id: any) => {
        try {
            await deleteCartitemsApi(`${id}/`);
            queryClient.invalidateQueries(["getCartitemsData"] as InvalidateQueryFilters);
            queryClient.invalidateQueries(["getCartItemsDetailed"] as InvalidateQueryFilters);
            toast.success("Item removed from cart");
        } catch (e) { toast.error(handleApiError(e)); }
    };

    const handleCheckout = async () => {
        if (cartData.length === 0) return toast.error("Your cart is empty");
        if (!selectedAddressId) return toast.error("Please select a shipping address");
        setIsProcessing(true);
        try {
            if (paymentMethod === "PAY ON") {
                // Razorpay Flow
                const res = await postPaymentApi("", {
                    user_id: userId,
                    vendor_id: vendorId,
                    customer_phone: user?.data?.contact_number || "",
                    cart_id: cartId,
                    updated_by: user?.data?.name,
                    user_address_id: selectedAddressId,
                    payment_mode: "Prepaid",
                    total_amount: subtotal
                });
                const data = res.data?.data || res.data;
                const options = {
                    key: data.razorpay_key,
                    amount: data.amount,
                    currency: data.currency,
                    name: "FIXER SHOP",
                    order_id: data.razorpay_order_id,
                    handler: function (response: any) {
                        setOrderId(data.order_id);
                        setPaymentSuccess(true);
                        queryClient.invalidateQueries({ queryKey: ["getCartitemsData"] });
                        queryClient.invalidateQueries({ queryKey: ["getCartItemsDetailed"] });
                        queryClient.invalidateQueries({ queryKey: ["getAppliedCouponDataData"] });
                        queryClient.invalidateQueries({ queryKey: ["getDeliveryCharge"] });
                    },
                    prefill: { name: user?.data?.name, email: user?.data?.email, contact: user?.data?.contact_number },
                    theme: { color: "#a6d719" },
                };
                const paymentObject = new (window as any).Razorpay(options);
                paymentObject.open();
            } else {

                const res = await postCODPaymentApi("", {
                    user_id: userId,
                    vendor_id: vendorId,
                    customer_phone: user?.data?.contact_number || "",
                    cart_id: cartId,
                    updated_by: user?.data?.name,
                    user_address_id: selectedAddressId,
                    payment_mode: "COD",
                    total_amount: subtotal
                });
                if (res.status === 200 || res.status === 201) {
                    setOrderId(res.data?.data?.order_id || res.data?.order_id);
                    setPaymentSuccess(true);
                    queryClient.invalidateQueries({ queryKey: ["getCartitemsData"] });
                    queryClient.invalidateQueries({ queryKey: ["getCartItemsDetailed"] });
                    queryClient.invalidateQueries({ queryKey: ["getAppliedCouponDataData"] });
                    queryClient.invalidateQueries({ queryKey: ["getDeliveryCharge"] });
                }
            }
        } catch (error: any) { toast.error(handleApiError(error)); }
        finally { setIsProcessing(false); }
    };
    if (isCartLoading) {
        return (
            <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "60vh" }}>
                <Loader2 className="animate-spin mb-3" style={{ color: "#a6d719" }} size={50} />
                <p className="text-white">LOADING YOUR CART...</p>
            </div>
        );
    }
    return (
        <>
            <ShopWithSideCart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
            <section className="vs-cart-wrapper py-5">
                <div className="gt-breadcrumb-wrapper bg-cover" style={{ backgroundImage: "url('assets/img/breadcrumb.png')" }}>
                    <div className="container">
                        <div className="gt-page-heading">
                            <h1 className="wow fadeInUp">CART</h1>
                            <ul className="gt-breadcrumb-items">
                                <li><Link href="/" className="d-inline-flex align-items-center gap-1"><Home size={16} /> HOME :</Link></li>
                                <li className="color">CART</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
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
                                        <tr key={item.id}>
                                            <td>
                                                <div className="d-flex justify-content-center">
                                                    <Image
                                                        src={item?.product_details?.image_urls?.[0] || "/img/placeholder.jpg"}
                                                        alt={item?.product_details?.name}
                                                        width={80}
                                                        height={80}
                                                        className="img-fluid rounded"
                                                    />
                                                </div>
                                            </td>
                                            <td className="text-start ps-4">
                                                <Link href={`/shop/${slugify(item?.product_details?.name)}`} className="cart-productname text-decoration-none text-uppercase fw-bold d-block">
                                                    {item?.product_details?.name}
                                                </Link>

                                                {/* VARIANT LABELS */}
                                                <div className="d-flex gap-2 mt-1">
                                                    {item?.product_details?.product_variant_title && (
                                                        <span className="badge bg-secondary opacity-75">{item.product_details.product_variant_title}</span>
                                                    )}
                                                    {item?.product_details?.product_size && (
                                                        <span className="badge bg-success opacity-75">Size: {item.product_details.product_size}</span>
                                                    )}
                                                </div>
                                            </td>
                                            <td>{formatPrice(item?.product_details?.price)}</td>
                                            <td>
                                                <div className="d-flex align-items-center justify-content-center gap-3">
                                                    <button className="bg-transparent border-0 text-white" onClick={() => handleUpdateQty(item.id, 'decrease', item.quantity)}><Minus size={16} /></button>
                                                    <span className="fw-bold">{item.quantity}</span>
                                                    <button className="bg-transparent border-0 text-white" onClick={() => handleUpdateQty(item.id, 'increase', item.quantity)}><Plus size={16} /></button>
                                                </div>
                                            </td>
                                            <td>{formatPrice(Number(item?.product_details?.price || 0) * item.quantity)}</td>
                                            <td>
                                                <button className="bg-transparent border-0" style={{ color: "#a6d719" }} onClick={() => handleRemoveItem(item.id)}><Trash2 size={18} /></button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr><td colSpan={6} className="py-5 text-center text-white"><h4>YOUR CART IS EMPTY</h4><Link href="/shop" className="vs-btn mt-3">GO TO SHOP</Link></td></tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {cartData.length > 0 && (
                        <div className="row g-4 gx-md-5 gy-md-2 align-items-start mt-2">
                            {/* LEFT — Coupon section */}
                            <div className="col-lg-7 col-md-12">
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
                                {(() => {
                                    const isCouponApplied = normalizedAppliedCoupons.length > 0;
                                    const firstCoupon = normalizedAppliedCoupons[0];

                                    const couponLookup = firstCoupon?.coupon_id
                                        ? availableCoupons.find((c: any) => Number(c.id) === Number(firstCoupon.coupon_id))
                                        : null;

                                    const appliedCouponName = isCouponApplied
                                        ? (typeof firstCoupon === 'string'
                                            ? firstCoupon
                                            : (firstCoupon.coupon_code || firstCoupon.code || couponLookup?.code || firstCoupon.coupon?.code || firstCoupon.title || 'APPLIED'))
                                        : '';
                                    return !isCouponApplied ? (
                                        <div className="d-flex flex-row gap-3 mb-3">
                                            <input
                                                type="text"
                                                className="form-control coupon-input"
                                                placeholder="ENTER COUPON CODE"
                                                value={couponCode}
                                                onChange={(e) => setCouponCode(e.target.value)}
                                                style={{
                                                    background: '#1e232d',
                                                    color: '#fff',
                                                    border: '1px solid #323441',
                                                    borderRadius: '0',
                                                    height: '54px',
                                                }}
                                            />
                                            <button
                                                className="vs-btn cart-animation-item"
                                                style={{
                                                    whiteSpace: 'nowrap'
                                                }}
                                                onClick={() => handleApplyCoupon()}
                                            >
                                                APPLY COUPON
                                            </button>
                                        </div>
                                    ) : null;
                                })()}

                                <div className="p-4 rounded" style={{ backgroundColor: '#141622', border: '1px solid #323441', borderRadius: '12px' }}>
                                    {normalizedAppliedCoupons?.length > 0 && (
                                        <div className="p-3 rounded text-start w-100" style={{ backgroundColor: 'rgba(166, 215, 25, 0.05)', border: '1px dashed rgba(166, 215, 25, 0.3)' }}>
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
                                                            {(() => {
                                                                const couponLookup = coupon?.coupon_id
                                                                    ? availableCoupons.find((c: any) => Number(c.id) === Number(coupon.coupon_id))
                                                                    : null;
                                                                return typeof coupon === 'string'
                                                                    ? coupon
                                                                    : (coupon.coupon_code || coupon.code || couponLookup?.code || coupon.coupon?.code || coupon.title || coupon.name || 'VALID');
                                                            })()}
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

                                    {normalizedAppliedCoupons.length === 0 && (() => {
                                        const cartProductIds = cartData.map((item: any) => Number(item.product));
                                        const todayDayName = new Date().toLocaleDateString('en-US', { weekday: 'long' });
                                        const eligibleCoupons = availableCoupons
                                            ?.filter((c: any) => c.is_active && c.visibility)
                                            ?.filter((c: any) => !c.auto_apply)
                                            ?.filter((c: any) => !appliedCouponIds.includes(c.id))
                                            ?.filter((c: any) => !c.allowed_users?.length || c.allowed_users.includes(userId))
                                            ?.filter((c: any) => !c.valid_days?.length || c.valid_days.includes(todayDayName))
                                            ?.filter((c: any) => subtotal >= Number(c.min_purchase_amount || 0))
                                            ?.filter((c: any) => !c.required_products?.length || c.required_products.every((id: number) => cartProductIds.includes(id)))
                                            ?.filter((c: any) => {
                                                const now = new Date();
                                                const start = c.start_date ? new Date(c.start_date) : null;
                                                const expiry = c.expiry_date ? new Date(c.expiry_date) : null;
                                                if (start && now < start) return false;
                                                if (expiry && now > expiry) return false;
                                                return true;
                                            }) || [];
                                        return (
                                            <div className="w-100">
                                                <style>{`
                                                .coupon-scroll::-webkit-scrollbar { width: 4px; }
                                                .coupon-scroll::-webkit-scrollbar-track { background: #0b0e13; border-radius: 4px; }
                                                .coupon-scroll::-webkit-scrollbar-thumb { background: #a6d719; border-radius: 4px; }
                                                .coupon-scroll::-webkit-scrollbar-thumb:hover { background: #c8ff1e; }
                                            `}</style>
                                                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between mb-2 gap-1">
                                                    <p className="small text-uppercase fw-bold mb-0 text-white" style={{ letterSpacing: '1px' }}>
                                                        Available Coupons - <span style={{ color: '#a6d719' }}>click to apply</span>
                                                    </p>
                                                    {eligibleCoupons.length > 0 && (
                                                        <span
                                                            className="fw-bold"
                                                            style={{
                                                                fontSize: '10px',
                                                                background: 'rgba(166,215,25,0.12)',
                                                                color: '#a6d719',
                                                                border: '1px solid rgba(166,215,25,0.3)',
                                                                borderRadius: '20px',
                                                                padding: '2px 10px',
                                                                letterSpacing: '0.5px'
                                                            }}
                                                        >
                                                            {eligibleCoupons.length} AVAILABLE
                                                        </span>
                                                    )}
                                                </div>
                                                {eligibleCoupons.length === 0 ? (
                                                    <div
                                                        className="p-3 rounded text-center"
                                                        style={{ backgroundColor: '#0b0e13', border: '1px dashed #323441' }}
                                                    >
                                                        <span style={{ fontSize: '20px' }}>🏷️</span>
                                                        <p className="mb-1 mt-2 text-secondary small fw-bold text-uppercase" style={{ letterSpacing: '1px' }}>
                                                            No Coupons Available
                                                        </p>
                                                        <p className="mb-0 text-secondary" style={{ fontSize: '11px' }}>
                                                            No eligible coupons for your current cart. Try adding more items!
                                                        </p>
                                                    </div>
                                                ) : (
                                                    <div style={{ position: 'relative' }}>
                                                        <div
                                                            className="coupon-scroll d-flex flex-column gap-2"
                                                            style={{
                                                                maxHeight: '280px',
                                                                overflowY: 'auto',
                                                                paddingRight: '4px',
                                                                scrollbarWidth: 'thin',
                                                                scrollbarColor: '#a6d719 #0b0e13'
                                                            }}
                                                        >
                                                            {eligibleCoupons.map((coupon: any) => (
                                                                <div
                                                                    key={coupon.id}
                                                                    onClick={() => {
                                                                        setCouponCode(coupon.code);
                                                                        handleApplyCoupon(coupon.code);
                                                                    }}
                                                                    className="p-3 rounded"
                                                                    style={{
                                                                        backgroundColor: '#0b0e13',
                                                                        border: '1px dashed #323441',
                                                                        cursor: 'pointer',
                                                                        transition: 'border-color 0.2s'
                                                                    }}
                                                                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#a6d719')}
                                                                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#323441')}
                                                                >
                                                                    <div className="d-flex justify-content-between align-items-center">
                                                                        <span className="fw-bold" style={{ color: '#a6d719', fontSize: '13px', letterSpacing: '1px' }}>
                                                                            {coupon.code}
                                                                        </span>
                                                                        <span className="small text-secondary">
                                                                            {coupon.discount_type === 'delivery'
                                                                                ? `${formatPrice(coupon.delivery_discount)} delivery OFF`
                                                                                : coupon.discount_type === 'percentage'
                                                                                    ? `${coupon.discount_value}% OFF`
                                                                                    : `${formatPrice(coupon.flat_discount)} OFF`}
                                                                        </span>
                                                                    </div>
                                                                    {coupon.description && (
                                                                        <p className="mb-1 mt-1 text-secondary" style={{ fontSize: '11px' }}>
                                                                            {coupon.description}
                                                                        </p>
                                                                    )}
                                                                    <div className="d-flex flex-wrap gap-1 mt-1">
                                                                        {Number(coupon.min_purchase_amount) > 0 && (
                                                                            <span style={{ fontSize: '10px', color: '#888', background: '#1a1d27', padding: '2px 7px', borderRadius: '4px' }}>
                                                                                Min {formatPrice(coupon.min_purchase_amount)}
                                                                            </span>
                                                                        )}
                                                                        {coupon.valid_days?.length > 0 && (
                                                                            <span style={{ fontSize: '10px', color: '#888', background: '#1a1d27', padding: '2px 7px', borderRadius: '4px' }}>
                                                                                {coupon.valid_days.join(', ')}
                                                                            </span>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })()}
                                </div>
                            </div>

                            {/* RIGHT — Continue Shopping + Price Details */}
                            <div className="col-lg-5 col-md-12">
                                <div className="mb-3 d-none d-lg-flex justify-content-end">
                                    <Link href="/shop" className="vs-btn cart-animation-item">
                                        CONTINUE SHOPPING
                                    </Link>
                                </div>

                                <div className="mb-4 p-4 rounded" style={{ backgroundColor: '#141622', border: '1px solid #323441', borderRadius: '12px' }}>
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <h4 className="text-uppercase m-0 fw-bold" style={{ fontSize: '18px', letterSpacing: '1px' }}>Shipping Address</h4>
                                        <Link href="/profile?tab=addresses" className="btn btn-sm text-white d-flex align-items-center gap-1 hover:underline p-0 border-0 bg-transparent opacity-80 hover:opacity-100 transition-opacity">
                                            <Plus size={16} /> Manage
                                        </Link>
                                    </div>

                                    {addresses.length > 0 ? (
                                        <div className="d-flex flex-column gap-3">
                                            {addresses.map((addr: any) => (
                                                <div
                                                    key={addr.id}
                                                    onClick={() => handleSelectAddress(addr)}
                                                    className={`p-3 rounded border cursor-pointer transition-all duration-300 d-flex align-items-center gap-3 ${addr.selected_address ? 'border-[#a6d719] bg-[#a6d719]/5' : 'border-[#323441] bg-[#0b0e13]'}`}
                                                >
                                                    <div className="rounded-circle border d-flex align-items-center justify-content-center"
                                                        style={{
                                                            minWidth: '20px',
                                                            width: '20px',
                                                            height: '20px',
                                                            borderColor: addr.selected_address ? '#a6d719' : '#555',
                                                            borderWidth: '2px'
                                                        }}>
                                                        {addr.selected_address && <div className="rounded-circle" style={{ width: '10px', height: '10px', background: '#a6d719' }} />}
                                                    </div>

                                                    {/* Address Details */}
                                                    <div className="flex-grow-1">
                                                        <p className="small text-white mb- fw-bold" style={{ fontSize: '13px' }}>
                                                            {addr.customer_name}{addr.phone_number && `, +91${addr.phone_number}`}
                                                        </p>
                                                        <p className="small text-secondary m-0" style={{ fontSize: '11px', lineHeight: '1.6' }}>
                                                            {addr.address_line1}, {addr.city}
                                                            {addr.state && `, ${addr.state}`} {addr.pincode && `- ${addr.pincode}`}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="text-center py-4 bg-[#0b0e13] rounded border border-dashed border-[#323441]">
                                            <MapPin size={30} className="text-secondary mb-2 mx-auto" />
                                            <p className="text-secondary small mb-3">No addresses found</p>
                                            <Link href="/profile?tab=addresses" className="vs-btn vs-btn-sm" style={{ fontSize: '12px', padding: '8px 15px' }}>Add Address</Link>
                                        </div>
                                    )}
                                </div>

                                <div className="p-4 rounded" style={{ backgroundColor: '#141622', border: '1px solid #323441', borderRadius: '12px' }}>
                                    <h4 className="mb-4 text-uppercase fw-bold" style={{ fontSize: '18px', letterSpacing: '1px', borderBottom: '1px solid #323441', paddingBottom: '15px' }}>
                                        Price Details
                                    </h4>

                                    <div className="space-y-4">
                                        <div className="d-flex justify-content-between align-items-center py-1">
                                            <span className="text-white small fw-bold text-uppercase">Subtotal</span>
                                            <span className="fw-bold text-white">{formatPrice(breakdownData.product_total || subtotal)}</span>
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center py-1">
                                            <span className="text-white small fw-bold text-uppercase">Delivery Charge</span>
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
                                                <span className="small text-uppercase">
                                                    Coupon Discount (
                                                    {(() => {
                                                        const couponLookup = coupon?.coupon_id
                                                            ? availableCoupons.find((c: any) => Number(c.id) === Number(coupon.coupon_id))
                                                            : null;
                                                        return coupon.coupon_code || coupon.code || couponLookup?.code || coupon.title || coupon.coupon?.code || 'VALID';
                                                    })()}
                                                    )
                                                </span>
                                                <span>- {formatPrice(coupon.discount_value || coupon.amount || coupon.discount || 0)}</span>
                                            </div>
                                        ))}

                                        <div className="border-top border-secondary border-dashed my-3" style={{ opacity: 0.3 }}></div>

                                        <div className="d-flex justify-content-between align-items-center pt-2">
                                            <h5 className="mb-0 text-white fw-bold text-uppercase" style={{ fontSize: '18px' }}>Total Payable</h5>
                                            <h5 className="mb-0 fw-bold text-success" style={{ fontSize: '20px' }}>
                                                {formatPrice(
                                                    (breakdownData.final_price_including_delivery || breakdownData.payable_amount)
                                                        ? (breakdownData.final_price_including_delivery || breakdownData.payable_amount)
                                                        : (subtotal + Number(breakdownData.final_delivery_charge || 0) + Number(breakdownData.total_gift_wrap_price || 0) - totalDiscount)
                                                )}
                                            </h5>
                                        </div>

                                        <div className="mt-5">
                                            <h4 className="mb-3 text-uppercase fw-bold" style={{ fontSize: '16px', letterSpacing: '1px' }}>Payment Method</h4>
                                            <div className="space-y-3">
                                                <div
                                                    onClick={() => setPaymentMethod('PAY ON')}
                                                    className={`p-3 rounded border cursor-pointer transition-all d-flex align-items-center gap-3 ${paymentMethod === 'PAY ON' ? 'border-[#a6d719] bg-[#a6d719]/5' : 'border-[#323441]'}`}
                                                    style={{
                                                        borderColor: paymentMethod === 'PAY ON' ? '#a6d719' : '#323441',
                                                        background: paymentMethod === 'PAY ON' ? '' : 'transparent'
                                                    }}
                                                >
                                                    <div className={`rounded-circle border d-flex align-items-center justify-content-center`}
                                                        style={{
                                                            width: '20px',
                                                            height: '20px',
                                                            borderColor: paymentMethod === 'PAY ON' ? '#a6d719' : '#555'
                                                        }}>
                                                        {paymentMethod === 'PAY ON' && <div className="rounded-circle" style={{ width: '10px', height: '10px', background: '#a6d719' }} />}
                                                    </div>
                                                    <CreditCard size={18} style={{ color: paymentMethod === 'PAY ON' ? '#a6d719' : '#888' }} />
                                                    <span className={`small fw-bold ${paymentMethod === 'PAY ON' ? 'text-white' : 'text-secondary'}`}>PREPAID (UPI / CARDS)</span>
                                                </div>

                                                <div
                                                    onClick={() => setPaymentMethod('cod')}
                                                    className={`p-3 rounded border cursor-pointer transition-all d-flex align-items-center gap-3 mt-2 ${paymentMethod === 'cod' ? 'border-[#a6d719] bg-[#a6d719]/5' : 'border-[#323441]'}`}
                                                    style={{
                                                        borderColor: paymentMethod === 'cod' ? '#a6d719' : '#323441',
                                                        background: paymentMethod === 'cod' ? '' : 'transparent'
                                                    }}
                                                >
                                                    <div className={`rounded-circle border d-flex align-items-center justify-content-center`}
                                                        style={{
                                                            width: '20px',
                                                            height: '20px',
                                                            borderColor: paymentMethod === 'cod' ? '#a6d719' : '#555'
                                                        }}>
                                                        {paymentMethod === 'cod' && <div className="rounded-circle" style={{ width: '10px', height: '10px', background: '#a6d719' }} />}
                                                    </div>
                                                    <Banknote size={18} style={{ color: paymentMethod === 'cod' ? '#a6d719' : '#888' }} />
                                                    <span className={`small fw-bold ${paymentMethod === 'cod' ? 'text-white' : 'text-secondary'}`}>CASH ON DELIVERY</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        className="vs-btn cart-animation-item w-100 mt-4 text-center d-flex align-items-center justify-content-center gap-2"
                                        onClick={handleCheckout}
                                        disabled={!selectedAddressId || isProcessing || isBreakdownLoading || cartData.length === 0}
                                        style={{ border: 'none' }}
                                    >
                                        {isProcessing && <Loader2 className="animate-spin" size={20} />}
                                        {isProcessing ? 'PROCESSING...' : paymentMethod === 'PAY ON' ? 'PAY & PLACE ORDER' : 'PLACE ORDER (COD)'}
                                    </button>
                                    {!selectedAddressId && cartData.length > 0 && (
                                        <p className="text-danger small mt-2 text-center fw-bold opacity-75">PLEASE SELECT AN ADDRESS TO PROCEED</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <OrderSuccessModal
                isOpen={paymentSuccess}
                onClose={() => {
                    setPaymentSuccess(false);
                    window.location.reload();
                }}
                orderId={orderId}
            />
        </>
    );
}

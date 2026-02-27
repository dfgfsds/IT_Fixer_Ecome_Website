"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { X, Minus, Plus, Loader2 } from "lucide-react";
import { useCartItem } from "@/context/CartItemContext";
import { deleteCartitemsApi, updateCartitemsApi, getCartItemsProductSizesWithVariantsApi } from "@/api-endpoints/CartsApi";
import { InvalidateQueryFilters, useQuery, useQueryClient } from "@tanstack/react-query";
import { useVendor } from "@/context/VendorContext";
import { formatPrice } from "@/lib/utils";

export default function ShopWithSideCart({ isCartOpen, setIsCartOpen }: any) {
    const queryClient = useQueryClient();
    const { vendorId } = useVendor();
    const [userId, setUserId] = useState<string | null>(null);

    useEffect(() => {
        setUserId(localStorage.getItem('userId'));
    }, []);

    const { data: detailedCart, isLoading: isCartLoading } = useQuery({
        queryKey: ['getCartItemsDetailed', userId, vendorId],
        queryFn: () => getCartItemsProductSizesWithVariantsApi(`?user_id=${userId}&vendor_id=${vendorId}`),
        enabled: !!userId && !!vendorId && isCartOpen,
    });

    const cartData = detailedCart?.data?.cart_items || [];

    const subtotal = cartData.reduce((acc: number, item: any) => {
        return acc + (Number(item?.product_details?.price || 0) * item.quantity);
    }, 0);

    const handleUpdateQuantity = async (cartId: any, type: 'increase' | 'decrease', currentQty: number) => {
        try {
            if (type === 'decrease' && currentQty === 1) {
                await deleteCartitemsApi(`${cartId}/`);
            } else {
                await updateCartitemsApi(`${cartId}/${type}/`);
            }
            queryClient.invalidateQueries(["getCartitemsData"] as InvalidateQueryFilters);
            queryClient.invalidateQueries(["getCartItemsDetailed"] as InvalidateQueryFilters);
        } catch (error) { console.error(error); }
    };

    return (
        <>
            <div className={`cart-overlay ${isCartOpen ? "show" : ""}`} onClick={() => setIsCartOpen(false)}></div>
            <div className={`side-cart ${isCartOpen ? "open" : ""}`} style={{ display: 'flex', flexDirection: 'column' }}>

                <div className="d-flex justify-content-between align-items-center mb-4 border-bottom border-secondary pb-3">
                    <h4 className="fw-bold text-uppercase text-light m-0">Cart ({cartData.length})</h4>
                    <button className="btn-close btn-close-white" onClick={() => setIsCartOpen(false)}></button>
                </div>

                <div className="cart-items flex-grow-1 overflow-auto">
                    {isCartLoading ? (
                        <div className="text-center pt-5"><Loader2 className="animate-spin text-success" /></div>
                    ) : cartData.length > 0 ? (
                        cartData.map((item: any) => (
                            <div key={item.id} className="d-flex align-items-center mb-4 border-bottom border-secondary pb-3">
                                {/* Variant-Specific Image */}
                                <img
                                    src={item?.product_details?.image_urls?.[0] || "/assets/img/placeholder.png"}
                                    alt="img"
                                    width="70"
                                    height="70"
                                    className="rounded bg-dark object-fit-contain"
                                />

                                <div className="ms-3 flex-grow-1">
                                    <h6 className="text-light mb-1">{item?.product_details?.name}</h6>

                                    <div className="d-flex gap-2 mb-2">
                                        {item?.product_details?.product_variant_title && (
                                            <span className="badge bg-secondary opacity-75">{item.product_details.product_variant_title}</span>
                                        )}
                                        {item?.product_details?.product_size && (
                                            <span className="badge bg-success opacity-75">Size: {item.product_details.product_size}</span>
                                        )}
                                    </div>

                                    <div className="d-flex align-items-center gap-2">
                                        <div className="d-flex align-items-center border border-secondary rounded overflow-hidden" style={{ height: '30px' }}>
                                            <button className="btn btn-sm text-white px-2 h-100" onClick={() => handleUpdateQuantity(item.id, 'decrease', item.quantity)}>-</button>
                                            <span className="small px-2 border-start border-end border-secondary h-100 d-flex align-items-center">{item.quantity}</span>
                                            <button className="btn btn-sm text-white px-2 h-100" onClick={() => handleUpdateQuantity(item.id, 'increase', item.quantity)}>+</button>
                                        </div>
                                        <span className="text-success fw-bold">
                                            {formatPrice(Number(item?.product_details?.price) * item.quantity)}
                                        </span>
                                    </div>
                                </div>

                                <button
                                    className="btn btn-sm text-danger"
                                    onClick={() => handleUpdateQuantity(item.id, 'decrease', 1)}
                                >
                                    <X size={18} />
                                </button>
                            </div>
                        ))
                    ) : (
                        <div className="text-center text-secondary mt-5">
                            <p>Your cart is empty</p>
                            <Link href="/shop" onClick={() => setIsCartOpen(false)} className="text-success text-decoration-underline">Start Shopping</Link>
                        </div>
                    )}
                </div>

                {cartData.length > 0 && (
                    <div className="mt-auto pt-3 border-top border-secondary">
                        <div className="d-flex justify-content-between text-light fw-bold mb-3">
                            <span>SUBTOTAL:</span>
                            <span className="text-success">{formatPrice(subtotal)}</span>
                        </div>
                        <div className="d-grid gap-2">
                            <Link href="/cart" onClick={() => setIsCartOpen(false)} className="vs-btn cart-animation-item text-center">Checkout</Link>
                            {/* <Link href="/checkout" onClick={() => setIsCartOpen(false)} className="vs-btn vs-btn--style3 cart-animation-item text-center">CHECKOUT</Link> */}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}


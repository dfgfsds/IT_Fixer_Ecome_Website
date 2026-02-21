"use client";
import React from "react";
import Link from "next/link";
import { X, Minus, Plus, Loader2 } from "lucide-react";
import { useCartItem } from "@/context/CartItemContext";
import { useProducts } from "@/context/ProductsContext";
import { deleteCartitemsApi, updateCartitemsApi } from "@/api-endpoints/CartsApi";
import { InvalidateQueryFilters, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function ShopWithSideCart({ isCartOpen, setIsCartOpen }: any) {
    const { cartItem, isLoading: isCartLoading }: any = useCartItem();
    const { products: apiProducts }: any = useProducts();
    const queryClient = useQueryClient();

    const cartData = (cartItem?.data || []).map((item: any) => {
        const productDetails = apiProducts?.data?.find((p: any) => Number(p.id) === Number(item.product));
        return {
            ...item,
            ...productDetails,
            cartId: item.id,
            cartQty: item.quantity
        };
    }).filter((item: any) => item.name);

    const subtotal = cartData.reduce((acc: number, item: any) => acc + (item.price * item.cartQty), 0);

    const handleUpdateQuantity = async (cartId: any, type: 'increase' | 'decrease', currentQty: number) => {
        try {
            if (type === 'decrease' && currentQty === 1) {
                await deleteCartitemsApi(`${cartId}/`);
            } else {
                await updateCartitemsApi(`${cartId}/${type}/`);
            }
            queryClient.invalidateQueries(["getCartitemsData"] as InvalidateQueryFilters);
        } catch (error) { console.error(error); }
    };

    return (
        <>
            <div className={`cart-overlay ${isCartOpen ? "show" : ""}`} onClick={() => setIsCartOpen(false)}></div>
            <div className={`side-cart ${isCartOpen ? "open" : ""}`} style={{ display: 'flex', flexDirection: 'column' }}>

                <div className="d-flex justify-content-between align-items-center mb-4 border-bottom border-secondary pb-3">
                    <h4 className="fw-bold text-uppercase text-light m-0">Cart</h4>
                    <button className="btn-close btn-close-white" onClick={() => setIsCartOpen(false)}></button>
                </div>

                <div className="cart-items flex-grow-1 overflow-auto">
                    {isCartLoading ? <div className="text-center pt-5"><Loader2 className="animate-spin text-success" /></div> :
                        cartData.length > 0 ? cartData.map((item: any) => (
                            <div key={item.cartId} className="d-flex align-items-center mb-4 border-bottom border-secondary pb-3">
                                <img src={item.image_urls?.[0]} alt="img" width="70" className="rounded bg-dark" />
                                <div className="ms-3 flex-grow-1">
                                    <h6 className="text-light mb-1">{item.name}</h6>
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="d-flex align-items-center border border-secondary rounded overflow-hidden" style={{ height: '30px' }}>
                                            <button className="btn btn-sm text-white px-2 h-100" onClick={() => handleUpdateQuantity(item.cartId, 'decrease', item.cartQty)}>-</button>
                                            <span className="small px-2 border-start border-end border-secondary h-100 d-flex align-items-center">{item.cartQty}</span>
                                            <button className="btn btn-sm text-white px-2 h-100" onClick={() => handleUpdateQuantity(item.cartId, 'increase', item.cartQty)}>+</button>
                                        </div>
                                        <span className="text-success fw-bold">₹{item.price * item.cartQty}</span>
                                    </div>
                                </div>
                                <button className="btn btn-sm text-danger" onClick={() => deleteCartitemsApi(`${item.cartId}/`).then(() => queryClient.invalidateQueries(["getCartitemsData"] as InvalidateQueryFilters))}><X size={18} /></button>
                            </div>
                        )) : <p className="text-center text-secondary mt-5">Your cart is empty</p>}
                </div>

                {cartData.length > 0 && (
                    <div className="mt-auto pt-3 border-top border-secondary">
                        <div className="d-flex justify-content-between text-light fw-bold mb-3">
                            <span>SUBTOTAL:</span>
                            <span className="text-success">₹{subtotal}</span>
                        </div>
                        <div className="d-grid gap-2">
                            <Link href="/cart" className="vs-btn cart-animation-item text-center">VIEW CART</Link>
                            <Link href="/checkout" className="vs-btn vs-btn--style3 cart-animation-item text-center">CHECKOUT</Link>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
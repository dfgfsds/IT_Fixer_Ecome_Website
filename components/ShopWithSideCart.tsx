'use client';

import Link from "next/link";

interface ShopWithSideCartProps {
    isCartOpen: boolean;
    setIsCartOpen: (isOpen: boolean) => void;
}

export default function ShopWithSideCart({ isCartOpen, setIsCartOpen }: ShopWithSideCartProps) {
    return (
        <>
            {/* Overlay */}
            <div
                className={`cart-overlay ${isCartOpen ? "show" : ""}`}
                onClick={() => setIsCartOpen(false)}
            ></div>

            {/* Side Cart */}
            <div className={`side-cart ${isCartOpen ? "open" : ""}`}>

                {/* Header */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="fw-bold text-uppercase text-light">Cart</h4>
                    <button
                        className="btn-close btn-close-white"
                        onClick={() => setIsCartOpen(false)}
                    ></button>
                </div>

                {/* Cart Items */}
                <div className="cart-items">
                    {[1, 2, 3].map((item, index) => (
                        <div key={index} className="d-flex align-items-center mb-4 border-bottom pb-3">

                            <img
                                src="https://i.ibb.co/Lkhm7G0/headphones.png"
                                alt="item"
                                width="70"
                                className="rounded"
                            />

                            <div className="ms-3 flex-grow-1">
                                <h6 className="text-light mb-1">Gaming Headphones</h6>

                                <div className="d-flex align-items-center gap-2">
                                    <input
                                        type="number"
                                        defaultValue={1}
                                        min={1}
                                        className="form-control form-control-sm bg-dark text-white border-secondary"
                                        style={{ width: "70px" }}
                                    />
                                    <span className="text-success fw-bold">$100.00</span>
                                </div>
                            </div>

                            <button className="btn btn-sm btn-outline-danger ms-2">
                                ✕
                            </button>
                        </div>
                    ))}
                </div>

                {/* Subtotal */}
                <div className="mt-auto">
                    <div className="d-flex justify-content-between text-light fw-bold mb-3">
                        <span>SUBTOTAL:</span>
                        <span className="text-success">$300.00</span>
                    </div>

                    <div className="cart-actions">
                        <Link href="/cart" className="vs-btn cart-animation-item">
                            VIEW CART
                        </Link>

                        <Link href="/checkout" className="vs-btn vs-btn--style3 cart-animation-item">
                            CHECKOUT
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

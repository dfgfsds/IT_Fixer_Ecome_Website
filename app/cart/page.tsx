'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Home, Minus, Plus, Trash2 } from "lucide-react";
import ShopWithSideCart from "@/components/ShopWithSideCart";

export default function CartPage() {
    const [isCartOpen, setIsCartOpen] = useState(false);
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
                                        home :
                                    </a>
                                </li>
                                <li className="color">Cart</li>
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
                                    <th>Image</th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th style={{ minWidth: "140px" }}>Quantity</th>
                                    <th>Total</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>

                            <tbody>
                                {cartItems.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            <div className="d-flex justify-content-center">
                                                <Image
                                                    src={item.image}
                                                    alt=""
                                                    width={80}
                                                    height={80}
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </td>

                                        <td>
                                            <Link href="#" className="cart-productname text-decoration-none">
                                                {item.name}
                                            </Link>
                                        </td>

                                        <td>${item.price}</td>

                                        {/* Quantity */}
                                        <td>
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
                                                <button style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '0', display: 'flex', alignItems: 'center' }}>
                                                    <Minus size={16} />
                                                </button>
                                                <input
                                                    type="text"
                                                    value="01"
                                                    readOnly
                                                    className="form-control text-center"
                                                    style={{ width: '45px', height: '40px', background: '#1e232d', color: '#fff', border: 'none', textAlign: 'center', fontWeight: '700', borderRadius: '2px', padding: '0' }}
                                                />
                                                <button style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '0', display: 'flex', alignItems: 'center' }}>
                                                    <Plus size={16} />
                                                </button>
                                            </div>
                                        </td>

                                        <td>${item.price}</td>

                                        <td>
                                            <button style={{ background: 'none', border: 'none', color: '#a6d719', cursor: 'pointer', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                                                <Trash2 size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* CART FOOTER */}
                    <div className="row gy-3 align-items-center mt-4">

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
                            <div className="d-flex flex-column flex-sm-row gap-2">
                                <input
                                    type="text"
                                    className="form-control coupon-input"
                                    placeholder="Coupon Code..."
                                    style={{
                                        background: '#1e232d',
                                        color: '#fff',
                                        border: '1px solid #323441',
                                        borderRadius: '0',
                                        height: '54px'
                                    }}
                                />
                                <button className="vs-btn cart-animation-item" style={{ whiteSpace: 'nowrap' }}>
                                    Apply Coupon
                                </button>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="col-lg-6 col-md-12 text-lg-end">
                            <div className="d-flex flex-column flex-sm-row justify-content-lg-end gap-2">
                                <button
                                    className="vs-btn cart-animation-item"
                                    onClick={() => setIsCartOpen(true)}
                                >
                                    Update Cart
                                </button>
                                <Link href="/shop" className="vs-btn vs-btn--style3 cart-animation-item">
                                    Continue Shopping
                                </Link>
                            </div>
                        </div>

                    </div>

                    {/* CART TOTALS */}
                    <div className="row justify-content-end mt-5">
                        <div className="col-xl-4 col-lg-5 col-md-6 col-12">
                            <div className="border p-4 rounded">

                                <h5 className="mb-3">Cart Totals</h5>

                                <div className="d-flex justify-content-between mb-2">
                                    <span>Subtotal</span>
                                    <span>$600.00</span>
                                </div>

                                <div className="mb-3">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" defaultChecked />
                                        <label className="form-check-label">Free Shipping</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" />
                                        <label className="form-check-label">Flat Rate</label>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between fw-bold">
                                    <span>Total</span>
                                    <span className="text-success">$600.00</span>
                                </div>

                                <Link href="/checkout" className="vs-btn cart-animation-item mt-4">
                                    Proceed to Checkout
                                </Link>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

const cartItems = [
    { id: 1, name: "Headphones Wireless...", price: 250, image: "/img/cart1.jpg" },
    { id: 2, name: 'Macbook Pro 16" Retina...', price: 200, image: "/img/cart2.jpg" },
    { id: 3, name: "Airpods Wireless Bluetooth...", price: 400, image: "/img/cart3.jpg" },
];

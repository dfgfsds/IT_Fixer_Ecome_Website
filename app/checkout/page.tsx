'use client';

import { useState } from "react";
import { Check, Minus, Plus, Home } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CheckoutPage() {
    const [paymentMethod, setPaymentMethod] = useState('bank');
    const [shipToDifferentAddress, setShipToDifferentAddress] = useState(true);
    return (


        <div id="smooth-content">
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
                            <h1 className="wow fadeInUp" data-wow-delay=".3s">CHECKOUT</h1>
                        </div>

                        <ul className="gt-breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                            <li>
                                <a
                                    href="index.html"
                                    className="d-inline-flex align-items-center gap-1"
                                >
                                    <Home size={16} className="mb-[1px]" />
                                    home :
                                </a>
                            </li>
                            <li className="color">Checkout</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container py-5">
                <div className="row g-4">
                    <div className="col-lg-6 col-12">
                        <div className="checkout-box p-4 h-100">
                            <h4 className="mb-4">Billing Details</h4>

                            <select className="form-select mb-3">
                                <option>India</option>
                                <option>United Kingdom (UK)</option>
                            </select>

                            <div className="row">
                                <div className="col-md-6 col-12 mb-3">
                                    <input className="form-control" placeholder="First Name" />
                                </div>
                                <div className="col-md-6 col-12 mb-3">
                                    <input className="form-control" placeholder="Last Name" />
                                </div>
                            </div>

                            <input className="form-control mb-3" placeholder="Your Company Name" />
                            <input className="form-control mb-3" placeholder="Street Address" />
                            <input className="form-control mb-3" placeholder="Apartment, suite, unit etc. (optional)" />
                            <input className="form-control mb-3" placeholder="Town / City" />

                            <div className="row">
                                <div className="col-md-6 col-12 mb-3">
                                    <input className="form-control" placeholder="Country" />
                                </div>
                                <div className="col-md-6 col-12 mb-3">
                                    <input className="form-control" placeholder="Postcode / Zip" />
                                </div>
                            </div>

                            <input className="form-control mb-3" placeholder="Email Address" />
                            <input className="form-control mb-3" placeholder="Phone Number" />

                            <div className="form-check mt-2">
                                <input className="form-check-input" type="checkbox" />
                                <label className="form-check-label">
                                    Create An Account?
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-12">
                        <div className="checkout-box p-4 h-100">
                            <div className="mb-3">
                                <label
                                    className="payment-label"
                                    onClick={() => setShipToDifferentAddress(!shipToDifferentAddress)}
                                >
                                    <div className={`custom-check-box ${shipToDifferentAddress ? 'active' : ''}`}>
                                        {shipToDifferentAddress && <Check size={14} strokeWidth={4} />}
                                    </div>
                                    Ship To A Different Address?
                                </label>
                            </div>

                            <select className="form-select mb-3">
                                <option>India</option>
                                <option>United Kingdom (UK)</option>
                            </select>

                            <div className="row">
                                <div className="col-md-6 col-12 mb-3">
                                    <input className="form-control" placeholder="First Name" />
                                </div>
                                <div className="col-md-6 col-12 mb-3">
                                    <input className="form-control" placeholder="Last Name" />
                                </div>
                            </div>

                            <input className="form-control mb-3" placeholder="Your Company Name" />
                            <input className="form-control mb-3" placeholder="Street Address" />
                            <input className="form-control mb-3" placeholder="Apartment, suite, unit etc. (optional)" />
                            <input className="form-control mb-3" placeholder="Town / City" />

                            <div className="row">
                                <div className="col-md-6 col-12 mb-3">
                                    <input className="form-control" placeholder="Country" />
                                </div>
                                <div className="col-md-6 col-12 mb-3">
                                    <input className="form-control" placeholder="Postcode / Zip" />
                                </div>
                            </div>

                            <input className="form-control mb-3" placeholder="Email Address" />
                            <input className="form-control mb-3" placeholder="Phone Number" />

                            <textarea
                                className="form-control"
                                rows={4}
                                placeholder="Notes about your order, e.g. special notes for delivery."
                            />
                        </div>
                    </div>
                </div>

                <div className="checkout-box p-4 mt-5">
                    <h4 className="mb-4 text-uppercase fw-bold" style={{ fontSize: '20px', letterSpacing: '1px' }}>Your Order</h4>

                    <div className="table-responsive">
                        <table className="table checkout-order-table align-middle text-center">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <img src="/product.jpg" width="80" height="80" className="img-fluid" alt="Product" />
                                        </div>
                                    </td>
                                    <td className="text-uppercase fw-bold">BMW CAR LEXUS GS STEERING...</td>
                                    <td>$200</td>
                                    <td>01</td>
                                    <td className="fw-bold">$200</td>
                                </tr>
                                <tr className="summary-row">
                                    <td className="text-start text-uppercase fw-bold">Subtotal</td>
                                    <td colSpan={4} className="text-end fw-bold">$200</td>
                                </tr>
                                <tr className="summary-row">
                                    <td className="text-start text-uppercase fw-bold">Shipping</td>
                                    <td colSpan={4} className="text-end" style={{ fontSize: '13px' }}>Enter your address to view shipping options.</td>
                                </tr>
                                <tr className="summary-row total-row">
                                    <td className="text-start text-uppercase fw-bold">Total</td>
                                    <td colSpan={4} className="text-end fw-bold text-success">$200</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="checkout-box p-4 mt-4" style={{ background: 'transparent', border: 'none', paddingLeft: '0', paddingRight: '0' }}>
                    <div className="payment-option-row">
                        <label className="payment-label" onClick={() => setPaymentMethod('bank')}>
                            <div className={`custom-check-box ${paymentMethod === 'bank' ? 'active' : ''}`}>
                                {paymentMethod === 'bank' && <Check size={14} strokeWidth={4} />}
                            </div>
                            Direct bank transfer
                        </label>
                        {paymentMethod === 'bank' && (
                            <div className="payment-desc-box">
                                Make Your Payment Directly Into Our Bank Account. Please Use Your Order ID As The Payment Reference. Your Order Will Not Be Shipped Until The Funds Have Cleared In Our Account.
                            </div>
                        )}
                    </div>

                    <div className="payment-option-row">
                        <label className="payment-label" onClick={() => setPaymentMethod('cheque')}>
                            <div className={`custom-check-box ${paymentMethod === 'cheque' ? 'active' : ''}`}>
                                {paymentMethod === 'cheque' && <Check size={14} strokeWidth={4} />}
                            </div>
                            Cheque Payment
                        </label>
                        {paymentMethod === 'cheque' && (
                            <div className="payment-desc-box">
                                Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                            </div>
                        )}
                    </div>

                    <div className="payment-option-row">
                        <label className="payment-label" onClick={() => setPaymentMethod('credit')}>
                            <div className={`custom-check-box ${paymentMethod === 'credit' ? 'active' : ''}`}>
                                {paymentMethod === 'credit' && <Check size={14} strokeWidth={4} />}
                            </div>
                            Credit Card
                        </label>
                        {paymentMethod === 'credit' && (
                            <div className="payment-desc-box">
                                Pay with your credit card via Stripe.
                            </div>
                        )}
                    </div>

                    <div className="payment-option-row">
                        <label className="payment-label" onClick={() => setPaymentMethod('paypal')}>
                            <div className={`custom-check-box ${paymentMethod === 'paypal' ? 'active' : ''}`}>
                                {paymentMethod === 'paypal' && <Check size={14} strokeWidth={4} />}
                            </div>
                            Paypal
                        </label>
                        {paymentMethod === 'paypal' && (
                            <div className="payment-desc-box">
                                Pay via PayPal; you can pay with your credit card if you don't have a PayPal account.
                            </div>
                        )}
                    </div>

                    <button className="place-order-btn-custom mt-4">
                        Place Order
                    </button>
                </div>
            </div>
        </div>

    );
}

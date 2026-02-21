'use client';

import { useState, useEffect } from "react";
import { Check, Home, MapPin, Plus, ExternalLink, Loader2, Package, CreditCard, Banknote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useCartItem } from "@/context/CartItemContext";
import { useProducts } from "@/context/ProductsContext";
import { useUser } from "@/context/UserContext";
import { useVendor } from "@/context/VendorContext";
import { useQuery, useQueryClient, InvalidateQueryFilters } from "@tanstack/react-query";
import { getAddressApi, postPaymentApi, postCODPaymentApi } from "@/api-endpoints/CartsApi";
import { getDeliveryChargeApi, patchUserSelectAddressAPi } from "@/api-endpoints/authendication";
import { toast } from "sonner";
import OrderSuccessModal from "@/components/OrderSuccessModal";

export default function CheckoutPage() {
    const { cartItem, isLoading: isCartLoading }: any = useCartItem();
    const { products: apiProducts, isLoading: isProductsLoading }: any = useProducts();
    const { user }: any = useUser();
    const { vendorId } = useVendor();
    const queryClient = useQueryClient();

    const [paymentMethod, setPaymentMethod] = useState('PAY ON');
    const [isProcessing, setIsProcessing] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [orderId, setOrderId] = useState<string | number | undefined>(undefined);

    const userId = user?.data?.id;
    const userName = user?.data?.name;
    const cartId = cartItem?.data?.[0]?.cart_id || cartItem?.cart_id || (typeof window !== 'undefined' ? localStorage.getItem('cartId') : null);

    // Fetch Addresses
    const { data: addressData, isLoading: addressLoading } = useQuery({
        queryKey: ["getAddressData", userId],
        queryFn: () => getAddressApi(`user/${userId}`),
        enabled: !!userId,
    });
    const addresses = addressData?.data?.data || addressData?.data || [];
    const selectedAddress = addresses.find((addr: any) => addr.selected_address);
    const selectedAddressId = selectedAddress?.id;

    // Cart Calculation
    const cartData = (cartItem?.data || []).map((item: any) => {
        const productDetails = apiProducts?.data?.find((p: any) => Number(p.id) === Number(item.product));
        return {
            ...productDetails,
            cartId: item.id,
            cartQty: item.quantity
        };
    }).filter((item: any) => item.name);

    const subtotal = cartData.reduce((acc: number, item: any) => acc + (Number(item.price) * item.cartQty), 0);

    // Delivery Breakdown
    const { data: deliveryResponseRaw, isLoading: isBreakdownLoading } = useQuery({
        queryKey: ["getDeliveryCharge", userId, vendorId, selectedAddressId, paymentMethod],
        queryFn: () => getDeliveryChargeApi("", {
            user_id: userId,
            vendor_id: vendorId,
            payment_mode: paymentMethod === "PAY ON" ? "Prepaid" : "COD",
            customer_phone: user?.data?.contact_number || "",
            total_amount: subtotal,
            cart_id: cartId
        }),
        enabled: !!userId && !!vendorId
    });

    const breakdownData = deliveryResponseRaw?.data?.data || deliveryResponseRaw?.data || {};

    const handleSelectAddress = async (address: any) => {
        try {
            await patchUserSelectAddressAPi(`user/${userId}/address/${address.id}`, { updated_by: userName });
            queryClient.invalidateQueries(["getAddressData"] as InvalidateQueryFilters);
            toast.success("Shipping address updated");
        } catch {
            toast.error("Failed to select address");
        }
    };

    const loadRazorpay = () => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    const handleCheckout = async () => {
        if (!selectedAddressId) {
            toast.error("Please select a shipping address");
            return;
        }

        setIsProcessing(true);
        try {
            if (paymentMethod === "PAY ON") {
                const isLoaded = await loadRazorpay();
                if (!isLoaded) {
                    toast.error("Razorpay SDK failed to load. Check your connection.");
                    setIsProcessing(false);
                    return;
                }

                const res = await postPaymentApi("", {
                    user_id: userId,
                    vendor_id: vendorId,
                    cart_id: cartId,
                    updated_by: userName
                });

                const data = res.data?.data || res.data;

                const options = {
                    key: data.razorpay_key,
                    amount: data.amount,
                    currency: data.currency,
                    name: "FIXER SHOP",
                    description: "Order Payment",
                    order_id: data.razorpay_order_id,
                    handler: function (response: any) {
                        setOrderId(data.order_id);
                        setPaymentSuccess(true);
                        queryClient.invalidateQueries(["getCartitemsData"] as InvalidateQueryFilters);
                    },
                    prefill: {
                        name: user?.data?.name,
                        email: user?.data?.email,
                        contact: user?.data?.contact_number,
                    },
                    theme: { color: "#a6d719" },
                };

                const paymentObject = new (window as any).Razorpay(options);
                paymentObject.open();
            } else {
                // COD Flow
                const res = await postCODPaymentApi("", {
                    user_id: userId,
                    vendor_id: vendorId,
                    cart_id: cartId,
                    updated_by: userName
                });

                if (res.status === 200 || res.status === 201) {
                    setOrderId(res.data?.data?.order_id || res.data?.order_id);
                    setPaymentSuccess(true);
                    queryClient.invalidateQueries(["getCartitemsData"] as InvalidateQueryFilters);
                    toast.success("Order placed successfully!");
                }
            }
        } catch (error: any) {
            console.error(error);
            toast.error(error.response?.data?.message || "Checkout failed");
        } finally {
            setIsProcessing(false);
        }
    };

    if (isCartLoading || isProductsLoading || addressLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-white">
                <Loader2 className="animate-spin text-[#a6d719] mb-4" size={48} />
                <p className="font-['Chakra_Petch'] uppercase tracking-widest">Warming up the engines...</p>
            </div>
        );
    }

    return (
        <div id="smooth-content">
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
                            <h1 className="wow fadeInUp" data-wow-delay=".3s">CHECKOUT</h1>
                        </div>
                        <ul className="gt-breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                            <li>
                                <Link href="/" className="d-inline-flex align-items-center gap-1">
                                    <Home size={16} className="mb-[1px]" /> home :
                                </Link>
                            </li>
                            <li className="color">Checkout</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container py-5">
                <div className="row g-5">
                    {/* ── Address Selection ── */}
                    <div className="col-lg-7">
                        <div className="checkout-box p-4" style={{ backgroundColor: '#141622', border: '1px solid #323441', borderRadius: '12px' }}>
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <h4 className="text-uppercase m-0 fw-bold" style={{ letterSpacing: '1px' }}>Shipping Address</h4>
                                <Link href="/profile" className="btn btn-sm text-[#a6d719] d-flex align-items-center gap-1 hover:underline">
                                    <Plus size={16} /> Manage Addresses
                                </Link>
                            </div>

                            {addresses.length > 0 ? (
                                <div className="row g-3">
                                    {addresses.map((addr: any) => (
                                        <div key={addr.id} className="col-md-6">
                                            <div
                                                onClick={() => handleSelectAddress(addr)}
                                                className={`p-3 rounded border cursor-pointer transition-all duration-300 h-100 position-relative ${addr.selected_address ? 'border-[#a6d719] bg-[#a6d719]/5' : 'border-[#323441] bg-[#0b0e13]'}`}
                                            >
                                                {addr.selected_address && (
                                                    <div className="position-absolute top-2 end-2 bg-[#a6d719] rounded-full p-1">
                                                        <Check size={12} color="#0b0e13" strokeWidth={4} />
                                                    </div>
                                                )}
                                                <div className="d-flex align-items-center gap-2 mb-2">
                                                    <MapPin size={16} className={addr.selected_address ? 'text-[#a6d719]' : 'text-secondary'} />
                                                    <span className="small text-uppercase fw-bold text-secondary">{addr.address_type}</span>
                                                </div>
                                                <p className="small text-white mb-1 fw-bold">{addr.customer_name}</p>
                                                <p className="small text-secondary m-0 line-clamp-2">{addr.address_line1}, {addr.city}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-5 bg-[#0b0e13] rounded border border-dashed border-[#323441]">
                                    <MapPin size={40} className="text-secondary mb-3 mx-auto" />
                                    <p className="text-secondary mb-3">No addresses found</p>
                                    <Link href="/profile" className="vs-btn vs-btn-sm">Add New Address</Link>
                                </div>
                            )}
                        </div>

                        {/* ── Order Summary Table (Items) ── */}
                        <div className="checkout-box p-4 mt-4" style={{ backgroundColor: '#141622', border: '1px solid #323441', borderRadius: '12px' }}>
                            <h4 className="text-uppercase mb-4 fw-bold" style={{ fontSize: '18px', letterSpacing: '1px' }}>Items In Order</h4>
                            <div className="table-responsive">
                                <table className="table checkout-order-table align-middle">
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th className="text-center">Qty</th>
                                            <th className="text-end">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartData.map((item: any) => (
                                            <tr key={item.cartId}>
                                                <td>
                                                    <div className="d-flex align-items-center gap-3">
                                                        <Image src={item.image_urls?.[0] || "/product.jpg"} width={50} height={50} className="rounded" alt={item.name} />
                                                        <div className="small fw-bold text-white text-uppercase line-clamp-1">{item.name}</div>
                                                    </div>
                                                </td>
                                                <td className="text-center text-secondary small">{item.cartQty}</td>
                                                <td className="text-end text-white fw-bold small">₹{Number(item.price) * item.cartQty}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* ── Payment & Total ── */}
                    <div className="col-lg-5">
                        <div className="sticky-top" style={{ top: '100px' }}>
                            <div className="checkout-box p-4" style={{ backgroundColor: '#141622', border: '1px solid #323441', borderRadius: '12px' }}>
                                <h4 className="mb-4 text-uppercase fw-bold" style={{ fontSize: '18px', letterSpacing: '1px' }}>Order Total</h4>

                                <div className="space-y-4 mb-4">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="text-secondary small text-uppercase">Subtotal</span>
                                        <span className="text-white fw-bold">₹{breakdownData.product_total || subtotal}</span>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="text-secondary small text-uppercase">Shipping Fee</span>
                                        <span className={Number(breakdownData.final_delivery_charge) === 0 ? "text-success fw-bold small" : "text-white fw-bold"}>
                                            {Number(breakdownData.final_delivery_charge) === 0 ? "FREE" : `₹${breakdownData.final_delivery_charge}`}
                                        </span>
                                    </div>
                                    <div className="border-top border-secondary border-dashed my-3 opacity-20"></div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5 className="m-0 text-white fw-bold text-uppercase">Total Payable</h5>
                                        <h5 className="m-0 text-[#a6d719] fw-bold">₹{breakdownData.final_price_including_delivery || subtotal}</h5>
                                    </div>
                                </div>

                                <h4 className="mb-3 text-uppercase fw-bold mt-5" style={{ fontSize: '16px', letterSpacing: '1px' }}>Payment Method</h4>
                                <div className="space-y-3">
                                    <div
                                        onClick={() => setPaymentMethod('PAY ON')}
                                        className={`p-3 rounded border cursor-pointer transition-all flex align-items-center gap-3 ${paymentMethod === 'PAY ON' ? 'border-[#a6d719] bg-[#a6d719]/5' : 'border-[#323441]'}`}
                                    >
                                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${paymentMethod === 'PAY ON' ? 'border-[#a6d719]' : 'border-secondary'}`}>
                                            {paymentMethod === 'PAY ON' && <div className="w-2 h-2 rounded-full bg-[#a6d719]" />}
                                        </div>
                                        <CreditCard size={18} className={paymentMethod === 'PAY ON' ? 'text-[#a6d719]' : 'text-secondary'} />
                                        <span className={`small fw-bold ${paymentMethod === 'PAY ON' ? 'text-white' : 'text-secondary'}`}>Prepaid (UPI / Cards)</span>
                                    </div>

                                    <div
                                        onClick={() => setPaymentMethod('cod')}
                                        className={`p-3 rounded border cursor-pointer transition-all flex align-items-center gap-3 ${paymentMethod === 'cod' ? 'border-[#a6d719] bg-[#a6d719]/5' : 'border-[#323441]'}`}
                                    >
                                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${paymentMethod === 'cod' ? 'border-[#a6d719]' : 'border-secondary'}`}>
                                            {paymentMethod === 'cod' && <div className="w-2 h-2 rounded-full bg-[#a6d719]" />}
                                        </div>
                                        <Banknote size={18} className={paymentMethod === 'cod' ? 'text-[#a6d719]' : 'text-secondary'} />
                                        <span className={`small fw-bold ${paymentMethod === 'cod' ? 'text-white' : 'text-secondary'}`}>Cash on Delivery</span>
                                    </div>
                                </div>

                                <button
                                    className="place-order-btn-custom w-100 mt-5 d-flex align-items-center justify-content-center gap-2"
                                    onClick={handleCheckout}
                                    disabled={!selectedAddressId || isProcessing || isBreakdownLoading}
                                >
                                    {isProcessing && <Loader2 className="animate-spin" size={20} />}
                                    {isProcessing ? 'Processing...' : 'Place Order Now'}
                                </button>

                                {!selectedAddressId && (
                                    <p className="text-danger small mt-2 text-center">Please select an address to proceed</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <OrderSuccessModal
                isOpen={paymentSuccess}
                onClose={() => setPaymentSuccess(false)}
                orderId={orderId}
            />
        </div>
    );
}

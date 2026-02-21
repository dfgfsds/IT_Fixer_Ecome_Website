"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Package, Image as ImageIcon } from "lucide-react";
import { getOrderItemApi } from "@/api-endpoints/CartsApi";
import { useVendor } from "@/context/VendorContext";
import { formatDate, formatPrice } from "@/lib/utils";

export default function OrderDetailsPage() {
    const params = useParams();
    const id = params.id;
    const router = useRouter();
    const [userId, setUserId] = useState<string | null>(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('userId');
        }
        return null;
    });
    const { vendorId: contextVendorId } = useVendor();
    const vendorId = contextVendorId || '66'; // Fallback to '66' if context hasn't initialized yet


    const { data: orderResponse, isLoading } = useQuery({
        queryKey: ['getOrderSingle', vendorId, userId, id],
        queryFn: () => getOrderItemApi(`?user_id=${userId}&vendor_id=${vendorId}&order_id=${id}`),
        enabled: Boolean(userId && vendorId && id),
        refetchOnWindowFocus: false
    });

    const order = orderResponse?.data?.data;

    if (isLoading || !userId || !vendorId) {
        return (
            <div style={{ backgroundColor: "#0b0e13", minHeight: "100vh", display: "flex", alignItems: "center", justifyItems: "center", justifyContent: "center" }}>
                <div className="spinner-border" style={{ color: "#a6d719" }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div style={{ backgroundColor: "#0b0e13", minHeight: "100vh", color: "#fff", paddingTop: "120px", paddingBottom: "80px" }}>
            <div className="container">
                {/* Back Button */}
                <button
                    onClick={() => router.back()}
                    className="btn btn-link text-white p-0 d-flex align-items-center mb-4"
                    style={{ textDecoration: "none", opacity: 1, fontFamily: "'Chakra Petch', sans-serif" }}
                >
                    <ArrowLeft size={18} className="me-2" /> Back to Orders
                </button>

                <h2 className="mb-4" style={{ fontFamily: "'Days One', sans-serif", fontSize: "32px" }}>
                    Order <span style={{ color: "#a6d719" }}>Details</span>
                </h2>

                <div className="row g-4">
                    <div className="col-12">
                        <div className="p-4 rounded border border-secondary shadow-lg" style={{ backgroundColor: "#141622" }}>
                            <div className="row g-4 align-items-center">
                                {/* Left Section */}
                                <div className="col-md-7">
                                    <div className="d-flex flex-column gap-3">
                                        <div className="d-flex align-items-center">
                                            <span className="text-primary text-uppercase fw-bold me-2" style={{ fontSize: "14px" }}>Order Date :</span>
                                            <span className="text-white fw-bold" style={{ fontSize: "16px" }}>{order?.created_at ? formatDate(order?.created_at) : 'N/A'}</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <span className="text-primary text-uppercase fw-bold me-2" style={{ fontSize: "14px" }}>Total Amount :</span>
                                            <span className="fw-bold" style={{ fontSize: "16px" }}>{formatPrice(order?.total_amount || 0)}</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <span className="text-primary text-uppercase fw-bold me-2" style={{ fontSize: "14px" }}>Gift Wrap Cost :</span>
                                            <span className="text-white fw-bold" style={{ fontSize: "16px" }}>{formatPrice(order?.gift_wrap_cost || 0)}</span>
                                        </div>

                                    </div>
                                </div>

                                {/* Right Section */}
                                <div className="col-md-5">
                                    <div className="d-flex flex-column gap-3 align-items-md-end">
                                        <div className="d-flex align-items-center">
                                            <span className="text-primary text-uppercase fw-bold me-2" style={{ fontSize: "14px" }}>Ship To :</span>
                                            <span className="text-white fw-bold text-uppercase" style={{ fontSize: "16px" }}>{order?.consumer_address?.address_type || 'Shipping Address'}</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <span className="text-primary text-uppercase fw-bold me-2" style={{ fontSize: "14px" }}>Current Status :</span>
                                            <span className={`badge rounded-pill px-3 py-1 fw-bold text-uppercase 
                                                ${order?.status === 'completed' ? ' bg-opacity-10 text-success border border-success border-opacity-25' :
                                                    order?.status === 'pending' ? ' bg-opacity-10 text-warning border border-warning border-opacity-25' :
                                                        'bg-opacity-10 text-danger border border-danger border-opacity-25'}`}
                                                style={{ fontSize: "12px", letterSpacing: "1px" }}>
                                                {order?.status || 'Unknown'}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Items List */}
                    <div className="col-12 mt-4">
                        <h4 className="mb-4 d-flex align-items-center" style={{ fontFamily: "'Days One', sans-serif" }}>
                            <Package size={22} className="me-2" style={{ color: "#a6d719" }} /> Items in Order
                        </h4>

                        <div className="d-flex flex-column gap-3">
                            {order?.order_items?.map((item: any, idx: number) => (
                                <div key={idx} className="p-3 rounded border border-secondary order-item-box transition-all"
                                    style={{
                                        backgroundColor: "#0F111A",
                                        borderLeft: "4px solid #a6d719"
                                    }}>
                                    <div className="row align-items-center g-3">
                                        <div className="col-auto">
                                            <div className="product-image-container">
                                                <img
                                                    src={item?.product?.image_urls?.[0] || "https://cdn.shopify.com/s/files/1/2303/2711/files/2_e822dae0-14df-4cb8-b145-ea4dc0966b34.jpg?v=1617059123"}
                                                    className="w-100 h-100 object-fit-cover"
                                                    alt={item?.product?.name}
                                                />
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center h-100 gap-2">
                                                <div className="d-flex flex-column justify-content-center">
                                                    <h5 className="mb-1 text-white fw-bold order-item-name">{item?.product?.name}</h5>
                                                    <p className="small mb-0" style={{ opacity: 1 }}>Quantity: <span className="text-primary fw-bold">{item?.quantity}</span></p>
                                                </div>

                                                <div className="mt-md-0">
                                                    <div className="fw-bold order-item-price text-primary">
                                                        {formatPrice(item?.price || 0)}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .text-primary {
                    color: #a6d719 !important;
                }
                .product-image-container {
                    width: 120px;
                    height: 120px;
                    overflow: hidden;
                    border-radius: 10px;
                }
                .order-item-name {
                    font-size: 20px;
                }
                .order-item-price {
                    font-size: 24px;
                }
                @media (max-width: 768px) {
                    .product-image-container {
                        width: 90px;
                        height: 90px;
                    }
                    .order-item-name {
                        font-size: 16px;
                    }
                    .order-item-price {
                        font-size: 18px;
                    }
                }
                .order-item-box:hover {

                    background-color: #141622 !important;
                    transform: translateX(5px);
                }
                .transition-all {
                    transition: all 0.3s ease;
                }
                :global(body) {
                    font-family: 'Chakra Petch', sans-serif !important;
                }
            `}</style>
        </div>
    );
}

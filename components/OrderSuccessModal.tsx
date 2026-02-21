"use client";
import React from "react";
import { CheckCircle2, Package, ArrowRight, ShoppingBag } from "lucide-react";
import Link from "next/link";

interface OrderSuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
    orderId?: string | number;
}

export default function OrderSuccessModal({ isOpen, onClose, orderId }: OrderSuccessModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="relative w-full max-w-md overflow-hidden bg-[#141622] border border-[#2a2d3a] rounded-2xl shadow-2xl animate-in zoom-in-95 duration-300">
                {/* Success Background Pattern */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#a6d719]/10 to-transparent" />

                <div className="relative p-8 text-center">
                    {/* Success Icon */}
                    <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-[#a6d719]/10 rounded-full border border-[#a6d719]/20 shadow-[0_0_30px_rgba(166,215,25,0.15)]">
                        <CheckCircle2 size={40} className="text-[#a6d719] animate-bounce" />
                    </div>

                    <h2 className="text-3xl font-bold text-white mb-2 font-['Days_One'] uppercase tracking-tight">
                        Order Placed!
                    </h2>
                    <p className="text-[#9ca3af] mb-6 text-sm leading-relaxed">
                        Your items are on their way! We've sent a confirmation email with all the details.
                    </p>

                    {/* Order ID Box */}
                    {orderId && (
                        <div className="p-4 mb-8 bg-[#0b0e13] border border-[#2a2d3a] rounded-xl flex items-center justify-between">
                            <div className="flex items-center gap-3 text-left">
                                <div className="w-10 h-10 rounded-lg bg-[#141622] flex items-center justify-center border border-[#2a2d3a]">
                                    <Package size={20} className="text-[#a6d719]" />
                                </div>
                                <div>
                                    <span className="block text-[10px] text-[#4b5563] uppercase font-bold tracking-widest">Order ID</span>
                                    <span className="block text-white font-mono text-sm">#{orderId}</span>
                                </div>
                            </div>
                            <Link
                                href={`/order/${orderId}`}
                                className="text-[#a6d719] hover:underline text-xs font-bold uppercase tracking-wider flex items-center gap-1"
                            >
                                View Details <ArrowRight size={14} />
                            </Link>
                        </div>
                    )}

                    {/* Actions */}
                    <div className="space-y-3">
                        <Link
                            href="/profile"
                            onClick={onClose}
                            className="w-full py-4 bg-[#a6d719] hover:bg-[#b8eb1d] text-[#0b0e13] font-bold rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
                        >
                            Track Order
                        </Link>
                        <Link
                            href="/shop"
                            onClick={onClose}
                            className="w-full py-4 bg-transparent hover:bg-[#2a2d3a] text-white font-bold rounded-xl transition-all duration-300 border border-[#2a2d3a] flex items-center justify-center gap-2"
                        >
                            <ShoppingBag size={18} /> Continue Shopping
                        </Link>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-[#a6d719]/5 rounded-full blur-3xl" />
                <div className="absolute -top-12 -left-12 w-32 h-32 bg-[#a6d719]/5 rounded-full blur-3xl" />
            </div>
        </div>
    );
}

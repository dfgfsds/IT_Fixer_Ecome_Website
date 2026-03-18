"use client";
import React, { useEffect } from "react";
import { CheckCircle2, Package, ArrowRight, ShoppingBag, X } from "lucide-react";
import Link from "next/link";

interface OrderSuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
    orderId?: string | number;
}


export default function OrderSuccessModal({ isOpen, onClose, orderId }: OrderSuccessModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';

            // Auto close after 5 seconds
            const timer = setTimeout(() => {
                onClose();
            }, 50000);

            return () => {
                document.body.style.overflow = 'unset';
                clearTimeout(timer);
            };
        }
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 99999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px',
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                backdropFilter: 'blur(8px)',
                animation: 'fadeIn 0.3s ease-out'
            }}
            onClick={onClose}
        >
            <style jsx global>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slideUp {
                    from { transform: translateY(20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                @keyframes progress {
                    from { width: 100%; }
                    to { width: 0%; }
                }
                @keyframes pulse-ring {
                    0% { transform: scale(0.8); opacity: 0.5; }
                    100% { transform: scale(1.3); opacity: 0; }
                }
            `}</style>

            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '450px',
                    backgroundColor: '#141622',
                    border: '1px solid #2a2d3a',
                    borderRadius: '24px',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                    overflow: 'hidden',
                    animation: 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        color: '#9ca3af',
                        background: 'rgba(255,255,255,0.05)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '32px',
                        height: '32px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        zIndex: 10,
                        transition: '0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                >
                    <X size={18} />
                </button>

                {/* Top Gradient Pattern */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '140px',
                    background: 'linear-gradient(to bottom, rgba(166, 215, 25, 0.12), transparent)',
                    pointerEvents: 'none'
                }} />

                <div style={{ padding: '40px 32px 32px', textAlign: 'center', position: 'relative' }}>
                    {/* Success Icon with Animated Ring */}
                    <div style={{ position: 'relative', width: '88px', height: '88px', margin: '0 auto 24px' }}>
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            borderRadius: '50%',
                            border: '2px solid #a6d719',
                            animation: 'pulse-ring 2s infinite'
                        }} />
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(166, 215, 25, 0.1)',
                            borderRadius: '50%',
                            border: '1px solid rgba(166, 215, 25, 0.3)',
                            boxShadow: '0 0 30px rgba(166, 215, 25, 0.2)'
                        }}>
                            <CheckCircle2 size={44} color="#a6d719" />
                        </div>
                    </div>

                    <h2 style={{
                        fontSize: '32px',
                        fontWeight: '800',
                        color: '#fff',
                        marginBottom: '12px',
                        textTransform: 'uppercase',
                        letterSpacing: '-0.02em',
                        fontFamily: 'inherit'
                    }}>
                        Order Success!
                    </h2>
                    <p style={{
                        fontSize: '15px',
                        color: '#9ca3af',
                        marginBottom: '32px',
                        lineHeight: '1.6'
                    }}>
                        Your order has been placed successfully. We'll send you an email confirmation shortly.
                    </p>

                    {/* Order ID Card */}
                    {orderId && (
                        <div style={{
                            padding: '16px 20px',
                            backgroundColor: '#0b0e13',
                            border: '1px solid #2a2d3a',
                            borderRadius: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'between',
                            marginBottom: '32px'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', textAlign: 'left', flexGrow: 1 }}>
                                <div style={{
                                    width: '44px',
                                    height: '44px',
                                    borderRadius: '12px',
                                    backgroundColor: '#141622',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '1px solid #2a2d3a'
                                }}>
                                    <Package size={22} color="#a6d719" />
                                </div>
                                <div>
                                    <span style={{ display: 'block', fontSize: '10px', fontWeight: '700', color: '#4b5563', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Order Reference</span>
                                    <span style={{ display: 'block', color: '#fff', fontSize: '16px', fontWeight: '600', fontFamily: 'monospace' }}>#{orderId}</span>
                                </div>
                            </div>
                            <Link
                                href={`/order/${orderId}`}
                                style={{
                                    color: '#a6d719',
                                    fontSize: '13px',
                                    fontWeight: '700',
                                    textDecoration: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '4px',
                                    textTransform: 'uppercase'
                                }}
                            >
                                Details <ArrowRight size={14} />
                            </Link>
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <Link
                            href="/profile?tab=orders"
                            onClick={onClose}
                            style={{
                                width: '100%',
                                padding: '16px',
                                backgroundColor: '#a6d719',
                                color: '#0b0e13',
                                fontWeight: '800',
                                borderRadius: '14px',
                                textAlign: 'center',
                                textDecoration: 'none',
                                textTransform: 'uppercase',
                                fontSize: '14px',
                                letterSpacing: '0.05em',
                                transition: '0.2s transform'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            Track Your Order
                        </Link>
                        <Link
                            href="/shop"
                            onClick={onClose}
                            style={{
                                width: '100%',
                                padding: '16px',
                                backgroundColor: 'transparent',
                                color: '#fff',
                                fontWeight: '700',
                                border: '1px solid #2a2d3a',
                                borderRadius: '14px',
                                textAlign: 'center',
                                textDecoration: 'none',
                                textTransform: 'uppercase',
                                fontSize: '14px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                transition: '0.2s background'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                        >
                            <ShoppingBag size={18} /> Continue Shopping
                        </Link>
                    </div>
                </div>

                {/* Auto-close Progress Bar */}
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    height: '4px',
                    width: '100%',
                    backgroundColor: 'rgba(255,255,255,0.1)'
                }}>
                    <div style={{
                        height: '100%',
                        backgroundColor: '#a6d719',
                        width: '100%',
                        animation: 'progress 5s linear forwards'
                    }} />
                </div>
            </div>
        </div>
    );
}

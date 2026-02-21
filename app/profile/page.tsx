"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";
import { User, ShoppingBag, LogOut, Package, ShoppingCart, ExternalLink, MapPin, Plus, Pencil, Trash, Loader } from "lucide-react";
import { useQueryClient, useQuery, InvalidateQueryFilters } from "@tanstack/react-query";
import { updateUserAPi, patchUserSelectAddressAPi } from "@/api-endpoints/authendication";
import { getOrdersAndOrdersItemsApi, getAddressApi, deleteAddressApi } from "@/api-endpoints/CartsApi";
import { useVendor } from "@/context/VendorContext";
import { toast } from "sonner";
import Link from "next/link";
import AddressForm from "@/components/AddressForm";

export default function AccountPage() {
    const { user } = useUser();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState("profile");
    const { vendorId } = useVendor();
    const queryClient = useQueryClient();

    const [formData, setFormData] = useState({
        name: user?.data?.name || '',
        email: user?.data?.email || '',
        contact_number: user?.data?.contact_number || '',
    });

    useEffect(() => {
        if (user?.data) {
            setFormData({
                name: user?.data?.name || '',
                email: user?.data?.email || '',
                contact_number: user?.data?.contact_number || '',
            });
        }
    }, [user]);

    const handleUpdate = async () => {
        try {
            const res = await updateUserAPi(`/${user?.data?.id}`, {
                ...formData,
                updated_by: user?.data?.name || 'user',
                role: 3,
                vendor: vendorId
            });
            if (res) {
                toast.success('Profile updated!');
                queryClient.invalidateQueries({ queryKey: ["gerUserData"] });
            }
        } catch (err) {
            console.error(err);
            toast.error('Failed to update profile');
        }
    };

    useEffect(() => {
        const userId = localStorage.getItem("userId");
        if (!userId) {
            router.push("/login");
        }
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem("userId");
        localStorage.removeItem("userName");
        localStorage.removeItem("email");
        localStorage.removeItem("cartId");
        window.location.href = "/";
    };

    const { data: userOrders, isLoading: ordersLoading } = useQuery({
        queryKey: ["userOrders", user?.data?.id, vendorId],
        queryFn: () => getOrdersAndOrdersItemsApi(`?user_id=${user?.data?.id}&vendor_id=${vendorId}`),
        enabled: !!user?.data?.id && !!vendorId
    });
    const orders = userOrders?.data?.data || [];


    const [addressModal, setAddressModal] = useState(false);
    const [editData, setEditData] = useState<any>(null);
    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState<any>(null);
    const [deleting, setDeleting] = useState(false);

    const userId = user?.data?.id ?? null;
    const userName = user?.data?.name ?? null;

    const { data: addressData, isLoading: addressLoading } = useQuery({
        queryKey: ["getAddressData", userId],
        queryFn: () => getAddressApi(`user/${userId}`),
        enabled: !!userId,
    });
    const addresses = addressData?.data?.data || addressData?.data || [];

    const handleSelectDefault = async (address: any) => {
        try {
            await patchUserSelectAddressAPi(`user/${userId}/address/${address.id}`, { updated_by: userName });
            queryClient.invalidateQueries(["getAddressData"] as InvalidateQueryFilters);
            toast.success("Default address updated!");
        } catch {
            toast.error("Failed to set default address.");
        }
    };

    const confirmDelete = async () => {
        if (!deleteId) return;
        setDeleting(true);
        try {
            await deleteAddressApi(deleteId, { deleted_by: "user" });
            queryClient.invalidateQueries(["getAddressData"] as InvalidateQueryFilters);
            toast.success("Address deleted.");
            setDeleteModal(false);
            setDeleteId(null);
        } catch {
            toast.error("Failed to delete address.");
        } finally {
            setDeleting(false);
        }
    };

    const tabBtnStyle = (tab: string): React.CSSProperties => ({
        backgroundColor: "transparent",
        color: activeTab === tab ? "#a6d719" : "#ccc",
        border: activeTab === tab ? "1px solid #a6d719" : "none",
        borderRadius: "8px",
        padding: "12px 20px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        width: "100%",
        textAlign: "left",
        marginBottom: "8px",
        fontFamily: "'Chakra Petch', sans-serif",
        fontSize: "14px",
    });

    return (
        <div style={{ backgroundColor: "#0b0e13", minHeight: "100vh", color: "#fff", paddingTop: "120px", paddingBottom: "80px" }}>
            <div className="container">
                <div className="row g-4 align-items-stretch">

                    {/* ── Left Sidebar ── */}
                    <div className="col-lg-3 col-md-4 mb-4">
                        <div className="p-4 rounded border border-secondary h-100" style={{ backgroundColor: "#141622" }}>
                            <div className="text-center mb-4">
                                <div style={{ width: "80px", height: "80px", borderRadius: "50%", backgroundColor: "#2a2d3a", margin: "0 auto 15px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <User size={40} color="#a6d719" />
                                </div>
                                <h5 className="mb-1 text-white">{user?.data?.name || "Gamer"}</h5>
                                <p className="text-white small">{user?.data?.email || "gamer@example.com"}</p>
                            </div>

                            <div className="nav flex-column nav-pills">
                                <button onClick={() => setActiveTab("profile")} className={activeTab === "profile" ? "active-tab" : ""} style={tabBtnStyle("profile")}>
                                    <User size={18} style={{ marginRight: "12px" }} /> Profile
                                </button>
                                <button onClick={() => setActiveTab("orders")} className={activeTab === "orders" ? "active-tab" : ""} style={tabBtnStyle("orders")}>
                                    <Package size={18} style={{ marginRight: "12px" }} /> Orders
                                </button>
                                <button onClick={() => setActiveTab("addresses")} className={activeTab === "addresses" ? "active-tab" : ""} style={tabBtnStyle("addresses")}>
                                    <MapPin size={18} style={{ marginRight: "12px" }} /> Addresses
                                </button>
                                <button onClick={handleLogout} style={{ ...tabBtnStyle("logout"), color: "#ef4444", border: "none", marginTop: "16px" }}>
                                    <LogOut size={18} style={{ marginRight: "12px" }} /> Logout
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* ── Right Content ── */}
                    <div className="col-lg-9 col-md-8 mb-4">
                        <div className="p-4 rounded border border-secondary h-100" style={{ backgroundColor: "#141622" }}>

                            {/* ── Profile Tab ── */}
                            {activeTab === "profile" && (
                                <div className="animation-fade-in">
                                    <h3 className="mb-4" style={{ color: "#a6d719" }}>My Profile</h3>
                                    <div>
                                        <div className="mb-3">
                                            <label className="form-label text-white">Full Name</label>
                                            <input type="text" className="form-control" value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                style={{ backgroundColor: "#0b0e13", border: "1px solid #2a2d3a", color: "#fff", padding: "12px" }} />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label text-white">Email Address</label>
                                            <input type="email" className="form-control" value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                readOnly style={{ backgroundColor: "#0b0e13", border: "1px solid #2a2d3a", color: "#fff", padding: "12px" }} />
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label text-white">Phone Number</label>
                                            <input type="text" className="form-control" value={formData.contact_number}
                                                onChange={(e) => setFormData({ ...formData, contact_number: e.target.value })}
                                                readOnly style={{ backgroundColor: "#0b0e13", border: "1px solid #2a2d3a", color: "#fff", padding: "12px" }} />
                                        </div>
                                        <button onClick={handleUpdate} className="vs-btn cart-animation-item mt-2">Save Changes</button>
                                    </div>
                                </div>
                            )}

                            {/* ── Orders Tab ── */}
                            {activeTab === "orders" && (
                                <div className="animation-fade-in">
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <h3 className="m-0" style={{ color: "#a6d719" }}>My Orders</h3>
                                        <span className="badge rounded-pill" style={{ backgroundColor: "rgba(166, 215, 25, 0.1)", color: "#a6d719", border: "1px solid rgba(166, 215, 25, 0.2)", padding: "8px 15px" }}>
                                            {orders.length} Total
                                        </span>
                                    </div>
                                    {ordersLoading ? (
                                        <div className="text-center py-5">
                                            <div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div>
                                        </div>
                                    ) : orders.length > 0 ? (
                                        <div className="orders-scroll-container px-2" style={{ maxHeight: "350px", overflowY: "auto" }}>
                                            <div className="row g-3">
                                                {orders.map((order: any, index: number) => (
                                                    <div key={index} className="col-12">
                                                        <div className="p-3 rounded border border-secondary order-card" style={{ transition: "0.3s" }}>
                                                            <div className="row align-items-center">
                                                                <div className="col-md-2 col-6 mb-2 mb-md-0 text-center">
                                                                    <div className="small text-white mb-1">Order ID</div>
                                                                    <div className="fw-bold text-white">#{order.id}</div>
                                                                </div>
                                                                <div className="col-md-3 col-6 mb-2 mb-md-0 text-center">
                                                                    <div className="small text-white mb-1">Date</div>
                                                                    <div className="text-white">{new Date(order.created_at).toLocaleDateString()}</div>
                                                                </div>
                                                                <div className="col-md-2 col-6 mb-2 mb-md-0 text-center">
                                                                    <div className="small text-white mb-1">Status</div>
                                                                    <span className={`badge ${order.status === 'Delivered' ? 'bg-success' : ['Processing', 'Pending'].includes(order.status) ? 'bg-warning text-dark' : 'bg-danger'}`}>
                                                                        {order.status}
                                                                    </span>
                                                                </div>
                                                                <div className="col-md-3 col-6 mb-2 mb-md-0 text-center">
                                                                    <div className="small text-white mb-1">Total Amount</div>
                                                                    <div className="text-white fw-bold">${order.total_amount}</div>
                                                                </div>
                                                                <div className="col-md-2 text-center mt-2 mt-md-0">
                                                                    <Link href={`/order/${order.id}`}>
                                                                        <button className="btn btn-sm button-outline-primary rounded-pill px-3">
                                                                            <ExternalLink size={14} className="me-1" /> View
                                                                        </button>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="text-center py-5 rounded">
                                            <div className="mb-3"><ShoppingCart size={64} color="#a6d719" /></div>
                                            <h4 className="text-white mb-2">No orders yet</h4>
                                            <p className="text-white mb-4 small">Looks like you haven't made any purchases yet.</p>
                                            <Link href="/shop" className="vs-btn btn-sm">Start Shopping</Link>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Addresses Tab */}
                            {activeTab === "addresses" && (
                                <div className="animation-fade-in">
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "28px" }}>
                                        <h3 style={{ color: "#a6d719", margin: 0 }}>My Addresses</h3>
                                        <button
                                            onClick={() => { setEditData(null); setAddressModal(true); }}
                                            className="vs-btn"
                                            style={{ padding: "10px 22px", fontSize: "13px", display: "flex", alignItems: "center", gap: "8px" }}
                                        >
                                            <Plus size={16} />
                                            Add New Address
                                        </button>
                                    </div>

                                    {addressLoading ? (
                                        <div className="text-center py-5">
                                            <div className="spinner-border" style={{ color: "#a6d719" }} role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                        </div>
                                    ) : addresses.length > 0 ? (
                                        <div className="row g-3">
                                            {addresses.map((address: any) => (
                                                <div key={address.id} className="col-md-6 col-12">
                                                    <div style={{
                                                        backgroundColor: "#0b0e13",
                                                        border: `1px solid ${address.selected_address ? "#a6d719" : "#2a2d3a"}`,
                                                        borderRadius: "10px",
                                                        padding: "20px",
                                                        position: "relative",
                                                        transition: "border-color 0.3s",
                                                        height: "100%",
                                                    }}>
                                                        {address.selected_address && (
                                                            <span style={{
                                                                position: "absolute", top: "12px", right: "12px",
                                                                backgroundColor: "rgba(166, 215, 25, 0.12)",
                                                                color: "#a6d719",
                                                                border: "1px solid rgba(166, 215, 25, 0.3)",
                                                                borderRadius: "20px",
                                                                padding: "3px 12px",
                                                                fontSize: "11px",
                                                                fontWeight: 600,
                                                                letterSpacing: "0.5px",
                                                                textTransform: "uppercase",
                                                            }}>Default</span>
                                                        )}

                                                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                                                            <div style={{ width: "34px", height: "34px", borderRadius: "50%", backgroundColor: "#2a2d3a", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                                <MapPin size={16} color="#a6d719" />
                                                            </div>
                                                            <span style={{ color: "#a6d719", fontWeight: 700, fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px", fontFamily: "'Days One', sans-serif" }}>
                                                                {address.address_type}
                                                            </span>
                                                        </div>

                                                        <div style={{ color: "#9ca3af", fontSize: "13px", lineHeight: "1.8" }}>
                                                            <span style={{ color: "#fff", fontWeight: 600, display: "block", marginBottom: "2px" }}>{address.customer_name}</span>
                                                            {address.contact_number && <span style={{ display: "block" }}>{address.contact_number}</span>}
                                                            {address.email_address && <span style={{ display: "block" }}>{address.email_address}</span>}
                                                            <span style={{ display: "block" }}>{address.address_line1}</span>
                                                            {address.address_line2 && <span style={{ display: "block" }}>{address.address_line2}</span>}
                                                            <span style={{ display: "block" }}>{address.city}, {address.state} {address.postal_code}</span>
                                                            <span style={{ display: "block" }}>{address.country}</span>
                                                        </div>

                                                        <div style={{ borderTop: "1px solid #1e2538", margin: "16px 0" }} />


                                                        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center" }}>
                                                            <button
                                                                onClick={() => { setEditData(address); setAddressModal(true); }}
                                                                style={{ display: "flex", alignItems: "center", gap: "6px", padding: "7px 14px", backgroundColor: "transparent", border: "1px solid #2a2d3a", color: "#ccc", borderRadius: "6px", cursor: "pointer", fontSize: "13px", transition: "all 0.2s" }}
                                                                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#a6d719"; (e.currentTarget as HTMLButtonElement).style.color = "#a6d719"; }}
                                                                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#2a2d3a"; (e.currentTarget as HTMLButtonElement).style.color = "#ccc"; }}
                                                            >
                                                                <Pencil size={13} /> Edit
                                                            </button>

                                                            <button
                                                                onClick={() => { setDeleteId(address.id); setDeleteModal(true); }}
                                                                style={{ display: "flex", alignItems: "center", gap: "6px", padding: "7px 14px", backgroundColor: "transparent", border: "1px solid #2a2d3a", color: "#ccc", borderRadius: "6px", cursor: "pointer", fontSize: "13px", transition: "all 0.2s" }}
                                                                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#ef4444"; (e.currentTarget as HTMLButtonElement).style.color = "#ef4444"; }}
                                                                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#2a2d3a"; (e.currentTarget as HTMLButtonElement).style.color = "#ccc"; }}
                                                            >
                                                                <Trash size={13} /> Remove
                                                            </button>

                                                            {!address.selected_address && (
                                                                <button
                                                                    onClick={() => handleSelectDefault(address)}
                                                                    style={{ display: "flex", alignItems: "center", gap: "6px", padding: "7px 14px", backgroundColor: "", border: "1px solid rgba(166,215,25,0.3)", color: "#a6d719", borderRadius: "6px", cursor: "pointer", fontSize: "13px", marginLeft: "auto", transition: "all 0.2s" }}
                                                                    onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(166,215,25,0.18)"; }}
                                                                    onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(166,215,25,0.08)"; }}
                                                                >
                                                                    Set as Default
                                                                </button>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, minHeight: "280px", textAlign: "center" }}>
                                            <div style={{ width: "70px", height: "70px", borderRadius: "50%", backgroundColor: "#2a2d3a", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
                                                <MapPin size={32} color="#a6d719" />
                                            </div>
                                            <h4 className="text-white" style={{ fontSize: "20px" }}>No addresses</h4>
                                            <p style={{ color: "white", marginBottom: "0", fontSize: "14px" }}>Get started by adding a new address.</p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {deleteModal && (
                <div
                    style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}
                    onClick={() => { setDeleteModal(false); setDeleteId(null); }}
                >
                    <div
                        style={{ backgroundColor: "#141622", border: "1px solid #2a2d3a", borderRadius: "12px", padding: "32px", maxWidth: "420px", width: "100%" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div style={{ textAlign: "center", marginBottom: "20px" }}>
                            <div style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "rgba(239,68,68,0.12)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                                <Trash size={24} color="#ef4444" />
                            </div>
                            <h4 style={{ color: "#fff", marginBottom: "8px", fontFamily: "'Days One', sans-serif" }}>Delete Address</h4>
                            <p style={{ color: "#9ca3af", fontSize: "14px", margin: 0 }}>Are you sure you want to delete this address? This action cannot be undone.</p>
                        </div>

                        <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
                            <button
                                onClick={() => { setDeleteModal(false); setDeleteId(null); }}
                                style={{ padding: "10px 24px", backgroundColor: "transparent", border: "1px solid #2a2d3a", color: "#9ca3af", borderRadius: "6px", cursor: "pointer", fontSize: "14px" }}
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmDelete}
                                disabled={deleting}
                                style={{ padding: "10px 24px", backgroundColor: "#ef4444", border: "none", color: "#fff", borderRadius: "6px", cursor: "pointer", fontSize: "14px", display: "flex", alignItems: "center", gap: "8px" }}
                            >
                                {deleting && <Loader size={14} className="animate-spin" />}
                                Confirm Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <AddressForm
                open={addressModal}
                onClose={() => { setAddressModal(false); setEditData(null); }}
                editData={editData}
                userId={userId}
                userName={userName}
                onSuccess={() => queryClient.invalidateQueries(["getAddressData"] as InvalidateQueryFilters)}
            />
        </div>
    );
}

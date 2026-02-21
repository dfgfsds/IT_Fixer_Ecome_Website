"use client";
import React, { useState, useEffect } from "react";
import { Loader } from "lucide-react";
import { toast } from "sonner";
import { postAddressCreateApi, updateAddressApi } from "@/api-endpoints/CartsApi";

interface AddressFormProps {
    open: boolean;
    onClose: () => void;
    editData: any;
    userId: string | null;
    userName: string | null;
    onSuccess: () => void;
}

const emptyForm = {
    address_type: "",
    customer_name: "",
    contact_number: "",
    email_address: "",
    address_line1: "",
    address_line2: "",
    city: "",
    state: "",
    postal_code: "",
    country: "",
};

export default function AddressForm({ open, onClose, editData, userId, userName, onSuccess }: AddressFormProps) {
    const isEdit = !!editData?.id;
    const [form, setForm] = useState(emptyForm);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    useEffect(() => {
        if (isEdit) {
            setForm({
                address_type: editData.address_type || "",
                customer_name: editData.customer_name || "",
                contact_number: editData.contact_number || "",
                email_address: editData.email_address || "",
                address_line1: editData.address_line1 || "",
                address_line2: editData.address_line2 || "",
                city: editData.city || "",
                state: editData.state || "",
                postal_code: editData.postal_code || "",
                country: editData.country || "",
            });
        } else {
            setForm(emptyForm);
        }
    }, [editData, open]);

    if (!open) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        try {
            const payload = {
                ...form,
                user: userId,
                [isEdit ? "updated_by" : "created_by"]: userName || "user",
            };
            if (isEdit) {
                await updateAddressApi(`${editData.id}/`, payload);
                toast.success("Address updated!");
            } else {
                await postAddressCreateApi("", payload);
                toast.success("Address added!");
            }
            onSuccess();
            onClose();
        } catch {
            toast.error("Failed to save address.");
        } finally {
            setSaving(false);
        }
    };

    const inputStyle: React.CSSProperties = {
        backgroundColor: "#0b0e13",
        border: "1px solid #2a2d3a",
        color: "#fff",
        padding: "10px 14px",
        borderRadius: "6px",
        width: "100%",
        fontSize: "14px",
        outline: "none",
    };

    const labelStyle: React.CSSProperties = {
        color: "#9ca3af",
        fontSize: "13px",
        marginBottom: "6px",
        display: "block",
        textTransform: "uppercase",
        letterSpacing: "0.5px",
    };

    return (
        <div
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}
            onClick={onClose}
        >
            <div
                className="address-form-scroll"
                style={{ backgroundColor: "#141622", border: "1px solid #2a2d3a", borderRadius: "12px", padding: "30px", width: "100%", maxWidth: "560px", maxHeight: "90vh", overflowY: "auto" }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                    <h4 style={{ color: "#a6d719", margin: 0, fontFamily: "'Days One', sans-serif" }}>
                        {isEdit ? "Edit Address" : "Add New Address"}
                    </h4>
                    <button onClick={onClose} style={{ background: "none", border: "none", color: "#9ca3af", fontSize: "22px", cursor: "pointer", lineHeight: 1 }}>×</button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>

                        {/* Address Type */}
                        <div style={{ gridColumn: "1 / -1" }}>
                            <label style={labelStyle}>Address Type</label>
                            <select name="address_type" value={form.address_type} onChange={handleChange} required style={{ ...inputStyle, cursor: "pointer" }}>
                                <option value="">Select type</option>
                                <option value="Home">Home</option>
                                <option value="Work">Work</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        {/* Name */}
                        <div>
                            <label style={labelStyle}>Full Name</label>
                            <input name="customer_name" value={form.customer_name} onChange={handleChange} required placeholder="John Doe" style={inputStyle} />
                        </div>

                        {/* Phone */}
                        <div>
                            <label style={labelStyle}>Phone Number</label>
                            <input name="contact_number" value={form.contact_number} onChange={handleChange} required placeholder="+91 00000 00000" style={inputStyle} />
                        </div>

                        {/* Email */}
                        <div style={{ gridColumn: "1 / -1" }}>
                            <label style={labelStyle}>Email Address</label>
                            <input name="email_address" value={form.email_address} onChange={handleChange} type="email" placeholder="john@example.com" style={inputStyle} />
                        </div>

                        {/* Address Line 1 */}
                        <div style={{ gridColumn: "1 / -1" }}>
                            <label style={labelStyle}>Address Line 1</label>
                            <input name="address_line1" value={form.address_line1} onChange={handleChange} required placeholder="Street address, apartment, etc." style={inputStyle} />
                        </div>

                        {/* Address Line 2 */}
                        <div style={{ gridColumn: "1 / -1" }}>
                            <label style={labelStyle}>Address Line 2 <span style={{ opacity: 0.5 }}>(optional)</span></label>
                            <input name="address_line2" value={form.address_line2} onChange={handleChange} placeholder="Landmark, area, etc." style={inputStyle} />
                        </div>

                        {/* City */}
                        <div>
                            <label style={labelStyle}>City</label>
                            <input name="city" value={form.city} onChange={handleChange} required placeholder="City" style={inputStyle} />
                        </div>

                        {/* State */}
                        <div>
                            <label style={labelStyle}>State</label>
                            <input name="state" value={form.state} onChange={handleChange} required placeholder="State" style={inputStyle} />
                        </div>

                        {/* Postal Code */}
                        <div>
                            <label style={labelStyle}>Postal Code</label>
                            <input name="postal_code" value={form.postal_code} onChange={handleChange} required placeholder="000000" style={inputStyle} />
                        </div>

                        {/* Country */}
                        <div>
                            <label style={labelStyle}>Country</label>
                            <input name="country" value={form.country} onChange={handleChange} required placeholder="Country" style={inputStyle} />
                        </div>
                    </div>

                    {/* Actions */}
                    <div style={{ display: "flex", gap: "12px", marginTop: "24px", justifyContent: "flex-end" }}>
                        <button
                            type="button"
                            onClick={onClose}
                            style={{ padding: "10px 24px", backgroundColor: "transparent", border: "1px solid #2a2d3a", color: "#9ca3af", borderRadius: "6px", cursor: "pointer", fontSize: "14px" }}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={saving}
                            className="vs-btn"
                            style={{ padding: "10px 28px", fontSize: "14px", display: "flex", alignItems: "center", gap: "8px" }}
                        >
                            {saving && <Loader size={14} className="animate-spin" />}
                            {isEdit ? "Update Address" : "Save Address"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

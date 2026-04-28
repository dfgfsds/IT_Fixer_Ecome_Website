"use client";

import React, { useState } from "react";
import axios from "axios";
import ApiUrls from "@/api-endpoints/ApiUrls";
import { toast } from "sonner";
import { handleApiError } from "@/lib/error-handler";
import { Loader } from "lucide-react";

interface BlogQuoteFormProps {
    vendorId: string | null;
}

export default function BlogQuoteForm({ vendorId }: BlogQuoteFormProps) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        contact_number: "",
        description: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name === "contact_number") {
            const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
            setForm({ ...form, contact_number: digitsOnly });
        } else {
            setForm({ ...form, [name]: value });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.name || !form.email || !form.contact_number || !form.description) {
            toast.error("Please fill in all required fields.");
            return;
        }

        setLoading(true);
        try {
            await axios.post(ApiUrls?.sendQuoteRequest, { ...form, vendor_id: vendorId });
            toast.success("Message sent successfully");
            setForm({ name: "", email: "", contact_number: "", description: "" });
        } catch (err: any) {
            toast.error(handleApiError(err));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="gt-comment-form-wrap mt-5">
            <style>{`
                .form-clt input, .form-clt textarea {
                    color: #ffffff !important;
                    caret-color: #ffffff !important;
                }
                .form-clt input::placeholder, .form-clt textarea::placeholder {
                    color: rgba(255, 255, 255, 0.5) !important;
                }
            `}</style>
            <h4>Leave a comments</h4>
            <p>Your email address will not be published. Required fields are marked *</p>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className="row g-4">
                    <div className="col-lg-12">
                        <div className="form-clt">
                            <span>Your Name</span>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={form.name}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-clt">
                            <span>Your Email</span>
                            <input
                                type="text"
                                name="email"
                                placeholder="Your Email"
                                value={form.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-clt">
                            <span>Mobile Number</span>
                            <input
                                type="tel"
                                name="contact_number"
                                placeholder="Your Mobile Number"
                                value={form.contact_number}
                                onChange={handleChange}
                                maxLength={10}
                                inputMode="numeric"
                                pattern="[0-9]{10}"
                            />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-clt">
                            <span>write message</span>
                            <textarea
                                name="description"
                                placeholder="Type your message"
                                value={form.description}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <button
                            type="submit"
                            className="vs-btn w-100"
                            disabled={loading}
                            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
                        >
                            {loading && <Loader size={18} className="animate-spin" />}
                            {loading ? "SENDING..." : "SEND MESSAGE"}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

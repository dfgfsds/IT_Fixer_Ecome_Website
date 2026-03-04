"use client";
import { useState } from "react";
import axios from "axios";
import ApiUrls from "@/api-endpoints/ApiUrls";
import { toast } from "sonner";
import { useVendor } from "@/context/VendorContext";

export default function ConatctFormSection() {
    const { vendorId } = useVendor();
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
            toast.error(err?.response?.data?.message || "Something went wrong, try again later");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="gt-contact-us-section section-padding fix">
            <div className="container">
                <div className="gt-contact-us-wrapper">
                    <div className="row g-4">
                        <div className="col-lg-8">
                            <div className="gt-comment-form-wrap">
                                <h4>We're Here to Help!</h4>
                                <p>Your email address will not be published. Required fields are marked *</p>
                                <form id="contact-form" onSubmit={handleSubmit}>
                                    <div className="row g-4">
                                        <div className="col-lg-12">
                                            <div className="form-clt">
                                                <span>Your Name</span>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
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
                                                    id="email6"
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
                                                    id="contact_number"
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
                                                    id="message"
                                                    placeholder="Type your message"
                                                    value={form.description}
                                                    onChange={handleChange}
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <button
                                                type="submit"
                                                className="vs-btn cart-animation-item"
                                                disabled={loading}
                                            >
                                                {loading ? "Sending..." : "Send Message"}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="gt-contact-bg" style={{ backgroundColor: "#1C1D20", padding: "0px", borderRadius: "10px" }}>
                                <div className="gt-contact-content">
                                    <h3>Need Any Help</h3>
                                    <p>Call Us 24/7 Full Support</p>

                                    <div className="gt-contact-item" style={{ display: "flex", gap: "25px", alignItems: "center", marginBottom: "30px" }}>
                                        <div className="gt-icon" style={{ width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center", minWidth: "50px" }}>
                                            <i className="fa-solid fa-phone"></i>
                                        </div>
                                        <ul className="gt-list" style={{ margin: 0, padding: 0, listStyle: "none" }}>
                                            <li><a href="tel:+918585858768" style={{ fontSize: "18px", fontWeight: "700" }}>+91 8585858768</a></li>
                                        </ul>
                                    </div>

                                    <div className="gt-contact-item" style={{ display: "flex", gap: "25px", alignItems: "center", marginBottom: "30px" }}>
                                        <div className="gt-icon" style={{ width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center", minWidth: "50px" }}>
                                            <i className="fa-regular fa-envelope"></i>
                                        </div>
                                        <ul className="gt-list" style={{ margin: 0, padding: 0, listStyle: "none" }}>
                                            <li><a href="mailto:info@itfixer.in" style={{ fontSize: "18px", fontWeight: "700", textTransform: "lowercase" }}>info@itfixer.in</a></li>
                                        </ul>
                                    </div>

                                    <div className="gt-contact-item mb-0" style={{ display: "flex", gap: "25px", alignItems: "start" }}>
                                        <div className="gt-icon" style={{ width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center", minWidth: "50px" }}>
                                            <i className="fa-solid fa-location-dot"></i>
                                        </div>
                                        <ul className="gt-list" style={{ margin: 0, padding: 0, listStyle: "none" }}>
                                            <li>
                                                <a
                                                    href="https://www.google.com/maps/search/?api=1&query=Chennai,+Tamil+Nadu,+India"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    style={{ fontSize: "16px", fontWeight: "700", lineHeight: "1.5", display: "block" }}
                                                >
                                                    New No 29, Old No 31 & 32, Anjugam Nagar, 1st Street, Jafferkhanpet (Opp to Kasi Theatre), Ashok Nagar, Chennai 600083
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
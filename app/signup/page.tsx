"use client";
import { postCreateUserAPi } from "@/api-endpoints/authendication";
import { postCartCreateApi } from "@/api-endpoints/CartsApi";
import { useVendor } from "@/context/VendorContext";
import { Home } from "lucide-react";
import { useState } from "react";

export default function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const { vendorId } = useVendor();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email || !password || !mobile) {
            setError('Please fill in all fields.');
            return;
        }

        if (mobile.length !== 10) {
            setError('Mobile number must be exactly 10 digits.');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const userResponse = await postCreateUserAPi({
                name,
                email,
                password,
                contact_number: mobile,
                vendor: vendorId,
                created_by: name
            });

            if (userResponse.data?.user?.id || userResponse.data?.id || userResponse.data?.user_id) {
                const userId = userResponse.data?.user?.id || userResponse.data.id || userResponse.data.user_id;
                localStorage.setItem('userId', userId);

                try {
                    const cartResponse = await postCartCreateApi('', {
                        user: userId,
                        vendor: vendorId,
                        created_by: name
                    });
                    if (cartResponse.data?.id) {
                        localStorage.setItem('cartId', cartResponse.data.id);
                    }
                } catch (cartErr) {
                    console.error("Failed to create cart:", cartErr);
                }

                window.location.href = '/';
            } else {
                setError(userResponse.data?.message || 'Failed to create account. Please try again.');
            }
        } catch (err: any) {
            setError(err.response?.data?.message || 'Error creating account. Please check your details.');
        } finally {
            setLoading(false);
        }
    };
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
                            <h1 className="wow fadeInUp" data-wow-delay=".3s">SIGNUP</h1>
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
                            <li className="color">Signup</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="auth-wrapper">
                <div className="auth-card">

                    <h1>Create Account</h1>
                    <p>Join with us today</p>

                    <form className="auth-form" onSubmit={handleSubmit}>
                        {error && <div className="alert alert-danger py-2 mb-3" style={{ fontSize: '14px' }}>{error}</div>}

                        <div className="mb-3">
                            <input
                                className="form-control"
                                placeholder="Full Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                disabled={loading}
                            />
                        </div>

                        <div className="mb-3">
                            <input
                                className="form-control"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={loading}
                            />
                        </div>

                        <div className="mb-3">
                            <input
                                className="form-control"
                                placeholder="Mobile Number"
                                value={mobile}
                                onChange={(e) => {
                                    const val = e.target.value.replace(/\D/g, '');
                                    if (val.length <= 10) setMobile(val);
                                }}
                                disabled={loading}
                            />
                        </div>

                        <div className="mb-3">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                disabled={loading}
                            />
                        </div>

                        <button
                            type="submit"
                            className="vs-btn cart-animation-item w-100"
                            disabled={loading}
                        >
                            {loading ? 'Creating Account...' : 'Create Account'}
                        </button>

                        <p className="mt-4">
                            Already have account?{" "}
                            <a href="/login" className="auth-link">Login</a>
                        </p>
                    </form>

                </div>
            </div>
        </div>
    );
}

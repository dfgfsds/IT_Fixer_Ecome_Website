"use client";
import { postCreateUserAPi } from "@/api-endpoints/authendication";
import { postCartCreateApi } from "@/api-endpoints/CartsApi";
import { useVendor } from "@/context/VendorContext";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Home, Eye, EyeOff, Loader } from "lucide-react";
import { handleApiError } from "@/lib/error-handler";
import { useState } from "react";
import { toast } from "sonner";

export default function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const { vendorId } = useVendor();
    const { refreshUser } = useUser();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email || !password || !mobile) {
            toast.error('Please fill in all fields.');
            return;
        }

        if (mobile.length !== 10) {
            toast.error('Mobile number must be exactly 10 digits.');
            return;
        }

        setLoading(true);

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
                    console.warn("Soft Error: Failed to create cart:", cartErr);
                }

                refreshUser();
                toast.success('Account created successfully!');
                router.push('/');
            } else {
                toast.error(handleApiError(userResponse));
            }
        } catch (err: any) {
            toast.error(handleApiError(err));
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
                                <Link
                                    href="/"
                                    className="d-inline-flex align-items-center gap-1"
                                >
                                    <Home size={16} className="mb-[1px]" />
                                    home :
                                </Link>
                            </li>
                            <li className="color">Signup</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="auth-wrapper">
                <div className="auth-card">

                    <h1 className="text-uppercase">Create Account</h1>
                    <p>Join with us today</p>

                    <form className="auth-form" onSubmit={handleSubmit}>

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

                        <div className="mb-3 position-relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="form-control"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                disabled={loading}
                            />
                            <button
                                type="button"
                                className="position-absolute border-0 bg-transparent p-0"
                                style={{ right: '12px', top: '50%', transform: 'translateY(-50%)', color: '#fff', zIndex: 10 }}
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>

                        <button
                            type="submit"
                            className="vs-btn w-100"
                            disabled={loading}
                            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
                        >
                            {loading && <Loader size={18} className="animate-spin" />}
                            {loading ? 'CREATING ACCOUNT...' : 'CREATE ACCOUNT'}
                        </button>

                        <p className="mt-4">
                            Already have account?{" "}
                            <Link href="/login" className="auth-link">Login</Link>
                        </p>
                    </form>

                </div>
            </div>
        </div>
    );
}

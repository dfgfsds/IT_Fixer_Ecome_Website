"use client";
import { postSendSmsOtpUserApi, postVerifySmsOtpApi, postSignInAPi, postGoogleLoginApi } from "@/api-endpoints/authendication";
import { getCartApi, postCartCreateApi } from "@/api-endpoints/CartsApi";
import { useVendor } from "@/context/VendorContext";
import { useUser } from "@/context/UserContext";
import { auth, googleProvider } from "@/lib/firebase";
import { signInWithPopup } from "firebase/auth";
import Link from "next/link";
import { Home, Eye, EyeOff, Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";
import { handleApiError } from "@/lib/error-handler";

export default function Login() {
    const [loginMethod, setLoginMethod] = useState<'email' | 'mobile'>('mobile');
    const [step, setStep] = useState<'PHONE_INPUT' | 'OTP_INPUT'>('PHONE_INPUT');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');
    const [otp, setOtp] = useState('');
    const [sessionToken, setSessionToken] = useState('');
    const [loading, setLoading] = useState(false);
    const [googleLoading, setGoogleLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const { vendorId } = useVendor();
    const router = useRouter();
    const { refreshUser } = useUser();

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, action: () => void) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            action();
        }
    };
    const handleLoginMethodChange = (method: 'email' | 'mobile') => {
        setLoginMethod(method);
        setStep('PHONE_INPUT');
    };

    const handleEmailLogin = async () => {
        if (!email || !password) {
            toast.error('Please enter both email and password.');
            return;
        }

        setLoading(true);
        try {
            const response = await postSignInAPi({
                email: email,
                password: password,
                vendor_id: vendorId
            });

            if (response.data?.status === 'success' || response.data?.user_id) {
                const userId = response.data.user_id || response.data.id;
                if (userId) {
                    localStorage.setItem('userId', userId);
                    try {
                        // 1. Fetch the user's existing cart from server
                        const cartRes = await getCartApi(`user/${userId}/`);

                        // 2. Extract the ID (handles different API response shapes)
                        const carts = cartRes?.data?.data || cartRes?.data;
                        const existingCartId = Array.isArray(carts) ? carts[0]?.id : carts?.id;
                        if (existingCartId) {
                            localStorage.setItem('cartId', String(existingCartId));
                        } else {
                            // 3. Create a cart if they don't have one yet
                            const newCart = await postCartCreateApi('', { user: userId, vendor: vendorId, created_by: 'user' });
                            if (newCart?.data?.id) localStorage.setItem('cartId', String(newCart.data.id));
                        }
                    } catch (e) { console.error("Identity restore failed", e); }
                    refreshUser();
                    toast.success('Logged in successfully!');
                    router.push('/shop');
                } else {
                    toast.error('User ID not found in response.');
                }
            } else {
                toast.error(handleApiError(response));
            }
        } catch (error: any) {
            toast.error(handleApiError(error));
        } finally {
            setLoading(false);
        }
    };

    const handleSendOtp = async () => {
        if (!mobile || mobile.length !== 10) {
            toast.error('Please enter a valid 10-digit mobile number.');
            return;
        }
        setLoading(true);
        try {
            const response = await postSendSmsOtpUserApi({
                contact_number: mobile,
                vendor_id: vendorId
            });
            if (response.data?.status === 'success' || response.data?.token) {
                setSessionToken(response.data.token);
                setStep('OTP_INPUT');
                toast.success('OTP sent successfully!');
            } else {
                toast.error(handleApiError(response));
            }
        } catch (error: any) {
            toast.error(handleApiError(error));
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyOtp = async () => {
        if (!otp || otp.length < 4) {
            toast.error('Please enter a valid OTP.');
            return;
        }

        setLoading(true);
        try {
            const response = await postVerifySmsOtpApi({
                otp: otp,
                token: sessionToken,
                login_type: 'user',
                vendor_id: vendorId
            });

            if (response.data?.status === 'success' || response.data?.user_id) {
                const userId = response.data.user_id || response.data.id;
                if (userId) {
                    localStorage.setItem('userId', userId);
                    try {
                        // 1. Fetch the user's existing cart from server
                        const cartRes = await getCartApi(`user/${userId}/`);

                        // 2. Extract the ID (handles different API response shapes)
                        const carts = cartRes?.data?.data || cartRes?.data;
                        const existingCartId = Array.isArray(carts) ? carts[0]?.id : carts?.id;
                        if (existingCartId) {
                            localStorage.setItem('cartId', String(existingCartId));
                        } else {
                            // 3. Create a cart if they don't have one yet
                            const newCart = await postCartCreateApi('', { user: userId, vendor: vendorId, created_by: 'user' });
                            if (newCart?.data?.id) localStorage.setItem('cartId', String(newCart.data.id));
                        }
                    } catch (e) { console.error("Identity restore failed", e); }
                    refreshUser();
                    toast.success('Verification successful!');
                    router.push('/shop');
                } else {
                    toast.error('User ID not found in response.');
                }
            } else {
                toast.error(handleApiError(response));
            }
        } catch (error: any) {
            toast.error(handleApiError(error));
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        setGoogleLoading(true);
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const idToken = await result.user.getIdToken();

            const response = await postGoogleLoginApi({
                id_token: idToken,
                vendor_id: Number(vendorId) || 63
            });

            if (response.data?.status === 'success' || response.data?.user_id || response.data?.id || response.data?.user?.id || response.data?.data?.id) {
                const userId = response.data?.user_id || response.data?.id || response.data?.user?.id || response.data?.data?.id;
                if (userId) {
                    localStorage.setItem('userId', String(userId));
                    if (response.data?.token) {
                        localStorage.setItem('token', response.data.token);
                    }
                    try {
                        // 1. Fetch the user's existing cart from server
                        const cartRes = await getCartApi(`user/${userId}/`);

                        // 2. Extract the ID (handles different API response shapes)
                        const carts = cartRes?.data?.data || cartRes?.data;
                        const existingCartId = Array.isArray(carts) ? carts[0]?.id : carts?.id;
                        if (existingCartId) {
                            localStorage.setItem('cartId', String(existingCartId));
                        } else {
                            // 3. Create a cart if they don't have one yet
                            const newCart = await postCartCreateApi('', {
                                user: userId,
                                vendor: vendorId || 63,
                                created_by: result.user.displayName || result.user.email || 'user'
                            });
                            if (newCart?.data?.id) localStorage.setItem('cartId', String(newCart.data.id));
                        }
                    } catch (e) {
                        console.error("Identity restore failed", e);
                    }
                    refreshUser();
                    toast.success('Logged in with Google successfully!');
                    router.push('/shop');
                } else {
                    toast.error('User ID not found in response.');
                }
            } else {
                toast.error(handleApiError(response));
            }
        } catch (error: any) {
            if (error?.code === 'auth/popup-closed-by-user') {
                return;
            }
            toast.error(handleApiError(error));
        } finally {
            setGoogleLoading(false);
        }
    };

    return (
        <div id="smooth-content">
            <div
                className="gt-breadcrumb-wrapper bg-cover"
                style={{ backgroundImage: "url('/assets/img/breadcrumb.png')" }}
            >
                <div className="gt-left-shape">
                    <img src="/assets/img/shape-1.png" alt="img" />
                </div>
                <div className="gt-right-shape">
                    <img src="/assets/img/shape-2.png" alt="img" />
                </div>
                <div className="gt-blur-shape">
                    <img src="/assets/img/breadcrumb-shape.png" alt="img" />
                </div>

                <div className="container">
                    <div className="gt-page-heading">
                        <div className="gt-breadcrumb-sub-title">
                            <h1 className="wow fadeInUp" data-wow-delay=".3s">LOGIN</h1>
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
                            <li className="color">Login</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="auth-wrapper">
                <div className="auth-card">
                    <h1 className="text-uppercase">Welcome Back</h1>
                    <p>Login to your account</p>

                    <button
                        type="button"
                        onClick={handleGoogleLogin}
                        disabled={loading || googleLoading}
                        className="google-login-btn w-100 mb-3"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "12px",
                            padding: "12px 20px",
                            backgroundColor: "#ffffff",
                            color: "#1f2937",
                            border: "1px solid #e5e7eb",
                            borderRadius: "6px",
                            fontWeight: 600,
                            fontSize: "14px",
                            cursor: "pointer",
                            transition: "all 0.2s ease"
                        }}
                    >
                        {googleLoading ? (
                            <Loader size={18} className="animate-spin text-dark" />
                        ) : (
                            <svg width="18" height="18" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                            </svg>
                        )}
                        <span>{googleLoading ? 'Signing in with Google...' : 'Continue with Google'}</span>
                    </button>

                    <div className="auth-divider my-3 d-flex align-items-center justify-content-center" style={{ gap: "10px" }}>
                        <div style={{ flex: 1, height: '1px', backgroundColor: '#2a2d3a' }}></div>
                        <span style={{ color: '#9ca3af', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>or continue with</span>
                        <div style={{ flex: 1, height: '1px', backgroundColor: '#2a2d3a' }}></div>
                    </div>

                    <div className="auth-tabs">
                        <button
                            className={`text-uppercase auth-tab ${loginMethod === 'mobile' ? 'active' : ''}`}
                            onClick={() => handleLoginMethodChange('mobile')}
                        >
                            Mobile Login
                        </button>
                        <button
                            className={`text-uppercase auth-tab ${loginMethod === 'email' ? 'active' : ''}`}
                            onClick={() => handleLoginMethodChange('email')}
                        >
                            Email Login
                        </button>
                    </div>

                    <form onSubmit={(e) => {
                        e.preventDefault();
                        if (loginMethod === 'email') {
                            handleEmailLogin();
                        }
                    }}>
                        {loginMethod === 'email' ? (
                            <>
                                <div className="mb-3">
                                    <input
                                        key="email-input"
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        disabled={loading || googleLoading}
                                    />
                                </div>
                                <div className="mb-3 position-relative">
                                    <input
                                        key="password-input"
                                        type={showPassword ? "text" : "password"}
                                        className="form-control"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        disabled={loading || googleLoading}
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
                                <div className="d-flex justify-content-between mb-3">
                                    <Link href="/forgot-password" className="auth-link">
                                        Forgot password?
                                    </Link>
                                </div>
                                <button
                                    type="submit"
                                    className="vs-btn w-100"
                                    disabled={loading || googleLoading}
                                    style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
                                >
                                    {loading && <Loader size={18} className="animate-spin" />}
                                    {loading ? 'LOGGING IN...' : 'LOGIN'}
                                </button>
                            </>
                        ) : (
                            <>
                                <div className="mb-3">
                                    <input
                                        key="mobile-input"
                                        type="tel"
                                        className="form-control"
                                        placeholder="Mobile Number"
                                        value={mobile}
                                        onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
                                        disabled={step === 'OTP_INPUT' || loading || googleLoading}
                                        onKeyDown={(e) => handleKeyDown(e, handleSendOtp)}
                                    />
                                </div>

                                {step === 'OTP_INPUT' && (
                                    <div className="mb-3">
                                        <input
                                            key="otp-input"
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter OTP"
                                            maxLength={6}
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                                            disabled={loading || googleLoading}
                                            onKeyDown={(e) => handleKeyDown(e, handleVerifyOtp)}
                                        />
                                    </div>
                                )}

                                {step === 'OTP_INPUT' && (
                                    <div className="mb-3 text-end">
                                        <button
                                            type="button"
                                            className="auth-link border-0 bg-transparent p-0"
                                            onClick={() => {
                                                setStep('PHONE_INPUT');
                                                setOtp('');
                                            }}
                                            disabled={loading || googleLoading}
                                        >
                                            Change mobile number?
                                        </button>
                                    </div>
                                )}

                                {step === 'PHONE_INPUT' ? (
                                    <button
                                        type="button"
                                        className="vs-btn w-100"
                                        onClick={handleSendOtp}
                                        disabled={loading || googleLoading}
                                        style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
                                    >
                                        {loading && <Loader size={18} className="animate-spin" />}
                                        {loading ? 'SENDING...' : 'SEND OTP'}
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        className="vs-btn w-100"
                                        onClick={handleVerifyOtp}
                                        disabled={loading || googleLoading}
                                        style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
                                    >
                                        {loading && <Loader size={18} className="animate-spin" />}
                                        {loading ? 'VERIFYING...' : 'VERIFY OTP'}
                                    </button>
                                )}
                            </>
                        )}

                        <p className="auth-other">
                            Don’t have an account?{" "}
                            <Link href="/signup" className="auth-link">Sign up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

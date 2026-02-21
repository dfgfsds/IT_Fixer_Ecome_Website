"use client";
import { postSendSmsOtpUserApi, postVerifySmsOtpApi, postSignInAPi } from "@/api-endpoints/authendication";
import { getCartApi, postCartCreateApi } from "@/api-endpoints/CartsApi";
import { useVendor } from "@/context/VendorContext";
import { Home } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
    const [loginMethod, setLoginMethod] = useState<'email' | 'mobile'>('mobile');
    const [step, setStep] = useState<'PHONE_INPUT' | 'OTP_INPUT'>('PHONE_INPUT');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');
    const [otp, setOtp] = useState('');
    const [sessionToken, setSessionToken] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const { vendorId } = useVendor();
    const router = useRouter();

    const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            action();
        }
    };
    const handleLoginMethodChange = (method: 'email' | 'mobile') => {
        setLoginMethod(method);
        setStep('PHONE_INPUT');
        setError('');
    };

    const handleEmailLogin = async () => {
        if (!email || !password) {
            setError('Please enter both email and password.');
            return;
        }

        setLoading(true);
        setError('');
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
                    window.location.href = '/shop';
                } else {
                    setError('User ID not found in response.');
                }
            } else {
                setError(response.data?.message || 'Invalid email or password. Please try again.');
            }
        } catch (err: any) {
            setError(err.response?.data?.message || 'Error logging in. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleSendOtp = async () => {
        if (!mobile || mobile.length !== 10) {
            setError('Please enter a valid 10-digit mobile number.');
            return;
        }
        setLoading(true);
        setError('');
        try {
            const response = await postSendSmsOtpUserApi({
                contact_number: mobile,
                vendor_id: vendorId
            });
            if (response.data?.status === 'success' || response.data?.token) {
                setSessionToken(response.data.token);
                setStep('OTP_INPUT');
            } else {
                setError(response.data?.message || 'Failed to send OTP. Please try again.');
            }
        } catch (err: any) {
            setError(err.response?.data?.message || 'Error sending OTP. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyOtp = async () => {
        if (!otp || otp.length < 4) {
            setError('Please enter a valid OTP.');
            return;
        }

        setLoading(true);
        setError('');
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
                    window.location.href = '/shop';
                } else {
                    setError('User ID not found in response.');
                }
            } else {
                setError(response.data?.message || 'Invalid OTP. Please try again.');
            }
        } catch (err: any) {
            setError(err.response?.data?.message || 'Error verifying OTP. Please try again.');
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
                            <h1 className="wow fadeInUp" data-wow-delay=".3s">LOGIN</h1>
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
                            <li className="color">Login</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="auth-wrapper">
                <div className="auth-card">
                    <h1>Welcome Back</h1>
                    <p>Login to your account</p>

                    <div className="auth-tabs">
                        <button
                            className={`auth-tab ${loginMethod === 'mobile' ? 'active' : ''}`}
                            onClick={() => handleLoginMethodChange('mobile')}
                        >
                            Mobile Login
                        </button>
                        <button
                            className={`auth-tab ${loginMethod === 'email' ? 'active' : ''}`}
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
                                {error && <div className="alert alert-danger py-2 mb-3" style={{ fontSize: '14px' }}>{error}</div>}
                                <div className="mb-3">
                                    <input
                                        key="email-input"
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        disabled={loading}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        key="password-input"
                                        type="password"
                                        className="form-control"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        disabled={loading}
                                    />
                                </div>
                                <div className="d-flex justify-content-between mb-3">
                                    <a href="/forgot-password" className="auth-link">
                                        Forgot password?
                                    </a>
                                </div>
                                <button
                                    type="submit"
                                    className="vs-btn cart-animation-item w-100"
                                    disabled={loading}
                                >
                                    {loading ? 'Logging in...' : 'Login'}
                                </button>
                            </>
                        ) : (
                            <>
                                {error && <div className="alert alert-danger py-2 mb-3" style={{ fontSize: '14px' }}>{error}</div>}
                                <div className="mb-3">
                                    <input
                                        key="mobile-input"
                                        type="tel"
                                        className="form-control"
                                        placeholder="Mobile Number"
                                        value={mobile}
                                        onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
                                        disabled={step === 'OTP_INPUT' || loading}
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
                                            disabled={loading}
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
                                                setError('');
                                            }}
                                            disabled={loading}
                                        >
                                            Change mobile number?
                                        </button>
                                    </div>
                                )}

                                {step === 'PHONE_INPUT' ? (
                                    <button
                                        type="button"
                                        className="vs-btn cart-animation-item w-100"
                                        onClick={handleSendOtp}
                                        disabled={loading}
                                    >
                                        {loading ? 'Sending...' : 'Get OTP'}
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        className="vs-btn cart-animation-item w-100"
                                        onClick={handleVerifyOtp}
                                        disabled={loading}
                                    >
                                        {loading ? 'Verifying...' : 'Verify OTP'}
                                    </button>
                                )}
                            </>
                        )}

                        <p className="auth-other">
                            Don’t have an account?{" "}
                            <a href="/signup" className="auth-link">Sign up</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

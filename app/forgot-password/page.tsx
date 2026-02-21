"use client";
import { getCheckEmailApi, postSendOtpAPi, postSendOtpVerifyAPi, updateUserAPi } from "@/api-endpoints/authendication";
import { useVendor } from "@/context/VendorContext";
import { Home, Loader2 } from "lucide-react";
import { useState } from "react";

export default function ForgotPassword() {
    const [phase, setPhase] = useState<'EMAIL' | 'OTP' | 'RESET'>('EMAIL');
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [token, setToken] = useState('');
    const [currentUserId, setCurrentUserId] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const { vendorId } = useVendor();

    const handleCheckEmailAndSendOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) {
            setError('Please enter your email address.');
            return;
        }

        setLoading(true);
        setError('');
        try {
            // Step 1: Check Email
            const checkResponse = await getCheckEmailApi(`?email=${encodeURIComponent(email)}&vendor_id=${vendorId}`);

            if (checkResponse.data?.id) {
                // Step 2: Send OTP
                const otpResponse = await postSendOtpAPi({
                    email: checkResponse.data.email,
                    vendor_id: vendorId
                });

                if (otpResponse.data?.status === 'success' || otpResponse.data?.token) {
                    setToken(otpResponse.data.token);
                    setPhase('OTP');
                } else {
                    setError(otpResponse.data?.message || 'Failed to send OTP. Please try again.');
                }
            } else {
                setError("You're not a registered user, please create an account.");
            }
        } catch (err: any) {
            setError(err.response?.data?.message || "You're not a registered user, please create an account.");
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!otp || otp.length < 6) {
            setError('Please enter a valid 6-digit OTP.');
            return;
        }

        setLoading(true);
        setError('');
        try {
            const response = await postSendOtpVerifyAPi({
                token: token,
                otp: otp,
                vendor_id: vendorId,
                login_type: 'user'
            });

            if (response.data?.status === 'success' || response.data?.user_id) {
                setCurrentUserId(response.data.user_id || response.data.id);
                setPhase('RESET');
            } else {
                setError(response.data?.message || 'Invalid OTP. Please try again.');
            }
        } catch (err: any) {
            setError(err.response?.data?.message || 'Error verifying OTP. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleResetPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newPassword || !confirmPassword) {
            setError('Please fill in both password fields.');
            return;
        }
        if (newPassword !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        setLoading(true);
        setError('');
        try {
            const response = await updateUserAPi(`/${currentUserId}`, {
                password: newPassword,
                updated_by: 'user',
                role: 3,
                vendor: vendorId
            });

            if (response.status === 200 || response.status === 201 || response.data?.status === 'success') {
                alert('Password reset successfully!');
                window.location.href = '/login';
            } else {
                setError(response.data?.message || 'Failed to reset password.');
            }
        } catch (err: any) {
            setError(err.response?.data?.message || 'Error updating password. Please try again.');
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
                            <h1 className="wow fadeInUp" data-wow-delay=".3s">FORGOT PASSWORD</h1>
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
                            <li className="color">Forgot Password</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="auth-wrapper">
                <div className="auth-card">

                    {phase === 'EMAIL' && (
                        <>
                            <h1>Reset Password</h1>
                            <p>Enter your email to receive an OTP</p>
                            <form className="auth-form" onSubmit={handleCheckEmailAndSendOtp}>
                                {error && <div className="alert alert-danger py-2 mb-3" style={{ fontSize: '14px' }}>{error}</div>}
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        disabled={loading}
                                    />
                                </div>
                                <button type="submit" className="vs-btn cart-animation-item w-100" disabled={loading}>
                                    {loading ? (
                                        <div className="d-flex align-items-center gap-2">
                                            <Loader2 size={18} className="animate-spin" />
                                            Checking...
                                        </div>
                                    ) : 'Send OTP'}
                                </button>
                                <p className="auth-other">
                                    Back to <a href="/login" className="auth-link">Login</a>
                                </p>
                            </form>
                        </>
                    )}

                    {phase === 'OTP' && (
                        <>
                            <h1>Verify OTP</h1>
                            <p>Enter the 6-digit code sent to {email}</p>
                            <form className="auth-form" onSubmit={handleVerifyOtp}>
                                {error && <div className="alert alert-danger py-2 mb-3" style={{ fontSize: '14px' }}>{error}</div>}
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter 6-digit OTP"
                                        maxLength={6}
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                                        disabled={loading}
                                    />
                                </div>
                                <button type="submit" className="vs-btn cart-animation-item w-100" disabled={loading}>
                                    {loading ? (
                                        <div className="d-flex align-items-center gap-2">
                                            <Loader2 size={18} className="animate-spin" />
                                            Verifying...
                                        </div>
                                    ) : 'Verify OTP'}
                                </button>
                                <p className="auth-other">
                                    Wrong email? <button type="button" className="auth-link border-0 bg-transparent p-0" onClick={() => setPhase('EMAIL')}>Change</button>
                                </p>
                            </form>
                        </>
                    )}

                    {phase === 'RESET' && (
                        <>
                            <h1>New Password</h1>
                            <p>Create a strong new password</p>
                            <form className="auth-form" onSubmit={handleResetPassword}>
                                {error && <div className="alert alert-danger py-2 mb-3" style={{ fontSize: '14px' }}>{error}</div>}
                                <div className="mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="New Password"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        disabled={loading}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Confirm Password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        disabled={loading}
                                    />
                                </div>
                                <button type="submit" className="vs-btn cart-animation-item w-100" disabled={loading}>
                                    {loading ? (
                                        <div className="d-flex align-items-center gap-2">
                                            <Loader2 size={18} className="animate-spin" />
                                            Updating...
                                        </div>
                                    ) : 'Reset Password'}
                                </button>
                            </form>
                        </>
                    )}

                </div>
            </div>
        </div>
    );
}

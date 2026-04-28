"use client";
import { getCheckEmailApi, postSendOtpAPi, postSendOtpVerifyAPi, updateUserAPi } from "@/api-endpoints/authendication";
import { useVendor } from "@/context/VendorContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Home, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { handleApiError } from "@/lib/error-handler";
import { Loader } from "lucide-react";

export default function ForgotPassword() {
    const [phase, setPhase] = useState<'EMAIL' | 'OTP' | 'RESET'>('EMAIL');
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [token, setToken] = useState('');
    const [currentUserId, setCurrentUserId] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const { vendorId } = useVendor();
    const router = useRouter();

    const handleCheckEmailAndSendOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) {
            toast.error('Please enter your email address.');
            return;
        }

        setLoading(true);
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
                    toast.success('OTP sent to your email.');
                } else {
                    toast.error(handleApiError(otpResponse));
                }
            } else {
                toast.warning("You're not a registered user, please create an account.");
            }
        } catch (err: any) {
            toast.error(handleApiError(err));
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!otp || otp.length < 6) {
            toast.error('Please enter a valid 6-digit OTP.');
            return;
        }

        setLoading(true);
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
                toast.success('OTP verified!');
            } else {
                toast.error(handleApiError(response));
            }
        } catch (err: any) {
            toast.error(handleApiError(err));
        } finally {
            setLoading(false);
        }
    };

    const handleResetPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newPassword || !confirmPassword) {
            toast.error('Please fill in both password fields.');
            return;
        }
        if (newPassword !== confirmPassword) {
            toast.error('Passwords do not match.');
            return;
        }

        setLoading(true);
        try {
            const response = await updateUserAPi(`/${currentUserId}`, {
                password: newPassword,
                updated_by: 'user',
                role: 3,
                vendor: vendorId
            });

            if (response.status === 200 || response.status === 201 || response.data?.status === 'success') {
                toast.success('Password reset successfully!');
                router.push('/login');
            } else {
                toast.error(handleApiError(response));
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
                            <h1 className="wow fadeInUp" data-wow-delay=".3s">FORGOT PASSWORD</h1>
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
                            <li className="color">Forgot Password</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="auth-wrapper">
                <div className="auth-card">

                    {phase === 'EMAIL' && (
                        <>
                            <h1 className="text-uppercase">Reset Password</h1>
                            <p>Enter your email to receive an OTP</p>
                            <form className="auth-form" onSubmit={handleCheckEmailAndSendOtp}>
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
                                <button type="submit" className="vs-btn w-100" disabled={loading} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                                    {loading && <Loader size={18} className="animate-spin" />}
                                    {loading ? 'CHECKING...' : 'SEND OTP'}
                                </button>
                                <p className="auth-other">
                                    Back to <Link href="/login" className="auth-link">Login</Link>
                                </p>
                            </form>
                        </>
                    )}

                    {phase === 'OTP' && (
                        <>
                            <h1>Verify OTP</h1>
                            <p>Enter the 6-digit code sent to {email}</p>
                            <form className="auth-form" onSubmit={handleVerifyOtp}>
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
                                <button type="submit" className="vs-btn w-100" disabled={loading} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                                    {loading && <Loader size={18} className="animate-spin" />}
                                    {loading ? 'VERIFYING...' : 'VERIFY OTP'}
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
                                <div className="mb-3 position-relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className="form-control"
                                        placeholder="New Password"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
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
                                <div className="mb-3 position-relative">
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        className="form-control"
                                        placeholder="Confirm Password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        disabled={loading}
                                    />
                                    <button
                                        type="button"
                                        className="position-absolute border-0 bg-transparent p-0"
                                        style={{ right: '12px', top: '50%', transform: 'translateY(-50%)', color: '#fff', zIndex: 10 }}
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    >
                                        {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                                <button type="submit" className="vs-btn w-100" disabled={loading} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                                    {loading && <Loader size={18} className="animate-spin" />}
                                    {loading ? 'UPDATING...' : 'RESET PASSWORD'}
                                </button>
                            </form>
                        </>
                    )}

                </div>
            </div>
        </div>
    );
}

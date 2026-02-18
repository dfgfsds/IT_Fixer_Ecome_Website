"use client";
import { Home } from "lucide-react";
import { useState } from "react";

export default function Login() {
    const [loginMethod, setLoginMethod] = useState<'email' | 'mobile'>('email');
    const [showOTP, setShowOTP] = useState(false);

    const handleLoginMethodChange = (method: 'email' | 'mobile') => {
        setLoginMethod(method);
        setShowOTP(false);
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

                    <form onSubmit={(e) => e.preventDefault()}>
                        {loginMethod === 'email' ? (
                            <>
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Password"
                                    />
                                </div>
                                <div className="d-flex justify-content-between mb-3">
                                    <a href="/forgot-password" className="auth-link">
                                        Forgot password?
                                    </a>
                                </div>
                                <button className="vs-btn cart-animation-item">Login</button>
                            </>
                        ) : (
                            <>
                                <div className="mb-3">
                                    <input
                                        type="tel"
                                        className="form-control"
                                        placeholder="Mobile Number"
                                        pattern="[0-9]{10}"
                                    />
                                </div>

                                {showOTP && (
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter OTP"
                                            maxLength={6}
                                        />
                                    </div>
                                )}

                                {!showOTP ? (
                                    <button
                                        className="vs-btn cart-animation-item"
                                        onClick={() => setShowOTP(true)}
                                    >
                                        Get OTP
                                    </button>
                                ) : (
                                    <button className="vs-btn cart-animation-item">
                                        Verify OTP
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

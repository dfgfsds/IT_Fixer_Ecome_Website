export default function ForgotPassword() {
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
                                    href="index.html"
                                    className="d-inline-flex align-items-center gap-1"
                                >
                                    {/* <Home size={16} className="mb-[1px]" /> */}
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

                    <h1>Reset Password</h1>
                    <p>We’ll send you reset link</p>

                    <form>
                        <div className="mb-3">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email address"
                            />
                        </div>

                        <button className="vs-btn cart-animation-item">Send Link</button>

                        <p className="mt-4">
                            Back to{" "}
                            <a href="/login" className="auth-link">Login</a>
                        </p>
                    </form>

                </div>
            </div>
        </div>
    );
}

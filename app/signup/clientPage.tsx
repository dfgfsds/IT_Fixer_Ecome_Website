// "use client";
// import { postCreateUserAPi } from "@/api-endpoints/authendication";
// import { postCartCreateApi } from "@/api-endpoints/CartsApi";
// import { useVendor } from "@/context/VendorContext";
// import { useUser } from "@/context/UserContext";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { Home, Eye, EyeOff, Loader } from "lucide-react";
// import { handleApiError } from "@/lib/error-handler";
// import { useState } from "react";
// import { toast } from "sonner";

// export default function Signup() {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [mobile, setMobile] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [showPassword, setShowPassword] = useState(false);

//     const { vendorId } = useVendor();
//     const { refreshUser } = useUser();
//     const router = useRouter();

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         if (!name || !email || !password || !mobile) {
//             toast.error('Please fill in all fields.');
//             return;
//         }

//         if (mobile.length !== 10) {
//             toast.error('Mobile number must be exactly 10 digits.');
//             return;
//         }

//         setLoading(true);

//         try {
//             const userResponse = await postCreateUserAPi({
//                 name,
//                 email,
//                 password,
//                 contact_number: mobile,
//                 vendor: vendorId,
//                 created_by: name
//             });

//             if (userResponse.data?.user?.id || userResponse.data?.id || userResponse.data?.user_id) {
//                 const userId = userResponse.data?.user?.id || userResponse.data.id || userResponse.data.user_id;
//                 localStorage.setItem('userId', userId);

//                 try {
//                     const cartResponse = await postCartCreateApi('', {
//                         user: userId,
//                         vendor: vendorId,
//                         created_by: name
//                     });
//                     if (cartResponse.data?.id) {
//                         localStorage.setItem('cartId', cartResponse.data.id);
//                     }
//                 } catch (cartErr) {
//                     console.warn("Soft Error: Failed to create cart:", cartErr);
//                 }

//                 refreshUser();
//                 toast.success('Account created successfully!');
//                 router.push('/');
//             } else {
//                 toast.error(handleApiError(userResponse));
//             }
//         } catch (err: any) {
//             toast.error(handleApiError(err));
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div id="smooth-content">
//             <div
//                 className="gt-breadcrumb-wrapper bg-cover"
//                 style={{ backgroundImage: "url('assets/img/breadcrumb.png')" }}
//             >
//                 <div className="gt-left-shape">
//                     <img src="assets/img/shape-1.png" alt="img" />
//                 </div>
//                 <div className="gt-right-shape">
//                     <img src="assets/img/shape-2.png" alt="img" />
//                 </div>
//                 <div className="gt-blur-shape">
//                     <img src="assets/img/breadcrumb-shape.png" alt="img" />
//                 </div>

//                 <div className="container">
//                     <div className="gt-page-heading">
//                         <div className="gt-breadcrumb-sub-title">
//                             <h1 className="wow fadeInUp" data-wow-delay=".3s">SIGNUP</h1>
//                         </div>

//                         <ul className="gt-breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
//                             <li>
//                                 <Link
//                                     href="/"
//                                     className="d-inline-flex align-items-center gap-1"
//                                 >
//                                     <Home size={16} className="mb-[1px]" />
//                                     home :
//                                 </Link>
//                             </li>
//                             <li className="color">Signup</li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//             <div className="auth-wrapper">
//                 <div className="auth-card">

//                     <h1 className="text-uppercase">Create Account</h1>
//                     <p>Join with us today</p>

//                     <form className="auth-form" onSubmit={handleSubmit}>

//                         <div className="mb-3">
//                             <input
//                                 className="form-control"
//                                 placeholder="Full Name"
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                                 disabled={loading}
//                             />
//                         </div>

//                         <div className="mb-3">
//                             <input
//                                 className="form-control"
//                                 placeholder="Email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 disabled={loading}
//                             />
//                         </div>

//                         <div className="mb-3">
//                             <input
//                                 className="form-control"
//                                 placeholder="Mobile Number"
//                                 value={mobile}
//                                 onChange={(e) => {
//                                     const val = e.target.value.replace(/\D/g, '');
//                                     if (val.length <= 10) setMobile(val);
//                                 }}
//                                 disabled={loading}
//                             />
//                         </div>

//                         <div className="mb-3 position-relative">
//                             <input
//                                 type={showPassword ? "text" : "password"}
//                                 className="form-control"
//                                 placeholder="Password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 disabled={loading}
//                             />
//                             <button
//                                 type="button"
//                                 className="position-absolute border-0 bg-transparent p-0"
//                                 style={{ right: '12px', top: '50%', transform: 'translateY(-50%)', color: '#fff', zIndex: 10 }}
//                                 onClick={() => setShowPassword(!showPassword)}
//                             >
//                                 {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//                             </button>
//                         </div>

//                         <button
//                             type="submit"
//                             className="vs-btn w-100"
//                             disabled={loading}
//                             style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
//                         >
//                             {loading && <Loader size={18} className="animate-spin" />}
//                             {loading ? 'CREATING ACCOUNT...' : 'CREATE ACCOUNT'}
//                         </button>

//                         <p className="mt-4">
//                             Already have account?{" "}
//                             <Link href="/login" className="auth-link">Login</Link>
//                         </p>
//                     </form>

//                 </div>
//             </div>
//         </div>
//     );
// }

"use client";
import { postCreateUserAPi, postGoogleLoginApi } from "@/api-endpoints/authendication";
import { getCartApi, postCartCreateApi } from "@/api-endpoints/CartsApi";
import { useVendor } from "@/context/VendorContext";
import { useUser } from "@/context/UserContext";
import { auth, googleProvider } from "@/lib/firebase";
import { signInWithPopup } from "firebase/auth";
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
    const [googleLoading, setGoogleLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    
    // Password error state-kkaga idhu 👇
    const [passwordError, setPasswordError] = useState('');

    const { vendorId } = useVendor();
    const { refreshUser } = useUser();
    const router = useRouter();

    // Password-ah realtime-ah validate panna indha function
    const validatePassword = (value: string) => {
        setPassword(value);
        if (!value) {
            setPasswordError('');
            return;
        }
        
        // RegEx for 8 chars, 1 letter, and 1 special character
        const hasLetter = /[a-zA-Z]/.test(value);
        const hasSpecialChar = /[@$!%*?&]/.test(value);
        const hasValidLength = value.length >= 8;

        if (!hasValidLength) {
            setPasswordError('Password must be at least 8 characters long.');
        } else if (!hasLetter) {
            setPasswordError('Password must contain at least one letter.');
        } else if (!hasSpecialChar) {
            setPasswordError('Password must contain at least one special character (@, $, !, etc.).');
        } else {
            setPasswordError(''); // Clear error if all conditions match
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

        // Submit panrapo password validation verify panrom
        if (passwordError || password.length < 8) {
            toast.error('Please fix the password requirements.');
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
                        <span>{googleLoading ? 'Signing up with Google...' : 'Continue with Google'}</span>
                    </button>

                    <div className="auth-divider my-3 d-flex align-items-center justify-content-center" style={{ gap: "10px" }}>
                        <div style={{ flex: 1, height: '1px', backgroundColor: '#2a2d3a' }}></div>
                        <span style={{ color: '#9ca3af', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>or create with email</span>
                        <div style={{ flex: 1, height: '1px', backgroundColor: '#2a2d3a' }}></div>
                    </div>

                    <form className="auth-form" onSubmit={handleSubmit}>

                        <div className="mb-3">
                            <input
                                className="form-control"
                                placeholder="Full Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                disabled={loading || googleLoading}
                            />
                        </div>

                        <div className="mb-3">
                            <input
                                className="form-control"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={loading || googleLoading}
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
                                disabled={loading || googleLoading}
                            />
                        </div>

                        <div className="mb-3 position-relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="form-control"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => validatePassword(e.target.value)}
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
                            
                            {passwordError && (
                                <div className="text-danger small mt-1 text-left" style={{ fontSize: "12px", color: "#dc3545" }}>
                                    {passwordError}
                                </div>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="vs-btn w-100"
                            disabled={loading || googleLoading}
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
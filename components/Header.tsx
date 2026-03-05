"use client";
import { Search, ArrowUp, X, MapPin, Mail, Clock, Phone, Facebook, Twitter, Youtube, Linkedin, ChevronRight, User, ShoppingCart, Loader2 } from "lucide-react";
import { useUser } from "@/context/UserContext";
import { useCartItem } from "@/context/CartItemContext";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { useProducts } from "@/context/ProductsContext";
import { formatPrice } from "@/lib/utils";

export default function Header() {
    const { user, isAuthenticated } = useUser();
    const { cartItem } = useCartItem();
    const { products: apiData }: any = useProducts();
    const pathname = usePathname();
    const router = useRouter();
    const [cartCount, setCartCount] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearchActive, setIsSearchActive] = useState(false);
    const searchInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const items = cartItem?.data || [];
        //setCartCount(items.length);
        const total = items.reduce((acc: number, item: any) => acc + (item.quantity || 0), 0);
        setCartCount(total);
    }, [cartItem]);

    const products = apiData?.data || [];
    const filteredProducts = searchQuery.trim()
        ? products.filter((p: any) => p.name.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 8)
        : [];

    const handleSearchToggle = (e: React.MouseEvent) => {
        e.preventDefault();
        const popup = document.querySelector(".search-popup");
        if (popup) {
            const isActive = popup.classList.toggle("active");
            setIsSearchActive(isActive);
            if (isActive) {
                document.body.style.overflow = "hidden";
                document.documentElement.style.overflow = "hidden";
                setTimeout(() => searchInputRef.current?.focus(), 100);
            } else {
                document.body.style.overflow = "";
                document.documentElement.style.overflow = "";
                setSearchQuery("");
            }
        }
    };

    const handleProductClick = (productId: number) => {
        const popup = document.querySelector(".search-popup");
        if (popup) {
            popup.classList.remove("active");
            document.body.classList.remove("locked");
        }
        setSearchQuery("");
        router.push(`/shop/${productId}`);
    };

    return (
        <>
            {/* 
            <div id="preloader" className="preloader">
                <div className="animation-preloader">
                    <div className="spinner">
                    </div>
                    <div className="txt-loading">
                        <span data-text-preloader="P" className="letters-loading">
                            P
                        </span>
                        <span data-text-preloader="U" className="letters-loading">
                            U
                        </span>
                        <span data-text-preloader="B" className="letters-loading">
                            B
                        </span>
                        <span data-text-preloader="Z" className="letters-loading">
                            Z
                        </span>
                        <span data-text-preloader="I" className="letters-loading">
                            I
                        </span>
                    </div>
                    <p className="text-center">Loading</p>
                </div>
                <div className="loader">
                    <div className="row">
                        <div className="col-3 loader-section section-left">
                            <div className="bg"></div>
                        </div>
                        <div className="col-3 loader-section section-left">
                            <div className="bg"></div>
                        </div>
                        <div className="col-3 loader-section section-right">
                            <div className="bg"></div>
                        </div>
                        <div className="col-3 loader-section section-right">
                            <div className="bg"></div>
                        </div>
                    </div>
                </div>
            </div> 
            */}

            <button id="gt-back-top" className="gt-back-to-top show">
                <ArrowUp size={20} />
            </button>


            <div className="mouseCursor cursor-outer"></div>
            <div className="mouseCursor cursor-inner"></div>

            <div className="fix-area">
                <div className="info-bar-overlay" onClick={handleSearchToggle}></div>
                <div className="offcanvas__info style-2">
                    <div className="offcanvas__wrapper">
                        <div className="offcanvas__content">
                            <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                                <div className="offcanvas__logo">
                                    <Link href="/">
                                        <img src="/assets/img/logo.png" alt="logo-img" style={{ width: "150px", height: "34px" }} />
                                    </Link>
                                </div>
                                <div className="offcanvas__close">
                                    <button className="sidebar__toggle">
                                        <X size={20} color="white" />
                                    </button>
                                </div>
                            </div>
                            <p className="text d-none d-xl-block">
                                ITFixer is the Best Gaming & Editing PC Shop in Chennai, offering custom Gaming PCs, Editing Workstations, and high-performance Laptops with expert support and unbeatable prices.
                            </p>
                            <div className="mobile-menu fix mb-3"></div>
                            <div className="sideber-image">
                                <img src="https://acemagic.com/cdn/shop/collections/TANK_03-_2.jpg?v=1725597557" alt="img" />
                            </div>
                            {/* 
                            <div className="offcanvas__contact">
                                <h4>Contact Info</h4>
                                <ul>

                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <Mail size={18} />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <a href="mailto:Info@itfixer.in"><span className="mailto:Info@itfixer.in">Info@itfixer.in</span></a>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <Clock size={18} />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <a target="_blank" href="#">Mon – Sunday, 09:00 AM – 09:00 PM</a>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <Phone size={18} />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <a href="tel:+11002345909">+91 8585858768</a>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon">
                                            <MapPin size={18} />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <a target="_blank" href="#">New No 29, Old No 31 & 32, Anjugam Nagar, 1st Street, Jafferkhanpet (Opp to Kasi Theatre), Ashok Nagar, Chennai 600083.</a>
                                        </div>
                                    </li>
                                </ul>
                            </div> 
                            */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="offcanvas__overlay"></div>


            <header id="header-sticky" className="header-2">
                <div className="container-fluid">
                    <div className="mega-menu-wrapper">
                        <div className="header-main">
                            <div className="header-left">
                                <div className="header__hamburger d-xl-block my-auto">
                                    <div className="sidebar__toggle">
                                        <img src="/assets/img/logo/ber.svg" alt="" />
                                    </div>
                                </div>
                                <div className="logo">
                                    <Link href="/" className="header-logo">
                                        <img src="/assets/img/logo.png" alt="logo-img" />
                                    </Link>
                                </div>
                            </div>
                            <div className="header-right d-flex justify-content-end align-items-center mt-0">
                                <div className="mean__menu-wrapper">
                                    <div className="main-menu d-none d-xl-block">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li className={`has-dropdown menu-thumb ${pathname === "/" ? "active" : ""}`}>
                                                    <Link href="/" style={{ color: pathname === "/" ? "#CBFE1C" : "#ffffff" }}>
                                                        Home
                                                    </Link>
                                                </li>
                                                <li className={`has-dropdown d-xl-none ${pathname === "/" ? "active" : ""}`}>
                                                    <Link href="/" className="border-none" style={{ color: pathname === "/" ? "#CBFE1C" : "#ffffff" }}>
                                                        Home
                                                    </Link>
                                                </li>
                                                <li className={pathname === "/about" ? "active" : ""}>
                                                    <Link href="/about" style={{ color: pathname === "/about" ? "#CBFE1C" : "#ffffff" }}>About Us</Link>
                                                </li>
                                                <li className={pathname === "/categories" ? "active" : ""}>
                                                    <Link href="/categories" style={{ color: pathname === "/categories" ? "#CBFE1C" : "#ffffff" }}>Categories</Link>
                                                </li>
                                                <li className={`has-dropdown ${pathname === "/shop" ? "active" : ""}`}>
                                                    <Link href="/shop" style={{ color: pathname === "/shop" ? "#CBFE1C" : "#ffffff" }}>
                                                        Shop
                                                    </Link>
                                                </li>
                                                <li className={pathname === "/blog" ? "active" : ""}>
                                                    <Link href="/blog" style={{ color: pathname === "/blog" ? "#CBFE1C" : "#ffffff" }}>
                                                        Blog
                                                    </Link>
                                                </li>
                                                <li className={pathname === "/contact" ? "active" : ""}>
                                                    <Link href="/contact" style={{ color: pathname === "/contact" ? "#CBFE1C" : "#ffffff" }}>Contact Us</Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="header-right-icon bg-red-900">
                                    <button onClick={handleSearchToggle} className="main-header__search ms-3 bg-transparent border-0 p-0">
                                        <Search size={20} className="text-white cursor-pointer" />
                                    </button>

                                    <div className="header-button header-cart-btn ms-2 me-2 me-sm-3" style={{ position: 'relative' }}>
                                        <Link href={isAuthenticated ? "/cart" : "/login"} className="text-white">
                                            <ShoppingCart size={20} />
                                            {cartCount > 0 && (
                                                <span className="cart-badge">
                                                    {cartCount}
                                                </span>
                                            )}
                                        </Link>
                                    </div>

                                    {/* Login/Profile button */}
                                    <div className="header-button header-login-btn">
                                        {!isAuthenticated ? (
                                            <Link href="/login" className="theme-btn style-2">
                                                <span className="left-line"></span>
                                                Login
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M9.41099 8.46917L1.88219 16L0 14.1166L7.53013 6.58846L0.941096 0H16V15.0576L9.41099 8.46917Z" fill="#0B0E13"></path>
                                                </svg>
                                            </Link>
                                        ) : (
                                            <Link href="/profile" className="theme-btn style-2">
                                                <span className="left-line"></span>
                                                Profile
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M9.41099 8.46917L1.88219 16L0 14.1166L7.53013 6.58846L0.941096 0H16V15.0576L9.41099 8.46917Z" fill="#0B0E13"></path>
                                                </svg>
                                            </Link>
                                        )}
                                    </div>

                                    {/* User icon */}
                                    <div className="header-user-icon-mobile">
                                        <Link href={isAuthenticated ? "/profile" : "/login"} className="text-white">
                                            <User size={22} />
                                        </Link>
                                    </div>
                                    <div className="header__hamburger d-block d-xl-none my-auto">
                                        <div className="sidebar__toggle">
                                            <img src="/assets/img/logo/dot-ber.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


            <div className="search-popup">
                <div className="search-popup__overlay" onClick={handleSearchToggle}></div>
                <div className="search-popup__content">
                    <div className="search-popup__form-wrapper">
                        <form action="#" className="search-popup__form" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="text"
                                id="search"
                                name="search"
                                placeholder="Search Here"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                ref={searchInputRef}
                            />
                            <button type="submit" aria-label="search submit" className="search-btn">
                                <span> <Search size={20} className="text-black cursor-pointer" /></span>
                            </button>
                        </form>

                        {searchQuery && (
                            <div className="search-results-container bg-white mt-2 shadow-lg overflow-hidden" style={{ minWidth: '100%' }}>
                                {/* 
                                <div className="search-results-header px-3 py-2 border-bottom">
                                    <span className="text-uppercase small fw-bold text-black">Products</span>
                                </div> 
                                */}
                                <div className="search-results-list" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                                    {filteredProducts.length > 0 ? (
                                        filteredProducts.map((p: any) => (
                                            <div
                                                key={p.id}
                                                className="search-result-item d-flex align-items-center gap-3 p-3 border-bottom cursor-pointer hover-bg-light transition"
                                                onMouseEnter={() => router.prefetch(`/shop/${p.id}`)}
                                                onClick={() => handleProductClick(p.id)}
                                            >
                                                <div className="product-thumb bg-light rounded overflow-hidden" style={{ width: '60px', height: '60px', minWidth: '60px' }}>
                                                    <img
                                                        src={p.image_urls?.[0] || '/assets/img/placeholder.jpg'}
                                                        className="w-100 h-100 object-fit-cover"
                                                        alt={p.name}
                                                    />
                                                </div>
                                                <div className="product-details flex-grow-1 overflow-hidden">
                                                    <h6 className="text-dark mb-1 text-truncate fw-bold" style={{ fontSize: '15px' }}>{p.name}</h6>
                                                    <span className="text-success fw-bold" style={{ fontSize: '14px' }}>{formatPrice(p.price)}</span>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="p-4 text-center text-black">
                                            No products found matching "{searchQuery}"
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

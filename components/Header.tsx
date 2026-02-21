"use client";
import { Search, ArrowUp, X, MapPin, Mail, Clock, Phone, Facebook, Twitter, Youtube, Linkedin, ChevronRight, User, ShoppingCart } from "lucide-react";
import { useUser } from "@/context/UserContext";
import { useCartItem } from "@/context/CartItemContext";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
    const { user, isAuthenticated } = useUser();
    const { cartItem } = useCartItem();
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const items = cartItem?.data || [];
        //setCartCount(items.length);
        const total = items.reduce((acc: number, item: any) => acc + (item.quantity || 0), 0);
        setCartCount(total);
    }, [cartItem]);

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
                <div className="offcanvas__info style-2">
                    <div className="offcanvas__wrapper">
                        <div className="offcanvas__content">
                            <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                                <div className="offcanvas__logo">
                                    <a href="/">
                                        <img src="/assets/img/logo.png" alt="logo-img" style={{ width: "150px", height: "34px" }} />
                                    </a>
                                </div>
                                <div className="offcanvas__close">
                                    <button>
                                        <X size={20} />
                                    </button>
                                </div>
                            </div>
                            <p className="text d-none d-xl-block">
                                Nullam dignissim, ante scelerisque the is euismod fermentum odio sem semper the is erat, a feugiat leo urna eget eros. Duis Aenean a imperdiet risus.
                            </p>
                            <div className="mobile-menu fix mb-3"></div>
                            <div className="sideber-image">
                                <img src="/assets/img/header/sideber.jpg" alt="img" />
                            </div>
                            <div className="offcanvas__contact">
                                <h4>Contact Info</h4>
                                <ul>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon">
                                            <MapPin size={18} />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <a target="_blank" href="#">Main Street, Melbourne, Australia</a>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <Mail size={18} />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <a href="mailto:info@example.com"><span className="mailto:info@example.com">info@example.com</span></a>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <Clock size={18} />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <a target="_blank" href="#">Mod-friday, 09am -05pm</a>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <Phone size={18} />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <a href="tel:+11002345909">+11002345909</a>
                                        </div>
                                    </li>
                                </ul>
                                <div className="social-icon d-flex align-items-center">
                                    <a href="#"><Facebook size={16} /></a>
                                    <a href="#"><Twitter size={16} /></a>
                                    <a href="#"><Youtube size={16} /></a>
                                    <a href="#"><Linkedin size={16} /></a>
                                </div>
                            </div>
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
                                    <a href="/" className="header-logo">
                                        <img src="/assets/img/logo.png" alt="logo-img" />
                                    </a>
                                </div>
                            </div>
                            <div className="header-right d-flex justify-content-end align-items-center mt-0">
                                <div className="mean__menu-wrapper">
                                    <div className="main-menu">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li className="has-dropdown active menu-thumb">
                                                    <a href="/">
                                                        Home
                                                    </a>
                                                </li>
                                                <li className="has-dropdown active d-xl-none">
                                                    <a href="/" className="border-none">
                                                        Home
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/about">About Us</a>
                                                </li>
                                                {/* <li>
                                                    <a href="match-details.html">
                                                        matches
                                                    </a>
                                                    <ul className="submenu">
                                                        <li><a href="match.html">matches Page</a></li>
                                                        <li><a href="match-details.html">matches Details</a></li>
                                                    </ul>
                                                </li> */}
                                                <li className="has-dropdown">
                                                    <a href="/shop">
                                                        Shop
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/blog">
                                                        Blog
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/contact">Contact Us</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="header-right-icon bg-red-900">
                                    <a href="#" className="main-header__search ms-3 search-toggler">
                                        <Search size={20} className="text-white cursor-pointer" />
                                    </a>

                                    <div className="header-button ms-2 me-3" style={{ position: 'relative' }}>
                                        <Link href={isAuthenticated ? "/cart" : "/login"} className="text-white">
                                            <ShoppingCart size={20} />
                                            {cartCount > 0 && (
                                                <span className="cart-badge">
                                                    {cartCount}
                                                </span>
                                            )}
                                        </Link>
                                    </div>

                                    <div className="header-button">
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
                                    <div className="header__hamburger d-xl-none d-xl-block my-auto">
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
                <div className="search-popup__overlay search-toggler"></div>
                <div className="search-popup__content">
                    <form role="search" method="get" className="search-popup__form" action="#">
                        <input type="text" id="search" name="search" placeholder="Search Here..." />
                        <button type="submit" aria-label="search submit" className="search-btn">
                            <span> <Search size={20} className="text-black cursor-pointer" /></span>
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

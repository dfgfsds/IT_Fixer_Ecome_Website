import React from 'react';
import Script from 'next/script';

const Scripts = () => {
    return (
        <>
            {/* jQuery (FIRST) */}
            <Script
                src="/js/jquery-3.7.1.min.js"
                strategy="beforeInteractive"
            />

            {/* Viewport */}
            <Script
                src="/js/viewport.jquery.js"
                strategy="afterInteractive"
            />

            {/* Bootstrap */}
            <Script
                src="/js/bootstrap.bundle.min.js"
                strategy="afterInteractive"
            />

            {/* Nice Select */}
            <Script
                src="/js/jquery.nice-select.min.js"
                strategy="afterInteractive"
            />

            {/* Waypoints */}
            <Script
                src="/js/jquery.waypoints.js"
                strategy="afterInteractive"
            />

            {/* Counterup */}
            <Script
                src="/js/jquery.counterup.min.js"
                strategy="afterInteractive"
            />

            {/* Parallax */}
            <Script
                src="/js/parallaxie.js"
                strategy="afterInteractive"
            />

            {/* Swiper */}
            <Script
                src="/js/swiper-bundle.min.js"
                strategy="afterInteractive"
            />

            {/* MeanMenu */}
            <Script
                src="/js/jquery.meanmenu.min.js"
                strategy="afterInteractive"
            />

            {/* Magnific Popup */}
            <Script
                src="/js/jquery.magnific-popup.min.js"
                strategy="afterInteractive"
            />

            {/* GSAP Core */}
            <Script
                src="/js/gsap.min.js"
                strategy="afterInteractive"
            />
            <Script
                src="/js/gsap.js"
                strategy="afterInteractive"
            />

            {/* GSAP Plugins */}
            <Script
                src="/js/gsap-scroll-to-plugin.js"
                strategy="afterInteractive"
            />
            <Script
                src="/js/gsap-scroll-smoother.js"
                strategy="afterInteractive"
            />
            <Script
                src="/js/gsap-scroll-trigger.js"
                strategy="afterInteractive"
            />

            {/* SplitText */}
            <Script
                src="/js/SplitText.min.js"
                strategy="afterInteractive"
            />

            {/* SplitType */}
            <Script
                src="/js/splitType.js"
                strategy="afterInteractive"
            />

            {/* WOW */}
            <Script
                src="/js/wow.min.js"
                strategy="afterInteractive"
            />

            {/* GSAP Custom Script */}
            <Script
                src="/js/script-gsap.js"
                strategy="afterInteractive"
            />

            {/* Main JS (LAST) */}
            <Script
                src="/js/main.js"
                strategy="afterInteractive"
            />
        </>
    );
};

export default Scripts;

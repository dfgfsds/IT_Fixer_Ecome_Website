'use client';

import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

const FloatingWhatsApp: React.FC = () => {
    const pathname = usePathname();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 640);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const phoneNumber = '918585858768';
    const message = encodeURIComponent('Hello IT Fixer! I am interested in your IT services.');

    // Check if on productLandingPage slug route
    const isProductPage = pathname?.startsWith('/productLandingPage/');

    const isShiftUp = isProductPage && isMobile;

    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`floating-whatsapp ${isShiftUp ? 'shift-up' : ''}`}
            aria-label="Contact us on WhatsApp"
        >
            <FaWhatsapp size={24} />
        </a>
    );
};

export default FloatingWhatsApp;

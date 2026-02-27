"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

interface FloatingCallButtonProps {
    phoneNumber?: string;
}

export default function FloatingCallButton({
    phoneNumber = "+918585858768",
}: FloatingCallButtonProps) {
    const pathname = usePathname();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 640);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const isProductPage = pathname?.startsWith('/productLandingPage/');
    const isShiftUp = isProductPage && isMobile;

    return (
        <Link
            href={`tel:${phoneNumber}`}
            className={`floating-call ${isShiftUp ? 'shift-up' : ''}`}
            aria-label="Call Us"
        >
            <Phone size={24} />
        </Link>
    );
}

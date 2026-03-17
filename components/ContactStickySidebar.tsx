"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactStickySidebar() {
    useEffect(() => {
        if (typeof window === "undefined" || window.innerWidth <= 991) return;

        const left = document.querySelector(".contact-left-content") as HTMLElement;
        const sidebar = document.querySelector(".contact-sticky-sidebar") as HTMLElement;

        if (!left || !sidebar) return;

        const sidebarTrigger = ScrollTrigger.create({
            trigger: left,
            start: "top top+=110",
            end: () =>
                "+=" + (left.scrollHeight - sidebar.offsetHeight),
            pin: sidebar,
            pinSpacing: true,
            scrub: 0.4,
            anticipatePin: 1,
            invalidateOnRefresh: true,
        });

        return () => {
            sidebarTrigger.kill();
        };
    }, []);

    return null;
}

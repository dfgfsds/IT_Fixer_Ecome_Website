"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BlogStickySidebar() {
    useEffect(() => {
        if (window.innerWidth <= 991) return;

        const left = document.querySelector(".blog-left-content") as HTMLElement;
        const sidebar = document.querySelector(".blog-sticky-sidebar") as HTMLElement;

        if (!left || !sidebar) return;

        ScrollTrigger.create({
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

        return () => ScrollTrigger.killAll();
    }, []);

    return null;
}
"use client";
import { useEffect, useRef } from "react";
import { ShoppingCart, LayoutGrid, Phone, MessageCircle } from "lucide-react";

export default function TrendingSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx: any;
        let checkGsap: any;

        const initAnimations = () => {
            const gsap = (window as any).gsap;
            const ScrollTrigger = (window as any).ScrollTrigger;
            const SplitText = (window as any).SplitText;

            if (!gsap || !ScrollTrigger || !sectionRef.current) return false;

            gsap.registerPlugin(ScrollTrigger, SplitText);

            ctx = gsap.context(() => {
                // Section Title Animation
                const subTitle = sectionRef.current?.querySelector('.tz-sub-tilte');
                if (subTitle && SplitText) {
                    const split = new SplitText(subTitle, { type: "lines,words,chars", linesClass: "split-line" });
                    gsap.set(split.chars, { opacity: 0, x: "7" });
                    gsap.to(split.chars, {
                        scrollTrigger: {
                            trigger: subTitle,
                            start: "top 90%",
                            end: "top 60%",
                            scrub: 1,
                        },
                        x: "0",
                        opacity: 1,
                        stagger: 0.2,
                    });
                }

                const mainTitle = sectionRef.current?.querySelector('.tz-itm-title');
                if (mainTitle && SplitText) {
                    const split = new SplitText(mainTitle, { type: "lines,words,chars", linesClass: "split-line" });
                    gsap.set(split.chars, { opacity: 0.3, x: "-7" });
                    gsap.to(split.chars, {
                        scrollTrigger: {
                            trigger: mainTitle,
                            start: "top 92%",
                            end: "top 60%",
                            scrub: 1,
                        },
                        x: "0",
                        opacity: 1,
                        stagger: 0.2,
                    });
                }

                // Pinning Effect for Project Panels
                const mm = gsap.matchMedia();
                mm.add("(min-width: 768px)", () => {
                    const panels = gsap.utils.toArray(".gt-project-panel") as HTMLElement[];

                    panels.forEach((panel) => {
                        gsap.to(panel, {
                            scrollTrigger: {
                                trigger: panel,
                                pin: true,
                                scrub: 1,
                                start: 'top 100px',
                                end: "bottom 82%",
                                endTrigger: '.gt-project-area',
                                pinSpacing: false,
                                anticipatePin: 1,
                                markers: false,
                            },
                        });
                    });
                });

                // Refresh ScrollTrigger after a short delay to account for layout shifts
                setTimeout(() => {
                    ScrollTrigger.refresh();
                }, 500);

            }, sectionRef.current);

            return true;
        }

        // Poll for GSAP availability
        if (!initAnimations()) {
            checkGsap = setInterval(() => {
                if (initAnimations()) {
                    clearInterval(checkGsap);
                }
            }, 100);
        }

        // Safety cleanup for the interval
        const timeout = setTimeout(() => {
            if (checkGsap) clearInterval(checkGsap);
        }, 5000);

        return () => {
            if (checkGsap) clearInterval(checkGsap);
            if (timeout) clearTimeout(timeout);
            if (ctx) ctx.revert();
            const ScrollTrigger = (window as any).ScrollTrigger;
            if (ScrollTrigger) {
                ScrollTrigger.getAll().forEach((st: any) => st.kill());
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="trending-match-section gt-project-area fix section-padding pt-0">
            <div className="left-shape float-bob-y1">
                <img src="assets/img/home-2/match/left-shape.png" alt="img" />
            </div>
            <div className="right-shape">
                <img src="assets/img/home-2/match/right-shape.png" alt="img" />
            </div>
            <div className="container">
                <div className="section-title-2 text-center">
                    <h6 className="subtitle tz-sub-tilte tz-sub-anim  text-uppercase tx-subTitle">Top Trending Gaming Builds</h6>
                    <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">
                        Upcoming Gaming Offers
                    </h2>
                </div>
                <div className="trending-match-wrapper">
                    <div className="vec-arrow">
                        <img src="assets/img/home-2/match/vec-arrow.png" alt="img" />
                    </div>
                    <div className="linear-shape">
                        <img src="assets/img/home-2/match/linear-bg-1.png" alt="img" />
                    </div>
                    <div className="linear-shape-2">
                        <img src="assets/img/home-2/match/linear-bg-2.png" alt="img" />
                    </div>
                    <div className="trending-match-items gt-project-panel" style={{ transitionDelay: '0.2s' }}>
                        <div className="trending-match-left">
                            <div className="gt-match-logo">
                                <img src="/assets/img/Trending/1.png" alt="img" className="gt-match-thumb" />
                                <img src="assets/img/home-2/match/vs.png" alt="img" />
                                <img src="/assets/img/Trending/2.png" alt="img" className="gt-match-thumb" />
                            </div>
                            <div className="gt-watch-now-items">
                                <span>VISIT IT FIXER TODAY</span>
                                <ul className="gt-watch-now-list">
                                    <li>
                                        <a href="/shop">
                                            <ShoppingCart size={18} className="fa-brands" /> Buy Now
                                        </a>


                                        <a href="/categories">
                                            <LayoutGrid size={18} className="fa-brands" /> Categories
                                        </a>

                                    </li>

                                    <li>
                                        <a href="https://wa.me/918585858768?text=Hello%20IT%20Fixer!%20I%20am%20interested%20in%20your%20IT%20services." target="_blank" rel="noopener noreferrer">
                                            <MessageCircle size={18} className="fa-brands" /> WhatsApp
                                        </a>

                                        <a href="tel:+918585858768">
                                            <Phone size={18} className="fa-brands" /> Call Us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="trending-match-content">

                            <h3>
                                Aggressive Gaming Performance
                            </h3>
                            <p>
                                High-end gaming laptops & custom PCs built for ultra FPS, smooth streaming, and hardcore performance.
                                Perfect for gamers, creators & esports players.
                            </p>
                        </div>
                    </div>
                    <div className="trending-match-items gt-project-panel">
                        <div className="trending-match-content order-2 order-md-1">

                            <h3>
                                Gaming Laptop VS Gaming Desktop
                            </h3>
                            <p>
                                Choose between powerful gaming laptops or custom-built desktops.
                                Performance, cooling & budget — everything built your way.
                            </p>
                        </div>
                        <div className="trending-match-left order-1 order-md-2">
                            <div className="gt-match-logo">
                                <img src="/assets/img/Trending/3.png" alt="img" className="gt-match-thumb" />
                                <img src="assets/img/home-2/match/vs.png" alt="img" />
                                <img src="/assets/img/Trending/4.png" alt="img" className="gt-match-thumb" />
                            </div>
                            <div className="gt-watch-now-items">
                                <span>VISIT IT FIXER TODAY</span>
                                <ul className="gt-watch-now-list">
                                    <li>
                                        <a href="/shop">
                                            <ShoppingCart size={18} /> Buy Now
                                        </a>


                                        <a href="/categories">
                                            <LayoutGrid size={18} /> Categories
                                        </a>

                                    </li>

                                    <li>
                                        <a href="https://wa.me/918585858768?text=Hello%20IT%20Fixer!%20I%20am%20interested%20in%20your%20IT%20services." target="_blank" rel="noopener noreferrer">
                                            <MessageCircle size={18} /> WhatsApp
                                        </a>

                                        <a href="tel:+918585858768">
                                            <Phone size={18} /> Call Us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="trending-match-items bb-none gt-project-panel">
                        <div className="trending-match-left">
                            <div className="gt-match-logo">
                                <img src="/assets/img/Trending/5.png" alt="img" className="gt-match-thumb" />
                                <img src="assets/img/home-2/match/vs.png" alt="img" />
                                <img src="/assets/img/Trending/6.png" alt="img" className="gt-match-thumb" />
                            </div>
                            <div className="gt-watch-now-items">
                                <span>VISIT IT FIXER TODAY</span>
                                <ul className="gt-watch-now-list">
                                    <li>
                                        <a href="/shop">
                                            <ShoppingCart size={18} /> Buy Now
                                        </a>


                                        <a href="/categories">
                                            <LayoutGrid size={18} /> Categories
                                        </a>

                                    </li>

                                    <li>
                                        <a href="https://wa.me/918585858768?text=Hello%20IT%20Fixer!%20I%20am%20interested%20in%20your%20IT%20services." target="_blank" rel="noopener noreferrer">
                                            <MessageCircle size={18} /> WhatsApp
                                        </a>

                                        <a href="tel:+918585858768">
                                            <Phone size={18} /> Call Us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="trending-match-content">

                            <h3>
                                The Ultimate Gaming Rig
                            </h3>
                            <p>
                                Extreme performance gaming PCs & laptops designed for AAA games, competitive esports, and nonstop power.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


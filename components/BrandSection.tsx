"use client";
import { useEffect } from "react";

export default function BrandSection() {
    useEffect(() => {
        let swiperInstance: any;

        const initSwiper = () => {
            if (typeof window !== 'undefined' && (window as any).Swiper) {
                swiperInstance = new (window as any).Swiper(".brand-slider-2", {
                    observer: true,
                    observeParents: true,
                    spaceBetween: 30,
                    speed: 1300,
                    loop: true,
                    autoplay: {
                        delay: 2000,
                        disableOnInteraction: false,
                    },
                    breakpoints: {
                        1399: { slidesPerView: 7 },
                        1199: { slidesPerView: 6 },
                        991: { slidesPerView: 5 },
                        767: { slidesPerView: 4 },
                        575: { slidesPerView: 3 },
                        400: { slidesPerView: 2 },
                        0: { slidesPerView: 2 },
                    },
                });
            }
        };

        const timer = setTimeout(initSwiper, 500);

        return () => {
            clearTimeout(timer);
            if (swiperInstance && typeof swiperInstance.destroy === 'function') {
                swiperInstance.destroy(true, true);
            }
        };
    }, []);

    return (
        <div className="brand-section-2 brand-padding fix">
            <div className="container">
                <div className="swiper brand-slider-2">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="brand-image-2">
                                <img src="/assets/img/brand-logo/1.png" alt="img" />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="brand-image-2">
                                <img src="/assets/img/brand-logo/2.png" alt="img" />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="brand-image-2">
                                <img src="/assets/img/brand-logo/3.png" alt="img" />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="brand-image-2">
                                <img src="/assets/img/brand-logo/4.png" alt="img" />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="brand-image-2">
                                <img src="/assets/img/brand-logo/5.png" alt="img" />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="brand-image-2">
                                <img src="/assets/img/brand-logo/6.png" alt="img" />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="brand-image-2">
                                <img src="/assets/img/brand-logo/4.png" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

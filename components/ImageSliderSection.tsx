import { Instagram } from "lucide-react";
import Link from "next/link";

export default function ImageSliderSection() {
    return (
        <div className="instagram-section-3 fix section-padding pt-0">
            <div className="swiper instagram-slider">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="instagram-image">
                            <img src="/assets/img/home-5/instagram/instagram-01.jpg" alt="img" />
                            <Link href="/" className="icon">
                                <Instagram size={20} />
                            </Link>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="instagram-image">
                            <img src="/assets/img/home-5/instagram/instagram-02.jpg" alt="img" />
                            <Link href="/" className="icon">
                                <Instagram size={20} />
                            </Link>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="instagram-image">
                            <img src="/assets/img/home-5/instagram/instagram-03.jpg" alt="img" />
                            <Link href="/" className="icon">
                                <Instagram size={20} />
                            </Link>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="instagram-image">
                            <img src="/assets/img/home-5/instagram/instagram-04.jpg" alt="img" />
                            <Link href="/" className="icon">
                                <Instagram size={20} />
                            </Link>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="instagram-image">
                            <img src="/assets/img/home-5/instagram/instagram-05.jpg" alt="img" />
                            <Link href="/" className="icon">
                                <Instagram size={20} />
                            </Link>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="instagram-image">
                            <img src="/assets/img/home-5/instagram/instagram-06.jpg" alt="img" />
                            <Link href="/" className="icon">
                                <Instagram size={20} />
                            </Link>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="instagram-image">
                            <img src="/assets/img/home-5/instagram/instagram-07.jpg" alt="img" />
                            <Link href="/" className="icon">
                                <Instagram size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

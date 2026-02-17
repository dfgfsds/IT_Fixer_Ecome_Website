import { Instagram } from "lucide-react";

export default function ImageSliderSection() {
    return (
        <div className="instagram-section-3 fix section-padding pt-0">
            <div className="swiper instagram-slider">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="instagram-image">
                            <img src="/assets/img/home-5/instagram/instagram-01.jpg" alt="img" />
                            <a href="/" className="icon">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="instagram-image">
                            <img src="/assets/img/home-5/instagram/instagram-02.jpg" alt="img" />
                            <a href="/" className="icon">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="instagram-image">
                            <img src="/assets/img/home-5/instagram/instagram-03.jpg" alt="img" />
                            <a href="/" className="icon">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="instagram-image">
                            <img src="/assets/img/home-5/instagram/instagram-04.jpg" alt="img" />
                            <a href="/" className="icon">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="instagram-image">
                            <img src="/assets/img/home-5/instagram/instagram-05.jpg" alt="img" />
                            <a href="/" className="icon">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="instagram-image">
                            <img src="/assets/img/home-5/instagram/instagram-06.jpg" alt="img" />
                            <a href="/" className="icon">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="instagram-image">
                            <img src="/assets/img/home-5/instagram/instagram-07.jpg" alt="img" />
                            <a href="/" className="icon">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

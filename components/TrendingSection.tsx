import { ShoppingCart, LayoutGrid, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
export default function TrendingSection() {
    return (
        <section className="trending-match-section gt-project-area fix section-padding pt-5">
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
                                        <Link href="/shop">
                                            <ShoppingCart size={18} className="fa-brands" /> Buy Now
                                        </Link>


                                        <Link href="/categories">
                                            <LayoutGrid size={18} className="fa-brands" /> Categories
                                        </Link>

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
                                        <Link href="/shop">
                                            <ShoppingCart size={18} /> Buy Now
                                        </Link>


                                        <Link href="/categories">
                                            <LayoutGrid size={18} /> Categories
                                        </Link>

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
                                        <Link href="/shop">
                                            <ShoppingCart size={18} /> Buy Now
                                        </Link>


                                        <Link href="/categories">
                                            <LayoutGrid size={18} /> Categories
                                        </Link>

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
    )
}
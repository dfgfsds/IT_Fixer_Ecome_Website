import { Home } from "lucide-react";

export default function ContactHeroSection() {
    return (
        <div className="gt-breadcrumb-wrapper bg-cover" style={{ backgroundImage: "url('/assets/img/breadcrumb.png')" }}>
            <div className="gt-left-shape">
                <img src="/assets/img/shape-1.png" alt="img" />
            </div>
            <div className="gt-right-shape">
                <img src="/assets/img/shape-2.png" alt="img" />
            </div>
            <div className="gt-blur-shape">
                <img src="/assets/img/breadcrumb-shape.png" alt="img" />
            </div>
            <div className="container">
                <div className="gt-page-heading">
                    <div className="gt-breadcrumb-sub-title">
                        <h1 className="wow fadeInUp" data-wow-delay=".3s">Contact Us</h1>
                    </div>
                    <ul className="gt-breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                        <li>
                            <Home size={16} />
                        </li>
                        <li>
                            <a href="/">
                                home :
                            </a>
                        </li>
                        <li className="color">
                            Contact Us
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
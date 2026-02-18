import { Home } from "lucide-react";

interface PolicyHeroProps {
    title: string;
    date?: string;
}

export default function PolicyHero({ title, date }: PolicyHeroProps) {
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
                        <h1 className="wow fadeInUp" data-wow-delay=".3s">{title}</h1>
                        {date && <p className="wow fadeInUp mt-3 text-white" data-wow-delay=".4s">Effective Date: {date}</p>}
                    </div>
                    {/* <ul className="gt-breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                        <li>
                            <Home size={16} />
                        </li>
                        <li>
                            <a href="/">
                                home :
                            </a>
                        </li>
                        <li className="color">
                            {title}
                        </li>
                    </ul> */}
                </div>
            </div>
        </div>
    )
}

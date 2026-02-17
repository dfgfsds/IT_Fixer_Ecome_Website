import Link from "next/link";

export default function BlogTriggerSection() {
    return (
        <section className="cta-contact-section">
            <div className="container">
                <div className="cta-wrapper">
                    <div className="content wow fadeInUp" data-wow-delay=".3s">
                        <p>Pull the Trigger!</p>
                        <h3>
                            Let’s Bring Your <br />
                            Vision To Life
                        </h3>
                    </div>
                    <div className="cta-image wow fadeInUp" data-wow-delay=".5s">
                        <img src="/assets/img/home-1/cta-img.png" alt="img" />
                    </div>
                    <div className="contact-right wow fadeInUp" data-wow-delay=".7s">
                        <div className="contact-info">
                            <h3>call us</h3>
                            <p><a href="tel:+91032145609870">+91 0321 4560 9870</a></p>
                        </div>
                        <Link href="/contact" className="theme-btn">
                            get started
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
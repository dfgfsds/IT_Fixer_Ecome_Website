import PolicyHero from "@/components/PolicyHero";
import PolicyContent from "@/components/PolicyContent";
import { Metadata } from "next";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Shipping Policy | ITFixer – Fast & Secure Delivery for Gaming PCs",
        description:
            "Read ITFixer’s Shipping Policy for fast delivery, safe packaging, and reliable dispatch of gaming PCs, custom builds, and PC components across India.",

        robots: "index, follow",
        keywords:
            "ITFixer shipping policy, delivery policy, gaming PC delivery, custom PC shipping Chennai, PC components shipping India, fast dispatch",

        alternates: {
            canonical: "https://www.itfixer.in/shipping-policy",
        },
        openGraph: {
            type: "website",
            title: "Shipping Policy | IT Fixer India",
            description:
                "Learn about IT Fixer shipping timelines, delivery process, and service areas across India.",
            url: "https://www.itfixer.in/shipping-policy",
            siteName: "IT Fixer",
            images: [
                {
                    url: "https://www.itfixer.in/assets/img/logo.png",
                    width: 1200,
                    height: 630,
                    alt: "Shipping Policy IT Fixer",
                },
            ],
            locale: "en_IN",
        },
        twitter: {
            card: "summary_large_image",
            title: "Shipping Policy | IT Fixer",
            description:
                "Check delivery timelines, shipping process, and service availability across India.",
            images: ["https://www.itfixer.in/assets/img/logo.png"],
        },
        other: {
            image_src: "https://www.itfixer.in/assets/img/logo.png",
        },
    };
}


export default function ShippingPolicyPage() {
    return (
        <div>
            <Script
                id="schema-organization"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "ITFixer",
                        "url": "https://www.itfixer.in",
                        "logo": "https://www.itfixer.in/assets/img/logo.png",
                        "description":
                            "ITFixer is Chennai’s trusted gaming PC store specializing in custom PC builds, high-performance desktops, repairs, and technical support.",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress":
                                "New No.29, Old No.31 & 32, Anjugam Nagar, 1st Street, Jafferkhanpet (Opp. Kasi Theatre), Ashok Nagar",
                            "addressLocality": "Chennai",
                            "postalCode": "600083",
                            "addressRegion": "Tamil Nadu",
                            "addressCountry": "IN",
                        },
                        "telephone": "+91 8585858768",
                        "email": "info@itfixer.in",
                        "sameAs": [
                            "https://www.facebook.com/itfixer7",
                            "https://www.instagram.com/it__fixer/",
                            "https://www.youtube.com/@Itfixer_fix-it-fast",
                            "https://www.linkedin.com/company/it-fixer-gaming/about/",
                            "https://x.com/itfixer7",
                        ],
                    }),
                }}
            />
            <div id="smooth-content">
                <PolicyHero title="Shipping & Delivery Policy – ITFixer" date="March 11, 2025" />
                <section className="policy-section fix">
                    <div className="container">
                        <div className="privacy-policy-wrapper">
                            <div className="content-area wow fadeInUp" data-wow-delay=".7s">
                                <div className="wow fadeInUp" data-wow-delay=".3s">
                                    <p>At IT Fixer, we are committed to delivering your orders promptly and securely. Below are our shipping and delivery terms.</p>
                                </div>

                                <div className="policy-group wow fadeInUp" data-wow-delay=".4s">
                                    <h3>Shipping Locations</h3>
                                    <p>We ship to all serviceable areas within India and internationally, depending on courier availability.</p>
                                    <p>Please contact us to confirm if your location is eligible for delivery.</p>
                                </div>

                                <div className="policy-group wow fadeInUp" data-wow-delay=".5s">
                                    <h3>Processing Time</h3>
                                    <p>Orders are processed within 1–2 business days after payment confirmation.</p>
                                    <p>Orders placed on weekends or public holidays will be processed on the next business day.</p>
                                </div>

                                <div className="policy-group wow fadeInUp" data-wow-delay=".6s">
                                    <h3>Estimated Delivery Time</h3>
                                    <ul>
                                        <li>Domestic Orders (India): 3–7 business days</li>
                                        <li>International Orders: 7–21 business days</li>
                                    </ul>
                                    <p>Delivery times may vary due to external factors such as weather conditions, courier delays, or customs clearance.</p>
                                </div>

                                <div className="policy-group wow fadeInUp" data-wow-delay=".7s">
                                    <h3>Shipping Charges</h3>
                                    <p>Shipping charges are calculated during checkout based on the order weight, package size, and delivery location.</p>
                                    <p>From time to time, free shipping offers or promotional shipping discounts may be available.</p>
                                </div>

                                <div className="policy-group wow fadeInUp" data-wow-delay=".8s">
                                    <h3>Tracking Information</h3>
                                    <p>Once your order has been shipped, tracking details will be shared via email or SMS, allowing you to monitor the delivery status.</p>
                                </div>

                                <div className="policy-group wow fadeInUp" data-wow-delay=".9s">
                                    <h3>Shipping Partners</h3>
                                    <p>We work with trusted courier partners such as Delhivery, Blue Dart, India Post, and other reliable logistics providers to ensure safe and timely delivery.</p>
                                </div>

                                <div className="policy-group wow fadeInUp" data-wow-delay="1.0s">
                                    <h3>Delayed or Failed Deliveries</h3>
                                    <p>If you experience any issues with delivery, please contact us at <a href="mailto:info@itfixer.in">info@itfixer.in</a>.</p>
                                    <p>Our team will assist you in resolving the issue as quickly as possible.</p>
                                </div>

                                <div className="policy-group wow fadeInUp" data-wow-delay="1.1s">
                                    <h3>Incorrect Address</h3>
                                    <p>Please ensure that the shipping address provided during checkout is accurate and complete.</p>
                                    <p>IT Fixer is not responsible for delivery delays or lost packages caused by incorrect or incomplete address information.</p>
                                </div>

                                <div className="policy-group wow fadeInUp" data-wow-delay="1.2s">
                                    <h3>Contact Us</h3>
                                    <p>If you have any questions regarding shipping or delivery, please contact us:</p>
                                    <div className="contact-details">
                                        <p>
                                            <strong>IT Fixer</strong>
                                            <br />
                                            Operated by Sigmah Enterprises
                                            <br />
                                            <br />
                                            Email: <a href="mailto:info@itfixer.in">info@itfixer.in</a><br />
                                            Phone: <a href="tel:+918585858768" >+91 8585858768</a><br />
                                            Address: <span>
                                                New No.29, Old No.31 &amp; 32, Anjugam Nagar<br />
                                                1st Street, Jafferkhanpet (Opp to Kasi Theatre)<br />
                                                Ashok Nagar, Chennai – 600083<br />
                                                Tamil Nadu, India
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

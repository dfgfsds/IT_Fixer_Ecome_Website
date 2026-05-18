import PolicyHero from "@/components/PolicyHero";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Terms & Conditions | IT Fixer",
        description:
            "Read the Terms & Conditions for using IT Fixer website, products, and services.",
        alternates: {
            canonical: "https://www.itfixer.in/terms-and-conditions",
        },
        openGraph: {
            type: "website",
            title: "Terms & Conditions | IT Fixer",
            description:
                "Read the Terms & Conditions for using IT Fixer website, products, and services.",
            url: "https://www.itfixer.in/terms-and-conditions",
            siteName: "IT Fixer",
            images: [
                {
                    url: "https://www.itfixer.in/assets/img/logo.png",
                    width: 1200,
                    height: 630,
                    alt: "Terms & Conditions IT Fixer",
                },
            ],
            locale: "en_IN",
        },
        twitter: {
            card: "summary_large_image",
            title: "Terms & Conditions | IT Fixer",
            description:
                "Read IT Fixer terms and conditions for products, services, orders, and website usage.",
            images: ["https://www.itfixer.in/assets/img/logo.png"],
        },
    };
}

export default function TermsAndConditionsPage() {
    return (
        <div>
            <div id="smooth-content">
                <PolicyHero
                    title="Terms & Conditions"
                    date="May 18, 2026"
                />

                <section className="policy-section fix">
                    <div className="container">
                        <div className="privacy-policy-wrapper">
                            <div
                                className="content-area wow fadeInUp"
                                data-wow-delay=".7s"
                            >
                                <div
                                    className="wow fadeInUp"
                                    data-wow-delay=".3s"
                                >
                                    <p>
                                        Welcome to IT Fixer, operated by Sigmah
                                        Enterprises. These Terms &amp;
                                        Conditions govern your use of our
                                        website, products, and services. By
                                        accessing our website or placing an
                                        order with IT Fixer, you agree to comply
                                        with and be bound by the following
                                        terms.
                                    </p>
                                </div>

                                <div
                                    className="policy-group wow fadeInUp"
                                    data-wow-delay=".4s"
                                >
                                    <h3>Use of Website</h3>

                                    <p>
                                        By using our website, you agree to use
                                        it only for lawful purposes and in
                                        accordance with these Terms &amp;
                                        Conditions.
                                    </p>

                                    <p>You must not:</p>

                                    <ul>
                                        <li>
                                            Use the website for fraudulent or
                                            unlawful activities
                                        </li>
                                        <li>
                                            Attempt to gain unauthorized access
                                            to our systems or servers
                                        </li>
                                        <li>
                                            Introduce viruses, malware, or
                                            harmful code
                                        </li>
                                        <li>
                                            Copy, distribute, or misuse website
                                            content without permission
                                        </li>
                                    </ul>

                                    <p>
                                        We reserve the right to restrict or
                                        terminate access to users who violate
                                        these terms.
                                    </p>
                                </div>

                                <div
                                    className="policy-group wow fadeInUp"
                                    data-wow-delay=".5s"
                                >
                                    <h3>Products &amp; Services</h3>

                                    <p>
                                        IT Fixer provides gaming PCs,
                                        custom-built systems, computer hardware,
                                        accessories, peripherals, laptop
                                        solutions, repair services, and
                                        IT-related products and services.
                                    </p>

                                    <p>
                                        All products and services are subject
                                        to:
                                    </p>

                                    <ul>
                                        <li>Availability</li>
                                        <li>Technical compatibility</li>
                                        <li>
                                            Manufacturer support and warranty
                                            policies
                                        </li>
                                    </ul>

                                    <p>We reserve the right to:</p>

                                    <ul>
                                        <li>
                                            Modify product specifications,
                                            pricing, or availability at any time
                                        </li>
                                        <li>
                                            Discontinue products or services
                                            without prior notice
                                        </li>
                                        <li>
                                            Refuse service in situations
                                            involving misuse, abuse, or
                                            suspicious activity
                                        </li>
                                    </ul>
                                </div>

                                <div
                                    className="policy-group wow fadeInUp"
                                    data-wow-delay=".6s"
                                >
                                    <h3>Pricing &amp; Payments</h3>

                                    <p>
                                        All prices listed on the website are in
                                        Indian Rupees (INR) and are subject to
                                        change without prior notice.
                                    </p>

                                    <p>
                                        Orders will be processed only after
                                        successful payment confirmation. We
                                        accept payments through approved payment
                                        gateways and banking channels available
                                        on our website.
                                    </p>

                                    <p>IT Fixer is not responsible for:</p>

                                    <ul>
                                        <li>Payment gateway failures</li>
                                        <li>Banking delays</li>
                                        <li>
                                            Transaction issues caused by
                                            third-party providers
                                        </li>
                                    </ul>
                                </div>

                                <div
                                    className="policy-group wow fadeInUp"
                                    data-wow-delay=".7s"
                                >
                                    <h3>Orders &amp; Order Acceptance</h3>

                                    <p>
                                        Once an order is placed, customers will
                                        receive an order confirmation based on
                                        the information provided during
                                        checkout.
                                    </p>

                                    <p>We reserve the right to:</p>

                                    <ul>
                                        <li>
                                            Cancel or refuse any order at our
                                            discretion
                                        </li>
                                        <li>
                                            Reject orders suspected of fraud or
                                            unauthorized activity
                                        </li>
                                        <li>
                                            Limit quantities purchased per
                                            customer or order
                                        </li>
                                    </ul>

                                    <p>
                                        In case of cancellation initiated by IT
                                        Fixer, eligible refunds will be
                                        processed as per our Refund Policy.
                                    </p>
                                </div>

                                <div
                                    className="policy-group wow fadeInUp"
                                    data-wow-delay=".8s"
                                >
                                    <h3>Shipping &amp; Delivery</h3>

                                    <p>
                                        Shipping timelines may vary depending on
                                        product availability, location, courier
                                        services, and custom build requirements.
                                    </p>

                                    <p>
                                        While we strive to ensure timely
                                        delivery, IT Fixer is not liable for
                                        delays caused by:
                                    </p>

                                    <ul>
                                        <li>
                                            Courier or logistics providers
                                        </li>
                                        <li>
                                            Natural disasters or unforeseen
                                            events
                                        </li>
                                        <li>
                                            Government restrictions or transport
                                            issues
                                        </li>
                                    </ul>

                                    <p>
                                        Customers are responsible for providing
                                        accurate shipping details.
                                    </p>
                                </div>

                                <div
                                    className="policy-group wow fadeInUp"
                                    data-wow-delay=".9s"
                                >
                                    <h3>Warranty &amp; Support</h3>

                                    <p>
                                        Warranty coverage varies depending on
                                        the product brand and manufacturer
                                        policies.
                                    </p>

                                    <p>
                                        Custom-built systems may include service
                                        support provided by IT Fixer under
                                        specified terms. Physical damage, liquid
                                        damage, electrical surges, unauthorized
                                        repairs, or misuse are not covered under
                                        warranty.
                                    </p>

                                    <p>
                                        Customers are advised to review
                                        individual product warranty details
                                        before purchase.
                                    </p>
                                </div>

                                <div
                                    className="policy-group wow fadeInUp"
                                    data-wow-delay="1.0s"
                                >
                                    <h3>Intellectual Property</h3>

                                    <p>
                                        All website content including:
                                    </p>

                                    <ul>
                                        <li>Logos</li>
                                        <li>Images</li>
                                        <li>Graphics</li>
                                        <li>Product descriptions</li>
                                        <li>Website design</li>
                                        <li>Text and branding</li>
                                    </ul>

                                    <p>
                                        are the intellectual property of IT
                                        Fixer and Sigmah Enterprises and may not
                                        be copied, reproduced, or distributed
                                        without written permission.
                                    </p>
                                </div>

                                <div
                                    className="policy-group wow fadeInUp"
                                    data-wow-delay="1.1s"
                                >
                                    <h3>Limitation of Liability</h3>

                                    <p>
                                        IT Fixer shall not be held liable for:
                                    </p>

                                    <ul>
                                        <li>
                                            Indirect or consequential damages
                                        </li>
                                        <li>Data loss</li>
                                        <li>Business interruption</li>
                                        <li>
                                            Hardware or software incompatibility
                                            issues
                                        </li>
                                        <li>
                                            Delays caused by third-party
                                            services
                                        </li>
                                    </ul>

                                    <p>
                                        Our maximum liability shall not exceed
                                        the amount paid for the purchased
                                        product or service.
                                    </p>
                                </div>

                                <div
                                    className="policy-group wow fadeInUp"
                                    data-wow-delay="1.2s"
                                >
                                    <h3>Third-Party Links</h3>

                                    <p>
                                        Our website may contain links to
                                        third-party websites or services. IT
                                        Fixer is not responsible for the
                                        content, policies, or practices of
                                        external websites.
                                    </p>
                                </div>

                                <div
                                    className="policy-group wow fadeInUp"
                                    data-wow-delay="1.3s"
                                >
                                    <h3>
                                        Changes to Terms &amp; Conditions
                                    </h3>

                                    <p>
                                        We reserve the right to update or modify
                                        these Terms &amp; Conditions at any time
                                        without prior notice.
                                    </p>

                                    <p>
                                        Continued use of the website after
                                        changes are posted constitutes
                                        acceptance of the updated terms.
                                    </p>
                                </div>

                                <div
                                    className="policy-group wow fadeInUp"
                                    data-wow-delay="1.4s"
                                >
                                    <h3>Contact Information</h3>

                                    <div className="contact-details">
                                        <p>
                                            <strong>IT Fixer</strong>
                                            <br />
                                            Operated by Sigmah Enterprises
                                            <br />
                                            <br />
                                            Email:{" "}
                                            <a href="mailto:info@itfixer.in">
                                                info@itfixer.in
                                            </a>
                                            <br />
                                            Phone:{" "}
                                            <a href="tel:+918585858768">
                                                +91 8585858768
                                            </a>
                                            <br />
                                            <br />
                                            Address:
                                            <br />
                                            <span>
                                                New No 29, Old No 31 &amp; 32,
                                                Anjugam Nagar
                                                <br />
                                                1st Street, Jafferkhanpet (Opp
                                                to Kasi Theatre)
                                                <br />
                                                Ashok Nagar, Chennai – 600083
                                                <br />
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
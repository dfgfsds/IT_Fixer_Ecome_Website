import PolicyHero from "@/components/PolicyHero";
import Script from "next/script";

export async function generateMetadata() {
    return {
        title: "Privacy Policy | ITFixer – Secure Data Protection & User Privacy",
        description:
            "Read ITFixer’s Privacy Policy to understand how we protect your data, ensure secure transactions, and maintain complete user confidentiality.",

        robots: "index, follow",
        keywords:
            "ITFixer privacy policy, data protection, user privacy, secure browsing, gaming pc shop privacy, Chennai IT privacy policy",

        alternates: {
            canonical: "https://www.itfixer.in/privacy-policy",
        },

        openGraph: {
            type: "website",
            url: "https://www.itfixer.in/privacy-policy",
            title: "Privacy Policy | IT Fixer Secure Shopping",
            description:
                "Learn how IT Fixer protects your personal data and ensures secure online transactions.",
            siteName: "IT Fixer",
            locale: "en_IN",
            images: [
                {
                    url: "https://www.itfixer.in/assets/img/logo.png",
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: "Privacy Policy | IT Fixer",
            description:
                "Understand how your data is protected and securely handled by IT Fixer.",
            images: ["https://www.itfixer.in/assets/img/logo.png"],
        },
    };
}

export default function PrivacyPolicyPage() {
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
                            "ITFixer is Chennai’s trusted gaming PC store providing custom PC builds, high-performance desktops, repairs and expert tech support.",
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
                <PolicyHero title="Privacy Policy  –  ITFixer" date="May 18, 2026" />

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
                                        IT Fixer, operated under Sigmah
                                        Enterprises (&quot;IT Fixer,&quot;
                                        &quot;we,&quot; &quot;our,&quot; or
                                        &quot;us&quot;), values your privacy and
                                        is committed to protecting the personal
                                        information you share with us. This
                                        Privacy Policy explains how we collect,
                                        use, store, and protect your information
                                        when you visit our website, purchase
                                        products, or interact with our services.
                                    </p>
                                </div>

                                <div
                                    className="policy-group wow fadeInUp"
                                    data-wow-delay=".4s"
                                >
                                    <h3>Information We Collect</h3>

                                    <h4>Personal Information</h4>
                                    <p>
                                        We may collect personal details
                                        including:
                                    </p>

                                    <ul>
                                        <li>Full Name</li>
                                        <li>Email Address</li>
                                        <li>Phone Number</li>
                                        <li>Billing &amp; Shipping Address</li>
                                        <li>
                                            Company Name (if applicable)
                                        </li>
                                    </ul>

                                    <h4>Payment Information</h4>
                                    <p>
                                        Payments made on our website are
                                        processed securely through trusted
                                        third-party payment gateways. We do not
                                        store your debit/credit card details on
                                        our servers.
                                    </p>

                                    <h4>Account &amp; Order Information</h4>
                                    <p>
                                        When you create an account or place an
                                        order, we may collect:
                                    </p>

                                    <ul>
                                        <li>Login credentials</li>
                                        <li>Order history</li>
                                        <li>Wishlist or saved preferences</li>
                                        <li>
                                            Service requests and support
                                            interactions
                                        </li>
                                    </ul>

                                    <h4>
                                        Device &amp; Website Usage Information
                                    </h4>
                                    <p>
                                        We may automatically collect certain
                                        technical information, including:
                                    </p>

                                    <ul>
                                        <li>IP Address</li>
                                        <li>Browser Type</li>
                                        <li>Device Information</li>
                                        <li>Operating System</li>
                                        <li>Website pages visited</li>
                                        <li>Date and time of access</li>
                                        <li>
                                            Referral source and analytics data
                                        </li>
                                    </ul>

                                    <h4>Communication Information</h4>
                                    <p>
                                        Any messages, inquiries, reviews,
                                        feedback, or support requests submitted
                                        through our website, email, WhatsApp, or
                                        social media channels may be stored for
                                        customer support and service improvement
                                        purposes.
                                    </p>
                                </div>

                                <div
                                    className="policy-group wow fadeInUp"
                                    data-wow-delay=".5s"
                                >
                                    <h3>How We Use Your Information</h3>

                                    <p>We use your information to:</p>

                                    <ul>
                                        <li>Process and deliver orders</li>
                                        <li>
                                            Provide technical support and
                                            customer service
                                        </li>
                                        <li>
                                            Respond to inquiries and service
                                            requests
                                        </li>
                                        <li>
                                            Send order confirmations, invoices,
                                            and updates
                                        </li>
                                        <li>
                                            Improve our website, products, and
                                            customer experience
                                        </li>
                                        <li>
                                            Detect fraudulent or unauthorized
                                            activities
                                        </li>
                                        <li>
                                            Comply with legal obligations
                                        </li>
                                        <li>
                                            Send promotional offers and
                                            marketing communications (only with
                                            your consent)
                                        </li>
                                    </ul>
                                </div>

                                <div
                                    className="policy-group wow fadeInUp"
                                    data-wow-delay=".6s"
                                >
                                    <h3>Sharing of Information</h3>

                                    <p>
                                        We may share your information with
                                        trusted third parties, including:
                                    </p>

                                    <ul>
                                        <li>Payment gateway providers</li>
                                        <li>
                                            Courier and shipping partners
                                        </li>
                                        <li>
                                            Hosting and technical service
                                            providers
                                        </li>
                                        <li>
                                            Marketing and analytics platforms
                                        </li>
                                        <li>
                                            Legal authorities when required by
                                            law
                                        </li>
                                    </ul>

                                    <p>
                                        We do not sell, trade, or rent your
                                        personal information to third parties.
                                    </p>
                                </div>

                                <div
                                    className="policy-group wow fadeInUp"
                                    data-wow-delay=".7s"
                                >
                                    <h3>
                                        Cookies &amp; Tracking Technologies
                                    </h3>

                                    <p>
                                        Our website may use cookies and similar
                                        technologies to enhance browsing
                                        experience, remember preferences, and
                                        analyze website traffic.
                                    </p>

                                    <p>
                                        You may disable cookies through your
                                        browser settings; however, some website
                                        features may not function properly after
                                        disabling them.
                                    </p>
                                </div>

                                <div
                                    className="policy-group wow fadeInUp"
                                    data-wow-delay=".8s"
                                >
                                    <h3>Data Security</h3>

                                    <p>
                                        We implement reasonable administrative,
                                        technical, and physical safeguards to
                                        protect your personal information from
                                        unauthorized access, misuse, alteration,
                                        or disclosure.
                                    </p>

                                    <p>
                                        While we strive to use commercially
                                        acceptable means to protect your data,
                                        no method of transmission over the
                                        internet is completely secure.
                                    </p>
                                </div>

                                <div
                                    className="policy-group wow fadeInUp"
                                    data-wow-delay=".9s"
                                >
                                    <h3>Your Rights</h3>

                                    <p>You may have the right to:</p>

                                    <ul>
                                        <li>
                                            Access your personal information
                                        </li>
                                        <li>
                                            Correct inaccurate or outdated data
                                        </li>
                                        <li>
                                            Request deletion of your data
                                        </li>
                                        <li>
                                            Withdraw consent for marketing
                                            communications
                                        </li>
                                        <li>
                                            Request a copy of your stored
                                            information
                                        </li>
                                    </ul>

                                    <p>
                                        To exercise any of these rights, contact
                                        us using the details provided below.
                                    </p>
                                </div>

                                <div
                                    className="policy-group wow fadeInUp"
                                    data-wow-delay="1.0s"
                                >
                                    <h3>Third-Party Websites</h3>

                                    <p>
                                        Our website may contain links to
                                        third-party websites or services. We are
                                        not responsible for the privacy
                                        practices, content, or policies of those
                                        external websites.
                                    </p>
                                </div>

                                <div
                                    className="policy-group wow fadeInUp"
                                    data-wow-delay="1.1s"
                                >
                                    <h3>Children&apos;s Privacy</h3>

                                    <p>
                                        Our services are not intended for
                                        children under 13 years of age. We do
                                        not knowingly collect personal
                                        information from minors without parental
                                        or guardian consent.
                                    </p>
                                </div>

                                <div
                                    className="policy-group wow fadeInUp"
                                    data-wow-delay="1.2s"
                                >
                                    <h3>
                                        Changes to This Privacy Policy
                                    </h3>

                                    <p>
                                        We reserve the right to modify or update
                                        this Privacy Policy at any time. Any
                                        changes will be posted on this page with
                                        the revised effective date.
                                    </p>
                                </div>

                                <div
                                    className="policy-group wow fadeInUp"
                                    data-wow-delay="1.3s"
                                >
                                    <h3>Contact Us</h3>

                                    <p>
                                        If you have any questions, concerns, or
                                        requests regarding this Privacy Policy,
                                        please contact:
                                    </p>

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
                                                New No.29, Old No.31 &amp; 32,
                                                <br />
                                                Anjugam Nagar, 1st Street,
                                                <br />
                                                Jafferkhanpet (Opp. Kasi
                                                Theatre),
                                                <br />
                                                Ashok Nagar, Chennai – 600083,
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
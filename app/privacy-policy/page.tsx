import PolicyHero from "@/components/PolicyHero";

export async function generateMetadata() {
    return {
        title: "Privacy Policy | IT Fixer",
        description:
            "Read how IT Fixer protects your personal data and ensures secure transactions.",

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
            <div id="smooth-content">
                <PolicyHero title="Privacy Policy" date="March 11, 2025" />
                <section className="policy-section fix">
                    <div className="container">
                        <div className="privacy-policy-wrapper">
                            <div className="content-area wow fadeInUp" data-wow-delay=".7s">
                                <div className="wow fadeInUp" data-wow-delay=".3s">
                                    <p>IT Fixer (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, interact with us, or use our services.</p>
                                </div>

                                <div className="policy-group wow fadeInUp" data-wow-delay=".4s">
                                    <h3>Information We Collect</h3>
                                    <p>We may collect the following types of information:</p>

                                    <h4>Contact Information</h4>
                                    <p>Name, email address, phone number, billing address, and shipping address.</p>

                                    <h4>Payment Information</h4>
                                    <p>Payment details are processed securely through trusted third-party payment processors.</p>

                                    <h4>Account Information</h4>
                                    <p>Login credentials, user ID, and account preferences when you create an account on our platform.</p>

                                    <h4>Device and Usage Information</h4>
                                    <p>IP address, browser type, device information, pages visited, and other analytics data.</p>

                                    <h4>Communication Data</h4>
                                    <p>Feedback, inquiries, support requests, surveys, or messages sent to our support team.</p>
                                </div>

                                <div className="policy-group wow fadeInUp" data-wow-delay=".5s">
                                    <h3>How We Use Your Information</h3>
                                    <p>We use the collected information to:</p>
                                    <ul>
                                        <li>Process and fulfill your orders</li>
                                        <li>Provide customer service and technical support</li>
                                        <li>Send order confirmations, updates, and service notifications</li>
                                        <li>Send promotional emails or offers (only if you opt in)</li>
                                        <li>Improve our website, products, and services</li>
                                        <li>Detect and prevent fraud or unauthorized activities</li>
                                    </ul>
                                </div>

                                <div className="policy-group wow fadeInUp" data-wow-delay=".6s">
                                    <h3>Sharing of Information</h3>
                                    <p>We may share your information with:</p>
                                    <ul>
                                        <li>Service providers such as payment gateways, shipping partners, and hosting providers</li>
                                        <li>Legal authorities when required by law or legal process</li>
                                        <li>Business transfers, such as mergers, acquisitions, or asset sales</li>
                                    </ul>
                                    <p>We do not sell or rent your personal information to third parties.</p>
                                </div>

                                <div className="policy-group wow fadeInUp" data-wow-delay=".7s">
                                    <h3>Cookies and Tracking Technologies</h3>
                                    <p>Our website may use cookies and similar technologies to improve user experience and analyze website traffic.</p>
                                    <p>You can manage or disable cookies through your browser settings.</p>
                                </div>

                                <div className="policy-group wow fadeInUp" data-wow-delay=".8s">
                                    <h3>Data Security</h3>
                                    <p>We implement appropriate technical and organizational security measures to protect your personal information.</p>
                                    <p>However, no method of data transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
                                </div>

                                <div className="policy-group wow fadeInUp" data-wow-delay=".9s">
                                    <h3>Your Rights and Choices</h3>
                                    <p>You have the right to:</p>
                                    <ul>
                                        <li>Access your personal data</li>
                                        <li>Correct inaccurate information</li>
                                        <li>Request deletion of your personal data</li>
                                        <li>Opt out of marketing communications</li>
                                        <li>Request data portability where applicable</li>
                                    </ul>
                                    <p>For any such requests, please contact us at <a href="mailto:info@itfixer.in">info@itfixer.in</a>.</p>
                                </div>

                                <div className="policy-group wow fadeInUp" data-wow-delay="1.0s">
                                    <h3>Third-Party Links</h3>
                                    <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites.</p>
                                </div>

                                <div className="policy-group wow fadeInUp" data-wow-delay="1.1s">
                                    <h3>Children&apos;s Privacy</h3>
                                    <p>Our services are not intended for children under the age of 13, and we do not knowingly collect personal data from children without parental consent.</p>
                                </div>

                                <div className="policy-group wow fadeInUp" data-wow-delay="1.2s">
                                    <h3>Changes to This Privacy Policy</h3>
                                    <p>We may update this Privacy Policy from time to time. The latest version will always be posted on this page with the updated effective date.</p>
                                </div>

                                <div className="policy-group wow fadeInUp" data-wow-delay="1.3s">
                                    <h3>Contact Us</h3>
                                    <p>If you have any questions regarding this Privacy Policy, please contact us:</p>
                                    <div className="contact-details">
                                        <p>
                                            Email: <a href="mailto:info@itfixer.in">info@itfixer.in</a><br />
                                            Phone: <a href="tel:+918585858768" >+91 8585858768</a><br />
                                            Address: <span>
                                                New No 29, Old No 31 &amp; 32, Anjugam Nagar<br />
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

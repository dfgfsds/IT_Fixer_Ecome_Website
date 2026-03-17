import PolicyHero from "@/components/PolicyHero";
import PolicyContent from "@/components/PolicyContent";

export default function TermsAndConditionsPage() {
    return (
        <div>
            <div id="smooth-content">
                <PolicyHero title="Terms & Conditions" date="March 11, 2025" />
                <section className="policy-section fix">
                    <div className="container">
                        <div className="privacy-policy-wrapper">
                            <div className="content-area wow fadeInUp" data-wow-delay=".7s">
                                <div className="wow fadeInUp" data-wow-delay=".3s">
                                    <p>Welcome to IT Fixer. These Terms and Conditions outline the rules and regulations for using our website and services.</p>
                                    <p>By accessing this website and placing an order, you agree to be bound by these terms.</p>
                                </div>

                                <div className="policy-group wow fadeInUp" data-wow-delay=".4s">
                                    <h3>Use of Our Website</h3>
                                    <p>You agree to use our website only for lawful purposes and in a way that does not violate the rights of others or restrict their use of the website.</p>
                                    <p>You must not misuse the website by knowingly introducing viruses, malware, or other harmful material.</p>
                                </div>

                                <div className="policy-group wow fadeInUp" data-wow-delay=".5s">
                                    <h3>Products and Services</h3>
                                    <p>IT Fixer offers computer hardware, accessories, and technical services. All products are subject to availability.</p>
                                    <p>We reserve the right to modify or discontinue products or services at any time without prior notice.</p>
                                </div>

                                <div className="policy-group wow fadeInUp" data-wow-delay=".6s">
                                    <h3>Pricing and Payments</h3>
                                    <p>All prices listed on our website are in Indian Rupees (INR).</p>
                                    <p>We reserve the right to change product prices without prior notice.</p>
                                    <p>Payments must be completed before order processing and shipping.</p>
                                </div>

                                <div className="policy-group wow fadeInUp" data-wow-delay=".7s">
                                    <h3>Order Acceptance</h3>
                                    <p>We reserve the right to refuse or cancel any order if fraud or unauthorized transactions are suspected.</p>
                                </div>

                                <div className="policy-group wow fadeInUp" data-wow-delay=".8s">
                                    <h3>Intellectual Property</h3>
                                    <p>All content on this website including text, images, logos, and graphics are the property of IT Fixer and may not be used without permission.</p>
                                </div>

                                <div className="policy-group wow fadeInUp" data-wow-delay=".9s">
                                    <h3>Limitation of Liability</h3>
                                    <p>IT Fixer will not be liable for any indirect or incidental damages arising from the use of our products or services.</p>
                                </div>

                                <div className="policy-group wow fadeInUp" data-wow-delay="1.0s">
                                    <h3>Changes to Terms</h3>
                                    <p>We may update these Terms & Conditions from time to time. Continued use of the website means you accept those changes.</p>
                                </div>

                                <div className="policy-group wow fadeInUp" data-wow-delay="1.1s">
                                    <h3>Contact Information</h3>
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

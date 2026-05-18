import PolicyHero from "@/components/PolicyHero";
import PolicyContent from "@/components/PolicyContent";

export default function RefundPolicyPage() {
    return (
        <div>
            <div id="smooth-content">
                <PolicyHero title="Refund & Cancellation Policy" date="March 11, 2025" />
                <section className="policy-section fix">
                    <div className="container">
                        <div className="privacy-policy-wrapper">
                            <div className="content-area wow fadeInUp" data-wow-delay=".7s">
                                <div className="wow fadeInUp" data-wow-delay=".3s">
                                    <p>At IT Fixer, we strive to provide the best quality products and services.</p>
                                </div>

                                <div className="policy-group wow fadeInUp" data-wow-delay=".4s">
                                    <h3>Order Cancellation</h3>
                                    <p>Orders can be canceled within 12 hours of placing the order if they have not been shipped.</p>
                                    <p>To cancel, email us at <a href="mailto:info@itfixer.in">info@itfixer.in</a> with your order number.</p>
                                </div>

                                <div className="policy-group wow fadeInUp" data-wow-delay=".5s">
                                    <h3>Refund Eligibility</h3>
                                    <p>Refunds are applicable only if:</p>
                                    <ul>
                                        <li>Product is defective</li>
                                        <li>Product is damaged</li>
                                        <li>Wrong product delivered</li>
                                    </ul>
                                    <p>You must notify us within 48 hours of receiving the product.</p>
                                </div>

                                <div className="policy-group wow fadeInUp" data-wow-delay=".6s">
                                    <h3>Refund Process</h3>
                                    <p>Send refund request to <a href="mailto:info@itfixer.in">info@itfixer.in</a> with:</p>
                                    <ul>
                                        <li>Order number</li>
                                        <li>Issue description</li>
                                        <li>Photos or video of the problem</li>
                                    </ul>
                                    <p>Approved refunds will be processed within 7–10 business days.</p>
                                </div>

                                <div className="policy-group wow fadeInUp" data-wow-delay=".7s">
                                    <h3>Non-Refundable Items</h3>
                                    <ul>
                                        <li>Customized products</li>
                                        <li>Digital products</li>
                                        <li>Items returned without packaging</li>
                                    </ul>
                                </div>

                                <div className="policy-group wow fadeInUp" data-wow-delay=".8s">
                                    <h3>Exchange Policy</h3>
                                    <p>Exchanges are allowed only for damaged or defective items.</p>
                                </div>

                                <div
                                    className="policy-group wow fadeInUp"
                                    data-wow-delay="1.3s"
                                >
                                    <h3>Contact Us</h3>

                                    <p>
                                        If you have any questions, concerns, or
                                        requests regarding this Refund & Cancellation Policy,
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

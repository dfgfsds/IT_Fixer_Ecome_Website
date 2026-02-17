export default function ConatctFormSection() {
    return (
        <section className="gt-contact-us-section section-padding fix">
            <div className="container">
                <div className="gt-contact-us-wrapper">
                    <div className="row g-4">
                        <div className="col-lg-8">
                            <div className="gt-comment-form-wrap">
                                <h4>We're Here to Help!</h4>
                                <p>Your email address will not be published. Required fields are marked *</p>
                                <form action="contact.php" id="contact-form" method="POST">
                                    <div className="row g-4">
                                        <div className="col-lg-6">
                                            <div className="form-clt">
                                                <span>Your Name</span>
                                                <input type="text" name="name" id="name" placeholder="Your Name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-clt">
                                                <span>Your Email</span>
                                                <input type="text" name="email" id="email6" placeholder="Your Email" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-clt">
                                                <span>write message</span>
                                                <textarea name="message" id="message" placeholder="Type your message"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <button type="submit" className="theme-btn boder-10">
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="gt-contact-bg bg-cover" style={{ backgroundImage: "url(assets/img/inner-page/match-details/bg.jpg)" }}>
                                <div className="gt-contact-content">
                                    <h3>Need Any Help</h3>
                                    <p>Nees Any Help, Call Us  24/7 Full Support</p>
                                    <div className="gt-contact-item">
                                        <div className="gt-icon">
                                            <i className="fa-solid fa-phone"></i>
                                        </div>
                                        <ul className="gt-list">
                                            <li><span>Call Us:</span></li>
                                            <li><a href="tel:+0094382229540">+009 438 222 9540</a></li>
                                        </ul>
                                    </div>
                                    <div className="gt-contact-item">
                                        <div className="gt-icon">
                                            <i className="fa-regular fa-envelope"></i>
                                        </div>
                                        <ul className="gt-list">
                                            <li><span>Mail Us</span></li>
                                            <li><a href="infor@xridergamil.com">
                                                infor@xridergamil.com
                                            </a></li>
                                        </ul>
                                    </div>
                                    <div className="gt-contact-item mb-0">
                                        <div className="gt-icon">
                                            <i className="fa-solid fa-location-dot"></i>
                                        </div>
                                        <ul className="gt-list">
                                            <li><span>Location:</span></li>
                                            <li>Toronto, Montreal, City</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="gt-bg-image">
                                <img src="assets/img/inner-page/contact-bg.jpg" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
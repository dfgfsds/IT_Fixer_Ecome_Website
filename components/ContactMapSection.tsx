export default function ContactMapSection() {
    return (
        <div className="gt-map-section fix">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="gt-map-items">
                            <div className="googpemap">
                                <iframe
                                    src="https://www.google.com/maps?q=T%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu&output=embed"
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}